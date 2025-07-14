document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-on-scroll, .day, .review, .faq-item").forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let first = document.querySelector('.main-section');
  if (first) setTimeout(() => first.classList.add('animate-appear'), 450);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll(".section:not(.main-section), .day, .review, .faq-item").forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('reg-modal');
  const closeBtn = document.getElementById('close-modal');
  const form = document.getElementById('reg-form');
  const successMsg = document.getElementById('modal-success');
  document.querySelectorAll('.main-btn[data-action="open-modal"]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    successMsg.style.display = 'none';
    form.reset();
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.querySelectorAll('input,button').forEach(el=>el.disabled=true);
    setTimeout(() => {
      form.querySelectorAll('input,button').forEach(el=>el.disabled=false);
      successMsg.style.display = 'block';
      setTimeout(closeModal, 1800);
    }, 1000);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-on-scroll, .day, .review, .faq-item").forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let first = document.querySelector('.main-section');
  if (first) setTimeout(() => first.classList.add('animate-appear'), 450);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll(".section:not(.main-section), .day, .review, .faq-item").forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('reg-modal');
  const closeBtn = document.getElementById('close-modal');
  const form = document.getElementById('reg-form');
  const successMsg = document.getElementById('modal-success');
  document.querySelectorAll('.main-btn[data-action="open-modal"]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    successMsg.style.display = 'none';
    form.reset();
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.querySelectorAll('input,button').forEach(el=>el.disabled=true);
    setTimeout(() => {
      form.querySelectorAll('input,button').forEach(el=>el.disabled=false);
      successMsg.style.display = 'block';
      setTimeout(closeModal, 1800);
    }, 1000);
  });
});


