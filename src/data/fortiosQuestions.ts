export const FORTIOS_QUESTIONS = [
  {
    id: 1,
    category: "SD-WAN",
    scenario: "Refer to the exhibit. An SD-WAN zone configuration on the FortiGate GUI is shown. Based on the exhibit, which statement is true?",
    options: [
      { label: "The Underlay zone contains no member.", correct: true },
      { label: "The virtual-wan-link and overlay zones can be deleted", correct: false },
      { label: "The Underlay zone is the zone by default.", correct: false },
      { label: "port2 and port3 are not assigned to a zone.", correct: false }
    ]
  },
  {
    id: 2,
    category: "IPsec VPN",
    scenario: "An administrator wants to configure dead peer detection (DPD) on IPsec VPN for detecting dead tunnels. The requirement is that FortiGate sends DPD probes only when there is no inbound traffic. Which DPD mode on FortiGate meets this requirement?",
    options: [
      { label: "On Demand", correct: true },
      { label: "Enabled", correct: false },
      { label: "On Idle", correct: false },
      { label: "Usabled", correct: false }
    ]
  },
  {
    id: 3,
    category: "FortiGuard",
    scenario: "Refer to the exhibit. Which two statements about the FortiGuard connection are true? (Choose two.)",
    options: [
      { label: "The weight increases as the number of failed packets rises", correct: true },
      { label: "You can configure unreliable protocols to communicate with FortiGuard Server.", correct: false },
      { label: "FortiGate identified the FortiGuard Server using DNS lookup.", correct: false },
      { label: "FortiGate is using the default port for FortiGuard communication.", correct: true }
    ]
  },
  {
    id: 4,
    category: "FSSO",
    scenario: "What are two features of FortiGate FSSO agentless polling mode? (Choose two.)",
    options: [
      { label: "FortiGate uses the AD server as the collector agent.", correct: false },
      { label: "FortiGate uses the SMB protocol to read the event viewer logs from the DCs.", correct: true },
      { label: "FortiGate does not support workstation check.", correct: true },
      { label: "FortiGate directs the collector agent to use a remote LDAP server.", correct: false }
    ]
  },
  {
    id: 5,
    category: "High Availability",
    scenario: "An administrator wants to form an HA cluster using the FGCP protocol. Which two requirements must the administrator ensure both members fulfill? (Choose two answers)",
    options: [
      { label: "They must have the same HA group ID.", correct: true },
      { label: "They must have the heartbeat interfaces in the same subnet.", correct: false },
      { label: "They must have the same number of configured VDOMs.", correct: false },
      { label: "They must have the same hard drive configuration.", correct: true }
    ]
  },
  {
    id: 6,
    category: "IPsec VPN",
    scenario: "A network administrator is troubleshooting an IPsec tunnel between two FortiGate devices. The administrator has determined that phase 1 status is up, but phase 2 fails to come up. Based on the phase 2 configuration shown in the exhibit, which two configuration changes will bring phase 2 up? (Choose two.)",
    options: [
      { label: "On BR1-FGT, set Remote Address to 10.0.11.0/255.255.255.0.", correct: true },
      { label: "On HQ-NGFW, enable Diffie-Hellman Group 2.", correct: false },
      { label: "On BR1-FGT, set Seconds to 43200", correct: false },
      { label: "On HQ-NGFW, set Encryption to AES256.", correct: true }
    ]
  },
  {
    id: 7,
    category: "SSL Inspection",
    scenario: "Refer to the exhibit. What would be the impact of these settings on the Server certificate SNI check configuration on FortiGate?",
    options: [
      { label: "FortiGate will accept and use the CN in the server certificate for URL filtering if the SNI does not match the CN or SAN fields.", correct: false },
      { label: "FortiGate will accept the connection with a warning if the SNI does not match the CN or SAN fields.", correct: false },
      { label: "FortiGate will close the connection if the SNI does not match the CN or SAN fields.", correct: true },
      { label: "FortiGate will close the connection if the SNI does not match the CN and SAN fields", correct: false }
    ]
  },
  {
    id: 8,
    category: "Application Control",
    scenario: "You have implemented the application sensor and the corresponding firewall policy as shown in the exhibits. You cannot access any of the Google applications, but you are able to access www.fortinet.com. Which two actions would you take to resolve the issue? (Choose two.)",
    options: [
      { label: "Set SSL inspection to deep-content inspection.", correct: false },
      { label: "Move up Google in the Application and Filter Overrides section to set its priority lot", correct: true },
      { label: "Add \"Google\".com to the URL category in the security profile.", correct: false },
      { label: "Change the Inspection mode to Flow-based", correct: false },
      { label: "Set the action for Google in the Application and Filter Overrides section to Allow", correct: true }
    ]
  },
  {
    id: 9,
    category: "System Performance",
    scenario: "Refer to the exhibit. Based on this partial configuration, what are the two possible outcomes when FortiGate enters conserve mode? (Choose two.)",
    options: [
      { label: "FortiGate drops new sessions requiring inspection.", correct: false },
      { label: "Administrators must restart FortiGate to allow new sessions.", correct: false },
      { label: "Administrators cannot change the configuration.", correct: true },
      { label: "FortiGate skips quarantine actions.", correct: true }
    ]
  },
  {
    id: 10,
    category: "Routing / IPsec",
    scenario: "An administrator has configured a dialup IPsec VPN on FortiGate with add-route enabled. However, the static route is not showing in the routing table. Which two statements about this scenario are correct? (Choose two.)",
    options: [
      { label: "The administrator must use a policy route instead of a static route for add-route to work properly.", correct: false },
      { label: "The administrator must ensure phase 2 is successfully established", correct: true },
      { label: "The administrator must define the remote network correctly in the phase 2 selectors.", correct: true },
      { label: "The administrator must enable a dynamic routing protocol on the dialup interface.", correct: false }
    ]
  },
  {
    id: 11,
    category: "Authentication",
    scenario: "A RADIUS server configuration is shown. An administrator added a configuration for a new RADIUS server While configuring, the administrator enabled Include in every user group. What is the impact of enabling Include in every user group in a RADIUS configuration?",
    options: [
      { label: "This option places the RADIUS server, and all users who can authenticate against that server, into every FortiGate user group.", correct: true },
      { label: "This option places all FortiGate users and groups required to authenticate into the RADIUS server, which, in this case, is FortiAuthenticator.", correct: false },
      { label: "This option places the RADIUS server, and all users who can authenticate against that server, into every RADIUS group.", correct: false },
      { label: "This option places all users into every RADIUS user group, including groups that are used for the LDAP server on FortiGate.", correct: false }
    ]
  },
  {
    id: 12,
    category: "Web Filtering",
    scenario: "You have created a web filter profile named restrictmedia-profile with a daily category usage quota. When you are adding the profile to the firewall policy, the restrict_media-profile is not listed in the available web profile drop down. What could be the reason?",
    options: [
      { label: "The web filter profile is already referenced in another firewall policy.", correct: false },
      { label: "The firewall policy is in no-inspection mode instead of deep-inspection.", correct: false },
      { label: "The naming convention used in the web filter profile is restricting it in the firewall policy.", correct: false },
      { label: "The inspection mode in the firewall policy is not matching with web filter profile feature set.", correct: true }
    ]
  },
  {
    id: 13,
    category: "NAT",
    scenario: "Refer to the exhibits. A diagram of a FortiGate device connected to the network, as well as the firewall policy and IP pool configuration on the FortiGate device are shown. Two PCs. PC1 and PC2, are connected behind FortiGate and can access the internet successfully. However, when the administrator adds a third PC to the network (PC3), the PC cannot connect to the internet. Based on the information shown in the exhibit, which two configuration options can the administrator use to fix the connectivity issue for PC3? (Choose two.)",
    options: [
      { label: "In the system settings, set Multiple Interface Policies to enable.", correct: false },
      { label: "in the IP pool configuration, set end ipto 100.65.0.112.", correct: true },
      { label: "In the firewall policy, set match-vip to enable using CLI.", correct: false },
      { label: "In the IP pool configuration, set type to overload.", correct: true }
    ]
  },
  {
    id: 14,
    category: "System Performance",
    scenario: "Which two statements are correct when the FortiGate device enters conserve mode? (Choose two.)",
    options: [
      { label: "FortiGate refuses to accept configuration changes.", correct: true },
      { label: "FortiGate halts complete system operation and requires a reboot to regain available resources.", correct: false },
      { label: "FortiGate continues to transmit packets without IPS inspection when the fail-open global setting in IPS is enabled.", correct: true },
      { label: "FortiGate continues to run critical security actions, such as quarantine.", correct: false }
    ]
  },
  {
    id: 15,
    category: "High Availability",
    scenario: "Refer to the exhibits. Based on the current HA status, an administrator updates the override and priority parameters on HQ-NGFW-1 and HQ-NGFW-2. What would be the expected outcome in the HA cluster?",
    options: [
      { label: "HQ-NGFW-2 will take over as the primary because it has the override enable setting and higher priority than HQ-NGFW-1.", correct: true },
      { label: "HQ-NGFW-1 will remain the primary because HQ-NGFW-2 has lower priority", correct: false },
      { label: "The HA cluster will become out of sync because the override setting must match on all HA members.", correct: false },
      { label: "HQ-NGFW-1 will synchronize the override disable setting with HQ-NGFW-2.", correct: false }
    ]
  },
  {
    id: 16,
    category: "Authentication",
    scenario: "Refer to the exhibit. A firewall policy to enable active authentication is shown. When attempting to access an external website using an active authentication method, the user is not presented with a login prompt. What is the most likely reason for this situation?",
    options: [
      { label: "No matching user account exists for this user.", correct: false },
      { label: "The Remote-users group must be set up correctly in the FSSO configuration.", correct: false },
      { label: "The Remote-users group is not added to the Destination", correct: false },
      { label: "The Service DNS is required in the firewall policy.", correct: true }
    ]
  },
  {
    id: 17,
    category: "Policy Administration",
    scenario: "When configuring firewall policies which of the following is true regarding the policy ID? (Choose two.)",
    options: [
      { label: "A firewall policy ID identifies the order of policy execution in firewall policies.", correct: false },
      { label: "A policy ID cannot be modified once a policy is created.", correct: true },
      { label: "You can create a policy in CLI with policy ID 0", correct: true },
      { label: "It is mandatory to provide a policy ID while creating a firewall policy regardless of GUI or CLI.", correct: false }
    ]
  },
  {
    id: 18,
    category: "NAT",
    scenario: "Refer to the exhibits. The WAN (port2) interface has the IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. Which IP address will be used to source NAT (SNAT) the traffic, if the user on HQ-PC-1 (10.0.11.50) pings the IP address of BR-FGT (100.65.1.111)?",
    options: [
      { label: "100.65.0.101", correct: false },
      { label: "100.65.0.49", correct: false },
      { label: "100.65.0.149", correct: false },
      { label: "100.65.0.99", correct: true }
    ]
  },
  {
    id: 19,
    category: "Security Profiles",
    scenario: "An administrator manages a FortiGate model that supports NTurbo How does NTurbo acceleration enhance antivirus performance?",
    options: [
      { label: "For flow-based inspection. NTurbo establishes a dedicated data path to redirect traffic between the IPS engine and FortiGate ingress and egress interfaces.", correct: true },
      { label: "For flow-based inspection. NTurbo creates two inspection sessions on the FortiGate device.", correct: false },
      { label: "For proxy-based inspection. NTurbo offloads traffic to the content processor.", correct: false },
      { label: "For proxy-based inspection. NTurbo buffers the whole file and then sends it to the antivirus engine.", correct: false }
    ]
  },
  {
    id: 20,
    category: "IPS",
    scenario: "Refer to the exhibit. As an administrator you have created an IPS profile, but it is not performing as expected. While testing you got the output as shown in the exhibit. What could be the possible reason of the diagnose output shown in the exhibit?",
    options: [
      { label: "There is a no firewall policy configured with an IPS security profile.", correct: true },
      { label: "Administrator entered the command diagnose test application ipsmonitor 5.", correct: false },
      { label: "FortiGate entered into IPS fail open state.", correct: false },
      { label: "Administrator entered the command diagnose test application ipsmonitor 99.", correct: false }
    ]
  }
];
