# Kabir Patil — Portfolio Website

A clean, professional portfolio with light/dark mode toggle, animated photo section,
and a working contact form that sends emails directly to your Gmail.

---

## 📁 File Structure

```
kabir-portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All styles + theme system
├── main.js         ← All JavaScript + EmailJS form
├── assets/
│   └── kabir.jpg   ← Your profile photo
└── README.md       ← This file
```

---

## 📧 Setting Up the Contact Form (EmailJS)

When someone fills the contact form, the message goes directly to
**kabirpatil0302@gmail.com** using EmailJS — free, no backend needed.

### Step 1 — Create an EmailJS account
Go to **https://www.emailjs.com** and sign up with your Gmail.

---

### Step 2 — Add an Email Service
1. In the EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"** → choose **Gmail**
3. Click **"Connect Account"** → sign in with `kabirpatil0302@gmail.com`
4. Give it a name like `kabir_gmail`
5. Click **"Create Service"**
6. Copy the **Service ID** (e.g. `service_abc1234`)

---

### Step 3 — Create an Email Template
1. Click **"Email Templates"** → **"Create New Template"**
2. Set the template up like this:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Body:**
```
You have a new message from your portfolio website.

Name:         {{from_name}}
Email:        {{from_email}}
Organisation: {{organisation}}
Phone:        {{phone}}
Time:         {{time}}

Message:
{{message}}
```

3. In **"To Email"** field, type: `kabirpatil0302@gmail.com`
4. Click **"Save"**
5. Copy the **Template ID** (e.g. `template_xyz7890`)

---

### Step 4 — Get Your Public Key
1. Click your profile icon (top right) → **"Account"**
2. Under **"API Keys"**, copy your **Public Key** (e.g. `abcDEF123456`)

---

### Step 5 — Paste into main.js
Open `main.js` and replace the placeholders at the top of the file:

```js
const EMAILJS_SERVICE_ID  = "service_abc1234";   // ← your Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz7890";  // ← your Template ID
const EMAILJS_PUBLIC_KEY  = "abcDEF123456";       // ← your Public Key
```

Save the file. The contact form is now live!

---

### Step 6 — Test It
Open `index.html` in a browser, scroll to the Contact section,
fill the form and click **Send Message**.
Check your Gmail — the message should arrive within seconds.

---

## 🚀 How to Deploy (Free — Online in 2 minutes)

### Option A — Netlify Drop (Easiest)
1. Go to **https://app.netlify.com/drop**
2. Drag and drop the entire `kabir-portfolio/` folder onto the page
3. Netlify gives you a live URL instantly (e.g. `https://kabir-patil.netlify.app`)
4. Share that link with MNC recruiters!

### Option B — GitHub Pages
1. Create a GitHub account at github.com
2. Create a new repository named `kabir-portfolio`
3. Upload all files (index.html, style.css, main.js, assets/)
4. Go to Settings → Pages → Source → main branch → Save
5. Your site is live at `https://yourusername.github.io/kabir-portfolio`

### Option C — Vercel
1. Go to **https://vercel.com** and sign up
2. Click "Add New Project" → Import your GitHub repo
3. Click Deploy — done in 30 seconds

---

## 🎨 Customising

| What to change          | Where                         |
|------------------------|-------------------------------|
| Your name / bio        | `index.html` — hero section   |
| Skills & percentages   | `index.html` — skills section |
| Experience entries     | `index.html` — experience section |
| Projects               | `index.html` — projects section |
| Profile photo          | Replace `assets/kabir.jpg`    |
| Gold accent color      | `style.css` — `--gold` variable |
| Font choices           | `style.css` — `--serif`, `--sans`, `--mono` |

---

## ✅ Features

- ☀️ / 🌙 Light / Dark mode toggle (preference saved in browser)
- 📸 Your actual photo with animated gold corner frame
- ⌨️ Typewriter effect in hero
- 📜 Scroll-reveal animations on every section
- 📊 Animated skill bars
- 🗓️ Career timeline
- 📱 Fully responsive (mobile friendly)
- 📧 Working contact form → email delivered to your Gmail
- 🖱️ Custom cursor
- ⚡ No frameworks — plain HTML, CSS, JavaScript

---

## 📞 Contact

**Kabir Patil**  
📧 kabirpatil0302@gmail.com  
📱 +91 76661 95329  
🔗 linkedin.com/in/kabir-patil-41b889234  
💻 github.com/Kabirpatil
