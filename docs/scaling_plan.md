Canopy Scaling Plan
===============================================================================

We need to demonstrate that Canopy is a highly scalable platform.  This
document outlines our plan to incrementally achieve scaling milestones,
starting with 1000 Connected Devices and ending with 100M Connected Devices.


Goals
-------------------------------------------------------------------------------
For each milestone, we must demonstrate:

 - *Availability*: Is the system robust to instances going down?  No single point of failure?
 - *Performance*: All requests take < 100ms
 - *Reliability*: Are data changes consistent?
 - *Scalability*: Is the deployment easy to scale to 2X the size if
   load/bandwidth/storage exceeds 50% capacity?
 - *Manageability*: Is the deployment easy to manage?
 - *Cost*: Does computing, bandwidth & storage cost < $0.25 per device per
 year?
 - *UIUX*: Can user effectively manage this many devices in our device manager?
 year?


1000 Connected Devices
-------------------------------------------------------------------------------

*Availability* and *Scalability*:

 - Configure & Run Cassandra across 2 instances.
 - Configure & Run canopy-server across 2 instances.
 - Use OpenStack Load-Balancer-as-a-Service w/ Source IP persistance
 - Update canopy configuration

*Performance*:

 - Write performance benchmarks & scalability tests.

*Reliability*:

 - Not a problem since we don't cache data.

*Manageability*:

 - Need scripts for common operations.

*Cost*:

 - Not a problem because servers are free for now.

*UIUX*:

 - Need pagination and limits on most requests.
 - Device manager UIUX improvements.

DATA DENORMALIZATION / FILTERING / SORTING
-------------------------------------------------------------------------------

We need to assume massive #s of devices (10+ million) that need to be
filtered/sorted.

First step is filtering by permissions.  Some users may have access to an
extremely small # of devices.  Other users may have access to a huge # of
devices (for example, Sys Admin).

    RoleID : [DeviceID : {permissions}]

The problem with this is that the row may contain 10M+ columns if they have
access to all devices.  We need second level of filtering:

    RoleID|Var|Value



N-ary Tree w/ Cassandra


    Provide 0th byte:
        RoleID|Var|

    If small # of objects, the results will be contained in there:
        {
            001: Foo,
            005: Bar,
            107: Baz,
            309: Qux,
        }

    If more than 1000 objects, the results will be contain in sub trees:
        RoleID|
        {
            0: "KEY0",
            1: "KEY1"
        }

KD-TREE APPROACH

Filtering, Sorting, Counting distributed multi-dimensional data using KD-Trees
with Cassandra.

Store data as KD-Tree

Rules:

1) If a node contains < 2048 elements, store the elements in that node.
2) If a node contains >= 4096 elements, split into 4 children.  Pick two
partitioner 
