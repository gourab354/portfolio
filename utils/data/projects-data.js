export const projectsData = [
    {
        id: 1,
        name: 'Smart Medicine Box',
        description: "An ESP32-based IoT health system built around a 5-state finite state machine (IDLE -> ALERTING -> DISPENSING -> CONFIRMED / MISSED). Uses NTP-synced time (IST), HC-SR04 ultrasonic presence detection, a servo-controlled dispensing lid, and a TTP223 touch sensor for dose confirmation with buzzer alerts. A Node.js web dashboard connects over WebSocket and REST API for live state badges and event logging.",
        tools: ['ESP32', 'C++', 'Node.js', 'WebSocket', 'REST API', 'HC-SR04', 'Servo Motor', 'TTP223 Touch', 'ST7735 TFT'],
        role: 'Designer & Firmware Developer',
        code: 'https://github.com/gourab354',
        demo: '',
    },
    {
        id: 2,
        name: 'More Projects Coming Soon',
        description: "This section will be updated as new hardware, IoT, and software builds are completed.",
        tools: [],
        role: '',
        code: '',
        demo: '',
    },
];
