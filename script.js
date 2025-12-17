// Simple interactions and theming for B's Bistro site

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
  const revealEls = document.querySelectorAll("[data-reveal]");
  const sections = document.querySelectorAll("section[id]");

  // Apply site theme (always night mode)
  applyTimeOfDayTheme();

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


