const QUESTIONS = [
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A laptop battery is swollen. What is the BEST action?",
    "opts": [
      "Continue using it until capacity drops further",
      "Power down the device and replace the battery using appropriate safety procedures",
      "Calibrate the display",
      "Replace the Wi-Fi card"
    ],
    "ans": [
      1
    ],
    "why": [
      "A swollen battery is a safety hazard and should not remain in service.",
      "Correct. A swollen battery should be handled safely and replaced.",
      "Display calibration does not address a swollen battery.",
      "The Wi-Fi card is unrelated to battery swelling."
    ],
    "tip": "A bulging battery is a stop-use safety clue; never try to flatten or charge it."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which technology is designed for very short-range contactless communication, such as tap-to-pay?",
    "opts": [
      "NFC",
      "5G",
      "HDMI",
      "SATA"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Near-field communication (NFC) is designed for very short-range wireless communication.",
      "5G is cellular networking over much greater distances.",
      "HDMI carries audio/video signals.",
      "SATA connects storage devices."
    ],
    "tip": "Think tap-distance for NFC, not room-wide wireless connections."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which mobile feature allows a phone to share its cellular internet connection with another device?",
    "opts": [
      "Tethering/hotspot",
      "Digitizer",
      "Docking station",
      "NFC scanner"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Tethering or a hotspot shares the phone's data connection.",
      "A digitizer detects touch/stylus input.",
      "A docking station expands physical connectivity.",
      "NFC is short-range communication."
    ],
    "tip": "Think tap-distance for NFC, not room-wide wireless connections."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "During Bluetooth setup, which step normally occurs after enabling pairing and finding the device?",
    "opts": [
      "Enter or confirm the appropriate PIN/passkey",
      "Replace the SIM",
      "Disable Wi-Fi permanently",
      "Format the device"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Pairing commonly requires confirming or entering a PIN/passkey before testing connectivity.",
      "A SIM is unrelated to Bluetooth pairing.",
      "Wi-Fi does not need to be permanently disabled.",
      "Formatting is not part of Bluetooth pairing."
    ],
    "tip": "Bluetooth: enable → pair → find → PIN → test."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which system can enforce corporate configurations and applications on managed phones?",
    "opts": [
      "MDM",
      "RAID",
      "POST",
      "PCL"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Mobile device management (MDM) can enforce policies, configurations, and corporate apps.",
      "RAID is a disk configuration technology.",
      "POST is a startup hardware check.",
      "PCL is a printer language."
    ],
    "tip": "For company-managed phones, look for centrally enforced policies and remote configuration."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which port is used by HTTPS by default?",
    "opts": [
      "22",
      "53",
      "80",
      "443"
    ],
    "ans": [
      3
    ],
    "why": [
      "22 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "53 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "80 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "Correct. HTTPS uses TCP port 443 by default."
    ],
    "tip": "HTTP 80; HTTPS 443."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which protocol commonly uses ports 67 and 68?",
    "opts": [
      "DHCP",
      "DNS",
      "RDP",
      "SMTP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. DHCP uses UDP ports 67 and 68.",
      "DNS commonly uses port 53.",
      "RDP uses port 3389.",
      "SMTP uses port 25."
    ],
    "tip": "Memorize common port numbers in pairs with the service and whether encryption is provided."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which protocol is primarily used for secure remote command-line administration?",
    "opts": [
      "Telnet",
      "SSH",
      "HTTP",
      "POP3"
    ],
    "ans": [
      1
    ],
    "why": [
      "Telnet is an insecure remote terminal protocol.",
      "Correct. SSH provides encrypted remote command-line access.",
      "HTTP serves web content.",
      "POP3 retrieves email."
    ],
    "tip": "For remote administration, prefer encrypted SSH over plaintext Telnet."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which Wi-Fi frequency generally has the longest range but is more prone to interference?",
    "opts": [
      "2.4 GHz",
      "5 GHz",
      "6 GHz",
      "60 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. 2.4 GHz generally travels farther and encounters more interference.",
      "5 GHz usually has shorter range and more available channels.",
      "6 GHz offers newer spectrum but generally shorter range.",
      "60 GHz is not one of the listed Core 1 Wi-Fi frequency objectives."
    ],
    "tip": "Check signal, channel congestion, and authentication separately to isolate wireless failures."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which server role automatically assigns IP configuration to clients?",
    "opts": [
      "DNS",
      "DHCP",
      "NTP",
      "Syslog"
    ],
    "ans": [
      1
    ],
    "why": [
      "DNS resolves names to addresses.",
      "Correct. DHCP leases IP configuration to clients.",
      "NTP synchronizes time.",
      "Syslog centralizes log messages."
    ],
    "tip": "DHCP gives addresses; DNS finds names."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which DNS record maps a hostname to an IPv4 address?",
    "opts": [
      "A",
      "AAAA",
      "MX",
      "CNAME"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. An A record maps a name to IPv4.",
      "AAAA maps a name to IPv6.",
      "MX identifies mail exchangers.",
      "CNAME creates an alias."
    ],
    "tip": "When an IP address works but a hostname fails, investigate name resolution."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "What is the main purpose of a DHCP reservation?",
    "opts": [
      "Always give a specific client the same leased IP address",
      "Encrypt wireless traffic",
      "Translate private addresses to public addresses",
      "Block all broadcasts"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. A reservation associates a client with a consistent DHCP-assigned address.",
      "DHCP does not encrypt Wi-Fi.",
      "Address translation is NAT.",
      "Reservations do not block broadcasts."
    ],
    "tip": "An address beginning 169.254 often points to failed DHCP communication; check the lease path."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which device forwards traffic between different IP networks?",
    "opts": [
      "Router",
      "Patch panel",
      "Unmanaged switch",
      "Access point"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Routers connect and route between IP networks.",
      "A patch panel provides cable termination/organization.",
      "A switch primarily forwards frames within a LAN.",
      "An access point provides wireless access to a network."
    ],
    "tip": "A switch forwards within a LAN; a router moves traffic between networks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "What does PoE allow an Ethernet connection to carry?",
    "opts": [
      "Power and data",
      "Only analog voice",
      "Only video",
      "Only clock signals"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Power over Ethernet can deliver electrical power along with network data.",
      "PoE is not limited to analog voice.",
      "It is not a video-only standard.",
      "It does not carry only clock signals."
    ],
    "tip": "Link lights confirm a physical connection, not necessarily correct IP settings."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A Windows client self-assigns an address in the 169.254.x.x range. Which concept does this represent?",
    "opts": [
      "APIPA",
      "Static public IP",
      "Loopback",
      "VLAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. APIPA uses 169.254.0.0/16 when normal DHCP configuration is unavailable.",
      "A static public IP is manually configured and publicly routable.",
      "IPv4 loopback is 127.0.0.0/8.",
      "A VLAN is logical LAN segmentation."
    ],
    "tip": "Check the simplest observable symptom first, then isolate hardware, configuration, and connectivity before replacing parts."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which internet connection type uses an optical network terminal (ONT)?",
    "opts": [
      "Fiber",
      "DSL",
      "Satellite",
      "Cable"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Fiber deployments commonly terminate at an ONT.",
      "DSL uses telephone copper infrastructure.",
      "Satellite uses satellite communication equipment.",
      "Cable commonly uses a cable modem."
    ],
    "tip": "ONT → fiber."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which tool helps identify an unknown cable run by generating and detecting a signal?",
    "opts": [
      "Toner probe",
      "Crimper",
      "Punchdown tool",
      "Wi-Fi analyzer"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. A toner and probe trace/identify cable runs.",
      "A crimper attaches connectors.",
      "A punchdown tool seats wires into blocks/jacks.",
      "A Wi-Fi analyzer examines wireless networks."
    ],
    "tip": "Check signal, channel congestion, and authentication separately to isolate wireless failures."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which tool is BEST for checking whether an Ethernet cable is wired correctly end-to-end?",
    "opts": [
      "Cable tester",
      "Loopback plug",
      "Network tap",
      "Cable stripper"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. A cable tester checks cable continuity/wiring.",
      "A loopback plug tests an interface.",
      "A network tap observes network traffic.",
      "A stripper removes cable jacket/insulation."
    ],
    "tip": "Link lights confirm a physical connection, not necessarily correct IP settings."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which display technology produces light at each pixel and does not require a traditional backlight?",
    "opts": [
      "OLED",
      "TN LCD",
      "VA LCD",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. OLED pixels are self-emissive.",
      "TN is an LCD technology requiring backlighting.",
      "VA is an LCD technology requiring backlighting.",
      "IPS is an LCD technology requiring backlighting."
    ],
    "tip": "OLED pixels make their own light."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which connector is commonly used for Ethernet twisted-pair network cabling?",
    "opts": [
      "RJ45",
      "RJ11",
      "F-type",
      "DB9"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. RJ45 is commonly associated with Ethernet twisted-pair cabling.",
      "RJ11 is commonly associated with telephone wiring.",
      "F-type is commonly used with coaxial cable.",
      "DB9 is a serial connector."
    ],
    "tip": "Link lights confirm a physical connection, not necessarily correct IP settings."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which two are optical fiber connector types? Select TWO.",
    "opts": [
      "LC",
      "SC",
      "RJ45",
      "F-type"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "Correct. LC is a fiber connector.",
      "Correct. SC is a fiber connector.",
      "RJ45 is used with twisted-pair Ethernet.",
      "F-type is used with coaxial cable."
    ],
    "tip": "LC, SC, and ST are fiber connectors."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which RAM form factor is commonly used in laptops?",
    "opts": [
      "SODIMM",
      "DIMM only",
      "M.2",
      "PCIe"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. SODIMM is the compact RAM form factor commonly used in laptops.",
      "Full-size DIMMs are common in desktops/servers.",
      "M.2 is a form factor used for devices such as SSDs.",
      "PCIe is an expansion interface."
    ],
    "tip": "Intermittent crashes may require testing individual memory modules and slots."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "What is the purpose of ECC memory?",
    "opts": [
      "Detect and correct certain memory errors",
      "Increase monitor refresh rate",
      "Provide Wi-Fi encryption",
      "Create RAID arrays"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Error-correcting code memory can detect/correct certain memory errors.",
      "RAM does not control monitor refresh rate.",
      "ECC is not wireless encryption.",
      "RAID is a storage configuration."
    ],
    "tip": "RAID 0 improves speed but has no redundancy; mirroring and parity address disk failures differently."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which storage interface/protocol is commonly used by high-speed M.2 SSDs over PCIe?",
    "opts": [
      "NVMe",
      "PCL",
      "VGA",
      "RJ11"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. NVMe is designed for solid-state storage and commonly runs over PCIe.",
      "PCL is a printer language.",
      "VGA is an analog video interface used to connect older monitors and projectors. It is not a storage interface.",
      "RJ11 is a connector commonly used for telephone wiring."
    ],
    "tip": "An SSD has no moving heads; clicking and grinding point toward mechanical storage."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which RAID level uses striping with NO redundancy?",
    "opts": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. RAID 0 stripes data without redundancy.",
      "RAID 1 mirrors data.",
      "RAID 5 uses striping with distributed parity.",
      "RAID 10 combines mirroring and striping."
    ],
    "tip": "RAID 0 improves speed but has no redundancy; mirroring and parity address disk failures differently."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which firmware setting helps prevent untrusted bootloaders from loading during startup?",
    "opts": [
      "Secure Boot",
      "Duplex printing",
      "DHCP reservation",
      "Color gamut"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Secure Boot validates trusted boot software.",
      "Duplex is a printer setting.",
      "DHCP reservations concern addressing.",
      "Color gamut is a display attribute."
    ],
    "tip": "Secure Boot protects the boot process."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "What should be applied in a thin, appropriate layer between a CPU and heat sink?",
    "opts": [
      "Thermal paste",
      "Printer toner",
      "Dielectric cable gel",
      "Ink"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Thermal paste improves heat transfer between CPU and heat sink.",
      "Toner is for laser printing.",
      "Cable gel is unrelated to CPU cooling.",
      "Ink is for inkjet printing."
    ],
    "tip": "CPU + heat sink → thermal paste."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which PSU characteristic indicates the maximum amount of power it is designed to provide?",
    "opts": [
      "Wattage rating",
      "Refresh rate",
      "Spindle speed",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. PSU capacity is expressed as a wattage rating.",
      "Refresh rate is a display attribute.",
      "Spindle speed applies to rotating hard drives.",
      "Pixel density is a display attribute."
    ],
    "tip": "Check the simplest observable symptom first, then isolate hardware, configuration, and connectivity before replacing parts."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A user wants printing on both sides of each sheet. Which printer setting should be enabled?",
    "opts": [
      "Duplex",
      "Orientation only",
      "PCL",
      "ADF"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Duplex printing prints on both sides.",
      "Orientation changes portrait/landscape layout.",
      "PCL is a printer language.",
      "ADF feeds documents into a scanner/copier."
    ],
    "tip": "Match the print symptom to the printer technology before replacing parts."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which maintenance action is associated with a laser printer?",
    "opts": [
      "Replace toner and use the appropriate maintenance kit",
      "Replace a ribbon",
      "Use special thermal paper",
      "Clean an inkjet printhead only"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Laser maintenance includes toner replacement and maintenance kits.",
      "Ribbons are associated with impact printers.",
      "Special thermal paper is used by thermal printers.",
      "Printhead cleaning is associated with inkjet maintenance."
    ],
    "tip": "Match the print symptom to the printer technology before replacing parts."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which hypervisor type runs directly on physical hardware?",
    "opts": [
      "Type 1",
      "Type 2",
      "SaaS",
      "Container only"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. A Type 1 hypervisor runs on the hardware (bare metal).",
      "A Type 2 hypervisor runs on a host OS.",
      "SaaS is a cloud service model.",
      "Containers are not a hypervisor type."
    ],
    "tip": "Check the simplest observable symptom first, then isolate hardware, configuration, and connectivity before replacing parts."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which is a valid reason to use a virtual machine?",
    "opts": [
      "Sandboxing/testing software",
      "Physically repairing a cracked screen",
      "Replacing printer toner",
      "Terminating copper cable"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. VMs are useful for sandboxing, testing, legacy software, and cross-platform use.",
      "Screen repair is physical hardware work.",
      "Toner replacement is printer maintenance.",
      "Cable termination is physical networking work."
    ],
    "tip": "VMs are great for isolated testing."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which cloud model provides complete applications to users over a service platform?",
    "opts": [
      "SaaS",
      "IaaS",
      "PaaS",
      "VLAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Software as a service provides ready-to-use applications.",
      "IaaS provides infrastructure resources.",
      "PaaS provides a platform for application development/deployment.",
      "A VLAN is a networking concept."
    ],
    "tip": "First identify who manages the infrastructure, platform, and application."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which cloud characteristic means resources can expand or shrink as demand changes?",
    "opts": [
      "Elasticity",
      "POST",
      "Duplex",
      "Spindle speed"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Elasticity is the ability to scale resources with demand.",
      "POST is a startup test.",
      "Duplex is two-sided printing.",
      "Spindle speed describes rotating drives."
    ],
    "tip": "First identify who manages the infrastructure, platform, and application."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A desktop randomly shuts down during heavy workloads and is very hot. What issue is MOST likely?",
    "opts": [
      "Overheating",
      "Incorrect page orientation",
      "Bad MX record",
      "NFC failure"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Heat-related shutdowns strongly suggest overheating.",
      "Page orientation is a printer setting.",
      "MX records relate to email routing.",
      "Near-field communication (NFC) exchanges small amounts of data at very short range, such as tap-to-pay or reading tags."
    ],
    "tip": "Think tap-distance for NFC, not room-wide wireless connections."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A PC repeatedly loses the correct date and time after being unplugged. Which symptom category does this match?",
    "opts": [
      "Inaccurate system date/time",
      "Port flapping",
      "Display burn-in",
      "Paper misfeed"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. The objective explicitly includes inaccurate system date/time among motherboard/CPU/RAM/power symptoms.",
      "Port flapping is networking.",
      "Burn-in is a display issue.",
      "Misfeed is a printer issue."
    ],
    "tip": "Clock resets often point toward motherboard/CMOS-related troubleshooting."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A hard drive makes repeated clicking noises and files are becoming corrupted. What should you suspect?",
    "opts": [
      "Drive failure",
      "Incorrect Wi-Fi channel",
      "Bad printer tray",
      "Bluetooth pairing issue"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Clicking plus corruption is a strong storage-drive failure symptom.",
      "Wi-Fi channels do not cause drive clicking.",
      "Printer trays are unrelated.",
      "Bluetooth is unrelated."
    ],
    "tip": "Bluetooth is designed for nearby paired devices; verify pairing and range before replacing hardware."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which warning system reports drive health problems before complete failure?",
    "opts": [
      "S.M.A.R.T.",
      "NFC",
      "PCL",
      "VDI"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. S.M.A.R.T. monitors drive health indicators.",
      "NFC is short-range wireless communication.",
      "PCL is a printer language.",
      "VDI is virtual desktop infrastructure."
    ],
    "tip": "Memorize common port numbers in pairs with the service and whether encryption is provided."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A projector displays nothing after a laptop is connected. What simple issue should be checked FIRST?",
    "opts": [
      "Correct input source and physical cabling",
      "RAID parity",
      "DHCP lease duration",
      "Printer toner"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Input selection and cabling are common display/projector causes and quick to verify.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "DHCP lease duration is networking configuration.",
      "Toner is printing."
    ],
    "tip": "No projector image? Input source + cable first."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A phone's battery case is visibly bulging. Which issue is present?",
    "opts": [
      "Swollen battery",
      "Cursor drift",
      "Display burn-in",
      "Port flapping"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Physical bulging is a swollen-battery symptom.",
      "Cursor drift is touch/input behavior.",
      "Burn-in affects displays.",
      "Port flapping affects network switch ports."
    ],
    "tip": "Separate battery safety symptoms from charging and software symptoms."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A touchscreen registers taps in the wrong locations. Which symptom best matches?",
    "opts": [
      "Cursor drift/touch calibration issue",
      "RAID failure",
      "Frozen print queue",
      "DNS MX failure"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Incorrect touch registration indicates calibration/digitizer-related input issues.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "Print queues are printer/software issues.",
      "MX records concern mail routing."
    ],
    "tip": "RAID 0 improves speed but has no redundancy; mirroring and parity address disk failures differently."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Voice calls over the network sound choppy and delayed. Which two network symptoms may contribute? Select TWO.",
    "opts": [
      "Jitter",
      "High latency",
      "Printer speckling",
      "Display burn-in"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "Correct. Jitter is variation in packet arrival timing and can harm VoIP quality.",
      "Correct. High latency creates noticeable delay.",
      "Speckling is a printer symptom.",
      "Burn-in is a display symptom."
    ],
    "tip": "VoIP hates delay and inconsistent packet timing: latency + jitter."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Wi-Fi works but repeatedly drops and reconnects. Which listed symptom best describes this?",
    "opts": [
      "Intermittent wireless connectivity",
      "RAID failure",
      "Frozen print queue",
      "Capacitor swelling"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Repeated wireless drops are intermittent wireless connectivity.",
      "RAID concerns disks.",
      "A frozen queue concerns printing.",
      "Swollen capacitors concern hardware."
    ],
    "tip": "RAID 0 improves speed but has no redundancy; mirroring and parity address disk failures differently."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Printed pages contain a faint duplicate of the image farther down the page. Which symptom is this?",
    "opts": [
      "Double/echo image",
      "Paper not feeding",
      "Incorrect orientation",
      "Authentication failure"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. A repeated faint image is a double/echo print symptom.",
      "Paper feeding issues prevent proper paper movement.",
      "Orientation affects page layout.",
      "Authentication is not a print-quality symptom."
    ],
    "tip": "Check the simplest observable symptom first, then isolate hardware, configuration, and connectivity before replacing parts."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Jobs remain stuck and no documents print even though the printer is reachable. Which symptom should you investigate?",
    "opts": [
      "Frozen print queue",
      "Swollen battery",
      "Dead pixels",
      "Port flapping"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Stuck jobs can indicate a frozen print queue.",
      "Battery swelling is mobile hardware.",
      "Dead pixels are display issues.",
      "Port flapping is a network-switch symptom."
    ],
    "tip": "Match the print symptom to the printer technology before replacing parts."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does DHCP stand for?",
    "opts": [
      "Non-volatile Memory Express",
      "Virtual Desktop Infrastructure",
      "Dynamic Host Configuration Protocol",
      "Small Outline Dual In-line Memory Module"
    ],
    "ans": [
      2
    ],
    "why": [
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "VDI hosts desktop environments centrally and delivers them remotely to users.",
      "Correct. Dynamic Host Configuration Protocol.",
      "SODIMM is a compact RAM module commonly used in laptops and small computers."
    ],
    "tip": "An address beginning 169.254 often points to failed DHCP communication; check the lease path."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does DNS stand for?",
    "opts": [
      "Power over Ethernet",
      "Non-volatile Memory Express",
      "Optical Network Terminal",
      "Domain Name System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Ethernet is a wired networking technology; it does not directly address unrelated component failures.",
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "An ONT terminates a fiber-optic provider connection and presents network service to customer equipment.",
      "Correct. Domain Name System."
    ],
    "tip": "When an IP address works but a hostname fails, investigate name resolution."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does NVMe stand for?",
    "opts": [
      "Optical Network Terminal",
      "Dynamic Host Configuration Protocol",
      "Automatic Private Internet Protocol Addressing",
      "Non-volatile Memory Express"
    ],
    "ans": [
      3
    ],
    "why": [
      "An ONT terminates a fiber-optic provider connection and presents network service to customer equipment.",
      "DHCP automatically supplies clients with IP configuration, including address, mask, gateway, and often DNS.",
      "Automatic Private Internet Protocol Addressing is the expansion of a different technical abbreviation; its initials do not match the abbreviation named in the prompt.",
      "Correct. Non-volatile Memory Express."
    ],
    "tip": "Isolate physical connectivity, addressing, name resolution, and application access in that order."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does SODIMM stand for?",
    "opts": [
      "Small Outline Dual In-line Memory Module",
      "Power over Ethernet",
      "Non-volatile Memory Express",
      "Domain Name System"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Small Outline Dual In-line Memory Module.",
      "Ethernet is a wired networking technology; it does not directly address unrelated component failures.",
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "Domain Name System is the expansion of a different technical abbreviation; its initials do not match the abbreviation named in the prompt."
    ],
    "tip": "Link lights confirm a physical connection, not necessarily correct IP settings."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does TPM stand for?",
    "opts": [
      "Trusted Platform Module",
      "Dynamic Host Configuration Protocol",
      "Non-volatile Memory Express",
      "Self-monitoring Analysis and Reporting Technology"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Trusted Platform Module.",
      "DHCP automatically supplies clients with IP configuration, including address, mask, gateway, and often DNS.",
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "A network port identifies a service endpoint; a physical port accepts a compatible connector."
    ],
    "tip": "Associate each common service with its transport and port; similar services may use different encryption."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does PoE stand for?",
    "opts": [
      "Power over Ethernet",
      "Optical Network Terminal",
      "Self-monitoring Analysis and Reporting Technology",
      "Trusted Platform Module"
    ],
    "ans": [
      0
    ],
    "why": [
      "Correct. Power over Ethernet.",
      "An ONT terminates a fiber-optic provider connection and presents network service to customer equipment.",
      "A network port identifies a service endpoint; a physical port accepts a compatible connector.",
      "Trusted Platform Module is the expansion of a different technical abbreviation; its initials do not match the abbreviation named in the prompt."
    ],
    "tip": "Link lights confirm a physical connection, not necessarily correct IP settings."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does VDI stand for?",
    "opts": [
      "Non-volatile Memory Express",
      "Dynamic Host Configuration Protocol",
      "Virtual Desktop Infrastructure",
      "Trusted Platform Module"
    ],
    "ans": [
      2
    ],
    "why": [
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "DHCP automatically supplies clients with IP configuration, including address, mask, gateway, and often DNS.",
      "Correct. Virtual Desktop Infrastructure.",
      "Trusted Platform Module is the expansion of a different technical abbreviation; its initials do not match the abbreviation named in the prompt."
    ],
    "tip": "A Type 1 hypervisor runs on hardware; Type 2 runs above a host operating system."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does S.M.A.R.T. stand for?",
    "opts": [
      "Virtual Desktop Infrastructure",
      "Self-monitoring Analysis and Reporting Technology",
      "Automatic Private Internet Protocol Addressing",
      "Power over Ethernet"
    ],
    "ans": [
      1
    ],
    "why": [
      "VDI hosts desktop environments centrally and delivers them remotely to users.",
      "Correct. Self-monitoring Analysis and Reporting Technology.",
      "Automatic Private Internet Protocol Addressing is the expansion of a different technical abbreviation; its initials do not match the abbreviation named in the prompt.",
      "Ethernet is a wired networking technology; it does not directly address unrelated component failures."
    ],
    "tip": "A Type 1 hypervisor runs on hardware; Type 2 runs above a host operating system."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does ONT stand for?",
    "opts": [
      "Non-volatile Memory Express",
      "Small Outline Dual In-line Memory Module",
      "Optical Network Terminal",
      "Dynamic Host Configuration Protocol"
    ],
    "ans": [
      2
    ],
    "why": [
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "SODIMM is a compact RAM module commonly used in laptops and small computers.",
      "Correct. Optical Network Terminal.",
      "DHCP automatically supplies clients with IP configuration, including address, mask, gateway, and often DNS."
    ],
    "tip": "Isolate physical connectivity, addressing, name resolution, and application access in that order."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does APIPA stand for?",
    "opts": [
      "Small Outline Dual In-line Memory Module",
      "Non-volatile Memory Express",
      "Virtual Desktop Infrastructure",
      "Automatic Private Internet Protocol Addressing"
    ],
    "ans": [
      3
    ],
    "why": [
      "SODIMM is a compact RAM module commonly used in laptops and small computers.",
      "NVMe is a storage protocol designed for solid-state drives over PCIe; it is unrelated to the acronym being requested unless that acronym is NVMe.",
      "VDI hosts desktop environments centrally and delivers them remotely to users.",
      "Correct. Automatic Private Internet Protocol Addressing."
    ],
    "tip": "A Type 1 hypervisor runs on hardware; Type 2 runs above a host operating system."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician discovers a laptop battery is bulging and the touchpad is lifting. What should be done FIRST?",
    "opts": [
      "Power off and isolate the device for safe battery replacement",
      "Run a battery calibration cycle",
      "Press the touchpad back into place",
      "Update the BIOS before inspection"
    ],
    "ans": [
      0
    ],
    "why": [
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "Battery calibration helps estimate remaining charge; it cannot repair a physically swollen cell.",
      "Pushing a raised touchpad back can compress a swollen battery underneath, creating a puncture or fire risk.",
      "BIOS/UEFI firmware initializes hardware and controls boot settings; updating it does not correct battery swelling."
    ],
    "tip": "Separate battery safety symptoms from charging and software symptoms."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An artist wants precise pressure-sensitive input on a tablet and a desktop-style keyboard, monitor, and Ethernet at a desk. Which TWO accessories best meet the request?",
    "opts": [
      "Stylus",
      "Docking station",
      "NFC tag",
      "SIM card",
      "RFID reader"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "A stylus provides precise pen input on compatible touchscreens; it is not a network or security tool.",
      "A docking station adds external ports and peripherals such as monitors, keyboards, and Ethernet.",
      "Near-field communication (NFC) exchanges small amounts of data at very short range, such as tap-to-pay or reading tags.",
      "A SIM identifies a subscriber to a cellular network; it is not a pen-input or desktop expansion accessory.",
      "Radio-frequency identification (RFID) reads tags for identification and tracking, not precision drawing."
    ],
    "tip": "Underline each distinct requirement and select one solution for each."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A company permits BYOD but requires passcodes, approved applications, and remote configuration. Which solution best enforces these controls?",
    "opts": [
      "Mobile device management (MDM)",
      "A consumer Bluetooth headset",
      "An HDMI adapter",
      "A RAID controller"
    ],
    "ans": [
      0
    ],
    "why": [
      "Mobile device management (MDM) centrally enforces mobile security policies, settings, and managed apps.",
      "A Bluetooth headset is a short-range wireless audio device for calls and listening; it does not administer device policies.",
      "An HDMI adapter carries video and often audio to a display; it cannot manage mobile security.",
      "A RAID controller coordinates multiple storage disks into an array for redundancy or performance, not phone administration."
    ],
    "tip": "When a business needs the same rules on employee-owned phones, look for centralized policy enforcement."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician must allow secure remote CLI access to a network device while blocking unencrypted terminal sessions. Which port should be permitted?",
    "opts": [
      "TCP 23",
      "TCP 22",
      "TCP 80",
      "UDP 67"
    ],
    "ans": [
      1
    ],
    "why": [
      "TCP port 23 is used by Telnet, an unencrypted remote terminal protocol.",
      "TCP port 22 is used by SSH, which encrypts remote command-line sessions.",
      "TCP port 80 normally carries unencrypted HTTP web traffic.",
      "UDP port 67 is used by DHCP servers to issue network configuration."
    ],
    "tip": "Associate each common service with its transport and port; similar services may use different encryption."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Users can browse websites, but a new mail client cannot retrieve messages while leaving them on the server. Which port is MOST likely needed for IMAP?",
    "opts": [
      "110",
      "25",
      "143",
      "3389"
    ],
    "ans": [
      2
    ],
    "why": [
      "110 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "25 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "143 is a numeric setting or identifier; its meaning depends on the protocol or device in the question.",
      "3389 is a numeric setting or identifier; its meaning depends on the protocol or device in the question."
    ],
    "tip": "Memorize common port numbers in pairs with the service and whether encryption is provided."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An apartment has many neighboring 2.4 GHz networks. A compatible client needs less interference and can accept reduced range. Which change is BEST?",
    "opts": [
      "Move to a suitable 5 GHz channel",
      "Increase 2.4 GHz channel width indiscriminately",
      "Disable all encryption",
      "Switch to NFC"
    ],
    "ans": [
      0
    ],
    "why": [
      "Moving to 5 GHz can avoid crowded 2.4 GHz channels, but only if the client and access point support the band.",
      "Increase 2.4 GHz channel width indiscriminately describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Disable all encryption describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Near-field communication (NFC) exchanges small amounts of data at very short range, such as tap-to-pay or reading tags."
    ],
    "tip": "5 GHz often has less congestion than 2.4 GHz, with different range tradeoffs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A business needs a central system to collect event messages from routers and switches. Which server role is MOST appropriate?",
    "opts": [
      "DNS",
      "Syslog",
      "NTP",
      "DHCP"
    ],
    "ans": [
      1
    ],
    "why": [
      "DNS translates domain names to records such as IP addresses.",
      "Syslog is a standard for collecting and forwarding event log messages from network devices and servers.",
      "NTP describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "DHCP automatically assigns IP settings such as addresses, masks, and gateways."
    ],
    "tip": "Syslog centralizes event logs; NTP synchronizes clocks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A domain must identify the mail server that accepts incoming email. Which DNS record is required?",
    "opts": [
      "TXT",
      "CNAME",
      "AAAA",
      "MX"
    ],
    "ans": [
      3
    ],
    "why": [
      "A DNS TXT record stores text-based information, often used for email validation policies such as SPF.",
      "CNAME describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "AAAA describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "MX describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "MX identifies mail exchangers; AAAA stores IPv6 addresses."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A DHCP pool is 192.168.10.100–192.168.10.200. A printer at .120 must never be leased to a client. Which setting is MOST direct?",
    "opts": [
      "Exclusion",
      "VLAN",
      "DNS TXT record",
      "Default gateway"
    ],
    "ans": [
      0
    ],
    "why": [
      "A DHCP exclusion prevents a specified address or range from being handed out dynamically.",
      "VLAN describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "DNS translates domain names to records such as IP addresses.",
      "Default gateway describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "A DHCP exclusion prevents a specified address from being handed out."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician needs to power a ceiling access point through its Ethernet cable without a PoE-capable switch. What should be installed?",
    "opts": [
      "Cable modem",
      "PoE injector",
      "Patch panel",
      "Optical network terminal"
    ],
    "ans": [
      1
    ],
    "why": [
      "A cable carries signals or power between devices; the connector and signal type determine its use.",
      "A PoE injector adds electrical power to an Ethernet cable so a compatible endpoint can run without a separate power adapter.",
      "Patch panel describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Optical network terminal describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "A PoE injector adds electrical power to the Ethernet run."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A workstation self-assigns 169.254.42.7 and cannot reach resources on other subnets. Which service should be checked FIRST?",
    "opts": [
      "DNS TXT",
      "DHCP",
      "SMTP",
      "NTP"
    ],
    "ans": [
      1
    ],
    "why": [
      "DNS translates domain names to records such as IP addresses.",
      "DHCP automatically assigns IP settings such as addresses, masks, and gateways.",
      "SMTP transfers outgoing email between mail clients and servers; it does not provide IP addresses.",
      "NTP describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "An APIPA address commonly indicates failure to obtain a DHCP lease."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A remote farm has no terrestrial broadband and needs internet access, accepting higher latency. Which connection is the most plausible?",
    "opts": [
      "Satellite",
      "Fiber to the premises",
      "DSL over a missing phone line",
      "Local Ethernet LAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Satellite internet connects through orbiting spacecraft and can serve locations without cable or fiber, although latency may be higher.",
      "Fiber to the premises describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "DSL over a missing phone line describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Ethernet is a wired networking technology; it does not directly address unrelated component failures."
    ],
    "tip": "Satellite can serve remote sites, typically with latency tradeoffs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician needs to identify which wall jack maps to an unlabeled cable in a wiring closet. Which tool pair is MOST useful?",
    "opts": [
      "Toner and probe",
      "Loopback plug and Wi-Fi analyzer",
      "Crimper and multimeter only",
      "Punchdown tool and screwdriver"
    ],
    "ans": [
      0
    ],
    "why": [
      "A toner sends a tracing signal through cable; a probe detects that signal to identify a cable endpoint.",
      "Wi-Fi provides local wireless network connectivity, not battery or display repair.",
      "Crimper and multimeter only describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Punchdown tool and screwdriver describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "A tone generator and probe trace cabling paths."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A photo editor prioritizes wide viewing angles and consistent color on an LCD monitor. Which panel technology is the BEST fit?",
    "opts": [
      "TN",
      "IPS",
      "VGA",
      "SATA"
    ],
    "ans": [
      1
    ],
    "why": [
      "Twisted nematic LCD panels typically prioritize speed and cost over the viewing-angle consistency of IPS.",
      "IP provides logical addressing and routing across networks.",
      "VGA is an analog video interface used to connect older monitors and projectors. It is not a storage interface.",
      "SATA is a connection standard for storage drives, not a wireless or video connection."
    ],
    "tip": "IPS LCDs generally offer better viewing angles and color consistency than TN."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A workstation needs a digital video cable that can carry high-resolution video and audio to a compatible monitor. Which TWO are appropriate?",
    "opts": [
      "HDMI",
      "DisplayPort",
      "RJ11",
      "SATA",
      "F-type coax"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "HDMI transports digital video and audio between compatible devices.",
      "A display presents visual output; its calibration adjusts image appearance rather than hardware power safety.",
      "RJ11 is commonly used for telephone wiring, not high-resolution digital display connections.",
      "SATA is a connection standard for storage drives, not a wireless or video connection.",
      "F-type coax describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "HDMI and DisplayPort carry digital video and can carry audio."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A server must detect and correct common single-bit memory errors. Which memory feature is MOST relevant?",
    "opts": [
      "ECC RAM",
      "Non-ECC DIMM only",
      "Higher refresh rate",
      "mSATA"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAM is volatile working memory used by active programs.",
      "Non-ECC RAM lacks the error-correction capability required for detecting and correcting common single-bit errors.",
      "Higher refresh rate describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "SATA is a connection standard for storage drives, not a wireless or video connection."
    ],
    "tip": "ECC adds error-detection and correction capability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A small business wants to survive one disk failure with only two disks, and accepts reduced usable capacity. Which RAID level fits?",
    "opts": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    "ans": [
      1
    ],
    "why": [
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level."
    ],
    "tip": "RAID 1 mirrors two drives; RAID 0 offers no redundancy."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician is selecting a modern SSD protocol that communicates over PCIe. Which is the correct choice?",
    "opts": [
      "NVMe",
      "SATA",
      "PCL",
      "VGA"
    ],
    "ans": [
      0
    ],
    "why": [
      "NVMe is a protocol for fast SSD access using PCIe lanes rather than traditional SATA command transport.",
      "SATA is a connection standard for storage drives, not a wireless or video connection.",
      "PCL describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "VGA is an analog video interface used to connect older monitors and projectors. It is not a storage interface."
    ],
    "tip": "NVMe is designed for nonvolatile storage over PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A device needs firmware-based verification of trusted boot components. Which UEFI setting is most directly relevant?",
    "opts": [
      "Secure Boot",
      "Wake-on-LAN",
      "Duplex printing",
      "DHCP scope"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure Boot validates trusted boot software during startup; it does not provide general-purpose CPU cooling or power regulation.",
      "Wake-on-LAN describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Duplex printing describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "DHCP automatically assigns IP settings such as addresses, masks, and gateways."
    ],
    "tip": "Secure Boot helps prevent unauthorized boot loaders from starting."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which TWO components are normally required for proper CPU cooling after installing a compatible processor?",
    "opts": [
      "Heat sink",
      "Thermal paste/pad",
      "USB hub",
      "RJ11 adapter",
      "Print server"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "A heat sink conducts heat away from a CPU so airflow or liquid cooling can dissipate it.",
      "Thermal components transfer or manage heat; the exact application depends on the device.",
      "USB is a standard for connecting peripherals and often supplying power.",
      "An adapter connects otherwise incompatible ports or interfaces, but does not add unrelated management functions.",
      "Print server describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "The heat sink dissipates heat; thermal interface material improves transfer."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A system intermittently shuts off after a high-power GPU upgrade. Which PSU specification should be checked FIRST?",
    "opts": [
      "Wattage rating and available power connectors",
      "Monitor pixel density",
      "DHCP lease duration",
      "SSD filesystem"
    ],
    "ans": [
      0
    ],
    "why": [
      "Power equipment delivers or conditions electrical energy; its role depends on the component.",
      "Pixel density describes display sharpness, not whether a power supply can support a graphics card.",
      "DHCP automatically assigns IP settings such as addresses, masks, and gateways.",
      "An SSD stores data in flash memory without spinning disks."
    ],
    "tip": "The PSU must deliver sufficient power and the required connectors."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A shared office printer must hold sensitive jobs until the employee authenticates at the device. Which feature is BEST?",
    "opts": [
      "Secured printing",
      "Higher DPI",
      "Duplex mode",
      "Orientation change"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure printing holds a job until the authorized user releases it at the printer, protecting confidential pages.",
      "Higher DPI describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Duplex mode describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Orientation change describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "Secure release protects print jobs until authentication."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A laser printer produces faded output and the toner is nearly empty. What is the most appropriate first maintenance step?",
    "opts": [
      "Replace toner cartridge",
      "Replace inkjet printhead",
      "Replace thermal paper",
      "Replace impact ribbon"
    ],
    "ans": [
      0
    ],
    "why": [
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed."
    ],
    "tip": "Laser printers use toner; the other supplies belong to different printer types."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A lab needs multiple operating systems running directly on dedicated server hardware without a host desktop OS. Which hypervisor type fits?",
    "opts": [
      "Type 2",
      "Type 1",
      "Application sandbox only",
      "Container registry"
    ],
    "ans": [
      1
    ],
    "why": [
      "A Type 2 hypervisor runs on top of a host operating system rather than directly on bare metal.",
      "Type 1 describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Application sandbox only describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Container registry describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "A Type 1 hypervisor runs directly on the hardware."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A company wants to present centralized virtual desktops to users while processing occurs on remote infrastructure. Which solution is BEST?",
    "opts": [
      "VDI",
      "NFC",
      "RAID 0",
      "PoE"
    ],
    "ans": [
      0
    ],
    "why": [
      "Virtual Desktop Infrastructure provides remotely hosted desktops, rather than simply running isolated applications.",
      "Near-field communication (NFC) exchanges small amounts of data at very short range, such as tap-to-pay or reading tags.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "PoE describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "Virtual Desktop Infrastructure hosts user desktop environments centrally."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A development team wants to deploy its code without maintaining operating systems or virtual machine infrastructure. Which cloud model is BEST?",
    "opts": [
      "IaaS",
      "PaaS",
      "On-premises bare metal",
      "Local file share"
    ],
    "ans": [
      1
    ],
    "why": [
      "Infrastructure as a Service rents virtual compute, networking, and storage while the customer manages operating systems and applications.",
      "PaaS describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "On-premises bare metal describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Local file share describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "PaaS provides a managed application platform; IaaS leaves more infrastructure administration to the customer."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A cloud application automatically adds compute capacity during peak demand and removes it later. Which characteristic is shown?",
    "opts": [
      "Elasticity",
      "Multitenancy only",
      "Ingress",
      "Static allocation"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cloud elasticity adjusts resources up or down in response to demand.",
      "Multitenancy only describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Ingress describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Static allocation describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "Elasticity is the ability to scale resources with demand."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A desktop loses its date and time after being unplugged, but otherwise boots normally. Which component is the likely cause?",
    "opts": [
      "CMOS/RTC battery",
      "DisplayPort cable",
      "Wi-Fi antenna",
      "Print spooler"
    ],
    "ans": [
      0
    ],
    "why": [
      "A battery stores electrical energy to operate portable hardware.",
      "A display presents visual output; its calibration adjusts image appearance rather than hardware power safety.",
      "Wi-Fi provides local wireless network connectivity, not battery or display repair.",
      "The print spooler queues print jobs for printers; it does not maintain the motherboard clock."
    ],
    "tip": "A failing CMOS/RTC battery can cause time and firmware settings to reset."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A hard disk begins clicking and S.M.A.R.T. reports impending failure. What should the technician prioritize?",
    "opts": [
      "Back up data and replace the drive",
      "Defragment repeatedly until noise stops",
      "Disable alerts and continue use",
      "Increase display refresh rate"
    ],
    "ans": [
      0
    ],
    "why": [
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "Defragmentation creates additional disk activity and cannot repair mechanical clicking or impending drive failure.",
      "Disable alerts and continue use describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "A display presents visual output; its calibration adjusts image appearance rather than hardware power safety."
    ],
    "tip": "Protect data immediately and replace failing hardware."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A projector displays a blank screen although the laptop works and the projector is powered on. What is the BEST first check?",
    "opts": [
      "Correct input source and physical video connection",
      "Replace the motherboard",
      "Rebuild the RAID array",
      "Disable DHCP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Selecting the correct projector input and checking the video cable can restore a missing picture when the source laptop works.",
      "Replacement swaps a component; whether it is appropriate depends on which component actually failed.",
      "RAID combines multiple disks for performance, fault tolerance, or both depending on level.",
      "DHCP automatically assigns IP settings such as addresses, masks, and gateways."
    ],
    "tip": "Verify the source and cable before replacing hardware."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A phone charges only when the cable is held at an angle. Other chargers show the same behavior. What is the likely issue?",
    "opts": [
      "Physically damaged or obstructed charging port",
      "Incorrect DNS MX record",
      "RAID controller failure",
      "Wrong printer driver"
    ],
    "ans": [
      0
    ],
    "why": [
      "A network port identifies a service endpoint; a physical port accepts a compatible connector.",
      "DNS translates domain names to records such as IP addresses.",
      "A RAID controller coordinates multiple storage disks into an array for redundancy or performance, not phone administration.",
      "A printer produces physical output; printer maintenance addresses print quality and paper-handling issues."
    ],
    "tip": "Consistent angle-sensitive charging suggests a port or connector issue."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Video calls sound choppy even though average throughput is high. Which TWO measurements are most relevant?",
    "opts": [
      "Jitter",
      "Packet loss",
      "Printer DPI",
      "SSD capacity",
      "CPU socket"
    ],
    "ans": [
      0,
      1
    ],
    "why": [
      "Jitter is variation in packet arrival timing, which can make real-time audio sound choppy.",
      "Packet loss describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "A printer produces physical output; printer maintenance addresses print quality and paper-handling issues.",
      "An SSD stores data in flash memory without spinning disks.",
      "The CPU executes program instructions and performs general processing."
    ],
    "tip": "Variable delay and lost packets strongly affect real-time voice/video."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A switch interface repeatedly alternates between connected and disconnected. What symptom is this?",
    "opts": [
      "Port flapping",
      "Screen burn-in",
      "Ghost printing",
      "Data deduplication"
    ],
    "ans": [
      0
    ],
    "why": [
      "A network port identifies a service endpoint; a physical port accepts a compatible connector.",
      "Burn-in is persistent image retention on a display, not a network link-state problem.",
      "Ghost printing describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "Data deduplication describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "Port flapping means the link repeatedly transitions up and down."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A laser printer leaves a faint duplicate image further down the page. What is this symptom called?",
    "opts": [
      "Double/echo image",
      "Multipage misfeed",
      "Wrong orientation",
      "No network route"
    ],
    "ans": [
      0
    ],
    "why": [
      "An echo image is a faint repeated print artifact that can arise from laser printer imaging or fuser components.",
      "IP provides logical addressing and routing across networks.",
      "Wrong orientation describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "No network route describes a different component or action; its role should be distinguished from the requested function in this situation."
    ],
    "tip": "Ghost or echo images are repeated faint impressions on printed output."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Users cannot print because documents remain stuck despite the printer being online. What should be investigated?",
    "opts": [
      "Frozen print queue/spooler",
      "GPU clock speed",
      "DNS AAAA record only",
      "CMOS battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "A stuck print queue can prevent later documents from printing until the spooler or blocking job is cleared.",
      "GPU clock speed describes a different component or action; its role should be distinguished from the requested function in this situation.",
      "DNS translates domain names to records such as IP addresses.",
      "A battery stores electrical energy to operate portable hardware."
    ],
    "tip": "A frozen queue can prevent new print jobs from proceeding."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does AAA stand for?",
    "opts": [
      "Globally Unique Identifier",
      "Graphics Processing Unit",
      "Organic Light-emitting Diode",
      "Authentication, Authorization, and Accounting"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of AAA; AAA means Authentication, Authorization, and Accounting.",
      "Incorrect. That is not the expansion of AAA; AAA means Authentication, Authorization, and Accounting.",
      "Incorrect. That is not the expansion of AAA; AAA means Authentication, Authorization, and Accounting.",
      "Correct: AAA = Authentication, Authorization, and Accounting."
    ],
    "tip": "AAA → Authentication, Authorization, and Accounting."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ACL stand for?",
    "opts": [
      "Endpoint Detection and Response",
      "Personal Area Network",
      "Remote Desktop Protocol",
      "Access Control List"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ACL; ACL means Access Control List.",
      "Incorrect. That is not the expansion of ACL; ACL means Access Control List.",
      "Incorrect. That is not the expansion of ACL; ACL means Access Control List.",
      "Correct: ACL = Access Control List."
    ],
    "tip": "ACL → Access Control List."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ADF stand for?",
    "opts": [
      "Business Email Compromise",
      "Personal Identity Verification",
      "Acceptable Use Policy",
      "Automatic Document Feeder"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ADF; ADF means Automatic Document Feeder.",
      "Incorrect. That is not the expansion of ADF; ADF means Automatic Document Feeder.",
      "Incorrect. That is not the expansion of ADF; ADF means Automatic Document Feeder.",
      "Correct: ADF = Automatic Document Feeder."
    ],
    "tip": "ADF → Automatic Document Feeder."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does AES stand for?",
    "opts": [
      "Domain Name System",
      "Mobile Device Management",
      "Remote Authentication Dial-in User Server",
      "Advanced Encryption Standard"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of AES; AES means Advanced Encryption Standard.",
      "Incorrect. That is not the expansion of AES; AES means Advanced Encryption Standard.",
      "Incorrect. That is not the expansion of AES; AES means Advanced Encryption Standard.",
      "Correct: AES = Advanced Encryption Standard."
    ],
    "tip": "AES → Advanced Encryption Standard."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does AMD stand for?",
    "opts": [
      "Globally Unique Identifier",
      "Light-emitting Diode",
      "Information Technology eXtended",
      "Advanced Micro Devices, Inc."
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of AMD; AMD means Advanced Micro Devices, Inc..",
      "Incorrect. That is not the expansion of AMD; AMD means Advanced Micro Devices, Inc..",
      "Incorrect. That is not the expansion of AMD; AMD means Advanced Micro Devices, Inc..",
      "Correct: AMD = Advanced Micro Devices, Inc.."
    ],
    "tip": "AMD → Advanced Micro Devices, Inc.."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does AP stand for?",
    "opts": [
      "Cross-site Scripting",
      "End-of-life",
      "Temporal Key Integrity Protocol",
      "Access Point"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of AP; AP means Access Point.",
      "Incorrect. That is not the expansion of AP; AP means Access Point.",
      "Incorrect. That is not the expansion of AP; AP means Access Point.",
      "Correct: AP = Access Point."
    ],
    "tip": "AP → Access Point."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does APFS stand for?",
    "opts": [
      "Long-Term Evolution",
      "Facial Recognition Technology",
      "Network Access Control",
      "Apple File System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of APFS; APFS means Apple File System.",
      "Incorrect. That is not the expansion of APFS; APFS means Apple File System.",
      "Incorrect. That is not the expansion of APFS; APFS means Apple File System.",
      "Correct: APFS = Apple File System."
    ],
    "tip": "APFS → Apple File System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does APIPA stand for?",
    "opts": [
      "Multifunction Printer",
      "Privileged Access Management",
      "Reduced Instruction Set Computer",
      "Automatic Private Internet Protocol Addressing"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of APIPA; APIPA means Automatic Private Internet Protocol Addressing.",
      "Incorrect. That is not the expansion of APIPA; APIPA means Automatic Private Internet Protocol Addressing.",
      "Incorrect. That is not the expansion of APIPA; APIPA means Automatic Private Internet Protocol Addressing.",
      "Correct: APIPA = Automatic Private Internet Protocol Addressing."
    ],
    "tip": "APIPA → Automatic Private Internet Protocol Addressing."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ARM stand for?",
    "opts": [
      "Service Set Identifier",
      "Terminal Access Controller Access-control System",
      "Automatic Private Internet Protocol Addressing",
      "Advanced RISC [Reduced Instruction Set Computer] Machine"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ARM; ARM means Advanced RISC [Reduced Instruction Set Computer] Machine.",
      "Incorrect. That is not the expansion of ARM; ARM means Advanced RISC [Reduced Instruction Set Computer] Machine.",
      "Incorrect. That is not the expansion of ARM; ARM means Advanced RISC [Reduced Instruction Set Computer] Machine.",
      "Correct: ARM = Advanced RISC [Reduced Instruction Set Computer] Machine."
    ],
    "tip": "ARM → Advanced RISC [Reduced Instruction Set Computer] Machine."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ATX stand for?",
    "opts": [
      "Keyboard-Video-Mouse",
      "Network Access Control",
      "Single Sign-on",
      "Advanced Technology Extended"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ATX; ATX means Advanced Technology Extended.",
      "Incorrect. That is not the expansion of ATX; ATX means Advanced Technology Extended.",
      "Incorrect. That is not the expansion of ATX; ATX means Advanced Technology Extended.",
      "Correct: ATX = Advanced Technology Extended."
    ],
    "tip": "ATX → Advanced Technology Extended."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does AUP stand for?",
    "opts": [
      "Advanced RISC [Reduced Instruction Set Computer] Machine",
      "Input/Output Operations Per Second",
      "Hardware Security Module",
      "Acceptable Use Policy"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of AUP; AUP means Acceptable Use Policy.",
      "Incorrect. That is not the expansion of AUP; AUP means Acceptable Use Policy.",
      "Incorrect. That is not the expansion of AUP; AUP means Acceptable Use Policy.",
      "Correct: AUP = Acceptable Use Policy."
    ],
    "tip": "AUP → Acceptable Use Policy."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does BEC stand for?",
    "opts": [
      "Service Set Identifier",
      "Near-field Communication",
      "In-plane Switching",
      "Business Email Compromise"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of BEC; BEC means Business Email Compromise.",
      "Incorrect. That is not the expansion of BEC; BEC means Business Email Compromise.",
      "Incorrect. That is not the expansion of BEC; BEC means Business Email Compromise.",
      "Correct: BEC = Business Email Compromise."
    ],
    "tip": "BEC → Business Email Compromise."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does BIOS stand for?",
    "opts": [
      "Hypertext Transfer Protocol",
      "Information Technology eXtended",
      "Structured Query Language",
      "Basic Input/Output System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of BIOS; BIOS means Basic Input/Output System.",
      "Incorrect. That is not the expansion of BIOS; BIOS means Basic Input/Output System.",
      "Incorrect. That is not the expansion of BIOS; BIOS means Basic Input/Output System.",
      "Correct: BIOS = Basic Input/Output System."
    ],
    "tip": "BIOS → Basic Input/Output System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does BNC stand for?",
    "opts": [
      "Privileged Access Management",
      "User Datagram Protocol",
      "Globally Unique Identifier",
      "Bayonet Neill-Concelman"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of BNC; BNC means Bayonet Neill-Concelman.",
      "Incorrect. That is not the expansion of BNC; BNC means Bayonet Neill-Concelman.",
      "Incorrect. That is not the expansion of BNC; BNC means Bayonet Neill-Concelman.",
      "Correct: BNC = Bayonet Neill-Concelman."
    ],
    "tip": "BNC → Bayonet Neill-Concelman."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does BSOD stand for?",
    "opts": [
      "Power Supply Unit",
      "Network Time Protocol",
      "Registered Jack Function 11",
      "Blue Screen of Death"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of BSOD; BSOD means Blue Screen of Death.",
      "Incorrect. That is not the expansion of BSOD; BSOD means Blue Screen of Death.",
      "Incorrect. That is not the expansion of BSOD; BSOD means Blue Screen of Death.",
      "Correct: BSOD = Blue Screen of Death."
    ],
    "tip": "BSOD → Blue Screen of Death."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does BYOD stand for?",
    "opts": [
      "Potentially Unwanted Program",
      "Dual In-line Memory Module",
      "Straight Tip",
      "Bring Your Own Device"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of BYOD; BYOD means Bring Your Own Device.",
      "Incorrect. That is not the expansion of BYOD; BYOD means Bring Your Own Device.",
      "Incorrect. That is not the expansion of BYOD; BYOD means Bring Your Own Device.",
      "Correct: BYOD = Bring Your Own Device."
    ],
    "tip": "BYOD → Bring Your Own Device."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CAS stand for?",
    "opts": [
      "Advanced RISC [Reduced Instruction Set Computer] Machine",
      "Bayonet Neill-Concelman",
      "Reduced Instruction Set Computer",
      "Column Address Strobe"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CAS; CAS means Column Address Strobe.",
      "Incorrect. That is not the expansion of CAS; CAS means Column Address Strobe.",
      "Incorrect. That is not the expansion of CAS; CAS means Column Address Strobe.",
      "Correct: CAS = Column Address Strobe."
    ],
    "tip": "CAS → Column Address Strobe."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CAC stand for?",
    "opts": [
      "Revolutions Per Minute",
      "Cross-site Scripting",
      "Universal Serial Bus",
      "Calling-card Authorization Computer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CAC; CAC means Calling-card Authorization Computer.",
      "Incorrect. That is not the expansion of CAC; CAC means Calling-card Authorization Computer.",
      "Incorrect. That is not the expansion of CAC; CAC means Calling-card Authorization Computer.",
      "Correct: CAC = Calling-card Authorization Computer."
    ],
    "tip": "CAC → Calling-card Authorization Computer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CIFS stand for?",
    "opts": [
      "Uninterruptible Power Supply",
      "Hypertext Transfer Protocol",
      "Service Set Identifier",
      "Common Internet File System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CIFS; CIFS means Common Internet File System.",
      "Incorrect. That is not the expansion of CIFS; CIFS means Common Internet File System.",
      "Incorrect. That is not the expansion of CIFS; CIFS means Common Internet File System.",
      "Correct: CIFS = Common Internet File System."
    ],
    "tip": "CIFS → Common Internet File System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CMDB stand for?",
    "opts": [
      "Non-disclosure Agreement",
      "Video Graphics Array",
      "Radio-frequency Identification",
      "Configuration Management Database"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CMDB; CMDB means Configuration Management Database.",
      "Incorrect. That is not the expansion of CMDB; CMDB means Configuration Management Database.",
      "Incorrect. That is not the expansion of CMDB; CMDB means Configuration Management Database.",
      "Correct: CMDB = Configuration Management Database."
    ],
    "tip": "CMDB → Configuration Management Database."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CMOS stand for?",
    "opts": [
      "Wireless Access Point",
      "Solid-state Drive",
      "Optical Network Terminal",
      "Complementary Metal-Oxide Semiconductor"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CMOS; CMOS means Complementary Metal-Oxide Semiconductor.",
      "Incorrect. That is not the expansion of CMOS; CMOS means Complementary Metal-Oxide Semiconductor.",
      "Incorrect. That is not the expansion of CMOS; CMOS means Complementary Metal-Oxide Semiconductor.",
      "Correct: CMOS = Complementary Metal-Oxide Semiconductor."
    ],
    "tip": "CMOS → Complementary Metal-Oxide Semiconductor."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CNAME stand for?",
    "opts": [
      "Multifunction Printer",
      "Multifactor Authentication",
      "Global Positioning System",
      "Canonical Name"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CNAME; CNAME means Canonical Name.",
      "Incorrect. That is not the expansion of CNAME; CNAME means Canonical Name.",
      "Incorrect. That is not the expansion of CNAME; CNAME means Canonical Name.",
      "Correct: CNAME = Canonical Name."
    ],
    "tip": "CNAME → Canonical Name."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does CPU stand for?",
    "opts": [
      "Random-access Memory",
      "Text",
      "Mutual Non-disclosure Agreement",
      "Central Processing Unit"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of CPU; CPU means Central Processing Unit.",
      "Incorrect. That is not the expansion of CPU; CPU means Central Processing Unit.",
      "Incorrect. That is not the expansion of CPU; CPU means Central Processing Unit.",
      "Correct: CPU = Central Processing Unit."
    ],
    "tip": "CPU → Central Processing Unit."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DB-9 stand for?",
    "opts": [
      "Graphics Processing Unit",
      "Hypertext Transfer Protocol",
      "Calling-card Authorization Computer",
      "Serial Communications D-Shell Connector, 9 pins"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DB-9; DB-9 means Serial Communications D-Shell Connector, 9 pins.",
      "Incorrect. That is not the expansion of DB-9; DB-9 means Serial Communications D-Shell Connector, 9 pins.",
      "Incorrect. That is not the expansion of DB-9; DB-9 means Serial Communications D-Shell Connector, 9 pins.",
      "Correct: DB-9 = Serial Communications D-Shell Connector, 9 pins."
    ],
    "tip": "DB-9 → Serial Communications D-Shell Connector, 9 pins."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DDR stand for?",
    "opts": [
      "Bayonet Neill-Concelman",
      "Vertical Alignment",
      "Post Office Protocol",
      "Double Data Rate"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DDR; DDR means Double Data Rate.",
      "Incorrect. That is not the expansion of DDR; DDR means Double Data Rate.",
      "Incorrect. That is not the expansion of DDR; DDR means Double Data Rate.",
      "Correct: DDR = Double Data Rate."
    ],
    "tip": "DDR → Double Data Rate."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DHCP stand for?",
    "opts": [
      "Wi-Fi Protected Access",
      "Error-correcting Code",
      "Identity and Access Management",
      "Dynamic Host Configuration Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DHCP; DHCP means Dynamic Host Configuration Protocol.",
      "Incorrect. That is not the expansion of DHCP; DHCP means Dynamic Host Configuration Protocol.",
      "Incorrect. That is not the expansion of DHCP; DHCP means Dynamic Host Configuration Protocol.",
      "Correct: DHCP = Dynamic Host Configuration Protocol."
    ],
    "tip": "DHCP → Dynamic Host Configuration Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DIMM stand for?",
    "opts": [
      "Wireless Wide Area Network",
      "Light-emitting Diode",
      "Advanced RISC [Reduced Instruction Set Computer] Machine",
      "Dual In-line Memory Module"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DIMM; DIMM means Dual In-line Memory Module.",
      "Incorrect. That is not the expansion of DIMM; DIMM means Dual In-line Memory Module.",
      "Incorrect. That is not the expansion of DIMM; DIMM means Dual In-line Memory Module.",
      "Correct: DIMM = Dual In-line Memory Module."
    ],
    "tip": "DIMM → Dual In-line Memory Module."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DKIM stand for?",
    "opts": [
      "Calling-card Authorization Computer",
      "Cross-site Scripting",
      "Virtual Private Network",
      "DomainKeys Identified Mail"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DKIM; DKIM means DomainKeys Identified Mail.",
      "Incorrect. That is not the expansion of DKIM; DKIM means DomainKeys Identified Mail.",
      "Incorrect. That is not the expansion of DKIM; DKIM means DomainKeys Identified Mail.",
      "Correct: DKIM = DomainKeys Identified Mail."
    ],
    "tip": "DKIM → DomainKeys Identified Mail."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DLP stand for?",
    "opts": [
      "Liquid Crystal Display",
      "Hard Disk Drive",
      "Redundant Array of Independent Disks",
      "Data Loss Prevention"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DLP; DLP means Data Loss Prevention.",
      "Incorrect. That is not the expansion of DLP; DLP means Data Loss Prevention.",
      "Incorrect. That is not the expansion of DLP; DLP means Data Loss Prevention.",
      "Correct: DLP = Data Loss Prevention."
    ],
    "tip": "DLP → Data Loss Prevention."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DMARC stand for?",
    "opts": [
      "Revolutions Per Minute",
      "Blue Screen of Death",
      "Data Loss Prevention",
      "Domain-based Message Authentication, Reporting, and Conformance"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DMARC; DMARC means Domain-based Message Authentication, Reporting, and Conformance.",
      "Incorrect. That is not the expansion of DMARC; DMARC means Domain-based Message Authentication, Reporting, and Conformance.",
      "Incorrect. That is not the expansion of DMARC; DMARC means Domain-based Message Authentication, Reporting, and Conformance.",
      "Correct: DMARC = Domain-based Message Authentication, Reporting, and Conformance."
    ],
    "tip": "DMARC → Domain-based Message Authentication, Reporting, and Conformance."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DNS stand for?",
    "opts": [
      "32-bit File Allocation Table",
      "DomainKeys Identified Mail",
      "Video Random-access Memory",
      "Domain Name System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DNS; DNS means Domain Name System.",
      "Incorrect. That is not the expansion of DNS; DNS means Domain Name System.",
      "Incorrect. That is not the expansion of DNS; DNS means Domain Name System.",
      "Correct: DNS = Domain Name System."
    ],
    "tip": "DNS → Domain Name System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DRM stand for?",
    "opts": [
      "Original Equipment Manufacturer",
      "End-of-life",
      "Acceptable Use Policy",
      "Digital Rights Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DRM; DRM means Digital Rights Management.",
      "Incorrect. That is not the expansion of DRM; DRM means Digital Rights Management.",
      "Incorrect. That is not the expansion of DRM; DRM means Digital Rights Management.",
      "Correct: DRM = Digital Rights Management."
    ],
    "tip": "DRM → Digital Rights Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DSL stand for?",
    "opts": [
      "Personal Area Network",
      "Server Message Block",
      "File Transfer Protocol",
      "Digital Subscriber Line"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DSL; DSL means Digital Subscriber Line.",
      "Incorrect. That is not the expansion of DSL; DSL means Digital Subscriber Line.",
      "Incorrect. That is not the expansion of DSL; DSL means Digital Subscriber Line.",
      "Correct: DSL = Digital Subscriber Line."
    ],
    "tip": "DSL → Digital Subscriber Line."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does DVI stand for?",
    "opts": [
      "Near-field Communication",
      "Subscriber Identity Module",
      "Graphical User Interface",
      "Digital Visual Interface"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of DVI; DVI means Digital Visual Interface.",
      "Incorrect. That is not the expansion of DVI; DVI means Digital Visual Interface.",
      "Incorrect. That is not the expansion of DVI; DVI means Digital Visual Interface.",
      "Correct: DVI = Digital Visual Interface."
    ],
    "tip": "DVI → Digital Visual Interface."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ECC stand for?",
    "opts": [
      "Registered Jack Function 45",
      "Sender Policy Framework",
      "Video Random-access Memory",
      "Error-correcting Code"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ECC; ECC means Error-correcting Code.",
      "Incorrect. That is not the expansion of ECC; ECC means Error-correcting Code.",
      "Incorrect. That is not the expansion of ECC; ECC means Error-correcting Code.",
      "Correct: ECC = Error-correcting Code."
    ],
    "tip": "ECC → Error-correcting Code."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does EDR stand for?",
    "opts": [
      "Access Control List",
      "Security Assertions Markup Language",
      "Privileged Access Management",
      "Endpoint Detection and Response"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of EDR; EDR means Endpoint Detection and Response.",
      "Incorrect. That is not the expansion of EDR; EDR means Endpoint Detection and Response.",
      "Incorrect. That is not the expansion of EDR; EDR means Endpoint Detection and Response.",
      "Correct: EDR = Endpoint Detection and Response."
    ],
    "tip": "EDR → Endpoint Detection and Response."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does EFS stand for?",
    "opts": [
      "Wireless LAN [Local Area Network]",
      "Globally Unique Identifier",
      "Small Office/Home Office",
      "Encrypting File System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of EFS; EFS means Encrypting File System.",
      "Incorrect. That is not the expansion of EFS; EFS means Encrypting File System.",
      "Incorrect. That is not the expansion of EFS; EFS means Encrypting File System.",
      "Correct: EFS = Encrypting File System."
    ],
    "tip": "EFS → Encrypting File System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does EOL stand for?",
    "opts": [
      "Video Random-access Memory",
      "Grandfather-Father-Son",
      "Uninterruptible Power Supply",
      "End-of-life"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of EOL; EOL means End-of-life.",
      "Incorrect. That is not the expansion of EOL; EOL means End-of-life.",
      "Incorrect. That is not the expansion of EOL; EOL means End-of-life.",
      "Correct: EOL = End-of-life."
    ],
    "tip": "EOL → End-of-life."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does eSATA stand for?",
    "opts": [
      "Data Loss Prevention",
      "Advanced RISC [Reduced Instruction Set Computer] Machine",
      "Simple Network Management Protocol",
      "External Serial Advanced Technology Attachment"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of eSATA; eSATA means External Serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of eSATA; eSATA means External Serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of eSATA; eSATA means External Serial Advanced Technology Attachment.",
      "Correct: eSATA = External Serial Advanced Technology Attachment."
    ],
    "tip": "eSATA → External Serial Advanced Technology Attachment."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ESD stand for?",
    "opts": [
      "Canonical Name",
      "Digital Visual Interface",
      "Universal Serial Bus Type C",
      "Electrostatic Discharge"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ESD; ESD means Electrostatic Discharge.",
      "Incorrect. That is not the expansion of ESD; ESD means Electrostatic Discharge.",
      "Incorrect. That is not the expansion of ESD; ESD means Electrostatic Discharge.",
      "Correct: ESD = Electrostatic Discharge."
    ],
    "tip": "ESD → Electrostatic Discharge."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does eSIM stand for?",
    "opts": [
      "Personal Area Network",
      "New Technology File System",
      "Personal Computer",
      "Embedded SIM"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of eSIM; eSIM means Embedded SIM.",
      "Incorrect. That is not the expansion of eSIM; eSIM means Embedded SIM.",
      "Incorrect. That is not the expansion of eSIM; eSIM means Embedded SIM.",
      "Correct: eSIM = Embedded SIM."
    ],
    "tip": "eSIM → Embedded SIM."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does EULA stand for?",
    "opts": [
      "Master Boot Record",
      "Network Access Control",
      "In-plane Switching",
      "End-user License Agreement"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of EULA; EULA means End-user License Agreement.",
      "Incorrect. That is not the expansion of EULA; EULA means End-user License Agreement.",
      "Incorrect. That is not the expansion of EULA; EULA means End-user License Agreement.",
      "Correct: EULA = End-user License Agreement."
    ],
    "tip": "EULA → End-user License Agreement."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does FAT32 stand for?",
    "opts": [
      "Vertical Alignment",
      "Access Control List",
      "Virtual Network Computer",
      "32-bit File Allocation Table"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of FAT32; FAT32 means 32-bit File Allocation Table.",
      "Incorrect. That is not the expansion of FAT32; FAT32 means 32-bit File Allocation Table.",
      "Incorrect. That is not the expansion of FAT32; FAT32 means 32-bit File Allocation Table.",
      "Correct: FAT32 = 32-bit File Allocation Table."
    ],
    "tip": "FAT32 → 32-bit File Allocation Table."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does FRT stand for?",
    "opts": [
      "Internet Protocol",
      "Lightweight Directory Access Protocol",
      "Video Graphics Array",
      "Facial Recognition Technology"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of FRT; FRT means Facial Recognition Technology.",
      "Incorrect. That is not the expansion of FRT; FRT means Facial Recognition Technology.",
      "Incorrect. That is not the expansion of FRT; FRT means Facial Recognition Technology.",
      "Correct: FRT = Facial Recognition Technology."
    ],
    "tip": "FRT → Facial Recognition Technology."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does FTP stand for?",
    "opts": [
      "Microsoft Management Console",
      "Internet Protocol",
      "Text",
      "File Transfer Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of FTP; FTP means File Transfer Protocol.",
      "Incorrect. That is not the expansion of FTP; FTP means File Transfer Protocol.",
      "Incorrect. That is not the expansion of FTP; FTP means File Transfer Protocol.",
      "Correct: FTP = File Transfer Protocol."
    ],
    "tip": "FTP → File Transfer Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GFS stand for?",
    "opts": [
      "Hypertext Transfer Protocol",
      "Infrared",
      "Personal Computer",
      "Grandfather-Father-Son"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GFS; GFS means Grandfather-Father-Son.",
      "Incorrect. That is not the expansion of GFS; GFS means Grandfather-Father-Son.",
      "Incorrect. That is not the expansion of GFS; GFS means Grandfather-Father-Son.",
      "Correct: GFS = Grandfather-Father-Son."
    ],
    "tip": "GFS → Grandfather-Father-Son."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GPS stand for?",
    "opts": [
      "Infrared",
      "Hard Disk Drive",
      "Keyboard-Video-Mouse",
      "Global Positioning System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GPS; GPS means Global Positioning System.",
      "Incorrect. That is not the expansion of GPS; GPS means Global Positioning System.",
      "Incorrect. That is not the expansion of GPS; GPS means Global Positioning System.",
      "Correct: GPS = Global Positioning System."
    ],
    "tip": "GPS → Global Positioning System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GPT stand for?",
    "opts": [
      "Straight Tip",
      "Transmission Control Protocol",
      "Advanced Micro Devices, Inc.",
      "GUID [Globally Unique Identifier] Partition Table"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GPT; GPT means GUID [Globally Unique Identifier] Partition Table.",
      "Incorrect. That is not the expansion of GPT; GPT means GUID [Globally Unique Identifier] Partition Table.",
      "Incorrect. That is not the expansion of GPT; GPT means GUID [Globally Unique Identifier] Partition Table.",
      "Correct: GPT = GUID [Globally Unique Identifier] Partition Table."
    ],
    "tip": "GPT → GUID [Globally Unique Identifier] Partition Table."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GPU stand for?",
    "opts": [
      "Global Positioning System",
      "Safety Data Sheet",
      "Lightweight Directory Access Protocol",
      "Graphics Processing Unit"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GPU; GPU means Graphics Processing Unit.",
      "Incorrect. That is not the expansion of GPU; GPU means Graphics Processing Unit.",
      "Incorrect. That is not the expansion of GPU; GPU means Graphics Processing Unit.",
      "Correct: GPU = Graphics Processing Unit."
    ],
    "tip": "GPU → Graphics Processing Unit."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GUI stand for?",
    "opts": [
      "Optical Network Terminal",
      "Local Area Network",
      "Uninterruptible Power Supply",
      "Graphical User Interface"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GUI; GUI means Graphical User Interface.",
      "Incorrect. That is not the expansion of GUI; GUI means Graphical User Interface.",
      "Incorrect. That is not the expansion of GUI; GUI means Graphical User Interface.",
      "Correct: GUI = Graphical User Interface."
    ],
    "tip": "GUI → Graphical User Interface."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does GUID stand for?",
    "opts": [
      "Domain Name System",
      "Wi-Fi Protected Access",
      "Storage Area Network",
      "Globally Unique Identifier"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of GUID; GUID means Globally Unique Identifier.",
      "Incorrect. That is not the expansion of GUID; GUID means Globally Unique Identifier.",
      "Incorrect. That is not the expansion of GUID; GUID means Globally Unique Identifier.",
      "Correct: GUID = Globally Unique Identifier."
    ],
    "tip": "GUID → Globally Unique Identifier."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HD stand for?",
    "opts": [
      "Short Message Service",
      "Mini-serial Advanced Technology Attachment",
      "Trusted Platform Module",
      "High Definition"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HD; HD means High Definition.",
      "Incorrect. That is not the expansion of HD; HD means High Definition.",
      "Incorrect. That is not the expansion of HD; HD means High Definition.",
      "Correct: HD = High Definition."
    ],
    "tip": "HD → High Definition."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HDD stand for?",
    "opts": [
      "Graphics Processing Unit",
      "Wide Area Network",
      "Cross-site Scripting",
      "Hard Disk Drive"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HDD; HDD means Hard Disk Drive.",
      "Incorrect. That is not the expansion of HDD; HDD means Hard Disk Drive.",
      "Incorrect. That is not the expansion of HDD; HDD means Hard Disk Drive.",
      "Correct: HDD = Hard Disk Drive."
    ],
    "tip": "HDD → Hard Disk Drive."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HDMI stand for?",
    "opts": [
      "Sender Policy Framework",
      "Temporal Key Integrity Protocol",
      "Text",
      "High-definition Media Interface"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HDMI; HDMI means High-definition Media Interface.",
      "Incorrect. That is not the expansion of HDMI; HDMI means High-definition Media Interface.",
      "Incorrect. That is not the expansion of HDMI; HDMI means High-definition Media Interface.",
      "Correct: HDMI = High-definition Media Interface."
    ],
    "tip": "HDMI → High-definition Media Interface."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HSM stand for?",
    "opts": [
      "Mini-serial Advanced Technology Attachment",
      "Subscriber Connector",
      "Data Loss Prevention",
      "Hardware Security Module"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HSM; HSM means Hardware Security Module.",
      "Incorrect. That is not the expansion of HSM; HSM means Hardware Security Module.",
      "Incorrect. That is not the expansion of HSM; HSM means Hardware Security Module.",
      "Correct: HSM = Hardware Security Module."
    ],
    "tip": "HSM → Hardware Security Module."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HTTP stand for?",
    "opts": [
      "End-user License Agreement",
      "Automatic Private Internet Protocol Addressing",
      "Revolutions Per Minute",
      "Hypertext Transfer Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HTTP; HTTP means Hypertext Transfer Protocol.",
      "Incorrect. That is not the expansion of HTTP; HTTP means Hypertext Transfer Protocol.",
      "Incorrect. That is not the expansion of HTTP; HTTP means Hypertext Transfer Protocol.",
      "Correct: HTTP = Hypertext Transfer Protocol."
    ],
    "tip": "HTTP → Hypertext Transfer Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does HTTPS stand for?",
    "opts": [
      "Solid-state Drive",
      "Small Outline Dual In-line Memory Module",
      "Dynamic Host Configuration Protocol",
      "Hypertext Transfer Protocol Secure"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of HTTPS; HTTPS means Hypertext Transfer Protocol Secure.",
      "Incorrect. That is not the expansion of HTTPS; HTTPS means Hypertext Transfer Protocol Secure.",
      "Incorrect. That is not the expansion of HTTPS; HTTPS means Hypertext Transfer Protocol Secure.",
      "Correct: HTTPS = Hypertext Transfer Protocol Secure."
    ],
    "tip": "HTTPS → Hypertext Transfer Protocol Secure."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IAM stand for?",
    "opts": [
      "Service Set Identifier",
      "Virtual Desktop Infrastructure",
      "Mobile Device Management",
      "Identity and Access Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IAM; IAM means Identity and Access Management.",
      "Incorrect. That is not the expansion of IAM; IAM means Identity and Access Management.",
      "Incorrect. That is not the expansion of IAM; IAM means Identity and Access Management.",
      "Correct: IAM = Identity and Access Management."
    ],
    "tip": "IAM → Identity and Access Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IMAP stand for?",
    "opts": [
      "Subscriber Connector",
      "Digital Rights Management",
      "Registered Jack Function 45",
      "Internet Mail Access Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IMAP; IMAP means Internet Mail Access Protocol.",
      "Incorrect. That is not the expansion of IMAP; IMAP means Internet Mail Access Protocol.",
      "Incorrect. That is not the expansion of IMAP; IMAP means Internet Mail Access Protocol.",
      "Correct: IMAP = Internet Mail Access Protocol."
    ],
    "tip": "IMAP → Internet Mail Access Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IOPS stand for?",
    "opts": [
      "Double Data Rate",
      "Uninterruptible Power Supply",
      "Wireless LAN [Local Area Network]",
      "Input/Output Operations Per Second"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IOPS; IOPS means Input/Output Operations Per Second.",
      "Incorrect. That is not the expansion of IOPS; IOPS means Input/Output Operations Per Second.",
      "Incorrect. That is not the expansion of IOPS; IOPS means Input/Output Operations Per Second.",
      "Correct: IOPS = Input/Output Operations Per Second."
    ],
    "tip": "IOPS → Input/Output Operations Per Second."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IoT stand for?",
    "opts": [
      "Power-on Self-test",
      "Written Internet Service Provider",
      "Security Assertions Markup Language",
      "Internet of Things"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IoT; IoT means Internet of Things.",
      "Incorrect. That is not the expansion of IoT; IoT means Internet of Things.",
      "Incorrect. That is not the expansion of IoT; IoT means Internet of Things.",
      "Correct: IoT = Internet of Things."
    ],
    "tip": "IoT → Internet of Things."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IP stand for?",
    "opts": [
      "Straight Tip",
      "Power Supply Unit",
      "Liquid Crystal Display",
      "Internet Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IP; IP means Internet Protocol.",
      "Incorrect. That is not the expansion of IP; IP means Internet Protocol.",
      "Incorrect. That is not the expansion of IP; IP means Internet Protocol.",
      "Correct: IP = Internet Protocol."
    ],
    "tip": "IP → Internet Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IPS stand for?",
    "opts": [
      "Security Assertions Markup Language",
      "Temporal Key Integrity Protocol",
      "Apple File System",
      "In-plane Switching"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IPS; IPS means In-plane Switching.",
      "Incorrect. That is not the expansion of IPS; IPS means In-plane Switching.",
      "Incorrect. That is not the expansion of IPS; IPS means In-plane Switching.",
      "Correct: IPS = In-plane Switching."
    ],
    "tip": "IPS → In-plane Switching."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does IR stand for?",
    "opts": [
      "Text",
      "Graphics Processing Unit",
      "Multifactor Authentication",
      "Infrared"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of IR; IR means Infrared.",
      "Incorrect. That is not the expansion of IR; IR means Infrared.",
      "Incorrect. That is not the expansion of IR; IR means Infrared.",
      "Correct: IR = Infrared."
    ],
    "tip": "IR → Infrared."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ISO stand for?",
    "opts": [
      "Light-emitting Diode",
      "Grandfather-Father-Son",
      "DomainKeys Identified Mail",
      "International Organization for Standardization"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ISO; ISO means International Organization for Standardization.",
      "Incorrect. That is not the expansion of ISO; ISO means International Organization for Standardization.",
      "Incorrect. That is not the expansion of ISO; ISO means International Organization for Standardization.",
      "Correct: ISO = International Organization for Standardization."
    ],
    "tip": "ISO → International Organization for Standardization."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ISP stand for?",
    "opts": [
      "Automatic Document Feeder",
      "Blue Screen of Death",
      "Embedded SIM",
      "Internet Service Provider"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ISP; ISP means Internet Service Provider.",
      "Incorrect. That is not the expansion of ISP; ISP means Internet Service Provider.",
      "Incorrect. That is not the expansion of ISP; ISP means Internet Service Provider.",
      "Correct: ISP = Internet Service Provider."
    ],
    "tip": "ISP → Internet Service Provider."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ITX stand for?",
    "opts": [
      "Universal Serial Bus",
      "Wireless Wide Area Network",
      "Endpoint Detection and Response",
      "Information Technology eXtended"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ITX; ITX means Information Technology eXtended.",
      "Incorrect. That is not the expansion of ITX; ITX means Information Technology eXtended.",
      "Incorrect. That is not the expansion of ITX; ITX means Information Technology eXtended.",
      "Correct: ITX = Information Technology eXtended."
    ],
    "tip": "ITX → Information Technology eXtended."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does KVM stand for?",
    "opts": [
      "End-user License Agreement",
      "Redundant Array of Independent Disks",
      "Temporal Key Integrity Protocol",
      "Keyboard-Video-Mouse"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of KVM; KVM means Keyboard-Video-Mouse.",
      "Incorrect. That is not the expansion of KVM; KVM means Keyboard-Video-Mouse.",
      "Incorrect. That is not the expansion of KVM; KVM means Keyboard-Video-Mouse.",
      "Correct: KVM = Keyboard-Video-Mouse."
    ],
    "tip": "KVM → Keyboard-Video-Mouse."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LAN stand for?",
    "opts": [
      "Video Random-access Memory",
      "Power-on Self-test",
      "Registered Jack Function 45",
      "Local Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LAN; LAN means Local Area Network.",
      "Incorrect. That is not the expansion of LAN; LAN means Local Area Network.",
      "Incorrect. That is not the expansion of LAN; LAN means Local Area Network.",
      "Correct: LAN = Local Area Network."
    ],
    "tip": "LAN → Local Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LC stand for?",
    "opts": [
      "Apple File System",
      "Infrared",
      "Dynamic Host Configuration Protocol",
      "Lucent Connector"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LC; LC means Lucent Connector.",
      "Incorrect. That is not the expansion of LC; LC means Lucent Connector.",
      "Incorrect. That is not the expansion of LC; LC means Lucent Connector.",
      "Correct: LC = Lucent Connector."
    ],
    "tip": "LC → Lucent Connector."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LCD stand for?",
    "opts": [
      "Wireless Wide Area Network",
      "Simple Mail Transfer Protocol",
      "Virtual Private Network",
      "Liquid Crystal Display"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LCD; LCD means Liquid Crystal Display.",
      "Incorrect. That is not the expansion of LCD; LCD means Liquid Crystal Display.",
      "Incorrect. That is not the expansion of LCD; LCD means Liquid Crystal Display.",
      "Correct: LCD = Liquid Crystal Display."
    ],
    "tip": "LCD → Liquid Crystal Display."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LDAP stand for?",
    "opts": [
      "Personal Identity Verification",
      "32-bit File Allocation Table",
      "Uninterruptible Power Supply",
      "Lightweight Directory Access Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LDAP; LDAP means Lightweight Directory Access Protocol.",
      "Incorrect. That is not the expansion of LDAP; LDAP means Lightweight Directory Access Protocol.",
      "Incorrect. That is not the expansion of LDAP; LDAP means Lightweight Directory Access Protocol.",
      "Correct: LDAP = Lightweight Directory Access Protocol."
    ],
    "tip": "LDAP → Lightweight Directory Access Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LED stand for?",
    "opts": [
      "Sender Policy Framework",
      "Short Message Service",
      "Network Interface Card",
      "Light-emitting Diode"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LED; LED means Light-emitting Diode.",
      "Incorrect. That is not the expansion of LED; LED means Light-emitting Diode.",
      "Incorrect. That is not the expansion of LED; LED means Light-emitting Diode.",
      "Correct: LED = Light-emitting Diode."
    ],
    "tip": "LED → Light-emitting Diode."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does LTE stand for?",
    "opts": [
      "Network Access Control",
      "Serial Advanced Technology Attachment",
      "Media Access Control",
      "Long-Term Evolution"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of LTE; LTE means Long-Term Evolution.",
      "Incorrect. That is not the expansion of LTE; LTE means Long-Term Evolution.",
      "Incorrect. That is not the expansion of LTE; LTE means Long-Term Evolution.",
      "Correct: LTE = Long-Term Evolution."
    ],
    "tip": "LTE → Long-Term Evolution."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MAC stand for?",
    "opts": [
      "Global Positioning System",
      "Mini-serial Advanced Technology Attachment",
      "Digital Rights Management",
      "Media Access Control"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MAC; MAC means Media Access Control.",
      "Incorrect. That is not the expansion of MAC; MAC means Media Access Control.",
      "Incorrect. That is not the expansion of MAC; MAC means Media Access Control.",
      "Correct: MAC = Media Access Control."
    ],
    "tip": "MAC → Media Access Control."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MAN stand for?",
    "opts": [
      "High-definition Media Interface",
      "New Technology File System",
      "GUID [Globally Unique Identifier] Partition Table",
      "Metropolitan Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MAN; MAN means Metropolitan Area Network.",
      "Incorrect. That is not the expansion of MAN; MAN means Metropolitan Area Network.",
      "Incorrect. That is not the expansion of MAN; MAN means Metropolitan Area Network.",
      "Correct: MAN = Metropolitan Area Network."
    ],
    "tip": "MAN → Metropolitan Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MBR stand for?",
    "opts": [
      "Security Assertions Markup Language",
      "High-definition Media Interface",
      "Wireless Wide Area Network",
      "Master Boot Record"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MBR; MBR means Master Boot Record.",
      "Incorrect. That is not the expansion of MBR; MBR means Master Boot Record.",
      "Incorrect. That is not the expansion of MBR; MBR means Master Boot Record.",
      "Correct: MBR = Master Boot Record."
    ],
    "tip": "MBR → Master Boot Record."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MDM stand for?",
    "opts": [
      "Power-on Self-test",
      "Digital Subscriber Line",
      "One-time Password (or Passcode)",
      "Mobile Device Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MDM; MDM means Mobile Device Management.",
      "Incorrect. That is not the expansion of MDM; MDM means Mobile Device Management.",
      "Incorrect. That is not the expansion of MDM; MDM means Mobile Device Management.",
      "Correct: MDM = Mobile Device Management."
    ],
    "tip": "MDM → Mobile Device Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MDR stand for?",
    "opts": [
      "Power-on Self-test",
      "Electrostatic Discharge",
      "Common Internet File System",
      "Managed Detection and Response"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MDR; MDR means Managed Detection and Response.",
      "Incorrect. That is not the expansion of MDR; MDR means Managed Detection and Response.",
      "Incorrect. That is not the expansion of MDR; MDR means Managed Detection and Response.",
      "Correct: MDR = Managed Detection and Response."
    ],
    "tip": "MDR → Managed Detection and Response."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MFA stand for?",
    "opts": [
      "Virtual Machine",
      "Registered Jack Function 45",
      "DomainKeys Identified Mail",
      "Multifactor Authentication"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MFA; MFA means Multifactor Authentication.",
      "Incorrect. That is not the expansion of MFA; MFA means Multifactor Authentication.",
      "Incorrect. That is not the expansion of MFA; MFA means Multifactor Authentication.",
      "Correct: MFA = Multifactor Authentication."
    ],
    "tip": "MFA → Multifactor Authentication."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MFP stand for?",
    "opts": [
      "Wide Area Network",
      "Remote Monitoring and Management",
      "Virtual Desktop Infrastructure",
      "Multifunction Printer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MFP; MFP means Multifunction Printer.",
      "Incorrect. That is not the expansion of MFP; MFP means Multifunction Printer.",
      "Incorrect. That is not the expansion of MFP; MFP means Multifunction Printer.",
      "Correct: MFP = Multifunction Printer."
    ],
    "tip": "MFP → Multifunction Printer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MMC stand for?",
    "opts": [
      "Potentially Unwanted Program",
      "Hard Disk Drive",
      "Storage Area Network",
      "Microsoft Management Console"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MMC; MMC means Microsoft Management Console.",
      "Incorrect. That is not the expansion of MMC; MMC means Microsoft Management Console.",
      "Incorrect. That is not the expansion of MMC; MMC means Microsoft Management Console.",
      "Correct: MMC = Microsoft Management Console."
    ],
    "tip": "MMC → Microsoft Management Console."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MNDA stand for?",
    "opts": [
      "Secure Digital",
      "Uninterruptible Power Supply",
      "Common Internet File System",
      "Mutual Non-disclosure Agreement"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MNDA; MNDA means Mutual Non-disclosure Agreement.",
      "Incorrect. That is not the expansion of MNDA; MNDA means Mutual Non-disclosure Agreement.",
      "Incorrect. That is not the expansion of MNDA; MNDA means Mutual Non-disclosure Agreement.",
      "Correct: MNDA = Mutual Non-disclosure Agreement."
    ],
    "tip": "MNDA → Mutual Non-disclosure Agreement."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does mSATA stand for?",
    "opts": [
      "GUID [Globally Unique Identifier] Partition Table",
      "Wide Area Network",
      "Mail Exchange",
      "Mini-serial Advanced Technology Attachment"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of mSATA; mSATA means Mini-serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of mSATA; mSATA means Mini-serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of mSATA; mSATA means Mini-serial Advanced Technology Attachment.",
      "Correct: mSATA = Mini-serial Advanced Technology Attachment."
    ],
    "tip": "mSATA → Mini-serial Advanced Technology Attachment."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does MX stand for?",
    "opts": [
      "Calling-card Authorization Computer",
      "Information Technology eXtended",
      "Virtual Private Network",
      "Mail Exchange"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of MX; MX means Mail Exchange.",
      "Incorrect. That is not the expansion of MX; MX means Mail Exchange.",
      "Incorrect. That is not the expansion of MX; MX means Mail Exchange.",
      "Correct: MX = Mail Exchange."
    ],
    "tip": "MX → Mail Exchange."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NAC stand for?",
    "opts": [
      "Wireless LAN [Local Area Network]",
      "Power Supply Unit",
      "Data Loss Prevention",
      "Network Access Control"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NAC; NAC means Network Access Control.",
      "Incorrect. That is not the expansion of NAC; NAC means Network Access Control.",
      "Incorrect. That is not the expansion of NAC; NAC means Network Access Control.",
      "Correct: NAC = Network Access Control."
    ],
    "tip": "NAC → Network Access Control."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NAS stand for?",
    "opts": [
      "Rapid Security Response",
      "Network Time Protocol",
      "Wired Equivalent Privacy",
      "Network Access Server"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NAS; NAS means Network Access Server.",
      "Incorrect. That is not the expansion of NAS; NAS means Network Access Server.",
      "Incorrect. That is not the expansion of NAS; NAS means Network Access Server.",
      "Correct: NAS = Network Access Server."
    ],
    "tip": "NAS → Network Access Server."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NAT stand for?",
    "opts": [
      "Single Sign-on",
      "Terminal Access Controller Access-control System",
      "Keyboard-Video-Mouse",
      "Network Access Translation\b"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NAT; NAT means Network Access Translation\b.",
      "Incorrect. That is not the expansion of NAT; NAT means Network Access Translation\b.",
      "Incorrect. That is not the expansion of NAT; NAT means Network Access Translation\b.",
      "Correct: NAT = Network Access Translation\b."
    ],
    "tip": "NAT → Network Access Translation\b."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NDA stand for?",
    "opts": [
      "Structured Query Language",
      "Secure Digital",
      "Bring Your Own Device",
      "Non-disclosure Agreement"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NDA; NDA means Non-disclosure Agreement.",
      "Incorrect. That is not the expansion of NDA; NDA means Non-disclosure Agreement.",
      "Incorrect. That is not the expansion of NDA; NDA means Non-disclosure Agreement.",
      "Correct: NDA = Non-disclosure Agreement."
    ],
    "tip": "NDA → Non-disclosure Agreement."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NetBIOS stand for?",
    "opts": [
      "Virtual Machine",
      "Service-level Agreement",
      "Light-emitting Diode",
      "Network Basic Input/Output System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NetBIOS; NetBIOS means Network Basic Input/Output System.",
      "Incorrect. That is not the expansion of NetBIOS; NetBIOS means Network Basic Input/Output System.",
      "Incorrect. That is not the expansion of NetBIOS; NetBIOS means Network Basic Input/Output System.",
      "Correct: NetBIOS = Network Basic Input/Output System."
    ],
    "tip": "NetBIOS → Network Basic Input/Output System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NFC stand for?",
    "opts": [
      "End-of-life",
      "Subscriber Connector",
      "Wireless LAN [Local Area Network]",
      "Near-field Communication"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NFC; NFC means Near-field Communication.",
      "Incorrect. That is not the expansion of NFC; NFC means Near-field Communication.",
      "Incorrect. That is not the expansion of NFC; NFC means Near-field Communication.",
      "Correct: NFC = Near-field Communication."
    ],
    "tip": "NFC → Near-field Communication."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NIC stand for?",
    "opts": [
      "Bayonet Neill-Concelman",
      "Identity and Access Management",
      "Input/Output Operations Per Second",
      "Network Interface Card"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NIC; NIC means Network Interface Card.",
      "Incorrect. That is not the expansion of NIC; NIC means Network Interface Card.",
      "Incorrect. That is not the expansion of NIC; NIC means Network Interface Card.",
      "Correct: NIC = Network Interface Card."
    ],
    "tip": "NIC → Network Interface Card."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NTFS stand for?",
    "opts": [
      "SPARE PARTS/HARDWARE                                             TOOLS",
      "Personal Computer",
      "Infrared",
      "New Technology File System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NTFS; NTFS means New Technology File System.",
      "Incorrect. That is not the expansion of NTFS; NTFS means New Technology File System.",
      "Incorrect. That is not the expansion of NTFS; NTFS means New Technology File System.",
      "Correct: NTFS = New Technology File System."
    ],
    "tip": "NTFS → New Technology File System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does NTP stand for?",
    "opts": [
      "Liquid Crystal Display",
      "Wireless Wide Area Network",
      "Security Assertions Markup Language",
      "Network Time Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of NTP; NTP means Network Time Protocol.",
      "Incorrect. That is not the expansion of NTP; NTP means Network Time Protocol.",
      "Incorrect. That is not the expansion of NTP; NTP means Network Time Protocol.",
      "Correct: NTP = Network Time Protocol."
    ],
    "tip": "NTP → Network Time Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does OEM stand for?",
    "opts": [
      "Server Message Block",
      "Single Sign-on",
      "Mail Exchange",
      "Original Equipment Manufacturer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of OEM; OEM means Original Equipment Manufacturer.",
      "Incorrect. That is not the expansion of OEM; OEM means Original Equipment Manufacturer.",
      "Incorrect. That is not the expansion of OEM; OEM means Original Equipment Manufacturer.",
      "Correct: OEM = Original Equipment Manufacturer."
    ],
    "tip": "OEM → Original Equipment Manufacturer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does OLED stand for?",
    "opts": [
      "Security Assertions Markup Language",
      "Subscriber Connector",
      "Storage Area Network",
      "Organic Light-emitting Diode"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of OLED; OLED means Organic Light-emitting Diode.",
      "Incorrect. That is not the expansion of OLED; OLED means Organic Light-emitting Diode.",
      "Incorrect. That is not the expansion of OLED; OLED means Organic Light-emitting Diode.",
      "Correct: OLED = Organic Light-emitting Diode."
    ],
    "tip": "OLED → Organic Light-emitting Diode."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ONT stand for?",
    "opts": [
      "End-user License Agreement",
      "Reduced Instruction Set Computer",
      "Local Area Network",
      "Optical Network Terminal"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ONT; ONT means Optical Network Terminal.",
      "Incorrect. That is not the expansion of ONT; ONT means Optical Network Terminal.",
      "Incorrect. That is not the expansion of ONT; ONT means Optical Network Terminal.",
      "Correct: ONT = Optical Network Terminal."
    ],
    "tip": "ONT → Optical Network Terminal."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does OS stand for?",
    "opts": [
      "Access Point",
      "Microsoft Management Console",
      "Remote Desktop Protocol",
      "Operating System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of OS; OS means Operating System.",
      "Incorrect. That is not the expansion of OS; OS means Operating System.",
      "Incorrect. That is not the expansion of OS; OS means Operating System.",
      "Correct: OS = Operating System."
    ],
    "tip": "OS → Operating System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does OTP stand for?",
    "opts": [
      "Temporal Key Integrity Protocol",
      "Vertical Alignment",
      "Wide Area Network",
      "One-time Password (or Passcode)"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of OTP; OTP means One-time Password (or Passcode).",
      "Incorrect. That is not the expansion of OTP; OTP means One-time Password (or Passcode).",
      "Incorrect. That is not the expansion of OTP; OTP means One-time Password (or Passcode).",
      "Correct: OTP = One-time Password (or Passcode)."
    ],
    "tip": "OTP → One-time Password (or Passcode)."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PAM stand for?",
    "opts": [
      "Personal Area Network",
      "GUID [Globally Unique Identifier] Partition Table",
      "Small Office/Home Office",
      "Privileged Access Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PAM; PAM means Privileged Access Management.",
      "Incorrect. That is not the expansion of PAM; PAM means Privileged Access Management.",
      "Incorrect. That is not the expansion of PAM; PAM means Privileged Access Management.",
      "Correct: PAM = Privileged Access Management."
    ],
    "tip": "PAM → Privileged Access Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PAN stand for?",
    "opts": [
      "Wired Equivalent Privacy",
      "Video Random-access Memory",
      "Long-Term Evolution",
      "Personal Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PAN; PAN means Personal Area Network.",
      "Incorrect. That is not the expansion of PAN; PAN means Personal Area Network.",
      "Incorrect. That is not the expansion of PAN; PAN means Personal Area Network.",
      "Correct: PAN = Personal Area Network."
    ],
    "tip": "PAN → Personal Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PC stand for?",
    "opts": [
      "Multifactor Authentication",
      "Master Boot Record",
      "External Serial Advanced Technology Attachment",
      "Personal Computer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PC; PC means Personal Computer.",
      "Incorrect. That is not the expansion of PC; PC means Personal Computer.",
      "Incorrect. That is not the expansion of PC; PC means Personal Computer.",
      "Correct: PC = Personal Computer."
    ],
    "tip": "PC → Personal Computer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PCI stand for?",
    "opts": [
      "Standard Operating Procedure",
      "User Account Control",
      "Dynamic Host Configuration Protocol",
      "Peripheral Component Interconnect"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PCI; PCI means Peripheral Component Interconnect.",
      "Incorrect. That is not the expansion of PCI; PCI means Peripheral Component Interconnect.",
      "Incorrect. That is not the expansion of PCI; PCI means Peripheral Component Interconnect.",
      "Correct: PCI = Peripheral Component Interconnect."
    ],
    "tip": "PCI → Peripheral Component Interconnect."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PCL stand for?",
    "opts": [
      "32-bit File Allocation Table",
      "Globally Unique Identifier",
      "Solid-state Drive",
      "Printer Command Language"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PCL; PCL means Printer Command Language.",
      "Incorrect. That is not the expansion of PCL; PCL means Printer Command Language.",
      "Incorrect. That is not the expansion of PCL; PCL means Printer Command Language.",
      "Correct: PCL = Printer Command Language."
    ],
    "tip": "PCL → Printer Command Language."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PII stand for?",
    "opts": [
      "Power Supply Unit",
      "Vertical Alignment",
      "Canonical Name",
      "Personally Identifiable Information"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PII; PII means Personally Identifiable Information.",
      "Incorrect. That is not the expansion of PII; PII means Personally Identifiable Information.",
      "Incorrect. That is not the expansion of PII; PII means Personally Identifiable Information.",
      "Correct: PII = Personally Identifiable Information."
    ],
    "tip": "PII → Personally Identifiable Information."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PIN stand for?",
    "opts": [
      "End-of-life",
      "Power Supply Unit",
      "Potentially Unwanted Program",
      "Personal Identification Number"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PIN; PIN means Personal Identification Number.",
      "Incorrect. That is not the expansion of PIN; PIN means Personal Identification Number.",
      "Incorrect. That is not the expansion of PIN; PIN means Personal Identification Number.",
      "Correct: PIN = Personal Identification Number."
    ],
    "tip": "PIN → Personal Identification Number."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PIV stand for?",
    "opts": [
      "Service-level Agreement",
      "Error-correcting Code",
      "Global Positioning System",
      "Personal Identity Verification"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PIV; PIV means Personal Identity Verification.",
      "Incorrect. That is not the expansion of PIV; PIV means Personal Identity Verification.",
      "Incorrect. That is not the expansion of PIV; PIV means Personal Identity Verification.",
      "Correct: PIV = Personal Identity Verification."
    ],
    "tip": "PIV → Personal Identity Verification."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does POP stand for?",
    "opts": [
      "Advanced Encryption Standard",
      "Wide Area Network",
      "Remote Monitoring and Management",
      "Post Office Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of POP; POP means Post Office Protocol.",
      "Incorrect. That is not the expansion of POP; POP means Post Office Protocol.",
      "Incorrect. That is not the expansion of POP; POP means Post Office Protocol.",
      "Correct: POP = Post Office Protocol."
    ],
    "tip": "POP → Post Office Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does POST stand for?",
    "opts": [
      "Network Time Protocol",
      "Twisted Nematic",
      "External Serial Advanced Technology Attachment",
      "Power-on Self-test"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of POST; POST means Power-on Self-test.",
      "Incorrect. That is not the expansion of POST; POST means Power-on Self-test.",
      "Incorrect. That is not the expansion of POST; POST means Power-on Self-test.",
      "Correct: POST = Power-on Self-test."
    ],
    "tip": "POST → Power-on Self-test."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PSU stand for?",
    "opts": [
      "Automatic Private Internet Protocol Addressing",
      "Virtual Desktop Infrastructure",
      "Standard Operating Procedure",
      "Power Supply Unit"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PSU; PSU means Power Supply Unit.",
      "Incorrect. That is not the expansion of PSU; PSU means Power Supply Unit.",
      "Incorrect. That is not the expansion of PSU; PSU means Power Supply Unit.",
      "Correct: PSU = Power Supply Unit."
    ],
    "tip": "PSU → Power Supply Unit."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PUP stand for?",
    "opts": [
      "Standard Operating Procedure",
      "Temporal Key Integrity Protocol",
      "Basic Input/Output System",
      "Potentially Unwanted Program"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PUP; PUP means Potentially Unwanted Program.",
      "Incorrect. That is not the expansion of PUP; PUP means Potentially Unwanted Program.",
      "Incorrect. That is not the expansion of PUP; PUP means Potentially Unwanted Program.",
      "Correct: PUP = Potentially Unwanted Program."
    ],
    "tip": "PUP → Potentially Unwanted Program."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does PXE stand for?",
    "opts": [
      "Hardware Security Module",
      "Master Boot Record",
      "Graphical User Interface",
      "Preboot eXecution Environment"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of PXE; PXE means Preboot eXecution Environment.",
      "Incorrect. That is not the expansion of PXE; PXE means Preboot eXecution Environment.",
      "Incorrect. That is not the expansion of PXE; PXE means Preboot eXecution Environment.",
      "Correct: PXE = Preboot eXecution Environment."
    ],
    "tip": "PXE → Preboot eXecution Environment."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RADIUS stand for?",
    "opts": [
      "Apple File System",
      "Personal Area Network",
      "Preboot eXecution Environment",
      "Remote Authentication Dial-in User Server"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RADIUS; RADIUS means Remote Authentication Dial-in User Server.",
      "Incorrect. That is not the expansion of RADIUS; RADIUS means Remote Authentication Dial-in User Server.",
      "Incorrect. That is not the expansion of RADIUS; RADIUS means Remote Authentication Dial-in User Server.",
      "Correct: RADIUS = Remote Authentication Dial-in User Server."
    ],
    "tip": "RADIUS → Remote Authentication Dial-in User Server."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RAID stand for?",
    "opts": [
      "Metropolitan Area Network",
      "Information Technology eXtended",
      "Access Point",
      "Redundant Array of Independent Disks"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RAID; RAID means Redundant Array of Independent Disks.",
      "Incorrect. That is not the expansion of RAID; RAID means Redundant Array of Independent Disks.",
      "Incorrect. That is not the expansion of RAID; RAID means Redundant Array of Independent Disks.",
      "Correct: RAID = Redundant Array of Independent Disks."
    ],
    "tip": "RAID → Redundant Array of Independent Disks."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RAM stand for?",
    "opts": [
      "Rapid Security Response",
      "Basic Input/Output System",
      "Post Office Protocol",
      "Random-access Memory"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RAM; RAM means Random-access Memory.",
      "Incorrect. That is not the expansion of RAM; RAM means Random-access Memory.",
      "Incorrect. That is not the expansion of RAM; RAM means Random-access Memory.",
      "Correct: RAM = Random-access Memory."
    ],
    "tip": "RAM → Random-access Memory."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RDP stand for?",
    "opts": [
      "Operating System",
      "Column Address Strobe",
      "Single Sign-on",
      "Remote Desktop Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RDP; RDP means Remote Desktop Protocol.",
      "Incorrect. That is not the expansion of RDP; RDP means Remote Desktop Protocol.",
      "Incorrect. That is not the expansion of RDP; RDP means Remote Desktop Protocol.",
      "Correct: RDP = Remote Desktop Protocol."
    ],
    "tip": "RDP → Remote Desktop Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RFID stand for?",
    "opts": [
      "Internet of Things",
      "GUID [Globally Unique Identifier] Partition Table",
      "Wireless Access Point",
      "Radio-frequency Identification"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RFID; RFID means Radio-frequency Identification.",
      "Incorrect. That is not the expansion of RFID; RFID means Radio-frequency Identification.",
      "Incorrect. That is not the expansion of RFID; RFID means Radio-frequency Identification.",
      "Correct: RFID = Radio-frequency Identification."
    ],
    "tip": "RFID → Radio-frequency Identification."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RGB stand for?",
    "opts": [
      "Universal Serial Bus",
      "Hypertext Transfer Protocol",
      "Apple File System",
      "Red-Green-Blue"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RGB; RGB means Red-Green-Blue.",
      "Incorrect. That is not the expansion of RGB; RGB means Red-Green-Blue.",
      "Incorrect. That is not the expansion of RGB; RGB means Red-Green-Blue.",
      "Correct: RGB = Red-Green-Blue."
    ],
    "tip": "RGB → Red-Green-Blue."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RISC stand for?",
    "opts": [
      "Redundant Array of Independent Disks",
      "Simple Mail Transfer Protocol",
      "SPARE PARTS/HARDWARE                                             TOOLS",
      "Reduced Instruction Set Computer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RISC; RISC means Reduced Instruction Set Computer.",
      "Incorrect. That is not the expansion of RISC; RISC means Reduced Instruction Set Computer.",
      "Incorrect. That is not the expansion of RISC; RISC means Reduced Instruction Set Computer.",
      "Correct: RISC = Reduced Instruction Set Computer."
    ],
    "tip": "RISC → Reduced Instruction Set Computer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RJ11 stand for?",
    "opts": [
      "Bayonet Neill-Concelman",
      "Remote Desktop Protocol",
      "Virtual Private Network",
      "Registered Jack Function 11"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RJ11; RJ11 means Registered Jack Function 11.",
      "Incorrect. That is not the expansion of RJ11; RJ11 means Registered Jack Function 11.",
      "Incorrect. That is not the expansion of RJ11; RJ11 means Registered Jack Function 11.",
      "Correct: RJ11 = Registered Jack Function 11."
    ],
    "tip": "RJ11 → Registered Jack Function 11."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RJ45 stand for?",
    "opts": [
      "Near-field Communication",
      "Standard Operating Procedure",
      "Bayonet Neill-Concelman",
      "Registered Jack Function 45"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RJ45; RJ45 means Registered Jack Function 45.",
      "Incorrect. That is not the expansion of RJ45; RJ45 means Registered Jack Function 45.",
      "Incorrect. That is not the expansion of RJ45; RJ45 means Registered Jack Function 45.",
      "Correct: RJ45 = Registered Jack Function 45."
    ],
    "tip": "RJ45 → Registered Jack Function 45."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RMM stand for?",
    "opts": [
      "Infrared",
      "Virtual Private Network",
      "Twisted Nematic",
      "Remote Monitoring and Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RMM; RMM means Remote Monitoring and Management.",
      "Incorrect. That is not the expansion of RMM; RMM means Remote Monitoring and Management.",
      "Incorrect. That is not the expansion of RMM; RMM means Remote Monitoring and Management.",
      "Correct: RMM = Remote Monitoring and Management."
    ],
    "tip": "RMM → Remote Monitoring and Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RPM stand for?",
    "opts": [
      "Organic Light-emitting Diode",
      "Column Address Strobe",
      "Wireless Wide Area Network",
      "Revolutions Per Minute"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RPM; RPM means Revolutions Per Minute.",
      "Incorrect. That is not the expansion of RPM; RPM means Revolutions Per Minute.",
      "Incorrect. That is not the expansion of RPM; RPM means Revolutions Per Minute.",
      "Correct: RPM = Revolutions Per Minute."
    ],
    "tip": "RPM → Revolutions Per Minute."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does RSR stand for?",
    "opts": [
      "Network Basic Input/Output System",
      "Power-on Self-test",
      "Domain-based Message Authentication, Reporting, and Conformance",
      "Rapid Security Response"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of RSR; RSR means Rapid Security Response.",
      "Incorrect. That is not the expansion of RSR; RSR means Rapid Security Response.",
      "Incorrect. That is not the expansion of RSR; RSR means Rapid Security Response.",
      "Correct: RSR = Rapid Security Response."
    ],
    "tip": "RSR → Rapid Security Response."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SAML stand for?",
    "opts": [
      "Subscriber Identity Module",
      "Unified Threat Management",
      "Reduced Instruction Set Computer",
      "Security Assertions Markup Language"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SAML; SAML means Security Assertions Markup Language.",
      "Incorrect. That is not the expansion of SAML; SAML means Security Assertions Markup Language.",
      "Incorrect. That is not the expansion of SAML; SAML means Security Assertions Markup Language.",
      "Correct: SAML = Security Assertions Markup Language."
    ],
    "tip": "SAML → Security Assertions Markup Language."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SAN stand for?",
    "opts": [
      "Authentication, Authorization, and Accounting",
      "Self-monitoring Analysis and Reporting Technology",
      "In-plane Switching",
      "Storage Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SAN; SAN means Storage Area Network.",
      "Incorrect. That is not the expansion of SAN; SAN means Storage Area Network.",
      "Incorrect. That is not the expansion of SAN; SAN means Storage Area Network.",
      "Correct: SAN = Storage Area Network."
    ],
    "tip": "SAN → Storage Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SAS stand for?",
    "opts": [
      "Advanced Encryption Standard",
      "Service Set Identifier",
      "External Serial Advanced Technology Attachment",
      "Serial Attached SCSI [Small Computer System Interface]"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SAS; SAS means Serial Attached SCSI [Small Computer System Interface].",
      "Incorrect. That is not the expansion of SAS; SAS means Serial Attached SCSI [Small Computer System Interface].",
      "Incorrect. That is not the expansion of SAS; SAS means Serial Attached SCSI [Small Computer System Interface].",
      "Correct: SAS = Serial Attached SCSI [Small Computer System Interface]."
    ],
    "tip": "SAS → Serial Attached SCSI [Small Computer System Interface]."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SATA stand for?",
    "opts": [
      "Domain-based Message Authentication, Reporting, and Conformance",
      "Video Random-access Memory",
      "Registered Jack Function 11",
      "Serial Advanced Technology Attachment"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SATA; SATA means Serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of SATA; SATA means Serial Advanced Technology Attachment.",
      "Incorrect. That is not the expansion of SATA; SATA means Serial Advanced Technology Attachment.",
      "Correct: SATA = Serial Advanced Technology Attachment."
    ],
    "tip": "SATA → Serial Advanced Technology Attachment."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SC stand for?",
    "opts": [
      "End-user License Agreement",
      "Near-field Communication",
      "Network Time Protocol",
      "Subscriber Connector"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SC; SC means Subscriber Connector.",
      "Incorrect. That is not the expansion of SC; SC means Subscriber Connector.",
      "Incorrect. That is not the expansion of SC; SC means Subscriber Connector.",
      "Correct: SC = Subscriber Connector."
    ],
    "tip": "SC → Subscriber Connector."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SCADA stand for?",
    "opts": [
      "Mutual Non-disclosure Agreement",
      "Configuration Management Database",
      "Printer Command Language",
      "Supervisory Control and Data Acquisition"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SCADA; SCADA means Supervisory Control and Data Acquisition.",
      "Incorrect. That is not the expansion of SCADA; SCADA means Supervisory Control and Data Acquisition.",
      "Incorrect. That is not the expansion of SCADA; SCADA means Supervisory Control and Data Acquisition.",
      "Correct: SCADA = Supervisory Control and Data Acquisition."
    ],
    "tip": "SCADA → Supervisory Control and Data Acquisition."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SCSI stand for?",
    "opts": [
      "Apple File System",
      "Reduced Instruction Set Computer",
      "Self-monitoring Analysis and Reporting Technology",
      "Small Computer System Interface"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SCSI; SCSI means Small Computer System Interface.",
      "Incorrect. That is not the expansion of SCSI; SCSI means Small Computer System Interface.",
      "Incorrect. That is not the expansion of SCSI; SCSI means Small Computer System Interface.",
      "Correct: SCSI = Small Computer System Interface."
    ],
    "tip": "SCSI → Small Computer System Interface."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SD stand for?",
    "opts": [
      "Embedded SIM",
      "Personal Identification Number",
      "Multifactor Authentication",
      "Secure Digital"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SD; SD means Secure Digital.",
      "Incorrect. That is not the expansion of SD; SD means Secure Digital.",
      "Incorrect. That is not the expansion of SD; SD means Secure Digital.",
      "Correct: SD = Secure Digital."
    ],
    "tip": "SD → Secure Digital."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SDS stand for?",
    "opts": [
      "External Serial Advanced Technology Attachment",
      "Electrostatic Discharge",
      "Standard Operating Procedure",
      "Safety Data Sheet"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SDS; SDS means Safety Data Sheet.",
      "Incorrect. That is not the expansion of SDS; SDS means Safety Data Sheet.",
      "Incorrect. That is not the expansion of SDS; SDS means Safety Data Sheet.",
      "Correct: SDS = Safety Data Sheet."
    ],
    "tip": "SDS → Safety Data Sheet."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SFTP stand for?",
    "opts": [
      "Graphics Processing Unit",
      "Data Loss Prevention",
      "Advanced Encryption Standard",
      "Secure File Transfer Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SFTP; SFTP means Secure File Transfer Protocol.",
      "Incorrect. That is not the expansion of SFTP; SFTP means Secure File Transfer Protocol.",
      "Incorrect. That is not the expansion of SFTP; SFTP means Secure File Transfer Protocol.",
      "Correct: SFTP = Secure File Transfer Protocol."
    ],
    "tip": "SFTP → Secure File Transfer Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SIM stand for?",
    "opts": [
      "User Account Control",
      "Liquid Crystal Display",
      "Small Outline Dual In-line Memory Module",
      "Subscriber Identity Module"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SIM; SIM means Subscriber Identity Module.",
      "Incorrect. That is not the expansion of SIM; SIM means Subscriber Identity Module.",
      "Incorrect. That is not the expansion of SIM; SIM means Subscriber Identity Module.",
      "Correct: SIM = Subscriber Identity Module."
    ],
    "tip": "SIM → Subscriber Identity Module."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SLA stand for?",
    "opts": [
      "Calling-card Authorization Computer",
      "Network Access Server",
      "Cross-site Scripting",
      "Service-level Agreement"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SLA; SLA means Service-level Agreement.",
      "Incorrect. That is not the expansion of SLA; SLA means Service-level Agreement.",
      "Incorrect. That is not the expansion of SLA; SLA means Service-level Agreement.",
      "Correct: SLA = Service-level Agreement."
    ],
    "tip": "SLA → Service-level Agreement."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does S.M.A.R.T stand for?",
    "opts": [
      "Mutual Non-disclosure Agreement",
      "Security Assertions Markup Language",
      "Metropolitan Area Network",
      "Self-monitoring Analysis and Reporting Technology"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of S.M.A.R.T; S.M.A.R.T means Self-monitoring Analysis and Reporting Technology.",
      "Incorrect. That is not the expansion of S.M.A.R.T; S.M.A.R.T means Self-monitoring Analysis and Reporting Technology.",
      "Incorrect. That is not the expansion of S.M.A.R.T; S.M.A.R.T means Self-monitoring Analysis and Reporting Technology.",
      "Correct: S.M.A.R.T = Self-monitoring Analysis and Reporting Technology."
    ],
    "tip": "S.M.A.R.T → Self-monitoring Analysis and Reporting Technology."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SMB stand for?",
    "opts": [
      "Dynamic Host Configuration Protocol",
      "Hardware Security Module",
      "Hard Disk Drive",
      "Server Message Block"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SMB; SMB means Server Message Block.",
      "Incorrect. That is not the expansion of SMB; SMB means Server Message Block.",
      "Incorrect. That is not the expansion of SMB; SMB means Server Message Block.",
      "Correct: SMB = Server Message Block."
    ],
    "tip": "SMB → Server Message Block."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SMS stand for?",
    "opts": [
      "Apple File System",
      "Simple Mail Transfer Protocol",
      "Embedded SIM",
      "Short Message Service"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SMS; SMS means Short Message Service.",
      "Incorrect. That is not the expansion of SMS; SMS means Short Message Service.",
      "Incorrect. That is not the expansion of SMS; SMS means Short Message Service.",
      "Correct: SMS = Short Message Service."
    ],
    "tip": "SMS → Short Message Service."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SMTP stand for?",
    "opts": [
      "Error-correcting Code",
      "User Account Control",
      "Automatic Document Feeder",
      "Simple Mail Transfer Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SMTP; SMTP means Simple Mail Transfer Protocol.",
      "Incorrect. That is not the expansion of SMTP; SMTP means Simple Mail Transfer Protocol.",
      "Incorrect. That is not the expansion of SMTP; SMTP means Simple Mail Transfer Protocol.",
      "Correct: SMTP = Simple Mail Transfer Protocol."
    ],
    "tip": "SMTP → Simple Mail Transfer Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SNMP stand for?",
    "opts": [
      "Optical Network Terminal",
      "Radio-frequency Identification",
      "Secure Shell",
      "Simple Network Management Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SNMP; SNMP means Simple Network Management Protocol.",
      "Incorrect. That is not the expansion of SNMP; SNMP means Simple Network Management Protocol.",
      "Incorrect. That is not the expansion of SNMP; SNMP means Simple Network Management Protocol.",
      "Correct: SNMP = Simple Network Management Protocol."
    ],
    "tip": "SNMP → Simple Network Management Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SODIMM stand for?",
    "opts": [
      "Wi-Fi Protected Access",
      "Virtual Network Computer",
      "Internet of Things",
      "Small Outline Dual In-line Memory Module"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SODIMM; SODIMM means Small Outline Dual In-line Memory Module.",
      "Incorrect. That is not the expansion of SODIMM; SODIMM means Small Outline Dual In-line Memory Module.",
      "Incorrect. That is not the expansion of SODIMM; SODIMM means Small Outline Dual In-line Memory Module.",
      "Correct: SODIMM = Small Outline Dual In-line Memory Module."
    ],
    "tip": "SODIMM → Small Outline Dual In-line Memory Module."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SOHO stand for?",
    "opts": [
      "Advanced Encryption Standard",
      "Mini-serial Advanced Technology Attachment",
      "Media Access Control",
      "Small Office/Home Office"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SOHO; SOHO means Small Office/Home Office.",
      "Incorrect. That is not the expansion of SOHO; SOHO means Small Office/Home Office.",
      "Incorrect. That is not the expansion of SOHO; SOHO means Small Office/Home Office.",
      "Correct: SOHO = Small Office/Home Office."
    ],
    "tip": "SOHO → Small Office/Home Office."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SOP stand for?",
    "opts": [
      "Canonical Name",
      "Lucent Connector",
      "Wireless LAN [Local Area Network]",
      "Standard Operating Procedure"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SOP; SOP means Standard Operating Procedure.",
      "Incorrect. That is not the expansion of SOP; SOP means Standard Operating Procedure.",
      "Incorrect. That is not the expansion of SOP; SOP means Standard Operating Procedure.",
      "Correct: SOP = Standard Operating Procedure."
    ],
    "tip": "SOP → Standard Operating Procedure."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SPF stand for?",
    "opts": [
      "Digital Visual Interface",
      "Standard Operating Procedure",
      "Hardware Security Module",
      "Sender Policy Framework"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SPF; SPF means Sender Policy Framework.",
      "Incorrect. That is not the expansion of SPF; SPF means Sender Policy Framework.",
      "Incorrect. That is not the expansion of SPF; SPF means Sender Policy Framework.",
      "Correct: SPF = Sender Policy Framework."
    ],
    "tip": "SPF → Sender Policy Framework."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SPICE stand for?",
    "opts": [
      "One-time Password (or Passcode)",
      "Advanced Technology Extended",
      "Mobile Device Management",
      "Software Process Improvement and Capability Determination"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SPICE; SPICE means Software Process Improvement and Capability Determination.",
      "Incorrect. That is not the expansion of SPICE; SPICE means Software Process Improvement and Capability Determination.",
      "Incorrect. That is not the expansion of SPICE; SPICE means Software Process Improvement and Capability Determination.",
      "Correct: SPICE = Software Process Improvement and Capability Determination."
    ],
    "tip": "SPICE → Software Process Improvement and Capability Determination."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SQL stand for?",
    "opts": [
      "Input/Output Operations Per Second",
      "Bring Your Own Device",
      "Microsoft Management Console",
      "Structured Query Language"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SQL; SQL means Structured Query Language.",
      "Incorrect. That is not the expansion of SQL; SQL means Structured Query Language.",
      "Incorrect. That is not the expansion of SQL; SQL means Structured Query Language.",
      "Correct: SQL = Structured Query Language."
    ],
    "tip": "SQL → Structured Query Language."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SSD stand for?",
    "opts": [
      "Dual In-line Memory Module",
      "User Account Control",
      "Internet Service Provider",
      "Solid-state Drive"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SSD; SSD means Solid-state Drive.",
      "Incorrect. That is not the expansion of SSD; SSD means Solid-state Drive.",
      "Incorrect. That is not the expansion of SSD; SSD means Solid-state Drive.",
      "Correct: SSD = Solid-state Drive."
    ],
    "tip": "SSD → Solid-state Drive."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SSH stand for?",
    "opts": [
      "Twisted Nematic",
      "Non-disclosure Agreement",
      "Virtual Machine",
      "Secure Shell"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SSH; SSH means Secure Shell.",
      "Incorrect. That is not the expansion of SSH; SSH means Secure Shell.",
      "Incorrect. That is not the expansion of SSH; SSH means Secure Shell.",
      "Correct: SSH = Secure Shell."
    ],
    "tip": "SSH → Secure Shell."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SSID stand for?",
    "opts": [
      "Graphical User Interface",
      "Infrared",
      "Multifactor Authentication",
      "Service Set Identifier"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SSID; SSID means Service Set Identifier.",
      "Incorrect. That is not the expansion of SSID; SSID means Service Set Identifier.",
      "Incorrect. That is not the expansion of SSID; SSID means Service Set Identifier.",
      "Correct: SSID = Service Set Identifier."
    ],
    "tip": "SSID → Service Set Identifier."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does SSO stand for?",
    "opts": [
      "Network Basic Input/Output System",
      "Preboot eXecution Environment",
      "Remote Desktop Protocol",
      "Single Sign-on"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of SSO; SSO means Single Sign-on.",
      "Incorrect. That is not the expansion of SSO; SSO means Single Sign-on.",
      "Incorrect. That is not the expansion of SSO; SSO means Single Sign-on.",
      "Correct: SSO = Single Sign-on."
    ],
    "tip": "SSO → Single Sign-on."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does ST stand for?",
    "opts": [
      "Revolutions Per Minute",
      "Small Outline Dual In-line Memory Module",
      "Serial Advanced Technology Attachment",
      "Straight Tip"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of ST; ST means Straight Tip.",
      "Incorrect. That is not the expansion of ST; ST means Straight Tip.",
      "Incorrect. That is not the expansion of ST; ST means Straight Tip.",
      "Correct: ST = Straight Tip."
    ],
    "tip": "ST → Straight Tip."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TACACS stand for?",
    "opts": [
      "Short Message Service",
      "Network Basic Input/Output System",
      "In-plane Switching",
      "Terminal Access Controller Access-control System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TACACS; TACACS means Terminal Access Controller Access-control System.",
      "Incorrect. That is not the expansion of TACACS; TACACS means Terminal Access Controller Access-control System.",
      "Incorrect. That is not the expansion of TACACS; TACACS means Terminal Access Controller Access-control System.",
      "Correct: TACACS = Terminal Access Controller Access-control System."
    ],
    "tip": "TACACS → Terminal Access Controller Access-control System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TCP stand for?",
    "opts": [
      "Keyboard-Video-Mouse",
      "Redundant Array of Independent Disks",
      "Small Computer System Interface",
      "Transmission Control Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TCP; TCP means Transmission Control Protocol.",
      "Incorrect. That is not the expansion of TCP; TCP means Transmission Control Protocol.",
      "Incorrect. That is not the expansion of TCP; TCP means Transmission Control Protocol.",
      "Correct: TCP = Transmission Control Protocol."
    ],
    "tip": "TCP → Transmission Control Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TKIP stand for?",
    "opts": [
      "Reduced Instruction Set Computer",
      "Unified Extensible Firmware Interface",
      "Potentially Unwanted Program",
      "Temporal Key Integrity Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TKIP; TKIP means Temporal Key Integrity Protocol.",
      "Incorrect. That is not the expansion of TKIP; TKIP means Temporal Key Integrity Protocol.",
      "Incorrect. That is not the expansion of TKIP; TKIP means Temporal Key Integrity Protocol.",
      "Correct: TKIP = Temporal Key Integrity Protocol."
    ],
    "tip": "TKIP → Temporal Key Integrity Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TN stand for?",
    "opts": [
      "Graphical User Interface",
      "Liquid Crystal Display",
      "Small Office/Home Office",
      "Twisted Nematic"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TN; TN means Twisted Nematic.",
      "Incorrect. That is not the expansion of TN; TN means Twisted Nematic.",
      "Incorrect. That is not the expansion of TN; TN means Twisted Nematic.",
      "Correct: TN = Twisted Nematic."
    ],
    "tip": "TN → Twisted Nematic."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TOTP stand for?",
    "opts": [
      "Self-monitoring Analysis and Reporting Technology",
      "Unified Extensible Firmware Interface",
      "Embedded SIM",
      "Time-based One-time Password"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TOTP; TOTP means Time-based One-time Password.",
      "Incorrect. That is not the expansion of TOTP; TOTP means Time-based One-time Password.",
      "Incorrect. That is not the expansion of TOTP; TOTP means Time-based One-time Password.",
      "Correct: TOTP = Time-based One-time Password."
    ],
    "tip": "TOTP → Time-based One-time Password."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TPM stand for?",
    "opts": [
      "Power Supply Unit",
      "Wireless Access Point",
      "Cross-site Scripting",
      "Trusted Platform Module"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TPM; TPM means Trusted Platform Module.",
      "Incorrect. That is not the expansion of TPM; TPM means Trusted Platform Module.",
      "Incorrect. That is not the expansion of TPM; TPM means Trusted Platform Module.",
      "Correct: TPM = Trusted Platform Module."
    ],
    "tip": "TPM → Trusted Platform Module."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does TXT stand for?",
    "opts": [
      "Written Internet Service Provider",
      "Virtual Private Network",
      "Hardware Security Module",
      "Text"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of TXT; TXT means Text.",
      "Incorrect. That is not the expansion of TXT; TXT means Text.",
      "Incorrect. That is not the expansion of TXT; TXT means Text.",
      "Correct: TXT = Text."
    ],
    "tip": "TXT → Text."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does UAC stand for?",
    "opts": [
      "Extended File System",
      "In-plane Switching",
      "Network Time Protocol",
      "User Account Control"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of UAC; UAC means User Account Control.",
      "Incorrect. That is not the expansion of UAC; UAC means User Account Control.",
      "Incorrect. That is not the expansion of UAC; UAC means User Account Control.",
      "Correct: UAC = User Account Control."
    ],
    "tip": "UAC → User Account Control."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does UDP stand for?",
    "opts": [
      "Electrostatic Discharge",
      "Lightweight Directory Access Protocol",
      "Video Random-access Memory",
      "User Datagram Protocol"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of UDP; UDP means User Datagram Protocol.",
      "Incorrect. That is not the expansion of UDP; UDP means User Datagram Protocol.",
      "Incorrect. That is not the expansion of UDP; UDP means User Datagram Protocol.",
      "Correct: UDP = User Datagram Protocol."
    ],
    "tip": "UDP → User Datagram Protocol."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does UEFI stand for?",
    "opts": [
      "Dual In-line Memory Module",
      "Globally Unique Identifier",
      "Peripheral Component Interconnect",
      "Unified Extensible Firmware Interface"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of UEFI; UEFI means Unified Extensible Firmware Interface.",
      "Incorrect. That is not the expansion of UEFI; UEFI means Unified Extensible Firmware Interface.",
      "Incorrect. That is not the expansion of UEFI; UEFI means Unified Extensible Firmware Interface.",
      "Correct: UEFI = Unified Extensible Firmware Interface."
    ],
    "tip": "UEFI → Unified Extensible Firmware Interface."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does UPS stand for?",
    "opts": [
      "Printer Command Language",
      "Network Interface Card",
      "Universal Serial Bus Type C",
      "Uninterruptible Power Supply"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of UPS; UPS means Uninterruptible Power Supply.",
      "Incorrect. That is not the expansion of UPS; UPS means Uninterruptible Power Supply.",
      "Incorrect. That is not the expansion of UPS; UPS means Uninterruptible Power Supply.",
      "Correct: UPS = Uninterruptible Power Supply."
    ],
    "tip": "UPS → Uninterruptible Power Supply."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does USB stand for?",
    "opts": [
      "Video Graphics Array",
      "Infrared",
      "Embedded SIM",
      "Universal Serial Bus"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of USB; USB means Universal Serial Bus.",
      "Incorrect. That is not the expansion of USB; USB means Universal Serial Bus.",
      "Incorrect. That is not the expansion of USB; USB means Universal Serial Bus.",
      "Correct: USB = Universal Serial Bus."
    ],
    "tip": "USB → Universal Serial Bus."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does USB-C stand for?",
    "opts": [
      "Red-Green-Blue",
      "Data Loss Prevention",
      "Basic Input/Output System",
      "Universal Serial Bus Type C"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of USB-C; USB-C means Universal Serial Bus Type C.",
      "Incorrect. That is not the expansion of USB-C; USB-C means Universal Serial Bus Type C.",
      "Incorrect. That is not the expansion of USB-C; USB-C means Universal Serial Bus Type C.",
      "Correct: USB-C = Universal Serial Bus Type C."
    ],
    "tip": "USB-C → Universal Serial Bus Type C."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does UTM stand for?",
    "opts": [
      "Printer Command Language",
      "32-bit File Allocation Table",
      "Master Boot Record",
      "Unified Threat Management"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of UTM; UTM means Unified Threat Management.",
      "Incorrect. That is not the expansion of UTM; UTM means Unified Threat Management.",
      "Incorrect. That is not the expansion of UTM; UTM means Unified Threat Management.",
      "Correct: UTM = Unified Threat Management."
    ],
    "tip": "UTM → Unified Threat Management."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VA stand for?",
    "opts": [
      "Storage Area Network",
      "Liquid Crystal Display",
      "Network Access Control",
      "Vertical Alignment"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VA; VA means Vertical Alignment.",
      "Incorrect. That is not the expansion of VA; VA means Vertical Alignment.",
      "Incorrect. That is not the expansion of VA; VA means Vertical Alignment.",
      "Correct: VA = Vertical Alignment."
    ],
    "tip": "VA → Vertical Alignment."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VDI stand for?",
    "opts": [
      "Local Area Network",
      "Software Process Improvement and Capability Determination",
      "Network Basic Input/Output System",
      "Virtual Desktop Infrastructure"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VDI; VDI means Virtual Desktop Infrastructure.",
      "Incorrect. That is not the expansion of VDI; VDI means Virtual Desktop Infrastructure.",
      "Incorrect. That is not the expansion of VDI; VDI means Virtual Desktop Infrastructure.",
      "Correct: VDI = Virtual Desktop Infrastructure."
    ],
    "tip": "VDI → Virtual Desktop Infrastructure."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VGA stand for?",
    "opts": [
      "Automatic Private Internet Protocol Addressing",
      "Identity and Access Management",
      "Supervisory Control and Data Acquisition",
      "Video Graphics Array"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VGA; VGA means Video Graphics Array.",
      "Incorrect. That is not the expansion of VGA; VGA means Video Graphics Array.",
      "Incorrect. That is not the expansion of VGA; VGA means Video Graphics Array.",
      "Correct: VGA = Video Graphics Array."
    ],
    "tip": "VGA → Video Graphics Array."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VLAN stand for?",
    "opts": [
      "Wide Area Network",
      "Network Interface Card",
      "Peripheral Component Interconnect",
      "Virtual LAN [Local Area Network]"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VLAN; VLAN means Virtual LAN [Local Area Network].",
      "Incorrect. That is not the expansion of VLAN; VLAN means Virtual LAN [Local Area Network].",
      "Incorrect. That is not the expansion of VLAN; VLAN means Virtual LAN [Local Area Network].",
      "Correct: VLAN = Virtual LAN [Local Area Network]."
    ],
    "tip": "VLAN → Virtual LAN [Local Area Network]."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VM stand for?",
    "opts": [
      "Automatic Document Feeder",
      "Personal Area Network",
      "Internet of Things",
      "Virtual Machine"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VM; VM means Virtual Machine.",
      "Incorrect. That is not the expansion of VM; VM means Virtual Machine.",
      "Incorrect. That is not the expansion of VM; VM means Virtual Machine.",
      "Correct: VM = Virtual Machine."
    ],
    "tip": "VM → Virtual Machine."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VNC stand for?",
    "opts": [
      "Service Set Identifier",
      "Network Interface Card",
      "High-definition Media Interface",
      "Virtual Network Computer"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VNC; VNC means Virtual Network Computer.",
      "Incorrect. That is not the expansion of VNC; VNC means Virtual Network Computer.",
      "Incorrect. That is not the expansion of VNC; VNC means Virtual Network Computer.",
      "Correct: VNC = Virtual Network Computer."
    ],
    "tip": "VNC → Virtual Network Computer."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VPN stand for?",
    "opts": [
      "Optical Network Terminal",
      "Remote Monitoring and Management",
      "Network Interface Card",
      "Virtual Private Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VPN; VPN means Virtual Private Network.",
      "Incorrect. That is not the expansion of VPN; VPN means Virtual Private Network.",
      "Incorrect. That is not the expansion of VPN; VPN means Virtual Private Network.",
      "Correct: VPN = Virtual Private Network."
    ],
    "tip": "VPN → Virtual Private Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does VRAM stand for?",
    "opts": [
      "Global Positioning System",
      "Advanced Micro Devices, Inc.",
      "Red-Green-Blue",
      "Video Random-access Memory"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of VRAM; VRAM means Video Random-access Memory.",
      "Incorrect. That is not the expansion of VRAM; VRAM means Video Random-access Memory.",
      "Incorrect. That is not the expansion of VRAM; VRAM means Video Random-access Memory.",
      "Correct: VRAM = Video Random-access Memory."
    ],
    "tip": "VRAM → Video Random-access Memory."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WAN stand for?",
    "opts": [
      "Mail Exchange",
      "Safety Data Sheet",
      "Network Basic Input/Output System",
      "Wide Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WAN; WAN means Wide Area Network.",
      "Incorrect. That is not the expansion of WAN; WAN means Wide Area Network.",
      "Incorrect. That is not the expansion of WAN; WAN means Wide Area Network.",
      "Correct: WAN = Wide Area Network."
    ],
    "tip": "WAN → Wide Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WAP stand for?",
    "opts": [
      "Serial Advanced Technology Attachment",
      "Small Outline Dual In-line Memory Module",
      "Extended File System",
      "Wireless Access Point"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WAP; WAP means Wireless Access Point.",
      "Incorrect. That is not the expansion of WAP; WAP means Wireless Access Point.",
      "Incorrect. That is not the expansion of WAP; WAP means Wireless Access Point.",
      "Correct: WAP = Wireless Access Point."
    ],
    "tip": "WAP → Wireless Access Point."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WEP stand for?",
    "opts": [
      "Central Processing Unit",
      "Dual In-line Memory Module",
      "Organic Light-emitting Diode",
      "Wired Equivalent Privacy"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WEP; WEP means Wired Equivalent Privacy.",
      "Incorrect. That is not the expansion of WEP; WEP means Wired Equivalent Privacy.",
      "Incorrect. That is not the expansion of WEP; WEP means Wired Equivalent Privacy.",
      "Correct: WEP = Wired Equivalent Privacy."
    ],
    "tip": "WEP → Wired Equivalent Privacy."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WISP stand for?",
    "opts": [
      "Mobile Device Management",
      "Terminal Access Controller Access-control System",
      "Acceptable Use Policy",
      "Written Internet Service Provider"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WISP; WISP means Written Internet Service Provider.",
      "Incorrect. That is not the expansion of WISP; WISP means Written Internet Service Provider.",
      "Incorrect. That is not the expansion of WISP; WISP means Written Internet Service Provider.",
      "Correct: WISP = Written Internet Service Provider."
    ],
    "tip": "WISP → Written Internet Service Provider."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WLAN stand for?",
    "opts": [
      "Redundant Array of Independent Disks",
      "Bayonet Neill-Concelman",
      "Personally Identifiable Information",
      "Wireless LAN [Local Area Network]"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WLAN; WLAN means Wireless LAN [Local Area Network].",
      "Incorrect. That is not the expansion of WLAN; WLAN means Wireless LAN [Local Area Network].",
      "Incorrect. That is not the expansion of WLAN; WLAN means Wireless LAN [Local Area Network].",
      "Correct: WLAN = Wireless LAN [Local Area Network]."
    ],
    "tip": "WLAN → Wireless LAN [Local Area Network]."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WPA stand for?",
    "opts": [
      "Peripheral Component Interconnect",
      "File Transfer Protocol",
      "Internet Protocol",
      "Wi-Fi Protected Access"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WPA; WPA means Wi-Fi Protected Access.",
      "Incorrect. That is not the expansion of WPA; WPA means Wi-Fi Protected Access.",
      "Incorrect. That is not the expansion of WPA; WPA means Wi-Fi Protected Access.",
      "Correct: WPA = Wi-Fi Protected Access."
    ],
    "tip": "WPA → Wi-Fi Protected Access."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does WWAN stand for?",
    "opts": [
      "Lightweight Directory Access Protocol",
      "Serial Communications D-Shell Connector, 9 pins",
      "Acceptable Use Policy",
      "Wireless Wide Area Network"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of WWAN; WWAN means Wireless Wide Area Network.",
      "Incorrect. That is not the expansion of WWAN; WWAN means Wireless Wide Area Network.",
      "Incorrect. That is not the expansion of WWAN; WWAN means Wireless Wide Area Network.",
      "Correct: WWAN = Wireless Wide Area Network."
    ],
    "tip": "WWAN → Wireless Wide Area Network."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does XDR stand for?",
    "opts": [
      "Personal Identity Verification",
      "Mail Exchange",
      "File Transfer Protocol",
      "Extended Detection and Response"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of XDR; XDR means Extended Detection and Response.",
      "Incorrect. That is not the expansion of XDR; XDR means Extended Detection and Response.",
      "Incorrect. That is not the expansion of XDR; XDR means Extended Detection and Response.",
      "Correct: XDR = Extended Detection and Response."
    ],
    "tip": "XDR → Extended Detection and Response."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does XFS stand for?",
    "opts": [
      "Network Access Server",
      "Network Access Control",
      "Supervisory Control and Data Acquisition",
      "Extended File System"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of XFS; XFS means Extended File System.",
      "Incorrect. That is not the expansion of XFS; XFS means Extended File System.",
      "Incorrect. That is not the expansion of XFS; XFS means Extended File System.",
      "Correct: XFS = Extended File System."
    ],
    "tip": "XFS → Extended File System."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does XXS stand for?",
    "opts": [
      "Internet Protocol",
      "Virtual Machine",
      "End-user License Agreement",
      "Cross-site Scripting"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of XXS; XXS means Cross-site Scripting.",
      "Incorrect. That is not the expansion of XXS; XXS means Cross-site Scripting.",
      "Incorrect. That is not the expansion of XXS; XXS means Cross-site Scripting.",
      "Correct: XXS = Cross-site Scripting."
    ],
    "tip": "XXS → Cross-site Scripting."
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "In the official Core 1 acronym list, what does EQUIPMENT stand for?",
    "opts": [
      "Registered Jack Function 11",
      "Supervisory Control and Data Acquisition",
      "Safety Data Sheet",
      "SPARE PARTS/HARDWARE                                             TOOLS"
    ],
    "ans": [
      3
    ],
    "why": [
      "Incorrect. That is not the expansion of EQUIPMENT; EQUIPMENT means SPARE PARTS/HARDWARE                                             TOOLS.",
      "Incorrect. That is not the expansion of EQUIPMENT; EQUIPMENT means SPARE PARTS/HARDWARE                                             TOOLS.",
      "Incorrect. That is not the expansion of EQUIPMENT; EQUIPMENT means SPARE PARTS/HARDWARE                                             TOOLS.",
      "Correct: EQUIPMENT = SPARE PARTS/HARDWARE                                             TOOLS."
    ],
    "tip": "EQUIPMENT → SPARE PARTS/HARDWARE                                             TOOLS."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: A swollen pack must be taken out of service safely. Which technology or concept is MOST relevant?",
    "opts": [
      "Battery",
      "Wireless card",
      "SSD",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "Battery: Stores portable electrical power.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from battery.",
      "SSD: Solid-state storage without moving platters. This serves a different function from battery.",
      "Webcam: Captures video for calls and meetings. This serves a different function from battery."
    ],
    "tip": "A swollen pack must be taken out of service safely."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: temporary working memory for active tasks?",
    "opts": [
      "RAM",
      "SSD",
      "Wi-Fi antenna connector",
      "Battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAM: Temporary working memory for active tasks.",
      "SSD: Solid-state storage without moving platters. This serves a different function from ram.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from ram.",
      "Battery: Stores portable electrical power. This serves a different function from ram."
    ],
    "tip": "Match laptop memory form factor and supported generation."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that solid-state storage without moving platters. What should they select?",
    "opts": [
      "SSD",
      "RAM",
      "Biometrics",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "SSD: Solid-state storage without moving platters.",
      "RAM: Temporary working memory for active tasks. This serves a different function from ssd.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from ssd.",
      "Webcam: Captures video for calls and meetings. This serves a different function from ssd."
    ],
    "tip": "Storage upgrades need interface and form-factor compatibility."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: A disconnected lead can cause weak wireless reception. Which technology or concept is MOST relevant?",
    "opts": [
      "Wi-Fi antenna connector",
      "RAM",
      "Battery",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wi-Fi antenna connector: Links the wireless card to antenna leads.",
      "RAM: Temporary working memory for active tasks. This serves a different function from wi-fi antenna connector.",
      "Battery: Stores portable electrical power. This serves a different function from wi-fi antenna connector.",
      "Webcam: Captures video for calls and meetings. This serves a different function from wi-fi antenna connector."
    ],
    "tip": "A disconnected lead can cause weak wireless reception."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: captures video for calls and meetings?",
    "opts": [
      "Webcam",
      "Wireless card",
      "SSD",
      "Biometrics"
    ],
    "ans": [
      0
    ],
    "why": [
      "Webcam: Captures video for calls and meetings.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from webcam.",
      "SSD: Solid-state storage without moving platters. This serves a different function from webcam.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from webcam."
    ],
    "tip": "Check privacy shutters and camera permissions first."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that uses physical traits to authenticate users. What should they select?",
    "opts": [
      "Biometrics",
      "SSD",
      "Wireless card",
      "Wi-Fi antenna connector"
    ],
    "ans": [
      0
    ],
    "why": [
      "Biometrics: Uses physical traits to authenticate users.",
      "SSD: Solid-state storage without moving platters. This serves a different function from biometrics.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from biometrics.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from biometrics."
    ],
    "tip": "A fingerprint reader is a security component."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: Confirm antenna leads before replacing a wireless card. Which technology or concept is MOST relevant?",
    "opts": [
      "Wireless card",
      "Wi-Fi antenna connector",
      "Biometrics",
      "Battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wireless card: Provides radio connectivity to networks.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from wireless card.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from wireless card.",
      "Battery: Stores portable electrical power. This serves a different function from wireless card."
    ],
    "tip": "Confirm antenna leads before replacing a wireless card."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: stores portable electrical power?",
    "opts": [
      "Battery",
      "Biometrics",
      "Webcam",
      "Wireless card"
    ],
    "ans": [
      0
    ],
    "why": [
      "Battery: Stores portable electrical power.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from battery.",
      "Webcam: Captures video for calls and meetings. This serves a different function from battery.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from battery."
    ],
    "tip": "A swollen pack must be taken out of service safely."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that temporary working memory for active tasks. What should they select?",
    "opts": [
      "RAM",
      "SSD",
      "Webcam",
      "Biometrics"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAM: Temporary working memory for active tasks.",
      "SSD: Solid-state storage without moving platters. This serves a different function from ram.",
      "Webcam: Captures video for calls and meetings. This serves a different function from ram.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from ram."
    ],
    "tip": "Match laptop memory form factor and supported generation."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: Storage upgrades need interface and form-factor compatibility. Which technology or concept is MOST relevant?",
    "opts": [
      "SSD",
      "RAM",
      "Biometrics",
      "Wi-Fi antenna connector"
    ],
    "ans": [
      0
    ],
    "why": [
      "SSD: Solid-state storage without moving platters.",
      "RAM: Temporary working memory for active tasks. This serves a different function from ssd.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from ssd.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from ssd."
    ],
    "tip": "Storage upgrades need interface and form-factor compatibility."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: links the wireless card to antenna leads?",
    "opts": [
      "Wi-Fi antenna connector",
      "Wireless card",
      "SSD",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wi-Fi antenna connector: Links the wireless card to antenna leads.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from wi-fi antenna connector.",
      "SSD: Solid-state storage without moving platters. This serves a different function from wi-fi antenna connector.",
      "Webcam: Captures video for calls and meetings. This serves a different function from wi-fi antenna connector."
    ],
    "tip": "A disconnected lead can cause weak wireless reception."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that captures video for calls and meetings. What should they select?",
    "opts": [
      "Webcam",
      "SSD",
      "Wireless card",
      "RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Webcam: Captures video for calls and meetings.",
      "SSD: Solid-state storage without moving platters. This serves a different function from webcam.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from webcam.",
      "RAM: Temporary working memory for active tasks. This serves a different function from webcam."
    ],
    "tip": "Check privacy shutters and camera permissions first."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: A fingerprint reader is a security component. Which technology or concept is MOST relevant?",
    "opts": [
      "Biometrics",
      "Wi-Fi antenna connector",
      "Wireless card",
      "Battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Biometrics: Uses physical traits to authenticate users.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from biometrics.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from biometrics.",
      "Battery: Stores portable electrical power. This serves a different function from biometrics."
    ],
    "tip": "A fingerprint reader is a security component."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: provides radio connectivity to networks?",
    "opts": [
      "Wireless card",
      "Biometrics",
      "RAM",
      "Wi-Fi antenna connector"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wireless card: Provides radio connectivity to networks.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from wireless card.",
      "RAM: Temporary working memory for active tasks. This serves a different function from wireless card.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from wireless card."
    ],
    "tip": "Confirm antenna leads before replacing a wireless card."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that stores portable electrical power. What should they select?",
    "opts": [
      "Battery",
      "Biometrics",
      "Wireless card",
      "Wi-Fi antenna connector"
    ],
    "ans": [
      0
    ],
    "why": [
      "Battery: Stores portable electrical power.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from battery.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from battery.",
      "Wi-Fi antenna connector: Links the wireless card to antenna leads. This serves a different function from battery."
    ],
    "tip": "A swollen pack must be taken out of service safely."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "A technician encounters this situation: Match laptop memory form factor and supported generation. Which technology or concept is MOST relevant?",
    "opts": [
      "RAM",
      "Webcam",
      "Biometrics",
      "Wireless card"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAM: Temporary working memory for active tasks.",
      "Webcam: Captures video for calls and meetings. This serves a different function from ram.",
      "Biometrics: Uses physical traits to authenticate users. This serves a different function from ram.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from ram."
    ],
    "tip": "Match laptop memory form factor and supported generation."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "Which term describes the following capability: solid-state storage without moving platters?",
    "opts": [
      "SSD",
      "Wireless card",
      "Battery",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "SSD: Solid-state storage without moving platters.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from ssd.",
      "Battery: Stores portable electrical power. This serves a different function from ssd.",
      "Webcam: Captures video for calls and meetings. This serves a different function from ssd."
    ],
    "tip": "Storage upgrades need interface and form-factor compatibility."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.1",
    "q": "An IT support specialist needs to identify a component or service that links the wireless card to antenna leads. What should they select?",
    "opts": [
      "Wi-Fi antenna connector",
      "Battery",
      "Wireless card",
      "Webcam"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wi-Fi antenna connector: Links the wireless card to antenna leads.",
      "Battery: Stores portable electrical power. This serves a different function from wi-fi antenna connector.",
      "Wireless card: Provides radio connectivity to networks. This serves a different function from wi-fi antenna connector.",
      "Webcam: Captures video for calls and meetings. This serves a different function from wi-fi antenna connector."
    ],
    "tip": "A disconnected lead can cause weak wireless reception."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Connector shape alone does not guarantee every feature. Which technology or concept is MOST relevant?",
    "opts": [
      "USB-C",
      "Docking station",
      "Lightning",
      "Hotspot"
    ],
    "ans": [
      0
    ],
    "why": [
      "USB-C: Reversible connector used for data and sometimes power/video.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from usb-c.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from usb-c.",
      "Hotspot: Shares a phone's cellular connection with clients. This serves a different function from usb-c."
    ],
    "tip": "Connector shape alone does not guarantee every feature."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: proprietary mobile connector on certain Apple devices?",
    "opts": [
      "Lightning",
      "Hotspot",
      "Docking station",
      "Stylus"
    ],
    "ans": [
      0
    ],
    "why": [
      "Lightning: Proprietary mobile connector on certain Apple devices.",
      "Hotspot: Shares a phone's cellular connection with clients. This serves a different function from lightning.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from lightning.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from lightning."
    ],
    "tip": "Check the device generation before choosing a cable."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An IT support specialist needs to identify a component or service that very short-range contactless communication. What should they select?",
    "opts": [
      "NFC",
      "Port replicator",
      "Lightning",
      "USB-C"
    ],
    "ans": [
      0
    ],
    "why": [
      "NFC: Very short-range contactless communication.",
      "Port replicator: Extends accessible computer ports. This serves a different function from nfc.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from nfc.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from nfc."
    ],
    "tip": "Tap-to-pay happens at close proximity."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Pairing a headset differs from sharing internet access. Which technology or concept is MOST relevant?",
    "opts": [
      "Bluetooth",
      "Docking station",
      "NFC",
      "Port replicator"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth: Short-range wireless accessory pairing.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from bluetooth.",
      "NFC: Very short-range contactless communication. This serves a different function from bluetooth.",
      "Port replicator: Extends accessible computer ports. This serves a different function from bluetooth."
    ],
    "tip": "Pairing a headset differs from sharing internet access."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: shares a phone's cellular connection with clients?",
    "opts": [
      "Hotspot",
      "Docking station",
      "NFC",
      "USB-C"
    ],
    "ans": [
      0
    ],
    "why": [
      "Hotspot: Shares a phone's cellular connection with clients.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from hotspot.",
      "NFC: Very short-range contactless communication. This serves a different function from hotspot.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from hotspot."
    ],
    "tip": "Check data plan and hotspot settings."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An IT support specialist needs to identify a component or service that adds multiple peripheral and display connections. What should they select?",
    "opts": [
      "Docking station",
      "NFC",
      "Stylus",
      "Lightning"
    ],
    "ans": [
      0
    ],
    "why": [
      "Docking station: Adds multiple peripheral and display connections.",
      "NFC: Very short-range contactless communication. This serves a different function from docking station.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from docking station.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from docking station."
    ],
    "tip": "One connection can attach a laptop to desk peripherals."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Confirm digitizer support before replacing the pen. Which technology or concept is MOST relevant?",
    "opts": [
      "Stylus",
      "NFC",
      "Hotspot",
      "USB-C"
    ],
    "ans": [
      0
    ],
    "why": [
      "Stylus: Precision pen input on compatible touchscreens.",
      "NFC: Very short-range contactless communication. This serves a different function from stylus.",
      "Hotspot: Shares a phone's cellular connection with clients. This serves a different function from stylus.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from stylus."
    ],
    "tip": "Confirm digitizer support before replacing the pen."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: extends accessible computer ports?",
    "opts": [
      "Port replicator",
      "USB-C",
      "Bluetooth",
      "NFC"
    ],
    "ans": [
      0
    ],
    "why": [
      "Port replicator: Extends accessible computer ports.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from port replicator.",
      "Bluetooth: Short-range wireless accessory pairing. This serves a different function from port replicator.",
      "NFC: Very short-range contactless communication. This serves a different function from port replicator."
    ],
    "tip": "Useful when a laptop lacks enough physical connections."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An IT support specialist needs to identify a component or service that reversible connector used for data and sometimes power/video. What should they select?",
    "opts": [
      "USB-C",
      "Docking station",
      "Stylus",
      "Lightning"
    ],
    "ans": [
      0
    ],
    "why": [
      "USB-C: Reversible connector used for data and sometimes power/video.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from usb-c.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from usb-c.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from usb-c."
    ],
    "tip": "Connector shape alone does not guarantee every feature."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Check the device generation before choosing a cable. Which technology or concept is MOST relevant?",
    "opts": [
      "Lightning",
      "NFC",
      "Bluetooth",
      "Docking station"
    ],
    "ans": [
      0
    ],
    "why": [
      "Lightning: Proprietary mobile connector on certain Apple devices.",
      "NFC: Very short-range contactless communication. This serves a different function from lightning.",
      "Bluetooth: Short-range wireless accessory pairing. This serves a different function from lightning.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from lightning."
    ],
    "tip": "Check the device generation before choosing a cable."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: very short-range contactless communication?",
    "opts": [
      "NFC",
      "Docking station",
      "USB-C",
      "Stylus"
    ],
    "ans": [
      0
    ],
    "why": [
      "NFC: Very short-range contactless communication.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from nfc.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from nfc.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from nfc."
    ],
    "tip": "Tap-to-pay happens at close proximity."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An IT support specialist needs to identify a component or service that short-range wireless accessory pairing. What should they select?",
    "opts": [
      "Bluetooth",
      "Stylus",
      "Lightning",
      "Docking station"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth: Short-range wireless accessory pairing.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from bluetooth.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from bluetooth.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from bluetooth."
    ],
    "tip": "Pairing a headset differs from sharing internet access."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Check data plan and hotspot settings. Which technology or concept is MOST relevant?",
    "opts": [
      "Hotspot",
      "Bluetooth",
      "Lightning",
      "NFC"
    ],
    "ans": [
      0
    ],
    "why": [
      "Hotspot: Shares a phone's cellular connection with clients.",
      "Bluetooth: Short-range wireless accessory pairing. This serves a different function from hotspot.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from hotspot.",
      "NFC: Very short-range contactless communication. This serves a different function from hotspot."
    ],
    "tip": "Check data plan and hotspot settings."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: adds multiple peripheral and display connections?",
    "opts": [
      "Docking station",
      "USB-C",
      "Port replicator",
      "Bluetooth"
    ],
    "ans": [
      0
    ],
    "why": [
      "Docking station: Adds multiple peripheral and display connections.",
      "USB-C: Reversible connector used for data and sometimes power/video. This serves a different function from docking station.",
      "Port replicator: Extends accessible computer ports. This serves a different function from docking station.",
      "Bluetooth: Short-range wireless accessory pairing. This serves a different function from docking station."
    ],
    "tip": "One connection can attach a laptop to desk peripherals."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "An IT support specialist needs to identify a component or service that precision pen input on compatible touchscreens. What should they select?",
    "opts": [
      "Stylus",
      "Docking station",
      "NFC",
      "Port replicator"
    ],
    "ans": [
      0
    ],
    "why": [
      "Stylus: Precision pen input on compatible touchscreens.",
      "Docking station: Adds multiple peripheral and display connections. This serves a different function from stylus.",
      "NFC: Very short-range contactless communication. This serves a different function from stylus.",
      "Port replicator: Extends accessible computer ports. This serves a different function from stylus."
    ],
    "tip": "Confirm digitizer support before replacing the pen."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "A technician encounters this situation: Useful when a laptop lacks enough physical connections. Which technology or concept is MOST relevant?",
    "opts": [
      "Port replicator",
      "Lightning",
      "NFC",
      "Stylus"
    ],
    "ans": [
      0
    ],
    "why": [
      "Port replicator: Extends accessible computer ports.",
      "Lightning: Proprietary mobile connector on certain Apple devices. This serves a different function from port replicator.",
      "NFC: Very short-range contactless communication. This serves a different function from port replicator.",
      "Stylus: Precision pen input on compatible touchscreens. This serves a different function from port replicator."
    ],
    "tip": "Useful when a laptop lacks enough physical connections."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.2",
    "q": "Which term describes the following capability: reversible connector used for data and sometimes power/video?",
    "opts": [
      "USB-C",
      "NFC",
      "Bluetooth",
      "Hotspot"
    ],
    "ans": [
      0
    ],
    "why": [
      "USB-C: Reversible connector used for data and sometimes power/video.",
      "NFC: Very short-range contactless communication. This serves a different function from usb-c.",
      "Bluetooth: Short-range wireless accessory pairing. This serves a different function from usb-c.",
      "Hotspot: Shares a phone's cellular connection with clients. This serves a different function from usb-c."
    ],
    "tip": "Connector shape alone does not guarantee every feature."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: A cellular activation issue can involve eSIM provisioning. Which technology or concept is MOST relevant?",
    "opts": [
      "eSIM",
      "Cloud storage sync",
      "Data cap",
      "GPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "eSIM: Embedded digital subscriber identity.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from esim.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from esim.",
      "GPS: Satellite-based positioning service. This serves a different function from esim."
    ],
    "tip": "A cellular activation issue can involve eSIM provisioning."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: centrally applies mobile configurations and policies?",
    "opts": [
      "MDM",
      "Bluetooth PIN",
      "Cloud storage sync",
      "eSIM"
    ],
    "ans": [
      0
    ],
    "why": [
      "MDM: Centrally applies mobile configurations and policies.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from mdm.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from mdm.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from mdm."
    ],
    "tip": "Corporate devices may restrict settings through management."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "An IT support specialist needs to identify a component or service that satellite-based positioning service. What should they select?",
    "opts": [
      "GPS",
      "MDM",
      "eSIM",
      "BYOD"
    ],
    "ans": [
      0
    ],
    "why": [
      "GPS: Satellite-based positioning service.",
      "MDM: Centrally applies mobile configurations and policies. This serves a different function from gps.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from gps.",
      "BYOD: Employee-owned device used for work. This serves a different function from gps."
    ],
    "tip": "Outdoor location may use satellite signals."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: Separate corporate policies from personal ownership. Which technology or concept is MOST relevant?",
    "opts": [
      "BYOD",
      "Data cap",
      "Bluetooth PIN",
      "MDM"
    ],
    "ans": [
      0
    ],
    "why": [
      "BYOD: Employee-owned device used for work.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from byod.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from byod.",
      "MDM: Centrally applies mobile configurations and policies. This serves a different function from byod."
    ],
    "tip": "Separate corporate policies from personal ownership."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: code used to verify device pairing?",
    "opts": [
      "Bluetooth PIN",
      "Cloud storage sync",
      "GPS",
      "eSIM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth PIN: Code used to verify device pairing.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from bluetooth pin.",
      "GPS: Satellite-based positioning service. This serves a different function from bluetooth pin.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from bluetooth pin."
    ],
    "tip": "Confirm matching passkeys before troubleshooting the radio."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "An IT support specialist needs to identify a component or service that limit on allowed cellular data usage. What should they select?",
    "opts": [
      "Data cap",
      "MDM",
      "Bluetooth PIN",
      "Cloud storage sync"
    ],
    "ans": [
      0
    ],
    "why": [
      "Data cap: Limit on allowed cellular data usage.",
      "MDM: Centrally applies mobile configurations and policies. This serves a different function from data cap.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from data cap.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from data cap."
    ],
    "tip": "Unexpected throttling can follow a plan's usage threshold."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: Check account and synchronization settings. Which technology or concept is MOST relevant?",
    "opts": [
      "Cloud storage sync",
      "GPS",
      "Bluetooth PIN",
      "BYOD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cloud storage sync: Keeps selected files synchronized across devices.",
      "GPS: Satellite-based positioning service. This serves a different function from cloud storage sync.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from cloud storage sync.",
      "BYOD: Employee-owned device used for work. This serves a different function from cloud storage sync."
    ],
    "tip": "Check account and synchronization settings."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: embedded digital subscriber identity?",
    "opts": [
      "eSIM",
      "Data cap",
      "Bluetooth PIN",
      "GPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "eSIM: Embedded digital subscriber identity.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from esim.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from esim.",
      "GPS: Satellite-based positioning service. This serves a different function from esim."
    ],
    "tip": "A cellular activation issue can involve eSIM provisioning."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "An IT support specialist needs to identify a component or service that centrally applies mobile configurations and policies. What should they select?",
    "opts": [
      "MDM",
      "Data cap",
      "Cloud storage sync",
      "BYOD"
    ],
    "ans": [
      0
    ],
    "why": [
      "MDM: Centrally applies mobile configurations and policies.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from mdm.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from mdm.",
      "BYOD: Employee-owned device used for work. This serves a different function from mdm."
    ],
    "tip": "Corporate devices may restrict settings through management."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: Outdoor location may use satellite signals. Which technology or concept is MOST relevant?",
    "opts": [
      "GPS",
      "Data cap",
      "eSIM",
      "Cloud storage sync"
    ],
    "ans": [
      0
    ],
    "why": [
      "GPS: Satellite-based positioning service.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from gps.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from gps.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from gps."
    ],
    "tip": "Outdoor location may use satellite signals."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: employee-owned device used for work?",
    "opts": [
      "BYOD",
      "Data cap",
      "Cloud storage sync",
      "eSIM"
    ],
    "ans": [
      0
    ],
    "why": [
      "BYOD: Employee-owned device used for work.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from byod.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from byod.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from byod."
    ],
    "tip": "Separate corporate policies from personal ownership."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "An IT support specialist needs to identify a component or service that code used to verify device pairing. What should they select?",
    "opts": [
      "Bluetooth PIN",
      "GPS",
      "MDM",
      "Data cap"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth PIN: Code used to verify device pairing.",
      "GPS: Satellite-based positioning service. This serves a different function from bluetooth pin.",
      "MDM: Centrally applies mobile configurations and policies. This serves a different function from bluetooth pin.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from bluetooth pin."
    ],
    "tip": "Confirm matching passkeys before troubleshooting the radio."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: Unexpected throttling can follow a plan's usage threshold. Which technology or concept is MOST relevant?",
    "opts": [
      "Data cap",
      "BYOD",
      "Cloud storage sync",
      "Bluetooth PIN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Data cap: Limit on allowed cellular data usage.",
      "BYOD: Employee-owned device used for work. This serves a different function from data cap.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from data cap.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from data cap."
    ],
    "tip": "Unexpected throttling can follow a plan's usage threshold."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: keeps selected files synchronized across devices?",
    "opts": [
      "Cloud storage sync",
      "Bluetooth PIN",
      "BYOD",
      "eSIM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cloud storage sync: Keeps selected files synchronized across devices.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from cloud storage sync.",
      "BYOD: Employee-owned device used for work. This serves a different function from cloud storage sync.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from cloud storage sync."
    ],
    "tip": "Check account and synchronization settings."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "An IT support specialist needs to identify a component or service that embedded digital subscriber identity. What should they select?",
    "opts": [
      "eSIM",
      "Bluetooth PIN",
      "MDM",
      "Cloud storage sync"
    ],
    "ans": [
      0
    ],
    "why": [
      "eSIM: Embedded digital subscriber identity.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from esim.",
      "MDM: Centrally applies mobile configurations and policies. This serves a different function from esim.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from esim."
    ],
    "tip": "A cellular activation issue can involve eSIM provisioning."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "A technician encounters this situation: Corporate devices may restrict settings through management. Which technology or concept is MOST relevant?",
    "opts": [
      "MDM",
      "Cloud storage sync",
      "Bluetooth PIN",
      "GPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "MDM: Centrally applies mobile configurations and policies.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from mdm.",
      "Bluetooth PIN: Code used to verify device pairing. This serves a different function from mdm.",
      "GPS: Satellite-based positioning service. This serves a different function from mdm."
    ],
    "tip": "Corporate devices may restrict settings through management."
  },
  {
    "domain": "1.0 Mobile Devices",
    "obj": "1.3",
    "q": "Which term describes the following capability: satellite-based positioning service?",
    "opts": [
      "GPS",
      "Data cap",
      "eSIM",
      "Cloud storage sync"
    ],
    "ans": [
      0
    ],
    "why": [
      "GPS: Satellite-based positioning service.",
      "Data cap: Limit on allowed cellular data usage. This serves a different function from gps.",
      "eSIM: Embedded digital subscriber identity. This serves a different function from gps.",
      "Cloud storage sync: Keeps selected files synchronized across devices. This serves a different function from gps."
    ],
    "tip": "Outdoor location may use satellite signals."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician encounters this situation: Choose encrypted shell access over Telnet. Which technology or concept is MOST relevant?",
    "opts": [
      "SSH",
      "SMB",
      "SMTP",
      "HTTPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "SSH: Encrypted remote command-line administration using port 22.",
      "SMB: Network file sharing commonly using TCP port 445. This serves a different function from ssh.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from ssh.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from ssh."
    ],
    "tip": "Choose encrypted shell access over Telnet."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which term describes the following capability: unencrypted remote terminal protocol using port 23?",
    "opts": [
      "Telnet",
      "DNS",
      "HTTPS",
      "SMTP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Telnet: Unencrypted remote terminal protocol using port 23.",
      "DNS: Name resolution commonly using port 53. This serves a different function from telnet.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from telnet.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from telnet."
    ],
    "tip": "Avoid sending administrative credentials in plaintext."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "An IT support specialist needs to identify a component or service that name resolution commonly using port 53. What should they select?",
    "opts": [
      "DNS",
      "RDP",
      "Telnet",
      "DHCP"
    ],
    "ans": [
      0
    ],
    "why": [
      "DNS: Name resolution commonly using port 53.",
      "RDP: Remote graphical desktop service using TCP port 3389. This serves a different function from dns.",
      "Telnet: Unencrypted remote terminal protocol using port 23. This serves a different function from dns.",
      "DHCP: Automatic address assignment using UDP ports 67 and 68. This serves a different function from dns."
    ],
    "tip": "Name failures can occur even when IP connectivity works."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician encounters this situation: A missing lease can lead to 169.254 addressing. Which technology or concept is MOST relevant?",
    "opts": [
      "DHCP",
      "DNS",
      "SMTP",
      "Telnet"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP: Automatic address assignment using UDP ports 67 and 68.",
      "DNS: Name resolution commonly using port 53. This serves a different function from dhcp.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from dhcp.",
      "Telnet: Unencrypted remote terminal protocol using port 23. This serves a different function from dhcp."
    ],
    "tip": "A missing lease can lead to 169.254 addressing."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which term describes the following capability: encrypted web traffic using TCP port 443?",
    "opts": [
      "HTTPS",
      "DHCP",
      "RDP",
      "SMB"
    ],
    "ans": [
      0
    ],
    "why": [
      "HTTPS: Encrypted web traffic using TCP port 443.",
      "DHCP: Automatic address assignment using UDP ports 67 and 68. This serves a different function from https.",
      "RDP: Remote graphical desktop service using TCP port 3389. This serves a different function from https.",
      "SMB: Network file sharing commonly using TCP port 445. This serves a different function from https."
    ],
    "tip": "Secure browser sessions normally use 443."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "An IT support specialist needs to identify a component or service that remote graphical desktop service using TCP port 3389. What should they select?",
    "opts": [
      "RDP",
      "SMB",
      "DNS",
      "IMAP"
    ],
    "ans": [
      0
    ],
    "why": [
      "RDP: Remote graphical desktop service using TCP port 3389.",
      "SMB: Network file sharing commonly using TCP port 445. This serves a different function from rdp.",
      "DNS: Name resolution commonly using port 53. This serves a different function from rdp.",
      "IMAP: Mail access protocol commonly using TCP port 143. This serves a different function from rdp."
    ],
    "tip": "Remote desktop differs from remote shell."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician encounters this situation: Outgoing mail transport is not the same as reading mail. Which technology or concept is MOST relevant?",
    "opts": [
      "SMTP",
      "DNS",
      "HTTPS",
      "SSH"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMTP: Mail transfer protocol commonly using TCP port 25.",
      "DNS: Name resolution commonly using port 53. This serves a different function from smtp.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from smtp.",
      "SSH: Encrypted remote command-line administration using port 22. This serves a different function from smtp."
    ],
    "tip": "Outgoing mail transport is not the same as reading mail."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which term describes the following capability: mail access protocol commonly using TCP port 143?",
    "opts": [
      "IMAP",
      "SSH",
      "Telnet",
      "DNS"
    ],
    "ans": [
      0
    ],
    "why": [
      "IMAP: Mail access protocol commonly using TCP port 143.",
      "SSH: Encrypted remote command-line administration using port 22. This serves a different function from imap.",
      "Telnet: Unencrypted remote terminal protocol using port 23. This serves a different function from imap.",
      "DNS: Name resolution commonly using port 53. This serves a different function from imap."
    ],
    "tip": "Mailbox synchronization differs from mail sending."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "An IT support specialist needs to identify a component or service that network file sharing commonly using TCP port 445. What should they select?",
    "opts": [
      "SMB",
      "RDP",
      "HTTPS",
      "IMAP"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMB: Network file sharing commonly using TCP port 445.",
      "RDP: Remote graphical desktop service using TCP port 3389. This serves a different function from smb.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from smb.",
      "IMAP: Mail access protocol commonly using TCP port 143. This serves a different function from smb."
    ],
    "tip": "Shared folders typically use SMB."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician encounters this situation: Choose encrypted shell access over Telnet. Which technology or concept is MOST relevant?",
    "opts": [
      "SSH",
      "SMTP",
      "HTTPS",
      "DNS"
    ],
    "ans": [
      0
    ],
    "why": [
      "SSH: Encrypted remote command-line administration using port 22.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from ssh.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from ssh.",
      "DNS: Name resolution commonly using port 53. This serves a different function from ssh."
    ],
    "tip": "Choose encrypted shell access over Telnet."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which term describes the following capability: unencrypted remote terminal protocol using port 23?",
    "opts": [
      "Telnet",
      "SSH",
      "SMTP",
      "HTTPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Telnet: Unencrypted remote terminal protocol using port 23.",
      "SSH: Encrypted remote command-line administration using port 22. This serves a different function from telnet.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from telnet.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from telnet."
    ],
    "tip": "Avoid sending administrative credentials in plaintext."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "An IT support specialist needs to identify a component or service that name resolution commonly using port 53. What should they select?",
    "opts": [
      "DNS",
      "DHCP",
      "IMAP",
      "SMTP"
    ],
    "ans": [
      0
    ],
    "why": [
      "DNS: Name resolution commonly using port 53.",
      "DHCP: Automatic address assignment using UDP ports 67 and 68. This serves a different function from dns.",
      "IMAP: Mail access protocol commonly using TCP port 143. This serves a different function from dns.",
      "SMTP: Mail transfer protocol commonly using TCP port 25. This serves a different function from dns."
    ],
    "tip": "Name failures can occur even when IP connectivity works."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "A technician encounters this situation: A missing lease can lead to 169.254 addressing. Which technology or concept is MOST relevant?",
    "opts": [
      "DHCP",
      "IMAP",
      "RDP",
      "HTTPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP: Automatic address assignment using UDP ports 67 and 68.",
      "IMAP: Mail access protocol commonly using TCP port 143. This serves a different function from dhcp.",
      "RDP: Remote graphical desktop service using TCP port 3389. This serves a different function from dhcp.",
      "HTTPS: Encrypted web traffic using TCP port 443. This serves a different function from dhcp."
    ],
    "tip": "A missing lease can lead to 169.254 addressing."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "Which term describes the following capability: encrypted web traffic using TCP port 443?",
    "opts": [
      "HTTPS",
      "RDP",
      "DNS",
      "Telnet"
    ],
    "ans": [
      0
    ],
    "why": [
      "HTTPS: Encrypted web traffic using TCP port 443.",
      "RDP: Remote graphical desktop service using TCP port 3389. This serves a different function from https.",
      "DNS: Name resolution commonly using port 53. This serves a different function from https.",
      "Telnet: Unencrypted remote terminal protocol using port 23. This serves a different function from https."
    ],
    "tip": "Secure browser sessions normally use 443."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.1",
    "q": "An IT support specialist needs to identify a component or service that remote graphical desktop service using TCP port 3389. What should they select?",
    "opts": [
      "RDP",
      "SSH",
      "Telnet",
      "SMB"
    ],
    "ans": [
      0
    ],
    "why": [
      "RDP: Remote graphical desktop service using TCP port 3389.",
      "SSH: Encrypted remote command-line administration using port 22. This serves a different function from rdp.",
      "Telnet: Unencrypted remote terminal protocol using port 23. This serves a different function from rdp.",
      "SMB: Network file sharing commonly using TCP port 445. This serves a different function from rdp."
    ],
    "tip": "Remote desktop differs from remote shell."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Crowded channels can affect nearby networks. Which technology or concept is MOST relevant?",
    "opts": [
      "2.4 GHz",
      "6 GHz",
      "5 GHz",
      "RFID"
    ],
    "ans": [
      0
    ],
    "why": [
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from 2.4 ghz.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 2.4 ghz.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from 2.4 ghz."
    ],
    "tip": "Crowded channels can affect nearby networks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: wi-Fi band with more available channels and shorter typical reach?",
    "opts": [
      "5 GHz",
      "802.11 standards",
      "RFID",
      "2.4 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 5 ghz.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from 5 ghz.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from 5 ghz."
    ],
    "tip": "Prefer it when interference matters and coverage is sufficient."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that newer Wi-Fi spectrum used by compatible devices. What should they select?",
    "opts": [
      "6 GHz",
      "5 GHz",
      "Bluetooth",
      "2.4 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 6 ghz.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from 6 ghz.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from 6 ghz."
    ],
    "tip": "Both client and access point must support it."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Wider channels can increase overlap. Which technology or concept is MOST relevant?",
    "opts": [
      "Channel width",
      "6 GHz",
      "5 GHz",
      "Bluetooth"
    ],
    "ans": [
      0
    ],
    "why": [
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from channel width.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from channel width.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from channel width."
    ],
    "tip": "Wider channels can increase overlap."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: family of wireless LAN technical standards?",
    "opts": [
      "802.11 standards",
      "Channel width",
      "6 GHz",
      "Bluetooth"
    ],
    "ans": [
      0
    ],
    "why": [
      "802.11 standards: Family of wireless LAN technical standards.",
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies. This serves a different function from 802.11 standards.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from 802.11 standards.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from 802.11 standards."
    ],
    "tip": "Check client and router compatibility."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that radio identification technology using tags and readers. What should they select?",
    "opts": [
      "RFID",
      "2.4 GHz",
      "6 GHz",
      "Bluetooth"
    ],
    "ans": [
      0
    ],
    "why": [
      "RFID: Radio identification technology using tags and readers.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from rfid.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from rfid.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from rfid."
    ],
    "tip": "Inventory tags are not the same as Wi-Fi clients."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Headsets generally use Bluetooth rather than Wi-Fi. Which technology or concept is MOST relevant?",
    "opts": [
      "Bluetooth",
      "802.11 standards",
      "5 GHz",
      "RFID"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth: Short-range wireless technology for peripherals.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from bluetooth.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from bluetooth.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from bluetooth."
    ],
    "tip": "Headsets generally use Bluetooth rather than Wi-Fi."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: wi-Fi band with longer typical reach but more interference?",
    "opts": [
      "2.4 GHz",
      "6 GHz",
      "Channel width",
      "802.11 standards"
    ],
    "ans": [
      0
    ],
    "why": [
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from 2.4 ghz.",
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies. This serves a different function from 2.4 ghz.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 2.4 ghz."
    ],
    "tip": "Crowded channels can affect nearby networks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that wi-Fi band with more available channels and shorter typical reach. What should they select?",
    "opts": [
      "5 GHz",
      "6 GHz",
      "Bluetooth",
      "802.11 standards"
    ],
    "ans": [
      0
    ],
    "why": [
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from 5 ghz.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from 5 ghz.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 5 ghz."
    ],
    "tip": "Prefer it when interference matters and coverage is sufficient."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Both client and access point must support it. Which technology or concept is MOST relevant?",
    "opts": [
      "6 GHz",
      "2.4 GHz",
      "RFID",
      "5 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from 6 ghz.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from 6 ghz.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 6 ghz."
    ],
    "tip": "Both client and access point must support it."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: amount of radio spectrum a Wi-Fi channel occupies?",
    "opts": [
      "Channel width",
      "5 GHz",
      "Bluetooth",
      "2.4 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from channel width.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from channel width.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from channel width."
    ],
    "tip": "Wider channels can increase overlap."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that family of wireless LAN technical standards. What should they select?",
    "opts": [
      "802.11 standards",
      "RFID",
      "2.4 GHz",
      "5 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "802.11 standards: Family of wireless LAN technical standards.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from 802.11 standards.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from 802.11 standards.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 802.11 standards."
    ],
    "tip": "Check client and router compatibility."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Inventory tags are not the same as Wi-Fi clients. Which technology or concept is MOST relevant?",
    "opts": [
      "RFID",
      "6 GHz",
      "Bluetooth",
      "802.11 standards"
    ],
    "ans": [
      0
    ],
    "why": [
      "RFID: Radio identification technology using tags and readers.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from rfid.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from rfid.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from rfid."
    ],
    "tip": "Inventory tags are not the same as Wi-Fi clients."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: short-range wireless technology for peripherals?",
    "opts": [
      "Bluetooth",
      "Channel width",
      "802.11 standards",
      "5 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "Bluetooth: Short-range wireless technology for peripherals.",
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies. This serves a different function from bluetooth.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from bluetooth.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from bluetooth."
    ],
    "tip": "Headsets generally use Bluetooth rather than Wi-Fi."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that wi-Fi band with longer typical reach but more interference. What should they select?",
    "opts": [
      "2.4 GHz",
      "802.11 standards",
      "RFID",
      "5 GHz"
    ],
    "ans": [
      0
    ],
    "why": [
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 2.4 ghz.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from 2.4 ghz.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 2.4 ghz."
    ],
    "tip": "Crowded channels can affect nearby networks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "A technician encounters this situation: Prefer it when interference matters and coverage is sufficient. Which technology or concept is MOST relevant?",
    "opts": [
      "5 GHz",
      "802.11 standards",
      "2.4 GHz",
      "Bluetooth"
    ],
    "ans": [
      0
    ],
    "why": [
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 5 ghz.",
      "2.4 GHz: Wi-Fi band with longer typical reach but more interference. This serves a different function from 5 ghz.",
      "Bluetooth: Short-range wireless technology for peripherals. This serves a different function from 5 ghz."
    ],
    "tip": "Prefer it when interference matters and coverage is sufficient."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "Which term describes the following capability: newer Wi-Fi spectrum used by compatible devices?",
    "opts": [
      "6 GHz",
      "5 GHz",
      "Channel width",
      "802.11 standards"
    ],
    "ans": [
      0
    ],
    "why": [
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from 6 ghz.",
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies. This serves a different function from 6 ghz.",
      "802.11 standards: Family of wireless LAN technical standards. This serves a different function from 6 ghz."
    ],
    "tip": "Both client and access point must support it."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.2",
    "q": "An IT support specialist needs to identify a component or service that amount of radio spectrum a Wi-Fi channel occupies. What should they select?",
    "opts": [
      "Channel width",
      "6 GHz",
      "5 GHz",
      "RFID"
    ],
    "ans": [
      0
    ],
    "why": [
      "Channel width: Amount of radio spectrum a Wi-Fi channel occupies.",
      "6 GHz: Newer Wi-Fi spectrum used by compatible devices. This serves a different function from channel width.",
      "5 GHz: Wi-Fi band with more available channels and shorter typical reach. This serves a different function from channel width.",
      "RFID: Radio identification technology using tags and readers. This serves a different function from channel width."
    ],
    "tip": "Wider channels can increase overlap."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: A hostname failure may point to DNS. Which technology or concept is MOST relevant?",
    "opts": [
      "DNS server",
      "Proxy server",
      "Print server",
      "DHCP server"
    ],
    "ans": [
      0
    ],
    "why": [
      "DNS server: Resolves hostnames into network information.",
      "Proxy server: Intermediary for client network requests. This serves a different function from dns server.",
      "Print server: Shares and manages network print jobs. This serves a different function from dns server.",
      "DHCP server: Distributes IP configuration leases. This serves a different function from dns server."
    ],
    "tip": "A hostname failure may point to DNS."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: distributes IP configuration leases?",
    "opts": [
      "DHCP server",
      "AAA",
      "Proxy server",
      "SCADA"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP server: Distributes IP configuration leases.",
      "AAA: Authentication authorization and accounting services. This serves a different function from dhcp server.",
      "Proxy server: Intermediary for client network requests. This serves a different function from dhcp server.",
      "SCADA: Supervisory systems for industrial processes. This serves a different function from dhcp server."
    ],
    "tip": "Check scope and address exhaustion."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that provides network time synchronization. What should they select?",
    "opts": [
      "NTP server",
      "Print server",
      "Proxy server",
      "DNS server"
    ],
    "ans": [
      0
    ],
    "why": [
      "NTP server: Provides network time synchronization.",
      "Print server: Shares and manages network print jobs. This serves a different function from ntp server.",
      "Proxy server: Intermediary for client network requests. This serves a different function from ntp server.",
      "DNS server: Resolves hostnames into network information. This serves a different function from ntp server."
    ],
    "tip": "Incorrect time can affect authentication and logs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: Central logs help correlate faults. Which technology or concept is MOST relevant?",
    "opts": [
      "Syslog server",
      "Proxy server",
      "AAA",
      "DNS server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Syslog server: Collects system and device log messages.",
      "Proxy server: Intermediary for client network requests. This serves a different function from syslog server.",
      "AAA: Authentication authorization and accounting services. This serves a different function from syslog server.",
      "DNS server: Resolves hostnames into network information. This serves a different function from syslog server."
    ],
    "tip": "Central logs help correlate faults."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: shares and manages network print jobs?",
    "opts": [
      "Print server",
      "Load balancer",
      "Proxy server",
      "NTP server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Print server: Shares and manages network print jobs.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from print server.",
      "Proxy server: Intermediary for client network requests. This serves a different function from print server.",
      "NTP server: Provides network time synchronization. This serves a different function from print server."
    ],
    "tip": "A central queue serves many users."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that intermediary for client network requests. What should they select?",
    "opts": [
      "Proxy server",
      "NTP server",
      "SCADA",
      "Load balancer"
    ],
    "ans": [
      0
    ],
    "why": [
      "Proxy server: Intermediary for client network requests.",
      "NTP server: Provides network time synchronization. This serves a different function from proxy server.",
      "SCADA: Supervisory systems for industrial processes. This serves a different function from proxy server.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from proxy server."
    ],
    "tip": "A proxy can filter or forward web requests."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: Spreading traffic improves capacity and availability. Which technology or concept is MOST relevant?",
    "opts": [
      "Load balancer",
      "DNS server",
      "SCADA",
      "Proxy server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Load balancer: Distributes requests across backend systems.",
      "DNS server: Resolves hostnames into network information. This serves a different function from load balancer.",
      "SCADA: Supervisory systems for industrial processes. This serves a different function from load balancer.",
      "Proxy server: Intermediary for client network requests. This serves a different function from load balancer."
    ],
    "tip": "Spreading traffic improves capacity and availability."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: supervisory systems for industrial processes?",
    "opts": [
      "SCADA",
      "Print server",
      "Syslog server",
      "DNS server"
    ],
    "ans": [
      0
    ],
    "why": [
      "SCADA: Supervisory systems for industrial processes.",
      "Print server: Shares and manages network print jobs. This serves a different function from scada.",
      "Syslog server: Collects system and device log messages. This serves a different function from scada.",
      "DNS server: Resolves hostnames into network information. This serves a different function from scada."
    ],
    "tip": "Industrial control equipment differs from office printers."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that authentication authorization and accounting services. What should they select?",
    "opts": [
      "AAA",
      "Syslog server",
      "SCADA",
      "Print server"
    ],
    "ans": [
      0
    ],
    "why": [
      "AAA: Authentication authorization and accounting services.",
      "Syslog server: Collects system and device log messages. This serves a different function from aaa.",
      "SCADA: Supervisory systems for industrial processes. This serves a different function from aaa.",
      "Print server: Shares and manages network print jobs. This serves a different function from aaa."
    ],
    "tip": "Identity verification differs from permission decisions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: A hostname failure may point to DNS. Which technology or concept is MOST relevant?",
    "opts": [
      "DNS server",
      "Load balancer",
      "DHCP server",
      "Syslog server"
    ],
    "ans": [
      0
    ],
    "why": [
      "DNS server: Resolves hostnames into network information.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from dns server.",
      "DHCP server: Distributes IP configuration leases. This serves a different function from dns server.",
      "Syslog server: Collects system and device log messages. This serves a different function from dns server."
    ],
    "tip": "A hostname failure may point to DNS."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: distributes IP configuration leases?",
    "opts": [
      "DHCP server",
      "Print server",
      "Proxy server",
      "DNS server"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP server: Distributes IP configuration leases.",
      "Print server: Shares and manages network print jobs. This serves a different function from dhcp server.",
      "Proxy server: Intermediary for client network requests. This serves a different function from dhcp server.",
      "DNS server: Resolves hostnames into network information. This serves a different function from dhcp server."
    ],
    "tip": "Check scope and address exhaustion."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that provides network time synchronization. What should they select?",
    "opts": [
      "NTP server",
      "Syslog server",
      "DHCP server",
      "Load balancer"
    ],
    "ans": [
      0
    ],
    "why": [
      "NTP server: Provides network time synchronization.",
      "Syslog server: Collects system and device log messages. This serves a different function from ntp server.",
      "DHCP server: Distributes IP configuration leases. This serves a different function from ntp server.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from ntp server."
    ],
    "tip": "Incorrect time can affect authentication and logs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: Central logs help correlate faults. Which technology or concept is MOST relevant?",
    "opts": [
      "Syslog server",
      "Load balancer",
      "Proxy server",
      "NTP server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Syslog server: Collects system and device log messages.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from syslog server.",
      "Proxy server: Intermediary for client network requests. This serves a different function from syslog server.",
      "NTP server: Provides network time synchronization. This serves a different function from syslog server."
    ],
    "tip": "Central logs help correlate faults."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: shares and manages network print jobs?",
    "opts": [
      "Print server",
      "AAA",
      "Load balancer",
      "NTP server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Print server: Shares and manages network print jobs.",
      "AAA: Authentication authorization and accounting services. This serves a different function from print server.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from print server.",
      "NTP server: Provides network time synchronization. This serves a different function from print server."
    ],
    "tip": "A central queue serves many users."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that intermediary for client network requests. What should they select?",
    "opts": [
      "Proxy server",
      "Load balancer",
      "AAA",
      "DNS server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Proxy server: Intermediary for client network requests.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from proxy server.",
      "AAA: Authentication authorization and accounting services. This serves a different function from proxy server.",
      "DNS server: Resolves hostnames into network information. This serves a different function from proxy server."
    ],
    "tip": "A proxy can filter or forward web requests."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "A technician encounters this situation: Spreading traffic improves capacity and availability. Which technology or concept is MOST relevant?",
    "opts": [
      "Load balancer",
      "DHCP server",
      "Print server",
      "Syslog server"
    ],
    "ans": [
      0
    ],
    "why": [
      "Load balancer: Distributes requests across backend systems.",
      "DHCP server: Distributes IP configuration leases. This serves a different function from load balancer.",
      "Print server: Shares and manages network print jobs. This serves a different function from load balancer.",
      "Syslog server: Collects system and device log messages. This serves a different function from load balancer."
    ],
    "tip": "Spreading traffic improves capacity and availability."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "Which term describes the following capability: supervisory systems for industrial processes?",
    "opts": [
      "SCADA",
      "Print server",
      "Load balancer",
      "Proxy server"
    ],
    "ans": [
      0
    ],
    "why": [
      "SCADA: Supervisory systems for industrial processes.",
      "Print server: Shares and manages network print jobs. This serves a different function from scada.",
      "Load balancer: Distributes requests across backend systems. This serves a different function from scada.",
      "Proxy server: Intermediary for client network requests. This serves a different function from scada."
    ],
    "tip": "Industrial control equipment differs from office printers."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.3",
    "q": "An IT support specialist needs to identify a component or service that authentication authorization and accounting services. What should they select?",
    "opts": [
      "AAA",
      "DNS server",
      "Syslog server",
      "Print server"
    ],
    "ans": [
      0
    ],
    "why": [
      "AAA: Authentication authorization and accounting services.",
      "DNS server: Resolves hostnames into network information. This serves a different function from aaa.",
      "Syslog server: Collects system and device log messages. This serves a different function from aaa.",
      "Print server: Shares and manages network print jobs. This serves a different function from aaa."
    ],
    "tip": "Identity verification differs from permission decisions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: A records do not store IPv6 addresses. Which technology or concept is MOST relevant?",
    "opts": [
      "A record",
      "DHCP exclusion",
      "DHCP reservation",
      "VLAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "A record: Maps a DNS name to an IPv4 address.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from a record.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from a record.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from a record."
    ],
    "tip": "A records do not store IPv6 addresses."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which term describes the following capability: maps a DNS name to an IPv6 address?",
    "opts": [
      "AAAA record",
      "TXT record",
      "CNAME record",
      "MX record"
    ],
    "ans": [
      0
    ],
    "why": [
      "AAAA record: Maps a DNS name to an IPv6 address.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from aaaa record.",
      "CNAME record: Aliases one DNS hostname to another. This serves a different function from aaaa record.",
      "MX record: Identifies mail exchangers for a domain. This serves a different function from aaaa record."
    ],
    "tip": "Four As indicate the longer address family."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "An IT support specialist needs to identify a component or service that aliases one DNS hostname to another. What should they select?",
    "opts": [
      "CNAME record",
      "VPN",
      "VLAN",
      "A record"
    ],
    "ans": [
      0
    ],
    "why": [
      "CNAME record: Aliases one DNS hostname to another.",
      "VPN: Creates a protected tunnel across another network. This serves a different function from cname record.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from cname record.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from cname record."
    ],
    "tip": "An alias does not directly store an IP address."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: Mail routing relies on MX. Which technology or concept is MOST relevant?",
    "opts": [
      "MX record",
      "VLAN",
      "TXT record",
      "DHCP reservation"
    ],
    "ans": [
      0
    ],
    "why": [
      "MX record: Identifies mail exchangers for a domain.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from mx record.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from mx record.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from mx record."
    ],
    "tip": "Mail routing relies on MX."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which term describes the following capability: stores text values for DNS verification or policy?",
    "opts": [
      "TXT record",
      "VLAN",
      "VPN",
      "MX record"
    ],
    "ans": [
      0
    ],
    "why": [
      "TXT record: Stores text values for DNS verification or policy.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from txt record.",
      "VPN: Creates a protected tunnel across another network. This serves a different function from txt record.",
      "MX record: Identifies mail exchangers for a domain. This serves a different function from txt record."
    ],
    "tip": "Email authentication often publishes TXT data."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "An IT support specialist needs to identify a component or service that assigns a consistent lease to a specified client. What should they select?",
    "opts": [
      "DHCP reservation",
      "DHCP exclusion",
      "A record",
      "TXT record"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP reservation: Assigns a consistent lease to a specified client.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from dhcp reservation.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from dhcp reservation.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from dhcp reservation."
    ],
    "tip": "Reservations differ from exclusions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: Reserve infrastructure ranges from dynamic leasing. Which technology or concept is MOST relevant?",
    "opts": [
      "DHCP exclusion",
      "CNAME record",
      "MX record",
      "AAAA record"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP exclusion: Prevents addresses in a scope from being handed out.",
      "CNAME record: Aliases one DNS hostname to another. This serves a different function from dhcp exclusion.",
      "MX record: Identifies mail exchangers for a domain. This serves a different function from dhcp exclusion.",
      "AAAA record: Maps a DNS name to an IPv6 address. This serves a different function from dhcp exclusion."
    ],
    "tip": "Reserve infrastructure ranges from dynamic leasing."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which term describes the following capability: logically separates broadcast domains on switching infrastructure?",
    "opts": [
      "VLAN",
      "MX record",
      "DHCP exclusion",
      "CNAME record"
    ],
    "ans": [
      0
    ],
    "why": [
      "VLAN: Logically separates broadcast domains on switching infrastructure.",
      "MX record: Identifies mail exchangers for a domain. This serves a different function from vlan.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from vlan.",
      "CNAME record: Aliases one DNS hostname to another. This serves a different function from vlan."
    ],
    "tip": "A VLAN does not require a separate physical switch."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "An IT support specialist needs to identify a component or service that creates a protected tunnel across another network. What should they select?",
    "opts": [
      "VPN",
      "A record",
      "TXT record",
      "VLAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "VPN: Creates a protected tunnel across another network.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from vpn.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from vpn.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from vpn."
    ],
    "tip": "Remote access may rely on a VPN."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: A records do not store IPv6 addresses. Which technology or concept is MOST relevant?",
    "opts": [
      "A record",
      "DHCP exclusion",
      "DHCP reservation",
      "MX record"
    ],
    "ans": [
      0
    ],
    "why": [
      "A record: Maps a DNS name to an IPv4 address.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from a record.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from a record.",
      "MX record: Identifies mail exchangers for a domain. This serves a different function from a record."
    ],
    "tip": "A records do not store IPv6 addresses."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which term describes the following capability: maps a DNS name to an IPv6 address?",
    "opts": [
      "AAAA record",
      "A record",
      "DHCP reservation",
      "VPN"
    ],
    "ans": [
      0
    ],
    "why": [
      "AAAA record: Maps a DNS name to an IPv6 address.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from aaaa record.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from aaaa record.",
      "VPN: Creates a protected tunnel across another network. This serves a different function from aaaa record."
    ],
    "tip": "Four As indicate the longer address family."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "An IT support specialist needs to identify a component or service that aliases one DNS hostname to another. What should they select?",
    "opts": [
      "CNAME record",
      "A record",
      "DHCP exclusion",
      "DHCP reservation"
    ],
    "ans": [
      0
    ],
    "why": [
      "CNAME record: Aliases one DNS hostname to another.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from cname record.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from cname record.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from cname record."
    ],
    "tip": "An alias does not directly store an IP address."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: Mail routing relies on MX. Which technology or concept is MOST relevant?",
    "opts": [
      "MX record",
      "AAAA record",
      "CNAME record",
      "VLAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "MX record: Identifies mail exchangers for a domain.",
      "AAAA record: Maps a DNS name to an IPv6 address. This serves a different function from mx record.",
      "CNAME record: Aliases one DNS hostname to another. This serves a different function from mx record.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from mx record."
    ],
    "tip": "Mail routing relies on MX."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "Which term describes the following capability: stores text values for DNS verification or policy?",
    "opts": [
      "TXT record",
      "DHCP reservation",
      "VPN",
      "DHCP exclusion"
    ],
    "ans": [
      0
    ],
    "why": [
      "TXT record: Stores text values for DNS verification or policy.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from txt record.",
      "VPN: Creates a protected tunnel across another network. This serves a different function from txt record.",
      "DHCP exclusion: Prevents addresses in a scope from being handed out. This serves a different function from txt record."
    ],
    "tip": "Email authentication often publishes TXT data."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "An IT support specialist needs to identify a component or service that assigns a consistent lease to a specified client. What should they select?",
    "opts": [
      "DHCP reservation",
      "TXT record",
      "VLAN",
      "A record"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP reservation: Assigns a consistent lease to a specified client.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from dhcp reservation.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from dhcp reservation.",
      "A record: Maps a DNS name to an IPv4 address. This serves a different function from dhcp reservation."
    ],
    "tip": "Reservations differ from exclusions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.4",
    "q": "A technician encounters this situation: Reserve infrastructure ranges from dynamic leasing. Which technology or concept is MOST relevant?",
    "opts": [
      "DHCP exclusion",
      "DHCP reservation",
      "VLAN",
      "TXT record"
    ],
    "ans": [
      0
    ],
    "why": [
      "DHCP exclusion: Prevents addresses in a scope from being handed out.",
      "DHCP reservation: Assigns a consistent lease to a specified client. This serves a different function from dhcp exclusion.",
      "VLAN: Logically separates broadcast domains on switching infrastructure. This serves a different function from dhcp exclusion.",
      "TXT record: Stores text values for DNS verification or policy. This serves a different function from dhcp exclusion."
    ],
    "tip": "Reserve infrastructure ranges from dynamic leasing."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: A default gateway is usually a router. Which technology or concept is MOST relevant?",
    "opts": [
      "Router",
      "Firewall",
      "Switch",
      "NIC"
    ],
    "ans": [
      0
    ],
    "why": [
      "Router: Forwards traffic between IP networks.",
      "Firewall: Filters traffic using security rules. This serves a different function from router.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from router.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from router."
    ],
    "tip": "A default gateway is usually a router."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: connects devices within a local Ethernet network?",
    "opts": [
      "Switch",
      "Firewall",
      "NIC",
      "ONT"
    ],
    "ans": [
      0
    ],
    "why": [
      "Switch: Connects devices within a local Ethernet network.",
      "Firewall: Filters traffic using security rules. This serves a different function from switch.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from switch.",
      "ONT: Terminates a fiber service at customer premises. This serves a different function from switch."
    ],
    "tip": "Switches forward using MAC addresses."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "An IT support specialist needs to identify a component or service that connects wireless clients to a wired network. What should they select?",
    "opts": [
      "Access point",
      "Router",
      "Switch",
      "ONT"
    ],
    "ans": [
      0
    ],
    "why": [
      "Access point: Connects wireless clients to a wired network.",
      "Router: Forwards traffic between IP networks. This serves a different function from access point.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from access point.",
      "ONT: Terminates a fiber service at customer premises. This serves a different function from access point."
    ],
    "tip": "An AP provides wireless access rather than routing by necessity."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: Patch panels do not make routing decisions. Which technology or concept is MOST relevant?",
    "opts": [
      "Patch panel",
      "Firewall",
      "Access point",
      "Router"
    ],
    "ans": [
      0
    ],
    "why": [
      "Patch panel: Passive termination and organization for cable runs.",
      "Firewall: Filters traffic using security rules. This serves a different function from patch panel.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from patch panel.",
      "Router: Forwards traffic between IP networks. This serves a different function from patch panel."
    ],
    "tip": "Patch panels do not make routing decisions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: filters traffic using security rules?",
    "opts": [
      "Firewall",
      "Switch",
      "PoE injector",
      "Router"
    ],
    "ans": [
      0
    ],
    "why": [
      "Firewall: Filters traffic using security rules.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from firewall.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from firewall.",
      "Router: Forwards traffic between IP networks. This serves a different function from firewall."
    ],
    "tip": "Check policy before assuming a link failure."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "An IT support specialist needs to identify a component or service that adds power to an Ethernet link for a compatible device. What should they select?",
    "opts": [
      "PoE injector",
      "Router",
      "NIC",
      "Switch"
    ],
    "ans": [
      0
    ],
    "why": [
      "PoE injector: Adds power to an Ethernet link for a compatible device.",
      "Router: Forwards traffic between IP networks. This serves a different function from poe injector.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from poe injector.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from poe injector."
    ],
    "tip": "Useful when a switch lacks PoE."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: Fiber service often ends at an ONT. Which technology or concept is MOST relevant?",
    "opts": [
      "ONT",
      "Access point",
      "Router",
      "NIC"
    ],
    "ans": [
      0
    ],
    "why": [
      "ONT: Terminates a fiber service at customer premises.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from ont.",
      "Router: Forwards traffic between IP networks. This serves a different function from ont.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from ont."
    ],
    "tip": "Fiber service often ends at an ONT."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: interface enabling a host to connect to a network?",
    "opts": [
      "NIC",
      "Access point",
      "Switch",
      "Firewall"
    ],
    "ans": [
      0
    ],
    "why": [
      "NIC: Interface enabling a host to connect to a network.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from nic.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from nic.",
      "Firewall: Filters traffic using security rules. This serves a different function from nic."
    ],
    "tip": "Check link and drivers before replacing it."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "An IT support specialist needs to identify a component or service that forwards traffic between IP networks. What should they select?",
    "opts": [
      "Router",
      "PoE injector",
      "Firewall",
      "Access point"
    ],
    "ans": [
      0
    ],
    "why": [
      "Router: Forwards traffic between IP networks.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from router.",
      "Firewall: Filters traffic using security rules. This serves a different function from router.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from router."
    ],
    "tip": "A default gateway is usually a router."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: Switches forward using MAC addresses. Which technology or concept is MOST relevant?",
    "opts": [
      "Switch",
      "PoE injector",
      "Firewall",
      "ONT"
    ],
    "ans": [
      0
    ],
    "why": [
      "Switch: Connects devices within a local Ethernet network.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from switch.",
      "Firewall: Filters traffic using security rules. This serves a different function from switch.",
      "ONT: Terminates a fiber service at customer premises. This serves a different function from switch."
    ],
    "tip": "Switches forward using MAC addresses."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: connects wireless clients to a wired network?",
    "opts": [
      "Access point",
      "NIC",
      "Patch panel",
      "PoE injector"
    ],
    "ans": [
      0
    ],
    "why": [
      "Access point: Connects wireless clients to a wired network.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from access point.",
      "Patch panel: Passive termination and organization for cable runs. This serves a different function from access point.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from access point."
    ],
    "tip": "An AP provides wireless access rather than routing by necessity."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "An IT support specialist needs to identify a component or service that passive termination and organization for cable runs. What should they select?",
    "opts": [
      "Patch panel",
      "Access point",
      "PoE injector",
      "Switch"
    ],
    "ans": [
      0
    ],
    "why": [
      "Patch panel: Passive termination and organization for cable runs.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from patch panel.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from patch panel.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from patch panel."
    ],
    "tip": "Patch panels do not make routing decisions."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: Check policy before assuming a link failure. Which technology or concept is MOST relevant?",
    "opts": [
      "Firewall",
      "NIC",
      "PoE injector",
      "Access point"
    ],
    "ans": [
      0
    ],
    "why": [
      "Firewall: Filters traffic using security rules.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from firewall.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from firewall.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from firewall."
    ],
    "tip": "Check policy before assuming a link failure."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: adds power to an Ethernet link for a compatible device?",
    "opts": [
      "PoE injector",
      "NIC",
      "Router",
      "Switch"
    ],
    "ans": [
      0
    ],
    "why": [
      "PoE injector: Adds power to an Ethernet link for a compatible device.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from poe injector.",
      "Router: Forwards traffic between IP networks. This serves a different function from poe injector.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from poe injector."
    ],
    "tip": "Useful when a switch lacks PoE."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "An IT support specialist needs to identify a component or service that terminates a fiber service at customer premises. What should they select?",
    "opts": [
      "ONT",
      "Router",
      "PoE injector",
      "Patch panel"
    ],
    "ans": [
      0
    ],
    "why": [
      "ONT: Terminates a fiber service at customer premises.",
      "Router: Forwards traffic between IP networks. This serves a different function from ont.",
      "PoE injector: Adds power to an Ethernet link for a compatible device. This serves a different function from ont.",
      "Patch panel: Passive termination and organization for cable runs. This serves a different function from ont."
    ],
    "tip": "Fiber service often ends at an ONT."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "A technician encounters this situation: Check link and drivers before replacing it. Which technology or concept is MOST relevant?",
    "opts": [
      "NIC",
      "Switch",
      "Router",
      "Access point"
    ],
    "ans": [
      0
    ],
    "why": [
      "NIC: Interface enabling a host to connect to a network.",
      "Switch: Connects devices within a local Ethernet network. This serves a different function from nic.",
      "Router: Forwards traffic between IP networks. This serves a different function from nic.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from nic."
    ],
    "tip": "Check link and drivers before replacing it."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.5",
    "q": "Which term describes the following capability: forwards traffic between IP networks?",
    "opts": [
      "Router",
      "Access point",
      "ONT",
      "NIC"
    ],
    "ans": [
      0
    ],
    "why": [
      "Router: Forwards traffic between IP networks.",
      "Access point: Connects wireless clients to a wired network. This serves a different function from router.",
      "ONT: Terminates a fiber service at customer premises. This serves a different function from router.",
      "NIC: Interface enabling a host to connect to a network. This serves a different function from router."
    ],
    "tip": "A default gateway is usually a router."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: 169.254 often signals a missing DHCP lease. Which technology or concept is MOST relevant?",
    "opts": [
      "APIPA",
      "Subnet mask",
      "Static IP",
      "IPv6"
    ],
    "ans": [
      0
    ],
    "why": [
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from apipa.",
      "Static IP: Manually configured fixed IP address. This serves a different function from apipa.",
      "IPv6: Internet Protocol with 128-bit addresses. This serves a different function from apipa."
    ],
    "tip": "169.254 often signals a missing DHCP lease."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: identifies the network portion of an IPv4 address?",
    "opts": [
      "Subnet mask",
      "APIPA",
      "Static IP",
      "IPv6"
    ],
    "ans": [
      0
    ],
    "why": [
      "Subnet mask: Identifies the network portion of an IPv4 address.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from subnet mask.",
      "Static IP: Manually configured fixed IP address. This serves a different function from subnet mask.",
      "IPv6: Internet Protocol with 128-bit addresses. This serves a different function from subnet mask."
    ],
    "tip": "An incorrect mask can make local hosts appear remote."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that router used to reach other IP networks. What should they select?",
    "opts": [
      "Default gateway",
      "Subnet mask",
      "APIPA",
      "Dynamic IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Default gateway: Router used to reach other IP networks.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from default gateway.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from default gateway.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from default gateway."
    ],
    "tip": "Local access can work even with a bad gateway."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: Avoid conflicts with DHCP pools. Which technology or concept is MOST relevant?",
    "opts": [
      "Static IP",
      "APIPA",
      "Subnet mask",
      "Dynamic IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Static IP: Manually configured fixed IP address.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from static ip.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from static ip.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from static ip."
    ],
    "tip": "Avoid conflicts with DHCP pools."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: iP settings obtained automatically from a service?",
    "opts": [
      "Dynamic IP",
      "Static IP",
      "Subnet mask",
      "APIPA"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dynamic IP: IP settings obtained automatically from a service.",
      "Static IP: Manually configured fixed IP address. This serves a different function from dynamic ip.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from dynamic ip.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from dynamic ip."
    ],
    "tip": "Lease renewal may fix stale settings."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that addressing intended for internal networks. What should they select?",
    "opts": [
      "Private IPv4",
      "Dynamic IP",
      "Default gateway",
      "APIPA"
    ],
    "ans": [
      0
    ],
    "why": [
      "Private IPv4: Addressing intended for internal networks.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from private ipv4.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from private ipv4.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from private ipv4."
    ],
    "tip": "10.x and 192.168.x ranges are private."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: IPv6 notation uses hexadecimal and colons. Which technology or concept is MOST relevant?",
    "opts": [
      "IPv6",
      "APIPA",
      "Default gateway",
      "Private IPv4"
    ],
    "ans": [
      0
    ],
    "why": [
      "IPv6: Internet Protocol with 128-bit addresses.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from ipv6.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from ipv6.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from ipv6."
    ],
    "tip": "IPv6 notation uses hexadecimal and colons."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: automatic 169.254.x.x IPv4 addressing when DHCP fails?",
    "opts": [
      "APIPA",
      "Private IPv4",
      "Subnet mask",
      "Default gateway"
    ],
    "ans": [
      0
    ],
    "why": [
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from apipa.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from apipa.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from apipa."
    ],
    "tip": "169.254 often signals a missing DHCP lease."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that identifies the network portion of an IPv4 address. What should they select?",
    "opts": [
      "Subnet mask",
      "APIPA",
      "Private IPv4",
      "Static IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Subnet mask: Identifies the network portion of an IPv4 address.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from subnet mask.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from subnet mask.",
      "Static IP: Manually configured fixed IP address. This serves a different function from subnet mask."
    ],
    "tip": "An incorrect mask can make local hosts appear remote."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: Local access can work even with a bad gateway. Which technology or concept is MOST relevant?",
    "opts": [
      "Default gateway",
      "Private IPv4",
      "Static IP",
      "Dynamic IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Default gateway: Router used to reach other IP networks.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from default gateway.",
      "Static IP: Manually configured fixed IP address. This serves a different function from default gateway.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from default gateway."
    ],
    "tip": "Local access can work even with a bad gateway."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: manually configured fixed IP address?",
    "opts": [
      "Static IP",
      "Dynamic IP",
      "IPv6",
      "APIPA"
    ],
    "ans": [
      0
    ],
    "why": [
      "Static IP: Manually configured fixed IP address.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from static ip.",
      "IPv6: Internet Protocol with 128-bit addresses. This serves a different function from static ip.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from static ip."
    ],
    "tip": "Avoid conflicts with DHCP pools."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that iP settings obtained automatically from a service. What should they select?",
    "opts": [
      "Dynamic IP",
      "Default gateway",
      "Subnet mask",
      "Static IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dynamic IP: IP settings obtained automatically from a service.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from dynamic ip.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from dynamic ip.",
      "Static IP: Manually configured fixed IP address. This serves a different function from dynamic ip."
    ],
    "tip": "Lease renewal may fix stale settings."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: 10.x and 192.168.x ranges are private. Which technology or concept is MOST relevant?",
    "opts": [
      "Private IPv4",
      "Static IP",
      "Subnet mask",
      "Dynamic IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "Private IPv4: Addressing intended for internal networks.",
      "Static IP: Manually configured fixed IP address. This serves a different function from private ipv4.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from private ipv4.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from private ipv4."
    ],
    "tip": "10.x and 192.168.x ranges are private."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: internet Protocol with 128-bit addresses?",
    "opts": [
      "IPv6",
      "Default gateway",
      "APIPA",
      "Static IP"
    ],
    "ans": [
      0
    ],
    "why": [
      "IPv6: Internet Protocol with 128-bit addresses.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from ipv6.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from ipv6.",
      "Static IP: Manually configured fixed IP address. This serves a different function from ipv6."
    ],
    "tip": "IPv6 notation uses hexadecimal and colons."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that automatic 169.254.x.x IPv4 addressing when DHCP fails. What should they select?",
    "opts": [
      "APIPA",
      "IPv6",
      "Private IPv4",
      "Default gateway"
    ],
    "ans": [
      0
    ],
    "why": [
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails.",
      "IPv6: Internet Protocol with 128-bit addresses. This serves a different function from apipa.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from apipa.",
      "Default gateway: Router used to reach other IP networks. This serves a different function from apipa."
    ],
    "tip": "169.254 often signals a missing DHCP lease."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "A technician encounters this situation: An incorrect mask can make local hosts appear remote. Which technology or concept is MOST relevant?",
    "opts": [
      "Subnet mask",
      "Dynamic IP",
      "Static IP",
      "Private IPv4"
    ],
    "ans": [
      0
    ],
    "why": [
      "Subnet mask: Identifies the network portion of an IPv4 address.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from subnet mask.",
      "Static IP: Manually configured fixed IP address. This serves a different function from subnet mask.",
      "Private IPv4: Addressing intended for internal networks. This serves a different function from subnet mask."
    ],
    "tip": "An incorrect mask can make local hosts appear remote."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "Which term describes the following capability: router used to reach other IP networks?",
    "opts": [
      "Default gateway",
      "Static IP",
      "APIPA",
      "Subnet mask"
    ],
    "ans": [
      0
    ],
    "why": [
      "Default gateway: Router used to reach other IP networks.",
      "Static IP: Manually configured fixed IP address. This serves a different function from default gateway.",
      "APIPA: Automatic 169.254.x.x IPv4 addressing when DHCP fails. This serves a different function from default gateway.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from default gateway."
    ],
    "tip": "Local access can work even with a bad gateway."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.6",
    "q": "An IT support specialist needs to identify a component or service that manually configured fixed IP address. What should they select?",
    "opts": [
      "Static IP",
      "Dynamic IP",
      "IPv6",
      "Subnet mask"
    ],
    "ans": [
      0
    ],
    "why": [
      "Static IP: Manually configured fixed IP address.",
      "Dynamic IP: IP settings obtained automatically from a service. This serves a different function from static ip.",
      "IPv6: Internet Protocol with 128-bit addresses. This serves a different function from static ip.",
      "Subnet mask: Identifies the network portion of an IPv4 address. This serves a different function from static ip."
    ],
    "tip": "Avoid conflicts with DHCP pools."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: Fiber uses optical termination equipment. Which technology or concept is MOST relevant?",
    "opts": [
      "Fiber",
      "WAN",
      "SAN",
      "LAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Fiber: Internet access transmitted using optical signals.",
      "WAN: Network connecting geographically separated sites. This serves a different function from fiber.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from fiber.",
      "LAN: Network covering a limited local area. This serves a different function from fiber."
    ],
    "tip": "Fiber uses optical termination equipment."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: broadband service commonly using coaxial distribution?",
    "opts": [
      "Cable internet",
      "WAN",
      "LAN",
      "Satellite"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cable internet: Broadband service commonly using coaxial distribution.",
      "WAN: Network connecting geographically separated sites. This serves a different function from cable internet.",
      "LAN: Network covering a limited local area. This serves a different function from cable internet.",
      "Satellite: Internet service using orbiting relays. This serves a different function from cable internet."
    ],
    "tip": "A cable modem terminates coax service."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that internet access using telephone copper pairs. What should they select?",
    "opts": [
      "DSL",
      "LAN",
      "Cable internet",
      "PAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "DSL: Internet access using telephone copper pairs.",
      "LAN: Network covering a limited local area. This serves a different function from dsl.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from dsl.",
      "PAN: Network centered around an individual. This serves a different function from dsl."
    ],
    "tip": "DSL depends on the telephone line path."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: Long path lengths can increase latency. Which technology or concept is MOST relevant?",
    "opts": [
      "Satellite",
      "SAN",
      "WAN",
      "Cable internet"
    ],
    "ans": [
      0
    ],
    "why": [
      "Satellite: Internet service using orbiting relays.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from satellite.",
      "WAN: Network connecting geographically separated sites. This serves a different function from satellite.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from satellite."
    ],
    "tip": "Long path lengths can increase latency."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: internet service over a mobile carrier network?",
    "opts": [
      "Cellular",
      "WAN",
      "DSL",
      "LAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cellular: Internet service over a mobile carrier network.",
      "WAN: Network connecting geographically separated sites. This serves a different function from cellular.",
      "DSL: Internet access using telephone copper pairs. This serves a different function from cellular.",
      "LAN: Network covering a limited local area. This serves a different function from cellular."
    ],
    "tip": "Coverage and data plans affect performance."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that network covering a limited local area. What should they select?",
    "opts": [
      "LAN",
      "PAN",
      "Fiber",
      "DSL"
    ],
    "ans": [
      0
    ],
    "why": [
      "LAN: Network covering a limited local area.",
      "PAN: Network centered around an individual. This serves a different function from lan.",
      "Fiber: Internet access transmitted using optical signals. This serves a different function from lan.",
      "DSL: Internet access using telephone copper pairs. This serves a different function from lan."
    ],
    "tip": "Office Ethernet is a LAN."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: A WAN spans beyond one local site. Which technology or concept is MOST relevant?",
    "opts": [
      "WAN",
      "Satellite",
      "SAN",
      "LAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "WAN: Network connecting geographically separated sites.",
      "Satellite: Internet service using orbiting relays. This serves a different function from wan.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from wan.",
      "LAN: Network covering a limited local area. This serves a different function from wan."
    ],
    "tip": "A WAN spans beyond one local site."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: network centered around an individual?",
    "opts": [
      "PAN",
      "SAN",
      "Cable internet",
      "WAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "PAN: Network centered around an individual.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from pan.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from pan.",
      "WAN: Network connecting geographically separated sites. This serves a different function from pan."
    ],
    "tip": "Bluetooth peripherals often form a PAN."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that dedicated network for block storage traffic. What should they select?",
    "opts": [
      "SAN",
      "Cellular",
      "PAN",
      "Cable internet"
    ],
    "ans": [
      0
    ],
    "why": [
      "SAN: Dedicated network for block storage traffic.",
      "Cellular: Internet service over a mobile carrier network. This serves a different function from san.",
      "PAN: Network centered around an individual. This serves a different function from san.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from san."
    ],
    "tip": "A SAN differs from a user file share."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: Fiber uses optical termination equipment. Which technology or concept is MOST relevant?",
    "opts": [
      "Fiber",
      "DSL",
      "PAN",
      "Cellular"
    ],
    "ans": [
      0
    ],
    "why": [
      "Fiber: Internet access transmitted using optical signals.",
      "DSL: Internet access using telephone copper pairs. This serves a different function from fiber.",
      "PAN: Network centered around an individual. This serves a different function from fiber.",
      "Cellular: Internet service over a mobile carrier network. This serves a different function from fiber."
    ],
    "tip": "Fiber uses optical termination equipment."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: broadband service commonly using coaxial distribution?",
    "opts": [
      "Cable internet",
      "SAN",
      "PAN",
      "WAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cable internet: Broadband service commonly using coaxial distribution.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from cable internet.",
      "PAN: Network centered around an individual. This serves a different function from cable internet.",
      "WAN: Network connecting geographically separated sites. This serves a different function from cable internet."
    ],
    "tip": "A cable modem terminates coax service."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that internet access using telephone copper pairs. What should they select?",
    "opts": [
      "DSL",
      "Cellular",
      "Cable internet",
      "Satellite"
    ],
    "ans": [
      0
    ],
    "why": [
      "DSL: Internet access using telephone copper pairs.",
      "Cellular: Internet service over a mobile carrier network. This serves a different function from dsl.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from dsl.",
      "Satellite: Internet service using orbiting relays. This serves a different function from dsl."
    ],
    "tip": "DSL depends on the telephone line path."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: Long path lengths can increase latency. Which technology or concept is MOST relevant?",
    "opts": [
      "Satellite",
      "SAN",
      "LAN",
      "DSL"
    ],
    "ans": [
      0
    ],
    "why": [
      "Satellite: Internet service using orbiting relays.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from satellite.",
      "LAN: Network covering a limited local area. This serves a different function from satellite.",
      "DSL: Internet access using telephone copper pairs. This serves a different function from satellite."
    ],
    "tip": "Long path lengths can increase latency."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: internet service over a mobile carrier network?",
    "opts": [
      "Cellular",
      "SAN",
      "PAN",
      "Satellite"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cellular: Internet service over a mobile carrier network.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from cellular.",
      "PAN: Network centered around an individual. This serves a different function from cellular.",
      "Satellite: Internet service using orbiting relays. This serves a different function from cellular."
    ],
    "tip": "Coverage and data plans affect performance."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that network covering a limited local area. What should they select?",
    "opts": [
      "LAN",
      "Cellular",
      "WAN",
      "SAN"
    ],
    "ans": [
      0
    ],
    "why": [
      "LAN: Network covering a limited local area.",
      "Cellular: Internet service over a mobile carrier network. This serves a different function from lan.",
      "WAN: Network connecting geographically separated sites. This serves a different function from lan.",
      "SAN: Dedicated network for block storage traffic. This serves a different function from lan."
    ],
    "tip": "Office Ethernet is a LAN."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "A technician encounters this situation: A WAN spans beyond one local site. Which technology or concept is MOST relevant?",
    "opts": [
      "WAN",
      "Fiber",
      "LAN",
      "Cable internet"
    ],
    "ans": [
      0
    ],
    "why": [
      "WAN: Network connecting geographically separated sites.",
      "Fiber: Internet access transmitted using optical signals. This serves a different function from wan.",
      "LAN: Network covering a limited local area. This serves a different function from wan.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from wan."
    ],
    "tip": "A WAN spans beyond one local site."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "Which term describes the following capability: network centered around an individual?",
    "opts": [
      "PAN",
      "WAN",
      "Satellite",
      "Cellular"
    ],
    "ans": [
      0
    ],
    "why": [
      "PAN: Network centered around an individual.",
      "WAN: Network connecting geographically separated sites. This serves a different function from pan.",
      "Satellite: Internet service using orbiting relays. This serves a different function from pan.",
      "Cellular: Internet service over a mobile carrier network. This serves a different function from pan."
    ],
    "tip": "Bluetooth peripherals often form a PAN."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.7",
    "q": "An IT support specialist needs to identify a component or service that dedicated network for block storage traffic. What should they select?",
    "opts": [
      "SAN",
      "DSL",
      "Cable internet",
      "Satellite"
    ],
    "ans": [
      0
    ],
    "why": [
      "SAN: Dedicated network for block storage traffic.",
      "DSL: Internet access using telephone copper pairs. This serves a different function from san.",
      "Cable internet: Broadband service commonly using coaxial distribution. This serves a different function from san.",
      "Satellite: Internet service using orbiting relays. This serves a different function from san."
    ],
    "tip": "A SAN differs from a user file share."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: Choose a crimper for terminating modular plugs. Which technology or concept is MOST relevant?",
    "opts": [
      "Crimper",
      "Toner probe",
      "Cable tester",
      "Punchdown tool"
    ],
    "ans": [
      0
    ],
    "why": [
      "Crimper: Attaches compatible connectors to cable ends.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from crimper.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from crimper.",
      "Punchdown tool: Seats conductors in insulation-displacement terminals. This serves a different function from crimper."
    ],
    "tip": "Choose a crimper for terminating modular plugs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: seats conductors in insulation-displacement terminals?",
    "opts": [
      "Punchdown tool",
      "Loopback plug",
      "Toner probe",
      "Crimper"
    ],
    "ans": [
      0
    ],
    "why": [
      "Punchdown tool: Seats conductors in insulation-displacement terminals.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from punchdown tool.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from punchdown tool.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from punchdown tool."
    ],
    "tip": "Patch panels often use punchdown blocks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "An IT support specialist needs to identify a component or service that checks cable continuity and wiring faults. What should they select?",
    "opts": [
      "Cable tester",
      "Network tap",
      "Wi-Fi analyzer",
      "Loopback plug"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cable tester: Checks cable continuity and wiring faults.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from cable tester.",
      "Wi-Fi analyzer: Surveys wireless channels and signal environment. This serves a different function from cable tester.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from cable tester."
    ],
    "tip": "Verify a newly terminated cable before deployment."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: Use tone and probe to locate the far end. Which technology or concept is MOST relevant?",
    "opts": [
      "Toner probe",
      "Punchdown tool",
      "Crimper",
      "Cable tester"
    ],
    "ans": [
      0
    ],
    "why": [
      "Toner probe: Traces an unknown cable through bundles.",
      "Punchdown tool: Seats conductors in insulation-displacement terminals. This serves a different function from toner probe.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from toner probe.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from toner probe."
    ],
    "tip": "Use tone and probe to locate the far end."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: surveys wireless channels and signal environment?",
    "opts": [
      "Wi-Fi analyzer",
      "Crimper",
      "Toner probe",
      "Network tap"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wi-Fi analyzer: Surveys wireless channels and signal environment.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from wi-fi analyzer.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from wi-fi analyzer.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from wi-fi analyzer."
    ],
    "tip": "Channel congestion requires radio analysis."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "An IT support specialist needs to identify a component or service that returns transmitted signals to test an interface. What should they select?",
    "opts": [
      "Loopback plug",
      "Wi-Fi analyzer",
      "Crimper",
      "Cable tester"
    ],
    "ans": [
      0
    ],
    "why": [
      "Loopback plug: Returns transmitted signals to test an interface.",
      "Wi-Fi analyzer: Surveys wireless channels and signal environment. This serves a different function from loopback plug.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from loopback plug.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from loopback plug."
    ],
    "tip": "Loopback isolates a port from the external path."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: A tap is for observing packets. Which technology or concept is MOST relevant?",
    "opts": [
      "Network tap",
      "Toner probe",
      "Loopback plug",
      "Wi-Fi analyzer"
    ],
    "ans": [
      0
    ],
    "why": [
      "Network tap: Provides a copy of traffic for monitoring.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from network tap.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from network tap.",
      "Wi-Fi analyzer: Surveys wireless channels and signal environment. This serves a different function from network tap."
    ],
    "tip": "A tap is for observing packets."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: attaches compatible connectors to cable ends?",
    "opts": [
      "Crimper",
      "Punchdown tool",
      "Toner probe",
      "Network tap"
    ],
    "ans": [
      0
    ],
    "why": [
      "Crimper: Attaches compatible connectors to cable ends.",
      "Punchdown tool: Seats conductors in insulation-displacement terminals. This serves a different function from crimper.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from crimper.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from crimper."
    ],
    "tip": "Choose a crimper for terminating modular plugs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "An IT support specialist needs to identify a component or service that seats conductors in insulation-displacement terminals. What should they select?",
    "opts": [
      "Punchdown tool",
      "Loopback plug",
      "Crimper",
      "Cable tester"
    ],
    "ans": [
      0
    ],
    "why": [
      "Punchdown tool: Seats conductors in insulation-displacement terminals.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from punchdown tool.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from punchdown tool.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from punchdown tool."
    ],
    "tip": "Patch panels often use punchdown blocks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: Verify a newly terminated cable before deployment. Which technology or concept is MOST relevant?",
    "opts": [
      "Cable tester",
      "Punchdown tool",
      "Loopback plug",
      "Crimper"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cable tester: Checks cable continuity and wiring faults.",
      "Punchdown tool: Seats conductors in insulation-displacement terminals. This serves a different function from cable tester.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from cable tester.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from cable tester."
    ],
    "tip": "Verify a newly terminated cable before deployment."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: traces an unknown cable through bundles?",
    "opts": [
      "Toner probe",
      "Crimper",
      "Wi-Fi analyzer",
      "Network tap"
    ],
    "ans": [
      0
    ],
    "why": [
      "Toner probe: Traces an unknown cable through bundles.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from toner probe.",
      "Wi-Fi analyzer: Surveys wireless channels and signal environment. This serves a different function from toner probe.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from toner probe."
    ],
    "tip": "Use tone and probe to locate the far end."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "An IT support specialist needs to identify a component or service that surveys wireless channels and signal environment. What should they select?",
    "opts": [
      "Wi-Fi analyzer",
      "Punchdown tool",
      "Network tap",
      "Loopback plug"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wi-Fi analyzer: Surveys wireless channels and signal environment.",
      "Punchdown tool: Seats conductors in insulation-displacement terminals. This serves a different function from wi-fi analyzer.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from wi-fi analyzer.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from wi-fi analyzer."
    ],
    "tip": "Channel congestion requires radio analysis."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: Loopback isolates a port from the external path. Which technology or concept is MOST relevant?",
    "opts": [
      "Loopback plug",
      "Cable tester",
      "Network tap",
      "Toner probe"
    ],
    "ans": [
      0
    ],
    "why": [
      "Loopback plug: Returns transmitted signals to test an interface.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from loopback plug.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from loopback plug.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from loopback plug."
    ],
    "tip": "Loopback isolates a port from the external path."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: provides a copy of traffic for monitoring?",
    "opts": [
      "Network tap",
      "Crimper",
      "Loopback plug",
      "Cable tester"
    ],
    "ans": [
      0
    ],
    "why": [
      "Network tap: Provides a copy of traffic for monitoring.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from network tap.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from network tap.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from network tap."
    ],
    "tip": "A tap is for observing packets."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "An IT support specialist needs to identify a component or service that attaches compatible connectors to cable ends. What should they select?",
    "opts": [
      "Crimper",
      "Toner probe",
      "Cable tester",
      "Loopback plug"
    ],
    "ans": [
      0
    ],
    "why": [
      "Crimper: Attaches compatible connectors to cable ends.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from crimper.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from crimper.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from crimper."
    ],
    "tip": "Choose a crimper for terminating modular plugs."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "A technician encounters this situation: Patch panels often use punchdown blocks. Which technology or concept is MOST relevant?",
    "opts": [
      "Punchdown tool",
      "Network tap",
      "Crimper",
      "Cable tester"
    ],
    "ans": [
      0
    ],
    "why": [
      "Punchdown tool: Seats conductors in insulation-displacement terminals.",
      "Network tap: Provides a copy of traffic for monitoring. This serves a different function from punchdown tool.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from punchdown tool.",
      "Cable tester: Checks cable continuity and wiring faults. This serves a different function from punchdown tool."
    ],
    "tip": "Patch panels often use punchdown blocks."
  },
  {
    "domain": "2.0 Networking",
    "obj": "2.8",
    "q": "Which term describes the following capability: checks cable continuity and wiring faults?",
    "opts": [
      "Cable tester",
      "Crimper",
      "Toner probe",
      "Loopback plug"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cable tester: Checks cable continuity and wiring faults.",
      "Crimper: Attaches compatible connectors to cable ends. This serves a different function from cable tester.",
      "Toner probe: Traces an unknown cable through bundles. This serves a different function from cable tester.",
      "Loopback plug: Returns transmitted signals to test an interface. This serves a different function from cable tester."
    ],
    "tip": "Verify a newly terminated cable before deployment."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: Good viewing angles can matter for shared displays. Which technology or concept is MOST relevant?",
    "opts": [
      "IPS LCD",
      "OLED",
      "Refresh rate",
      "TN LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "IPS LCD: LCD panel known for wide viewing angles.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from ips lcd.",
      "Refresh rate: Number of display updates per second. This serves a different function from ips lcd.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from ips lcd."
    ],
    "tip": "Good viewing angles can matter for shared displays."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: lCD panel type often optimized for response speed?",
    "opts": [
      "TN LCD",
      "OLED",
      "Color gamut",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "TN LCD: LCD panel type often optimized for response speed.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from tn lcd.",
      "Color gamut: Range of colors a display can reproduce. This serves a different function from tn lcd.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from tn lcd."
    ],
    "tip": "Panel technology affects viewing and color."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that lCD panel type often associated with stronger contrast. What should they select?",
    "opts": [
      "VA LCD",
      "Pixel density",
      "IPS LCD",
      "TN LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "VA LCD: LCD panel type often associated with stronger contrast.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from va lcd.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from va lcd.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from va lcd."
    ],
    "tip": "Compare contrast and viewing-angle needs."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: Static content can contribute to burn-in. Which technology or concept is MOST relevant?",
    "opts": [
      "OLED",
      "Pixel density",
      "Color gamut",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "OLED: Self-emissive pixels that do not need a traditional backlight.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from oled.",
      "Color gamut: Range of colors a display can reproduce. This serves a different function from oled.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from oled."
    ],
    "tip": "Static content can contribute to burn-in."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: detects touch and stylus position?",
    "opts": [
      "Digitizer",
      "IPS LCD",
      "Color gamut",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "Digitizer: Detects touch and stylus position.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from digitizer.",
      "Color gamut: Range of colors a display can reproduce. This serves a different function from digitizer.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from digitizer."
    ],
    "tip": "Visible image can work while touch input fails."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that number of display updates per second. What should they select?",
    "opts": [
      "Refresh rate",
      "TN LCD",
      "Pixel density",
      "Color gamut"
    ],
    "ans": [
      0
    ],
    "why": [
      "Refresh rate: Number of display updates per second.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from refresh rate.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from refresh rate.",
      "Color gamut: Range of colors a display can reproduce. This serves a different function from refresh rate."
    ],
    "tip": "Higher hertz indicates more refreshes."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: A high-resolution small panel can look sharper. Which technology or concept is MOST relevant?",
    "opts": [
      "Pixel density",
      "VA LCD",
      "IPS LCD",
      "TN LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Pixel density: Number of pixels per physical display area.",
      "VA LCD: LCD panel type often associated with stronger contrast. This serves a different function from pixel density.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from pixel density.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from pixel density."
    ],
    "tip": "A high-resolution small panel can look sharper."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: range of colors a display can reproduce?",
    "opts": [
      "Color gamut",
      "Refresh rate",
      "OLED",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "Color gamut: Range of colors a display can reproduce.",
      "Refresh rate: Number of display updates per second. This serves a different function from color gamut.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from color gamut.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from color gamut."
    ],
    "tip": "Gamut is not the same as resolution."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that lCD panel known for wide viewing angles. What should they select?",
    "opts": [
      "IPS LCD",
      "TN LCD",
      "Pixel density",
      "Refresh rate"
    ],
    "ans": [
      0
    ],
    "why": [
      "IPS LCD: LCD panel known for wide viewing angles.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from ips lcd.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from ips lcd.",
      "Refresh rate: Number of display updates per second. This serves a different function from ips lcd."
    ],
    "tip": "Good viewing angles can matter for shared displays."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: Panel technology affects viewing and color. Which technology or concept is MOST relevant?",
    "opts": [
      "TN LCD",
      "Refresh rate",
      "Digitizer",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "TN LCD: LCD panel type often optimized for response speed.",
      "Refresh rate: Number of display updates per second. This serves a different function from tn lcd.",
      "Digitizer: Detects touch and stylus position. This serves a different function from tn lcd.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from tn lcd."
    ],
    "tip": "Panel technology affects viewing and color."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: lCD panel type often associated with stronger contrast?",
    "opts": [
      "VA LCD",
      "Pixel density",
      "Refresh rate",
      "OLED"
    ],
    "ans": [
      0
    ],
    "why": [
      "VA LCD: LCD panel type often associated with stronger contrast.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from va lcd.",
      "Refresh rate: Number of display updates per second. This serves a different function from va lcd.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from va lcd."
    ],
    "tip": "Compare contrast and viewing-angle needs."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that self-emissive pixels that do not need a traditional backlight. What should they select?",
    "opts": [
      "OLED",
      "Refresh rate",
      "Digitizer",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "OLED: Self-emissive pixels that do not need a traditional backlight.",
      "Refresh rate: Number of display updates per second. This serves a different function from oled.",
      "Digitizer: Detects touch and stylus position. This serves a different function from oled.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from oled."
    ],
    "tip": "Static content can contribute to burn-in."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: Visible image can work while touch input fails. Which technology or concept is MOST relevant?",
    "opts": [
      "Digitizer",
      "Refresh rate",
      "Color gamut",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "Digitizer: Detects touch and stylus position.",
      "Refresh rate: Number of display updates per second. This serves a different function from digitizer.",
      "Color gamut: Range of colors a display can reproduce. This serves a different function from digitizer.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from digitizer."
    ],
    "tip": "Visible image can work while touch input fails."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: number of display updates per second?",
    "opts": [
      "Refresh rate",
      "OLED",
      "VA LCD",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Refresh rate: Number of display updates per second.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from refresh rate.",
      "VA LCD: LCD panel type often associated with stronger contrast. This serves a different function from refresh rate.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from refresh rate."
    ],
    "tip": "Higher hertz indicates more refreshes."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that number of pixels per physical display area. What should they select?",
    "opts": [
      "Pixel density",
      "Refresh rate",
      "VA LCD",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Pixel density: Number of pixels per physical display area.",
      "Refresh rate: Number of display updates per second. This serves a different function from pixel density.",
      "VA LCD: LCD panel type often associated with stronger contrast. This serves a different function from pixel density.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from pixel density."
    ],
    "tip": "A high-resolution small panel can look sharper."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "A technician encounters this situation: Gamut is not the same as resolution. Which technology or concept is MOST relevant?",
    "opts": [
      "Color gamut",
      "TN LCD",
      "Digitizer",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Color gamut: Range of colors a display can reproduce.",
      "TN LCD: LCD panel type often optimized for response speed. This serves a different function from color gamut.",
      "Digitizer: Detects touch and stylus position. This serves a different function from color gamut.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from color gamut."
    ],
    "tip": "Gamut is not the same as resolution."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "Which term describes the following capability: lCD panel known for wide viewing angles?",
    "opts": [
      "IPS LCD",
      "Digitizer",
      "Refresh rate",
      "Pixel density"
    ],
    "ans": [
      0
    ],
    "why": [
      "IPS LCD: LCD panel known for wide viewing angles.",
      "Digitizer: Detects touch and stylus position. This serves a different function from ips lcd.",
      "Refresh rate: Number of display updates per second. This serves a different function from ips lcd.",
      "Pixel density: Number of pixels per physical display area. This serves a different function from ips lcd."
    ],
    "tip": "Good viewing angles can matter for shared displays."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.1",
    "q": "An IT support specialist needs to identify a component or service that lCD panel type often optimized for response speed. What should they select?",
    "opts": [
      "TN LCD",
      "VA LCD",
      "OLED",
      "IPS LCD"
    ],
    "ans": [
      0
    ],
    "why": [
      "TN LCD: LCD panel type often optimized for response speed.",
      "VA LCD: LCD panel type often associated with stronger contrast. This serves a different function from tn lcd.",
      "OLED: Self-emissive pixels that do not need a traditional backlight. This serves a different function from tn lcd.",
      "IPS LCD: LCD panel known for wide viewing angles. This serves a different function from tn lcd."
    ],
    "tip": "Panel technology affects viewing and color."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: Ethernet patch cables typically terminate with RJ45. Which technology or concept is MOST relevant?",
    "opts": [
      "RJ45",
      "SATA",
      "Single-mode fiber",
      "DisplayPort"
    ],
    "ans": [
      0
    ],
    "why": [
      "RJ45: Modular connector commonly used for Ethernet.",
      "SATA: Data interface for internal drives. This serves a different function from rj45.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from rj45.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from rj45."
    ],
    "tip": "Ethernet patch cables typically terminate with RJ45."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: smaller modular connector for telephone lines?",
    "opts": [
      "RJ11",
      "RJ45",
      "Single-mode fiber",
      "F-type"
    ],
    "ans": [
      0
    ],
    "why": [
      "RJ11: Smaller modular connector for telephone lines.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from rj11.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from rj11.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from rj11."
    ],
    "tip": "RJ11 is not a standard Ethernet patch plug."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "An IT support specialist needs to identify a component or service that threaded coaxial connector for cable service. What should they select?",
    "opts": [
      "F-type",
      "RJ11",
      "RJ45",
      "SATA"
    ],
    "ans": [
      0
    ],
    "why": [
      "F-type: Threaded coaxial connector for cable service.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from f-type.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from f-type.",
      "SATA: Data interface for internal drives. This serves a different function from f-type."
    ],
    "tip": "Coax wall connections often use F-type."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: Fiber requires optical rather than copper termination. Which technology or concept is MOST relevant?",
    "opts": [
      "LC",
      "T568A/T568B",
      "Single-mode fiber",
      "SATA"
    ],
    "ans": [
      0
    ],
    "why": [
      "LC: Compact fiber optic connector.",
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations. This serves a different function from lc.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from lc.",
      "SATA: Data interface for internal drives. This serves a different function from lc."
    ],
    "tip": "Fiber requires optical rather than copper termination."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: digital video and audio interface?",
    "opts": [
      "HDMI",
      "T568A/T568B",
      "SATA",
      "RJ45"
    ],
    "ans": [
      0
    ],
    "why": [
      "HDMI: Digital video and audio interface.",
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations. This serves a different function from hdmi.",
      "SATA: Data interface for internal drives. This serves a different function from hdmi.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from hdmi."
    ],
    "tip": "Check display input selection and cable type."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "An IT support specialist needs to identify a component or service that digital display interface common on computers. What should they select?",
    "opts": [
      "DisplayPort",
      "LC",
      "RJ45",
      "RJ11"
    ],
    "ans": [
      0
    ],
    "why": [
      "DisplayPort: Digital display interface common on computers.",
      "LC: Compact fiber optic connector. This serves a different function from displayport.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from displayport.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from displayport."
    ],
    "tip": "DP can carry digital video and audio."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: SATA is not a display cable. Which technology or concept is MOST relevant?",
    "opts": [
      "SATA",
      "RJ11",
      "Single-mode fiber",
      "T568A/T568B"
    ],
    "ans": [
      0
    ],
    "why": [
      "SATA: Data interface for internal drives.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from sata.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from sata.",
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations. This serves a different function from sata."
    ],
    "tip": "SATA is not a display cable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: wiring pinout standards for twisted-pair terminations?",
    "opts": [
      "T568A/T568B",
      "RJ11",
      "Single-mode fiber",
      "RJ45"
    ],
    "ans": [
      0
    ],
    "why": [
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from t568a/t568b.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from t568a/t568b.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from t568a/t568b."
    ],
    "tip": "Keep wiring schemes consistent for straight-through cables."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "An IT support specialist needs to identify a component or service that optical fiber suited for long-distance links. What should they select?",
    "opts": [
      "Single-mode fiber",
      "F-type",
      "DisplayPort",
      "HDMI"
    ],
    "ans": [
      0
    ],
    "why": [
      "Single-mode fiber: Optical fiber suited for long-distance links.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from single-mode fiber.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from single-mode fiber.",
      "HDMI: Digital video and audio interface. This serves a different function from single-mode fiber."
    ],
    "tip": "Single-mode differs from multimode optics."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: Ethernet patch cables typically terminate with RJ45. Which technology or concept is MOST relevant?",
    "opts": [
      "RJ45",
      "F-type",
      "LC",
      "Single-mode fiber"
    ],
    "ans": [
      0
    ],
    "why": [
      "RJ45: Modular connector commonly used for Ethernet.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from rj45.",
      "LC: Compact fiber optic connector. This serves a different function from rj45.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from rj45."
    ],
    "tip": "Ethernet patch cables typically terminate with RJ45."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: smaller modular connector for telephone lines?",
    "opts": [
      "RJ11",
      "T568A/T568B",
      "DisplayPort",
      "RJ45"
    ],
    "ans": [
      0
    ],
    "why": [
      "RJ11: Smaller modular connector for telephone lines.",
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations. This serves a different function from rj11.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from rj11.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from rj11."
    ],
    "tip": "RJ11 is not a standard Ethernet patch plug."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "An IT support specialist needs to identify a component or service that threaded coaxial connector for cable service. What should they select?",
    "opts": [
      "F-type",
      "Single-mode fiber",
      "RJ11",
      "DisplayPort"
    ],
    "ans": [
      0
    ],
    "why": [
      "F-type: Threaded coaxial connector for cable service.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from f-type.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from f-type.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from f-type."
    ],
    "tip": "Coax wall connections often use F-type."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: Fiber requires optical rather than copper termination. Which technology or concept is MOST relevant?",
    "opts": [
      "LC",
      "SATA",
      "F-type",
      "RJ45"
    ],
    "ans": [
      0
    ],
    "why": [
      "LC: Compact fiber optic connector.",
      "SATA: Data interface for internal drives. This serves a different function from lc.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from lc.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from lc."
    ],
    "tip": "Fiber requires optical rather than copper termination."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: digital video and audio interface?",
    "opts": [
      "HDMI",
      "RJ11",
      "F-type",
      "DisplayPort"
    ],
    "ans": [
      0
    ],
    "why": [
      "HDMI: Digital video and audio interface.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from hdmi.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from hdmi.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from hdmi."
    ],
    "tip": "Check display input selection and cable type."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "An IT support specialist needs to identify a component or service that digital display interface common on computers. What should they select?",
    "opts": [
      "DisplayPort",
      "SATA",
      "Single-mode fiber",
      "F-type"
    ],
    "ans": [
      0
    ],
    "why": [
      "DisplayPort: Digital display interface common on computers.",
      "SATA: Data interface for internal drives. This serves a different function from displayport.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from displayport.",
      "F-type: Threaded coaxial connector for cable service. This serves a different function from displayport."
    ],
    "tip": "DP can carry digital video and audio."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "A technician encounters this situation: SATA is not a display cable. Which technology or concept is MOST relevant?",
    "opts": [
      "SATA",
      "Single-mode fiber",
      "RJ45",
      "RJ11"
    ],
    "ans": [
      0
    ],
    "why": [
      "SATA: Data interface for internal drives.",
      "Single-mode fiber: Optical fiber suited for long-distance links. This serves a different function from sata.",
      "RJ45: Modular connector commonly used for Ethernet. This serves a different function from sata.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from sata."
    ],
    "tip": "SATA is not a display cable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.2",
    "q": "Which term describes the following capability: wiring pinout standards for twisted-pair terminations?",
    "opts": [
      "T568A/T568B",
      "SATA",
      "RJ11",
      "DisplayPort"
    ],
    "ans": [
      0
    ],
    "why": [
      "T568A/T568B: Wiring pinout standards for twisted-pair terminations.",
      "SATA: Data interface for internal drives. This serves a different function from t568a/t568b.",
      "RJ11: Smaller modular connector for telephone lines. This serves a different function from t568a/t568b.",
      "DisplayPort: Digital display interface common on computers. This serves a different function from t568a/t568b."
    ],
    "tip": "Keep wiring schemes consistent for straight-through cables."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Laptop memory slots often use SODIMMs. Which technology or concept is MOST relevant?",
    "opts": [
      "SODIMM",
      "Non-ECC RAM",
      "DDR generation",
      "Dual channel"
    ],
    "ans": [
      0
    ],
    "why": [
      "SODIMM: Compact RAM module form factor for many laptops.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from sodimm.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from sodimm.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from sodimm."
    ],
    "tip": "Laptop memory slots often use SODIMMs."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: full-size memory module form factor for desktops?",
    "opts": [
      "DIMM",
      "Dual channel",
      "Non-ECC RAM",
      "ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "DIMM: Full-size memory module form factor for desktops.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from dimm.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from dimm.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from dimm."
    ],
    "tip": "DIMM and SODIMM are physically different."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "An IT support specialist needs to identify a component or service that memory family generation with specific compatibility. What should they select?",
    "opts": [
      "DDR generation",
      "DIMM",
      "SODIMM",
      "Non-ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "DDR generation: Memory family generation with specific compatibility.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from ddr generation.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from ddr generation.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from ddr generation."
    ],
    "tip": "Different DDR generations are not interchangeable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Servers may use ECC for reliability. Which technology or concept is MOST relevant?",
    "opts": [
      "ECC RAM",
      "DDR generation",
      "DIMM",
      "SODIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "ECC RAM: Memory capable of detecting and correcting certain errors.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from ecc ram.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from ecc ram.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from ecc ram."
    ],
    "tip": "Servers may use ECC for reliability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: memory without ECC correction capability?",
    "opts": [
      "Non-ECC RAM",
      "SODIMM",
      "DDR generation",
      "ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Non-ECC RAM: Memory without ECC correction capability.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from non-ecc ram.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from non-ecc ram.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from non-ecc ram."
    ],
    "tip": "Check motherboard support before swapping."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "An IT support specialist needs to identify a component or service that memory configuration using multiple channels. What should they select?",
    "opts": [
      "Dual channel",
      "DIMM",
      "SODIMM",
      "Non-ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dual channel: Memory configuration using multiple channels.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from dual channel.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from dual channel.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from dual channel."
    ],
    "tip": "Matched supported modules can enable multi-channel access."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Laptop memory slots often use SODIMMs. Which technology or concept is MOST relevant?",
    "opts": [
      "SODIMM",
      "DDR generation",
      "DIMM",
      "ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "SODIMM: Compact RAM module form factor for many laptops.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from sodimm.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from sodimm.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from sodimm."
    ],
    "tip": "Laptop memory slots often use SODIMMs."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: full-size memory module form factor for desktops?",
    "opts": [
      "DIMM",
      "ECC RAM",
      "Dual channel",
      "SODIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "DIMM: Full-size memory module form factor for desktops.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from dimm.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from dimm.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from dimm."
    ],
    "tip": "DIMM and SODIMM are physically different."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "An IT support specialist needs to identify a component or service that memory family generation with specific compatibility. What should they select?",
    "opts": [
      "DDR generation",
      "DIMM",
      "Dual channel",
      "ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "DDR generation: Memory family generation with specific compatibility.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from ddr generation.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from ddr generation.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from ddr generation."
    ],
    "tip": "Different DDR generations are not interchangeable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Servers may use ECC for reliability. Which technology or concept is MOST relevant?",
    "opts": [
      "ECC RAM",
      "DDR generation",
      "Non-ECC RAM",
      "DIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "ECC RAM: Memory capable of detecting and correcting certain errors.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from ecc ram.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from ecc ram.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from ecc ram."
    ],
    "tip": "Servers may use ECC for reliability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: memory without ECC correction capability?",
    "opts": [
      "Non-ECC RAM",
      "SODIMM",
      "ECC RAM",
      "DDR generation"
    ],
    "ans": [
      0
    ],
    "why": [
      "Non-ECC RAM: Memory without ECC correction capability.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from non-ecc ram.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from non-ecc ram.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from non-ecc ram."
    ],
    "tip": "Check motherboard support before swapping."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "An IT support specialist needs to identify a component or service that memory configuration using multiple channels. What should they select?",
    "opts": [
      "Dual channel",
      "Non-ECC RAM",
      "DDR generation",
      "DIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dual channel: Memory configuration using multiple channels.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from dual channel.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from dual channel.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from dual channel."
    ],
    "tip": "Matched supported modules can enable multi-channel access."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Laptop memory slots often use SODIMMs. Which technology or concept is MOST relevant?",
    "opts": [
      "SODIMM",
      "Non-ECC RAM",
      "Dual channel",
      "DIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "SODIMM: Compact RAM module form factor for many laptops.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from sodimm.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from sodimm.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from sodimm."
    ],
    "tip": "Laptop memory slots often use SODIMMs."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: full-size memory module form factor for desktops?",
    "opts": [
      "DIMM",
      "SODIMM",
      "Non-ECC RAM",
      "ECC RAM"
    ],
    "ans": [
      0
    ],
    "why": [
      "DIMM: Full-size memory module form factor for desktops.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from dimm.",
      "Non-ECC RAM: Memory without ECC correction capability. This serves a different function from dimm.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from dimm."
    ],
    "tip": "DIMM and SODIMM are physically different."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "An IT support specialist needs to identify a component or service that memory family generation with specific compatibility. What should they select?",
    "opts": [
      "DDR generation",
      "ECC RAM",
      "DIMM",
      "Dual channel"
    ],
    "ans": [
      0
    ],
    "why": [
      "DDR generation: Memory family generation with specific compatibility.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from ddr generation.",
      "DIMM: Full-size memory module form factor for desktops. This serves a different function from ddr generation.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from ddr generation."
    ],
    "tip": "Different DDR generations are not interchangeable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "A technician encounters this situation: Servers may use ECC for reliability. Which technology or concept is MOST relevant?",
    "opts": [
      "ECC RAM",
      "Dual channel",
      "DDR generation",
      "SODIMM"
    ],
    "ans": [
      0
    ],
    "why": [
      "ECC RAM: Memory capable of detecting and correcting certain errors.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from ecc ram.",
      "DDR generation: Memory family generation with specific compatibility. This serves a different function from ecc ram.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from ecc ram."
    ],
    "tip": "Servers may use ECC for reliability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.3",
    "q": "Which term describes the following capability: memory without ECC correction capability?",
    "opts": [
      "Non-ECC RAM",
      "ECC RAM",
      "SODIMM",
      "Dual channel"
    ],
    "ans": [
      0
    ],
    "why": [
      "Non-ECC RAM: Memory without ECC correction capability.",
      "ECC RAM: Memory capable of detecting and correcting certain errors. This serves a different function from non-ecc ram.",
      "SODIMM: Compact RAM module form factor for many laptops. This serves a different function from non-ecc ram.",
      "Dual channel: Memory configuration using multiple channels. This serves a different function from non-ecc ram."
    ],
    "tip": "Check motherboard support before swapping."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: M.2 shape does not guarantee NVMe operation. Which technology or concept is MOST relevant?",
    "opts": [
      "NVMe",
      "RAID 1",
      "RAID 10",
      "M.2"
    ],
    "ans": [
      0
    ],
    "why": [
      "NVMe: Storage protocol optimized for SSDs over PCIe.",
      "RAID 1: Mirroring data on separate drives. This serves a different function from nvme.",
      "RAID 10: Mirrored sets combined with striping. This serves a different function from nvme.",
      "M.2: Compact expansion card form factor. This serves a different function from nvme."
    ],
    "tip": "M.2 shape does not guarantee NVMe operation."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which term describes the following capability: solid-state storage using the SATA interface?",
    "opts": [
      "SATA SSD",
      "NVMe",
      "RAID 6",
      "SAS"
    ],
    "ans": [
      0
    ],
    "why": [
      "SATA SSD: Solid-state storage using the SATA interface.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from sata ssd.",
      "RAID 6: Striping with dual distributed parity. This serves a different function from sata ssd.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from sata ssd."
    ],
    "tip": "SATA throughput differs from PCIe NVMe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "An IT support specialist needs to identify a component or service that compact expansion card form factor. What should they select?",
    "opts": [
      "M.2",
      "RAID 5",
      "SATA SSD",
      "SAS"
    ],
    "ans": [
      0
    ],
    "why": [
      "M.2: Compact expansion card form factor.",
      "RAID 5: Striping with distributed single parity. This serves a different function from m.2.",
      "SATA SSD: Solid-state storage using the SATA interface. This serves a different function from m.2.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from m.2."
    ],
    "tip": "Check whether the slot supports SATA or PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: One failed member loses the array. Which technology or concept is MOST relevant?",
    "opts": [
      "RAID 0",
      "SAS",
      "RAID 5",
      "NVMe"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 0: Data striping without fault tolerance.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from raid 0.",
      "RAID 5: Striping with distributed single parity. This serves a different function from raid 0.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from raid 0."
    ],
    "tip": "One failed member loses the array."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which term describes the following capability: mirroring data on separate drives?",
    "opts": [
      "RAID 1",
      "RAID 6",
      "RAID 5",
      "RAID 10"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 1: Mirroring data on separate drives.",
      "RAID 6: Striping with dual distributed parity. This serves a different function from raid 1.",
      "RAID 5: Striping with distributed single parity. This serves a different function from raid 1.",
      "RAID 10: Mirrored sets combined with striping. This serves a different function from raid 1."
    ],
    "tip": "Mirroring keeps a copy but is not a backup."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "An IT support specialist needs to identify a component or service that striping with distributed single parity. What should they select?",
    "opts": [
      "RAID 5",
      "RAID 1",
      "M.2",
      "SAS"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 5: Striping with distributed single parity.",
      "RAID 1: Mirroring data on separate drives. This serves a different function from raid 5.",
      "M.2: Compact expansion card form factor. This serves a different function from raid 5.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from raid 5."
    ],
    "tip": "Single-drive fault tolerance needs enough members."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: Can survive two drive failures. Which technology or concept is MOST relevant?",
    "opts": [
      "RAID 6",
      "M.2",
      "SAS",
      "NVMe"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 6: Striping with dual distributed parity.",
      "M.2: Compact expansion card form factor. This serves a different function from raid 6.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from raid 6.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from raid 6."
    ],
    "tip": "Can survive two drive failures."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which term describes the following capability: mirrored sets combined with striping?",
    "opts": [
      "RAID 10",
      "NVMe",
      "RAID 0",
      "SATA SSD"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 10: Mirrored sets combined with striping.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from raid 10.",
      "RAID 0: Data striping without fault tolerance. This serves a different function from raid 10.",
      "SATA SSD: Solid-state storage using the SATA interface. This serves a different function from raid 10."
    ],
    "tip": "Needs multiple disks and combines speed with redundancy."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "An IT support specialist needs to identify a component or service that enterprise-oriented serial storage interface. What should they select?",
    "opts": [
      "SAS",
      "SATA SSD",
      "RAID 10",
      "RAID 1"
    ],
    "ans": [
      0
    ],
    "why": [
      "SAS: Enterprise-oriented serial storage interface.",
      "SATA SSD: Solid-state storage using the SATA interface. This serves a different function from sas.",
      "RAID 10: Mirrored sets combined with striping. This serves a different function from sas.",
      "RAID 1: Mirroring data on separate drives. This serves a different function from sas."
    ],
    "tip": "SAS and SATA are different drive interfaces."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: M.2 shape does not guarantee NVMe operation. Which technology or concept is MOST relevant?",
    "opts": [
      "NVMe",
      "RAID 5",
      "RAID 6",
      "M.2"
    ],
    "ans": [
      0
    ],
    "why": [
      "NVMe: Storage protocol optimized for SSDs over PCIe.",
      "RAID 5: Striping with distributed single parity. This serves a different function from nvme.",
      "RAID 6: Striping with dual distributed parity. This serves a different function from nvme.",
      "M.2: Compact expansion card form factor. This serves a different function from nvme."
    ],
    "tip": "M.2 shape does not guarantee NVMe operation."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which term describes the following capability: solid-state storage using the SATA interface?",
    "opts": [
      "SATA SSD",
      "SAS",
      "RAID 0",
      "NVMe"
    ],
    "ans": [
      0
    ],
    "why": [
      "SATA SSD: Solid-state storage using the SATA interface.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from sata ssd.",
      "RAID 0: Data striping without fault tolerance. This serves a different function from sata ssd.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from sata ssd."
    ],
    "tip": "SATA throughput differs from PCIe NVMe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "An IT support specialist needs to identify a component or service that compact expansion card form factor. What should they select?",
    "opts": [
      "M.2",
      "RAID 6",
      "RAID 5",
      "RAID 10"
    ],
    "ans": [
      0
    ],
    "why": [
      "M.2: Compact expansion card form factor.",
      "RAID 6: Striping with dual distributed parity. This serves a different function from m.2.",
      "RAID 5: Striping with distributed single parity. This serves a different function from m.2.",
      "RAID 10: Mirrored sets combined with striping. This serves a different function from m.2."
    ],
    "tip": "Check whether the slot supports SATA or PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: One failed member loses the array. Which technology or concept is MOST relevant?",
    "opts": [
      "RAID 0",
      "RAID 6",
      "RAID 1",
      "NVMe"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 0: Data striping without fault tolerance.",
      "RAID 6: Striping with dual distributed parity. This serves a different function from raid 0.",
      "RAID 1: Mirroring data on separate drives. This serves a different function from raid 0.",
      "NVMe: Storage protocol optimized for SSDs over PCIe. This serves a different function from raid 0."
    ],
    "tip": "One failed member loses the array."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "Which term describes the following capability: mirroring data on separate drives?",
    "opts": [
      "RAID 1",
      "SATA SSD",
      "RAID 5",
      "RAID 10"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 1: Mirroring data on separate drives.",
      "SATA SSD: Solid-state storage using the SATA interface. This serves a different function from raid 1.",
      "RAID 5: Striping with distributed single parity. This serves a different function from raid 1.",
      "RAID 10: Mirrored sets combined with striping. This serves a different function from raid 1."
    ],
    "tip": "Mirroring keeps a copy but is not a backup."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "An IT support specialist needs to identify a component or service that striping with distributed single parity. What should they select?",
    "opts": [
      "RAID 5",
      "SAS",
      "RAID 0",
      "SATA SSD"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 5: Striping with distributed single parity.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from raid 5.",
      "RAID 0: Data striping without fault tolerance. This serves a different function from raid 5.",
      "SATA SSD: Solid-state storage using the SATA interface. This serves a different function from raid 5."
    ],
    "tip": "Single-drive fault tolerance needs enough members."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.4",
    "q": "A technician encounters this situation: Can survive two drive failures. Which technology or concept is MOST relevant?",
    "opts": [
      "RAID 6",
      "M.2",
      "RAID 0",
      "SAS"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID 6: Striping with dual distributed parity.",
      "M.2: Compact expansion card form factor. This serves a different function from raid 6.",
      "RAID 0: Data striping without fault tolerance. This serves a different function from raid 6.",
      "SAS: Enterprise-oriented serial storage interface. This serves a different function from raid 6."
    ],
    "tip": "Can survive two drive failures."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: Case and board form factors must align. Which technology or concept is MOST relevant?",
    "opts": [
      "ATX",
      "microATX",
      "Secure Boot",
      "Thermal paste"
    ],
    "ans": [
      0
    ],
    "why": [
      "ATX: Common full-size motherboard form factor.",
      "microATX: Smaller motherboard form factor than ATX. This serves a different function from atx.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from atx.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from atx."
    ],
    "tip": "Case and board form factors must align."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which term describes the following capability: smaller motherboard form factor than ATX?",
    "opts": [
      "microATX",
      "Secure Boot",
      "ARM",
      "TPM"
    ],
    "ans": [
      0
    ],
    "why": [
      "microATX: Smaller motherboard form factor than ATX.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from microatx.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from microatx.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from microatx."
    ],
    "tip": "Expansion slots and case fit vary."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "An IT support specialist needs to identify a component or service that high-speed expansion interconnect for cards and SSDs. What should they select?",
    "opts": [
      "PCIe",
      "TPM",
      "ARM",
      "Secure Boot"
    ],
    "ans": [
      0
    ],
    "why": [
      "PCIe: High-speed expansion interconnect for cards and SSDs.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from pcie.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from pcie.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from pcie."
    ],
    "tip": "Video cards commonly use PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: TPM can support disk encryption security. Which technology or concept is MOST relevant?",
    "opts": [
      "TPM",
      "microATX",
      "Thermal paste",
      "ATX"
    ],
    "ans": [
      0
    ],
    "why": [
      "TPM: Hardware-backed security functionality for protected keys.",
      "microATX: Smaller motherboard form factor than ATX. This serves a different function from tpm.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from tpm.",
      "ATX: Common full-size motherboard form factor. This serves a different function from tpm."
    ],
    "tip": "TPM can support disk encryption security."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which term describes the following capability: firmware feature checking trusted boot components?",
    "opts": [
      "Secure Boot",
      "Thermal paste",
      "ATX",
      "ARM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure Boot: Firmware feature checking trusted boot components.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from secure boot.",
      "ATX: Common full-size motherboard form factor. This serves a different function from secure boot.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from secure boot."
    ],
    "tip": "Secure Boot helps resist unauthorized bootloaders."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "An IT support specialist needs to identify a component or service that modern platform firmware and boot interface. What should they select?",
    "opts": [
      "UEFI",
      "ARM",
      "ATX",
      "PCIe"
    ],
    "ans": [
      0
    ],
    "why": [
      "UEFI: Modern platform firmware and boot interface.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from uefi.",
      "ATX: Common full-size motherboard form factor. This serves a different function from uefi.",
      "PCIe: High-speed expansion interconnect for cards and SSDs. This serves a different function from uefi."
    ],
    "tip": "Boot mode affects disk and startup compatibility."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: Use appropriate amount when reseating a heatsink. Which technology or concept is MOST relevant?",
    "opts": [
      "Thermal paste",
      "Secure Boot",
      "ATX",
      "PCIe"
    ],
    "ans": [
      0
    ],
    "why": [
      "Thermal paste: Transfers heat between CPU and cooler surfaces.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from thermal paste.",
      "ATX: Common full-size motherboard form factor. This serves a different function from thermal paste.",
      "PCIe: High-speed expansion interconnect for cards and SSDs. This serves a different function from thermal paste."
    ],
    "tip": "Use appropriate amount when reseating a heatsink."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which term describes the following capability: processor instruction set architecture common in mobile systems?",
    "opts": [
      "ARM",
      "Secure Boot",
      "PCIe",
      "Heat sink"
    ],
    "ans": [
      0
    ],
    "why": [
      "ARM: Processor instruction set architecture common in mobile systems.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from arm.",
      "PCIe: High-speed expansion interconnect for cards and SSDs. This serves a different function from arm.",
      "Heat sink: Conducts heat away from a component. This serves a different function from arm."
    ],
    "tip": "ARM and x86/x64 software compatibility can differ."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "An IT support specialist needs to identify a component or service that conducts heat away from a component. What should they select?",
    "opts": [
      "Heat sink",
      "UEFI",
      "microATX",
      "TPM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Heat sink: Conducts heat away from a component.",
      "UEFI: Modern platform firmware and boot interface. This serves a different function from heat sink.",
      "microATX: Smaller motherboard form factor than ATX. This serves a different function from heat sink.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from heat sink."
    ],
    "tip": "A fan moves air but a heatsink conducts heat."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: Case and board form factors must align. Which technology or concept is MOST relevant?",
    "opts": [
      "ATX",
      "Thermal paste",
      "ARM",
      "Heat sink"
    ],
    "ans": [
      0
    ],
    "why": [
      "ATX: Common full-size motherboard form factor.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from atx.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from atx.",
      "Heat sink: Conducts heat away from a component. This serves a different function from atx."
    ],
    "tip": "Case and board form factors must align."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which term describes the following capability: smaller motherboard form factor than ATX?",
    "opts": [
      "microATX",
      "Thermal paste",
      "ATX",
      "Secure Boot"
    ],
    "ans": [
      0
    ],
    "why": [
      "microATX: Smaller motherboard form factor than ATX.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from microatx.",
      "ATX: Common full-size motherboard form factor. This serves a different function from microatx.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from microatx."
    ],
    "tip": "Expansion slots and case fit vary."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "An IT support specialist needs to identify a component or service that high-speed expansion interconnect for cards and SSDs. What should they select?",
    "opts": [
      "PCIe",
      "TPM",
      "UEFI",
      "Heat sink"
    ],
    "ans": [
      0
    ],
    "why": [
      "PCIe: High-speed expansion interconnect for cards and SSDs.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from pcie.",
      "UEFI: Modern platform firmware and boot interface. This serves a different function from pcie.",
      "Heat sink: Conducts heat away from a component. This serves a different function from pcie."
    ],
    "tip": "Video cards commonly use PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: TPM can support disk encryption security. Which technology or concept is MOST relevant?",
    "opts": [
      "TPM",
      "microATX",
      "Thermal paste",
      "UEFI"
    ],
    "ans": [
      0
    ],
    "why": [
      "TPM: Hardware-backed security functionality for protected keys.",
      "microATX: Smaller motherboard form factor than ATX. This serves a different function from tpm.",
      "Thermal paste: Transfers heat between CPU and cooler surfaces. This serves a different function from tpm.",
      "UEFI: Modern platform firmware and boot interface. This serves a different function from tpm."
    ],
    "tip": "TPM can support disk encryption security."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "Which term describes the following capability: firmware feature checking trusted boot components?",
    "opts": [
      "Secure Boot",
      "microATX",
      "PCIe",
      "TPM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure Boot: Firmware feature checking trusted boot components.",
      "microATX: Smaller motherboard form factor than ATX. This serves a different function from secure boot.",
      "PCIe: High-speed expansion interconnect for cards and SSDs. This serves a different function from secure boot.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from secure boot."
    ],
    "tip": "Secure Boot helps resist unauthorized bootloaders."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "An IT support specialist needs to identify a component or service that modern platform firmware and boot interface. What should they select?",
    "opts": [
      "UEFI",
      "ATX",
      "TPM",
      "ARM"
    ],
    "ans": [
      0
    ],
    "why": [
      "UEFI: Modern platform firmware and boot interface.",
      "ATX: Common full-size motherboard form factor. This serves a different function from uefi.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from uefi.",
      "ARM: Processor instruction set architecture common in mobile systems. This serves a different function from uefi."
    ],
    "tip": "Boot mode affects disk and startup compatibility."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.5",
    "q": "A technician encounters this situation: Use appropriate amount when reseating a heatsink. Which technology or concept is MOST relevant?",
    "opts": [
      "Thermal paste",
      "ATX",
      "Secure Boot",
      "TPM"
    ],
    "ans": [
      0
    ],
    "why": [
      "Thermal paste: Transfers heat between CPU and cooler surfaces.",
      "ATX: Common full-size motherboard form factor. This serves a different function from thermal paste.",
      "Secure Boot: Firmware feature checking trusted boot components. This serves a different function from thermal paste.",
      "TPM: Hardware-backed security functionality for protected keys. This serves a different function from thermal paste."
    ],
    "tip": "Use appropriate amount when reseating a heatsink."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Check connector seating before diagnosing no power. Which technology or concept is MOST relevant?",
    "opts": [
      "20+4 pin",
      "Wattage rating",
      "5 V rail",
      "Redundant PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "20+4 pin: Main ATX motherboard power connector.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from 20+4 pin.",
      "5 V rail: Power supply voltage used by various computer circuits. This serves a different function from 20+4 pin.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from 20+4 pin."
    ],
    "tip": "Check connector seating before diagnosing no power."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: power output commonly used for motors and CPU/GPU regulation?",
    "opts": [
      "12 V rail",
      "20+4 pin",
      "Efficiency rating",
      "Redundant PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from 12 v rail.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from 12 v rail.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from 12 v rail."
    ],
    "tip": "Different rails supply different loads."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that power supply voltage used by various computer circuits. What should they select?",
    "opts": [
      "5 V rail",
      "3.3 V rail",
      "Wattage rating",
      "Modular PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "5 V rail: Power supply voltage used by various computer circuits.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from 5 v rail.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from 5 v rail.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from 5 v rail."
    ],
    "tip": "Use a tester rather than guessing voltage."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Power rails are not interchangeable. Which technology or concept is MOST relevant?",
    "opts": [
      "3.3 V rail",
      "12 V rail",
      "20+4 pin",
      "Wattage rating"
    ],
    "ans": [
      0
    ],
    "why": [
      "3.3 V rail: Low-voltage supply for computer electronics.",
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation. This serves a different function from 3.3 v rail.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from 3.3 v rail.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from 3.3 v rail."
    ],
    "tip": "Power rails are not interchangeable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: power supply with detachable output cables?",
    "opts": [
      "Modular PSU",
      "20+4 pin",
      "3.3 V rail",
      "Redundant PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "Modular PSU: Power supply with detachable output cables.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from modular psu.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from modular psu.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from modular psu."
    ],
    "tip": "Use cables approved for the exact PSU model."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that multiple supplies designed for continued operation on failure. What should they select?",
    "opts": [
      "Redundant PSU",
      "Wattage rating",
      "12 V rail",
      "Efficiency rating"
    ],
    "ans": [
      0
    ],
    "why": [
      "Redundant PSU: Multiple supplies designed for continued operation on failure.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from redundant psu.",
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation. This serves a different function from redundant psu.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from redundant psu."
    ],
    "tip": "Redundancy supports availability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Leave headroom for component load. Which technology or concept is MOST relevant?",
    "opts": [
      "Wattage rating",
      "20+4 pin",
      "3.3 V rail",
      "12 V rail"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wattage rating: Maximum specified electrical output capacity.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from wattage rating.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from wattage rating.",
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation. This serves a different function from wattage rating."
    ],
    "tip": "Leave headroom for component load."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: measure of power conversion efficiency?",
    "opts": [
      "Efficiency rating",
      "Modular PSU",
      "12 V rail",
      "Redundant PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "Efficiency rating: Measure of power conversion efficiency.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from efficiency rating.",
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation. This serves a different function from efficiency rating.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from efficiency rating."
    ],
    "tip": "Efficiency is not the same as wattage capacity."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that main ATX motherboard power connector. What should they select?",
    "opts": [
      "20+4 pin",
      "Efficiency rating",
      "Modular PSU",
      "3.3 V rail"
    ],
    "ans": [
      0
    ],
    "why": [
      "20+4 pin: Main ATX motherboard power connector.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from 20+4 pin.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from 20+4 pin.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from 20+4 pin."
    ],
    "tip": "Check connector seating before diagnosing no power."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Different rails supply different loads. Which technology or concept is MOST relevant?",
    "opts": [
      "12 V rail",
      "5 V rail",
      "3.3 V rail",
      "Wattage rating"
    ],
    "ans": [
      0
    ],
    "why": [
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation.",
      "5 V rail: Power supply voltage used by various computer circuits. This serves a different function from 12 v rail.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from 12 v rail.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from 12 v rail."
    ],
    "tip": "Different rails supply different loads."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: power supply voltage used by various computer circuits?",
    "opts": [
      "5 V rail",
      "Redundant PSU",
      "Wattage rating",
      "3.3 V rail"
    ],
    "ans": [
      0
    ],
    "why": [
      "5 V rail: Power supply voltage used by various computer circuits.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from 5 v rail.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from 5 v rail.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from 5 v rail."
    ],
    "tip": "Use a tester rather than guessing voltage."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that low-voltage supply for computer electronics. What should they select?",
    "opts": [
      "3.3 V rail",
      "Efficiency rating",
      "Redundant PSU",
      "20+4 pin"
    ],
    "ans": [
      0
    ],
    "why": [
      "3.3 V rail: Low-voltage supply for computer electronics.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from 3.3 v rail.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from 3.3 v rail.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from 3.3 v rail."
    ],
    "tip": "Power rails are not interchangeable."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Use cables approved for the exact PSU model. Which technology or concept is MOST relevant?",
    "opts": [
      "Modular PSU",
      "Redundant PSU",
      "20+4 pin",
      "3.3 V rail"
    ],
    "ans": [
      0
    ],
    "why": [
      "Modular PSU: Power supply with detachable output cables.",
      "Redundant PSU: Multiple supplies designed for continued operation on failure. This serves a different function from modular psu.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from modular psu.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from modular psu."
    ],
    "tip": "Use cables approved for the exact PSU model."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: multiple supplies designed for continued operation on failure?",
    "opts": [
      "Redundant PSU",
      "Modular PSU",
      "3.3 V rail",
      "Wattage rating"
    ],
    "ans": [
      0
    ],
    "why": [
      "Redundant PSU: Multiple supplies designed for continued operation on failure.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from redundant psu.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from redundant psu.",
      "Wattage rating: Maximum specified electrical output capacity. This serves a different function from redundant psu."
    ],
    "tip": "Redundancy supports availability."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that maximum specified electrical output capacity. What should they select?",
    "opts": [
      "Wattage rating",
      "Efficiency rating",
      "Modular PSU",
      "3.3 V rail"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wattage rating: Maximum specified electrical output capacity.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from wattage rating.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from wattage rating.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from wattage rating."
    ],
    "tip": "Leave headroom for component load."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "A technician encounters this situation: Efficiency is not the same as wattage capacity. Which technology or concept is MOST relevant?",
    "opts": [
      "Efficiency rating",
      "3.3 V rail",
      "Modular PSU",
      "20+4 pin"
    ],
    "ans": [
      0
    ],
    "why": [
      "Efficiency rating: Measure of power conversion efficiency.",
      "3.3 V rail: Low-voltage supply for computer electronics. This serves a different function from efficiency rating.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from efficiency rating.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from efficiency rating."
    ],
    "tip": "Efficiency is not the same as wattage capacity."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "Which term describes the following capability: main ATX motherboard power connector?",
    "opts": [
      "20+4 pin",
      "12 V rail",
      "5 V rail",
      "Modular PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "20+4 pin: Main ATX motherboard power connector.",
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation. This serves a different function from 20+4 pin.",
      "5 V rail: Power supply voltage used by various computer circuits. This serves a different function from 20+4 pin.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from 20+4 pin."
    ],
    "tip": "Check connector seating before diagnosing no power."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.6",
    "q": "An IT support specialist needs to identify a component or service that power output commonly used for motors and CPU/GPU regulation. What should they select?",
    "opts": [
      "12 V rail",
      "20+4 pin",
      "Efficiency rating",
      "Modular PSU"
    ],
    "ans": [
      0
    ],
    "why": [
      "12 V rail: Power output commonly used for motors and CPU/GPU regulation.",
      "20+4 pin: Main ATX motherboard power connector. This serves a different function from 12 v rail.",
      "Efficiency rating: Measure of power conversion efficiency. This serves a different function from 12 v rail.",
      "Modular PSU: Power supply with detachable output cables. This serves a different function from 12 v rail."
    ],
    "tip": "Different rails supply different loads."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Enable duplex to reduce paper use. Which technology or concept is MOST relevant?",
    "opts": [
      "Duplex",
      "Print server",
      "Orientation",
      "Secure print"
    ],
    "ans": [
      0
    ],
    "why": [
      "Duplex: Printer setting to print on both sides.",
      "Print server: Host that manages shared printer jobs. This serves a different function from duplex.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from duplex.",
      "Secure print: Holds jobs until authorized release. This serves a different function from duplex."
    ],
    "tip": "Enable duplex to reduce paper use."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: page setting for portrait or landscape?",
    "opts": [
      "Orientation",
      "PostScript",
      "Duplex",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "Orientation: Page setting for portrait or landscape.",
      "PostScript: Page description language used by many printers. This serves a different function from orientation.",
      "Duplex: Printer setting to print on both sides. This serves a different function from orientation.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from orientation."
    ],
    "tip": "Wrong orientation can look like a layout fault."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that automatic document feeder for multi-page scanning. What should they select?",
    "opts": [
      "ADF",
      "Duplex",
      "Secure print",
      "Orientation"
    ],
    "ans": [
      0
    ],
    "why": [
      "ADF: Automatic document feeder for multi-page scanning.",
      "Duplex: Printer setting to print on both sides. This serves a different function from adf.",
      "Secure print: Holds jobs until authorized release. This serves a different function from adf.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from adf."
    ],
    "tip": "A stack of pages belongs in the feeder."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Driver compatibility affects output. Which technology or concept is MOST relevant?",
    "opts": [
      "PCL",
      "Duplex",
      "ADF",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "PCL: Printer control language for describing print jobs.",
      "Duplex: Printer setting to print on both sides. This serves a different function from pcl.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from pcl.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from pcl."
    ],
    "tip": "Driver compatibility affects output."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: page description language used by many printers?",
    "opts": [
      "PostScript",
      "Print server",
      "Duplex",
      "PCL"
    ],
    "ans": [
      0
    ],
    "why": [
      "PostScript: Page description language used by many printers.",
      "Print server: Host that manages shared printer jobs. This serves a different function from postscript.",
      "Duplex: Printer setting to print on both sides. This serves a different function from postscript.",
      "PCL: Printer control language for describing print jobs. This serves a different function from postscript."
    ],
    "tip": "Incorrect driver language can produce garbled output."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that host that manages shared printer jobs. What should they select?",
    "opts": [
      "Print server",
      "PCL",
      "ADF",
      "PostScript"
    ],
    "ans": [
      0
    ],
    "why": [
      "Print server: Host that manages shared printer jobs.",
      "PCL: Printer control language for describing print jobs. This serves a different function from print server.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from print server.",
      "PostScript: Page description language used by many printers. This serves a different function from print server."
    ],
    "tip": "A stuck shared queue may affect many users."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Protects sensitive pages in shared spaces. Which technology or concept is MOST relevant?",
    "opts": [
      "Secure print",
      "Print server",
      "PCL",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure print: Holds jobs until authorized release.",
      "Print server: Host that manages shared printer jobs. This serves a different function from secure print.",
      "PCL: Printer control language for describing print jobs. This serves a different function from secure print.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from secure print."
    ],
    "tip": "Protects sensitive pages in shared spaces."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: sends scanned documents to a network file share?",
    "opts": [
      "SMB scan",
      "Secure print",
      "Duplex",
      "Orientation"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMB scan: Sends scanned documents to a network file share.",
      "Secure print: Holds jobs until authorized release. This serves a different function from smb scan.",
      "Duplex: Printer setting to print on both sides. This serves a different function from smb scan.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from smb scan."
    ],
    "tip": "Check share permissions and path."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that printer setting to print on both sides. What should they select?",
    "opts": [
      "Duplex",
      "ADF",
      "Secure print",
      "PostScript"
    ],
    "ans": [
      0
    ],
    "why": [
      "Duplex: Printer setting to print on both sides.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from duplex.",
      "Secure print: Holds jobs until authorized release. This serves a different function from duplex.",
      "PostScript: Page description language used by many printers. This serves a different function from duplex."
    ],
    "tip": "Enable duplex to reduce paper use."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Wrong orientation can look like a layout fault. Which technology or concept is MOST relevant?",
    "opts": [
      "Orientation",
      "ADF",
      "Secure print",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "Orientation: Page setting for portrait or landscape.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from orientation.",
      "Secure print: Holds jobs until authorized release. This serves a different function from orientation.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from orientation."
    ],
    "tip": "Wrong orientation can look like a layout fault."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: automatic document feeder for multi-page scanning?",
    "opts": [
      "ADF",
      "Secure print",
      "Orientation",
      "PCL"
    ],
    "ans": [
      0
    ],
    "why": [
      "ADF: Automatic document feeder for multi-page scanning.",
      "Secure print: Holds jobs until authorized release. This serves a different function from adf.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from adf.",
      "PCL: Printer control language for describing print jobs. This serves a different function from adf."
    ],
    "tip": "A stack of pages belongs in the feeder."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that printer control language for describing print jobs. What should they select?",
    "opts": [
      "PCL",
      "PostScript",
      "Orientation",
      "ADF"
    ],
    "ans": [
      0
    ],
    "why": [
      "PCL: Printer control language for describing print jobs.",
      "PostScript: Page description language used by many printers. This serves a different function from pcl.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from pcl.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from pcl."
    ],
    "tip": "Driver compatibility affects output."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Incorrect driver language can produce garbled output. Which technology or concept is MOST relevant?",
    "opts": [
      "PostScript",
      "ADF",
      "Orientation",
      "PCL"
    ],
    "ans": [
      0
    ],
    "why": [
      "PostScript: Page description language used by many printers.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from postscript.",
      "Orientation: Page setting for portrait or landscape. This serves a different function from postscript.",
      "PCL: Printer control language for describing print jobs. This serves a different function from postscript."
    ],
    "tip": "Incorrect driver language can produce garbled output."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: host that manages shared printer jobs?",
    "opts": [
      "Print server",
      "PostScript",
      "PCL",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "Print server: Host that manages shared printer jobs.",
      "PostScript: Page description language used by many printers. This serves a different function from print server.",
      "PCL: Printer control language for describing print jobs. This serves a different function from print server.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from print server."
    ],
    "tip": "A stuck shared queue may affect many users."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that holds jobs until authorized release. What should they select?",
    "opts": [
      "Secure print",
      "PCL",
      "ADF",
      "SMB scan"
    ],
    "ans": [
      0
    ],
    "why": [
      "Secure print: Holds jobs until authorized release.",
      "PCL: Printer control language for describing print jobs. This serves a different function from secure print.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from secure print.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from secure print."
    ],
    "tip": "Protects sensitive pages in shared spaces."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "A technician encounters this situation: Check share permissions and path. Which technology or concept is MOST relevant?",
    "opts": [
      "SMB scan",
      "Print server",
      "Duplex",
      "PCL"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMB scan: Sends scanned documents to a network file share.",
      "Print server: Host that manages shared printer jobs. This serves a different function from smb scan.",
      "Duplex: Printer setting to print on both sides. This serves a different function from smb scan.",
      "PCL: Printer control language for describing print jobs. This serves a different function from smb scan."
    ],
    "tip": "Check share permissions and path."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "Which term describes the following capability: printer setting to print on both sides?",
    "opts": [
      "Duplex",
      "ADF",
      "SMB scan",
      "PostScript"
    ],
    "ans": [
      0
    ],
    "why": [
      "Duplex: Printer setting to print on both sides.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from duplex.",
      "SMB scan: Sends scanned documents to a network file share. This serves a different function from duplex.",
      "PostScript: Page description language used by many printers. This serves a different function from duplex."
    ],
    "tip": "Enable duplex to reduce paper use."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.7",
    "q": "An IT support specialist needs to identify a component or service that page setting for portrait or landscape. What should they select?",
    "opts": [
      "Orientation",
      "PostScript",
      "PCL",
      "ADF"
    ],
    "ans": [
      0
    ],
    "why": [
      "Orientation: Page setting for portrait or landscape.",
      "PostScript: Page description language used by many printers. This serves a different function from orientation.",
      "PCL: Printer control language for describing print jobs. This serves a different function from orientation.",
      "ADF: Automatic document feeder for multi-page scanning. This serves a different function from orientation."
    ],
    "tip": "Wrong orientation can look like a layout fault."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Faded laser output can indicate low toner. Which technology or concept is MOST relevant?",
    "opts": [
      "Laser toner",
      "Pickup roller",
      "Impact ribbon",
      "Thermal paper"
    ],
    "ans": [
      0
    ],
    "why": [
      "Laser toner: Powder used in laser printing.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from laser toner.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from laser toner.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from laser toner."
    ],
    "tip": "Faded laser output can indicate low toner."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: nozzle assembly that deposits ink?",
    "opts": [
      "Inkjet printhead",
      "Pickup roller",
      "Laser maintenance kit",
      "Impact ribbon"
    ],
    "ans": [
      0
    ],
    "why": [
      "Inkjet printhead: Nozzle assembly that deposits ink.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from inkjet printhead.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from inkjet printhead.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from inkjet printhead."
    ],
    "tip": "Streaking may call for printhead cleaning."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that heat-sensitive paper used by thermal printers. What should they select?",
    "opts": [
      "Thermal paper",
      "Impact ribbon",
      "Laser toner",
      "Laser maintenance kit"
    ],
    "ans": [
      0
    ],
    "why": [
      "Thermal paper: Heat-sensitive paper used by thermal printers.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from thermal paper.",
      "Laser toner: Powder used in laser printing. This serves a different function from thermal paper.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from thermal paper."
    ],
    "tip": "Ordinary paper may not work in direct thermal units."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Faded impact output may need a new ribbon. Which technology or concept is MOST relevant?",
    "opts": [
      "Impact ribbon",
      "Laser toner",
      "Pickup roller",
      "Calibrate printer"
    ],
    "ans": [
      0
    ],
    "why": [
      "Impact ribbon: Ink ribbon struck by an impact printhead.",
      "Laser toner: Powder used in laser printing. This serves a different function from impact ribbon.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from impact ribbon.",
      "Calibrate printer: Adjusts printer output alignment or quality. This serves a different function from impact ribbon."
    ],
    "tip": "Faded impact output may need a new ribbon."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: replaceable service components for laser printers?",
    "opts": [
      "Laser maintenance kit",
      "Pickup roller",
      "Thermal paper",
      "Impact ribbon"
    ],
    "ans": [
      0
    ],
    "why": [
      "Laser maintenance kit: Replaceable service components for laser printers.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from laser maintenance kit.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from laser maintenance kit.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from laser maintenance kit."
    ],
    "tip": "Maintenance intervals vary by device."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that roller that feeds sheets into a printer. What should they select?",
    "opts": [
      "Pickup roller",
      "Thermal paper",
      "Laser maintenance kit",
      "Impact ribbon"
    ],
    "ans": [
      0
    ],
    "why": [
      "Pickup roller: Roller that feeds sheets into a printer.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from pickup roller.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from pickup roller.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from pickup roller."
    ],
    "tip": "Worn rollers can cause feed failures."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Calibration can address output consistency. Which technology or concept is MOST relevant?",
    "opts": [
      "Calibrate printer",
      "Laser toner",
      "Inkjet printhead",
      "Laser maintenance kit"
    ],
    "ans": [
      0
    ],
    "why": [
      "Calibrate printer: Adjusts printer output alignment or quality.",
      "Laser toner: Powder used in laser printing. This serves a different function from calibrate printer.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from calibrate printer.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from calibrate printer."
    ],
    "tip": "Calibration can address output consistency."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: powder used in laser printing?",
    "opts": [
      "Laser toner",
      "Impact ribbon",
      "Thermal paper",
      "Laser maintenance kit"
    ],
    "ans": [
      0
    ],
    "why": [
      "Laser toner: Powder used in laser printing.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from laser toner.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from laser toner.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from laser toner."
    ],
    "tip": "Faded laser output can indicate low toner."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that nozzle assembly that deposits ink. What should they select?",
    "opts": [
      "Inkjet printhead",
      "Laser toner",
      "Pickup roller",
      "Impact ribbon"
    ],
    "ans": [
      0
    ],
    "why": [
      "Inkjet printhead: Nozzle assembly that deposits ink.",
      "Laser toner: Powder used in laser printing. This serves a different function from inkjet printhead.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from inkjet printhead.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from inkjet printhead."
    ],
    "tip": "Streaking may call for printhead cleaning."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Ordinary paper may not work in direct thermal units. Which technology or concept is MOST relevant?",
    "opts": [
      "Thermal paper",
      "Laser toner",
      "Inkjet printhead",
      "Pickup roller"
    ],
    "ans": [
      0
    ],
    "why": [
      "Thermal paper: Heat-sensitive paper used by thermal printers.",
      "Laser toner: Powder used in laser printing. This serves a different function from thermal paper.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from thermal paper.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from thermal paper."
    ],
    "tip": "Ordinary paper may not work in direct thermal units."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: ink ribbon struck by an impact printhead?",
    "opts": [
      "Impact ribbon",
      "Inkjet printhead",
      "Thermal paper",
      "Calibrate printer"
    ],
    "ans": [
      0
    ],
    "why": [
      "Impact ribbon: Ink ribbon struck by an impact printhead.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from impact ribbon.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from impact ribbon.",
      "Calibrate printer: Adjusts printer output alignment or quality. This serves a different function from impact ribbon."
    ],
    "tip": "Faded impact output may need a new ribbon."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that replaceable service components for laser printers. What should they select?",
    "opts": [
      "Laser maintenance kit",
      "Thermal paper",
      "Laser toner",
      "Pickup roller"
    ],
    "ans": [
      0
    ],
    "why": [
      "Laser maintenance kit: Replaceable service components for laser printers.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from laser maintenance kit.",
      "Laser toner: Powder used in laser printing. This serves a different function from laser maintenance kit.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from laser maintenance kit."
    ],
    "tip": "Maintenance intervals vary by device."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Worn rollers can cause feed failures. Which technology or concept is MOST relevant?",
    "opts": [
      "Pickup roller",
      "Impact ribbon",
      "Thermal paper",
      "Laser maintenance kit"
    ],
    "ans": [
      0
    ],
    "why": [
      "Pickup roller: Roller that feeds sheets into a printer.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from pickup roller.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from pickup roller.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from pickup roller."
    ],
    "tip": "Worn rollers can cause feed failures."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: adjusts printer output alignment or quality?",
    "opts": [
      "Calibrate printer",
      "Pickup roller",
      "Thermal paper",
      "Inkjet printhead"
    ],
    "ans": [
      0
    ],
    "why": [
      "Calibrate printer: Adjusts printer output alignment or quality.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from calibrate printer.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from calibrate printer.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from calibrate printer."
    ],
    "tip": "Calibration can address output consistency."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that powder used in laser printing. What should they select?",
    "opts": [
      "Laser toner",
      "Impact ribbon",
      "Inkjet printhead",
      "Pickup roller"
    ],
    "ans": [
      0
    ],
    "why": [
      "Laser toner: Powder used in laser printing.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from laser toner.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from laser toner.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from laser toner."
    ],
    "tip": "Faded laser output can indicate low toner."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "A technician encounters this situation: Streaking may call for printhead cleaning. Which technology or concept is MOST relevant?",
    "opts": [
      "Inkjet printhead",
      "Laser maintenance kit",
      "Impact ribbon",
      "Pickup roller"
    ],
    "ans": [
      0
    ],
    "why": [
      "Inkjet printhead: Nozzle assembly that deposits ink.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from inkjet printhead.",
      "Impact ribbon: Ink ribbon struck by an impact printhead. This serves a different function from inkjet printhead.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from inkjet printhead."
    ],
    "tip": "Streaking may call for printhead cleaning."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "Which term describes the following capability: heat-sensitive paper used by thermal printers?",
    "opts": [
      "Thermal paper",
      "Laser toner",
      "Pickup roller",
      "Laser maintenance kit"
    ],
    "ans": [
      0
    ],
    "why": [
      "Thermal paper: Heat-sensitive paper used by thermal printers.",
      "Laser toner: Powder used in laser printing. This serves a different function from thermal paper.",
      "Pickup roller: Roller that feeds sheets into a printer. This serves a different function from thermal paper.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from thermal paper."
    ],
    "tip": "Ordinary paper may not work in direct thermal units."
  },
  {
    "domain": "3.0 Hardware",
    "obj": "3.8",
    "q": "An IT support specialist needs to identify a component or service that ink ribbon struck by an impact printhead. What should they select?",
    "opts": [
      "Impact ribbon",
      "Laser maintenance kit",
      "Thermal paper",
      "Inkjet printhead"
    ],
    "ans": [
      0
    ],
    "why": [
      "Impact ribbon: Ink ribbon struck by an impact printhead.",
      "Laser maintenance kit: Replaceable service components for laser printers. This serves a different function from impact ribbon.",
      "Thermal paper: Heat-sensitive paper used by thermal printers. This serves a different function from impact ribbon.",
      "Inkjet printhead: Nozzle assembly that deposits ink. This serves a different function from impact ribbon."
    ],
    "tip": "Faded impact output may need a new ribbon."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: Bare-metal hosts do not require a desktop OS underneath. Which technology or concept is MOST relevant?",
    "opts": [
      "Type 1 hypervisor",
      "VM",
      "VDI",
      "Type 2 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from type 1 hypervisor.",
      "VDI: Remote delivery of centrally hosted desktop sessions. This serves a different function from type 1 hypervisor.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from type 1 hypervisor."
    ],
    "tip": "Bare-metal hosts do not require a desktop OS underneath."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which term describes the following capability: virtualization software running on a host operating system?",
    "opts": [
      "Type 2 hypervisor",
      "Application virtualization",
      "VM",
      "Container"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 2 hypervisor: Virtualization software running on a host operating system.",
      "Application virtualization: Runs applications in a virtualized environment. This serves a different function from type 2 hypervisor.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from type 2 hypervisor.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from type 2 hypervisor."
    ],
    "tip": "Hosted virtualization is convenient for desktop labs."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "An IT support specialist needs to identify a component or service that isolated virtual computer with its own guest OS. What should they select?",
    "opts": [
      "VM",
      "Application virtualization",
      "Type 2 hypervisor",
      "VDI"
    ],
    "ans": [
      0
    ],
    "why": [
      "VM: Isolated virtual computer with its own guest OS.",
      "Application virtualization: Runs applications in a virtualized environment. This serves a different function from vm.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from vm.",
      "VDI: Remote delivery of centrally hosted desktop sessions. This serves a different function from vm."
    ],
    "tip": "A VM usually includes a complete operating system."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: Containers are lighter than full guest VMs. Which technology or concept is MOST relevant?",
    "opts": [
      "Container",
      "Sandbox",
      "Application virtualization",
      "Type 1 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Container: Isolated application environment sharing a host kernel.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from container.",
      "Application virtualization: Runs applications in a virtualized environment. This serves a different function from container.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from container."
    ],
    "tip": "Containers are lighter than full guest VMs."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which term describes the following capability: remote delivery of centrally hosted desktop sessions?",
    "opts": [
      "VDI",
      "Container",
      "VM",
      "Type 1 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "VDI: Remote delivery of centrally hosted desktop sessions.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from vdi.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from vdi.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from vdi."
    ],
    "tip": "User desktops can run in a data center."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "An IT support specialist needs to identify a component or service that isolated environment for safely testing software. What should they select?",
    "opts": [
      "Sandbox",
      "Container",
      "Type 1 hypervisor",
      "Type 2 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Sandbox: Isolated environment for safely testing software.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from sandbox.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from sandbox.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from sandbox."
    ],
    "tip": "Test untrusted changes away from production."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: Legacy software may need compatibility isolation. Which technology or concept is MOST relevant?",
    "opts": [
      "Application virtualization",
      "Type 2 hypervisor",
      "Type 1 hypervisor",
      "Sandbox"
    ],
    "ans": [
      0
    ],
    "why": [
      "Application virtualization: Runs applications in a virtualized environment.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from application virtualization.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from application virtualization.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from application virtualization."
    ],
    "tip": "Legacy software may need compatibility isolation."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which term describes the following capability: virtualization layer running directly on physical hardware?",
    "opts": [
      "Type 1 hypervisor",
      "Type 2 hypervisor",
      "Container",
      "Sandbox"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from type 1 hypervisor.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from type 1 hypervisor.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from type 1 hypervisor."
    ],
    "tip": "Bare-metal hosts do not require a desktop OS underneath."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "An IT support specialist needs to identify a component or service that virtualization software running on a host operating system. What should they select?",
    "opts": [
      "Type 2 hypervisor",
      "Container",
      "Sandbox",
      "VDI"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 2 hypervisor: Virtualization software running on a host operating system.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from type 2 hypervisor.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from type 2 hypervisor.",
      "VDI: Remote delivery of centrally hosted desktop sessions. This serves a different function from type 2 hypervisor."
    ],
    "tip": "Hosted virtualization is convenient for desktop labs."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: A VM usually includes a complete operating system. Which technology or concept is MOST relevant?",
    "opts": [
      "VM",
      "Container",
      "Application virtualization",
      "Sandbox"
    ],
    "ans": [
      0
    ],
    "why": [
      "VM: Isolated virtual computer with its own guest OS.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from vm.",
      "Application virtualization: Runs applications in a virtualized environment. This serves a different function from vm.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from vm."
    ],
    "tip": "A VM usually includes a complete operating system."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which term describes the following capability: isolated application environment sharing a host kernel?",
    "opts": [
      "Container",
      "VDI",
      "VM",
      "Sandbox"
    ],
    "ans": [
      0
    ],
    "why": [
      "Container: Isolated application environment sharing a host kernel.",
      "VDI: Remote delivery of centrally hosted desktop sessions. This serves a different function from container.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from container.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from container."
    ],
    "tip": "Containers are lighter than full guest VMs."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "An IT support specialist needs to identify a component or service that remote delivery of centrally hosted desktop sessions. What should they select?",
    "opts": [
      "VDI",
      "Type 2 hypervisor",
      "Sandbox",
      "Type 1 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "VDI: Remote delivery of centrally hosted desktop sessions.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from vdi.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from vdi.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from vdi."
    ],
    "tip": "User desktops can run in a data center."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: Test untrusted changes away from production. Which technology or concept is MOST relevant?",
    "opts": [
      "Sandbox",
      "Application virtualization",
      "VM",
      "Container"
    ],
    "ans": [
      0
    ],
    "why": [
      "Sandbox: Isolated environment for safely testing software.",
      "Application virtualization: Runs applications in a virtualized environment. This serves a different function from sandbox.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from sandbox.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from sandbox."
    ],
    "tip": "Test untrusted changes away from production."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "Which term describes the following capability: runs applications in a virtualized environment?",
    "opts": [
      "Application virtualization",
      "Sandbox",
      "Type 1 hypervisor",
      "Type 2 hypervisor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Application virtualization: Runs applications in a virtualized environment.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from application virtualization.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from application virtualization.",
      "Type 2 hypervisor: Virtualization software running on a host operating system. This serves a different function from application virtualization."
    ],
    "tip": "Legacy software may need compatibility isolation."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "An IT support specialist needs to identify a component or service that virtualization layer running directly on physical hardware. What should they select?",
    "opts": [
      "Type 1 hypervisor",
      "Sandbox",
      "VM",
      "Container"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware.",
      "Sandbox: Isolated environment for safely testing software. This serves a different function from type 1 hypervisor.",
      "VM: Isolated virtual computer with its own guest OS. This serves a different function from type 1 hypervisor.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from type 1 hypervisor."
    ],
    "tip": "Bare-metal hosts do not require a desktop OS underneath."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.1",
    "q": "A technician encounters this situation: Hosted virtualization is convenient for desktop labs. Which technology or concept is MOST relevant?",
    "opts": [
      "Type 2 hypervisor",
      "VDI",
      "Type 1 hypervisor",
      "Container"
    ],
    "ans": [
      0
    ],
    "why": [
      "Type 2 hypervisor: Virtualization software running on a host operating system.",
      "VDI: Remote delivery of centrally hosted desktop sessions. This serves a different function from type 2 hypervisor.",
      "Type 1 hypervisor: Virtualization layer running directly on physical hardware. This serves a different function from type 2 hypervisor.",
      "Container: Isolated application environment sharing a host kernel. This serves a different function from type 2 hypervisor."
    ],
    "tip": "Hosted virtualization is convenient for desktop labs."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Customer typically manages guest operating systems. Which technology or concept is MOST relevant?",
    "opts": [
      "IaaS",
      "Public cloud",
      "Elasticity",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "IaaS: Cloud delivery of virtual infrastructure resources.",
      "Public cloud: Shared provider infrastructure offered broadly. This serves a different function from iaas.",
      "Elasticity: Ability to scale resources with demand. This serves a different function from iaas.",
      "SaaS: Complete provider-hosted application. This serves a different function from iaas."
    ],
    "tip": "Customer typically manages guest operating systems."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which term describes the following capability: cloud-managed application development and runtime platform?",
    "opts": [
      "PaaS",
      "Multitenancy",
      "Metered utilization",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "PaaS: Cloud-managed application development and runtime platform.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from paas.",
      "Metered utilization: Resource usage measured for billing or control. This serves a different function from paas.",
      "SaaS: Complete provider-hosted application. This serves a different function from paas."
    ],
    "tip": "Developers focus on code instead of servers."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "An IT support specialist needs to identify a component or service that complete provider-hosted application. What should they select?",
    "opts": [
      "SaaS",
      "Multitenancy",
      "Public cloud",
      "Private cloud"
    ],
    "ans": [
      0
    ],
    "why": [
      "SaaS: Complete provider-hosted application.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from saas.",
      "Public cloud: Shared provider infrastructure offered broadly. This serves a different function from saas.",
      "Private cloud: Cloud environment dedicated to one organization. This serves a different function from saas."
    ],
    "tip": "Users consume software through a service."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Shared infrastructure does not imply public data. Which technology or concept is MOST relevant?",
    "opts": [
      "Public cloud",
      "SaaS",
      "Private cloud",
      "Metered utilization"
    ],
    "ans": [
      0
    ],
    "why": [
      "Public cloud: Shared provider infrastructure offered broadly.",
      "SaaS: Complete provider-hosted application. This serves a different function from public cloud.",
      "Private cloud: Cloud environment dedicated to one organization. This serves a different function from public cloud.",
      "Metered utilization: Resource usage measured for billing or control. This serves a different function from public cloud."
    ],
    "tip": "Shared infrastructure does not imply public data."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which term describes the following capability: cloud environment dedicated to one organization?",
    "opts": [
      "Private cloud",
      "Metered utilization",
      "Multitenancy",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Private cloud: Cloud environment dedicated to one organization.",
      "Metered utilization: Resource usage measured for billing or control. This serves a different function from private cloud.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from private cloud.",
      "SaaS: Complete provider-hosted application. This serves a different function from private cloud."
    ],
    "tip": "Dedicated governance can influence placement."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "An IT support specialist needs to identify a component or service that architecture combining private and public environments. What should they select?",
    "opts": [
      "Hybrid cloud",
      "PaaS",
      "IaaS",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Hybrid cloud: Architecture combining private and public environments.",
      "PaaS: Cloud-managed application development and runtime platform. This serves a different function from hybrid cloud.",
      "IaaS: Cloud delivery of virtual infrastructure resources. This serves a different function from hybrid cloud.",
      "SaaS: Complete provider-hosted application. This serves a different function from hybrid cloud."
    ],
    "tip": "Workloads can span different deployment models."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Temporary demand can trigger scaling. Which technology or concept is MOST relevant?",
    "opts": [
      "Elasticity",
      "Hybrid cloud",
      "Multitenancy",
      "PaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Elasticity: Ability to scale resources with demand.",
      "Hybrid cloud: Architecture combining private and public environments. This serves a different function from elasticity.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from elasticity.",
      "PaaS: Cloud-managed application development and runtime platform. This serves a different function from elasticity."
    ],
    "tip": "Temporary demand can trigger scaling."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which term describes the following capability: resource usage measured for billing or control?",
    "opts": [
      "Metered utilization",
      "Public cloud",
      "Private cloud",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Metered utilization: Resource usage measured for billing or control.",
      "Public cloud: Shared provider infrastructure offered broadly. This serves a different function from metered utilization.",
      "Private cloud: Cloud environment dedicated to one organization. This serves a different function from metered utilization.",
      "SaaS: Complete provider-hosted application. This serves a different function from metered utilization."
    ],
    "tip": "Watch compute and data egress charges."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "An IT support specialist needs to identify a component or service that multiple customers share underlying infrastructure with isolation. What should they select?",
    "opts": [
      "Multitenancy",
      "Hybrid cloud",
      "Public cloud",
      "PaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Multitenancy: Multiple customers share underlying infrastructure with isolation.",
      "Hybrid cloud: Architecture combining private and public environments. This serves a different function from multitenancy.",
      "Public cloud: Shared provider infrastructure offered broadly. This serves a different function from multitenancy.",
      "PaaS: Cloud-managed application development and runtime platform. This serves a different function from multitenancy."
    ],
    "tip": "Tenant separation is critical."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Customer typically manages guest operating systems. Which technology or concept is MOST relevant?",
    "opts": [
      "IaaS",
      "Multitenancy",
      "Metered utilization",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "IaaS: Cloud delivery of virtual infrastructure resources.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from iaas.",
      "Metered utilization: Resource usage measured for billing or control. This serves a different function from iaas.",
      "SaaS: Complete provider-hosted application. This serves a different function from iaas."
    ],
    "tip": "Customer typically manages guest operating systems."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which term describes the following capability: cloud-managed application development and runtime platform?",
    "opts": [
      "PaaS",
      "SaaS",
      "Hybrid cloud",
      "Elasticity"
    ],
    "ans": [
      0
    ],
    "why": [
      "PaaS: Cloud-managed application development and runtime platform.",
      "SaaS: Complete provider-hosted application. This serves a different function from paas.",
      "Hybrid cloud: Architecture combining private and public environments. This serves a different function from paas.",
      "Elasticity: Ability to scale resources with demand. This serves a different function from paas."
    ],
    "tip": "Developers focus on code instead of servers."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "An IT support specialist needs to identify a component or service that complete provider-hosted application. What should they select?",
    "opts": [
      "SaaS",
      "Multitenancy",
      "IaaS",
      "Elasticity"
    ],
    "ans": [
      0
    ],
    "why": [
      "SaaS: Complete provider-hosted application.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from saas.",
      "IaaS: Cloud delivery of virtual infrastructure resources. This serves a different function from saas.",
      "Elasticity: Ability to scale resources with demand. This serves a different function from saas."
    ],
    "tip": "Users consume software through a service."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Shared infrastructure does not imply public data. Which technology or concept is MOST relevant?",
    "opts": [
      "Public cloud",
      "Hybrid cloud",
      "Private cloud",
      "SaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Public cloud: Shared provider infrastructure offered broadly.",
      "Hybrid cloud: Architecture combining private and public environments. This serves a different function from public cloud.",
      "Private cloud: Cloud environment dedicated to one organization. This serves a different function from public cloud.",
      "SaaS: Complete provider-hosted application. This serves a different function from public cloud."
    ],
    "tip": "Shared infrastructure does not imply public data."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "Which term describes the following capability: cloud environment dedicated to one organization?",
    "opts": [
      "Private cloud",
      "Multitenancy",
      "Hybrid cloud",
      "Elasticity"
    ],
    "ans": [
      0
    ],
    "why": [
      "Private cloud: Cloud environment dedicated to one organization.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from private cloud.",
      "Hybrid cloud: Architecture combining private and public environments. This serves a different function from private cloud.",
      "Elasticity: Ability to scale resources with demand. This serves a different function from private cloud."
    ],
    "tip": "Dedicated governance can influence placement."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "An IT support specialist needs to identify a component or service that architecture combining private and public environments. What should they select?",
    "opts": [
      "Hybrid cloud",
      "Elasticity",
      "PaaS",
      "Private cloud"
    ],
    "ans": [
      0
    ],
    "why": [
      "Hybrid cloud: Architecture combining private and public environments.",
      "Elasticity: Ability to scale resources with demand. This serves a different function from hybrid cloud.",
      "PaaS: Cloud-managed application development and runtime platform. This serves a different function from hybrid cloud.",
      "Private cloud: Cloud environment dedicated to one organization. This serves a different function from hybrid cloud."
    ],
    "tip": "Workloads can span different deployment models."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "obj": "4.2",
    "q": "A technician encounters this situation: Temporary demand can trigger scaling. Which technology or concept is MOST relevant?",
    "opts": [
      "Elasticity",
      "Metered utilization",
      "Multitenancy",
      "PaaS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Elasticity: Ability to scale resources with demand.",
      "Metered utilization: Resource usage measured for billing or control. This serves a different function from elasticity.",
      "Multitenancy: Multiple customers share underlying infrastructure with isolation. This serves a different function from elasticity.",
      "PaaS: Cloud-managed application development and runtime platform. This serves a different function from elasticity."
    ],
    "tip": "Temporary demand can trigger scaling."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Interpret beep patterns using vendor documentation. Which technology or concept is MOST relevant?",
    "opts": [
      "POST beeps",
      "No power",
      "Overheating",
      "Application crash"
    ],
    "ans": [
      0
    ],
    "why": [
      "POST beeps: Startup diagnostic sound codes for hardware checks.",
      "No power: System shows no sign of electrical startup. This serves a different function from post beeps.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from post beeps.",
      "Application crash: Program unexpectedly stops running. This serves a different function from post beeps."
    ],
    "tip": "Interpret beep patterns using vendor documentation."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: excessive component temperature affecting stability?",
    "opts": [
      "Overheating",
      "POST beeps",
      "Incorrect date/time",
      "Swollen capacitor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Overheating: Excessive component temperature affecting stability.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from overheating.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from overheating.",
      "Swollen capacitor: Physical sign of possible motherboard failure. This serves a different function from overheating."
    ],
    "tip": "Check fans dust and heatsink contact."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "An IT support specialist needs to identify a component or service that unexpected loss of system operation. What should they select?",
    "opts": [
      "Random shutdown",
      "No power",
      "Incorrect date/time",
      "POST beeps"
    ],
    "ans": [
      0
    ],
    "why": [
      "Random shutdown: Unexpected loss of system operation.",
      "No power: System shows no sign of electrical startup. This serves a different function from random shutdown.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from random shutdown.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from random shutdown."
    ],
    "tip": "Check thermal and power conditions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Do not ignore bulging board components. Which technology or concept is MOST relevant?",
    "opts": [
      "Swollen capacitor",
      "No power",
      "Random shutdown",
      "Overheating"
    ],
    "ans": [
      0
    ],
    "why": [
      "Swollen capacitor: Physical sign of possible motherboard failure.",
      "No power: System shows no sign of electrical startup. This serves a different function from swollen capacitor.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from swollen capacitor.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from swollen capacitor."
    ],
    "tip": "Do not ignore bulging board components."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: clock settings that reset or drift?",
    "opts": [
      "Incorrect date/time",
      "Application crash",
      "Overheating",
      "No power"
    ],
    "ans": [
      0
    ],
    "why": [
      "Incorrect date/time: Clock settings that reset or drift.",
      "Application crash: Program unexpectedly stops running. This serves a different function from incorrect date/time.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from incorrect date/time.",
      "No power: System shows no sign of electrical startup. This serves a different function from incorrect date/time."
    ],
    "tip": "A failing CMOS battery may be involved."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "An IT support specialist needs to identify a component or service that system shows no sign of electrical startup. What should they select?",
    "opts": [
      "No power",
      "Overheating",
      "Incorrect date/time",
      "Random shutdown"
    ],
    "ans": [
      0
    ],
    "why": [
      "No power: System shows no sign of electrical startup.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from no power.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from no power.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from no power."
    ],
    "tip": "Verify outlet PSU switch and power connections."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Distinguish app faults from hardware instability. Which technology or concept is MOST relevant?",
    "opts": [
      "Application crash",
      "Random shutdown",
      "Overheating",
      "POST beeps"
    ],
    "ans": [
      0
    ],
    "why": [
      "Application crash: Program unexpectedly stops running.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from application crash.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from application crash.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from application crash."
    ],
    "tip": "Distinguish app faults from hardware instability."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: startup diagnostic sound codes for hardware checks?",
    "opts": [
      "POST beeps",
      "Random shutdown",
      "Overheating",
      "No power"
    ],
    "ans": [
      0
    ],
    "why": [
      "POST beeps: Startup diagnostic sound codes for hardware checks.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from post beeps.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from post beeps.",
      "No power: System shows no sign of electrical startup. This serves a different function from post beeps."
    ],
    "tip": "Interpret beep patterns using vendor documentation."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "An IT support specialist needs to identify a component or service that excessive component temperature affecting stability. What should they select?",
    "opts": [
      "Overheating",
      "Random shutdown",
      "Application crash",
      "Incorrect date/time"
    ],
    "ans": [
      0
    ],
    "why": [
      "Overheating: Excessive component temperature affecting stability.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from overheating.",
      "Application crash: Program unexpectedly stops running. This serves a different function from overheating.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from overheating."
    ],
    "tip": "Check fans dust and heatsink contact."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Check thermal and power conditions. Which technology or concept is MOST relevant?",
    "opts": [
      "Random shutdown",
      "Overheating",
      "No power",
      "Swollen capacitor"
    ],
    "ans": [
      0
    ],
    "why": [
      "Random shutdown: Unexpected loss of system operation.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from random shutdown.",
      "No power: System shows no sign of electrical startup. This serves a different function from random shutdown.",
      "Swollen capacitor: Physical sign of possible motherboard failure. This serves a different function from random shutdown."
    ],
    "tip": "Check thermal and power conditions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: physical sign of possible motherboard failure?",
    "opts": [
      "Swollen capacitor",
      "Random shutdown",
      "No power",
      "Incorrect date/time"
    ],
    "ans": [
      0
    ],
    "why": [
      "Swollen capacitor: Physical sign of possible motherboard failure.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from swollen capacitor.",
      "No power: System shows no sign of electrical startup. This serves a different function from swollen capacitor.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from swollen capacitor."
    ],
    "tip": "Do not ignore bulging board components."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "An IT support specialist needs to identify a component or service that clock settings that reset or drift. What should they select?",
    "opts": [
      "Incorrect date/time",
      "Random shutdown",
      "Overheating",
      "Application crash"
    ],
    "ans": [
      0
    ],
    "why": [
      "Incorrect date/time: Clock settings that reset or drift.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from incorrect date/time.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from incorrect date/time.",
      "Application crash: Program unexpectedly stops running. This serves a different function from incorrect date/time."
    ],
    "tip": "A failing CMOS battery may be involved."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Verify outlet PSU switch and power connections. Which technology or concept is MOST relevant?",
    "opts": [
      "No power",
      "Random shutdown",
      "Incorrect date/time",
      "POST beeps"
    ],
    "ans": [
      0
    ],
    "why": [
      "No power: System shows no sign of electrical startup.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from no power.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from no power.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from no power."
    ],
    "tip": "Verify outlet PSU switch and power connections."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: program unexpectedly stops running?",
    "opts": [
      "Application crash",
      "POST beeps",
      "Incorrect date/time",
      "Random shutdown"
    ],
    "ans": [
      0
    ],
    "why": [
      "Application crash: Program unexpectedly stops running.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from application crash.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from application crash.",
      "Random shutdown: Unexpected loss of system operation. This serves a different function from application crash."
    ],
    "tip": "Distinguish app faults from hardware instability."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "An IT support specialist needs to identify a component or service that startup diagnostic sound codes for hardware checks. What should they select?",
    "opts": [
      "POST beeps",
      "Incorrect date/time",
      "Overheating",
      "Application crash"
    ],
    "ans": [
      0
    ],
    "why": [
      "POST beeps: Startup diagnostic sound codes for hardware checks.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from post beeps.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from post beeps.",
      "Application crash: Program unexpectedly stops running. This serves a different function from post beeps."
    ],
    "tip": "Interpret beep patterns using vendor documentation."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "A technician encounters this situation: Check fans dust and heatsink contact. Which technology or concept is MOST relevant?",
    "opts": [
      "Overheating",
      "Application crash",
      "Swollen capacitor",
      "Incorrect date/time"
    ],
    "ans": [
      0
    ],
    "why": [
      "Overheating: Excessive component temperature affecting stability.",
      "Application crash: Program unexpectedly stops running. This serves a different function from overheating.",
      "Swollen capacitor: Physical sign of possible motherboard failure. This serves a different function from overheating.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from overheating."
    ],
    "tip": "Check fans dust and heatsink contact."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.1",
    "q": "Which term describes the following capability: unexpected loss of system operation?",
    "opts": [
      "Random shutdown",
      "POST beeps",
      "Incorrect date/time",
      "Overheating"
    ],
    "ans": [
      0
    ],
    "why": [
      "Random shutdown: Unexpected loss of system operation.",
      "POST beeps: Startup diagnostic sound codes for hardware checks. This serves a different function from random shutdown.",
      "Incorrect date/time: Clock settings that reset or drift. This serves a different function from random shutdown.",
      "Overheating: Excessive component temperature affecting stability. This serves a different function from random shutdown."
    ],
    "tip": "Check thermal and power conditions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Back up data before investigating replacement. Which technology or concept is MOST relevant?",
    "opts": [
      "SMART alert",
      "Clicking HDD",
      "Boot device not found",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMART alert: Drive health monitoring warning of possible failure.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from smart alert.",
      "Boot device not found: Firmware cannot locate a bootable storage target. This serves a different function from smart alert.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from smart alert."
    ],
    "tip": "Back up data before investigating replacement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: repeated mechanical drive clicking?",
    "opts": [
      "Clicking HDD",
      "RAID failure",
      "Low IOPS",
      "Data corruption"
    ],
    "ans": [
      0
    ],
    "why": [
      "Clicking HDD: Repeated mechanical drive clicking.",
      "RAID failure: Loss or degradation of a disk array. This serves a different function from clicking hdd.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from clicking hdd.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from clicking hdd."
    ],
    "tip": "Mechanical noise can signal impending failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "An IT support specialist needs to identify a component or service that loss or degradation of a disk array. What should they select?",
    "opts": [
      "RAID failure",
      "Low IOPS",
      "Clicking HDD",
      "SMART alert"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID failure: Loss or degradation of a disk array.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from raid failure.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from raid failure.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from raid failure."
    ],
    "tip": "Check array status and failed member identification."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Inspect boot order and drive detection. Which technology or concept is MOST relevant?",
    "opts": [
      "Boot device not found",
      "Missing drive",
      "RAID failure",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Boot device not found: Firmware cannot locate a bootable storage target.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from boot device not found.",
      "RAID failure: Loss or degradation of a disk array. This serves a different function from boot device not found.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from boot device not found."
    ],
    "tip": "Inspect boot order and drive detection."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: insufficient input/output operations per second?",
    "opts": [
      "Low IOPS",
      "SMART alert",
      "Data corruption",
      "Missing drive"
    ],
    "ans": [
      0
    ],
    "why": [
      "Low IOPS: Insufficient input/output operations per second.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from low iops.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from low iops.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from low iops."
    ],
    "tip": "Random workloads can expose storage bottlenecks."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "An IT support specialist needs to identify a component or service that stored information becomes invalid or unreadable. What should they select?",
    "opts": [
      "Data corruption",
      "RAID failure",
      "Boot device not found",
      "SMART alert"
    ],
    "ans": [
      0
    ],
    "why": [
      "Data corruption: Stored information becomes invalid or unreadable.",
      "RAID failure: Loss or degradation of a disk array. This serves a different function from data corruption.",
      "Boot device not found: Firmware cannot locate a bootable storage target. This serves a different function from data corruption.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from data corruption."
    ],
    "tip": "Prioritize preserving remaining data."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Check power data cable and firmware detection. Which technology or concept is MOST relevant?",
    "opts": [
      "Missing drive",
      "Data corruption",
      "Clicking HDD",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Missing drive: Storage device absent from operating system view.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from missing drive.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from missing drive.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from missing drive."
    ],
    "tip": "Check power data cable and firmware detection."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: drive health monitoring warning of possible failure?",
    "opts": [
      "SMART alert",
      "RAID failure",
      "Low IOPS",
      "Missing drive"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMART alert: Drive health monitoring warning of possible failure.",
      "RAID failure: Loss or degradation of a disk array. This serves a different function from smart alert.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from smart alert.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from smart alert."
    ],
    "tip": "Back up data before investigating replacement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "An IT support specialist needs to identify a component or service that repeated mechanical drive clicking. What should they select?",
    "opts": [
      "Clicking HDD",
      "Data corruption",
      "SMART alert",
      "Missing drive"
    ],
    "ans": [
      0
    ],
    "why": [
      "Clicking HDD: Repeated mechanical drive clicking.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from clicking hdd.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from clicking hdd.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from clicking hdd."
    ],
    "tip": "Mechanical noise can signal impending failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Check array status and failed member identification. Which technology or concept is MOST relevant?",
    "opts": [
      "RAID failure",
      "Clicking HDD",
      "Missing drive",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID failure: Loss or degradation of a disk array.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from raid failure.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from raid failure.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from raid failure."
    ],
    "tip": "Check array status and failed member identification."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: firmware cannot locate a bootable storage target?",
    "opts": [
      "Boot device not found",
      "SMART alert",
      "Clicking HDD",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "Boot device not found: Firmware cannot locate a bootable storage target.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from boot device not found.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from boot device not found.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from boot device not found."
    ],
    "tip": "Inspect boot order and drive detection."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "An IT support specialist needs to identify a component or service that insufficient input/output operations per second. What should they select?",
    "opts": [
      "Low IOPS",
      "Data corruption",
      "SMART alert",
      "Clicking HDD"
    ],
    "ans": [
      0
    ],
    "why": [
      "Low IOPS: Insufficient input/output operations per second.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from low iops.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from low iops.",
      "Clicking HDD: Repeated mechanical drive clicking. This serves a different function from low iops."
    ],
    "tip": "Random workloads can expose storage bottlenecks."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Prioritize preserving remaining data. Which technology or concept is MOST relevant?",
    "opts": [
      "Data corruption",
      "Missing drive",
      "Low IOPS",
      "SMART alert"
    ],
    "ans": [
      0
    ],
    "why": [
      "Data corruption: Stored information becomes invalid or unreadable.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from data corruption.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from data corruption.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from data corruption."
    ],
    "tip": "Prioritize preserving remaining data."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: storage device absent from operating system view?",
    "opts": [
      "Missing drive",
      "Data corruption",
      "Boot device not found",
      "SMART alert"
    ],
    "ans": [
      0
    ],
    "why": [
      "Missing drive: Storage device absent from operating system view.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from missing drive.",
      "Boot device not found: Firmware cannot locate a bootable storage target. This serves a different function from missing drive.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from missing drive."
    ],
    "tip": "Check power data cable and firmware detection."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "An IT support specialist needs to identify a component or service that drive health monitoring warning of possible failure. What should they select?",
    "opts": [
      "SMART alert",
      "Low IOPS",
      "Data corruption",
      "Boot device not found"
    ],
    "ans": [
      0
    ],
    "why": [
      "SMART alert: Drive health monitoring warning of possible failure.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from smart alert.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from smart alert.",
      "Boot device not found: Firmware cannot locate a bootable storage target. This serves a different function from smart alert."
    ],
    "tip": "Back up data before investigating replacement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "A technician encounters this situation: Mechanical noise can signal impending failure. Which technology or concept is MOST relevant?",
    "opts": [
      "Clicking HDD",
      "Missing drive",
      "SMART alert",
      "RAID failure"
    ],
    "ans": [
      0
    ],
    "why": [
      "Clicking HDD: Repeated mechanical drive clicking.",
      "Missing drive: Storage device absent from operating system view. This serves a different function from clicking hdd.",
      "SMART alert: Drive health monitoring warning of possible failure. This serves a different function from clicking hdd.",
      "RAID failure: Loss or degradation of a disk array. This serves a different function from clicking hdd."
    ],
    "tip": "Mechanical noise can signal impending failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.2",
    "q": "Which term describes the following capability: loss or degradation of a disk array?",
    "opts": [
      "RAID failure",
      "Boot device not found",
      "Data corruption",
      "Low IOPS"
    ],
    "ans": [
      0
    ],
    "why": [
      "RAID failure: Loss or degradation of a disk array.",
      "Boot device not found: Firmware cannot locate a bootable storage target. This serves a different function from raid failure.",
      "Data corruption: Stored information becomes invalid or unreadable. This serves a different function from raid failure.",
      "Low IOPS: Insufficient input/output operations per second. This serves a different function from raid failure."
    ],
    "tip": "Check array status and failed member identification."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: Select the active HDMI or DisplayPort input. Which technology or concept is MOST relevant?",
    "opts": [
      "Incorrect input source",
      "Fuzzy image",
      "Burnt-out bulb",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Incorrect input source: Display listens to the wrong input connector.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from incorrect input source.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from incorrect input source.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from incorrect input source."
    ],
    "tip": "Select the active HDMI or DisplayPort input."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: individual screen pixels that no longer function correctly?",
    "opts": [
      "Dead pixels",
      "Incorrect input source",
      "Fuzzy image",
      "Burnt-out bulb"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dead pixels: Individual screen pixels that no longer function correctly.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from dead pixels.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from dead pixels.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from dead pixels."
    ],
    "tip": "A single bad pixel differs from total signal loss."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that persistent image retention damage on a display. What should they select?",
    "opts": [
      "Burn-in",
      "Burnt-out bulb",
      "Dim image",
      "Dead pixels"
    ],
    "ans": [
      0
    ],
    "why": [
      "Burn-in: Persistent image retention damage on a display.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from burn-in.",
      "Dim image: Display output has insufficient brightness. This serves a different function from burn-in.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from burn-in."
    ],
    "tip": "Static imagery is especially relevant to OLED."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: Check brightness backlight and power. Which technology or concept is MOST relevant?",
    "opts": [
      "Dim image",
      "Fuzzy image",
      "Dead pixels",
      "Flashing screen"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dim image: Display output has insufficient brightness.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from dim image.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from dim image.",
      "Flashing screen: Display intermittently flickers. This serves a different function from dim image."
    ],
    "tip": "Check brightness backlight and power."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: projected or displayed image lacks sharpness?",
    "opts": [
      "Fuzzy image",
      "Dim image",
      "Burn-in",
      "Burnt-out bulb"
    ],
    "ans": [
      0
    ],
    "why": [
      "Fuzzy image: Projected or displayed image lacks sharpness.",
      "Dim image: Display output has insufficient brightness. This serves a different function from fuzzy image.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from fuzzy image.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from fuzzy image."
    ],
    "tip": "Adjust focus and native resolution."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that projector light source no longer operates. What should they select?",
    "opts": [
      "Burnt-out bulb",
      "Dim image",
      "Incorrect input source",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Burnt-out bulb: Projector light source no longer operates.",
      "Dim image: Display output has insufficient brightness. This serves a different function from burnt-out bulb.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from burnt-out bulb.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from burnt-out bulb."
    ],
    "tip": "Follow safe cooling before lamp replacement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: Check cable refresh rate and display hardware. Which technology or concept is MOST relevant?",
    "opts": [
      "Flashing screen",
      "Incorrect input source",
      "Fuzzy image",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Flashing screen: Display intermittently flickers.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from flashing screen.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from flashing screen.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from flashing screen."
    ],
    "tip": "Check cable refresh rate and display hardware."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: display listens to the wrong input connector?",
    "opts": [
      "Incorrect input source",
      "Dim image",
      "Burn-in",
      "Dead pixels"
    ],
    "ans": [
      0
    ],
    "why": [
      "Incorrect input source: Display listens to the wrong input connector.",
      "Dim image: Display output has insufficient brightness. This serves a different function from incorrect input source.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from incorrect input source.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from incorrect input source."
    ],
    "tip": "Select the active HDMI or DisplayPort input."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that individual screen pixels that no longer function correctly. What should they select?",
    "opts": [
      "Dead pixels",
      "Burnt-out bulb",
      "Burn-in",
      "Flashing screen"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dead pixels: Individual screen pixels that no longer function correctly.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from dead pixels.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from dead pixels.",
      "Flashing screen: Display intermittently flickers. This serves a different function from dead pixels."
    ],
    "tip": "A single bad pixel differs from total signal loss."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: Static imagery is especially relevant to OLED. Which technology or concept is MOST relevant?",
    "opts": [
      "Burn-in",
      "Burnt-out bulb",
      "Fuzzy image",
      "Dead pixels"
    ],
    "ans": [
      0
    ],
    "why": [
      "Burn-in: Persistent image retention damage on a display.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from burn-in.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from burn-in.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from burn-in."
    ],
    "tip": "Static imagery is especially relevant to OLED."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: display output has insufficient brightness?",
    "opts": [
      "Dim image",
      "Dead pixels",
      "Fuzzy image",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dim image: Display output has insufficient brightness.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from dim image.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from dim image.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from dim image."
    ],
    "tip": "Check brightness backlight and power."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that projected or displayed image lacks sharpness. What should they select?",
    "opts": [
      "Fuzzy image",
      "Burn-in",
      "Dim image",
      "Dead pixels"
    ],
    "ans": [
      0
    ],
    "why": [
      "Fuzzy image: Projected or displayed image lacks sharpness.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from fuzzy image.",
      "Dim image: Display output has insufficient brightness. This serves a different function from fuzzy image.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from fuzzy image."
    ],
    "tip": "Adjust focus and native resolution."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: Follow safe cooling before lamp replacement. Which technology or concept is MOST relevant?",
    "opts": [
      "Burnt-out bulb",
      "Burn-in",
      "Dim image",
      "Fuzzy image"
    ],
    "ans": [
      0
    ],
    "why": [
      "Burnt-out bulb: Projector light source no longer operates.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from burnt-out bulb.",
      "Dim image: Display output has insufficient brightness. This serves a different function from burnt-out bulb.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from burnt-out bulb."
    ],
    "tip": "Follow safe cooling before lamp replacement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: display intermittently flickers?",
    "opts": [
      "Flashing screen",
      "Dim image",
      "Burnt-out bulb",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Flashing screen: Display intermittently flickers.",
      "Dim image: Display output has insufficient brightness. This serves a different function from flashing screen.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from flashing screen.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from flashing screen."
    ],
    "tip": "Check cable refresh rate and display hardware."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that display listens to the wrong input connector. What should they select?",
    "opts": [
      "Incorrect input source",
      "Dim image",
      "Dead pixels",
      "Burnt-out bulb"
    ],
    "ans": [
      0
    ],
    "why": [
      "Incorrect input source: Display listens to the wrong input connector.",
      "Dim image: Display output has insufficient brightness. This serves a different function from incorrect input source.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from incorrect input source.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from incorrect input source."
    ],
    "tip": "Select the active HDMI or DisplayPort input."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "A technician encounters this situation: A single bad pixel differs from total signal loss. Which technology or concept is MOST relevant?",
    "opts": [
      "Dead pixels",
      "Incorrect input source",
      "Burnt-out bulb",
      "Burn-in"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dead pixels: Individual screen pixels that no longer function correctly.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from dead pixels.",
      "Burnt-out bulb: Projector light source no longer operates. This serves a different function from dead pixels.",
      "Burn-in: Persistent image retention damage on a display. This serves a different function from dead pixels."
    ],
    "tip": "A single bad pixel differs from total signal loss."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "Which term describes the following capability: persistent image retention damage on a display?",
    "opts": [
      "Burn-in",
      "Dead pixels",
      "Dim image",
      "Incorrect input source"
    ],
    "ans": [
      0
    ],
    "why": [
      "Burn-in: Persistent image retention damage on a display.",
      "Dead pixels: Individual screen pixels that no longer function correctly. This serves a different function from burn-in.",
      "Dim image: Display output has insufficient brightness. This serves a different function from burn-in.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from burn-in."
    ],
    "tip": "Static imagery is especially relevant to OLED."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.3",
    "q": "An IT support specialist needs to identify a component or service that display output has insufficient brightness. What should they select?",
    "opts": [
      "Dim image",
      "Incorrect input source",
      "Fuzzy image",
      "Flashing screen"
    ],
    "ans": [
      0
    ],
    "why": [
      "Dim image: Display output has insufficient brightness.",
      "Incorrect input source: Display listens to the wrong input connector. This serves a different function from dim image.",
      "Fuzzy image: Projected or displayed image lacks sharpness. This serves a different function from dim image.",
      "Flashing screen: Display intermittently flickers. This serves a different function from dim image."
    ],
    "tip": "Check brightness backlight and power."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Stop charging and follow safe replacement procedures. Which technology or concept is MOST relevant?",
    "opts": [
      "Swollen battery",
      "Digitizer failure",
      "Charging port damage",
      "Overheating phone"
    ],
    "ans": [
      0
    ],
    "why": [
      "Swollen battery: Physically expanded rechargeable cell.",
      "Digitizer failure: Touch sensing malfunction with image still visible. This serves a different function from swollen battery.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from swollen battery.",
      "Overheating phone: Mobile device becomes excessively hot. This serves a different function from swollen battery."
    ],
    "tip": "Stop charging and follow safe replacement procedures."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: touch sensing malfunction with image still visible?",
    "opts": [
      "Digitizer failure",
      "Poor connectivity",
      "Cursor drift",
      "Malware"
    ],
    "ans": [
      0
    ],
    "why": [
      "Digitizer failure: Touch sensing malfunction with image still visible.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from digitizer failure.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from digitizer failure.",
      "Malware: Malicious software affecting device operation. This serves a different function from digitizer failure."
    ],
    "tip": "Touch and display image are separate functions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "An IT support specialist needs to identify a component or service that physical connector damage preventing reliable power. What should they select?",
    "opts": [
      "Charging port damage",
      "Malware",
      "Swollen battery",
      "Cursor drift"
    ],
    "ans": [
      0
    ],
    "why": [
      "Charging port damage: Physical connector damage preventing reliable power.",
      "Malware: Malicious software affecting device operation. This serves a different function from charging port damage.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from charging port damage.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from charging port damage."
    ],
    "tip": "Inspect the port before blaming the charger."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Unexpected behavior can require security checks. Which technology or concept is MOST relevant?",
    "opts": [
      "Malware",
      "Cursor drift",
      "Digitizer failure",
      "Charging port damage"
    ],
    "ans": [
      0
    ],
    "why": [
      "Malware: Malicious software affecting device operation.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from malware.",
      "Digitizer failure: Touch sensing malfunction with image still visible. This serves a different function from malware.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from malware."
    ],
    "tip": "Unexpected behavior can require security checks."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: touch pointer moves or registers inaccurately?",
    "opts": [
      "Cursor drift",
      "Malware",
      "Poor connectivity",
      "Charging port damage"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cursor drift: Touch pointer moves or registers inaccurately.",
      "Malware: Malicious software affecting device operation. This serves a different function from cursor drift.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from cursor drift.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from cursor drift."
    ],
    "tip": "Calibration and digitizer faults can be involved."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "An IT support specialist needs to identify a component or service that mobile device becomes excessively hot. What should they select?",
    "opts": [
      "Overheating phone",
      "Charging port damage",
      "Swollen battery",
      "Cursor drift"
    ],
    "ans": [
      0
    ],
    "why": [
      "Overheating phone: Mobile device becomes excessively hot.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from overheating phone.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from overheating phone.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from overheating phone."
    ],
    "tip": "Check charging battery and workload."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Isolate Wi-Fi cellular and Bluetooth separately. Which technology or concept is MOST relevant?",
    "opts": [
      "Poor connectivity",
      "Cursor drift",
      "Charging port damage",
      "Malware"
    ],
    "ans": [
      0
    ],
    "why": [
      "Poor connectivity: Weak or absent mobile network access.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from poor connectivity.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from poor connectivity.",
      "Malware: Malicious software affecting device operation. This serves a different function from poor connectivity."
    ],
    "tip": "Isolate Wi-Fi cellular and Bluetooth separately."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: physically expanded rechargeable cell?",
    "opts": [
      "Swollen battery",
      "Poor connectivity",
      "Charging port damage",
      "Overheating phone"
    ],
    "ans": [
      0
    ],
    "why": [
      "Swollen battery: Physically expanded rechargeable cell.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from swollen battery.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from swollen battery.",
      "Overheating phone: Mobile device becomes excessively hot. This serves a different function from swollen battery."
    ],
    "tip": "Stop charging and follow safe replacement procedures."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "An IT support specialist needs to identify a component or service that touch sensing malfunction with image still visible. What should they select?",
    "opts": [
      "Digitizer failure",
      "Cursor drift",
      "Malware",
      "Poor connectivity"
    ],
    "ans": [
      0
    ],
    "why": [
      "Digitizer failure: Touch sensing malfunction with image still visible.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from digitizer failure.",
      "Malware: Malicious software affecting device operation. This serves a different function from digitizer failure.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from digitizer failure."
    ],
    "tip": "Touch and display image are separate functions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Inspect the port before blaming the charger. Which technology or concept is MOST relevant?",
    "opts": [
      "Charging port damage",
      "Digitizer failure",
      "Poor connectivity",
      "Malware"
    ],
    "ans": [
      0
    ],
    "why": [
      "Charging port damage: Physical connector damage preventing reliable power.",
      "Digitizer failure: Touch sensing malfunction with image still visible. This serves a different function from charging port damage.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from charging port damage.",
      "Malware: Malicious software affecting device operation. This serves a different function from charging port damage."
    ],
    "tip": "Inspect the port before blaming the charger."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: malicious software affecting device operation?",
    "opts": [
      "Malware",
      "Overheating phone",
      "Digitizer failure",
      "Charging port damage"
    ],
    "ans": [
      0
    ],
    "why": [
      "Malware: Malicious software affecting device operation.",
      "Overheating phone: Mobile device becomes excessively hot. This serves a different function from malware.",
      "Digitizer failure: Touch sensing malfunction with image still visible. This serves a different function from malware.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from malware."
    ],
    "tip": "Unexpected behavior can require security checks."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "An IT support specialist needs to identify a component or service that touch pointer moves or registers inaccurately. What should they select?",
    "opts": [
      "Cursor drift",
      "Poor connectivity",
      "Charging port damage",
      "Swollen battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Cursor drift: Touch pointer moves or registers inaccurately.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from cursor drift.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from cursor drift.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from cursor drift."
    ],
    "tip": "Calibration and digitizer faults can be involved."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Check charging battery and workload. Which technology or concept is MOST relevant?",
    "opts": [
      "Overheating phone",
      "Malware",
      "Charging port damage",
      "Swollen battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Overheating phone: Mobile device becomes excessively hot.",
      "Malware: Malicious software affecting device operation. This serves a different function from overheating phone.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from overheating phone.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from overheating phone."
    ],
    "tip": "Check charging battery and workload."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: weak or absent mobile network access?",
    "opts": [
      "Poor connectivity",
      "Overheating phone",
      "Malware",
      "Swollen battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Poor connectivity: Weak or absent mobile network access.",
      "Overheating phone: Mobile device becomes excessively hot. This serves a different function from poor connectivity.",
      "Malware: Malicious software affecting device operation. This serves a different function from poor connectivity.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from poor connectivity."
    ],
    "tip": "Isolate Wi-Fi cellular and Bluetooth separately."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "An IT support specialist needs to identify a component or service that physically expanded rechargeable cell. What should they select?",
    "opts": [
      "Swollen battery",
      "Malware",
      "Poor connectivity",
      "Charging port damage"
    ],
    "ans": [
      0
    ],
    "why": [
      "Swollen battery: Physically expanded rechargeable cell.",
      "Malware: Malicious software affecting device operation. This serves a different function from swollen battery.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from swollen battery.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from swollen battery."
    ],
    "tip": "Stop charging and follow safe replacement procedures."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "A technician encounters this situation: Touch and display image are separate functions. Which technology or concept is MOST relevant?",
    "opts": [
      "Digitizer failure",
      "Swollen battery",
      "Charging port damage",
      "Cursor drift"
    ],
    "ans": [
      0
    ],
    "why": [
      "Digitizer failure: Touch sensing malfunction with image still visible.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from digitizer failure.",
      "Charging port damage: Physical connector damage preventing reliable power. This serves a different function from digitizer failure.",
      "Cursor drift: Touch pointer moves or registers inaccurately. This serves a different function from digitizer failure."
    ],
    "tip": "Touch and display image are separate functions."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.4",
    "q": "Which term describes the following capability: physical connector damage preventing reliable power?",
    "opts": [
      "Charging port damage",
      "Poor connectivity",
      "Malware",
      "Swollen battery"
    ],
    "ans": [
      0
    ],
    "why": [
      "Charging port damage: Physical connector damage preventing reliable power.",
      "Poor connectivity: Weak or absent mobile network access. This serves a different function from charging port damage.",
      "Malware: Malicious software affecting device operation. This serves a different function from charging port damage.",
      "Swollen battery: Physically expanded rechargeable cell. This serves a different function from charging port damage."
    ],
    "tip": "Inspect the port before blaming the charger."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: VoIP audio breaks up when timing varies. Which technology or concept is MOST relevant?",
    "opts": [
      "Jitter",
      "Authentication failure",
      "Slow network",
      "Wireless interference"
    ],
    "ans": [
      0
    ],
    "why": [
      "Jitter: Variation in packet arrival delay.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from jitter.",
      "Slow network: Throughput lower than expected. This serves a different function from jitter.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from jitter."
    ],
    "tip": "VoIP audio breaks up when timing varies."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Which term describes the following capability: delay for data to traverse a network path?",
    "opts": [
      "Latency",
      "Jitter",
      "Port flapping",
      "Wireless interference"
    ],
    "ans": [
      0
    ],
    "why": [
      "Latency: Delay for data to traverse a network path.",
      "Jitter: Variation in packet arrival delay. This serves a different function from latency.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from latency.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from latency."
    ],
    "tip": "High round-trip times harm interactive applications."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "An IT support specialist needs to identify a component or service that switch port repeatedly changes link state. What should they select?",
    "opts": [
      "Port flapping",
      "Jitter",
      "Slow network",
      "Wireless interference"
    ],
    "ans": [
      0
    ],
    "why": [
      "Port flapping: Switch port repeatedly changes link state.",
      "Jitter: Variation in packet arrival delay. This serves a different function from port flapping.",
      "Slow network: Throughput lower than expected. This serves a different function from port flapping.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from port flapping."
    ],
    "tip": "Check cabling transceiver and endpoint power."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: Survey channels and physical sources. Which technology or concept is MOST relevant?",
    "opts": [
      "Wireless interference",
      "Jitter",
      "Authentication failure",
      "Port flapping"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wireless interference: Competing radio signals degrade Wi-Fi.",
      "Jitter: Variation in packet arrival delay. This serves a different function from wireless interference.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from wireless interference.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from wireless interference."
    ],
    "tip": "Survey channels and physical sources."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Which term describes the following capability: access rejected during identity verification?",
    "opts": [
      "Authentication failure",
      "Port flapping",
      "Wireless interference",
      "Intermittent internet"
    ],
    "ans": [
      0
    ],
    "why": [
      "Authentication failure: Access rejected during identity verification.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from authentication failure.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from authentication failure.",
      "Intermittent internet: WAN access drops unpredictably. This serves a different function from authentication failure."
    ],
    "tip": "Check credentials policy and clock synchronization."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "An IT support specialist needs to identify a component or service that wAN access drops unpredictably. What should they select?",
    "opts": [
      "Intermittent internet",
      "Wireless interference",
      "Port flapping",
      "Jitter"
    ],
    "ans": [
      0
    ],
    "why": [
      "Intermittent internet: WAN access drops unpredictably.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from intermittent internet.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from intermittent internet.",
      "Jitter: Variation in packet arrival delay. This serves a different function from intermittent internet."
    ],
    "tip": "Separate local Wi-Fi loss from ISP failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: Test link speed congestion and errors. Which technology or concept is MOST relevant?",
    "opts": [
      "Slow network",
      "Authentication failure",
      "Wireless interference",
      "Port flapping"
    ],
    "ans": [
      0
    ],
    "why": [
      "Slow network: Throughput lower than expected.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from slow network.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from slow network.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from slow network."
    ],
    "tip": "Test link speed congestion and errors."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Which term describes the following capability: variation in packet arrival delay?",
    "opts": [
      "Jitter",
      "Authentication failure",
      "Latency",
      "Wireless interference"
    ],
    "ans": [
      0
    ],
    "why": [
      "Jitter: Variation in packet arrival delay.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from jitter.",
      "Latency: Delay for data to traverse a network path. This serves a different function from jitter.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from jitter."
    ],
    "tip": "VoIP audio breaks up when timing varies."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "An IT support specialist needs to identify a component or service that delay for data to traverse a network path. What should they select?",
    "opts": [
      "Latency",
      "Authentication failure",
      "Intermittent internet",
      "Jitter"
    ],
    "ans": [
      0
    ],
    "why": [
      "Latency: Delay for data to traverse a network path.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from latency.",
      "Intermittent internet: WAN access drops unpredictably. This serves a different function from latency.",
      "Jitter: Variation in packet arrival delay. This serves a different function from latency."
    ],
    "tip": "High round-trip times harm interactive applications."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: Check cabling transceiver and endpoint power. Which technology or concept is MOST relevant?",
    "opts": [
      "Port flapping",
      "Jitter",
      "Wireless interference",
      "Authentication failure"
    ],
    "ans": [
      0
    ],
    "why": [
      "Port flapping: Switch port repeatedly changes link state.",
      "Jitter: Variation in packet arrival delay. This serves a different function from port flapping.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from port flapping.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from port flapping."
    ],
    "tip": "Check cabling transceiver and endpoint power."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Which term describes the following capability: competing radio signals degrade Wi-Fi?",
    "opts": [
      "Wireless interference",
      "Intermittent internet",
      "Latency",
      "Jitter"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wireless interference: Competing radio signals degrade Wi-Fi.",
      "Intermittent internet: WAN access drops unpredictably. This serves a different function from wireless interference.",
      "Latency: Delay for data to traverse a network path. This serves a different function from wireless interference.",
      "Jitter: Variation in packet arrival delay. This serves a different function from wireless interference."
    ],
    "tip": "Survey channels and physical sources."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "An IT support specialist needs to identify a component or service that access rejected during identity verification. What should they select?",
    "opts": [
      "Authentication failure",
      "Port flapping",
      "Slow network",
      "Latency"
    ],
    "ans": [
      0
    ],
    "why": [
      "Authentication failure: Access rejected during identity verification.",
      "Port flapping: Switch port repeatedly changes link state. This serves a different function from authentication failure.",
      "Slow network: Throughput lower than expected. This serves a different function from authentication failure.",
      "Latency: Delay for data to traverse a network path. This serves a different function from authentication failure."
    ],
    "tip": "Check credentials policy and clock synchronization."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: Separate local Wi-Fi loss from ISP failure. Which technology or concept is MOST relevant?",
    "opts": [
      "Intermittent internet",
      "Jitter",
      "Wireless interference",
      "Slow network"
    ],
    "ans": [
      0
    ],
    "why": [
      "Intermittent internet: WAN access drops unpredictably.",
      "Jitter: Variation in packet arrival delay. This serves a different function from intermittent internet.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from intermittent internet.",
      "Slow network: Throughput lower than expected. This serves a different function from intermittent internet."
    ],
    "tip": "Separate local Wi-Fi loss from ISP failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "Which term describes the following capability: throughput lower than expected?",
    "opts": [
      "Slow network",
      "Jitter",
      "Authentication failure",
      "Wireless interference"
    ],
    "ans": [
      0
    ],
    "why": [
      "Slow network: Throughput lower than expected.",
      "Jitter: Variation in packet arrival delay. This serves a different function from slow network.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from slow network.",
      "Wireless interference: Competing radio signals degrade Wi-Fi. This serves a different function from slow network."
    ],
    "tip": "Test link speed congestion and errors."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "An IT support specialist needs to identify a component or service that variation in packet arrival delay. What should they select?",
    "opts": [
      "Jitter",
      "Intermittent internet",
      "Authentication failure",
      "Slow network"
    ],
    "ans": [
      0
    ],
    "why": [
      "Jitter: Variation in packet arrival delay.",
      "Intermittent internet: WAN access drops unpredictably. This serves a different function from jitter.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from jitter.",
      "Slow network: Throughput lower than expected. This serves a different function from jitter."
    ],
    "tip": "VoIP audio breaks up when timing varies."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.5",
    "q": "A technician encounters this situation: High round-trip times harm interactive applications. Which technology or concept is MOST relevant?",
    "opts": [
      "Latency",
      "Authentication failure",
      "Slow network",
      "Jitter"
    ],
    "ans": [
      0
    ],
    "why": [
      "Latency: Delay for data to traverse a network path.",
      "Authentication failure: Access rejected during identity verification. This serves a different function from latency.",
      "Slow network: Throughput lower than expected. This serves a different function from latency.",
      "Jitter: Variation in packet arrival delay. This serves a different function from latency."
    ],
    "tip": "High round-trip times harm interactive applications."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Inspect rollers and remove paper carefully. Which technology or concept is MOST relevant?",
    "opts": [
      "Paper jam",
      "Multipage misfeed",
      "Wrong orientation",
      "Garbled print"
    ],
    "ans": [
      0
    ],
    "why": [
      "Paper jam: Sheet becomes stuck in printer path.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from paper jam.",
      "Wrong orientation: Page prints in unintended portrait or landscape mode. This serves a different function from paper jam.",
      "Garbled print: Output contains unexpected characters or symbols. This serves a different function from paper jam."
    ],
    "tip": "Inspect rollers and remove paper carefully."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Which term describes the following capability: printed content lacks expected density?",
    "opts": [
      "Faded print",
      "Frozen print queue",
      "Double image",
      "Tray not recognized"
    ],
    "ans": [
      0
    ],
    "why": [
      "Faded print: Printed content lacks expected density.",
      "Frozen print queue: Jobs stop progressing through the spooler. This serves a different function from faded print.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from faded print.",
      "Tray not recognized: Printer does not detect installed paper tray. This serves a different function from faded print."
    ],
    "tip": "Consumables and printheads differ by printer type."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "An IT support specialist needs to identify a component or service that output contains unexpected characters or symbols. What should they select?",
    "opts": [
      "Garbled print",
      "Double image",
      "Faded print",
      "Multipage misfeed"
    ],
    "ans": [
      0
    ],
    "why": [
      "Garbled print: Output contains unexpected characters or symbols.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from garbled print.",
      "Faded print: Printed content lacks expected density. This serves a different function from garbled print.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from garbled print."
    ],
    "tip": "Driver or page language mismatch can cause this."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Clear or restart the affected queue appropriately. Which technology or concept is MOST relevant?",
    "opts": [
      "Frozen print queue",
      "Multipage misfeed",
      "Faded print",
      "Garbled print"
    ],
    "ans": [
      0
    ],
    "why": [
      "Frozen print queue: Jobs stop progressing through the spooler.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from frozen print queue.",
      "Faded print: Printed content lacks expected density. This serves a different function from frozen print queue.",
      "Garbled print: Output contains unexpected characters or symbols. This serves a different function from frozen print queue."
    ],
    "tip": "Clear or restart the affected queue appropriately."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Which term describes the following capability: several sheets feed at once?",
    "opts": [
      "Multipage misfeed",
      "Paper jam",
      "Double image",
      "Wrong orientation"
    ],
    "ans": [
      0
    ],
    "why": [
      "Multipage misfeed: Several sheets feed at once.",
      "Paper jam: Sheet becomes stuck in printer path. This serves a different function from multipage misfeed.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from multipage misfeed.",
      "Wrong orientation: Page prints in unintended portrait or landscape mode. This serves a different function from multipage misfeed."
    ],
    "tip": "Check separation rollers and paper condition."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "An IT support specialist needs to identify a component or service that ghosted repeated image on a printed page. What should they select?",
    "opts": [
      "Double image",
      "Paper jam",
      "Multipage misfeed",
      "Tray not recognized"
    ],
    "ans": [
      0
    ],
    "why": [
      "Double image: Ghosted repeated image on a printed page.",
      "Paper jam: Sheet becomes stuck in printer path. This serves a different function from double image.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from double image.",
      "Tray not recognized: Printer does not detect installed paper tray. This serves a different function from double image."
    ],
    "tip": "Inspect imaging components in laser printers."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Reseat tray and check sensors. Which technology or concept is MOST relevant?",
    "opts": [
      "Tray not recognized",
      "Multipage misfeed",
      "Garbled print",
      "Frozen print queue"
    ],
    "ans": [
      0
    ],
    "why": [
      "Tray not recognized: Printer does not detect installed paper tray.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from tray not recognized.",
      "Garbled print: Output contains unexpected characters or symbols. This serves a different function from tray not recognized.",
      "Frozen print queue: Jobs stop progressing through the spooler. This serves a different function from tray not recognized."
    ],
    "tip": "Reseat tray and check sensors."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Which term describes the following capability: page prints in unintended portrait or landscape mode?",
    "opts": [
      "Wrong orientation",
      "Faded print",
      "Garbled print",
      "Multipage misfeed"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wrong orientation: Page prints in unintended portrait or landscape mode.",
      "Faded print: Printed content lacks expected density. This serves a different function from wrong orientation.",
      "Garbled print: Output contains unexpected characters or symbols. This serves a different function from wrong orientation.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from wrong orientation."
    ],
    "tip": "Verify application and driver settings."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "An IT support specialist needs to identify a component or service that sheet becomes stuck in printer path. What should they select?",
    "opts": [
      "Paper jam",
      "Double image",
      "Wrong orientation",
      "Tray not recognized"
    ],
    "ans": [
      0
    ],
    "why": [
      "Paper jam: Sheet becomes stuck in printer path.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from paper jam.",
      "Wrong orientation: Page prints in unintended portrait or landscape mode. This serves a different function from paper jam.",
      "Tray not recognized: Printer does not detect installed paper tray. This serves a different function from paper jam."
    ],
    "tip": "Inspect rollers and remove paper carefully."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Consumables and printheads differ by printer type. Which technology or concept is MOST relevant?",
    "opts": [
      "Faded print",
      "Paper jam",
      "Garbled print",
      "Double image"
    ],
    "ans": [
      0
    ],
    "why": [
      "Faded print: Printed content lacks expected density.",
      "Paper jam: Sheet becomes stuck in printer path. This serves a different function from faded print.",
      "Garbled print: Output contains unexpected characters or symbols. This serves a different function from faded print.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from faded print."
    ],
    "tip": "Consumables and printheads differ by printer type."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Which term describes the following capability: output contains unexpected characters or symbols?",
    "opts": [
      "Garbled print",
      "Multipage misfeed",
      "Tray not recognized",
      "Double image"
    ],
    "ans": [
      0
    ],
    "why": [
      "Garbled print: Output contains unexpected characters or symbols.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from garbled print.",
      "Tray not recognized: Printer does not detect installed paper tray. This serves a different function from garbled print.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from garbled print."
    ],
    "tip": "Driver or page language mismatch can cause this."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "An IT support specialist needs to identify a component or service that jobs stop progressing through the spooler. What should they select?",
    "opts": [
      "Frozen print queue",
      "Wrong orientation",
      "Faded print",
      "Multipage misfeed"
    ],
    "ans": [
      0
    ],
    "why": [
      "Frozen print queue: Jobs stop progressing through the spooler.",
      "Wrong orientation: Page prints in unintended portrait or landscape mode. This serves a different function from frozen print queue.",
      "Faded print: Printed content lacks expected density. This serves a different function from frozen print queue.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from frozen print queue."
    ],
    "tip": "Clear or restart the affected queue appropriately."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Check separation rollers and paper condition. Which technology or concept is MOST relevant?",
    "opts": [
      "Multipage misfeed",
      "Frozen print queue",
      "Faded print",
      "Double image"
    ],
    "ans": [
      0
    ],
    "why": [
      "Multipage misfeed: Several sheets feed at once.",
      "Frozen print queue: Jobs stop progressing through the spooler. This serves a different function from multipage misfeed.",
      "Faded print: Printed content lacks expected density. This serves a different function from multipage misfeed.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from multipage misfeed."
    ],
    "tip": "Check separation rollers and paper condition."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "Which term describes the following capability: ghosted repeated image on a printed page?",
    "opts": [
      "Double image",
      "Tray not recognized",
      "Multipage misfeed",
      "Frozen print queue"
    ],
    "ans": [
      0
    ],
    "why": [
      "Double image: Ghosted repeated image on a printed page.",
      "Tray not recognized: Printer does not detect installed paper tray. This serves a different function from double image.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from double image.",
      "Frozen print queue: Jobs stop progressing through the spooler. This serves a different function from double image."
    ],
    "tip": "Inspect imaging components in laser printers."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "An IT support specialist needs to identify a component or service that printer does not detect installed paper tray. What should they select?",
    "opts": [
      "Tray not recognized",
      "Multipage misfeed",
      "Wrong orientation",
      "Double image"
    ],
    "ans": [
      0
    ],
    "why": [
      "Tray not recognized: Printer does not detect installed paper tray.",
      "Multipage misfeed: Several sheets feed at once. This serves a different function from tray not recognized.",
      "Wrong orientation: Page prints in unintended portrait or landscape mode. This serves a different function from tray not recognized.",
      "Double image: Ghosted repeated image on a printed page. This serves a different function from tray not recognized."
    ],
    "tip": "Reseat tray and check sensors."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "obj": "5.6",
    "q": "A technician encounters this situation: Verify application and driver settings. Which technology or concept is MOST relevant?",
    "opts": [
      "Wrong orientation",
      "Paper jam",
      "Frozen print queue",
      "Faded print"
    ],
    "ans": [
      0
    ],
    "why": [
      "Wrong orientation: Page prints in unintended portrait or landscape mode.",
      "Paper jam: Sheet becomes stuck in printer path. This serves a different function from wrong orientation.",
      "Frozen print queue: Jobs stop progressing through the spooler. This serves a different function from wrong orientation.",
      "Faded print: Printed content lacks expected density. This serves a different function from wrong orientation."
    ],
    "tip": "Verify application and driver settings."
  }
];
const OBJECTIVE_HEADINGS = {
  "1.1": "Given a scenario, monitor mobile device hardware and use appropriate replacement",
  "1.2": "Compare and contrast accessories and connectivity options for mobile devices.",
  "1.3": "Given a scenario, configure basic mobile device network connectivity and provide",
  "2.1": "Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol",
  "2.2": "Explain wireless networking technologies.",
  "2.3": "Summarize services provided by networked hosts.",
  "2.4": "Explain common network configuration concepts.",
  "2.5": "Compare and contrast common networking hardware devices.",
  "2.6": "Given a scenario, configure basic wired/wireless small office/home office (SOHO) networks.",
  "2.7": "Compare and contrast internet connection types, network types, and their",
  "2.8": "Explain networking tools and their purposes.",
  "3.1": "Compare and contrast display components and attributes.",
  "3.2": "Summarize basic cable types and their connectors, features, and purposes.",
  "3.3": "Compare and contrast RAM characteristics.",
  "3.4": "Compare and contrast storage devices.",
  "3.5": "Given a scenario, install and configure motherboards, central processing units (CPUs), and",
  "3.6": "Given a scenario, install the appropriate power supply.",
  "3.7": "Given a scenario, deploy and configure multifunction devices/printers and settings.",
  "3.8": "Given a scenario, perform appropriate printer maintenance.",
  "4.1": "Explain virtualization concepts.",
  "4.2": "Summarize cloud computing concepts.",
  "5.1": "Given a scenario, troubleshoot motherboards, RAM, CPUs, and power.",
  "5.2": "Given a scenario, troubleshoot drive and RAID issues.",
  "5.3": "Given a scenario, troubleshoot video, projector, and display issues.",
  "5.4": "Given a scenario, troubleshoot common mobile device issues.",
  "5.5": "Given a scenario, troubleshoot network issues.",
  "5.6": "Given a scenario, troubleshoot printer issues."
};
