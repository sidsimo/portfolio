// البيانات والترجمات الكاملة مع الروابط الديناميكية المصلحة لكل مشروع
const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills & Languages",
        navCertifications: "Certifications",
        navProjects: "Projects",
        navContact: "Contact",
        badge: "Welcome to my coding world 🚀",
        heroTitle: "I build <span class='text-sky-400 font-extrabold'>interactive</span> and professional web interfaces",
        heroDesc: "I am a passionate developer focused on building fast, clean, and fully responsive web applications using React and Tailwind CSS.",
        btnBrowse: "Browse Projects",
        btnContact: "Contact Me",
        skillsTitle: "Skills & Languages",
        skillsDesc: "Technologies I use and languages I speak.",
        techTitle: "Technical Skills",
        langTitle: "Languages",
        arabic: "Arabic: Native",
        french: "French: Intermediate",
        english: "English: Beginner / Intermediate",
        certsTitle: "Certifications",
        certsDesc: "Certificates earned to validate my software engineering and frontend skills.",
        issuedBy: "Issued by:",
        dateLabel: "Date:",
        projectsTitle: "Featured Projects",
        projectsDesc: "A collection of projects built to strengthen my software development skills.",
        liveDemo: "Live Demo",
        github: "GitHub",
        cvTitle: "Curriculum Vitae",
        cvDesc: "ATS-Friendly Format — Ready for Recruitment",
        btnDownload: "Download PDF",
        contactTitle: "Contact Me",
        contactDesc: "Have a project or opportunity? Feel free to drop a message!",
        location: "📍 Taroudant, Morocco",
        inputName: "Full Name",
        inputEmail: "Email Address",
        inputMessage: "Message",
        btnSend: "Send Message",
        footer: "© 2026 YOUNES EL FOUDIL. Built with passion.",
        certificationsData: [
            { title: "Web Development Course - JavaScript", academy: "Shiyar Academy", date: "November 05, 2024", id: "CSC-20241105-4391" },
            { title: "Web Basics Course - HTML", academy: "Shiyar Academy", date: "September 20, 2024", id: "CSC-20240920-3032" }
        ],
        projectsData: [
            { title: "Tailwind CSS Official Site Clone", desc: "A pixel-perfect replication of the Tailwind CSS homepage showcasing modern responsive layouts.", tags: ["HTML", "Tailwind CSS", "JavaScript"], image: "img2", liveLink: "https://sidsimo.github.io/tailwindcss/", githubLink: "https://github.com/sidsimo/tailwindcss" },
            { title: "Travel & Tourism (Travella)", desc: "Professional tourism website with a modern and fully responsive design.", tags: ["HTML", "Tailwind CSS", "JavaScript"], image: "img6", liveLink: "https://sidsimo.github.io/Travelia/traveliawebsite", githubLink: "https://github.com/sidsimo/Travelia" },
            { title: "Massar Clone", desc: "An accurate simulation of the login page for the Moroccan Massar system.", tags: ["HTML", "CSS", "JavaScript"], image: "img8", liveLink: "https://sidsimo.github.io/massarservice/", githubLink: "https://github.com/sidsimo/massarservice" },
            { title: "Netflix & Spotify Clone", desc: "Web app showcasing UI clones of global streaming giants with dark mode.", tags: ["React.js", "Tailwind CSS", "CSS"], image: "img1", liveLink: "https://sidsimo.github.io/project1/", githubLink: "https://github.com/sidsimo/project1" },
            { title: "Task Tracker", desc: "Smart application to manage and track daily tasks efficiently.", tags: ["React.js", "Tailwind CSS", "CSS"], image: "img4", liveLink: "https://sidsimo.github.io/project9/", githubLink: "https://github.com/sidsimo/project9" },
            { title: "Base64 Encoder Tool", desc: "Developer utility tool to encode and decode text strings easily.", tags: ["HTML", "CSS", "JavaScript"], image: "img3", liveLink: "https://sidsimo.github.io/project5/", githubLink: "https://github.com/sidsimo/project5" }
        ]
    },
    ar: {
        navAbout: "من أنا",
        navSkills: "المهارات واللغات",
        navCertifications: "الشهادات",
        navProjects: "المشاريع",
        navContact: "اتصل بي",
        badge: "مرحباً بك في عالم البرمجة الخاص بي 🚀",
        heroTitle: "أقوم ببناء واجهات ويب <span class='text-sky-400 font-extrabold'>تفاعلية</span> واحترافية",
        heroDesc: "مطور ويب شغوف بإنشاء تطبيقات ويب سريعة، نظيفة ومتجاوبة تماماً باستخدام React و Tailwind CSS.",
        btnBrowse: "تصفح المشاريع",
        btnContact: "اتصل بي",
        skillsTitle: "المهارات واللغات",
        skillsDesc: "التقنيات التي أستخدمها واللغات التي أتحدث بها.",
        techTitle: "المهارات التقنية",
        langTitle: "اللغات",
        arabic: "العربية: اللغة الأم",
        french: "الفرنسية: مستوى متوسط",
        english: "الإنجليزية: مبتدئ / متوسط",
        certsTitle: "الشهادات",
        certsDesc: "الشهادات التي حصلت عليها لإثبات مهاراتي في هندسة البرمجيات وتطوير الواجهات.",
        issuedBy: "صادرة من:",
        dateLabel: "التاريخ:",
        projectsTitle: "المشاريع المميزة",
        projectsDesc: "مجموعة من المشاريع التي قمت ببنائها لتعزيز مهاراتي في تطوير البرمجيات.",
        liveDemo: "معاينة حية",
        github: "جيت هاب",
        cvTitle: "السيرة الذاتية",
        cvDesc: "صيغة متوافقة مع أنظمة ATS — جاهزة للتوظيف",
        btnDownload: "تحميل PDF",
        contactTitle: "اتصل بي",
        contactDesc: "لديك مشروع أو فرصة عمل؟ لا تتردد في مراسلتي!",
        location: "📍 تارودانت، المغرب",
        inputName: "الاسم الكامل",
        inputEmail: "البريد الإلكتروني",
        inputMessage: "الرسالة",
        btnSend: "إرسال الرسالة",
        footer: "© 2026 يونس الفضيل. صُنع بكل شغف.",
        certificationsData: [
            { title: "دورة تطوير الويب - جاوا سكريبت", academy: "أكاديمية شيار", date: "05 نوفمبر 2024", id: "CSC-20241105-4391" },
            { title: "دورة أساسيات الويب - HTML", academy: "أكاديمية شيار", date: "20 سبتمبر 2024", id: "CSC-20240920-3032" }
        ],
        projectsData: [
            { title: "نسخ موقع Tailwind CSS الرسمي", desc: "محاكاة دقيقة جداً للصفحة الرئيسية لـ Tailwind CSS لعرض التصاميم المتجاوبة.", tags: ["HTML", "Tailwind CSS", "JavaScript"], image: "img2", liveLink: "https://sidsimo.github.io/tailwindcss/", githubLink: "https://github.com/sidsimo/tailwindcss" },
            { title: "موقع السفر والسياحة (Travella)", desc: "موقع سياحي احترافي بتصميم عصري ومتجاوب بالكامل.", tags: ["HTML", "Tailwind CSS", "JavaScript"], image: "img6", liveLink: "https://sidsimo.github.io/Travelia/traveliawebsite", githubLink: "https://github.com/sidsimo/Travelia" },
            { title: "محاكاة موقع مسار", desc: "محاكاة دقيقة لصفحة تسجيل الدخول لمنظومة مسار المغربية.", tags: ["HTML", "CSS", "JavaScript"], image: "img8", liveLink: "https://sidsimo.github.io/massarservice/", githubLink: "https://github.com/sidsimo/massarservice" },
            { title: "محاكاة نتفليكس وسبوتيفاي", desc: "تطبيق ويب يستعرض واجهات عملاقة البث العالمي مع الوضع الداكن.", tags: ["React.js", "Tailwind CSS", "CSS"], image: "img1", liveLink: " https://sidsimo.github.io/project1/", githubLink: "https://github.com/sidsimo/project1" },
            { title: "مستعرض المهام", desc: "تطبيق ذكي لإدارة وتتبع المهام اليومية بكفاءة عالية.", tags: ["React.js", "Tailwind CSS", "CSS"], image: "img4", liveLink: "https://sidsimo.github.io/project9/", githubLink: "https://github.com/sidsimo/project9" },
            { title: "أداة التشفير Base64", desc: "أداة مساعدة للمطورين لتشفير وفك تشفير النصوص بسهولة.", tags: ["HTML", "CSS", "JavaScript"], image: "img3", liveLink: "https://sidsimo.github.io/project5/", githubLink: "https://github.com/sidsimo/project5" }
        ]
    }
};

