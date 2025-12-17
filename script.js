// Simple interactions and time-based theming for B's Bistro site

// Determine current hour in South Africa (Africa/Johannesburg)
function getSouthAfricaHour() {
  try {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Johannesburg",
      hour: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(new Date());
    const hourPart = parts.find((p) => p.type === "hour");
    return hourPart ? parseInt(hourPart.value, 10) : new Date().getHours();
  } catch (error) {
    // Fallback to local time if Intl or time zone is not available
    return new Date().getHours();
  }
}

// Apply cream (day) or black (night) theme based on South African time
function applyTimeOfDayTheme() {
  const body = document.body;
  if (!body) return;

  const hourInSA = getSouthAfricaHour();
  const isDaytime = hourInSA >= 6 && hourInSA < 18; // 06:00–17:59

  body.classList.toggle("theme-night", !isDaytime);
  body.classList.toggle("theme-day", isDaytime);
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const yearSpan = document.getElementById("year");
  const form = document.getElementById("reservation-form");
  const revealEls = document.querySelectorAll("[data-reveal]");
  const sections = document.querySelectorAll("section[id]");

  // Apply time-of-day theme on load and periodically
  applyTimeOfDayTheme();
  window.setInterval(applyTimeOfDayTheme, 30 * 60 * 1000); // refresh every 30 minutes

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
    const navLinks = Array.from(
      nav.querySelectorAll("a[href^='#']")
    ) as HTMLAnchorElement[];

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
      reviewCarousel.querySelectorAll<HTMLElement>(".review-card")
    );
    const dots = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-review-dot]")
    );

    if (cards.length > 0) {
      let activeIndex = 0;
      let timer: number | null = null;

      const setActive = (index: number) => {
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

  // Lightweight form handling
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = data.get("name") || "Guest";

      alert(
        `Thank you, ${name}.\n\nYour reservation enquiry has been captured. We will confirm your booking via email shortly.`
      );

      form.reset();
    });
  }
});