const i18nData = {
  uk: {
    about: "Про марафон",
    program: "Програма",
    signupNav: "Записатись",
    mainTitle: "Вимкни галас.<br>Почуй себе.",
    mainDesc: "RestartMe — це 7-денний марафон цифрового детоксу. Без додатків, <br>без залипання, лише ти.",
    signupBtn: "Записатись",
    mainCaption: "7 днів без соцмереж. Із собою на зв'язку.",
    aboutTitle: "Чому саме цифровий детокс?",
    aboutText: "Ми живемо в епоху нескінченних повідомлень, постійного скролінгу й втоми, яку не знімає навіть сон. RestartMe — це 7 днів перезавантаження, в яких ти:",
    benefit1: "знижуєш тривожність",
    benefit2: "повертаєш увагу до реального життя",
    benefit3: "вчишся бути офлайн — без страху щось пропустити",
    aboutNote: "Це не про видалення соцмереж. Це про новий контакт із собою.",
    experienceTitle: "Не завдання. Це — досвід.<br><span class=\"sub\">Кожен день — нове відчуття.</span>",
    experienceSub: "Кожен день — нове відчуття.",
    day1Title: "День 1 — Тиша",
    day1Desc: "Вперше ти не прокинешся з телефоном. І буде спокій.",
    day2Title: "День 2 — Земля",
    day2Desc: "Прогулянка без музики. Просто дихати, йти, бути.",
    day3Title: "День 3 — Дзеркало",
    day3Desc: "Без стрічки новин. Побути з собою — справжнім.",
    day4Title: "День 4 — Слово",
    day4Desc: "Напиши собі. Тільки собі. Це легше, ніж здається.",
    day5Title: "День 5 — Вимкни",
    day5Desc: "Менше екранів — більше життя.",
    day6Title: "День 6 — Близькість",
    day6Desc: "Розмова без телефону. Слухати. Бачити.",
    day7Title: "День 7 — Ритм",
    day7Desc: "Знайди свій темп. Свій стиль. Свій ранок.",
    reviewTitle: "Що кажуть учасники?",
    review1: "«На третій день зловила себе на думці: я не перевіряла телефон уже годину. І мені добре.»<br>— Ірина, 26",
    review2: "«Марафон не змінив мене. Він повернув мене до себе.»<br>— Олексій, 34",
    review3: "«Слово \"детокс\" стало для мене не про тіло, а про голову.»<br>— Настя, 22",
    teamTitle: "RestartMe створено тими, хто теж втомився.",
    teamText: "Ми — команда дизайнерів, психологів і айтішників, які самі пройшли через цифрову перевтому. Ми не обіцяємо чудес. Ми просто допоможемо зупинитись — і почути себе.",
    faqTitle: "Часті запитання",
    faqQ1: "Це безкоштовно?",
    faqA1: "Так, марафон безкоштовний і відкритий для всіх.",
    faqQ2: "Чи потрібно видаляти Instagram?",
    faqA2: "Ні. Але ми покажемо, як змінити свої звички.",
    faqQ3: "Скільки часу займає?",
    faqA3: "Від 15 до 30 хвилин щодня.",
    faqQ4: "Пробний день",
    faqA4: "Хочеш спробувати, перш ніж приєднатись? Пройди День 1 прямо зараз — без реєстрації.",
    ctaTitle: "Готовий зробити паузу?",
    ctaText: "Повернись до себе. Почни з 1 дня.",
    ctaBtn: "Почати зараз",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
    instagram: "Instagram",
    contacts: "Контакти",
    modalTitle: "Записатись на марафон",
    namePh: "Ваше ПІБ",
    phonePh: "Телефон",
    consentText: "Я даю згоду на обробку персональних даних",
    sendBtn: "Відправити",
    modalSuccess: "Дякуємо! Ми зв'яжемось з вами."
  },
  en: {
    about: "About",
    program: "Program",
    signupNav: "Sign Up",
    mainTitle: "Turn off the noise.<br>Hear yourself.",
    mainDesc: "RestartMe is a 7-day digital detox marathon. No apps, <br>no scrolling, just you.",
    signupBtn: "Sign Up",
    mainCaption: "7 days without social media. In touch with yourself.",
    aboutTitle: "Why digital detox?",
    aboutText: "We live in an era of endless notifications, constant scrolling, and fatigue that even sleep can't fix. RestartMe is 7 days of reset, where you:",
    benefit1: "lower anxiety",
    benefit2: "regain focus on real life",
    benefit3: "learn to be offline — without FOMO",
    aboutNote: "This is not about deleting social networks. It's about a new connection with yourself.",
    experienceTitle: "Not a challenge. It’s an experience.<br><span class=\"sub\">A new feeling every day.</span>",
    experienceSub: "A new feeling every day.",
    day1Title: "Day 1 — Silence",
    day1Desc: "For the first time, you won’t wake up with your phone. And there’ll be peace.",
    day2Title: "Day 2 — Earth",
    day2Desc: "A walk without music. Just breathe, walk, be.",
    day3Title: "Day 3 — Mirror",
    day3Desc: "No news feed. Just you — the real you.",
    day4Title: "Day 4 — Word",
    day4Desc: "Write to yourself. Only to yourself. It’s easier than you think.",
    day5Title: "Day 5 — Switch Off",
    day5Desc: "Less screen — more life.",
    day6Title: "Day 6 — Closeness",
    day6Desc: "A conversation without the phone. Listen. See.",
    day7Title: "Day 7 — Rhythm",
    day7Desc: "Find your tempo. Your style. Your morning.",
    reviewTitle: "What do participants say?",
    review1: "“On the third day I realized: I haven’t checked my phone for an hour. I feel good.”<br>— Iryna, 26",
    review2: "“The marathon didn’t change me. It brought me back to myself.”<br>— Oleksiy, 34",
    review3: "“The word ‘detox’ became not about the body, but about the mind.”<br>— Anastasia, 22",
    teamTitle: "RestartMe is created by those who were also tired.",
    teamText: "We are a team of designers, psychologists, and IT specialists who went through digital exhaustion ourselves. We promise no miracles. We’ll simply help you pause — and hear yourself.",
    faqTitle: "FAQ",
    faqQ1: "Is it free?",
    faqA1: "Yes, the marathon is free and open to all.",
    faqQ2: "Do I need to delete Instagram?",
    faqA2: "No. But we’ll show you how to change your habits.",
    faqQ3: "How much time does it take?",
    faqA3: "From 15 to 30 minutes daily.",
    faqQ4: "Trial day",
    faqA4: "Want to try it before joining? Try Day 1 right now — no registration.",
    ctaTitle: "Ready to take a pause?",
    ctaText: "Come back to yourself. Start with Day 1.",
    ctaBtn: "Start now",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    instagram: "Instagram",
    contacts: "Contacts",
    modalTitle: "Sign up for the marathon",
    namePh: "Your name",
    phonePh: "Phone",
    consentText: "I consent to the processing of personal data",
    sendBtn: "Send",
    modalSuccess: "Thank you! We’ll get in touch."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const langBtns = document.querySelectorAll('.lang-btn');
  let curLang = localStorage.getItem('lang') || 'uk';
  setLang(curLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (this.classList.contains('active')) return;
      langBtns.forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      setLang(this.dataset.lang);
      animateSlider(this.dataset.lang);
    });
  });

  function setLang(lang) {
    curLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      let key = el.getAttribute('data-i18n');
      let val = i18nData[lang][key];
      if (val) {
        if (key === "mainTitle" || key === "mainDesc" || key.includes("Title") || key.includes("review")) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      let key = el.getAttribute('data-i18n-ph');
      let val = i18nData[lang][key];
      if (val) el.placeholder = val;
    });
  }

  function animateSlider(lang) {
    const slider = document.querySelector('.lang-slider');
    if (!slider) return;
    if (lang === 'en') {
      slider.style.left = '47px';
    } else {
      slider.style.left = '2.5px';
    }
  }
  animateSlider(curLang);
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === curLang);
  });
});