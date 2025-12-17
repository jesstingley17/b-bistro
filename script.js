// Simple interactions and theming for B's Bistro site

// Translations for multi-language support (English, Afrikaans, Zulu)
const TRANSLATIONS = {
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.experience": "Experience",
    "nav.team": "Team",
    "nav.location": "Location",
    "nav.reservations": "Reservations",
    "hero.eyebrow": "Underberg · South Africa",
    "hero.titleTop": "Country Calm...",
    "hero.titleBottom": "City Sophistication.",
    "hero.subtitle":
      "Nestled beneath the Drakensberg, B's Bistro pairs seasonal ingredients with slow-crafted comfort food, served fireside in an elegant farmhouse setting.",
    "hero.meta": "Open 7 days · 12:00 – 20:00",
    "about.heading": "Rooted in the land.",
    "about.p1":
      "B's Bistro is a love letter to country living in the foothills of the Southern Drakensberg. Our cooking is honest, generous and seasonal, inspired by the farms and kitchens that surround Underberg.",
    "about.p2":
      "At B’s Bistro, we believe that the best things in life—and the best flavors on your plate—take time. Our kitchen is a celebration of farm-to-table dining where possible, featuring dishes made from scratch using seasonal produce sourced from our surrounding areas. By working with local growers and producers from the Southern Drakensberg to the neighboring valleys, we ensure that our ingredients are as fresh as the mountain air.",
    "about.p3":
      "Because we prioritize quality over speed, our cooking is a deliberate process. From our char-grilled steaks, old-school ribs, and hand-cut chips, we forgo the shortcuts of fast food in favor of honest, soulful preparation. We invite you to settle in, enjoy the fireplace and views of our gardens and dams—and if you time it right, the special bedtime march of our beloved ducks and chickens.",
    "about.p4":
      "Embrace a slower pace, breathe in the mountain air and exhale all the stresses of a modern world. At B's Bistro, the wait is part of the experience, requiring you to pause and take in all the beauty that our environment has to offer. We ensure that when your meal arrives, it is plated with a modern touch and served with the genuine warmth of rural hospitality.",
    "menu.heading": "Menu",
    "experience.heading": "The B's Bistro experience",
    "experience.body":
      "Arrive to views of rolling pastures and towering trees, then step into a dining room of linen-dressed tables, soft candlelight and the aroma of something slow-roasting in the kitchen.",
    "team.heading": "Meet the team",
    "team.intro":
      "The people behind B's Bistro – welcoming you at the door and crafting every plate that leaves the pass.",
    "location.heading": "Find us in Underberg",
    "location.body":
      "B's Bistro is located just outside the village of Underberg in KwaZulu-Natal, South Africa – a scenic drive from Durban and the Midlands, and a gateway to the Sani Pass.",
    "contact.heading": "Contact us",
    "contact.body":
      "For general questions, private celebrations or special requests, you’re welcome to reach out using the details below or the contact form.",
    "contact.submit": "Send message",
    "contact.formFootnote":
      "This form sends us a note – we’ll reply as soon as we can to confirm the details.",
    "reservations.heading": "Reservations",
    "reservations.body":
      "To preserve the calm of the countryside, we keep our dining room intimate. Reservations are recommended, especially on weekends and holidays.",
  },
  af: {
    "nav.about": "Oor ons",
    "nav.menu": "Spyskaart",
    "nav.experience": "Ervaring",
    "nav.team": "Span",
    "nav.location": "Ligging",
    "nav.reservations": "Besprekings",
    "hero.eyebrow": "Underberg · Suid-Afrika",
    "hero.titleTop": "Plattelandse Rust...",
    "hero.titleBottom": "Stadse Sofistikasie.",
    "hero.subtitle":
      "Genesteld teen die hange van die Drakensberge kombineer B's Bistro seisoenale bestanddele met stadig-voorbereide trooskos, voor die kaggel bedien in ’n elegante plaashuis-atmosfeer.",
    "hero.meta": "Oop 7 dae · 12:00 – 20:00",
    "about.heading": "Gewortel in die land.",
    "about.p1":
      "B's Bistro is ’n liefdesbrief aan die plaaslewe in die voorheuwels van die Suidelike Drakensberge. Ons kookkuns is eerlik, ruimhartig en seisoenaal, geïnspireer deur die plase en kombuise rondom Underberg.",
    "about.p2":
      "By B’s Bistro glo ons dat die beste dinge in die lewe—en die beste geure op jou bord—tyd neem. Ons kombuis vier van-plaas-tot-bord wanneer moontlik, met geregte wat van nuuts af gemaak word met seisoenale produkte uit die omliggende gebied. Deur saam te werk met plaaslike produsente van die Suidelike Drakensberge tot in die naburige valleie, sorg ons dat ons bestanddele so vars soos die berglug is.",
    "about.p3":
      "Omdat ons kwaliteit bó spoed verkies, is ons kookkuns opsetlik stadig. Van ons kolegegaarde steaks, ou-skool ribbetjies en handgesnyde skyfies, vermy ons die kortpaaie van kitskos ten gunste van eerlike, sielsvolle voorbereiding. Ons nooi jou om te gaan sit, die kaggel en uitsig oor ons tuine en damme te geniet—en as jy dit regtyd, die spesiale slaaptydmars van ons geliefde eende en hoenders.",
    "about.p4":
      "Skakel oor na ’n stadiger pas, haal die berglug diep in en asem die stres van die moderne wêreld uit. By B's Bistro is die wag deel van die ervaring; dit vra dat jy stilhou en al die skoonheid van ons omgewing inneem. Wanneer jou bord uiteindelik aankom, is dit met ’n moderne verfyndheid opgedis en bedien met die egte warmte van plattelandse gasvryheid.",
    "menu.heading": "Spyskaart",
    "experience.heading": "Die B's Bistro-ervaring",
    "experience.body":
      "Kom aan by uitsigte oor rolling weivelde en hoë bome, en stap dan in ’n eetkamer in met linne-gedekte tafels, sagte kerslig en die geur van iets wat stadig in die kombuis prut.",
    "team.heading": "Ontmoet die span",
    "team.intro":
      "Die mense agter B's Bistro – dié wat jou by die deur verwelkom en elke bord uit die kombuis laat vertrek.",
    "location.heading": "Vind ons in Underberg",
    "location.body":
      "B's Bistro lê net buite die dorpie Underberg in KwaZulu-Natal – ’n skilderagtige rit vanaf Durban en die Middelande, en ’n toegangspoort na Sani-pas.",
    "contact.heading": "Kontak ons",
    "contact.body":
      "Vir algemene navrae, privaat vieringe of spesiale versoeke is jy welkom om ons via die besonderhede hieronder of die kontakvorm te kontak.",
    "contact.submit": "Stuur boodskap",
    "contact.formFootnote":
      "Hierdie vorm stuur vir ons ’n boodskap – ons sal so gou moontlik terugkom om die besonderhede te bevestig.",
    "reservations.heading": "Besprekings",
    "reservations.body":
      "Om die kalmte van die platteland te bewaar, hou ons die eetkamer intiem. Besprekings word aanbeveel, veral oor naweke en vakansiedae.",
  },
  zu: {
    "nav.about": "Mayelana nathi",
    "nav.menu": "Imenyu",
    "nav.experience": "Okuhlangenwe nakho",
    "nav.team": "Ithimba",
    "nav.location": "Indawo",
    "nav.reservations": "Ukubhukha",
    "hero.eyebrow": "Underberg · eNingizimu Afrika",
    "hero.titleTop": "Ukuthula Kwezindawo Zasemakhaya...",
    "hero.titleBottom": "Ubuhle Besimanje Sedolobha.",
    "hero.subtitle":
      "Ezansi kweDrakensberg, i-B's Bistro ihlanganisa izithako zesizini nokudla okududuza okuphekwa kancane, okulethwa eduze komlilo endaweni yesimanje efana nefama.",
    "hero.meta": "Livuliwe izinsuku ezi-7 · 12:00 – 20:00",
    "about.heading": "Sihlanganiswe nendawo.",
    "about.p1":
      "I-B's Bistro iyincwadi yothando empilweni yasemakhaya emagqumeni aseNingizimu Drakensberg. Ukupheka kwethu kunenhliziyo, kuhle futhi kusezingeni, kugqugquzelwa amapulazi namakhishi azungeze i-Underberg.",
    "about.p2":
      "E-B’s Bistro sikholelwa ukuthi izinto ezinhle empilweni—kanye namnandi kakhulu ephalethi—zithatha isikhathi. Ikhishi lethu liyagubha ukudla okungaxhunywanga lapho kungenzeka, sisebenzisa izithako ezenziwa kusuka ekuqaleni ngezivuno zesizini ezitholakala ezindaweni ezisizungezile. Ngokusebenza nabalimi nabakhiqizi bendawo kusukela eNingizimu Drakensberg kuya emaphandleni azungezile, siqinisekisa ukuthi izithako zethu zimasha njengomoya wasezintabeni.",
    "about.p3":
      "Ngoba sibeka ikhwalithi ngaphambi kokushesha, ukupheka kwethu kwenziwa ngokucabangela. Kusukela kuma-steak ethu ashaqayo emlilweni, ama-ribs endabuko kanye namachips asikiwe ngesandla, sigwema izindlela ezimfishane zokudla okusheshayo sikhethe ukulungiswa okunothando nokududuza. Simema ukuthi uhlale phansi, ujabulele umlilo neziqongo zombono wezivande nezinqwaba zethu—futhi uma ubhuka ngesikhathi, ukubuka uhambo lokulala lwenkukhu namadada ethu ayigugu.",
    "about.p4":
      "Yamukela isivinini esiphansi, uphefumule umoya wezintaba futhi ukhiphe wonke umthwalo womhlaba wesimanje. E-B's Bistro, ukulinda kuyingxenye yesipiliyoni; kukumema ukuthi ume kancane futhi ujabulele ubuhle bemvelo ezikusizungezile. Siqinisekisa ukuthi lapho ukudla kwakho kufika, kuhlelwe ngendlela yesimanje futhi kusekelwa ukwamukelwa okufudumele kwasemakhaya.",
    "menu.heading": "Imenyu",
    "experience.heading": "Okuhlangenwe nakho e-B's Bistro",
    "experience.body":
      "Ufika ubheke amapulazi aluhlaza nezihlahla ezimide, bese ungene egumbini lokudlela elinemata etafuleni, izibani zeziphuzo ezithambile kanye nephunga lokudla eliphekwa kancane ekhishini.",
    "team.heading": "Hlangana nethimba",
    "team.intro":
      "Abantu abenza i-B's Bistro – abakwamukela emnyango futhi balungiselele yonke ipuleti eliphuma ekhitshini.",
    "location.heading": "Sithole e-Underberg",
    "location.body":
      "I-B's Bistro itholakala ngaphandle nje kwedolobhana lase-Underberg eKwaZulu-Natal – uhambo olunobuhle oluvela eThekwini naseMidlands, kanye nomnyango oya ku-Sani Pass.",
    "contact.heading": "Xhumana nathi",
    "contact.body":
      "Ngemibuzo ejwayelekile, imicimbi yangasese noma izicelo ezikhethekile, sicela uxhumane nathi usebenzise imininingwane engezansi noma ifomu lokuxhumana.",
    "contact.submit": "Thumela umlayezo",
    "contact.formFootnote":
      "Leli fomu lisithumelela umlayezo – sizokuphendula maduze ngangokunokwenzeka ukuze siqinisekise imininingwane.",
    "reservations.heading": "Ukubhukha",
    "reservations.body":
      "Ukuze sigcine ukuthula kwasemakhaya, egumbini lethu lokudlela sigcina indawo incane. Ukubhukha kunconywa ikakhulukazi ngezimpelasonto nasezinsukwini zamaholide.",
  },
};

function setLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const html = document.documentElement;
  if (html) {
    html.setAttribute(
      "lang",
      lang === "af" ? "af" : lang === "zu" ? "zu" : "en"
    );
  }

  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = dict[key];
    if (!value) return;
    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("is-active", isActive);
  });

  try {
    localStorage.setItem("bsbistro_lang", lang);
  } catch {
    // ignore
  }
}

// Always use the night theme: black background with sage accents
function applyTimeOfDayTheme() {
  const body = document.body;
  if (!body) return;

  body.classList.add("theme-night");
  body.classList.remove("theme-day");
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const yearSpan = document.getElementById("year");
  const contactForm = document.getElementById("contact-form");
  const langToggles = document.querySelectorAll(".lang-toggle");
  const revealEls = document.querySelectorAll("[data-reveal]");
  const sections = document.querySelectorAll("section[id]");

  // Apply site theme (always night mode)
  applyTimeOfDayTheme();

  // Apply saved or default language
  let initialLang = "en";
  try {
    const stored = localStorage.getItem("bsbistro_lang");
    if (stored === "af" || stored === "zu" || stored === "en") {
      initialLang = stored;
    }
  } catch {
    // ignore
  }
  setLanguage(initialLang);

  if (langToggles.length > 0) {
    langToggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;
        setLanguage(lang);
      });
    });
  }

  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Header scroll state
  if (header) {
    let ticking = false;
    const onScroll = () => {
      const scrolled = window.scrollY > 16;
      header.classList.toggle("is-scrolled", scrolled);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });
    onScroll();
  }

  // Mobile nav toggle
  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Close nav when clicking a link (mobile)
  if (nav) {
    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.tagName.toLowerCase() === "a" &&
        header.classList.contains("nav-open")
      ) {
        header.classList.remove("nav-open");
      }
    });
  }

  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLAnchorElement)) return;

      const id = target.getAttribute("href");
      if (!id || id === "#") return;

      const section = document.querySelector(id);
      if (!section) return;

      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Section reveal on scroll
  if ("IntersectionObserver" in window && revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show all sections
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Active nav link highlighting
  if ("IntersectionObserver" in window && sections.length > 0 && nav) {
    const navLinks = Array.from(nav.querySelectorAll("a[href^='#']"));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (!href) return;
            const isActive = href.replace("#", "") === id;
            link.classList.toggle("is-active", isActive);
          });
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Reviews carousel
  const reviewCarousel = document.querySelector("[data-carousel]");
  if (reviewCarousel) {
    const cards = Array.from(
      reviewCarousel.querySelectorAll(".review-card")
    );
    const dots = Array.from(
      document.querySelectorAll("[data-review-dot]")
    );

    if (cards.length > 0) {
      let activeIndex = 0;
      let timer = null;

      const setActive = (index) => {
        activeIndex = index;
        cards.forEach((card, i) => {
          card.classList.toggle("is-active", i === index);
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === index);
          dot.setAttribute("aria-pressed", i === index ? "true" : "false");
        });
      };

      const startAutoRotate = () => {
        if (timer !== null) window.clearInterval(timer);
        timer = window.setInterval(() => {
          const next = (activeIndex + 1) % cards.length;
          setActive(next);
        }, 8000);
      };

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          setActive(index);
          startAutoRotate();
        });
      });

      setActive(0);
      startAutoRotate();
    }
  }

  // Contact form -> Vercel API route using Resend
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get("name") || "Guest").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      const submitButton = contactForm.querySelector(
        'button[type="submit"]'
      );

      if (!email || !message) {
        alert(
          "Please add your email address and a short message so we can get back to you."
        );
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Request failed");
        }

        alert(
          `Thank you, ${name}.\n\nYour message has been sent to B's Bistro. We'll reply via email as soon as we can.`
        );
        contactForm.reset();
      } catch (err) {
        console.error("Contact form error:", err);
        alert(
          "Sorry, something went wrong sending your message. Please call or email us directly."
        );
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send message";
        }
      }
    });
  }

  // Chatbot toggle
  const chatToggle = document.getElementById("chat-toggle");
  const chatFrame = document.getElementById("openassistantgpt-chatbot-iframe");
  if (chatToggle && chatFrame) {
    chatToggle.addEventListener("click", () => {
      const isOpen = chatFrame.style.display === "block";
      if (isOpen) {
        chatFrame.style.display = "none";
        chatToggle.setAttribute("aria-expanded", "false");
      } else {
        chatFrame.style.display = "block";
        chatToggle.setAttribute("aria-expanded", "true");
      }
    });
  }
});


