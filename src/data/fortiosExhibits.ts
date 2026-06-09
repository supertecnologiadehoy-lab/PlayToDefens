export const FORTIOS_EXHIBITS: Record<number, string> = {
  3: `FortiGate # diagnose debug rating
Locale       : english
Service      : Web-filter
Status       : Enable
...
Num. of servers : 1
Protocol     : https
Port         : 8888
Anycast      : Disable
Weight       : 10`,
  9: `FortiGate # config system global
FortiGate (global) # set av-failopen one-shot
FortiGate (global) # end
FortiGate # diagnose hardware sysinfo conserve
memory conserve mode: on
total RAM: 2048 MB
memory used: 1950 MB`,
  15: `FortiGate # get system ha status
HA Health Status: OK
Model: FortiGate-VM64
Mode: HA A-P
Group: 10
...
Primary: HQ-NGFW-1, uptime: 10 days
Secondary: HQ-NGFW-2, uptime: 10 days

--- Admin Updates ---
HQ-NGFW-1:
config system ha
    set priority 90
    set override disable
end

HQ-NGFW-2:
config system ha
    set priority 110
    set override enable
end`,
  20: `FortiGate # diagnose test application ipsmonitor 1
ipsengine count: 0 (pending: 0)
ipsengine configuration:
  ...`,
  27: `FortiGate (HQ-NGFW-1) # get system performance status
CPU states: 20% user 0% system 0% nice 80% idle
Memory: 2048M total, 1500M used
Uptime: 55s

FortiGate (HQ-NGFW-2) # get system performance status
CPU states: 10% user 0% system 0% nice 90% idle
Memory: 2048M total, 800M used
Uptime: 55s`,
  30: `FortiGate # get system performance status
CPU states: 90% user 5% system 0% nice 5% idle
Memory: 2048M total, 1900M used (92%)
Uptime: 10 days

FortiGate # config system global
FortiGate (global) # get | grep memory
memory-use-threshold-extreme: 95
memory-use-threshold-green: 82
memory-use-threshold-red: 88`,
  42: `FortiGate # get router info routing-table all
S*      0.0.0.0/0 [10/0] via 100.65.0.1, port2
C       10.0.11.0/24 is directly connected, port4
S       172.20.1.0/24 [10/0] via 100.65.0.2, port3, distance 10`,
  47: `FortiGate # get router info routing-table all
S*      0.0.0.0/0 [10/0] via 100.65.0.1, port2
C       10.0.11.0/24 is directly connected, port4
S       10.100.110.0/24 [10/0] via 100.65.0.2, port3`,
  56: `FortiGate # diagnose debug flow trace start 10
id=20085 trace_id=1 func=print_pkt_detail line=5833 msg="vd-root:0 received a packet(proto=17, 10.0.11.50:53->8.8.8.8:53) from port4."
id=20085 trace_id=1 func=init_ip_session_common line=6002 msg="allocate a new session-00001234"
id=20085 trace_id=1 func=vf_ip_route_input_common line=2605 msg="find a route: flag=04000000 gw-100.65.0.1 via port2"
id=20085 trace_id=1 func=fw_forward_handler line=881 msg="Denied by forward policy check (policy 0)"`,
  81: `Log Details
Type: utm
Subtype: ips
Level: warning
Action: dropped
Message: "FTP.Login.Failed"
Action: dropped, packet log saved`,
  85: `Log Details
Type: event
Subtype: system
Level: warning
Message: "IPS session scan paused, enter fail open mode"
Log Desc: "IPS session scan paused"`,
  86: `FortiGate # diagnose debug flow trace start 5
id=20085 trace_id=2 func=print_pkt_detail line=5833 msg="vd-root:0 received a packet(proto=6, 10.0.11.50:443->104.20.0.1:443) from port4."
id=20085 trace_id=2 func=fw_forward_handler line=881 msg="Denied by forward policy check (policy 0)"`
};
