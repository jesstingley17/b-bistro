// Simple interactions for B's Bistro site

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const yearSpan = document.getElementById("year");
  const form = document.getElementById("reservation-form");

  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
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


