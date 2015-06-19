
For wireless WAN settings:

    {
        "var_decl" : {
            "out struct wlan[]" : {
                "out string freq" : {},
                "out struct stations{string}" : {
                    "out float32 rssi" : {}
                },
            }
        },

        "wlan" : [
            {
                "freq" : "2.4Ghz",
                "stations": {
                    "A1B2C3D4E5F6" : {
                        "rssi" : -17.05,
                    },
                    "AABBCC001122" : {
                        "rssi" : -14.05,
                    }
                }
            },
            {
                "freq" : "5Ghz",
                "stations": {
                    "A0B0C0D0E0F0" : {
                        "rssi" : -17.05,
                    },
                }
            }
        ]
    }



For crash log:

    {
        "var_decl" : {
            "out string crash_event" : {}
        },

        "crash_event" : "hello.c:89\nmain.c:149"
    }


For wifi scan:

    {
        "var_decl" : {
            "out struct wifi_scan_results[]" : {
                "out string ssid" : {},
                "out int8 channel" : {},
                "out string mac" : {},
                "out string phy_protocol" : {},
                "out float32 rssi" : {}
            }
        },

        "wifi_scan_results" : [
            {
                "ssid" : "GuestNet",
                "channel" : 8,
                "mac" : "AABBCCDDEEFF",
                "phy_protocol" : "802.11n",
                "rssi" : -74,
            }
        ]
    }


For speed test results:

    {
        "var_decl" : {
            "out struct internet_speed_test_results" : {
                "out float32 ping_secs" : {},
                "out string server" : {},
                "out float32 avg_upload_mbps" : {},
                "out float32 avg_download_mbps" : {}
            }
        },

        "internet_speed_test_results" : {
            "ping_secs" : 0.014,
            "server" : "23.16.38.105",
            "avg_upload_mbps" : 8.04,
            "avg_download_mbps" : 42.03
        }
    }
