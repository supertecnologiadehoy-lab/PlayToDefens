export const FORTIOS_QUESTIONS_3 = [
  {
    id: 41,
    category: "Routing",
    scenario: "You have configured the below commands on a FortiGate (set strict-src-check enable, and on port1 set src-check disable). What would be the impact of this configuration on FortiGate?",
    options: [
      { label: "FortiGate will enable strict RPF on all its interfaces and port1 will be exempted from RPF checks.", correct: true },
      { label: "FortiGate will enable strict RPF on all its interfaces and port1 will be enable for asymmetric routing.", correct: false },
      { label: "The global configuration will take precedence and FortiGate will enable strict RPF on all interfaces.", correct: false },
      { label: "Port1 will be enabled with flexible RPF. and all other interfaces will be enabled for strict RPF", correct: false }
    ]
  },
  {
    id: 42,
    category: "Routing",
    scenario: "Refer to the exhibit. A routing table is shown. An administrator wants to create a new static route so the traffic to the subnet 172.20.1.0/24 is routed through port2 only. What are the two criteria that the administrator can use to achieve this objective? (Choose two.)",
    options: [
      { label: "The new static route must have the priority set to 3.", correct: false },
      { label: "The new static route must have the metric set to 1.", correct: false },
      { label: "The existing static route through port3 must have the distance set to 11.", correct: true },
      { label: "The new static route must have the distance set to 9", correct: true }
    ]
  },
  {
    id: 43,
    category: "IPsec VPN",
    scenario: "There are multiple dialup IPsec VPNs configured in aggressive mode on the HQ FortiGate. The requirement is to connect dial-up users to their respective department VPN tunnels. Which phase 1 setting you can configure to match the user to the tunnel?",
    options: [
      { label: "Local Gateway", correct: false },
      { label: "Dead Peer Detection", correct: false },
      { label: "Peer ID", correct: true },
      { label: "IKE Mode Config", correct: false }
    ]
  },
  {
    id: 44,
    category: "SSL Inspection",
    scenario: "A network administrator has enabled full SSL inspection and web filtering on FortiGate. When visiting any HTTPS websites, the browser reports certificate warning errors. When visiting HTTP websites, the browser does not report errors. What is the reason for the certificate warning errors?",
    options: [
      { label: "The option invalid SSL certificates is set to allow on the SSL/SSH inspection profile.", correct: false },
      { label: "The matching firewall policy is set to proxy inspection mode.", correct: false },
      { label: "The browser does not trust the certificate used by FortiGate for SSL inspection.", correct: true },
      { label: "The certificate used by FortiGate for SSL inspection does not contain the required certificate extensions.", correct: false }
    ]
  },
  {
    id: 45,
    category: "Application Control",
    scenario: "You have configured an application control profile, set peer-to-peer traffic to Block under the Categories tab. and applied it to the firewall policy. However, your peer-to-peer traffic on known ports is passing through the FortiGate without being blocked. What FortiGate settings should you check to resolve this issue?",
    options: [
      { label: "FortiGuard category ratings", correct: false },
      { label: "Network Protocol Enforcement", correct: true },
      { label: "Replacement Messages for UDP-based Applications", correct: false },
      { label: "Application and Filter Overrides", correct: false }
    ]
  },
  {
    id: 46,
    category: "High Availability",
    scenario: "What are two characteristics of HA cluster heartbeat IP addresses in a FortiGate device? (Choose two.)",
    options: [
      { label: "Heartbeat IP addresses are used to distinguish between cluster members.", correct: true },
      { label: "The heartbeat interface of the primary device in the cluster is always assigned IP address 169.254.0.1.", correct: false },
      { label: "A change in the heartbeat IP address happens when a FortiGate device joins or leaves the cluster.", correct: true },
      { label: "Heartbeat interfaces have virtual IP addresses that are manually assigned.", correct: false }
    ]
  },
  {
    id: 47,
    category: "Routing",
    scenario: "Refer to the exhibit. Based on the routing table shown in the exhibit, which two statements are true? (Choose two.)",
    options: [
      { label: "A packet with the source IP address 10.0.13.10 arriving on port2 is allowed if strict RPF is disabled.", correct: true },
      { label: "A packet with the source IP address 10.100.110.10 arriving on port2 is allowed if strict RPF is enabled.", correct: false },
      { label: "A packet with the source IP address 10.100.110.10 arriving on port3 is allowed if strict RPF is disabled.", correct: true },
      { label: "A packet with the source IP address 10.10.10.10 arriving on port2 is allowed if strict RPF is enabled.", correct: false }
    ]
  },
  {
    id: 48,
    category: "Routing",
    scenario: "FortiGate is operating in NAT mode and has two physical interfaces connected to the LAN and DMZ networks respectively. Which two statements about the requirements of connected physical interfaces on FortiGate are true? (Choose two.)",
    options: [
      { label: "Both interfaces must have DHCP enabled and interfaces set to LAN and DMZ roles assigned.", correct: false },
      { label: "Both interfaces must have the interface role assigned.", correct: false },
      { label: "Both interfaces must have directly connected routes on the routing table.", correct: true },
      { label: "Both interfaces must have IP addresses assigned.", correct: true }
    ]
  },
  {
    id: 49,
    category: "Web Filtering",
    scenario: "Refer to the exhibits. A web filter profile configuration and firewall policy configuration are shown. You are trying to access www.facebook.com, but you are redirected to a FortiGuard web filtering block page. Based on the exhibits, what is the possible cause of the issue?",
    options: [
      { label: "The web rating override configuration is incorrect.", correct: false },
      { label: "The web filter profile feature set is configured incorrectly.", correct: false },
      { label: "The firewall policy inspection mode is incorrect.", correct: true },
      { label: "For www. facebook. com. the URL filter action is incorrect.", correct: false }
    ]
  },
  {
    id: 50,
    category: "System Performance",
    scenario: "Which two statements are correct when FortiGate enters conserve mode? (Choose two answers)",
    options: [
      { label: "FortiGate continues to run critical security actions, such as quarantine.", correct: false },
      { label: "FortiGate refuses to accept configuration changes.", correct: true },
      { label: "FortiGate halts complete system operation and requires a reboot to regain available resources.", correct: false },
      { label: "FortiGate continues to transmit packets without IPS inspection when the fail-open global setting in IPS is enabled.", correct: true }
    ]
  },
  {
    id: 51,
    category: "Policy Administration",
    scenario: "Refer to the exhibit. The NOC team connects to the FortiGate GUI with the NOC_Access admin profile. They request that their GUI sessions do not disconnect too early during inactivity. What must the administrator configure to answer this specific request from the NOC team? (Choose one answer)",
    options: [
      { label: "Move NOC_Access to the top of the list to ensure all profile settings take effect.", correct: false },
      { label: "Increase the offline value of the Override Idle Timeout parameter in the NOC_Access admin profile.", correct: false },
      { label: "Ensure that all NOC_Access users are assigned the super_admin role to guarantee access.", correct: false },
      { label: "Increase the admintimeout value under config system accprofile NOC_Access.", correct: true }
    ]
  },
  {
    id: 52,
    category: "Application Control",
    scenario: "Refer to the exhibits. The exhibits show the application sensor configuration and the Excessive-Bandwidth and Apple filter details. Based on the configuration, what will happen to Apple FaceTime if there are only a few calls originating or incoming? (Choose one answer)",
    options: [
      { label: "Apple FaceTime will be allowed, based on the Video/Audio category configuration.", correct: false },
      { label: "Apple FaceTime will be blocked, based on the Excessive-Bandwidth filter configuration.", correct: true },
      { label: "Apple FaceTime will be allowed, based on the Apple filter configuration.", correct: false },
      { label: "Apple FaceTime will be allowed only if the Apple filter in Application and Filter Overrides is set to Allow.", correct: false }
    ]
  },
  {
    id: 53,
    category: "High Availability",
    scenario: "Which two statements are true about an HA cluster? (Choose two answers)",
    options: [
      { label: "An HA cluster cannot have both in-band and out-of-band management interfaces at the same time.", correct: false },
      { label: "Link failover triggers a failover if the administrator sets the interface down on the primary device.", correct: true },
      { label: "When sniffing the heartbeat interface, the administrator must see the IP address 169.254.0.2.", correct: false },
      { label: "HA incremental synchronization includes FIB entries and IPsec SAs.", correct: true }
    ]
  },
  {
    id: 54,
    category: "Security Fabric",
    scenario: "Which two statements describe characteristics of automation stitches? (Choose two answers)",
    options: [
      { label: "Actions involve only devices included in the Security Fabric.", correct: false },
      { label: "An automation stitch can have multiple triggers.", correct: false },
      { label: "Multiple actions can run in parallel.", correct: true },
      { label: "Triggers can involve external connectors.", correct: true }
    ]
  },
  {
    id: 55,
    category: "SD-WAN",
    scenario: "Which three strategies are valid SD-WAN rule strategies for member selection? (Choose three answers)",
    options: [
      { label: "Lowest Cost (SLA) without load balancing", correct: true },
      { label: "Manual with load balancing", correct: true },
      { label: "Lowest Quality (SLA) with load balancing", correct: false },
      { label: "Lowest Cost (SLA) with load balancing", correct: true },
      { label: "Best Quality with load balancing", correct: false }
    ]
  },
  {
    id: 56,
    category: "Troubleshooting",
    scenario: "Refer to the exhibit showing a debug flow output. Which two conclusions can you make from the debug flow output? (Choose two answers)",
    options: [
      { label: "The default gateway is configured on port2.", correct: true },
      { label: "The RPF check fails.", correct: false },
      { label: "The debug flow is for UDP traffic.", correct: false },
      { label: "The matching firewall policy denies the traffic.", correct: true }
    ]
  },
  {
    id: 57,
    category: "Antivirus",
    scenario: "Which three statements explain a flow-based antivirus profile? (Choose three answers)",
    options: [
      { label: "FortiGate buffers the whole file but transmits to the client at the same time.", correct: true },
      { label: "Flow-based inspection uses a hybrid of the scanning modes available in proxy-based inspection.", correct: true },
      { label: "If a virus is detected, the last packet is delivered to the client.", correct: false },
      { label: "Flow-based inspection optimizes performance compared to proxy-based inspection.", correct: true },
      { label: "The IPS engine handles the process as a standalone.", correct: false }
    ]
  },
  {
    id: 58,
    category: "Security Fabric",
    scenario: "Refer to the exhibits. An administrator wants to add HQ-ISFW-2 in the Security Fabric. HQ-ISFW-2 is in the same subnet as HQ-ISFW. After configuring the Security Fabric settings on HQ-ISFW-2, the status stays Pending. What can be the two possible reasons? (Choose two answers)",
    options: [
      { label: "Upstream FortiGate IP must be set to 10.0.11.254.", correct: true },
      { label: "SAML Single Sign-On must be set to Manual.", correct: false },
      { label: "HQ-ISFW-2 must be authorized on HQ-ISFW.", correct: true },
      { label: "Management IP must be set to 10.0.13.254.", correct: false }
    ]
  },
  {
    id: 59,
    category: "High Availability",
    scenario: "What is the primary FortiGate election process when the HA override setting is enabled? (Choose one answer)",
    options: [
      { label: "Connected monitored ports > Priority > HA uptime > FortiGate serial number", correct: true },
      { label: "Connected monitored ports > Priority > System uptime > FortiGate serial number", correct: false },
      { label: "Connected monitored ports > HA uptime > Priority > FortiGate serial number", correct: false },
      { label: "Connected monitored ports > System uptime > Priority > FortiGate serial number", correct: false }
    ]
  },
  {
    id: 60,
    category: "Antivirus",
    scenario: "Refer to the exhibit to view the firewall policy. Why would the firewall policy not block a well-known virus, for example EICAR? (Choose one answer)",
    options: [
      { label: "The action on the firewall policy is not set to DENY.", correct: false },
      { label: "Web filter is not enabled, so the firewall policy does not complement the antivirus profile.", correct: false },
      { label: "The firewall policy is not configured in proxy-based inspection mode.", correct: false },
      { label: "The firewall policy does not apply deep content inspection.", correct: true }
    ]
  }
];
