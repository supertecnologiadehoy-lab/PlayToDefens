export const FORTIOS_QUESTIONS_4 = [
  {
    id: 61,
    category: "Authentication",
    scenario: "Refer to the exhibit, which shows a partial configuration from the remote authentication server. Why does the FortiGate administrator need this configuration? (Choose one answer)",
    options: [
      { label: "To authenticate only the Training user group.", correct: true },
      { label: "To set up a RADIUS server Secret.", correct: false },
      { label: "To authenticate and match the Training OU on the RADIUS server.", correct: false },
      { label: "To authenticate Any FortiGate user groups.", correct: false }
    ]
  },
  {
    id: 62,
    category: "FSSO",
    scenario: "Which three methods are used by the collector agent for AD polling? (Choose three answers)",
    options: [
      { label: "NetAPI", correct: true },
      { label: "WMI", correct: true },
      { label: "WinSecLog", correct: true },
      { label: "DNS reverse lookup", correct: false },
      { label: "FSSO REST API", correct: false }
    ]
  },
  {
    id: 63,
    category: "FSSO",
    scenario: "Which three methods are used by the collector agent for AD polling? (Choose three answers) [Duplicate of Question 62]",
    options: [
      { label: "NetAPI", correct: true },
      { label: "WMI", correct: true },
      { label: "WinSecLog", correct: true },
      { label: "DNS reverse lookup", correct: false },
      { label: "FSSO REST API", correct: false }
    ]
  },
  {
    id: 64,
    category: "High Availability",
    scenario: "An administrator wants to form an HA cluster using the FGCP protocol. Both FortiGate devices are configured with the set override enable command. Arrange the criteria in the order in which the FGCP protocol uses them to elect the primary FortiGate.",
    options: [
      { label: "1. Connected monitored ports, 2. Priority, 3. HA uptime, 4. FortiGate serial number.", correct: true },
      { label: "1. Priority, 2. Connected monitored ports, 3. HA uptime, 4. FortiGate serial number.", correct: false },
      { label: "1. Connected monitored ports, 2. HA uptime, 3. Priority, 4. FortiGate serial number.", correct: false },
      { label: "1. HA uptime, 2. connected monitored ports, 3. Priority, 4. FortiGate serial number.", correct: false }
    ]
  },
  {
    id: 65,
    category: "High Availability",
    scenario: "Refer to the exhibits. An administrator configured both members of an HA cluster at the same time. After one week of monitoring, the administrator wants to verify the HA failover performance. How can the administrator force a failover? (Choose one answer)",
    options: [
      { label: "The administrator must reset the HA uptime on HQ-NGFW-1.", correct: true },
      { label: "The administrator must set the parameter override to enable on HQ-NGFW-2.", correct: false },
      { label: "The administrator must increase the HA priority on HQ-NGFW-2.", correct: false },
      { label: "The administrator must set the monitored port1 to down on HQ-NGFW-1.", correct: false }
    ]
  },
  {
    id: 66,
    category: "SD-WAN",
    scenario: "What are three key routing principles in SD-WAN? (Choose three answers)",
    options: [
      { label: "By default, SD-WAN rules are skipped if the included SD-WAN members do not have a valid route to the destination.", correct: true },
      { label: "SD-WAN rules have precedence over any other type of routes.", correct: false },
      { label: "Regular policy routes have precedence over SD-WAN rules.", correct: true },
      { label: "By default, SD-WAN rules are skipped if only one route to the destination is available.", correct: false },
      { label: "By default, SD-WAN rules are skipped if the best route to the destination is not an SD-WAN member.", correct: true }
    ]
  },
  {
    id: 67,
    category: "Web Filtering",
    scenario: "Refer to the exhibit. The exhibit shows the FortiGuard Category Based Filter section of a corporate web filter profile. An administrator must block access to download.com, which belongs to the Freeware and Software Downloads category. The administrator must also allow other websites in the same category. What are two solutions for satisfying the requirement? (Choose two answers)",
    options: [
      { label: "Configure a static URL filter entry for download.com with Type and Action set to Wildcard and Block, respectively.", correct: true },
      { label: "Configure a web override rating for download.com and select Malicious Websites as the subcategory.", correct: true },
      { label: "Configure a separate firewall policy with action Deny and an FQDN address object for *.download.com as destination address.", correct: false },
      { label: "Set the Freeware and Software Downloads category Action to Warning.", correct: false }
    ]
  },
  {
    id: 68,
    category: "Application Control",
    scenario: "You have implemented the application sensor and the corresponding firewall policy as shown in the exhibits. You cannot access any of the Google applications, but you are able to access www.fortinet.com. What would you do to resolve this issue?",
    options: [
      { label: "Change the Inspection mode to Proxy-based.", correct: false },
      { label: "Set SSL inspection to deep-content-inspection.", correct: false },
      { label: "Move up Google in the Application and Filter Overrides section to set its priority to 1.", correct: true },
      { label: "Add Google.com to the URL category in the security profile.", correct: false }
    ]
  },
  {
    id: 69,
    category: "SD-WAN",
    scenario: "Which two statements about equal-cost multi-path (ECMP) configuration on FortiGate are true? (Choose two answers)",
    options: [
      { label: "If SD-WAN is enabled, you control the load balancing algorithm with the parameter load-balance-mode.", correct: true },
      { label: "If SD-WAN is disabled, you can configure the parameter v4-ecmp-mode to volume-based.", correct: false },
      { label: "If SD-WAN is enabled, you can configure routes with unequal distance and priority values to be part of ECMP.", correct: false },
      { label: "If SD-WAN is disabled, you configure the load balancing algorithm in config system settings.", correct: true }
    ]
  },
  {
    id: 70,
    category: "Security Fabric",
    scenario: "An administrator creates a new address object on the root FortiGate (HQ-NGFW-1) in the Security Fabric. After synchronization, this object is not available on the downstream FortiGate (HQ-ISFW). What must the administrator do to synchronize the address object?",
    options: [
      { label: "Change the csf setting on HQ-ISFW (downstream) to set configuration-sync local.", correct: false },
      { label: "Change the csf setting on HQ-ISFW (downstream) to set saml-configuration-sync default.", correct: false },
      { label: "Change the csf setting on HQ-NGFW-1 (root) to set fabric-object-unification default.", correct: true },
      { label: "Change the csf setting on both devices to set downstream-access enable.", correct: false }
    ]
  },
  {
    id: 71,
    category: "FortiSASE",
    scenario: "An administrator wants to address shadow IT visibility challenges and prevent users from sending sensitive files outside the organization without proper approval. Which FortiSASE method should the administrator implement to achieve these goals? (Choose one answer)",
    options: [
      { label: "Secure SD-WAN access (SSD-WAN)", correct: false },
      { label: "Secure private access (SPA)", correct: false },
      { label: "Secure SaaS access (SSA)", correct: true },
      { label: "Secure internet access (SIA)", correct: false }
    ]
  },
  {
    id: 72,
    category: "IPS",
    scenario: "An administrator wanted to configure an IPS sensor to block traffic that triggers the signature set number of times during a specific time period. How can the administrator achieve the objective?",
    options: [
      { label: "Use IPS group signatures, set rate-mode 60.", correct: false },
      { label: "Use IPS packet logging option with periodical filter option.", correct: false },
      { label: "Use IPS signatures, rate-mode periodical option.", correct: true },
      { label: "Use IPS filter, rate-mode periodical option.", correct: false }
    ]
  },
  {
    id: 73,
    category: "Logging and Reporting",
    scenario: "When configuring the connection between FortiGate and FortiAnalyzer, which option indicates that reliable traffic is enabled? (Choose one answer)",
    options: [
      { label: "The connection status shows a green check icon", correct: false },
      { label: "The interface status is set to up", correct: false },
      { label: "A padlock icon appears in the connection settings", correct: true },
      { label: "The logging mode is set to real-time", correct: false }
    ]
  },
  {
    id: 74,
    category: "FSSO",
    scenario: "You have configured the FortiGate device for FSSO. A user is successful in log-in to Windows, but their access to the internet is denied. What should the administrator check first? (Choose one answer)",
    options: [
      { label: "Whether the user is assigned to the correct AD group.", correct: false },
      { label: "The FortiGate firewall policy settings for SSL decryption.", correct: false },
      { label: "The FortiGate FSSO active users list for user's IP address.", correct: true },
      { label: "The Windows event viewer for failed login attempts.", correct: false }
    ]
  },
  {
    id: 75,
    category: "WAN",
    scenario: "When configuring a FortiGate in a multi-WAN setup, why would an administrator enable session preservation on an interface? (Choose one answer)",
    options: [
      { label: "To allow the FortiGate to dynamically change interfaces for all active sessions when a WAN link fails", correct: false },
      { label: "To make sure all sessions without source NAT enabled always use the primary WAN link", correct: false },
      { label: "To improve security by forcing users to authenticate again when the WAN link changes", correct: false },
      { label: "To ensure that existing SSL VPN connections remain on the same interface even if route changes occur", correct: true }
    ]
  },
  {
    id: 76,
    category: "Antivirus",
    scenario: "Refer to the exhibits. You are asked to implement an antivirus profile for files downloaded through FTP, HTTP, and HTTPS. While testing, you are successful with HTTP and FTP protocols, but FortiGate does not block the file download over HTTPS. What could be the cause?",
    options: [
      { label: "The feature set in the antivirus profile is not set to Flow-based.", correct: false },
      { label: "Web filter is not enabled on the firewall policy to complement the antivirus profile.", correct: false },
      { label: "The action on the firewall policy is not set to deny.", correct: false },
      { label: "The SSL inspection mode in the firewall policy is not deep content inspection.", correct: true }
    ]
  },
  {
    id: 77,
    category: "Antivirus",
    scenario: "A network administrator enabled antivirus and selected an SSL inspection profile on a firewall policy. When downloading an EICAR test file through HTTP, FortiGate detects the virus and blocks the file. When downloading the same file through HTTPS, FortiGate does not detect the virus and does not block the file, allowing it to be downloaded. The administrator confirms that the traffic matches the configured firewall policy. What are two reasons for the failed virus detection by FortiGate? (Choose two answers)",
    options: [
      { label: "The selected SSL inspection profile has certificate inspection enabled.", correct: true },
      { label: "The website is exempted from SSL inspection.", correct: true },
      { label: "The EICAR test file exceeds the protocol options oversize limit.", correct: false },
      { label: "The browser does not trust the FortiGate self-signed CA certificate.", correct: false }
    ]
  },
  {
    id: 78,
    category: "FortiSASE",
    scenario: "You are onboarding an agentless, secure web gateway (SWG) endpoint for secure internet access (SIA). What will happen to the user's nonweb traffic? (Choose one answer)",
    options: [
      { label: "All the nonweb traffic will bypass FortiSASE.", correct: true },
      { label: "The endpoint will use split tunneling to redirect nonweb traffic to FortiSASE.", correct: false },
      { label: "FortiSASE will use Firewall-as-a-Service (FWaaS) to redirect nonweb traffic.", correct: false },
      { label: "FortiSASE will use SWG to redirect nonweb traffic to FortiExtender.", correct: false }
    ]
  },
  {
    id: 79,
    category: "Routing",
    scenario: "Refer to the exhibit. An administrator has created a new firewall address to use as the destination for a static route. Why is the administrator not able to select the new address in the Destination field of the new static route? (Choose one answer)",
    options: [
      { label: "In the new static route, the administrator must select Named Address.", correct: false },
      { label: "In the new firewall address, the FQDN address must first be resolved.", correct: false },
      { label: "In the new static route, the administrator must first set the interface to port2.", correct: false },
      { label: "In the new firewall address, Routing configuration must be enabled.", correct: true }
    ]
  },
  {
    id: 80,
    category: "DNS",
    scenario: "An administrator configures FortiGuard servers as DNS servers on FortiGate using default settings. What is true about the DNS connection to a FortiGuard server?",
    options: [
      { label: "It uses UDP 53.", correct: false },
      { label: "It uses DNS over HTTPS.", correct: false },
      { label: "It uses DNS over TLS.", correct: true },
      { label: "It uses UDP 8888.", correct: false }
    ]
  },
  {
    id: 81,
    category: "IPS",
    scenario: "Refer to the exhibit. An intrusion prevention system (IPS) profile signature setting is shown. What can you conclude about the signature when adding the FTP.Login.Failed signature to the IPS Sensor profile?",
    options: [
      { label: "The signature setting uses a custom rating threshold.", correct: false },
      { label: "FortiGate allows this low severity signature packet and creates a log.", correct: false },
      { label: "FortiGate stores a local copy of the packet that matches the signature.", correct: true },
      { label: "The signature setting includes a group of other signatures.", correct: false }
    ]
  },
  {
    id: 82,
    category: "Application Control",
    scenario: "You have configured an application control profile, set peer-o-peer traffic to Block under the Categories tab, and applied it to the firewall policy. However, you peer-to-peer traffic on known ports is passing through the FortiGate without being blocked. What FortiGate settings should you check to resolve this issue?",
    options: [
      { label: "Replacement Messages for UDP-based Applications", correct: false },
      { label: "Network Protocol Enforcement", correct: false },
      { label: "Application and Filter Overrides", correct: true },
      { label: "FortiGuard category ratings", correct: false }
    ]
  },
  {
    id: 83,
    category: "Policy Administration",
    scenario: "Refer to the exhibit. FortiGate has two separate firewall policies for Sales and Engineering to access the same web server with the same security profiles. Which action must the administrator perform to consolidate the two policies into one?",
    options: [
      { label: "Select port1 and port2 subnets in a single firewall policy.", correct: false },
      { label: "Create an Aggregate interface that includes port1 and port2 to create a single firewall policy.", correct: false },
      { label: "Replace port1 and port2 with the any interface in a single firewall policy.", correct: false },
      { label: "Enable Multiple Interface Policies to select port1 and port2 in the same firewall policy.", correct: true }
    ]
  },
  {
    id: 84,
    category: "System Performance",
    scenario: "Refer to the exhibits. The exhibits show the system performance output and default configuration of high memory usage thresholds on a FortiGate device. Based on the system performance output, what are the two possible outcomes? (Choose two.)",
    options: [
      { label: "Administrators cannot change the configuration.", correct: false },
      { label: "Administrators can access FortiGate only through the console port.", correct: false },
      { label: "Administrators can change the configuration.", correct: true },
      { label: "FortiGate has entered conserve mode.", correct: true }
    ]
  },
  {
    id: 85,
    category: "IPS",
    scenario: "Refer to the exhibit. What can you conclude from the log shown in the exhibit? (logdesc=\"IPS session scan paused\" msg=\"IPS session scan, enter fail open mode\")",
    options: [
      { label: "The IPS socket buffer is full and IPS engine needs more memory to create new sessions.", correct: true },
      { label: "The IPS socket buffer is full and IPS engine cannot decode a packet.", correct: false },
      { label: "The IPS scan is paused by the IPS diagnostic command with bypass mode option 5.", correct: false },
      { label: "The IPS session scan is paused and reevaluating the packet because of a dirty flag.", correct: false }
    ]
  },
  {
    id: 86,
    category: "Troubleshooting",
    scenario: "Refer to the exhibit. Why did the FortiGate device drop the packet?",
    options: [
      { label: "It matched the default implicit firewall policy.", correct: true },
      { label: "It failed the RPF check.", correct: false },
      { label: "It matched an explicitly configured firewall policy with the action DENY.", correct: false },
      { label: "It cannot reach the next-hop IP.", correct: false }
    ]
  },
  {
    id: 87,
    category: "System Settings",
    scenario: "An administrator has configured 'set ses-denied-traffic enable' and 'set block-session-timer 30'. What are the two results of this configuration? (Choose two.)",
    options: [
      { label: "The number of logs generated by denied traffic is reduced.", correct: true },
      { label: "A session for denied traffic is created.", correct: true },
      { label: "Denied users are blocked for 30 minutes.", correct: false },
      { label: "Session helpers are disabled for denied traffic.", correct: false }
    ]
  }
];
