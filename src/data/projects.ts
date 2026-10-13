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

  // UX Research (optional, hanya untuk UI/UX)
  uxResearch?: {
    problem: string;
    targetUser: string;
    goals: string[];
    painPoints: string[];
    solutions: string[];
  };
}

export const categories = ["Semua", "Web App", "Mobile", "UI/UX"];

export const initialProjects: Project[] = [
  {
    slug: "Aplikasi-Web-Kasir-Restoran",
    title: "Aplikasi Web Kasir Restoran",
    desc: "Aplikasi Web Kasir Restoran Sederhana.",
    fullDesc:
      "Aplikasi restoran frontend yang dibangun dengan Vue Js dan Rest API. dengan menu Masakan, Halaman Checkout, Halaman Transaksi.",
    category: "Web App",
    tech: ["Vue Js", "Rest API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    screenshots: [
      "https://github.com/MRNaufal21/aplikasi-kasir-makanan-menggunakna-vue-js/raw/main/public/assets/images/home.png?raw=true",
      "https://github.com/MRNaufal21/aplikasi-kasir-makanan-menggunakna-vue-js/raw/main/public/assets/images/menu.png?raw=true",
      "https://github.com/MRNaufal21/aplikasi-kasir-makanan-menggunakna-vue-js/raw/main/public/assets/images/checkout.png?raw=true",
      "https://github.com/MRNaufal21/aplikasi-kasir-makanan-menggunakna-vue-js/raw/main/public/assets/images/berhasil%20bayar.png?raw=true",
    ],
    demo: "https://example.com",
    github: "https://github.com/MRNaufal21/aplikasi-kasir-makanan-menggunakna-vue-js.git",
    features: [
      "Keranjang Checkout untuk melihat pesanan makanan",
      "Responsive design untuk semua device",
      "Search & filter masakan yang cepat",
    ],
  },
  {
    slug: "UI-Al-Quran",
    title: "UI Al-Quran",
    desc: "Projek yang akan datang.",
    fullDesc: "Desain ini adalah landing page website travel/bus service",
    category: "UI/UX",
    tech: ["React", "Vue", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    image: "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/alquran.jpg",
    screenshots: [
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/quran.png",
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/fullalquran.png",
    ],
    demo: "https://example.com",
    github: "https://www.figma.com/design/Sqm6ybMWWTI9C70oI7alPX/Landing-Page",
    features: [
      "Booking System",
      "Content Management",
      "Partner System",
      "Service Listing",
      "User Account",
    ],
    uxResearch: {
      problem:
        "Pengguna kesulitan menemukan jadwal bus dengan cepat dan informasi tidak tersusun dengan baik.",
      targetUser:
        "Penumpang travel dan pengguna yang sering bepergian antar kota.",
      goals: [
        "Mempermudah pencarian jadwal bus",
        "Menyederhanakan proses booking",
        "Meningkatkan kejelasan informasi layanan",
      ],
      painPoints: [
        "Navigasi membingungkan",
        "Informasi jadwal tidak jelas",
        "Terlalu banyak langkah saat booking",
      ],
      solutions: [
        "Tampilan jadwal yang lebih terstruktur",
        "Filter pencarian cepat",
        "Simplified booking flow",
      ],
    },
  },
  {
    slug: "travel-app",
    title: "Travel App",
    desc: "Aplikasi armada travel mobil berbasis mobile apps.",
    fullDesc:
      "Aplikasi mobile travel planning yang menggunakan AI untuk memberikan rekomendasi destinasi, hotel, dan aktivitas berdasarkan preferensi pengguna.",
    category: "Mobile",
    tech: ["Flutter", "Firebase", "Weather API", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    screenshots: [
      "https://github.com/MRNaufal21/travell_app/blob/main/assets/Login%20Screen.png?raw=true",
      "https://github.com/MRNaufal21/travell_app/blob/main/assets/admin1.png?raw=true",
    ],
    demo: "https://example.com",
    github: "https://github.com/MRNaufal21/travell_app.git",
    features: [
      "Sisi Client & Admin (Role Based)",
      "Database Firebase Firestore",
      "Registrasi dengan Approval Admin",
      "Integrasi API Public BMKG",
      "Integrasi API Gmaps",
      "Dashboard Statistik Admin",
    ],
  },
  {
    slug: "UI-Food",
    title: "UI Food",
    desc: "Mobile app untuk food ordering / delivery.",
    fullDesc:
      "Desain ini merepresentasikan aplikasi pemesanan makanan dengan alur sederhana dan cepat.",
    category: "UI/UX",
    tech: ["Figma", "Flutter", "Midtrans"],
    image: "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/hp.png",
    screenshots: [
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/hp.png",
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/uifood.png",
    ],
    demo: "https://example.com",
    github: "https://www.figma.com/design/116e5DMHim2MjWtYEygbrY/FOOD-DELIVERY",
    features: [
      "Menu Browsing",
      "Search System",
      "Product Customization",
      "Cart Management",
    ],
    uxResearch: {
      problem:
        "Pengguna kesulitan menemukan makanan dengan cepat dan proses checkout terlalu panjang.",
      targetUser:
        "Mahasiswa dan pekerja yang ingin memesan makanan secara cepat.",
      goals: [
        "Mempercepat proses pemesanan",
        "Mengurangi langkah checkout",
        "Meningkatkan kenyamanan pengguna",
      ],
      painPoints: [
        "Checkout terlalu panjang",
        "Navigasi kurang intuitif",
        "Pencarian tidak efisien",
      ],
      solutions: [
        "One page checkout",
        "Improved search & filter",
        "UI lebih clean dan minimalis",
      ],
    },
  },
  {
    slug: "Tiket-Bioskop",
    title: "Tiket Bioskop",
    desc: "Aplikasi pemesanan tiket bioskop.",
    fullDesc:
      "Aplikasi untuk memesan tiket bioskop dengan alur cepat dan mudah.",
    category: "UI/UX",
    tech: ["Figma", "Flutter"],
    image: "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/image.png",
    screenshots: [
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/bioskop.png",
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/fullbioskop.png",
    ],
    demo: "https://example.com",
    github: "https://www.figma.com/design/BQiwzaa2wzSQ8s66sp7Trp/DESAIN-TIKET-FILM?t=YTQU4lMbsmnAoHP4-1",
    features: [
      "Booking tiket",
      "Seat selection",
      "Payment integration",
    ],
    uxResearch: {
      problem:
        "Pengguna kesulitan memilih kursi dan melihat jadwal film dengan cepat.",
      targetUser:
        "Pengguna bioskop yang ingin booking tiket secara online.",
      goals: [
        "Mempermudah pemilihan kursi",
        "Menampilkan jadwal secara jelas",
        "Mempercepat proses pembayaran",
      ],
      painPoints: [
        "UI pemilihan kursi membingungkan",
        "Informasi jadwal kurang jelas",
      ],
      solutions: [
        "Visual seat map interaktif",
        "Jadwal terstruktur",
        "Checkout cepat",
      ],
    },
  },
  {
    slug: "Tiket-Pesawat",
    title: "Tiket Pesawat",
    desc: "Aplikasi pemesanan tiket pesawat.",
    fullDesc:
      "Aplikasi mobile yang dirancang untuk membantu pengguna mencari dan memesan tiket pesawat dengan antarmuka yang intuitif dan minimalis. Fokus utama adalah kemudahan navigasi bagi pengguna yang ingin melakukan perjalanan cepat.",
    category: "UI/UX",
    tech: ["Figma", "Flutter"],
    image: "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/tipe.jpg",
    screenshots: [
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/pesawat.png",
      "https://github.com/MRNaufal21/my-digital-showcase/raw/main/src/assets/mock-pesawat.png",
    ],
    demo: "https://example.com",
    github: "https://www.figma.com/design/WDQh39FLXeCLjuRaItpb11/Untitled?node-id=0-1&t=YTQU4lMbsmnAoHP4-1",
    features: [
      "Booking Tiket Pesawat",
      "Upcoming Trips Monitoring",
      "Popular Destination Discovery",
    ],
    uxResearch: {
      problem:
        "Pengguna merasa proses pencarian destinasi dan pengisian data tiket terlalu rumit dan memakan waktu.",
      targetUser:
        "Traveler mandiri yang membutuhkan aplikasi pemesanan tiket yang simpel dan informatif di perangkat mobile.",
      goals: [
        "Menyederhanakan alur pemesanan tiket pesawat",
        "Menonjolkan informasi perjalanan mendatang (Upcoming Trips) di halaman utama",
        "Memberikan visual destinasi populer untuk meningkatkan minat pengguna",
      ],
      painPoints: [
        "Navigasi menu utama yang seringkali terlalu padat dengan informasi tidak relevan",
        "Kesulitan memantau jadwal tiket yang sudah dibeli secara cepat",
      ],
      solutions: [
        "Implementasi card 'Upcoming Trips' yang interaktif pada Main Menu",
        "Penyederhanaan form booking dengan pilihan 'One Way' dan 'Round Trip' yang jelas",
        "Layout minimalis dengan fokus pada elemen visual (ikon dan gambar destinasi)",
      ],
    },
  },
];

// Helper Functions & Export 'projects' yang dibutuhkan oleh ProjectDetail.tsx
export const getStoredProjects = (): Project[] => {
  try {
    const saved = localStorage.getItem("portfolio_projects");
    return saved ? JSON.parse(saved) : initialProjects;
  } catch {
    return initialProjects;
  }
};

export const saveProjects = (projectsList: Project[]) => {
  try {
    localStorage.setItem("portfolio_projects", JSON.stringify(projectsList));
  } catch (e) {
    alert("Penyimpanan lokal penuh!");
  }
};

// Variabel projects agar file lain seperti ProjectDetail.tsx tidak error
export const projects: Project[] = getStoredProjects();