Example:

    {
        "condition" : {
            "type" : "or",
            "terms" : [
                {
                    "type" : "gt",
                    "var" : "humidity",
                    "value" : "105.8",
                }, {
                    "type" : "gt",
                    "var" : "temperature",
                    "value" : "108.8",
                }
            ]
        },
        "response" : {
            "type" : "email",
            "who" : "greg@canopy.link",
        }
    }


Condition types:

    "or"
    "and"
    "xor"
    "implies"
    "not"
    "gt" (var, var) or (var, value)
    "gte" (var, var) or (var, value)
    "lt" (var, var) or (var, value)
    "lte" (var, var) or (var, value)
    "eq" (var, var) or (var, value)
    "ne" (var, var) or (var, value)
    "in-range" (var, var/value, var/value)
    "outside-range" (var, var/value, var/value)

Reponse types:

    "email" (address, device owner)
    "sms" (phone)
    "log-event"


WORK TO BE DONE:

SERVER
    - Add rules CF
    - Add device-rules FK
    - Add rule processor
    - Tirgger rules processor

APP
    - Create rules.
    - Assign rules to devices.
