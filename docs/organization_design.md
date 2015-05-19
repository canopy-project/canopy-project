An Organization represents an entity (such as a company) that has USER members
and can create/access DEVICES.

ORGANIZATION names share a namespace and validation criteria with USER names.

Within an organization, you can define ROLES, and assign USERS to TEAMS.  A
TEAM is essentially a set of USERS.

You can then grant access to DEVICES within an ORGANIZATION by granting
permission for that TEAM.

For example, if there are three organizations "Brand", "Odm", "Support Company"
    A single device may be accessible to:
        John Doe (the individual who purchased the product)
        Brand:"Data Scientists"
        Odm:"Firmware Engineers"
        Support_Company:"Support Technicians"

Eventually, these permissions will be set at the per-cloud-variable level.

For now, TEAMS are simple strings.

There are two special TEAMS:
    "__members__" includes all organization members
    "__owners__" includes organization owners
