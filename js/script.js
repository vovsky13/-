document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = {
        'courses-title': { 'ru': 'Наши курсы', 'ro': 'Cursurile noastre' },
        'course1': { 'ru': 'Категория "B" - легковые автомобили', 'ro': 'Categoria "B" - autoturisme' },
        'course2': { 'ru': 'Категория "A" - мотоциклы', 'ro': 'Categoria "A" - motociclete' },
        'course3': { 'ru': 'Экспресс-обучение (1.5 месяца)', 'ro': 'Instruire accelerată (1.5 luni)' },
        'course4': { 'ru': 'Индивидуальный график занятий', 'ro': 'Program individual de antrenament' },
        'course5': { 'ru': 'Подготовка к экзамену в дорожной полиции', 'ro': 'Pregătire pentru examenul la poliția rutieră' },
        'benefits-title': { 'ru': 'Наши преимущества', 'ro': 'Avantajele noastre' },
        'benefit1': { 'ru': 'Опытные инструкторы', 'ro': 'Instructori cu experiență' },
        'benefit2': { 'ru': 'Современный и безопасный автопарк', 'ro': 'Parc auto modern și sigur' },
        'benefit3': { 'ru': 'Собственный технологичный автодром', 'ro': 'Poligon propriu tehnologic' },
        'benefit4': { 'ru': 'Рассрочка платежа без процентов', 'ro': 'Plată în rate fără dobândă' },
        'benefit5': { 'ru': 'Интерактивная онлайн-теория', 'ro': 'Teorie în format online interactiv' },
        'benefit6': { 'ru': 'Гибкая система скидок', 'ro': 'Sistem flexibil de reduceri' },
        'hours-title': { 'ru': 'Часы работы', 'ro': 'Program de lucru' },
        'hour1': { 'ru': 'Пн-Пт: 9:00 - 21:00', 'ro': 'Luni-Vineri: 9:00 - 21:00' },
        'hour2': { 'ru': 'Суббота: 10:00 - 18:00', 'ro': 'Sâmbătă: 10:00 - 18:00' },
        'hour3': { 'ru': 'Воскресенье: выходной', 'ro': 'Duminică: zilă de odihnă' },
        'hour4': { 'ru': 'Практические занятия: ежедневно с 7:00 до 22:00', 'ro': 'Lecții practice: zilnic de la 7:00 la 22:00' },
        'hour5': { 'ru': 'Теоретические занятия: по расписанию групп', 'ro': 'Lecții teoretice: conform programului grupelor' },
        'contact-title': { 'ru': 'Свяжитесь с нами сейчас!', 'ro': 'Contactați-ne acum!' },
        'contact-subtitle': { 'ru': 'Запишитесь на бесплатное пробное занятие или получите персональную консультацию', 'ro': 'Înscrieți-vă pentru o lecție de probă gratuită sau obțineți consultanță personalizată' }
    };

    let currentLang = localStorage.getItem('selectedLang') || 'ro'; // Preia limba salvată sau default 'ro'

    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang); // Salvează limba în localStorage

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        for (const [id, translations] of Object.entries(elementsToTranslate)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[lang];
            }
        }
    }

    // Inițializare limbă la încărcare
    switchLanguage(currentLang);

    // Adaugă evenimente la butoanele de limbă
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });

    // Animații la scroll (Intersection Observer)
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1 // Începe animația când 10% din element este vizibil
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target); // Oprește observarea după prima apariție
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0'; // Asigură că elementul este invizibil inițial
        cardObserver.observe(card);
    });

    // Funcționalitate buton CTA
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            const contactsSection = document.querySelector('.contacts');
            if (contactsSection) {
                contactsSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Adaugă o animație temporară pentru a sublinia secțiunea de contact
                contactsSection.classList.add('pulse-highlight');
                contactsSection.addEventListener('animationend', () => {
                    contactsSection.classList.remove('pulse-highlight');
                }, { once: true }); // Evenimentul se declanșează o singură dată
            }
        });
    }
});
