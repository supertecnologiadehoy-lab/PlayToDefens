export const FORTIOS_QUESTIONS_2 = [
  {
    id: 21,
    category: "Logging and Reporting",
    scenario: "Refer to the exhibit. Which two ways can you view the log messages shown in the exhibit? (Choose two.)",
    options: [
      { label: "By right clicking the implicit deny policy", correct: false },
      { label: "Using the FortiGate CLI command diagnose log test", correct: false },
      { label: "By filtering by policy universally unique identifier (UUID) and application name in the log entry", correct: true },
      { label: "In the Forward Traffic section", correct: true }
    ]
  },
  {
    id: 22,
    category: "SD-WAN",
    scenario: "Refer to the exhibit. The administrator configured SD-WAN rules and set the FortiGate traffic log page to display SD-WAN-specific columns: SD-WAN Quality and SD-WAN Rule Name. FortiGate allows the traffic according to policy ID 1. Despite these settings, the traffic logs do not show the name of the SD-WAN rule used to steer those traffic flows. What could be the reason?",
    options: [
      { label: "SD-WAN rule names do not appear immediately. The administrator must refresh the page.", correct: false },
      { label: "There is no application control profile applied to the firewall policy.", correct: false },
      { label: "Destinations in the SD-WAN rules are configured for each application, but feature visibility is not enabled.", correct: false },
      { label: "FortiGate load balanced the traffic according to the implicit SD-WAN rule.", correct: true }
    ]
  },
  {
    id: 23,
    category: "NAT",
    scenario: "Refer to the exhibits. A VIP named VIP-WEB-SERVER is configured on WAN (port2) with External IP: 100.65.0.200, Mapped IP: 10.0.11.50, Map to IPv4 port: 4443. The WAN (port2) interface has the IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. If the host 100.65.1.111 sends a TCP SYN packet on port 443 to 100.65.0.200. What will the source address, destination address, and destination port of the packet be at the time FortiGate forwards the packet to the destination?",
    options: [
      { label: "10.0.11.254, 100.65.0.200. and 443, respectively", correct: false },
      { label: "10.0.11.254, 10.0.15.50, and 4443. respectively", correct: false },
      { label: "100.65.1. 111, 10.0.11.50, and 4443. respectively", correct: true },
      { label: "100.65.1.111, 10.0.11.50. and 443. respectively", correct: false }
    ]
  },
  {
    id: 24,
    category: "Policy Administration",
    scenario: "A network administrator is reviewing firewall policies in both Interface Pair View and By Sequence View. The policies appear in a different order in each view. Why is the policy order different in these two views?",
    options: [
      { label: "By Sequence View groups policies based on rule priority, while Interface Pair View always follows the order of traffic logs.", correct: false },
      { label: "The firewall dynamically reorders policies in Interface Pair View based on recent traffic patterns, but By Sequence View remains static.", correct: false },
      { label: "Interface Pair View sorts policies based on matching interfaces, while By Sequence View shows the actual processing order of rules.", correct: true },
      { label: "Policies in Interface Pair View are prioritized by security levels, while By Sequence View strictly follows the administrator's manual ordering.", correct: false }
    ]
  },
  {
    id: 25,
    category: "FSSO",
    scenario: "A new administrator is configuring FSSO authentication on FortiGate using DC Agent Mode. Which step is not part of the expected process?",
    options: [
      { label: "The DC agent sends login event data directly to FortiGate.", correct: true },
      { label: "FortiGate determines user identity based on the IP address in the FSSO list.", correct: false },
      { label: "The collector agent forwards login event data to FortiGate.", correct: false },
      { label: "The user logs into the windows domain.", correct: false }
    ]
  },
  {
    id: 26,
    category: "FSSO",
    scenario: "Which statement correctly describes NetAPI polling mode for the FSSO collector agent?",
    options: [
      { label: "The collector agent uses a Windows API to query DCs for user logins.", correct: false },
      { label: "The NetSessionEnum function is used to track user logouts.", correct: true },
      { label: "NetAPI polling can increase bandwidth usage in large networks.", correct: false },
      { label: "The collector agent must search Windows application event logs.", correct: false }
    ]
  },
  {
    id: 27,
    category: "High Availability",
    scenario: "Refer to the exhibits. An administrator has observed the performance status outputs on an HA cluster for 55 seconds. Which FortiGate is the primary?",
    options: [
      { label: "HQ-NGFW-1 with the parameter memory-failover-flip-timeout setting", correct: false },
      { label: "HQ-NGFW-2 with the parameter priority setting", correct: false },
      { label: "HQ-NGFW-1 with the parameter override setting", correct: false },
      { label: "HQ-NGFW-2 with the parameter memory-failover-threshold setting", correct: true }
    ]
  },
  {
    id: 28,
    category: "Cloud",
    scenario: "Refer to the exhibit. A partial cloud topology is shown. You deployed a FortiGate Cloud-Native Firewall (CNF) in AWS. During the deployment, which components must the FortiGate CNF create to handle traffic from the EC2 instance?",
    options: [
      { label: "The customer VPC and GWLBe", correct: false },
      { label: "The gateway load balancer endpoint (GWLBe) in the customer virtual private cloud (VPC)", correct: true },
      { label: "The CNF VPC. customer VPC. and GWLB", correct: false },
      { label: "The GWLB. GWLBe, and the internet gateway (IGW) in the customer VPC", correct: false }
    ]
  },
  {
    id: 29,
    category: "Application Control",
    scenario: "Refer to the exhibit. An administrator has configured an Application Overrides for the ABC.Com application signature and set the Action to Allow. This application control profile is then applied to a firewall policy that is scanning all outbound traffic. Logging is enabled in the firewall policy. To test the configuration, the administrator accessed the ABC.Com web site several times. Why are there no logs generated under security logs for ABC.Com?",
    options: [
      { label: "The ABC Com is hitting the category Excessive-Bandwidth.", correct: false },
      { label: "The ABC.Com Type is set as Application instead of Filter.", correct: false },
      { label: "The ABC.Com is configured under application profile, which must be configured as a web filter profile.", correct: false },
      { label: "The ABC Com Action is set to Allow", correct: true }
    ]
  },
  {
    id: 30,
    category: "System Performance",
    scenario: "Refer to the exhibits. The system performance output and default configuration of high memory usage thresholds on a FortiGate device are shown. Based on the system performance output, what are the two possible outcomes? (Choose two.)",
    options: [
      { label: "Administrators can access FortiGate only through the console port.", correct: false },
      { label: "FortiGate has entered conserve mode.", correct: true },
      { label: "FortiGate drops new sessions.", correct: false },
      { label: "Administrators can change the configuration.", correct: true }
    ]
  },
  {
    id: 31,
    category: "FortiSASE",
    scenario: "Which two components are part of the secure internet access (SIA) agent-based mode on FortiSASE? (Choose two.)",
    options: [
      { label: "FortiSASE Firewall-as-a-Service (FWaaS)", correct: true },
      { label: "The proxy auto-configuration (PAC) file", correct: false },
      { label: "VPN policies", correct: true },
      { label: "FortiExtender", correct: false }
    ]
  },
  {
    id: 32,
    category: "Application Control",
    scenario: "Refer to the exhibits. You have implemented the application sensor and the corresponding firewall policy. Which two factors can you observe from these configurations? (Choose two.)",
    options: [
      { label: "YouTube access is blocked based on Excessive-Bandwidth Application and Filter override settings.", correct: true },
      { label: "Facebook access is blocked based on the category filter settings.", correct: true },
      { label: "Facebook access is allowed but you cannot play Facebook videos based on Video/Audio category filter settings.", correct: false },
      { label: "YouTube search is allowed based on the Google Application and Filter override settings.", correct: false }
    ]
  },
  {
    id: 33,
    category: "SD-WAN",
    scenario: "Which three statements about SD-WAN performance SLAs are true? (Choose three.)",
    options: [
      { label: "They rely on session loss and jitter.", correct: false },
      { label: "They monitor the state of the FortiGate device.", correct: false },
      { label: "All the SLA targets can be configured.", correct: true },
      { label: "They are applied in a SD-WAN rule lowest cost strategy.", correct: true },
      { label: "They can be measured actively or passively.", correct: true }
    ]
  },
  {
    id: 34,
    category: "Policy Administration",
    scenario: "Refer to the exhibit. The NOC team connects to the FortiGate GUI with the NOC_Access admin profile. They request that their GUI sessions do not disconnect too early during inactivity. What must the administrator configure to answer this specific request from the NOC team?",
    options: [
      { label: "Increase the admintimeout value under config system accprofile noc Access.", correct: false },
      { label: "increase the of line value of the override idle Timeout parameter in the NOC_Access admin profile.", correct: true },
      { label: "Move NOC_Access to the top of the list to ensure all profile settings take effect.", correct: false },
      { label: "Ensure that all NOC_Access users are assigned the super_admin role to guarantee access.", correct: false }
    ]
  },
  {
    id: 35,
    category: "Logging and Reporting",
    scenario: "The FortiGate device HQ-NGFW-1 sends logs to the FortiAnalyzer device. The administrator wants to verify that reliable logging is enabled on HQ-NGFW-1. Which exhibit helps with the verification?",
    options: [
      { label: "Option A", correct: false },
      { label: "Option B (config log fortianalyzer setting)", correct: true },
      { label: "Option C", correct: false },
      { label: "Option D", correct: false }
    ]
  },
  {
    id: 36,
    category: "SSL Inspection",
    scenario: "Refer to the exhibit. The predefined deep-inspection and custom-deep-inspection profiles exclude some web categories from SSL inspection, as shown in the exhibit. For which two reasons are these web categories exempted? (Choose two.)",
    options: [
      { label: "The resources utilization is optimized because these websites are in the trusted domain list on FortiGate.", correct: false },
      { label: "The legal regulation aims to prioritize user privacy and protect sensitive information for these websites.", correct: true },
      { label: "These websites are in an allowlist of reputable domain names maintained by FortiGuard.", correct: false },
      { label: "The FortiGate temporary certificate denies the browser's access to websites that use HTTP Strict Transport Security.", correct: true }
    ]
  },
  {
    id: 37,
    category: "Antivirus",
    scenario: "Refer to the exhibit. Why is the Antivirus scan switch grayed out when you are creating a new antivirus profile for FTP?",
    options: [
      { label: "Antivirus scan is disabled under System -> Feature visibility", correct: false },
      { label: "None of the inspected protocols are active in this profile.", correct: true },
      { label: "The Feature Set for the profile is Flow-based but it must be Proxy-based", correct: false },
      { label: "FortiGate. with less than 2 GB RAM. does not support the Antivirus scan feature.", correct: false }
    ]
  },
  {
    id: 38,
    category: "Logging and Reporting",
    scenario: "FortiGate is integrated with FortiAnalyzer and FortiManager. When creating a firewall policy, which attribute must an administrator include to enhance functionality and enable log recording on FortiAnalyzer and FortiManager?",
    options: [
      { label: "Universally Unique Identifier", correct: true },
      { label: "Policy ID", correct: false },
      { label: "Sequence ID", correct: false },
      { label: "Log ID", correct: false }
    ]
  },
  {
    id: 39,
    category: "FortiSASE",
    scenario: "How does FortiExtender connect to FortiSASE in a site-based, remote internet access method?",
    options: [
      { label: "FortiExtender uses a Virtual Extensible LAN (VXLAN)-over-IPsec connection.", correct: true },
      { label: "FortiExtender establishes a secure SSL connection using FortiClient.", correct: false },
      { label: "FortiExtender first connects to a FortiGate LAN extension through a secure web gateway (SWG).", correct: false },
      { label: "FortiExtender uses the proxy auto-configuration <PAC) file and an explicit web proxy to connect.", correct: false }
    ]
  },
  {
    id: 40,
    category: "FSSO",
    scenario: "What are two features of collector agent advanced mode? (Choose two.)",
    options: [
      { label: "In advanced mode, security profiles can be applied only to user groups, not individual users.", correct: false },
      { label: "In advanced mode. FortiGate can be configured as an LDAP client and group filters can be configured on FortiGate.", correct: true },
      { label: "Advanced mode uses the Windows convention—NetBios: Domain\\Username.", correct: false },
      { label: "Advanced mode supports nested or inherited groups.", correct: true }
    ]
  }
];
