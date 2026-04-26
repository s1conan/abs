export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  href: string;
  label: string;
};

export type SiteDictionary = {
  brandTag: string;
  companyName: string;
  menuLabel: string;
  languageLabel: string;
  themeNote: string;
  nav: NavItem[];
  cta: string;
  ctaHref: string;
  footerNote: string;
  labels: {
    openPage: string;
    contentPresentation: string;
    note: string;
    nextEnhancement: string;
    previewDocument: string;
    clickToPreview: string;
    previousPage: string;
    nextPage: string;
    pageLabel: string;
    closePreview: string;
  };
  home: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
    features: Array<{
      title: string;
      description: string;
      href: string;
      icon: "profile" | "specifications" | "legality" | "partners" | "customers";
    }>;
    panelTitle: string;
    panelStatus: string;
    panelSummary: string;
    panelPoints: string[];
    sections: Array<{
      eyebrow: string;
      title: string;
      description: string;
    }>;
  };
  profile: {
    eyebrow: string;
    title: string;
    intro: string;
    historyTitle: string;
    history: string[];
    visionTitle: string;
    vision: string;
    missionTitle: string;
    missions: string[];
  };
  specifications: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{
      title: string;
      value: string;
      note: string;
      docs: Array<{
        title: string;
        description: string;
        images: string[];
        pdf: string;
      }>;
    }>;
    disclaimer: string;
  };
  legality: {
    eyebrow: string;
    title: string;
    intro: string;
    docs: Array<{
      title: string;
      description: string;
      images: string[];
    }>;
    note: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    partnersitems: Array<{
      company: string;
      description: string;
    }>;
  };
  customers: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    info: Array<{
      label: string;
      value: string;
    }>;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
};

