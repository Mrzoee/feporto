/**
 * Berkas data terpusat (src/data.ts)
 * Berkas ini berisi data profil, keahlian, proyek, pengalaman kerja/organisasi,
 * dan pencapaian yang disesuaikan dengan CV Yesy Lely Yestiana.
 */

export const personalData = {
  name: "Yesy Lely Yestiana",
  title: "Full Stack Enthusiast",
  subtitle: "Public Relations | Event Coordination | Informatics Graduate | Broadcast & Web Developer",
  profileImage: "/images/profile-yesy.jpeg",
  email: "yesyyestiana152@gmail.com",
  phone: "+62 813-5894-6702",
  whatsapp: "https://wa.me/6281358946702",
  linkedin: "https://www.linkedin.com/in/yesy-yestiana",
  github: "https://github.com",
  cvFile: "/CV PR-Yesy Lely Yestiana.docx",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta dengan IPK 3,76/4,00 yang memiliki pengalaman dalam organisasi, koordinasi kegiatan, administrasi, komunikasi, event, dan media/broadcast. Berpengalaman sebagai Sekretaris Umum dalam organisasi mahasiswa selama dua periode serta terlibat dalam berbagai kegiatan sebagai panitia acara, sponsorship, dan administrasi. Memiliki pengalaman magang di MTA TV yang memberikan pemahaman mendalam mengenai operasional media dan siaran, serta pengalaman berkoordinasi dengan berbagai pihak dalam pengembangan sistem inventaris berbasis web dan pelaksanaan kegiatan. Terbiasa menyusun dokumen resmi, mengelola informasi, berkoordinasi dalam tim, menangani kebutuhan kegiatan, serta menyelesaikan permasalahan secara responsif didukung kemampuan komunikasi, teamwork, leadership, dan problem solving yang kuat."
  ]
};

export const skillsData = [
  { name: "Public Relations", level: "Communication & Stakeholder Coordination", category: "Communication", color: "from-pink-500 to-rose-500" },
  { name: "Event Coordination", level: "Event Planning, Timeline & Rundown", category: "Event", color: "from-purple-500 to-indigo-500" },
  { name: "Administration", level: "Proposal, RAB, LPJ & Database", category: "Administrative", color: "from-blue-400 to-cyan-500" },
  { name: "Digital Media", level: "Canva, CapCut, Figma & Content Creation", category: "Design", color: "from-amber-400 to-orange-500" },
  { name: "Web Development", level: "Laravel, PHP, JavaScript, Vue.js, MySQL", category: "Technical", color: "from-emerald-400 to-teal-500" },
  { name: "Broadcast Operations", level: "Technical Support & Live Streaming", category: "Media", color: "from-violet-400 to-purple-600" },
];

export const projectsData = [
  {
    title: "Sistem Inventaris MTA TV",
    description: "Aplikasi berbasis web untuk digitalisasi manajemen peminjaman dan inventaris barang operasional siaran di MTA TV Studio, mempermudah pelacakan aset dan koordinasi operasional teknis harian.",
    mediaType: "image",
    mediaUrl: "/images/p1.svg",
    tags: ["Laravel", "PHP", "MySQL", "Broadcast Tools"],
    link: "https://www.linkedin.com/in/yesy-yestiana"
  },
  {
    title: "FOSTIFEST Event & Sponsorship",
    description: "Perencanaan dan koordinasi komprehensif gelaran FOSTIFEST UMS, mencakup penyusunan konsep tema, timeline, rundown teknis, koordinasi narasumber, dan kemitraan sponsorship.",
    mediaType: "image",
    mediaUrl: "/images/p2.svg",
    tags: ["Event Planning", "Sponsorship", "Rundown", "Coordination"],
    link: "https://www.linkedin.com/in/yesy-yestiana"
  },
  {
    title: "Real-time Chat Web App",
    description: "Aplikasi obrolan daring interaktif real-time yang dikembangkan dengan Vue.js dan WebSocket pada Workshop Nasional FOSTI Festival Universitas Muhammadiyah Surakarta.",
    mediaType: "image",
    mediaUrl: "/images/p3.svg",
    tags: ["Vue.js", "JavaScript", "Realtime Web", "Frontend"],
    link: "https://www.linkedin.com/in/yesy-yestiana"
  },
  {
    title: "Sistem Administrasi FOSTI & KMF-KI",
    description: "Tata kelola administrasi terpadu untuk 20+ kegiatan tahunan organisasi, meliputi penyusunan RAB, proposal kegiatan, database organisasi, dan Laporan Pertanggungjawaban (LPJ).",
    mediaType: "image",
    mediaUrl: "/images/p1.svg",
    tags: ["Administration", "Database", "Budgeting (RAB)", "LPJ Reporting"],
    link: "https://www.linkedin.com/in/yesy-yestiana"
  },
  {
    title: "Madrasah Mentor LPPIK UMS",
    description: "Pengelolaan teknis kepanitiaan acara pembekalan mentor tingkat fakultas, meliputi manajemen panggung, sound system, alur kegiatan, dan evaluasi kepuasan peserta.",
    mediaType: "image",
    mediaUrl: "/images/p2.svg",
    tags: ["Event Coordination", "Technical Support", "LPPIK UMS"],
    link: "https://www.linkedin.com/in/yesy-yestiana"
  }
];

