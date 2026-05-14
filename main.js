/* ══════════════════════════════════════════════
   main.js — Kabir Patil Portfolio
   - Preloader
   - Theme toggle (light / dark)
   - Custom cursor
   - Nav scroll pin
   - Typewriter hero text
   - Scroll reveal animations
   - Mobile menu
   - EmailJS contact form
══════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   EMAILJS CONFIGURATION
   ─────────────────────────────────────────────
   SETUP STEPS (free — no backend needed):
   1. Go to https://www.emailjs.com and sign up
   2. Add an Email Service (Gmail recommended)
      → Connect your Gmail: kabirpatil0302@gmail.com
      → Copy the "Service ID"  → paste below as EMAILJS_SERVICE_ID
   3. Create an Email Template:
      → Click "Email Templates" → "Create New Template"
      → Set "To Email" = kabirpatil0302@gmail.com
      → Use these variables in the template body:
          From:    {{from_name}} <{{from_email}}>
          Org:     {{organisation}}
          Phone:   {{phone}}
          Message: {{message}}
          Time:    {{time}}
      → Copy the "Template ID" → paste below as EMAILJS_TEMPLATE_ID
   4. Go to "Account" → copy your "Public Key"
      → paste below as EMAILJS_PUBLIC_KEY
   5. Save this file and test the form.
   All messages will arrive at kabirpatil0302@gmail.com
───────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "service_57biayd";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_77uszvw";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "6fJFoPO05ILnUNxB1";   // e.g. "abcDEF123456"


/* ══════════════════════════════════════════════
   1. PRELOADER
══════════════════════════════════════════════ */
window.addEventListener("load", () => {
  setTimeout(() => {
    const pl = document.getElementById("preloader");
    if (pl) {
      pl.classList.add("out");
      setTimeout(() => pl.remove(), 700);
    }
  }, 1900);
});


/* ══════════════════════════════════════════════
   2. THEME TOGGLE
══════════════════════════════════════════════ */
function toggleTheme() {
  const html  = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const next   = isDark ? "light" : "dark";

  html.setAttribute("data-theme", next);
  localStorage.setItem("kp-theme", next);

  const icon  = document.getElementById("toggleIcon");
  const label = document.getElementById("toggleLabel");
  if (icon)  icon.textContent  = isDark ? "☀️" : "🌙";
  if (label) label.textContent = isDark ? "Light" : "Dark";
}

// Restore saved preference on page load
(function () {
  const saved = localStorage.getItem("kp-theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    const icon  = document.getElementById("toggleIcon");
    const label = document.getElementById("toggleLabel");
    if (icon)  icon.textContent  = "🌙";
    if (label) label.textContent = "Dark";
  }
})();


/* ══════════════════════════════════════════════
   3. CUSTOM CURSOR
══════════════════════════════════════════════ */
(function () {
  const cur  = document.getElementById("cur");
  const curR = document.getElementById("cur-r");
  if (!cur || !curR) return;

  let mx = 0, my = 0, ox = 0, oy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + "px";
    cur.style.top  = my + "px";
  });

  // Ring follows with easing
  (function animateRing() {
    ox += (mx - ox) * 0.1;
    oy += (my - oy) * 0.1;
    curR.style.left = ox + "px";
    curR.style.top  = oy + "px";
    requestAnimationFrame(animateRing);
  })();

  // Hover state on interactive elements
  const hoverEls = document.querySelectorAll(
    "a, button, .proj-card, .edu-row, .cert-item, .stat, .c-link, .skill-cat, .tl-item, .exp-item, .photo-wrap, input, textarea"
  );
  hoverEls.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("hov"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("hov"));
  });

  // Hide cursor when mouse leaves window
  document.addEventListener("mouseleave", () => {
    cur.style.opacity  = "0";
    curR.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cur.style.opacity  = "1";
    curR.style.opacity = "1";
  });
})();


/* ══════════════════════════════════════════════
   4. NAV — PIN ON SCROLL
══════════════════════════════════════════════ */
(function () {
  const nav = document.getElementById("nav");
  if (!nav) return;

  function handleScroll() {
    nav.classList.toggle("pin", window.scrollY > 50);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
})();


/* ══════════════════════════════════════════════
   5. MOBILE MENU
══════════════════════════════════════════════ */
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("open");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.remove("open");
}

// Close mobile menu on outside click
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const btn  = document.getElementById("mobileMenuBtn");
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("open");
  }
});


