Canopy Meta Client Specification
===============================================================================

This document is a meta guide for developing new Canopy clients.  The
motivation is to encourage a consistent set of concepts, terminology, objects,
and processes across all programming languages that support Canopy.  Secondly,
we wish to eliminate the distinction between "device clients" and "application
clients".  The result will be reduced effort for developers to learn Canopy,
and improved guidance for developers creating Canopy client libraries for
additional languages.


Public Objects
-------------------------------------------------------------------------------

A Canopy Client Library (the "Client") must support the following public
objects:

CLIENT

    Represents the outermost container object that represents the Client.  Also
    represents the connection to the server.

CLIENT CONFIG

    Represents configuration options.

ACCOUNT

    Represents an account.  This may be an End User Account or a Device
    Account.

ACCOUNT LIST

    Represents a collection of accounts.

DEVICE

    Represents a phsyical device.

DEVICE LIST

    Represents a collection of devices.

CLOUD VARIABLE

    Represents a Cloud Variable.




CLIENT METHODS
-------------------------------------------------------------------------------

### CLIENT Initialization

The `CanopyInitClient` routine creates a new CLIENT object and initializes it
based on the provided configuration settings.  Does not communicate with the
server.  Returns NULL if initialization failed.

Javascript:

    canopy = CanopyInitClient({
        "server" : "sandbox.canopy.link",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true
    });

C:

    CanopyClient canopy = canopy_init_client(
        CANOPY_SERVER, "sandbox.canopy.link",
        CANOPY_HTTP_PORT, 8080,
        CANOPY_HTTPS_PORT, 443,
        CANOPY_USE_HTTPS, true
    );

Python:

    canopy = CanopyInitClient({
        "server" : "sandbox.canopy.link",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true
    })