export const experiencesData = {
  work: [
    {
      role: "Broadcast Technical & Web Development Intern",
      company: "MTA TV Studio",
      location: "Surakarta, Jawa Tengah",
      period: "Mar - Mei 2024",
      points: [
        "Mendukung kegiatan operasional teknis siaran & live streaming selama program MTA TV berlangsung dalam lingkungan kerja media yang responsif dan kolaboratif.",
        "Mengembangkan website peminjaman & inventaris barang untuk membantu pengelolaan kebutuhan operasional studio.",
        "Mengidentifikasi kebutuhan pengguna melalui komunikasi langsung dengan staf teknis dan menerjemahkannya ke dalam arsitektur sistem.",
        "Melakukan pengujian sistem, troubleshooting teknis, dokumentasi, dan memberikan panduan penggunaan kepada pengguna."
      ]
    },
    {
      role: "Sekretaris Umum",
      company: "Forum Open Source Teknik Informatika (FOSTI) - UMS",
      location: "Surakarta, Jawa Tengah",
      period: "Des 2022 - Des 2023",
      points: [
        "Mengelola administrasi organisasi meliputi dokumen resmi, jadwal kegiatan, database anggota, proposal, dan laporan pertanggungjawaban.",
        "Mempersiapkan dokumen administrasi untuk 20+ kegiatan organisasi, termasuk penyusunan rencana anggaran biaya (RAB).",
        "Mengoordinasikan kebutuhan administrasi rapat kerja, termasuk penyusunan agenda rapat, pengiriman undangan, bahan rapat, dan notula resmi.",
        "Mendukung kelancaran pelaksanaan kegiatan melalui pengelolaan informasi dan koordinasi efektif antaranggota."
      ]
    },
    {
      role: "Divisi Keanggotaan",
      company: "Forum Open Source Teknik Informatika (FOSTI) - UMS",
      location: "Surakarta, Jawa Tengah",
      period: "Des 2023 - Des 2024",
      points: [
        "Mendukung koordinasi anggota dan memastikan kelancaran eksekusi program kerja tahunan organisasi.",
        "Membantu menyampaikan informasi kegiatan dan kebutuhan organisasi secara transparan kepada seluruh anggota.",
        "Berpartisipasi aktif dalam kegiatan kaderisasi, pengembangan anggota, dan kegiatan internal organisasi."
      ]
    },
    {
      role: "Sekretaris Umum",
      company: "Koordinator Mentoring Fakultas Komunikasi & Informatika (KMF-KI)",
      location: "Surakarta, Jawa Tengah",
      period: "Sep 2022 - 2024",
      points: [
        "Melakukan manajemen jadwal organisasi, pengelolaan dokumen, database mentoring fakultas, serta penyusunan proposal untuk proses administrasi kegiatan.",
        "Mempersiapkan persyaratan administrasi untuk 20+ kegiatan dengan menyusun laporan, rancangan anggaran, dan LPJ untuk diajukan ke pihak LPPIK UMS.",
        "Mengelola rapat kerja organisasi, mengirimkan undangan kepada anggota, mempersiapkan bahan rapat, dan menulis notula rapat."
      ]
    },
    {
      role: "Panitia Acara, Sponsorship & Keuangan",
      company: "Kepanitiaan FOSTIFEST & LPPIK UMS",
      location: "Surakarta, Jawa Tengah",
      period: "2023 - 2024",
      points: [
        "Sie Acara FOSTIFEST (2024): Merancang konsep dan tema acara, menyusun timeline dan rundown rinci, serta mengatur teknis sound system dan pencahayaan.",
        "Bendahara Panitia Raker FOSTI (2024): Manajemen keuangan organisasi dengan menyusun RAB, verifikasi transaksi, dan menyusun laporan pertanggungjawaban keuangan.",
        "Sie Sponsorship FOSTIFEST (2023): Menjalin relasi dan negosiasi dengan calon sponsor, mengajukan proposal, serta mengawal komitmen benefit timbal balik kerja sama.",
        "Sie Acara Madrasah Mentor LPPIK UMS (2023): Koordinasi pembicara, evaluasi kegiatan, penataan ruangan dan dekorasi, serta pengelolaan alur acara."
      ]
    }
  ],
  education: [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Surakarta",
      location: "Surakarta, Jawa Tengah",
      period: "Sep 2021 - Sekarang",
      gpa: "3.76 / 4.00",
      details: "Mata Kuliah Relevan: Komunikasi/Kerja Tim Proyek Akademik, Rekayasa Perangkat Lunak, Pemrograman Web, Pemrograman Mobile, Pemrograman Game, Animasi Komputer, Virtual World, Kecerdasan Buatan, Sains Data."
    }
  ],
  organization: [
    {
      role: "Sekretaris Umum & Divisi Keanggotaan",
      organization: "UKM Forum Open Source Teknik Informatika (FOSTI) UMS",
      location: "Surakarta, Indonesia",
      period: "2022 - 2024",
      points: [
        "Memimpin tata kelola administrasi dan pengarsipan untuk lebih dari 20 kegiatan tahunan.",
        "Mengoordinasikan pengembangan keanggotaan dan hubungan internal antaranggota."
      ]
    },
    {
      role: "Sekretaris Umum",
      organization: "Koordinator Mentoring Fakultas Komunikasi & Informatika (KMF-KI)",
      location: "Surakarta, Indonesia",
      period: "2022 - 2024",
      points: [
        "Bertanggung jawab atas administrasi kegiatan mentoring fakultas serta koordinasi dengan LPPIK UMS."
      ]
    }
  ]
};

