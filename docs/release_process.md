Release Process
-------------------------------------------------------------------------------

** Add tags**

For each repo participating in the release:

Merge all changes into master

    git merge origin/feature-0.9.2-integration

Create annotated tag from master

    git tag -a v15.04.03 -m "Canopy Server version 15.04.03"

Push changes

    git push origin master

Push tag

    git push origin v15.04.03

** Update project website **

    ssh canopy.link
    cd ~/clones/canopy-project
    git pull
    cp -r ~/clones/canopy-project/www/* ~/www/canopy.link

** Generate canopy-server Release Packages **

    ./create_src_pkg.sh

This will generate the files:
    
    canopy-server_15.04.03-1_amd64.deb
    canopy-server_15.04.03.src.tar.gz

Copy these to code.canopy.link:

    scp canopy-server_*_amd64.deb canopy-server_*.src.tar.gz canopy.link:~/www/code.canopy.link/canopy-server/

** Generate canopy-js-client Release Packages **

Login to server and create appropriate subdirectory.
Update "latest" symbol link:

    rm latest
    ln -s vXX.YY.ZZ latest

BAck on the build system:

    scp -r canopy.js canopy.link:~/www/code.canopy.link/js/v15.04.03/canopy.js

** Generate canopy-device-mgr Release Packages **

    ./create_src_pkg.sh

    scp  canopy-server_15.04.03.src.tar.gz canopy.link:~/www/code.canopy.link/device-mgr/

Login to server and create appropriate subdirectory, then:

    scp -r canopy.js canopy.link:~/www/code.canopy.link/js/v15.04.03/canopy.js
** Create release page **

Currently this involves manually editing release.html in canopy-project.
