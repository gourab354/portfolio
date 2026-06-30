export const config = {
    developer: {
        name: "Gourab",
        fullName: "Gourab Dutta",
        title: "Embedded Hardware & IoT Developer",
        description: "Embedded Hardware & IoT Developer building real-world systems with ESP32 and Raspberry Pi. Passionate about microcontrollers, sensor integration, and exploring the intersection of hardware, AI, and cybersecurity."
    },
    social: {
        github: "gourab354",
        email: "gourabd911@gmail.com",
        location: "Howrah, West Bengal, India"
    },
    about: {
        title: "About Me",
        description: "I am a 1st-year Electronics and Communication Engineering student at the Academy of Technology (MAKAUT), driven by a passion for building smart, secure, and impactful technology. My journey is rooted in IoT and hardware development, where I focus on integrating sensors and microcontrollers like the ESP32 and Raspberry Pi to create real-world solutions. Having competed in three national hackathons - including a 1st-prize win at FOSET 2026 - I thrive in fast-paced environments that demand both creativity and technical precision. I am currently expanding into frontend web development and ethical hacking, aiming to build systems that are functional, resilient, and user-centric."
    },
    experiences: [
        {
            position: "Embedded Systems Intern",
            company: "Resurgenix Technologies",
            period: "2026 - Present",
            location: "India",
            description: "Working on embedded systems and hardware-software integration as part of an early-career internship in the field.",
            responsibilities: [
                "Assisting in embedded firmware development",
                "Working with microcontroller-based systems",
                "Collaborating on hardware-software integration tasks",
                "Learning industry-standard embedded development practices"
            ],
            technologies: ["C", "C++", "Embedded Systems", "Microcontrollers"]
        },
        {
            position: "Hardware & IoT Developer",
            company: "Independent Projects",
            period: "2025 - Present",
            location: "India",
            description: "Designing and building ESP32 and Raspberry Pi based IoT systems, integrating sensors, displays, and real-time dashboards for practical, real-world use cases.",
            responsibilities: [
                "Designing finite state machine based embedded firmware",
                "Integrating ultrasonic, touch, and motion sensors",
                "Building Node.js dashboards with WebSocket and REST APIs",
                "Competing in national-level hardware and robotics hackathons"
            ],
            technologies: ["ESP32", "Raspberry Pi", "C++", "Node.js", "WebSocket", "IoT"]
        },
        {
            position: "ECE Undergraduate",
            company: "Academy of Technology, MAKAUT",
            period: "2025 - Present",
            location: "Howrah, West Bengal",
            description: "Pursuing a B.Tech in Electronics & Communication Engineering, building a foundation in circuits, embedded systems, and signal processing alongside active hands-on project work.",
            responsibilities: [
                "Studying core ECE subjects: circuits, signals, electronics",
                "Building hardware projects alongside coursework",
                "Participating in technical competitions and workshops",
                "Exploring frontend development and ethical hacking independently"
            ],
            technologies: ["Python", "OpenCV", "React", "Git"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Smart Medicine Box",
            category: "IoT / Embedded",
            technologies: "ESP32, C++, Node.js, WebSocket, REST API, HC-SR04, Servo, TTP223, ST7735 TFT",
            image: "/images/eie.png",
            description: "An ESP32-based IoT health system built around a 5-state finite state machine (IDLE -> ALERTING -> DISPENSING -> CONFIRMED / MISSED). Uses NTP-synced time (IST), HC-SR04 ultrasonic presence detection, a servo-controlled dispensing lid, and a TTP223 touch sensor for dose confirmation with buzzer alerts. A Node.js web dashboard connects over WebSocket and REST API for live state badges and event logging."
        }
    ],
    contact: {
        email: "gourabd911@gmail.com",
        github: "https://github.com/gourab354",
        linkedin: "https://www.linkedin.com/in/GourabDutta354",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "HARDWARE DEVELOPER",
            description: "Building embedded systems & IoT solutions",
            details: "Designing and building embedded firmware and IoT systems using ESP32, Raspberry Pi, and sensor-driven hardware. Focused on real-time systems, state machines, and hardware-software integration.",
            tools: ["ESP32", "Raspberry Pi", "Arduino", "C", "C++", "Embedded C", "PCB Design", "Sensors", "IoT", "State Machines"]
        },
        design: {
            title: "SOFTWARE & WEB",
            description: "Dashboards, frontend, and growing security skills",
            details: "Building Node.js dashboards, REST APIs, and React-based frontends to support hardware projects, alongside growing interest in Python, OpenCV, and ethical hacking fundamentals.",
            tools: ["Python", "OpenCV", "React", "Node.js", "WebSocket", "REST APIs", "Git", "Linux Basics", "Ethical Hacking"]
        }
    }
};