export const siteContent: Record<Locale, SiteDictionary> = {
  id: {
    brandTag: "Distributor BBM Industri",
    companyName: "PT Anugerah Buana Sriwijaya",
    menuLabel: "Menu",
    languageLabel: "Bahasa",
    themeNote: "Tampilan menyesuaikan tema sistem pengguna.",
    nav: [
      { href: "/id", label: "Beranda" },
      { href: "/id/profile", label: "Profil" },
      { href: "/id/specifications", label: "Spesifikasi" },
      { href: "/id/legality", label: "Legalitas" },
      { href: "/id/partners", label: "Rekanan" },
      { href: "/id/customers", label: "Pelanggan" },
    ],
    cta: "Hubungi Kami",
    ctaHref: "/id/contact",
    footerNote:
      "Company profile distributor solar industri untuk kebutuhan operasional B2B.",
    labels: {
      openPage: "Buka halaman",
      contentPresentation: "Catatan",
      note: "Catatan",
      nextEnhancement: "Catatan",
      previewDocument: "Preview Dokumen",
      clickToPreview: "Klik box legalitas untuk melihat preview dokumen.",
      previousPage: "Halaman sebelumnya",
      nextPage: "Halaman berikutnya",
      pageLabel: "",
      closePreview: "Tutup preview",
    },
    home: {
      badge: "Distributor Resmi Solar HSD: Solusi Energi Terpercaya untuk Industri dan Maritim.",
      title: "Pasokan Solar Cepat, Tepat, dan Konsisten",
      description:
        "Didukung sistem distribusi yang efisien, kami memastikan kebutuhan BBM industri Anda terpenuhi kapan pun dibutuhkan.",
      primaryCta: "Lihat Profil Perusahaan",
      secondaryCta: "Lihat Kontak",
      stats: [
        { value: "24/7", label: "Respons operasional dan koordinasi distribusi" },
        { value: "QC", label: "Memperhatikan quality control bahan bakar yang kami supply" },
        { value: "Bulk", label: "Pasokan untuk proyek, gudang, dan genset" },
      ],
      features: [

        {
          title: "Spesifikasi",
          description:
            "Standar Mutu & Spesifikasi Produk",
          href: "/id/specifications",
          icon: "specifications",
        },
        {
          title: "Legalitas",
          description:
            "Dokumentasi lengkap dan transparansi legalitas perusahaan sebagai mitra energi yang sah.",
          href: "/id/legality",
          icon: "legality",
        },
        {
          title: "Rekanan",
          description:
            "Sinergi Strategis & Jaringan Suplai yang memperkuat layanan distribusi perusahaan.",
          href: "/id/partners",
          icon: "partners",
        },
        {
          title: "Pelanggan",
          description:
            "Kepercayaan Klien & Portofolio Proyek rekam jejak distribusi bahan bakar industri.",
          href: "/id/customers",
          icon: "customers",
        },
      ],
      panelTitle: "Kapabilitas",
      panelStatus: "Sejak 2022",
      panelSummary:
        "Kami berada dalam bisnis distribusi dan perdagangan bahan bakar industri komersial yang juga dikenal sebagai High Speed Diesel (HSD).",
      panelPoints: [
        "Distribusi terjadwal dan tepat waktu untuk memastikan kesinambungan kebutuhan rutin proyek Anda.",
        "Layanan logistik darat dan laut untuk pengiriman bahan bakar ke lokasi proyek serta kawasan industri.",
        "Memperhatikan aspek standart K3 (Keselamatan dan Kesehatan Kerja) dan lingkungan kerja.",
      ],
      sections: [
        {
          eyebrow: "Keandalan & Kecepatan",
          title: "Pasokan Solar Industri yang Cepat, Tepat, dan Konsisten",
          description:
            "Bergabunglah dengan puluhan mitra industri yang telah mempercayakan kebutuhan energinya kepada kami. Hubungi tim legalitas dan teknis kami.",
        },
        {
          eyebrow: "Harga Terbaik",
          title: "Dapatkan Penawaran Harga Kompetitif untuk Solar Industri Anda",
          description:
            "Optimalkan kebutuhan suplai bahan bakar industri Anda! Dapatkan penawaran harga terbaik dan layanan yang responsif dengan menghubungi kami hari ini.",
        },
      ],
    },
    profile: {
      eyebrow: "Profil Perusahaan",
      title: "PT ANUGERAH BUANA SRIWIJAYA",
      intro:
        "Hadir di Palembang sejak 2022, berbekal pengalaman dan komitmen K3, menyediakan solusi bahan bakar High Speed Diesel (HSD) secara efisien dan terpercaya dengan standar kualitas dan keamanan terbaik.",
      historyTitle: "Sejarah Perusahaan",
      history: [
        "PT Anugerah Buana Sriwijaya dibangun pada 01 Juli 2022 untuk menjawab kebutuhan distribusi solar industri yang menuntut pasokan tepat waktu dan komunikasi yang jelas.",
        "Disahkan dengan Keputusan Menteri dan Hukum Republik Indonesia Nomor : AHU-00609 AH.02.01 Tahun 2016, perusahaan ini memulai perjalanan bisnisnya dengan fokus pada layanan distribusi bahan bakar industri yang profesional dan dapat diandalkan.",
        "Seiring meningkatnya kebutuhan bahan bakar pada sektor manufaktur, proyek, logistik, dan genset, perusahaan memfokuskan diri pada layanan distribusi B2B yang stabil dan terukur.",
        "Untuk memastikan kelancaran distribusi, kami menyediakan logistik terintegrasi melalui transportasi darat maupun laut. Kami siap menjangkau lokasi pelanggan dengan aman dan efisien.",
        "Dalam operasionalnya, kami juga berkomitmen penuh terhadap standar K3 (Keselamatan dan Kesehatan Kerja) serta kelestarian lingkungan kerja.",
        "Quality control bahan bakar yang kami supply menjadi perhatian utama untuk memastikan kepuasan pelanggan dan kepercayaan dalam setiap transaksi distribusi.",
      ],
      visionTitle: "Visi",
      vision:
        "Menjadi mitra distribusi solar industri yang terpercaya, responsif, dan konsisten dalam mendukung operasional pelanggan di berbagai sektor usaha. Selalu tumbuh dan berkembang secara konsisten serta memberikan pelayanan yang terbaik.",
      missionTitle: "Misi",
      missions: [
        "Menyediakan pasokan solar industri yang aman, tepat waktu, dan sesuai kebutuhan operasional pelanggan.",
        "Menjalankan pelayanan yang profesional melalui komunikasi yang cepat, dokumentasi yang rapi, dan koordinasi distribusi yang baik.",
        "Membangun hubungan bisnis jangka panjang berdasarkan integritas, legalitas, dan kepercayaan.",
      ],
    },
    specifications: {
      eyebrow: "Spesifikasi Produk",
      title: "Spesifikasi produk ditampilkan dengan detail.",
      intro:
        "Spesifikasi teknis dan informasi produk disajikan dalam format yang mudah dipahami guna memudahkan tim pengadaan dan teknis dalam mereview serta mengevaluasi kebutuhan bahan bakar industri Anda.",
      cards: [
        {
          title: "Solar Industri / HSD",
          value: "Biosolar Industri (B40)",
          note: "Bahan bakar mesin putaran tinggi (HSD) yang merupakan campuran bahan bakar destilasi jenis solar dengan bahan bakar nabati. Saat ini, besaran pencampuran minyak nabati ke dalam minyak solar sebesar 40% atau dikenal B40.",
          docs: [
            {
              title: "Spesifikasi",
              description: "B40",
              images: [],
              pdf: "/specifications/spesifikasi-b40.pdf", // Gunakan pdf1 sebagai source untuk spesifikasi
            },
            {
              title: "Data Teknis",
              description: "B40",
              images: [],
              pdf: "/specifications/sds-biosolar-b40.pdf", // Gunakan pdf2 sebagai source untuk data teknis
            },
          ]
        },
      ],
      disclaimer:
        "Spesifikasi produk dapat berubah sewaktu-waktu mengikuti pembaruan teknologi dan standar regulasi migas terbaru. Pastikan untuk selalu memeriksa dokumen resmi dan berkonsultasi dengan tim teknis kami untuk informasi terkini sebelum melakukan pemesanan atau penggunaan produk.",
    },
    legality: {
      eyebrow: "Legalitas",
      title: "Komitmen pada Integritas & Kepatuhan melalui Dokumentasi Legalitas yang Transparan",
      intro:
        "PT Anugerah Buana Sriwijaya beroperasi dengan izin lengkap dan dokumentasi resmi. Kami adalah mitra distribusi energi yang mengutamakan transparansi hukum di setiap langkah bisnis.",
      docs: [
        {
          title: "Akta Pendirian Perseroan Terbatas",
          description:
            "Akta Notaris Nomor : 02 tanggal 01 Juli 2022",
          images: ["/legality/akta-notaris.jpg"],
        },
        {
          title: "Nomor Induk Berusaha (NIB)",
          description:
            "Nomor : 0407220038069",
          images: ["/legality/nib-1.jpg", "/legality/nib-2.jpg"],
        },
        {
          title: "Keputusan Menteri Hukum dan HAM (KEMENKUMHAM)",
          description:
            "Nomor : AHU-0044227.AH.01.01.Tahun 2022",
          images: ["/legality/kemen-1.jpg", "/legality/kemen-2.jpg"],
        },
        {
          title: "NPWP Perusahaan",
          description:
            "60.089.705.2-301.000",
          images: ["/legality/npwp-1.jpg"],
        },
        {
          title: "Surat Keterangan Penyalur (SKP)",
          description:
            "Nomor : 010/LDE/VII/2022",
          images: ["/legality/skp-1.jpg", "/legality/skp-2.jpg"],
        },
        {
          title: "Surat Keterangan Terdaftar (SKT)",
          description:
            "Nomor : S-7303KT/WPJ.03/KP.0203/2022",
          images: ["/legality/skt-1.jpg", "/legality/skt-2.jpg"],
        },
      ],
      note:
        "Bila Anda memerlukan dokumen legalitas lainnya atau memiliki pertanyaan terkait legalitas perusahaan, jangan ragu untuk menghubungi tim legalitas kami melalui halaman kontak.",
    },
    partners: {
      eyebrow: "Rekanan",
      title: "Jaringan kolaborasi yang mendukung distribusi yang kuat dan layanan yang komprehensif",
      intro:
        "Jaringan distribusi kami didukung oleh kolaborasi dengan berbagai rekanan yang memiliki peran penting dalam memastikan layanan distribusi bahan bakar industri yang efisien dan dapat diandalkan.",
      partnersitems: [
        {
          company: "PT Raja Samudra Jaya",
          description: "Area Kerja : PT Kalidareh Prima Mandiri, Bayung Lencir, Sumatera Selatan",
        },
        {
          company: "PT Putri Melati Asih",
          description: "Area Kerja : PLTU Ombilin, Sawahlunto, Padang, Sumatera Barat",
        },
        {
          company: "PT Soga Teknik Utama",
          description: "Area Kerja : PT Pupuk Sriwidjaja, Palembang, Sumatera Selatan",
        },
        {
          company: "PT Energate Prima Indonesia",
          description: "Desa Prambatan, Kec. Abab, Kabupaten PALI, Sumatera Selatan",
        },
      ],
      note:
        "Rekanan dapat berupa perusahaan logistik, vendor bahan bakar, atau mitra distribusi yang memperkuat layanan perusahaan.",
    },
    customers: {
      eyebrow: "Pelanggan",
      title: "Rekam Jejak Distribusi dan Kepercayaan Pelanggan",
      intro:
        "Kepercayaan pelanggan adalah aset terbesar kami. Halaman ini mendokumentasikan jaringan distribusi kami kepada para mitra yang telah bekerja sama dalam menjaga efisiensi energi industri mereka.",
      items: [
        "PT Sumatera Bara Utama (Lahat)",
        "PT MNC Infrastruktur Utama (Site APE)",
        "PT Energate Prima Indonesia (PALI)",
        "PT Megah Hijau Bersama",
      ],
      note:
        "Pelanggan kami berasal dari berbagai sektor industri, termasuk manufaktur, proyek konstruksi, logistik, dan penyedia energi untuk genset.",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Hubungi Kami",
      intro:
        "Jangan ragu untuk menghubungi kami untuk pertanyaan, penawaran, atau kebutuhan distribusi bahan bakar industri Anda. Tim kami siap membantu dengan respons cepat dan layanan yang profesional.",
      info: [
        { label: "Telepon", value: "+62 812 7179 9190" },
        { label: "Email", value: "anugerah.buanasriwijaya75@gmail.com" },
        { label: "Alamat", value: "JI. Bayam No. 1702 RT. 021 RW. 009 Kel. 9 Ilir Kec. Ilir Timur III Palembang, Sumatera Selatan 30113" },
        { label: "Wilayah Layanan", value: "Sumatera Selatan dan Sumatera Barat" },
      ],
      cards: [
        {
          title: "Permintaan Penawaran",
          description:
            "Kami siap memberikan penawaran harga dan layanan untuk kebutuhan distribusi bahan bakar industri Anda. Hubungi kami untuk informasi lebih lanjut.",
        },
        {
          title: "Kunjungan dan Verifikasi",
          description:
            "Kami terbuka untuk kunjungan lapangan dan proses verifikasi sebagai bagian dari upaya membangun kepercayaan dan memastikan kebutuhan distribusi Anda terpenuhi dengan baik.",
        },
      ],
    },
  },
  en: {
    brandTag: "Industrial Fuel Distributor",
    companyName: "PT Anugerah Buana Sriwijaya",
    menuLabel: "Menu",
    languageLabel: "Language",
    themeNote: "Appearance adapts to the user system theme.",
    nav: [
      { href: "/en", label: "Home" },
      { href: "/en/profile", label: "Profile" },
      { href: "/en/specifications", label: "Specifications" },
      { href: "/en/legality", label: "Legality" },
      { href: "/en/partners", label: "Partners" },
      { href: "/en/customers", label: "Customers" },
    ],
    cta: "Contact Us",
    ctaHref: "/en/contact",
    footerNote:
      "Company profile of an industrial diesel distributor for B2B operational needs.",
    labels: {
      openPage: "Open page",
      contentPresentation: "Notes",
      note: "Note",
      nextEnhancement: "Notes",
      previewDocument: "Document Preview",
      clickToPreview: "Click a legality card to show the document preview above.",
      previousPage: "Previous page",
      nextPage: "Next page",
      pageLabel: "Page",
      closePreview: "Close preview",
    },
    home: {
      badge: "Official Industrial Diesel Distributor: Reliable Energy Solutions for Industry and Maritime.",
      title: "Fast, Precise, and Consistent Diesel Supply",
      description:
        "Backed by an efficient distribution system, we ensure your industrial fuel needs are met whenever required.",
      primaryCta: "View Company Profile",
      secondaryCta: "View Contact",
      stats: [
        { value: "24/7", label: "operational response and delivery coordination" },
        { value: "B2B", label: "service approach tailored for companies" },
        { value: "Bulk", label: "supply for projects, warehouses, and gensets" },
      ],
      features: [
        {
          title: "Specifications",
          description:
            "Product Quality Standards & Specifications",
          href: "/en/specifications",
          icon: "specifications",
        },
        {
          title: "Legality",
          description:
            "Complete documentation and legal transparency of the company as a legitimate energy partner.",
          href: "/en/legality",
          icon: "legality",
        },
        {
          title: "Partners",
          description:
            "Strategic Synergies & Supply Network that strengthens the company's distribution services.",
          href: "/en/partners",
          icon: "partners",
        },
        {
          title: "Customers",
          description:
            "Client Trust & Project Portfolio showcasing the track record of industrial fuel distribution.",
          href: "/en/customers",
          icon: "customers",
        },
      ],
      panelTitle: "Capabilities",
      panelStatus: "Since 2022",
      panelSummary:
        "We are in the business of distributing and trading commercial industrial fuel, also known as High Speed Diesel (HSD).",
      panelPoints: [
        "Scheduled and timely distribution to ensure the continuity of your routine project needs.",
        "Land and sea logistics services for fuel delivery to project sites and industrial areas.",
        "Attention to K3 (Occupational Safety and Health) and workplace environmental aspects.",
      ],
      sections: [
        {
          eyebrow: "Reliability & Speed",
          title: "Fast, Precise, and Consistent Industrial Diesel Supply",
          description:
            "Join the dozens of industrial partners who have entrusted their energy needs to us. Contact our legality and technical teams.",
        },
        {
          eyebrow: "Best Pricing",
          title: "Get Competitive Pricing for Your Industrial Diesel",
          description:
            "Optimize your industrial fuel supply needs! Get the best pricing and responsive service by contacting us today.",
        },
      ],
    },
    profile: {
      eyebrow: "Company Profile",
      title: "PT ANUGERAH BUANA SRIWIJAYA",
      intro:
        "Established in Palembang since 2022, with experience and commitment to K3, providing efficient and reliable High Speed Diesel (HSD) fuel solutions with the best quality and safety standards.",
      historyTitle: "Company History",
      history: [
        "PT Anugerah Buana Sriwijaya was established on July 1, 2022, to address the need for industrial diesel distribution that demands timely supply and clear communication.",
        "Incorporated with the Decree of the Minister of Law and Human Rights of the Republic of Indonesia Number: AHU-00609 AH.02.01 Year 2016, the company began its business journey with a focus on providing professional and reliable industrial fuel distribution services.",
        "As the demand for fuel in the manufacturing, construction, logistics, and genset energy provider sectors increased, the company focused on stable and scalable B2B distribution services.",
        "To ensure smooth distribution, we provide integrated logistics through land and sea transportation. We are ready to reach customer locations safely and efficiently.",
        "In our operations, we are also fully committed to K3 (Occupational Safety and Health) standards and workplace sustainability.",
        "Quality control of the fuel we supply is a top priority to ensure customer satisfaction and trust in every distribution transaction.",
      ],
      visionTitle: "Vision",
      vision:
        "To be a trusted, responsive, and consistent industrial diesel distribution partner in supporting customer operations across various business sectors. Always growing and developing consistently while providing the best service.",
      missionTitle: "Mission",
      missions: [
        "Provide safe, timely, and operationally appropriate industrial diesel supply to customers.",
        "Conduct professional service through fast communication, neat documentation, and good distribution coordination.",
        "Build long-term business relationships based on integrity, legality, and trust.",
      ],
    },
    specifications: {
      eyebrow: "Product Specifications",
      title: "Product specifications are displayed in detail.",
      intro:
        "Technical specifications and product information are presented in an easy-to-understand format to facilitate procurement and technical teams in reviewing and evaluating your industrial fuel needs.",
      cards: [
        {
          title: "Industrial Diesel / HSD",
          value: "Industrial Biodiesel (B40)",
          note: "High Speed Diesel (HSD) fuel that is a blend of distillate fuel type diesel with biofuel. Currently, the blending ratio of vegetable oil into diesel is 40% or known as B40.",
          docs: [
            {
              title: "Specification Sheet",
              description: "B40",
              images: [],
              pdf: "/specifications/spesifikasi-b40.pdf", // Use pdf1 as the source for specifications
            },
            {
              title: "Technical Data Sheet",
              description: "B40",
              images: [],
              pdf: "/specifications/sds-biosolar-b40.pdf", // Use pdf2 as the source for technical data
            },
          ]
        },
      ],
      disclaimer:
        "Product specifications are subject to change at any time following technological updates and the latest fuel regulatory standards. Always check official documents and consult with our technical team for the latest information before placing an order or using the product.",
    },
    legality: {
      eyebrow: "Legality",
      title: "Commitment to Integrity & Compliance through Transparent Legality Documentation",
      intro:
        "PT Anugerah Buana Sriwijaya operates with complete permits and official documentation. We are an energy distribution partner that prioritizes legal transparency in every step of our business.",
      docs: [
        {
          title: "Akta Pendirian Perseroan Terbatas",
          description:
            "Akta Notaris Nomor : 02 tanggal 01 Juli 2022",
          images: ["/legality/akta-notaris.jpg"],
        },
        {
          title: "Nomor Induk Berusaha (NIB)",
          description:
            "Nomor : 0407220038069",
          images: ["/legality/nib-1.jpg", "/legality/nib-2.jpg"],
        },
        {
          title: "Keputusan Menteri Hukum dan HAM (KEMENKUMHAM)",
          description:
            "Nomor : AHU-0044227.AH.01.01.Tahun 2022",
          images: ["/legality/kemen-1.jpg", "/legality/kemen-2.jpg"],
        },
        {
          title: "NPWP Perusahaan",
          description:
            "60.089.705.2-301.000",
          images: ["/legality/npwp-1.jpg"],
        },
        {
          title: "Surat Keterangan Penyalur (SKP)",
          description:
            "Nomor : 010/LDE/VII/2022",
          images: ["/legality/skp-1.jpg", "/legality/skp-2.jpg"],
        },
        {
          title: "Surat Keterangan Terdaftar (SKT)",
          description:
            "Nomor : S-7303KT/WPJ.03/KP.0203/2022",
          images: ["/legality/skt-1.jpg", "/legality/skt-2.jpg"],
        },
      ],
      note:
        "If you require additional legality documents or have questions regarding the company's legality, please do not hesitate to contact our legality team through the contact page.",
    },
    partners: {
      eyebrow: "Partners",
      title: "Collaborative Network Supporting Strong Distribution and Comprehensive Services",
      intro:
        "Our distribution network is supported by collaborations with various partners who play a crucial role in ensuring efficient and reliable industrial fuel distribution services.",
      partnersitems: [
        {
          company: "PT Raja Samudra Jaya",
          description: "Working Area : PT Kalidareh Prima Mandiri, Bayung Lencir, Sumatera Selatan",
        },
        {
          company: "PT Putri Melati Asih",
          description: "Working Area : PLTU Ombilin, Sawahlunto, Padang, Sumatera Barat",
        },
        {
          company: "PT Soga Teknik Utama",
          description: "Working Area : PT Pupuk Sriwidjaja, Palembang, Sumatera Selatan",
        },
        {
          company: "PT Energate Prima Indonesia",
          description: "Working Area : Desa Prambatan, Kec. Abab, Kabupaten PALI, Sumatera Selatan",
        },
      ],
      note:
        "Partners can include logistics companies, fuel vendors, or distribution partners that strengthen the company's services.",
    },
    customers: {
      eyebrow: "Customers",
      title: "Distribution Track Record and Customer Trust",
      intro:
        "Customer trust is our greatest asset. This page documents our distribution network to the partners who have collaborated in maintaining the efficiency of their industrial energy.",
      items: [
        "PT Sumatera Bara Utama (Lahat)",
        "PT MNC Infrastruktur Utama (Site APE)",
        "PT Energate Prima Indonesia (PALI)",
        "PT Megah Hijau Bersama",
      ],
      note:
        "Our customers come from various industrial sectors, including manufacturing, construction projects, logistics, and energy providers for gensets.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Us",
      intro:
        "Don't hesitate to contact us for inquiries, offers, or your industrial fuel distribution needs. Our team is ready to assist with quick responses and professional service.",
      info: [
        { label: "Phone", value: "+62 812 7179 9190" },
        { label: "Email", value: "anugerah.buanasriwijaya75@gmail.com" },
        { label: "Address", value: "JI. Bayam No. 1702 RT. 021 RW. 009 Kel. 9 Ilir Kec. Ilir Timur III Palembang, Sumatera Selatan 30113" },
        { label: "Coverage", value: "South Sumatra and West Sumatra" },
      ],
      cards: [
        {
          title: "Quotation Requests",
          description:
            "We are ready to provide competitive pricing and responsive service for your industrial fuel distribution needs. Contact us for more information.",
        },
        {
          title: "Visits and Verification",
          description:
            "We welcome field visits and verification processes as part of our efforts to build trust and ensure your distribution needs are well understood and met.",
        },
      ],
    },
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
