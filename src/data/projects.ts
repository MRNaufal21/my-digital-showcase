export interface Project {
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  category: string;
  tech: string[];
  image: string;
  screenshots: string[];
  demo: string;
  github: string;
  features: string[];
}

export const categories = ["Semua", "Web App", "Mobile", "UI/UX"];

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    desc: "Platform e-commerce modern dengan fitur real-time inventory dan payment gateway terintegrasi.",
    fullDesc:
      "Platform e-commerce full-stack yang dibangun dengan React dan Node.js. Dilengkapi dengan real-time inventory tracking, payment gateway terintegrasi (Stripe & Midtrans), dashboard admin untuk manajemen produk, serta fitur keranjang belanja dan checkout yang responsif.",
    category: "Web App",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "Real-time inventory management",
      "Multi payment gateway (Stripe & Midtrans)",
      "Admin dashboard dengan analytics",
      "Responsive design untuk semua device",
      "Search & filter produk yang cepat",
    ],
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    desc: "Dashboard interaktif untuk monitoring KPI bisnis dengan visualisasi data real-time.",
    fullDesc:
      "Dashboard analytics interaktif untuk monitoring performa bisnis secara real-time. Menampilkan berbagai metrik KPI dengan visualisasi data menggunakan D3.js, dilengkapi dengan fitur export report dan customizable widgets.",
    category: "Web App",
    tech: ["Next.js", "D3.js", "Tailwind", "WebSocket", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Export report ke PDF & Excel",
      "Role-based access control",
      "Dark/Light mode",
    ],
  },
  {
    slug: "travel-app",
    title: "Travel App",
    desc: "Aplikasi mobile untuk perencanaan perjalanan dengan AI-powered recommendations.",
    fullDesc:
      "Aplikasi mobile travel planning yang menggunakan AI untuk memberikan rekomendasi destinasi, hotel, dan aktivitas berdasarkan preferensi pengguna. Dilengkapi dengan itinerary builder, budget tracker, dan offline maps.",
    category: "Mobile",
    tech: ["React Native", "Firebase", "AI/ML", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "AI-powered destination recommendations",
      "Drag & drop itinerary builder",
      "Budget tracking & expense split",
      "Offline maps & navigation",
      "Social sharing & travel diary",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    desc: "Redesign identitas visual untuk startup fintech termasuk logo, typography, dan guidelines.",
    fullDesc:
      "Proyek redesign identitas visual lengkap untuk startup fintech. Mencakup pembuatan logo baru, pemilihan typography system, color palette, icon set, serta brand guidelines document yang komprehensif.",
    category: "UI/UX",
    tech: ["Figma", "Illustrator", "After Effects", "Photoshop"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "Logo design & variations",
      "Typography system",
      "Color palette & gradients",
      "Icon set (50+ icons)",
      "Brand guidelines document",
    ],
  },
  {
    slug: "task-management",
    title: "Task Management",
    desc: "Aplikasi manajemen tugas kolaboratif dengan real-time sync dan kanban board.",
    fullDesc:
      "Aplikasi manajemen tugas kolaboratif yang memungkinkan tim bekerja sama secara real-time. Dilengkapi dengan kanban board, timeline view, dan integrasi dengan berbagai tools produktivitas.",
    category: "Web App",
    tech: ["Vue.js", "Supabase", "TypeScript", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "Kanban board & list view",
      "Real-time collaboration",
      "File attachments & comments",
      "Timeline & Gantt chart view",
      "Integrasi Slack & Email notifications",
    ],
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    desc: "Aplikasi tracking fitness dengan integrasi wearable devices dan personalized plans.",
    fullDesc:
      "Aplikasi fitness tracking yang terintegrasi dengan berbagai wearable devices. Menyediakan personalized workout plans, nutrition tracking, dan progress analytics untuk membantu pengguna mencapai goals fitness mereka.",
    category: "Mobile",
    tech: ["Flutter", "Go", "MongoDB", "HealthKit API"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    ],
    demo: "https://example.com",
    github: "https://github.com",
    features: [
      "Wearable device integration",
      "Personalized workout plans",
      "Nutrition & calorie tracking",
      "Progress analytics & charts",
      "Social challenges & leaderboard",
    ],
  },
];
