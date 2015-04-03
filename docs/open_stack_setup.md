From horizon interface:


** Launch Instance **

    Instances->Launch Instance
        DETAILS:
            Instance Name: myinstance
            Flavor: GP2-Large
            Instance Boot Source: Boot From Image
            Image Name: trusty-server-cloudimg-amd64-disk1.2015-01-2l7
        ACCESS & SECURITY:
            Keypair: greg-canopy
        NETWORKING:
            Selected Networks: canopy-priv-net-01

        LAUNCH


** Install apache **

    sudo apt-get -y update
    sudo apt-get -y upgrade
    sudo apt-get install -y apache2

** Install canopy *ca*

CONFIGURING PROXY
-------------------------------------------------------------------------------

** Launch Instance **
    Instances->Launch Instance
        DETAILS:
            Instance Name: canopy-proxy
            Flavor: GP2-Medium
            Instance Boot Source: Boot From Image
            Image Name: trusty-server-cloudimg-amd64-disk1.2015-01-2l7
        ACCESS & SECURITY:
            Keypair: greg-canopy
        NETWORKING:
            Selected Networks: canopy-priv-net-01

        LAUNCH

        
** Associate Floating IP **

    Instances->Actions->More->Associate Floating IP
        Click "+"
        Allocate IP
        Associate

** Install apache **

    sudo apt-get -y update
    sudo apt-get -y upgrade
    sudo apt-get install -y apache2

** Configure apache **

Enable mod_proxy:

    sudo a2enmode ssl
    sudo a2enmode proxy
    sudo a2enmode proxy_balancer
    sudo a2enmode proxy_http

Configure apache to act as a reverse proxy for all hostnames we want to handle.

    sudo /etc/apache2/sites-available/mysite.conf

Put this into the file:

    <VirtualHost mysite.com>
        ProxyPreserveHost On
        ProxyPass / http://your-ip-address
        ProxyPassReverse / http://your-ip-address
    </VirtualHost>

Enable your site:

    a2ensite mysite.com

Restart apache:

    sudo service apache2 restart