/* ══════════════════════════════════════════════
   6. TYPEWRITER HERO TEXT
══════════════════════════════════════════════ */
(function () {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const phrases = [
    "ML Engineer",
    "Data Analyst",
    "SQL Architect",
    "IoT Engineer",
    "Power BI Expert",
    "Problem Solver",
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let deleting    = false;

  function type() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
    }

    setTimeout(type, deleting ? 46 : 90);
  }

  // Start after preloader delay
  setTimeout(type, 2100);
})();


/* ══════════════════════════════════════════════
   7. SCROLL REVEAL ANIMATIONS
══════════════════════════════════════════════ */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("up");

        // Animate skill bars inside revealed elements
        entry.target.querySelectorAll(".skill-fill[data-w]").forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.w + "%";
          }, 160 + i * 75);
        });

        // Stop observing once revealed
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.09 }
  );

  document.querySelectorAll(".rv, .rv-l").forEach((el) => observer.observe(el));
})();


/* ══════════════════════════════════════════════
   8. SMOOTH SCROLL FOR NAV LINKS
══════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const navH = 64;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: "smooth" });
  });
});


/* ══════════════════════════════════════════════
   9. EMAILJS CONTACT FORM
   Sends email to kabirpatil0302@gmail.com
   when someone submits the contact form.
══════════════════════════════════════════════ */
(function () {
  // Initialise EmailJS with your public key
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form       = document.getElementById("contactForm");
  const submitBtn  = document.getElementById("submitBtn");
  const btnText    = document.getElementById("btn-text");
  const btnLoader  = document.getElementById("btn-loader");
  const successMsg = document.getElementById("form-success");
  const errorMsg   = document.getElementById("form-error");

  if (!form) return;

  // ── Helper: show/hide elements ──
  function showEl(el)  { if (el) el.style.display = "block"; }
  function hideEl(el)  { if (el) el.style.display = "none";  }
  function setLoading(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    if (btnText)   btnText.style.display   = isLoading ? "none"  : "inline";
    if (btnLoader) btnLoader.style.display = isLoading ? "inline" : "none";
  }

  // ── Helper: simple validation ──
  function validateForm(data) {
    let valid = true;

    // Clear previous error states
    form.querySelectorAll("input, textarea").forEach((el) => el.classList.remove("error"));

    if (!data.from_name.trim()) {
      document.getElementById("from_name")?.classList.add("error");
      valid = false;
    }
    if (!data.from_email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
      document.getElementById("from_email")?.classList.add("error");
      valid = false;
    }
    if (!data.message.trim()) {
      document.getElementById("message")?.classList.add("error");
      valid = false;
    }

    return valid;
  }

  // ── Form submit handler ──
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    hideEl(successMsg);
    hideEl(errorMsg);

    const data = {
      from_name:    document.getElementById("from_name")?.value    || "",
      from_email:   document.getElementById("from_email")?.value   || "",
      organisation: document.getElementById("organisation")?.value || "Not provided",
      phone:        document.getElementById("phone")?.value        || "Not provided",
      message:      document.getElementById("message")?.value      || "",
      time:         new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    if (!validateForm(data)) {
      showEl(errorMsg);
      errorMsg.textContent = "❌ Please fill in all required fields correctly.";
      return;
    }

    // Check if EmailJS is configured
    if (
      EMAILJS_SERVICE_ID  === "YOUR_SERVICE_ID"  ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY  === "YOUR_PUBLIC_KEY"
    ) {
      // EmailJS not configured — show setup instructions
      showEl(errorMsg);
      errorMsg.innerHTML =
        "⚙️ EmailJS not configured yet. See <code>main.js</code> for setup steps. " +
        "For now, email directly: <a href='mailto:kabirpatil0302@gmail.com'>kabirpatil0302@gmail.com</a>";
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
      showEl(successMsg);
      form.reset();
      // Scroll to success message
      successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (err) {
      console.error("EmailJS error:", err);
      showEl(errorMsg);
      errorMsg.textContent =
        "❌ Something went wrong. Please email directly: kabirpatil0302@gmail.com";
    } finally {
      setLoading(false);
    }
  });

  // Remove error class on input
  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", () => el.classList.remove("error"));
  });
})();


/* ══════════════════════════════════════════════
   10. ACTIVE NAV LINK ON SCROLL
══════════════════════════════════════════════ */
(function () {
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nl");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("nl-active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("nl-active");
            }
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: "-64px 0px 0px 0px" }
  );

  sections.forEach((s) => observer.observe(s));
})();
