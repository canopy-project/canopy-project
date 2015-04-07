We need to efficiently support the following operations across millions of
devices:

    1) Filtering (by cloud var)
    2) Sorting
    3) Counting
    4) Scanning w/ Pagination


Approach:
    
    Subspace  ID
        temperature: 0-100
        humidity: 0-100
        rssi: 0-100
        latitude: 0-100
        longitude: 0-100
        bagel_mode: 0-1
        channel: 0-7
        cnt: 1023
        
    Subspace
        temperature: 0-100
        humidity: 0-100
        rssi: 0-100
        latitude: 0-100
        longitude: 0-100
        bagel_mode: 0-1
        channel: 0-7
        cnt: 1023


Variable Set:
    Remove
    Insert

Variable Remove:
    if internal:
        find child with correct subspace ranges
    
