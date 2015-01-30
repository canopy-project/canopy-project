Canopy Meta Client Specification
===============================================================================

This document is a meta guide for developing new Canopy clients.  The
motivation is to encourage a consistent set of concepts, terminology, objects,
and processes across all programming languages that support Canopy.  Secondly,
we wish to eliminate the distinction between "device clients" and "application
clients".  The result will be reduced effort for developers to learn Canopy,
and improved guidance for developers creating Canopy client libraries for
additional languages.


Note About Asynchronous Operations
-------------------------------------------------------------------------------

The Client performs many operations that involve HTTP or WebSocket transactions
that may take some time.  We handle these operations differently in C as
compared to Javascript because:

 - It is easy to block the current thread in C, but callbacks are tricky.
 - Callbacks are easy in Javascript, but it is difficult to block the current
 thread.


For languages that support blocking, most operations will block until the
operation completes or times out.

For languages that work better with callbacks, most operations will accept a
callback parameter.


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

DEVICE QUERY

    Represents a collection of devices.

CLOUD VARIABLE

    Represents a Cloud Variable.



Overview of methods
-------------------------------------------------------------------------------

    --------------------------------------------------------
    | MODULE canopy                                        |
    --------------------------------------------------------
    | PUBLIC METHODS                                       |
    |                                                      |
    | initClient(settings)                                 | --> Client
    | initDeviceClient(settings, function(Error, Device))  | --> Client
    | initUserClient(settings, function(Error, Account))   | --> Client
    --------------------------------------------------------

    ------------------------------------------------------
    | CLASS Client                                       |
    ------------------------------------------------------
    | PUBLIC METHODS                                     |
    |                                                    |
    | account(usernameOrEmail, function(Error, Account)) |
    | accounts()                                         | -> AccountQuery
    | authenticatedAccount(function(Error, Account))     |
    | authenticatedDevice(function(Error, Device))       |
    | device(id, function(Error, Device))                |
    | devices(filters)                                   | -> DeviceQuery
    | me(function(Error, Account))                       |
    ------------------------------------------------------

    ----------------------------------------------
    | CLASS Device                               |
    ----------------------------------------------
    | PUBLIC METHODS                             |
    |                                            |
    | client()                                   | -> Client
    | connectionStatus())                        | -> string
    | friendlyName()                             | -> string
    | id()                                       | -> UUID (string)
    | isActive())                                | -> bool
    | isInactive())                              | -> bool
    | isConnected())                             | -> bool
    | isDisconnected())                          | -> bool
    | isNeverConnected())                        | -> bool
    | isNewlyCreated())                          | -> bool
    | locationNote()                             | -> string
    | lastActivitySecondsAgo())                  | -> number
    | lastActivityTime())                        | -> datetime (string?)
    | refresh(function(Error))                   | -> string
    | sddl()                                     | -> SDDLVar
    | secretKey()                                | -> string
    | sync(function(Error))                      | -> string
    | update(params, function(Error))            |
    | vars()                                     | -> varList
    ----------------------------------------------

    ----------------------------------------------------------------
    | CLASS DeviceQuery                                            |
    ----------------------------------------------------------------
    | PUBLIC METHODS                                               |
    |                                                              |
    | count(filters, function(Error, cnt)                          | -> number
    | filter(filters))                                             |
    | get(indexOrId, function(Error, Device))                      |
    | getMany(startIndex, endIndex, function(Error, ListOfDevice)) |
    | refresh()                                                    |
    ----------------------------------------------------------------

    ----------------------------------------------
    | CLASS Account                              |
    ----------------------------------------------
    | PUBLIC METHODS                             |
    |                                            |
    | device(id, function(Error, Device))        |
    | devices(filters)                           | -> DeviceQuery
    | emailAddress()                             | -> string
    | isActivated()                              | -> bool
    | quotas()                                   | -> object
    | username()                                 | -> string
    | update(params, function(Error)             | -> string
    ----------------------------------------------

    ----------------------------------------------------------------
    | CLASS AccountQuery                                           |
    ----------------------------------------------------------------
    | PUBLIC METHODS                                               |
    |                                                              |
    | count(filters, function(Error, cnt)                          | -> number
    | filter(filters))                                             |
    | get(indexOrId, function(Error, Account))                     |
    | getMany(startIndex, endIndex, function(Error, ListOfAccts))  |
    | refresh()                                                    |
    ----------------------------------------------------------------

CLIENT METHODS
-------------------------------------------------------------------------------

    CanopyInitClient -       Generic CLIENT Initialization
    CanopyInitDeviceClient - Initialize CLIENT and return authenticated DEVICE
    CanopyInitUserClient -   Initialize CLIENT and return authenticated ACCOUNT
    Devices -                Get list of all devices you have access to.

### CLIENT Initialization (Generic)

The `CanopyInitClient()` routine creates a new CLIENT object and initializes it
based on the provided configuration settings.  Does not communicate with the
server.  Returns `null` if initialization failed.

Javascript:

    client = CanopyInitClient({
        "server" : "sandbox.canopy.link",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true,
        ...
    });

C:

    CanopyClient client = canopy_init_client(
        CANOPY_SERVER, "sandbox.canopy.link",
        CANOPY_HTTP_PORT, 8080,
        CANOPY_HTTPS_PORT, 443,
        CANOPY_USE_HTTPS, true,
        ...
    );

Python:

    client = CanopyInitClient({
        "server" : "sandbox.canopy.link",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true,
        ...
    })


The following initialization options are supported:

| Option                | Type             | Default                    |
|-----------------------|------------------|----------------------------|
| "auth-username"       | string or null   | null                       |
| "auth-password"       | string or null   | null                       |
| "auth-device-id"      | string or null   | null                       |
| "auth-device-secret"  | string or null   | null                       |
| "auth-type"           | string           | "basic"                    |
| "server"              | string           | "sandbox.canopy.link"      |
| "http-port"           | int              | 80                         |
| "https-port"          | int              | 443                        |
| "use-https"           | bool             | true                       |


The `"auth-username"` and `"auth-password"` options must be provided to access
the REST API as a User Account.  The `"auth-device-id"` and
`"auth-device-secret"` options must be provided to access the REST API as a
Device Account.


### CLIENT Initialization (Device Client)

For convenience the `CanopyInitDeviceClient()` routine is provided, which
creates a CLIENT and returns the authenticated DEVICE.  This is a
blocking/async method.

Javascript:

    client = CanopyInitDeviceClient({
        "server" : "sandbox.canopy.link",
        "auth-device-id" : "48028402480248",
        "auth-device-secret" : "292806062506",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true,
        onDone: function(result, device) {
        }
    });

C:
    CanopyDevice device;
    CanopyClient client = canopy_init_device_client(&device,
        CANOPY_SERVER, "sandbox.canopy.link",
        CANOPY_AUTH_DEVICE_ID, "48028402480248",
        CANOPY_AUTH_DEVICE_SECRET, "292806062506",
        CANOPY_HTTP_PORT, 8080,
        CANOPY_HTTPS_PORT, 443,
        CANOPY_USE_HTTPS, true
    );

Python:
    client, device = CanopyInitDeviceClient(
        "server" : "sandbox.canopy.link",
        "auth-device-id" : "48028402480248",
        "auth-device-secret" : "292806062506",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true
    );


For Javascript, this routine is equivalent to:

    client = CanopyInitClient(params);
    client.getAuthenticatedDevice({
        onDone: function(result, device) {
            if (params.onDone)
                params.onDone(result, device);
        }
    })

### CLIENT Initialization (User Client)

For convenience the `CanopyInitUserClient()` routine is provided, which
creates a CLIENT and returns the authenticated ACCOUNT.  This is a
blocking/async method.

Javascript:

    client = CanopyInitUserClient({
        "server" : "sandbox.canopy.link",
        "auth-username" : "myUsername",
        "auth-password" : "myPassword",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true,
        onDone: function(result, acct) {
        }
    });

C:
    CanopyAccount acct;
    CanopyClient client = canopy_init_user_client(&acct,
        CANOPY_SERVER, "sandbox.canopy.link",
        CANOPY_AUTH_DEVICE_ID, "48028402480248",
        CANOPY_AUTH_DEVICE_SECRET, "292806062506",
        CANOPY_HTTP_PORT, 8080,
        CANOPY_HTTPS_PORT, 443,
        CANOPY_USE_HTTPS, true
    );

Python:
    client, acct = CanopyInitDeviceClient(
        "server" : "sandbox.canopy.link",
        "auth-username" : "myUsername",
        "auth-password" : "myPassword",
        "http-port" : 8080,
        "https-port" : 443,
        "use-https" : true,
    );

For Javascript, this routine is equivalent to:

    client = CanopyInitClient(params);
    client.getMe({
        onDone: function(result, acct) {
            if (params.onDone)
                params.onDone(result, device);
        }
    })
### List Devices

The Client's `.devices()` method returns a DEVICE QUERY object that includes all
devices that the authenticated ACCOUNT has access to.

Javascript:

    // Create query that gets all devices
    devices = canopy.devices();

    // Create a filtered device query
    devices = canopy.devices({ "connected" : true });

    // Filter an existing device query
    filtered = devices.filter({ "connected" : true });

    // Count devices (ASYNC).
    canopy.devices().count(function(cnt) { alert(cnt); });

    // Fetch a particular device object by index (ASYNC)
    canopy.devices().get(0, function(dev) { alert(dev.uuid()) });

    // Fetch a particular device object by UUID (ASYNC)
    canopy.devices().get("984802...", function(dev) { alert(dev.uuid()) });

    // Fetch multiple device objects by range (ASYNC)
    canopy.devices().getMany(0, 10, function(devs) {  alert(devs.length) });



C:

    // Create query that selects all devices.
    CanopyDeviceQuery dq = canopy_devices(canopy); 

    // Create a filtered device query.
    CanopyDeviceQuery dq = canopy_devices(canopy, CANOPY_DEVICE_CONNECTED, true); 

    // Filter an existing device query
    canopy_device_query_filter(dq, CANOPY_DEVICE_CONNECTED, true); 

    // Count devices (BLOCKING).
    cnt = canopy_device_query_count(dq);

    // Fetch a particular device object by index (BLOCKING).
    CanopyDevice device = canopy_device_query_get(dq, 0);

    // Fetch a particular device object by UUID (BLOCKING).
    CanopyDevice device = canopy_device_query_get_by_id(dq, "48024380...");

    // Fetch a range of device objects (BLOCKING).
    CanopyDevice devicesArray[10];
    canopy_device_query_get_many(dq, 0, 10, &numFetched, devicesArray);

    // Free device query when finished.
    canopy_device_query_free(dq);








------------------------------------------------------------------------------
Notes:

    CanopyClient canopy = canopy_init_client(
        CANOPY_SERVER, "sandbox.canopy.link",
        CANOPY_AUTH_DEVICE_ID, "782073280",
        CANOPY_AUTH_DEVICE_SECRET, "3920372903790",
        CANOPY_HTTP_PORT, 8080,
        CANOPY_HTTPS_PORT, 443,
        CANOPY_USE_HTTPS, true
    );

    CanopyDevice device = canopy_lookup_device(canopy, NULL);
    canopy_device_wait_for_ready(device, -1);

    canopy.Device()


    canopy.Devices();
