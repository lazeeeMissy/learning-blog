type Bullet = {
  brief: string;
  description: string;
};

export type ProjectItemType = {
  title: string;
  coverUrl: string;
  tags: string[];
  link?: string;
  responsibilities: string[];
  description: string;
  time: string;
  briefDes: string;
  demoUrl: string | null;
  hightLights: Bullet[];
  futureRoadmap: Bullet[];
};

export const projectsInfo: ProjectItemType[] = [
  {
    title: "NetEase Rebuild",
    coverUrl: "/imgs/musicDashboard.png",
    tags: ["TypeScript", "React", "Vite", "MobX", "Ant Design"],
    link: "https://github.com/lazeeeMissy/NetEase-rebuild",
    responsibilities: ["Frontend Developer", "API Integration"],
    description:
      "A NetEase Cloud Music frontend rebuild built with React, TypeScript, and Vite. It recreates core music platform flows including login, discovery, playlists, artists, search, playlist details, and player-related UI while integrating with the api-enhanced NetEase Cloud Music backend.",
    time: "Last update time: May 2026",
    briefDes: "React and TypeScript rebuild of NetEase Cloud Music",
    demoUrl: null,
    hightLights: [
      {
        brief: "Modern React music app architecture",
        description:
          "Built the frontend with React 19, TypeScript, Vite, React Router, MobX, Axios, and Ant Design, separating pages, APIs, services, stores, utilities, and reusable assets into a clear project structure.",
      },
      {
        brief: "Complete music browsing workflow",
        description:
          "Implemented routes and UI modules for login, discovery, recommendations, toplists, playlists, DJ radio, artists, albums, search results, playlist details, and artist details.",
      },
      {
        brief: "API-driven frontend integration",
        description:
          "Connected the UI to NetEase Cloud Music API endpoints through typed API modules for login, discovery, search, album, playlist detail, and playback-related data.",
      },
    ],
    futureRoadmap: [
      {
        brief: "Improve playback and user state",
        description:
          "Expand the player store, playlist queue behavior, and authenticated user flows so the app feels closer to a full music client.",
      },
      {
        brief: "Polish responsiveness and deployment",
        description:
          "Refine mobile layouts, add loading and error states, and prepare a production deployment with a stable backend configuration.",
      },
    ],
  },
  {
    title: "White Board",
    coverUrl: "/imgs/whiteBoard.png",
    tags: ["Java", "Socket", "Swing", "Gson", "PDFBox"],
    link: "https://github.com/lazeeeMissy/swen90015-s2",
    responsibilities: ["Backend Developer"],
    description:
      "A COMP90015 course assignment that implements a collaborative whiteboard in Java. The system uses a socket-based client-server architecture to support manager-created sessions, peer join approval, synchronized drawing, board updates, chat, user management, save/load, and PDF export.",
    time: "Last update time: May 2026",
    briefDes: "Collaborative Java whiteboard course assignment",
    demoUrl: null,
    hightLights: [
      {
        brief: "Distributed whiteboard synchronization",
        description:
          "Designed a centralized server that accepts socket connections, maintains board state, and broadcasts drawing events so manager and peer clients stay synchronized.",
      },
      {
        brief: "Manager-controlled collaboration",
        description:
          "Added manager approval for join requests, user list updates, peer kicking, manager session shutdown, and username validation to control multi-user sessions.",
      },
      {
        brief: "Rich whiteboard and utility features",
        description:
          "Implemented Java Swing drawing tools for free draw, eraser, line, rectangle, circle, triangle, and text, plus integrated chat, JSON board persistence, and PDF export.",
      },
    ],
    futureRoadmap: [
      {
        brief: "Strengthen concurrency handling",
        description:
          "Add more robust stress testing around simultaneous drawing, joining, leaving, and manager actions to validate behavior under heavier collaboration.",
      },
      {
        brief: "Improve packaging and documentation",
        description:
          "Clean up generated build artifacts, document setup steps more clearly, and provide runnable release packages for manager and peer clients.",
      },
    ],
  },
  {
    title: "RideShare",
    coverUrl: "/imgs/riderDashboard.png",
    tags: ["TypeScript", "React", "Java", "PostgreSQL", "JMeter"],
    link: "https://github.com/SWEN90007-2025-sem2/Team-Tam",
    description:
      "A full-stack ride-sharing web application built for SWEN90007 at the University of Melbourne. Riders request trips by postcode with wallet-based payments; drivers manage weekly availability, accept rides, and track earnings. The system enforces a strict ride lifecycle and supports concurrency-safe operations under load.",
    time: "Last update time: Oct 2025",
    briefDes: "Full-stack ride-sharing platform with wallet payments and concurrency testing",
    demoUrl: "https://team-tam-frontend-ed42.onrender.com/",
    responsibilities: ["Frontend Developer", "Backend Developer", "Concurrency Testing"],
    hightLights: [
      {
        brief: "Built the React frontend and core user flows",
        description:
          "Developed the SPA with React, TypeScript, MobX, and Ant Design, covering rider and driver dashboards, ride request, weekly scheduling, wallet management, and ride history with role-based routing and production deployment on Render.",
      },
      {
        brief: "Implemented rider wallet feature end-to-end",
        description:
          "Delivered wallet top-up, balance checks, and fare deduction across backend and frontend, blocking ride requests when funds are insufficient.",
      },
      {
        brief: "Validated concurrency with JMeter load tests",
        description:
          "Created JMeter test plans for concurrent ride acceptance/cancellation and wallet top-ups to verify system stability under multi-user load.",
      },
    ],
    futureRoadmap: [
      {
        brief: "Expand automated test coverage",
        description:
          "Add frontend unit/integration tests and CI pipelines to complement existing JMeter load tests.",
      },
      {
        brief: "Improve mobile UX and observability",
        description:
          "Refine responsive layouts for driver/rider flows and add logging/monitoring for production debugging.",
      },
    ],
  },
];
