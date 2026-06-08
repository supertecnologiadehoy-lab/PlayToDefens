export const FORTIOS_QUESTIONS_RAW = [
  {
    id: 101,
    category: "SD-WAN",
    scenario: "An SD-WAN zone configuration on the FortiGate GUI is shown. Based on the configuration, which statement is true?",
    options: [
      { label: "The Underlay zone contains no member interfaces.", correct: true, feedback: "Correct! The Underlay zone lacks the + expansion icon and displays a red status, indicating it is empty." },
      { label: "The virtual-wan-link and overlay zones can be deleted.", correct: false, feedback: "Incorrect." },
      { label: "The Underlay zone is the default zone.", correct: false, feedback: "Incorrect." },
      { label: "port2 and port3 are not assigned to a zone.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 102,
    category: "VPN",
    scenario: "An administrator wants to configure dead peer detection (DPD) on IPsec VPN. The requirement is that FortiGate sends DPD probes only when there is no inbound traffic. Which DPD mode meets this requirement?",
    options: [
      { label: "On Demand", correct: true, feedback: "Correct! On Demand sends DPD probes only when there is no inbound traffic but the FortiGate is attempting to send outbound traffic." },
      { label: "Enabled", correct: false, feedback: "Incorrect." },
      { label: "On Idle", correct: false, feedback: "Incorrect." },
      { label: "Disabled", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 103,
    category: "Web Filtering",
    scenario: "Reviewing the diagnose debug rating output for FortiGuard connection. Which statement is true?",
    codeBlock: "FortiGate # diagnose debug rating\nService : Web-filter\nStatus  : Enable\nProtocol: https\nPort    : 8888\n\n-- Server List --\nIP            Weight RTT Flags\n10.0.1.241    -244   2   I",
    options: [
      { label: "The weight increases as failed packets rise, and FortiGate uses the default port 8888.", correct: true, feedback: "Correct! The weight increases with failed packets, and port 8888 is a default port for HTTPS FortiGuard queries." },
      { label: "You can configure unreliable protocols, and it identified the server using DNS lookup.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate identified the server using DNS lookup and uses port 443.", correct: false, feedback: "Incorrect." },
      { label: "The weight decreases as failed packets rise.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 104,
    category: "Authentication",
    scenario: "What are two features of FortiGate FSSO agentless polling mode?",
    options: [
      { label: "FortiGate uses the SMB protocol to read event viewer logs from DCs, and does not support workstation check.", correct: true, feedback: "Correct! Agentless mode uses SMB to read logs and lacks workstation/dead entry checks." },
      { label: "FortiGate uses the AD server as the collector agent, and uses SMB.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate directs the collector agent to use a remote LDAP server.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate supports workstation checks but does not support LDAP.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 105,
    category: "High Availability",
    scenario: "An administrator wants to form an HA cluster using the FGCP protocol. Which two requirements must both members fulfill?",
    options: [
      { label: "They must have the same HA group ID, and the same hard drive configuration.", correct: true, feedback: "Correct! Group ID must match for election, and hard drive configuration must match for parity." },
      { label: "They must have the heartbeat interfaces in the same subnet, and identical VDOMs.", correct: false, feedback: "Incorrect." },
      { label: "They must have the same number of configured VDOMs.", correct: false, feedback: "Incorrect." },
      { label: "They must have the heartbeat interfaces in the same subnet.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 106,
    category: "IPsec",
    scenario: "Troubleshooting an IPsec tunnel: phase 1 is up, but phase 2 fails. HQ-NGFW shows Local: 10.0.11.0/24, Remote: 172.20.1.0/24, AES128. BR1-FGT shows Local: 172.20.1.0/24, Remote: 10.11.0.0/24, AES256.",
    options: [
      { label: "On BR1-FGT, set Remote Address to 10.0.11.0/255.255.255.0, and on HQ-NGFW, set Encryption to AES256.", correct: true, feedback: "Correct! Phase 2 selectors must mirror each other exactly, and proposals must match." },
      { label: "On HQ-NGFW, enable Diffie-Hellman Group 2, and set Encryption to AES256.", correct: false, feedback: "Incorrect." },
      { label: "On BR1-FGT, set Seconds to 43200, and Remote Address to 10.0.11.0/24.", correct: false, feedback: "Incorrect." },
      { label: "On HQ-NGFW, set Encryption to AES128 on BR1-FGT as well.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 107,
    category: "SSL Inspection",
    scenario: "In an SSL/SSH Inspection Profile, 'Server certificate SNI check' is set to 'Strict'. What is the impact?",
    options: [
      { label: "FortiGate will close the connection if the SNI does not match the CN or SAN fields.", correct: true, feedback: "Correct! Strict mode terminates the TLS session if the SNI does not match either the CN or SAN." },
      { label: "FortiGate will accept and use the CN in the server cert for URL filtering if SNI mismatches.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate will accept the connection with a warning.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate will close the connection only if SNI mismatches both CN and SAN simultaneously.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 108,
    category: "Application Control",
    scenario: "Application Overrides: Priority 1 is Excessive-Bandwidth (Block). Priority 2 is Google (Monitor). Inspection is Proxy-based. Result: Google apps are blocked, while fortinet.com works. How to resolve?",
    options: [
      { label: "Move up Google in the Overrides section to set its priority higher, and set its action to Allow.", correct: true, feedback: "Correct! Google traffic matches the Excessive-Bandwidth behavior first. Giving Google explicit Allow at a higher priority fixes this." },
      { label: "Set SSL inspection to deep-content inspection.", correct: false, feedback: "Incorrect." },
      { label: "Add Google.com to the URL category in the security profile.", correct: false, feedback: "Incorrect." },
      { label: "Change the Inspection mode to Flow-based.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 109,
    category: "System State",
    scenario: "With 'set fail-open enable' configured in IPS global, what happens when FortiGate enters conserve mode?",
    options: [
      { label: "FortiGate refuses to accept configuration changes, and continues to transmit packets without IPS inspection.", correct: true, feedback: "Correct! Conserve mode blocks memory-consuming config changes, and fail-open means IPS is bypassed to maintain connectivity." },
      { label: "FortiGate halts complete system operation and requires a reboot.", correct: false, feedback: "Incorrect." },
      { label: "Administrators cannot change configuration, and FortiGate drops new sessions without IPS.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate skips quarantine actions, and halts system operation.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 110,
    category: "Routing",
    scenario: "A dialup IPsec VPN is configured with add-route enabled, but the static route is not showing in the routing table. Why?",
    options: [
      { label: "Phase 2 must be successfully established, and the remote network must be defined correctly in phase 2 selectors.", correct: true, feedback: "Correct! Add-route dynamically injects the route based on the Phase 2 proxy ID only when the SA is active." },
      { label: "The administrator must use a policy route instead of a static route.", correct: false, feedback: "Incorrect." },
      { label: "The administrator must enable a dynamic routing protocol on the dialup interface.", correct: false, feedback: "Incorrect." },
      { label: "The administrator must configure a static default route.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 111,
    category: "Authentication",
    scenario: "What is the impact of enabling 'Include in every user group' in a RADIUS server configuration?",
    options: [
      { label: "It places the RADIUS server, and all users who can authenticate against that server, into every FortiGate user group.", correct: true, feedback: "Correct! This simplifies config by making the RADIUS server implicitly available in all local user groups." },
      { label: "It places all FortiGate users and groups required to authenticate into the RADIUS server.", correct: false, feedback: "Incorrect." },
      { label: "It places the RADIUS server into every RADIUS group.", correct: false, feedback: "Incorrect." },
      { label: "It places all users into every RADIUS user group, including LDAP groups.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 112,
    category: "Web Filtering",
    scenario: "A web filter profile with a daily category usage quota is not listed in the available web profile drop-down in a firewall policy. Reason?",
    options: [
      { label: "The inspection mode in the firewall policy is not matching with the web filter profile feature set (e.g., flow-based policy vs proxy-based quota).", correct: true, feedback: "Correct! Daily quotas are a proxy-based feature and won't show up if the policy is flow-based." },
      { label: "The web filter profile is already referenced in another firewall policy.", correct: false, feedback: "Incorrect." },
      { label: "The firewall policy is in no-inspection mode instead of deep-inspection.", correct: false, feedback: "Incorrect." },
      { label: "The naming convention restricts it.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 113,
    category: "NAT",
    scenario: "A One-to-One Dynamic IP Pool has 2 External IPs (100.65.0.110-100.65.0.111). PC1 and PC2 connect fine, but PC3 fails to reach the internet. Solution?",
    options: [
      { label: "In the IP pool, set end ip to 100.65.0.112 (adding a third IP), or set type to overload (PAT).", correct: true, feedback: "Correct! One-to-One maps one internal to one external IP. Giving it a 3rd IP or using overload (PAT) solves the exhaustion." },
      { label: "In the system settings, enable Multiple Interface Policies.", correct: false, feedback: "Incorrect." },
      { label: "In the firewall policy, set match-vip to enable.", correct: false, feedback: "Incorrect." },
      { label: "Change the external IP pool to starting IP 100.65.0.111.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 114,
    category: "High Availability",
    scenario: "HA status: HQ-NGFW-1 is Primary (Priority 90, Override disabled). HQ-NGFW-2 is Secondary (Priority 110, Override enabled). What happens if they were just reconfigured this way?",
    options: [
      { label: "HQ-NGFW-2 will take over as the primary because it has override enabled and higher priority.", correct: true, feedback: "Correct! With override enabled, priority supersedes uptime, causing a preemption/failover to the higher priority unit." },
      { label: "HQ-NGFW-1 will remain the primary because HQ-NGFW-2 has lower priority.", correct: false, feedback: "Incorrect." },
      { label: "The HA cluster will become out of sync because override settings must match.", correct: false, feedback: "Incorrect." },
      { label: "HQ-NGFW-1 will synchronize the override disable setting with HQ-NGFW-2.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 115,
    category: "Authentication",
    scenario: "Active authentication (captive portal) is configured for a policy allowing HTTP and HTTPS. Users don't get a login prompt. Why?",
    options: [
      { label: "The Service DNS is required in the firewall policy.", correct: true, feedback: "Correct! FortiGate intercepts HTTP/HTTPS requests, but the client must first resolve the domain. Without DNS permitted, the initial request never happens." },
      { label: "No matching user account exists for this user.", correct: false, feedback: "Incorrect." },
      { label: "The Remote-users group must be set up correctly in the FSSO configuration.", correct: false, feedback: "Incorrect." },
      { label: "The Remote-users group is not added to the Destination.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 116,
    category: "Administration",
    scenario: "Which of the following is true regarding firewall policy IDs?",
    options: [
      { label: "A policy ID cannot be modified once created, and you can create a policy in CLI with policy ID 0 (auto-assign).", correct: true, feedback: "Correct! Policy IDs are permanent once created. In CLI, 'edit 0' automatically assigns the next available ID." },
      { label: "A firewall policy ID identifies the order of policy execution.", correct: false, feedback: "Incorrect." },
      { label: "It is mandatory to provide a policy ID while creating a firewall policy in the GUI.", correct: false, feedback: "Incorrect." },
      { label: "A policy ID determines execution priority.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 117,
    category: "NAT Routing",
    scenario: "Ping traffic from HQ-PC-1 matches a policy named 'PING traffic' utilizing the SNAT-Remote1 IP pool (100.65.0.99). Which SNAT IP will be applied?",
    options: [
      { label: "100.65.0.99", correct: true, feedback: "Correct! FortiGate uses top-down matching. Once the ICMP/PING traffic matches the PING traffic rule, it applies its specific SNAT-Remote1 pool." },
      { label: "100.65.0.101", correct: false, feedback: "Incorrect." },
      { label: "100.65.0.49", correct: false, feedback: "Incorrect." },
      { label: "100.65.0.149", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 118,
    category: "Antivirus",
    scenario: "How does NTurbo acceleration enhance antivirus performance on supported FortiGate hardware?",
    options: [
      { label: "For flow-based inspection, NTurbo establishes a dedicated data path to redirect traffic between the IPS engine and FortiGate ingress/egress interfaces.", correct: true, feedback: "Correct! NTurbo provides a hardware-accelerated fast path for flow-based AV scanning, bypassing CPU bottlenecks." },
      { label: "For flow-based inspection, NTurbo creates two inspection sessions on the FortiGate device.", correct: false, feedback: "Incorrect." },
      { label: "For proxy-based inspection, NTurbo offloads traffic to the content processor.", correct: false, feedback: "Incorrect." },
      { label: "For proxy-based inspection, NTurbo buffers the whole file and then sends it.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 119,
    category: "IPS",
    scenario: "You created an IPS profile, but 'diagnose test application ipsmonitor 1' shows engine count = 0. What is the reason?",
    options: [
      { label: "There is no firewall policy configured with an IPS security profile.", correct: true, feedback: "Correct! IPS processes are spawned on-demand. If no active policy uses the IPS profile, the engine count remains 0." },
      { label: "The FortiGate entered into IPS fail open state.", correct: false, feedback: "Incorrect." },
      { label: "The administrator entered diagnose test application ipsmonitor 5.", correct: false, feedback: "Incorrect." },
      { label: "The firewall is operating in Proxy-based inspection mode.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 120,
    category: "Logging",
    scenario: "You filter FortiGate UTM Application Control logs. Which two methods can correctly locate these logs?",
    options: [
      { label: "In the Forward Traffic log section, and by filtering by policy UUID/application name.", correct: true, feedback: "Correct! App Control logs are generated under Forward Traffic and can be filtered using UUID and App ID." },
      { label: "By right-clicking the implicit deny policy.", correct: false, feedback: "Incorrect." },
      { label: "Using the FortiGate CLI command diagnose log test.", correct: false, feedback: "Incorrect." },
      { label: "By looking in the System Events section.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 141,
    category: "NAT Routing",
    scenario: "FortiGate is operating in NAT mode with interfaces connected to LAN and DMZ. Which two statements about the requirements for these physical interfaces are true?",
    options: [
      { label: "Both interfaces must have IP addresses assigned, and must have directly connected routes on the routing table.", correct: true, feedback: "Correct! In NAT mode, interfaces must have IP addresses and connected routes to route and forward traffic between them." },
      { label: "Both interfaces must have DHCP enabled and roles assigned.", correct: false, feedback: "Incorrect." },
      { label: "Both interfaces must have an interface role assigned.", correct: false, feedback: "Incorrect." },
      { label: "They require a dynamic routing protocol.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 142,
    category: "Web Filtering",
    scenario: "A firewall policy is configured with Proxy-based inspection, but a Web Filter profile with 'Feature set: Flow-based' is applied. Traffic is being blocked incorrectly. What is the cause?",
    options: [
      { label: "The web filter profile feature set (Flow-based) mismatches the firewall policy inspection mode (Proxy-based), causing unexpected behavior.", correct: true, feedback: "Correct! In FortiOS, the security profile's feature set must align with the policy's inspection mode for features to work as expected." },
      { label: "The web rating override configuration is incorrect.", correct: false, feedback: "Incorrect." },
      { label: "The firewall policy inspection mode must be Flow-based to use Web Filters.", correct: false, feedback: "Incorrect." },
      { label: "The URL filter action should be set to Allow.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 143,
    category: "System Administration",
    scenario: "To prevent GUI sessions from disconnecting too early for the NOC team, which uses the 'NOC_Access' admin profile, what must be configured?",
    options: [
      { label: "Increase the Override Idle Timeout parameter within the NOC_Access admin profile.", correct: true, feedback: "Correct! Granular control over GUI idle timeouts is achieved using the Override Idle Timeout setting inside specific Administrator Profiles." },
      { label: "Increase the global admintimeout value.", correct: false, feedback: "Incorrect." },
      { label: "Move the NOC_Access profile to the top of the profile list.", correct: false, feedback: "Incorrect." },
      { label: "Assign the super_admin role to all NOC users.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 144,
    category: "High Availability",
    scenario: "In an HA cluster, what triggers a link failover when a monitored interface experiences an issue?",
    options: [
      { label: "Link failover is triggered if the monitored interface goes down, effectively reducing the unit's priority.", correct: true, feedback: "Correct! A monitored interface failure lowers the unit's effective priority, forcing a failover to the secondary unit to maintain path continuity." },
      { label: "It requires both an in-band and out-of-band management failure.", correct: false, feedback: "Incorrect." },
      { label: "It happens when the heartbeat interface IP address changes to 169.254.0.2.", correct: false, feedback: "Incorrect." },
      { label: "It checks the system uptime before triggering.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 145,
    category: "Security Fabric",
    scenario: "Which two statements describe characteristics of automation stitches?",
    options: [
      { label: "Multiple actions can run in parallel, and triggers can involve external connectors.", correct: true, feedback: "Correct! Automation stitches provide flexible execution (including parallel actions) and can trigger based on external connectors like FortiAnalyzer." },
      { label: "Actions involve only devices included in the Security Fabric.", correct: false, feedback: "Incorrect." },
      { label: "An automation stitch can only have one fixed action.", correct: false, feedback: "Incorrect." },
      { label: "They cannot be triggered by scheduled intervals.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 146,
    category: "SD-WAN",
    scenario: "Which of the following are valid SD-WAN rule strategies for member selection?",
    options: [
      { label: "Lowest Cost (SLA) without load balancing, Manual with load balancing, and Lowest Cost (SLA) with load balancing.", correct: true, feedback: "Correct! Lowest Cost (SLA) can distribute traffic with or without load balancing depending on the configuration, and Manual mode also supports load balancing." },
      { label: "Lowest Quality (SLA) with load balancing.", correct: false, feedback: "Incorrect." },
      { label: "Best Quality with load balancing.", correct: false, feedback: "Incorrect." },
      { label: "Highest Bandwidth (SLA) without metric assessment.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 147,
    category: "Antivirus",
    scenario: "Which statements explain a flow-based antivirus profile using the hybrid scanning mode in FortiOS?",
    options: [
      { label: "FortiGate buffers the whole file but transmits to the client at the same time, optimizing performance compared to proxy-based inspection.", correct: true, feedback: "Correct! Modern flow-based AV buffers the file for scanning but simultaneously transmits packets to prevent timeouts, using the IPS engine in a single pass." },
      { label: "It uses the WAD proxy process entirely.", correct: false, feedback: "Incorrect." },
      { label: "If a virus is detected, the last packet is delivered to the client anyway.", correct: false, feedback: "Incorrect." },
      { label: "It requires split-tunneling for inspection.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 148,
    category: "Security Fabric",
    scenario: "A downstream FortiGate (HQ-ISFW-2) is added to the Security Fabric on the same subnet as the root. Its status remains 'Pending'. Why?",
    options: [
      { label: "The upstream FortiGate IP must point to the root's listening interface, and the downstream device must be manually authorized on the root.", correct: true, feedback: "Correct! The downstream member must target the correct root IP, and the root administrator must manually authorize the device in the GUI." },
      { label: "SAML Single Sign-On must be set to Manual.", correct: false, feedback: "Incorrect." },
      { label: "The Management IP must be on a different subnet.", correct: false, feedback: "Incorrect." },
      { label: "Downstream devices cannot reside on the same subnet.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 149,
    category: "High Availability",
    scenario: "What is the primary FortiGate election process when the HA 'override' setting is ENABLED?",
    options: [
      { label: "Connected monitored ports > Priority > HA uptime > FortiGate serial number.", correct: true, feedback: "Correct! When override is enabled, the administrator-defined Priority precedes HA Uptime in the election sequence." },
      { label: "Connected monitored ports > HA uptime > Priority > FortiGate serial number.", correct: false, feedback: "Incorrect." },
      { label: "Priority > System uptime > Connected monitored ports > Serial number.", correct: false, feedback: "Incorrect." },
      { label: "Serial number > Priority > HA uptime > Monitored ports.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 150,
    category: "SSL Inspection",
    scenario: "A firewall policy with an Antivirus profile allows HTTPS traffic, but EICAR malware over HTTPS is not blocked. What is the most likely cause?",
    options: [
      { label: "The SSL inspection mode applied to the policy is 'certificate-inspection' instead of deep content inspection.", correct: true, feedback: "Correct! Certificate inspection does not decrypt payload. To scan files within HTTPS, 'deep-inspection' must be used so the AV engine can see the decrypted contents." },
      { label: "The action on the firewall policy is not set to DENY.", correct: false, feedback: "Incorrect." },
      { label: "Web filter is not enabled to complement AV.", correct: false, feedback: "Incorrect." },
      { label: "The policy is running in Proxy-based mode.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 151,
    category: "High Availability",
    scenario: "Both HA members have 'override' DISABLED. HQ-NGFW-1 has Priority 200, HQ-NGFW-2 has Priority 100. After a week, how can an administrator manually force a clean failover from HQ-NGFW-1 to HQ-NGFW-2?",
    options: [
      { label: "The administrator must run 'diagnose sys ha reset-uptime' on HQ-NGFW-1.", correct: true, feedback: "Correct! With override disabled, HA uptime wins over Priority. Resetting the primary's HA uptime to 0 forces a recalculation, allowing the secondary to take over." },
      { label: "Increase the HA priority on HQ-NGFW-2.", correct: false, feedback: "Incorrect." },
      { label: "Enable override on HQ-NGFW-2 only.", correct: false, feedback: "Incorrect." },
      { label: "Reboot the secondary device.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 152,
    category: "SD-WAN",
    scenario: "What are two key routing principles regarding SD-WAN rules and the Forwarding Information Base (FIB)?",
    options: [
      { label: "By default, SD-WAN rules are skipped if the resolved FIB best match isn't an SD-WAN member, and regular policy routes take precedence over SD-WAN rules.", correct: true, feedback: "Correct! SD-WAN steering relies on the FIB having a valid route pointing to an SD-WAN member. Standard policy routes are evaluated before SD-WAN rules." },
      { label: "SD-WAN rules have precedence over any other type of route.", correct: false, feedback: "Incorrect." },
      { label: "SD-WAN rules are skipped only if the destination is on a directly connected network.", correct: false, feedback: "Incorrect." },
      { label: "FIB lookups are disabled when SD-WAN is active.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 153,
    category: "Routing",
    scenario: "When configuring Equal-Cost Multi-Path (ECMP), how does SD-WAN status affect the load balancing algorithm config?",
    options: [
      { label: "If SD-WAN is enabled, you control the algorithm via 'load-balance-mode' under config system sdwan. If disabled, it's done via 'v4-ecmp-mode' in global settings.", correct: true, feedback: "Correct! Enabling SD-WAN overrides the global v4-ecmp-mode, replacing it with the SD-WAN specific load-balance-mode." },
      { label: "Changing 'v4-ecmp-mode' applies only to IPv6 traffic.", correct: false, feedback: "Incorrect." },
      { label: "SD-WAN disables ECMP entirely.", correct: false, feedback: "Incorrect." },
      { label: "SD-WAN uses BGP attributes to bypass ECMP selection.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 154,
    category: "Security Fabric",
    scenario: "An address object created on the root FortiGate with 'Fabric global object' enabled is NOT visible on downstream members. The root FortiGate has 'fabric-object-unification' set to 'local'. Fix?",
    options: [
      { label: "Change the csf setting on the root FortiGate to set fabric-object-unification to 'default'.", correct: true, feedback: "Correct! 'Local' prevents objects from synchronizing. Changing it back to 'default' permits fabric-wide object propagation." },
      { label: "Set configuration-sync to local on the downstream device.", correct: false, feedback: "Incorrect." },
      { label: "Enable downstream-access on both devices.", correct: false, feedback: "Incorrect." },
      { label: "Manually replicate the object using the CLI.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 155,
    category: "FortiSASE",
    scenario: "An administrator wants to address Shadow IT visibility and prevent users from sending sensitive files to unsanctioned cloud apps. Which FortiSASE method fits best?",
    options: [
      { label: "Secure SaaS access (SSA)", correct: true, feedback: "Correct! SSA is designed for CASB-like controls, Shadow IT visibility, and applying DLP to SaaS uploads and sharing." },
      { label: "Secure internet access (SIA)", correct: false, feedback: "Incorrect." },
      { label: "Secure private access (SPA)", correct: false, feedback: "Incorrect." },
      { label: "Secure SD-WAN access (SSD-WAN)", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 156,
    category: "IPS",
    scenario: "To block traffic when an IPS signature is triggered a specific number of times within a defined duration, how should the IPS sensor be configured?",
    options: [
      { label: "Use IPS signatures, and set the rate-mode to the 'periodical' option.", correct: true, feedback: "Correct! The 'periodical' rate-mode implements threshold-based anomaly blocking for specific signatures within a given time period." },
      { label: "Use IPS group signatures and set rate-mode to 60.", correct: false, feedback: "Incorrect." },
      { label: "Use the IPS packet logging option with periodical filter.", correct: false, feedback: "Incorrect." },
      { label: "Enable strict RPF on the ingress interface.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 157,
    category: "Logging",
    scenario: "When configuring a FortiAnalyzer connection, which GUI element confirms that reliable, encrypted transport (TCP/OFTP) is actively enabled for logging?",
    options: [
      { label: "A padlock icon appears in the connection settings.", correct: true, feedback: "Correct! The padlock indicates reliable logging (TCP) secured with SSL-encrypted OFTP." },
      { label: "A green check icon appears.", correct: false, feedback: "Incorrect." },
      { label: "The logging mode is set to real-time.", correct: false, feedback: "Incorrect." },
      { label: "The interface status shows as UP.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 158,
    category: "Networking",
    scenario: "Why would an administrator enable 'session preservation' on a WAN interface in a multi-WAN arrangement?",
    options: [
      { label: "To ensure that existing FortiGate-terminated sessions (like SSL VPN) remain on the same interface even if routing changes occur.", correct: true, feedback: "Correct! Session preservation prevents traffic tightly bound to a specific interface from shifting egress paths during route recalculations, which would break the connection." },
      { label: "To force all SNAT sessions to the primary link.", correct: false, feedback: "Incorrect." },
      { label: "To force users to re-authenticate when the WAN link drops.", correct: false, feedback: "Incorrect." },
      { label: "To preserve ARP tables across reboot.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 159,
    category: "FortiSASE",
    scenario: "When onboarding an agentless Secure Web Gateway (SWG) endpoint using a PAC file for FortiSASE, what happens to the user's non-web traffic (e.g., SSH, FTP)?",
    options: [
      { label: "All non-web traffic will bypass FortiSASE and be forwarded directly to the internet.", correct: true, feedback: "Correct! Agentless SWG secures only explicit web protocols (HTTP/HTTPS) captured by the PAC file. Everything else bypasses the proxy." },
      { label: "It uses split tunneling via FortiClient to redirect.", correct: false, feedback: "Incorrect." },
      { label: "FortiSASE inspects it using FWaaS.", correct: false, feedback: "Incorrect." },
      { label: "It is dropped implicitly until authorized.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 160,
    category: "Troubleshooting",
    scenario: "A diagnostic debug flow command outputs: 'policy-0 is matched, act-drop' and 'Denied by forward policy check (policy 0)'. Why did FortiGate drop the packet?",
    options: [
      { label: "It matched the default implicit deny firewall policy (policy 0).", correct: true, feedback: "Correct! Policy 0 is the system's catch-all implicit deny rule when no user-defined forward policy matches the traffic." },
      { label: "It failed the RPF check.", correct: false, feedback: "Incorrect." },
      { label: "It matched an explicitly user-configured firewall policy set to DENY.", correct: false, feedback: "Incorrect." },
      { label: "It could not resolve the next-hop IP.", correct: false, feedback: "Incorrect." }
    ]
  }
,
  {
    id: 121,
    category: "SD-WAN",
    scenario: "SD-WAN rules are configured, but traffic logs do not show the name of the SD-WAN rule used to steer traffic. Why?",
    options: [
      { label: "FortiGate load balanced the traffic according to the implicit SD-WAN rule.", correct: true, feedback: "Correct! If traffic doesn't match an explicit SD-WAN rule, it falls back to the implicit rule which doesn't log a specific rule name." },
      { label: "SD-WAN rule names do not appear immediately. Refresh is required.", correct: false, feedback: "Incorrect." },
      { label: "There is no application control profile applied.", correct: false, feedback: "Incorrect." },
      { label: "Destinations in SD-WAN rules are configured for each application, but feature visibility is not enabled.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 122,
    category: "Policy Administration",
    scenario: "Why do firewall policies appear in a different order when switching between Interface Pair View and By Sequence View?",
    options: [
      { label: "Interface Pair View sorts policies based on matching interfaces, while By Sequence View shows the actual processing order of rules.", correct: true, feedback: "Correct! Sequence View shows top-down evaluation order, while Interface Pair View logically groups policies by incoming/outgoing interface pairs." },
      { label: "By Sequence View groups policies based on rule priority.", correct: false, feedback: "Incorrect." },
      { label: "Policies in Interface Pair View are prioritized by security levels.", correct: false, feedback: "Incorrect." },
      { label: "The firewall dynamically reorders policies in Interface Pair View based on traffic.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 123,
    category: "FSSO",
    scenario: "Which step is NOT part of the expected process when an administrator configures FSSO using DC Agent Mode?",
    options: [
      { label: "The DC agent sends login event data directly to FortiGate.", correct: true, feedback: "Correct! The DC agent sends data to the Collector Agent, not directly to FortiGate." },
      { label: "FortiGate determines user identity based on the IP address in the FSSO list.", correct: false, feedback: "Incorrect." },
      { label: "The collector agent forwards login event data to FortiGate.", correct: false, feedback: "Incorrect." },
      { label: "The user logs into the Windows domain.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 124,
    category: "FSSO",
    scenario: "Which statement correctly describes the NetAPI polling mode for the FSSO collector agent?",
    options: [
      { label: "The NetSessionEnum function is used to track user logouts.", correct: true, feedback: "Correct! NetAPI polls temporary sessions created on the DC and uses NetSessionEnum to track logons and logouts." },
      { label: "The collector agent uses a Windows API to query DCs for user logins.", correct: false, feedback: "Incorrect." },
      { label: "NetAPI polling can increase bandwidth usage in large networks.", correct: false, feedback: "Incorrect." },
      { label: "The collector agent must search Windows application event logs.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 125,
    category: "High Availability",
    scenario: "An HA cluster has HQ-NGFW-1 memory at 90% and HQ-NGFW-2 at 48%. The memory-failover-threshold is 70 and monitor period is 50s. After 55 seconds, which unit is primary?",
    options: [
      { label: "HQ-NGFW-2 becomes primary due to the memory-failover-threshold setting.", correct: true, feedback: "Correct! HQ-NGFW-1 exceeded the 70% threshold for longer than the 50s monitor period, triggering a failover to the less loaded unit." },
      { label: "HQ-NGFW-1 remains primary due to the memory-failover-flip-timeout setting.", correct: false, feedback: "Incorrect." },
      { label: "HQ-NGFW-2 because of the priority setting.", correct: false, feedback: "Incorrect." },
      { label: "HQ-NGFW-1 because of the override setting.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 126,
    category: "Cloud",
    scenario: "When deploying a FortiGate Cloud-Native Firewall (CNF) in AWS, which component must be created to handle traffic from an EC2 instance?",
    options: [
      { label: "The gateway load balancer endpoint (GWLBe) in the customer virtual private cloud (VPC).", correct: true, feedback: "Correct! The GWLBe is created in the customer VPC to transparently steer traffic to the FortiGate CNF." },
      { label: "The customer VPC and GWLBe.", correct: false, feedback: "Incorrect." },
      { label: "The CNF VPC, customer VPC, and GWLB.", correct: false, feedback: "Incorrect." },
      { label: "The GWLB, GWLBe, and the internet gateway (IGW) in the customer VPC.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 127,
    category: "Application Control",
    scenario: "An Application Override is configured to 'Allow' ABC.Com. Traffic is allowed, but no security logs are generated for ABC.Com despite logging enabled on the firewall policy. Why?",
    options: [
      { label: "The ABC.Com Action is set to Allow. Allowed traffic generates traffic logs, but not application control security logs.", correct: true, feedback: "Correct! In FortiOS, explicitly 'Allowed' applications silently permit traffic. To generate security logs, the action must be set to Monitor." },
      { label: "The ABC.Com is hitting the category Excessive-Bandwidth.", correct: false, feedback: "Incorrect." },
      { label: "The ABC.Com Type is set as Application instead of Filter.", correct: false, feedback: "Incorrect." },
      { label: "The ABC.Com must be configured as a web filter profile.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 128,
    category: "System State",
    scenario: "Memory usage is at 90%. Conserve mode thresholds: green 82%, red 88%, extreme 89%. What happens?",
    options: [
      { label: "FortiGate has entered conserve mode. New sessions are dropped. Administrators can still change configurations.", correct: true, feedback: "Correct! At 90% (above extreme), new sessions drop. Administrators CAN still manage config, though FortiGate may silently reject config changes if memory is too tight." },
      { label: "Administrators can access FortiGate only through the console port.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate halts complete system operation.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate refuses to accept configuration changes, but drops no sessions.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 129,
    category: "FortiSASE",
    scenario: "Which two components are part of the secure internet access (SIA) agent-based mode on FortiSASE?",
    options: [
      { label: "FortiSASE Firewall-as-a-Service (FWaaS) and VPN policies.", correct: true, feedback: "Correct! Agent-based SIA relies on the FortiClient VPN tunnel and FWaaS for security inspection." },
      { label: "The proxy auto-configuration (PAC) file and FortiExtender.", correct: false, feedback: "Incorrect." },
      { label: "VPN policies and FortiExtender.", correct: false, feedback: "Incorrect." },
      { label: "FWaaS and PAC file.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 130,
    category: "SSL Inspection",
    scenario: "Why do predefined deep-inspection profiles exclude some web categories (like Finance and Banking) from SSL inspection?",
    options: [
      { label: "Legal regulations prioritize user privacy, and temporary certificates break websites using HTTP Strict Transport Security (HSTS).", correct: true, feedback: "Correct! Legal constraints prevent decrypting banking traffic, and HSTS refuses connections intercepted by temporary certificates." },
      { label: "The resources utilization is optimized because these websites are in the trusted domain list on FortiGate.", correct: false, feedback: "Incorrect." },
      { label: "These websites are in an allowlist of reputable domain names maintained by FortiGuard.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate temporary certificates deny the browser access to websites without SNI.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 131,
    category: "Antivirus",
    scenario: "When creating a new antivirus profile for FTP, the Antivirus scan switch is grayed out. What is the cause?",
    options: [
      { label: "None of the inspected protocols are active in this profile.", correct: true, feedback: "Correct! The AV scan switch only becomes available after at least one supported protocol is enabled for inspection." },
      { label: "Antivirus scan is disabled under System -> Feature visibility.", correct: false, feedback: "Incorrect." },
      { label: "The Feature Set for the profile is Flow-based but it must be Proxy-based.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate with less than 2 GB RAM does not support the Antivirus scan feature.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 132,
    category: "Logging",
    scenario: "When creating a firewall policy, which attribute must an administrator include to enhance functionality and enable log correlation on FortiAnalyzer and FortiManager?",
    options: [
      { label: "Universally Unique Identifier (UUID)", correct: true, feedback: "Correct! UUIDs ensure proper policy tracking and log correlation across FortiAnalyzer and FortiManager, even if policy IDs change." },
      { label: "Policy ID", correct: false, feedback: "Incorrect." },
      { label: "Sequence ID", correct: false, feedback: "Incorrect." },
      { label: "Log ID", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 133,
    category: "FortiSASE",
    scenario: "How does FortiExtender connect to FortiSASE in a site-based, remote internet access method?",
    options: [
      { label: "It uses a Virtual Extensible LAN (VXLAN)-over-IPsec connection.", correct: true, feedback: "Correct! FortiExtender integrates with FortiSASE using a secure VXLAN-over-IPsec tunnel to extend the site network." },
      { label: "It establishes a secure SSL connection using FortiClient.", correct: false, feedback: "Incorrect." },
      { label: "It first connects to a FortiGate LAN extension through a SWG.", correct: false, feedback: "Incorrect." },
      { label: "It uses the proxy auto-configuration (PAC) file.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 134,
    category: "FSSO",
    scenario: "What are two features of the FSSO collector agent advanced mode?",
    options: [
      { label: "FortiGate can be configured as an LDAP client to apply group filters, and it supports nested or inherited groups.", correct: true, feedback: "Correct! Advanced mode allows deep AD integration, supporting nested groups and letting FortiGate act directly as an LDAP client." },
      { label: "Security profiles can be applied only to user groups, not individual users.", correct: false, feedback: "Incorrect." },
      { label: "Advanced mode uses the Windows convention NetBIOS Domain\\Username.", correct: false, feedback: "Incorrect." },
      { label: "It relies exclusively on WinSecLog for AD polling.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 135,
    category: "System Setup",
    scenario: "Global config defines 'set strict-src-check enable'. Interface port1 defines 'set src-check disable'. What is the impact?",
    options: [
      { label: "FortiGate will enable strict RPF on all its interfaces, but port1 will be exempted from RPF checks.", correct: true, feedback: "Correct! The global setting enables strict RPF, but the interface-level override on port1 specifically disables it." },
      { label: "FortiGate will enable strict RPF on all interfaces, and port1 will enable asymmetric routing.", correct: false, feedback: "Incorrect." },
      { label: "The global configuration will take precedence.", correct: false, feedback: "Incorrect." },
      { label: "Port1 will be enabled with flexible RPF.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 136,
    category: "Routing",
    scenario: "You want a new static route to subnet 172.20.1.0/24 to route through port2. An existing static route via port3 has distance 9. What two criteria achieve this?",
    options: [
      { label: "Set the new port2 route distance to 9, and increase the existing port3 route distance to 11.", correct: true, feedback: "Correct! Route selection prefers lowest administrative distance. Making port2 = 9 and port3 = 11 forces traffic over port2." },
      { label: "Set the new route priority to 3, and metric to 1.", correct: false, feedback: "Incorrect." },
      { label: "Set the new route metric to 1, and port3 distance to 11.", correct: false, feedback: "Incorrect." },
      { label: "Set the new route priority to 3, and port3 distance to 9.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 137,
    category: "IPsec",
    scenario: "There are multiple dialup IPsec VPNs configured in aggressive mode on FortiGate. Which Phase 1 setting matches the specific user to their respective tunnel?",
    options: [
      { label: "Peer ID", correct: true, feedback: "Correct! In aggressive mode dialup, FortiGate uses the Peer ID (IKE ID) sent in cleartext to match the client to the correct Phase 1 tunnel configuration." },
      { label: "Local Gateway", correct: false, feedback: "Incorrect." },
      { label: "Dead Peer Detection", correct: false, feedback: "Incorrect." },
      { label: "IKE Mode Config", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 138,
    category: "SSL Inspection",
    scenario: "With full SSL inspection enabled, visiting HTTPS websites throws browser certificate warning errors. What is the reason?",
    options: [
      { label: "The browser does not trust the certificate authority (CA) used by FortiGate for SSL inspection.", correct: true, feedback: "Correct! Deep inspection replaces the site's cert with a FortiGate-signed cert. If the browser lacks FortiGate's CA in its trust store, it warns the user." },
      { label: "The matching firewall policy is set to proxy inspection mode.", correct: false, feedback: "Incorrect." },
      { label: "The option 'invalid SSL certificates' is set to allow on the profile.", correct: false, feedback: "Incorrect." },
      { label: "The certificate lacks required extensions.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 139,
    category: "Application Control",
    scenario: "Peer-to-peer traffic is set to Block under the Categories tab of an Application Control profile, yet P2P traffic on known ports still passes. What setting should you check?",
    options: [
      { label: "Application and Filter Overrides", correct: true, feedback: "Correct! Overrides are evaluated before category actions. An override set to Allow or Monitor for a specific P2P signature will bypass the category-level Block." },
      { label: "Network Protocol Enforcement", correct: false, feedback: "Incorrect." },
      { label: "Replacement Messages for UDP", correct: false, feedback: "Incorrect." },
      { label: "FortiGuard category ratings", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 140,
    category: "High Availability",
    scenario: "What are two characteristics of HA cluster heartbeat IP addresses?",
    options: [
      { label: "They are used to distinguish between cluster members, and they dynamically change when a device joins or leaves the cluster.", correct: true, feedback: "Correct! FortiGate dynamically assigns link-local IPs (169.254.0.0/16) to distinguish members, adapting as the cluster state shifts." },
      { label: "The primary device always receives IP 169.254.0.1.", correct: false, feedback: "Incorrect." },
      { label: "They have virtual IP addresses that are manually assigned.", correct: false, feedback: "Incorrect." },
      { label: "They are persistent across reboot regardless of cluster state.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 161,
    category: "Authentication",
    scenario: "A remote authentication server is configured to return the vendor-specific attribute 'Fortinet-Group-Name' with a value of 'Training'. Why does the FortiGate administrator need this configuration?",
    options: [
      { label: "To authenticate and match the authenticated user to the corresponding 'Training' FortiGate user group.", correct: true, feedback: "Correct! The vendor-specific attribute (VSA) 'Fortinet-Group-Name' dynamically places the authenticated RADIUS user into the corresponding FortiGate user group for policy enforcement." },
      { label: "To set up a RADIUS server Secret.", correct: false, feedback: "Incorrect." },
      { label: "To authenticate and match the Training OU on the RADIUS server.", correct: false, feedback: "Incorrect." },
      { label: "To authenticate any FortiGate user groups.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 162,
    category: "FSSO",
    scenario: "Which three methods are used by the collector agent for AD polling?",
    options: [
      { label: "NetAPI, WMI, and WinSecLog", correct: true, feedback: "Correct! These are the three primary Collector Agent-based polling methods for collecting AD login events." },
      { label: "NetAPI, WMI, and DNS reverse lookup", correct: false, feedback: "Incorrect." },
      { label: "WMI, WinSecLog, and FSSO REST API", correct: false, feedback: "Incorrect." },
      { label: "NetAPI, DNS reverse lookup, and FSSO REST API", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 163,
    category: "Routing",
    scenario: "An administrator has created a new FQDN firewall address object (www.fortinet.com) to use as the destination for a static route, but cannot select it in the Destination field of the new static route. Why?",
    options: [
      { label: "In the new firewall address, Routing configuration ('allow-routing') must be enabled.", correct: true, feedback: "Correct! For an FQDN address object to be selectable in a static route, the 'allow-routing' (Routing configuration) toggle must be explicitly enabled on the address object." },
      { label: "In the new static route, the administrator must select Named Address.", correct: false, feedback: "Incorrect." },
      { label: "The FQDN address must first be resolved via DNS.", correct: false, feedback: "Incorrect." },
      { label: "The administrator must first set the egress interface to port2.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 164,
    category: "DNS",
    scenario: "An administrator configures FortiGuard servers as DNS servers on FortiGate using default settings. What is true about the DNS connection to a FortiGuard server?",
    options: [
      { label: "It uses DNS over TLS (DoT) by default.", correct: true, feedback: "Correct! FortiOS defaults to DNS over TLS (DoT) when using FortiGuard DNS servers to ensure queries are securely encrypted." },
      { label: "It uses DNS over HTTPS (DoH) by default.", correct: false, feedback: "Incorrect." },
      { label: "It uses UDP 53.", correct: false, feedback: "Incorrect." },
      { label: "It uses UDP 8888.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 165,
    category: "IPS",
    scenario: "An IPS sensor profile is configured to add the 'FTP.Login.Failed' signature with 'Packet logging' enabled. What can you conclude from this setup?",
    options: [
      { label: "FortiGate stores a local copy of the packet that matches the signature.", correct: true, feedback: "Correct! Enabling packet logging in an IPS profile captures and stores the raw packet payload that triggered the signature for forensic analysis." },
      { label: "FortiGate allows this low severity signature packet and creates a log.", correct: false, feedback: "Incorrect." },
      { label: "The signature setting uses a custom rating threshold.", correct: false, feedback: "Incorrect." },
      { label: "The signature setting includes a group of other signatures.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 166,
    category: "Web Filtering",
    scenario: "An administrator must block access to 'download.com', which belongs to the 'Freeware and Software Downloads' category, while still allowing other websites in that same category. What are two solutions?",
    options: [
      { label: "Configure a static URL filter entry for download.com with Action Block, or configure a web override rating for download.com to a blocked category.", correct: true, feedback: "Correct! You can use a URL Filter override to specifically block the URL, or use a Web Rating Override to reclassify the specific domain into a blocked category like 'Malicious Websites'." },
      { label: "Configure a static URL filter with Action Warning, or configure a separate firewall policy with an FQDN address.", correct: false, feedback: "Incorrect." },
      { label: "Configure a separate firewall policy with action Deny, or set the entire Freeware category to Warning.", correct: false, feedback: "Incorrect." },
      { label: "Override the category priority using Application Control, or use deep SSL inspection.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 167,
    category: "FSSO",
    scenario: "You have configured FortiGate for FSSO. A user successfully logs into Windows, but their access to the internet is denied by the internet-access policy. What should the administrator check first?",
    options: [
      { label: "The FortiGate FSSO active users list for the user's IP address.", correct: true, feedback: "Correct! If Windows login succeeded but access is denied, first check if FortiGate successfully mapped the user's identity to their current IP address via the 'diagnose debug authd fsso list' command." },
      { label: "Whether the user is assigned to the correct AD group in Windows.", correct: false, feedback: "Incorrect." },
      { label: "The FortiGate firewall policy settings for SSL decryption.", correct: false, feedback: "Incorrect." },
      { label: "The Windows event viewer for failed login attempts.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 168,
    category: "IPS",
    scenario: "A system log states: 'msg=\"IPS session scan, enter fail open mode\"' and 'action=\"drop\"'. What does this indicate?",
    options: [
      { label: "The IPS socket buffer is full and the IPS engine lacks memory/resources to create new sessions, so it drops them based on the fail-open setting.", correct: true, feedback: "Correct! The IPS engine enters fail-open mode when its buffer or memory is exhausted. In this case, the fail-open global setting is configured to 'drop', meaning new sessions are discarded." },
      { label: "The IPS socket buffer is full and the IPS engine cannot decode a packet.", correct: false, feedback: "Incorrect." },
      { label: "The IPS scan is paused manually by an IPS diagnostic command with bypass mode option 5.", correct: false, feedback: "Incorrect." },
      { label: "The IPS session scan is paused and reevaluating the packet because of a dirty flag.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 169,
    category: "System Setup",
    scenario: "An administrator configures 'set ses-denied-traffic enable' under system settings and sets 'block-session-timer' to 30. What are the results?",
    options: [
      { label: "A session for denied traffic is created in the session table, and the number of logs generated for repeated denied traffic is reduced.", correct: true, feedback: "Correct! Enabling session-denied-traffic caches the drop decision in the session table to save CPU cycles and reduce repeated log spam for the same blocked flow." },
      { label: "Denied users are blocked completely for 30 minutes.", correct: false, feedback: "Incorrect." },
      { label: "Session helpers are disabled for all denied traffic.", correct: false, feedback: "Incorrect." },
      { label: "A session is created, but log generation increases to track all retries.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 170,
    category: "Policy Administration",
    scenario: "FortiGate has two identical firewall policies mapping to the same web server, except one applies to 'port1' (Sales) and the other to 'port2' (Engineering). How can the administrator consolidate them into one policy via the GUI?",
    options: [
      { label: "Enable 'Multiple Interface Policies' on the Feature Visibility page to allow selecting both port1 and port2 as incoming interfaces.", correct: true, feedback: "Correct! To select more than one source interface in a single GUI firewall policy, the 'Multiple Interface Policies' feature must first be enabled in Feature Visibility." },
      { label: "Create an Aggregate interface that includes port1 and port2.", correct: false, feedback: "Incorrect." },
      { label: "Replace port1 and port2 with the 'any' interface in a single firewall policy.", correct: false, feedback: "Incorrect." },
      { label: "Select both port1 and port2 subnets within a single firewall policy's source address field without changing feature visibility.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 171,
    category: "FortiSASE",
    scenario: "An administrator wants to address shadow IT visibility challenges and prevent users from sending sensitive files outside the organization without proper approval. Which FortiSASE method should the administrator implement?",
    options: [
      { label: "Secure SaaS access (SSA)", correct: true, feedback: "Correct! SSA is used to address shadow IT and safeguard against data loss (DLP controls)." },
      { label: "Secure SD-WAN access (SSD-WAN)", correct: false, feedback: "Incorrect. SSD-WAN is not for SaaS visibility/DLP." },
      { label: "Secure private access (SPA)", correct: false, feedback: "Incorrect. SPA is for zero-trust access to private applications." },
      { label: "Secure internet access (SIA)", correct: false, feedback: "Incorrect. SIA focuses on securing internet browsing, not comprehensive shadow IT control." }
    ]
  },
  {
    id: 172,
    category: "IPS",
    scenario: "An administrator wanted to configure an IPS sensor to block traffic that triggers the signature set number of times during a specific time period. How can the administrator achieve the objective?",
    options: [
      { label: "Use IPS signatures, rate-mode periodical option.", correct: true, feedback: "Correct! The rate-mode periodical option triggers an action when the signature threshold count is reached within a configured duration." },
      { label: "Use IPS group signatures, set rate-mode 60.", correct: false, feedback: "Incorrect." },
      { label: "Use IPS packet logging option with periodical filter option.", correct: false, feedback: "Incorrect." },
      { label: "Use IPS filter, rate-mode periodical option.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 173,
    category: "Logging",
    scenario: "When configuring the connection between FortiGate and FortiAnalyzer, which option indicates that reliable traffic is enabled?",
    options: [
      { label: "A padlock icon appears in the connection settings.", correct: true, feedback: "Correct! The padlock indicates encrypted, reliable log transport (TCP/OFTP)." },
      { label: "The connection status shows a green check icon.", correct: false, feedback: "Incorrect. The green check just means the connection is up." },
      { label: "The interface status is set to up.", correct: false, feedback: "Incorrect." },
      { label: "The logging mode is set to real-time.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 174,
    category: "FSSO",
    scenario: "You have configured the FortiGate device for FSSO. A user is successful in logging into Windows, but their access to the internet is denied. What should the administrator check first?",
    options: [
      { label: "The FortiGate FSSO active users list for the user's IP address.", correct: true, feedback: "Correct! Verify if FortiGate has successfully learned the user-to-IP mapping before checking other settings." },
      { label: "Whether the user is assigned to the correct AD group.", correct: false, feedback: "Incorrect." },
      { label: "The FortiGate firewall policy settings for SSL decryption.", correct: false, feedback: "Incorrect." },
      { label: "The Windows event viewer for failed login attempts.", correct: false, feedback: "Incorrect. We know the login was successful." }
    ]
  },
  {
    id: 175,
    category: "Routing",
    scenario: "When configuring a FortiGate in a multi-WAN setup, why would an administrator enable session preservation on an interface?",
    options: [
      { label: "To ensure that existing SSL VPN connections remain on the same interface even if route changes occur.", correct: true, feedback: "Correct! Session preservation avoids moving active sessions (like SSL VPNs terminating on the FortiGate) across interfaces when routing changes." },
      { label: "To allow the FortiGate to dynamically change interfaces for all active sessions when a WAN link fails.", correct: false, feedback: "Incorrect." },
      { label: "To make sure all sessions without source NAT enabled always use the primary WAN link.", correct: false, feedback: "Incorrect." },
      { label: "To improve security by forcing users to authenticate again when the WAN link changes.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 176,
    category: "Antivirus",
    scenario: "An antivirus profile is configured for FTP, HTTP, and HTTPS. Blocking works for FTP and HTTP, but FortiGate does not block an infected file downloaded over HTTPS. What is the cause?",
    options: [
      { label: "The SSL inspection mode in the firewall policy is not deep content inspection.", correct: true, feedback: "Correct! Without deep SSL inspection, FortiGate cannot decrypt HTTPS payload to scan for viruses." },
      { label: "The feature set in the antivirus profile is not set to Flow-based.", correct: false, feedback: "Incorrect." },
      { label: "Web filter is not enabled on the firewall policy to complement the antivirus profile.", correct: false, feedback: "Incorrect." },
      { label: "The action on the firewall policy is not set to deny.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 177,
    category: "SSL Inspection",
    scenario: "When downloading an EICAR test file through HTTP, FortiGate detects it. Through HTTPS, it does not. What are two possible reasons?",
    options: [
      { label: "The SSL inspection profile has certificate inspection enabled, or the website is exempted from SSL inspection.", correct: true, feedback: "Correct! Certificate inspection or an exemption prevents decryption, making malware scanning impossible over HTTPS." },
      { label: "The EICAR test file exceeds the protocol options oversize limit, or the browser does not trust the FortiGate certificate.", correct: false, feedback: "Incorrect." },
      { label: "The website uses a wild card certificate, or the file is compressed.", correct: false, feedback: "Incorrect." },
      { label: "The IPS profile is not set to block, or the web filter is not enabled.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 178,
    category: "FortiSASE",
    scenario: "You are onboarding an agentless, secure web gateway (SWG) endpoint for secure internet access (SIA). What will happen to the user's nonweb traffic?",
    options: [
      { label: "All the nonweb traffic will bypass FortiSASE.", correct: true, feedback: "Correct! SWG agentless deployments only proxy web traffic (HTTP/HTTPS); nonweb traffic bypasses the proxy." },
      { label: "The endpoint will use split tunneling to redirect nonweb traffic to FortiSASE.", correct: false, feedback: "Incorrect." },
      { label: "FortiSASE will use Firewall-as-a-Service (FWaaS) to redirect nonweb traffic.", correct: false, feedback: "Incorrect." },
      { label: "FortiSASE will use SWG to redirect nonweb traffic to FortiExtender.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 179,
    category: "Routing",
    scenario: "An administrator has created a new firewall address to use as the destination for a static route, but the address is not appearing in the Destination field dropdown. Why?",
    options: [
      { label: "In the new firewall address, Routing configuration must be enabled.", correct: true, feedback: "Correct! The 'Routing configuration'/'allow-routing' option must be enabled on the address object to use it in static routes." },
      { label: "In the new static route, the administrator must select Named Address.", correct: false, feedback: "Incorrect." },
      { label: "In the new firewall address, the FQDN address must first be resolved.", correct: false, feedback: "Incorrect." },
      { label: "In the new static route, the administrator must first set the interface to port2.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 180,
    category: "DNS",
    scenario: "When FortiGuard servers are configured as DNS servers on FortiGate using default settings, what protocol and port are used?",
    options: [
      { label: "It uses DNS over TLS (DoT).", correct: true, feedback: "Correct! FortiOS uses DoT by default to secure DNS queries to FortiGuard servers." },
      { label: "It uses UDP 53.", correct: false, feedback: "Incorrect." },
      { label: "It uses DNS over HTTPS (DoH).", correct: false, feedback: "Incorrect." },
      { label: "It uses UDP 8888.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 181,
    category: "IPS",
    scenario: "An IPS Sensor profile is configured to block the 'FTP.Login.Failed' signature and has 'Packet logging' enabled. What happens?",
    options: [
      { label: "FortiGate stores a local copy of the packet that matches the signature.", correct: true, feedback: "Correct! Packet logging allows capturing the specific payload that triggered the signature." },
      { label: "The signature setting uses a custom rating threshold.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate allows this low severity signature packet and creates a log.", correct: false, feedback: "Incorrect." },
      { label: "The signature setting includes a group of other signatures.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 182,
    category: "Application Control",
    scenario: "You set peer-to-peer traffic to Block under the Categories tab, but P2P traffic is still passing through unblocked. What should you check?",
    options: [
      { label: "Application and Filter Overrides.", correct: true, feedback: "Correct! Overrides take precedence over Category actions. An override mapping a P2P app to 'Allow' or 'Monitor' would bypass the Category block." },
      { label: "Replacement Messages for UDP-based Applications.", correct: false, feedback: "Incorrect." },
      { label: "Network Protocol Enforcement.", correct: false, feedback: "Incorrect." },
      { label: "FortiGuard category ratings.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 183,
    category: "Policy Administration",
    scenario: "Sales (port1) and Engineering (port2) have identical firewall policies going to the same web server. How do you consolidate them into one policy?",
    options: [
      { label: "Enable Multiple Interface Policies to select port1 and port2 in the same firewall policy.", correct: true, feedback: "Correct! Enabling this feature in the GUI allows selecting multiple incoming and outgoing interfaces in one rule." },
      { label: "Create an Aggregate interface that includes port1 and port2 to create a single firewall policy.", correct: false, feedback: "Incorrect." },
      { label: "Replace port1 and port2 with the 'any' interface in a single firewall policy.", correct: false, feedback: "Incorrect." },
      { label: "Select port1 and port2 subnets in a single firewall policy without changing other settings.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 184,
    category: "System Performance",
    scenario: "System performance shows 90% memory usage. Default thresholds are green 82%, red 88%, extreme 89%. What are the two outcomes?",
    options: [
      { label: "FortiGate has entered conserve mode, and administrators can still change configuration.", correct: true, feedback: "Correct! With 90% memory, FortiGate is in conserve mode (above 88%). Administrators can still log in and change settings." },
      { label: "FortiGate drops new sessions, and administrators cannot change configuration.", correct: false, feedback: "Incorrect. New sessions are dropped above extreme, but config changes are still allowed." },
      { label: "FortiGate has entered conserve mode, and administrators can access it only via console.", correct: false, feedback: "Incorrect." },
      { label: "FortiGate refuses to accept configuration changes.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 185,
    category: "IPS",
    scenario: "Log states: logdesc=\"IPS session scan paused\", msg=\"IPS session scan, enter fail open mode\", action=\"drop\". What does this conclude?",
    options: [
      { label: "The IPS socket buffer is full and IPS engine needs more memory to create new sessions.", correct: true, feedback: "Correct! The IPS engine lacks memory and invokes the fail-open drop setting due to buffer exhaustion." },
      { label: "The IPS socket buffer is full and IPS engine cannot decode a packet.", correct: false, feedback: "Incorrect." },
      { label: "The IPS scan is paused by the IPS diagnostic command with bypass mode option 5.", correct: false, feedback: "Incorrect." },
      { label: "The IPS session scan is paused and reevaluating the packet because of a dirty flag.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 186,
    category: "Troubleshooting",
    scenario: "A debug flow output shows: \"policy-0 is matched, act-drop\" and \"Denied by forward policy check (policy 0)\". Why did FortiGate drop the packet?",
    options: [
      { label: "It matched the default implicit firewall policy.", correct: true, feedback: "Correct! Policy 0 is the default implicit deny rule at the end of the firewall policy list." },
      { label: "It failed the RPF check.", correct: false, feedback: "Incorrect." },
      { label: "It matched an explicitly configured firewall policy with the action DENY.", correct: false, feedback: "Incorrect." },
      { label: "It cannot reach the next-hop IP.", correct: false, feedback: "Incorrect." }
    ]
  },
  {
    id: 187,
    category: "System Settings",
    scenario: "An administrator configures 'set ses-denied-traffic enable' and 'set block-session-timer 30'. What are the results of this configuration?",
    options: [
      { label: "The number of logs generated by denied traffic is reduced, and a session for denied traffic is created.", correct: true, feedback: "Correct! This configuration caches dropped traffic in a session entry, reducing CPU load and redundant log messages." },
      { label: "Denied users are blocked for 30 minutes, and session helpers are disabled.", correct: false, feedback: "Incorrect." },
      { label: "A session for denied traffic is created, and denied users are blocked for 30 minutes.", correct: false, feedback: "Incorrect." },
      { label: "The number of logs generated is reduced, and session helpers are disabled.", correct: false, feedback: "Incorrect." }
    ]
  }
]