// خريطة مسارات الصور
const imageMap = {
    img1: "./assets/img1.jpeg",
    img2: "./assets/img2.jpeg",
    img3: "./assets/img3.jpeg",
    img4: "./assets/img4.jpeg",
    img6: "./assets/img6.jpeg",
    img7: "./assets/img7.jpeg",
    img8: "./assets/img8.jpeg"
};

const skillsData = ['React.js', 'JavaScript (ES6)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git & GitHub', 'Responsive Design'];
const filters = ['All', 'HTML', 'Tailwind CSS', 'React.js', 'JavaScript'];

// الحالات الافتراضية
let currentLang = 'en';
let activeFilter = 'All';
let menuOpen = false;

// دالة تحديث اللغات
function updateLanguageDOM() {
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';
    
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-t]').forEach(element => {
        const key = element.getAttribute('data-t');
        if (t[key]) element.textContent = t[key];
    });

    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('location-text').textContent = t.location;
    document.getElementById('footer-text').textContent = t.footer;

    document.getElementById('lang-btn-desktop').innerHTML = `🌐 ${currentLang === 'en' ? 'العربية' : 'English'}`;
    document.getElementById('lang-btn-mobile').innerHTML = `🌐 ${currentLang === 'en' ? 'AR' : 'EN'}`;

    renderLanguagesList(t);
    renderCertifications(t, isRtl);
    renderProjects();
}

