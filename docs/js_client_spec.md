Copyright 2015 SimpleThings, Inc.
This work is licensed under the Creative Commons Attribution 4.0 International
License. To view a copy of this license, visit
http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative
Commons, PO Box 1866, Mountain View, CA 94042, USA.

Overview of methods
-------------------------------------------------------------------------------

    --------------------------------------------------------
    | MODULE canopy                                        |
    --------------------------------------------------------
    | PUBLIC METHODS                                       |
    |                                                      |
    | initContext(settings)                                | --> Context
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

MODULE canopy
===============================================================================

FUNCTION canopy.initClient
-------------------------------------------------------------------------------

    client = canopy.initClient(settings)


