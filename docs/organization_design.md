An Organization represents an entity (such as a company) that has USER members
and can create/access DEVICES.

ORGANIZATION names share a namespace and validation criteria with USER names.

Within an organization you can assign USERS to TEAMS.  A TEAM is essentially a
set of USERS.

You can then grant access to DEVICES within an ORGANIZATION by granting
permission for that TEAM.

For example, if there are three organizations "Brand", "Odm", "Support Company"
    A single device may be accessible to:
        John Doe (the individual who purchased the product)
        Brand: "Data Scientists"
        Odm: "Firmware Engineers"
        Support_Company: "Support Technicians"

Eventually, these permissions will be set at the per-cloud-variable level.

For now, TEAMS are simple strings.

There are two special TEAMS:
    "__members__" includes all organization members
    "__owners__" includes organization owners



-------------------------------------------------------------------------------
Permissions:

Canopy has a hierarchical permission model, for efficient-yet-flexible policy
creation.

User, (Org0:Team0), (Org1:Team1)

Permissions(User, Device) {
    // User-Device permission?
    
    // Team-Device permission for any of the teams that User belongs to?
}







CLOUD VARIABLES & ROLES

Each Cloud variable can be granted access to:

    1) All Users with access to the device.
    2) Only Users with access to the device AND one of these roles:
        (comma-separated list of roles)

ROLES are assigned:
    per-user-per-device
    per-team-per-device
    per-user-per-device-group
    per-team-per-device-group
