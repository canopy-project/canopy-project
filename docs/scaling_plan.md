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
