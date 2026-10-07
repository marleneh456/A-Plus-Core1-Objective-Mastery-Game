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
    "tip": "Swollen battery = stop using it and replace it safely."
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
    "tip": "NFC = near-field = very short range."
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
    "tip": "Hotspot = share mobile internet."
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
    "tip": "MDM = manage mobile devices and policies."
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
      "22 is SSH.",
      "53 is DNS.",
      "80 is HTTP.",
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
    "tip": "DHCP = 67/68."
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
    "tip": "SSH = secure shell = port 22."
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
    "tip": "2.4 = farther; higher bands = generally shorter range."
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
    "tip": "A = IPv4; AAAA = IPv6."
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
    "tip": "Reservation = same DHCP address for a known client."
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
    "tip": "Router = between networks."
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
    "tip": "PoE = power + Ethernet data."
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
    "tip": "169.254.x.x = APIPA."
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
    "tip": "Toner + probe = trace a cable."
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
    "tip": "Cable tester = verify the cable."
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
    "tip": "RJ45 = Ethernet; RJ11 = phone."
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
    "tip": "SO-DIMM = small RAM for laptops."
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
    "tip": "ECC = error correction."
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
      "VGA is video.",
      "RJ11 is a connector commonly used for telephone wiring."
    ],
    "tip": "NVMe + PCIe = fast SSD storage."
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
    "tip": "RAID 0 = zero redundancy."
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
    "tip": "PSU capacity = watts."
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
    "tip": "Duplex = two-sided."
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
    "tip": "Laser = toner; inkjet = ink; impact = ribbon; thermal = heat paper."
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
    "tip": "Type 1 = bare metal; Type 2 = hosted."
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
    "tip": "SaaS = software; PaaS = platform; IaaS = infrastructure."
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
    "tip": "Elastic = stretch/shrink with demand."
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
      "NFC is unrelated."
    ],
    "tip": "Hot + random shutdown = check cooling/overheating."
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
    "tip": "Clicking/grinding drive = treat data as at risk."
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
    "tip": "S.M.A.R.T. = storage health warning."
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
      "RAID is storage.",
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
    "tip": "Bulging battery = swollen battery = safety issue."
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
      "RAID is storage.",
      "Print queues are printer/software issues.",
      "MX records concern mail routing."
    ],
    "tip": "Touch doesn't line up = calibration/digitizer."
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
    "tip": "Drops/reconnects = intermittent connectivity."
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
    "tip": "Repeated ghost image = double/echo image."
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
    "tip": "Stuck print jobs = check the print queue."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Dynamic Host Configuration Protocol.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "DHCP = Dynamic Host Configuration Protocol."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Domain Name System."
    ],
    "tip": "DNS = Domain Name System."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Non-volatile Memory Express."
    ],
    "tip": "NVMe = Non-volatile Memory Express."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "SODIMM = Small Outline Dual In-line Memory Module."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "TPM = Trusted Platform Module."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "PoE = Power over Ethernet."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Virtual Desktop Infrastructure.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "VDI = Virtual Desktop Infrastructure."
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
      "That expansion belongs to a different acronym.",
      "Correct. Self-monitoring Analysis and Reporting Technology.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "S.M.A.R.T. = Self-monitoring Analysis and Reporting Technology."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Optical Network Terminal.",
      "That expansion belongs to a different acronym."
    ],
    "tip": "ONT = Optical Network Terminal."
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
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "That expansion belongs to a different acronym.",
      "Correct. Automatic Private Internet Protocol Addressing."
    ],
    "tip": "APIPA = Automatic Private Internet Protocol Addressing."
  }
];
