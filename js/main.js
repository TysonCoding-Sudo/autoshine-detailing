/* ============================================================
   AUTOSHINE DETAILING & SPRAYPAINTING — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Brand config (edit these to rebrand) ---------- */
  const CONFIG = {
    name: "AutoShine Detailing & Spraypainting",
    phone: "066 296 8646",
    phoneLink: "tel:+27662968646",
    whatsapp: "27662968646",
    address: "838 Allemansdrift, Mbibane, 0449",
    area: "Mpumalanga",
  };

  /* ============================================================
     1. PRELOADER — counter + exit
     ============================================================ */
  const preloader = document.getElementById("preloader");
  const fill = document.getElementById("preloaderFill");
  const countEl = document.getElementById("preloaderCount");
  const start = performance.now();
  const DURATION = 1400;

  function tick(now) {
    const p = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const percent = Math.round(eased * 100);
    if (fill) fill.style.width = percent + "%";
    if (countEl) countEl.textContent = percent + "%";
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => preloader && preloader.classList.add("is-done"), 220);
      document.body.classList.add("is-loaded");
      setTimeout(() => preloader && (preloader.style.display = "none"), 1000);
    }
  }
  requestAnimationFrame(tick);

  /* ============================================================
     2. NAV — scroll state, mobile menu, active link
     ============================================================ */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const navMobile = document.getElementById("navMobile");
  const navLinks = Array.from(document.querySelectorAll(".nav__links a, .nav__mobile a"));

  function onScrollNav() {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
    const pos = window.scrollY + 140;
    let current = "home";
    document.querySelectorAll("section[id]").forEach((sec) => {
      if (sec.offsetTop <= pos) current = sec.id;
    });
    navLinks.forEach((a) => {
      const active = a.getAttribute("href") === "#" + current;
      a.classList.toggle("is-active", active);
    });
  }

  burger.addEventListener("click", () => {
    const open = burger.classList.toggle("is-open");
    navMobile.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  navMobile.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      burger.classList.remove("is-open");
      navMobile.classList.remove("is-open");
    }
  });

  /* ============================================================
     3. SCROLL REVEAL (IntersectionObserver)
     ============================================================ */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ============================================================
     4. ANIMATED COUNTERS
     ============================================================ */
  const counters = document.querySelectorAll(".count[data-count]");
  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1600;
        const t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString("en-ZA");
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        counterIO.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => counterIO.observe(el));

  /* ============================================================
     5. TILT effect (mousemove 3D) on [data-tilt]
     ============================================================ */
  const tiltEls = document.querySelectorAll("[data-tilt]");
  if (window.matchMedia("(hover: hover)").matches) {
    tiltEls.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          "perspective(900px) rotateX(" + (-y * 8).toFixed(2) + "deg) rotateY(" +
          (x * 10).toFixed(2) + "deg) translateY(-4px) scale(1.01)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ============================================================
     6. MAGNETIC buttons
     ============================================================ */
  const magneticEls = document.querySelectorAll(".magnetic");
  if (window.matchMedia("(hover: hover)").matches) {
    magneticEls.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) * 0.28;
        const my = (e.clientY - r.top - r.height / 2) * 0.38;
        el.style.transform = "translate(" + mx.toFixed(1) + "px," + my.toFixed(1) + "px)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ============================================================
     7. RIPPLE on click (gold buttons use CSS ::after)
     ----- moved to CSS animation; nothing needed here ----------
     ============================================================ */

  /* ============================================================
     8. CUSTOM CURSOR
     ============================================================ */
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursorDot");
  if (cursor && cursorDot && window.matchMedia("(hover: hover) and (min-width: 1025px)").matches) {
    let mx = 0, my = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left = mx + "px";
      cursorDot.style.top = my + "px";
    });
    (function ring() {
      dx += (mx - dx) * 0.16;
      dy += (my - dy) * 0.16;
      cursor.style.left = dx + "px";
      cursor.style.top = dy + "px";
      requestAnimationFrame(ring);
    })();
    const hoverTargets = "a, button, input, select, textarea, [data-tilt], .gallery__item";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverTargets)) cursor.classList.add("cursor--active");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverTargets)) cursor.classList.remove("cursor--active");
    });
  }

  /* ============================================================
     9. TICKER — duplicate content for seamless loop
     ============================================================ */
  const track = document.getElementById("tickerTrack");
  if (track) track.innerHTML += track.innerHTML;

  /* ============================================================
     10. CONTACT FORM (demo handler)
     ============================================================ */
  const form = document.getElementById("contactForm");
  const formBtn = document.getElementById("formBtn");
  const formNote = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      formBtn.classList.add("is-loading");
      formNote.textContent = "Sending your request…";
      formNote.classList.remove("is-success");
      setTimeout(() => {
        formBtn.classList.remove("is-loading");
        const name = document.getElementById("fName").value.trim();
        const phone = document.getElementById("fPhone").value.trim();
        const service = sel ? sel.value : "—";
        const message = document.getElementById("fMessage").value.trim();
        const lines = [
          "Hi AutoShine! I'd like to book a service:",
          "• Service: " + service,
          "• Name: " + name,
          "• Phone: " + phone,
        ];
        if (message) lines.push("• Note: " + message);
        const url =
          "https://wa.me/" +
          CONFIG.whatsapp +
          "?text=" +
          encodeURIComponent(lines.join("\n"));
        window.open(url, "_blank");
        formNote.textContent =
          "Opening WhatsApp… didn't open? Dial " + CONFIG.phone + ".";
        formNote.classList.add("is-success");
        form.reset();
      }, 1400);
    });
    // select needs a "touched" state to keep label floated
    const sel = document.getElementById("fService");
    if (sel) sel.addEventListener("change", () => sel.setAttribute("data-touched", "1"));
  }

  /* ============================================================
     11. FOOTER YEAR
     ============================================================ */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     12. SMOOTH SCROLL (respect reduced motion)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 74;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });
})();