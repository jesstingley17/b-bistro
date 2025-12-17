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

  // Apply time-of-day theme on load and periodically
  applyTimeOfDayTheme();
  window.setInterval(applyTimeOfDayTheme, 30 * 60 * 1000); // refresh every 30 minutes

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