export const achievementsData = [
  {
    title: "Workshop Nasional FOSTI Festival 2024",
    event: "Forum Open Source Teknik Informatika UMS — 2024",
    description: "Mengikuti pelatihan intensif pengembangan aplikasi web menggunakan Vue.js dengan fokus pada aplikasi real-time chat interaktif.",
    icon: "💻",
    certificateUrl: ""
  },
  {
    title: "DataCamp Certifications in AI & Data Science",
    event: "DataCamp — Machine Learning & Deep Learning Track",
    description: "Menyelesaikan program sertifikasi mencakup End-to-End Machine Learning, Deep Learning with PyTorch, pandas, NumPy, dan Linear Classifiers in Python.",
    icon: "🧠",
    certificateUrl: ""
  },
  {
    title: "FOSClass Programming Training",
    event: "Forum Open Source Teknik Informatika UMS",
    description: "Mengikuti kegiatan pembelajaran dan pengembangan kemampuan pemrograman software dan web development.",
    icon: "🚀",
    certificateUrl: ""
  },
  {
    title: "IPK 3.76 / 4.00 - Prestasi Akademik",
    event: "S1 Teknik Informatika Universitas Muhammadiyah Surakarta",
    description: "Mencapai indeks prestasi kumulatif 3.76/4.00 dengan penguasaan di bidang rekayasa perangkat lunak, pemrograman web, dan sains data.",
    icon: "🎓",
    certificateUrl: ""
  },
  {
    title: "Sekretaris Umum 2 Periode Berturut-turut",
    event: "FOSTI UMS & KMF-KI UMS (2022 - 2024)",
    description: "Dipercaya memimpin administrasi dua organisasi mahasiswa besar dan berhasil mengoordinasikan administrasi untuk lebih dari 40 kegiatan.",
    icon: "📋",
    certificateUrl: ""
  },
  {
    title: "Broadcast Technical & Web Development Intern",
    event: "MTA TV Studio Surakarta (2024)",
    description: "Berhasil menyelesaikan magang teknis penyiaran dan mengembangkan sistem informasi inventaris berbasis web untuk operasional stasiun televisi.",
    icon: "📺",
    certificateUrl: ""
  }
];
