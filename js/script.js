document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Obiect de traduceri îmbunătățit și extins
    const translations = {
        'ro': {
            'pageTitle': 'Școala Auto 4GLG Property - Permis de Conducere Rapid și Sigur',
            'mainTitle': 'Școala Auto',
            'subtitle': 'Obțineți permisul de conducere rapid și în siguranță, alături de **instructori profesioniști** și pasionați.',
            'promoHeader': 'Ofertă Specială: Pachet Complet pentru Începători!',
            'promoText': 'Beneficiați de **15% reducere** la pachetul complet pentru studenți. Înscrieți-vă acum și porniți la drum!',
            'coursesTitle': 'Curriculum complet',
            'course1': '**Categoria "B"** – Autoturisme, pentru libertate pe șosele.',
            'course2': '**Categoria "A"** – Motociclete, pentru pasionații de două roți.',
            'course3': 'Instruire accelerată: Obțineți permisul în **doar 1.5 luni!**',
            'course4': 'Program individual de antrenament, adaptat nevoilor dvs.',
            'course5': 'Pregătire intensivă pentru examenul la poliția rutieră.',
            'benefitsTitle': 'Avantajele noastre',
            'benefit1': 'Instructori cu vastă **experiență** și dedicare.',
            'benefit2': 'Parc auto **modern și sigur**, mereu la standarde înalte.',
            'benefit3': '**Poligon propriu** cu tehnologie avansată, pentru o practică eficientă.',
            'benefit4': 'Plată în rate **fără dobândă**, accesibilă pentru toți.',
            'benefit5': 'Teorie în format **online interactiv**, învățare de oriunde.',
            'benefit6': 'Sistem **flexibil de reduceri** și oferte personalizate.',
            'hoursTitle': 'Program de lucru',
            'hour1': '**Luni – Vineri:** 9:00 – 21:00',
            'hour2': '**Sâmbătă:** 10:00 – 18:00',
            'hour3': '**Duminică:** Zi de odihnă',
            'hour4': '**Lecții practice:** Zilnic, de la 7:00 la 22:00.',
            'hour5': '**Lecții teoretice:** Conform programului grupelor.',
            'testimonialsHeader': 'Ce Spun Elevii Noștri',
            'testimonial1Name': 'Andrei Popescu',
            'testimonial1Date': 'Martie 2024',
            'testimonial1Content': 'Am luat permisul din prima încercare datorită instruirii de calitate superioară. Instructorii sunt răbdători și extrem de profesioniști. Recomand cu toată încrederea!',
            'testimonial2Name': 'Elena Vasilescu',
            'testimonial2Date': 'Februarie 2024',
            'testimonial2Content': 'Programul flexibil mi-a permis să combin școala cu jobul fără probleme. Mașinile sunt noi și foarte bine întreținute. Un mare mulțumesc echipei 4GLG!',
            'testimonial3Name': 'Mihai Ionescu',
            'testimonial3Date': 'Ianuarie 2024',
            'testimonial3Content': 'Cursul accelerat a fost exact ce aveam nevoie. În doar 6 săptămâni am reușit să trec examenul. Prețuri competitive și servicii de top!',
            'ctaHeader': 'Gata să pornești la drum?',
            'ctaText': 'Înscrie-te acum pentru o **lecție de probă gratuită** și beneficiază de o **reducere de 10%** la pachetul complet!',
            'ctaBtn': 'ÎNSCRIE-TE ACUM',
            'contactTitle': 'Contactați-ne acum!',
            'contactSubtitle': 'Suntem aici să răspundem întrebărilor dvs. Înscrieți-vă pentru o lecție de probă gratuită sau obțineți consultanță personalizată!',
            'whatsappFloatText': 'Întreabă-ne pe WhatsApp',
            'footerCompanyName': 'Școala Auto 4GLG Property SRL',
            'footerAddress': 'MD 2071, str. Alba-Iulia, 75/V, et. 5, mun. Chișinău, R. Moldova',
            'footerIDNO': 'IDNO: 1016600028246 | IBAN: MD29ML000000002251717648',
            'footerBank': 'B.C. ”MICB” S.A., fil. "Remiz" | SWIFT: MOLDMD2X',
            'footerContact': 'Tel: 079910011 | Email: info@4glg.md',
            'footerLicense': 'Formarea profesională a conducătorilor auto (categoria/subcategoria B/B1, CORM 006-2021-832201).'
        },
        'ru': {
            'pageTitle': 'Автошкола 4GLG Property - Быстрое и Безопасное Водительское Удостоверение',
            'mainTitle': 'Автошкола',
            'subtitle': 'Получите водительское удостоверение быстро и безопасно с лучшими **профессиональными инструкторами**.',
            'promoHeader': 'Специальное предложение: Полный пакет для новичков!',
            'promoText': 'Получите **скидку 15%** на полный пакет обучения для студентов. Запишитесь сейчас и начните свой путь!',
            'coursesTitle': 'Наши курсы',
            'course1': '**Категория "B"** – Легковые автомобили, для свободы на дорогах.',
            'course2': '**Категория "A"** – Мотоциклы, для любителей двухколесного транспорта.',
            'course3': 'Экспресс-обучение: Получите права **всего за 1.5 месяца!**',
            'course4': 'Индивидуальный график занятий, адаптированный под ваши нужды.',
            'course5': 'Интенсивная подготовка к экзамену в дорожной полиции.',
            'benefitsTitle': 'Наши преимущества',
            'benefit1': 'Опытные и **преданные своему делу** инструкторы.',
            'benefit2': 'Современный и **безопасный автопарк**, всегда в отличном состоянии.',
            'benefit3': 'Собственный **технологичный автодром** для эффективной практики.',
            'benefit4': 'Оплата в **рассрочку без процентов**, доступно каждому.',
            'benefit5': 'Интерактивная **онлайн-теория**, обучайтесь где угодно.',
            'benefit6': 'Гибкая **система скидок** и индивидуальные предложения.',
            'hoursTitle': 'Часы работы',
            'hour1': '**Понедельник – Пятница:** 9:00 – 21:00',
            'hour2': '**Суббота:** 10:00 – 18:00',
            'hour3': '**Воскресенье:** Выходной день',
            'hour4': '**Практические занятия:** Ежедневно, с 7:00 до 22:00.',
            'hour5': '**Теоретические занятия:** По расписанию групп.',
            'testimonialsHeader': 'Что говорят наши ученики',
            'testimonial1Name': 'Андрей Попеску',
            'testimonial1Date': 'Март 2024',
            'testimonial1Content': 'Получил права с первой попытки благодаря качественному обучению. Инструкторы терпеливые и очень профессиональные. Рекомендую всем!',
            'testimonial2Name': 'Елена Василеску',
            'testimonial2Date': 'Февраль 2024',
            'testimonial2Content': 'Гибкий график позволил мне совмещать учебу с работой без проблем. Машины новые и в очень хорошем состоянии. Огромное спасибо команде 4GLG!',
            'testimonial3Name': 'Михай Ионеску',
            'testimonial3Date': 'Январь 2024',
            'testimonial3Content': 'Ускоренный курс был именно тем, что мне нужно. Всего за 6 недель я смог сдать экзамен. Конкурентные цены и высококачественные услуги.',
            'ctaHeader': 'Готовы отправиться в путь?',
            'ctaText': 'Запишитесь сейчас на **бесплатное пробное занятие** и получите **скидку 10%** на полный пакет!',
            'ctaBtn': 'ЗАПИСАТЬСЯ СЕЙЧАС',
            'contactTitle': 'Свяжитесь с нами сейчас!',
            'contactSubtitle': 'Мы здесь, чтобы ответить на ваши вопросы. Запишитесь на бесплатное пробное занятие или получите персональную консультацию!',
            'whatsappFloatText': 'Спросите нас в WhatsApp',
            'footerCompanyName': 'Автошкола 4GLG Property SRL',
            'footerAddress': 'MD 2071, ул. Алба-Юлия, 75/В, эт. 5, мун. Кишинэу, Р. Молдова',
            'footerIDNO': 'IDNP: 1016600028246 | IBAN: MD29ML000000002251717648',
            'footerBank': 'Б.К. ”MICB” С.А., фил. "Ремиз" | SWIFT: MOLDMD2X',
            'footerContact': 'Тел: 079910011 | Электронная почта: info@4glg.md',
            'footerLicense': 'Профессиональная подготовка водителей (категория/подкатегория B/B1, CORM 006-2021-832201).'
        }
    };

    let currentLang = localStorage.getItem('selectedLang') || 'ro'; // Preia limba salvată sau 'ro' ca default

    // Funcție pentru aplicarea traducerilor
    function applyTranslations(lang) {
        // Traducere titlu pagină
        document.title = translations[lang]['pageTitle'];

        // Traducere elemente cu ID
        document.getElementById('courses-title').innerHTML = translations[lang]['coursesTitle'];
        document.getElementById('course1').innerHTML = translations[lang]['course1'];
        document.getElementById('course2').innerHTML = translations[lang]['course2'];
        document.getElementById('course3').innerHTML = translations[lang]['course3'];
        document.getElementById('course4').innerHTML = translations[lang]['course4'];
        document.getElementById('course5').innerHTML = translations[lang]['course5'];

        document.getElementById('benefits-title').innerHTML = translations[lang]['benefitsTitle'];
        document.getElementById('benefit1').innerHTML = translations[lang]['benefit1'];
        document.getElementById('benefit2').innerHTML = translations[lang]['benefit2'];
        document.getElementById('benefit3').innerHTML = translations[lang]['benefit3'];
        document.getElementById('benefit4').innerHTML = translations[lang]['benefit4'];
        document.getElementById('benefit5').innerHTML = translations[lang]['benefit5'];
        document.getElementById('benefit6').innerHTML = translations[lang]['benefit6'];

        document.getElementById('hours-title').innerHTML = translations[lang]['hoursTitle'];
        document.getElementById('hour1').innerHTML = translations[lang]['hour1'];
        document.getElementById('hour2').innerHTML = translations[lang]['hour2'];
        document.getElementById('hour3').innerHTML = translations[lang]['hour3'];
        document.getElementById('hour4').innerHTML = translations[lang]['hour4'];
        document.getElementById('hour5').innerHTML = translations[lang]['hour5'];

        document.getElementById('contact-title').innerHTML = translations[lang]['contactTitle'];
        document.getElementById('contact-subtitle').innerHTML = translations[lang]['contactSubtitle'];

        // Traducere elemente fără ID, folosind clase sau alte selectoare
        document.querySelector('h1 .pulse').innerHTML = translations[lang]['mainTitle'];
        document.querySelector('.subtitle').innerHTML = translations[lang]['subtitle'];

        document.querySelector('.promo-banner h3').innerHTML = translations[lang]['promoHeader'];
        document.querySelector('.promo-banner p').innerHTML = translations[lang]['promoText'];

        document.querySelector('.testimonials h2').innerHTML = translations[lang]['testimonialsHeader'];

        document.querySelector('.cta-section h2').innerHTML = translations[lang]['ctaHeader'];
        document.querySelector('.cta-section p').innerHTML = translations[lang]['ctaText'];
        document.querySelector('.cta-btn').childNodes[0].nodeValue = translations[lang]['ctaBtn'] + ' '; // Asigură spațiu pentru iconiță

        document.querySelector('.whatsapp-text').innerHTML = translations[lang]['whatsappFloatText'];

        // Traduceri pentru footer (necesită selectoare mai specifice dacă nu au ID-uri)
        document.querySelector('footer .footer-title').innerHTML = translations[lang]['footerCompanyName'];
        const footerParagraphs = document.querySelectorAll('.contact-info p');
        footerParagraphs[0].innerHTML = translations[lang]['footerAddress'];
        footerParagraphs[1].innerHTML = translations[lang]['footerIDNO'];
        footerParagraphs[2].innerHTML = translations[lang]['footerBank'];
        footerParagraphs[3].innerHTML = translations[lang]['footerContact'];
        footerParagraphs[4].innerHTML = translations[lang]['footerLicense'];

        // Traduceri pentru mărturii (dacă este necesar, fiecare mărturie are nevoie de ID-uri specifice)
        document.querySelector('.testimonial:nth-child(1) .testimonial-name').innerHTML = translations[lang]['testimonial1Name'];
        document.querySelector('.testimonial:nth-child(1) .testimonial-date').innerHTML = translations[lang]['testimonial1Date'];
        document.querySelector('.testimonial:nth-child(1) .testimonial-content').innerHTML = translations[lang]['testimonial1Content'];

        document.querySelector('.testimonial:nth-child(2) .testimonial-name').innerHTML = translations[lang]['testimonial2Name'];
        document.querySelector('.testimonial:nth-child(2) .testimonial-date').innerHTML = translations[lang]['testimonial2Date'];
        document.querySelector('.testimonial:nth-child(2) .testimonial-content').innerHTML = translations[lang]['testimonial2Content'];

        document.querySelector('.testimonial:nth-child(3) .testimonial-name').innerHTML = translations[lang]['testimonial3Name'];
        document.querySelector('.testimonial:nth-child(3) .testimonial-date').innerHTML = translations[lang]['testimonial3Date'];
        document.querySelector('.testimonial:nth-child(3) .testimonial-content').innerHTML = translations[lang]['testimonial3Content'];


        // Adăugați logica pentru a re-renderiza elementele HTML care folosesc <strong> sau alte tag-uri din traducerile dinamice
        // Acest lucru este important pentru ca **text** să fie interpretat ca <strong>text</strong>
        // O soluție simplă, dar care necesită atenție la securitate (XSS), este să folosiți innerHTML
        // Dacă nu este necesară formatarea HTML în traducerile dinamice, puteți folosi textContent
        const elementsWithHTML = document.querySelectorAll(
            '#course1, #course2, #course3, #course4, #course5, ' +
            '#benefit1, #benefit2, #benefit3, #benefit4, #benefit5, #benefit6, ' +
            '#hour1, #hour2, #hour3, #hour4, #hour5, ' +
            '.subtitle, .promo-banner p, .cta-section p'
        );

        elementsWithHTML.forEach(element => {
            const translationKey = Array.from(element.parentNode.children).find(child => child === element)?.id ||
                                   (element.classList.contains('subtitle') ? 'subtitle' :
                                   (element.parentNode.classList.contains('promo-banner') && element.tagName === 'P' ? 'promoText' :
                                   (element.parentNode.classList.contains('cta-section') && element.tagName === 'P' ? 'ctaText' : null)));

            if (translationKey && translations[lang][translationKey]) {
                element.innerHTML = translations[lang][translationKey].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            }
        });
    }

    // Funcție pentru comutarea limbii
    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang); // Salvează limba în localStorage

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        applyTranslations(lang);
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