function renderLanguagesList(t) {
    const container = document.getElementById('languages-list');
    const colors = { arabic: 'bg-emerald-500', french: 'bg-blue-500', english: 'bg-yellow-500' };
    
    container.innerHTML = ['arabic', 'french', 'english'].map(langKey => `
        <li class="flex items-center gap-2.5 text-slate-300">
            <span class="w-2 h-2 rounded-full ${colors[langKey]} shrink-0"></span> ${t[langKey]}
        </li>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = skillsData.map(skill => `
        <span class="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[11px] sm:text-xs font-mono text-slate-300">
            ${skill}
        </span>
    `).join('');
}

function renderCertifications(t, isRtl) {
    const container = document.getElementById('certifications-container');
    const paddingClass = isRtl ? 'pr-3' : 'pl-3';
    const borderDirection = isRtl ? 'right-0' : 'left-0';

    container.innerHTML = t.certificationsData.map(cert => `
        <div class="bg-slate-900/40 p-5 sm:p-6 rounded-xl border border-slate-900 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div class="absolute top-0 bottom-0 ${borderDirection} w-1.5 bg-gradient-to-b from-amber-400 via-yellow-500 to-transparent"></div>
            <div class="${paddingClass}">
                <div class="flex items-start justify-between gap-4 mb-3">
                    <h4 class="text-sm sm:text-base md:text-lg font-bold text-slate-100">${cert.title}</h4>
                    <span class="p-1 bg-amber-500/10 text-amber-400 rounded text-[10px] sm:text-xs font-mono shrink-0">
                        🏅 Certified
                    </span>
                </div>
                <div class="space-y-1 text-[11px] sm:text-xs md:text-sm text-slate-400">
                    <p><span class="text-slate-500">${t.issuedBy}</span> <strong class="text-slate-300">${cert.academy}</strong></p>
                    <p><span class="text-slate-500">${t.dateLabel}</span> ${cert.date}</p>
                </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-950 flex justify-between items-center text-[10px] sm:text-xs font-mono text-slate-500 ${paddingClass}">
                <span>ID: ${cert.id}</span>
                <span class="text-sky-400/80 font-semibold">verified ✓</span>
            </div>
        </div>
    `).join('');
}

function renderFilterButtons() {
    const container = document.getElementById('filter-buttons');
    container.innerHTML = filters.map(filter => {
        const isActive = activeFilter === filter;
        const activeClass = "bg-sky-500 text-white shadow-md";
        const inactiveClass = "bg-slate-900 text-slate-400 border border-slate-800";
        return `
            <button onclick="setFilter('${filter}')" class="px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${isActive ? activeClass : inactiveClass}">
                ${filter}
            </button>
        `;
    }).join('');
}

// دالة بناء المشاريع بالروابط الديناميكية المصلحة
function renderProjects() {
    const container = document.getElementById('projects-container');
    const t = translations[currentLang];
    
    const filtered = activeFilter === 'All' 
        ? t.projectsData 
        : t.projectsData.filter(p => p.tags.includes(activeFilter));

    container.innerHTML = filtered.map(project => `
        <div class="bg-slate-900/40 rounded-xl border border-slate-900 overflow-hidden flex flex-col justify-between group">
            <div>
                <div class="relative h-40 sm:h-44 w-full bg-slate-950 overflow-hidden">
                    <img 
                        src="${imageMap[project.image] || './assets/img1.jpeg'}" 
                        alt="${project.title}"
                        class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
                <div class="p-4 sm:p-5">
                    <h3 class="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">${project.title}</h3>
                    <p class="text-[11px] sm:text-xs text-slate-400 leading-relaxed mb-4">${project.desc}</p>
                    <div class="flex flex-wrap gap-1 mb-2">
                        ${project.tags.map(tag => `
                            <span class="px-2 py-0.5 bg-slate-950 text-slate-400 rounded text-[9px] sm:text-[10px] font-mono">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="p-4 sm:p-5 pt-0 flex gap-4 text-[11px] sm:text-xs font-medium border-t border-slate-950/40 mt-auto">
                <a href="${project.liveLink}" target="_blank" class="text-sky-400 hover:underline flex items-center gap-1">🔗 ${t.liveDemo}</a>
                <a href="${project.githubLink}" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-1">📁 ${t.github}</a>
            </div>
        </div>
    `).join('');
}

window.setFilter = function(filter) {
    activeFilter = filter;
    renderFilterButtons();
    renderProjects();
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguageDOM();
}

const menuToggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
    }
}

menuToggleBtn.addEventListener('click', toggleMenu);
document.getElementById('lang-btn-desktop').addEventListener('click', toggleLanguage);
document.getElementById('lang-btn-mobile').addEventListener('click', toggleLanguage);

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        if (menuOpen) toggleMenu();
    });
});

// تشغيل الدوال عند أول تحميل للصفحة
renderSkills();
renderFilterButtons();
updateLanguageDOM();