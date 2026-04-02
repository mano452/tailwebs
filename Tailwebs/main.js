  document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("mainNavbar");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
      scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
    }, { passive: true });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    const primaryBtn = document.querySelector(".btn-primary-eg");
    if (primaryBtn) {
      setTimeout(() => {
        primaryBtn.style.animation = "pulseGlow 1.5s ease 2";
        setTimeout(() => primaryBtn.style.animation = "", 3000);
      }, 1800);
    }

    document.querySelectorAll(".egov-navbar .nav-link:not(.dropdown-toggle)").forEach(link => {
      link.addEventListener("click", () => {
        const collapse = document.getElementById("navbarNav");
        if (collapse.classList.contains("show")) {
          bootstrap.Collapse.getInstance(collapse)?.hide();
        }
      });
    });

    const areaBtns = document.querySelectorAll(".area-btn");
    const areas = ["health", "finance", "governance", "water"];

    areaBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        areaBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        const area = this.dataset.area;
        areas.forEach(a => {
          ["1","2"].forEach(n => {
            const el = document.getElementById("area-" + a + "-" + n);
            if (el) el.classList.remove("show");
          });
        });
        const c1 = document.getElementById("area-" + area + "-1");
        const c2 = document.getElementById("area-" + area + "-2");
        if (c1) c1.classList.add("show");
        if (c2) c2.classList.add("show");
      });
    });

    const cardsData = {
      "whats-new": [
        { title: "State-led Urban Digital Transformation", author: "Mathews P Joseph +2 More", date: "13 Mar 2026", tags: ["Odisha","Kerala","Local Governance","Andhra Pradesh"], bg: "#e8f4f8", imgBg: "#c8dce6", imgLabel: "People with laptop" },
        { title: "DOT – A DIGIT Quarterly Newsletter", author: "eGov Foundation +2 More", date: "20 Jan 2026", tags: ["Newsletter","DIGIT","Quarterly"], bg: "#d6f0f5", imgBg: "#00bcd4", imgLabel: "dot — The eGov Quarterly" },
        { title: "DOT 2025 | Top Stories of Partnerships & Impact", author: "eGov Foundation +2 More", date: "30 Dec 2025", tags: ["Impact","Partnerships","2025"], bg: "#fdf8e1", imgBg: "#f5f0d0", imgLabel: "2025 Stories" },
        { title: "Digital Health Stack for Rural India", author: "Priya Nair +1 More", date: "05 Mar 2026", tags: ["Health","Rural","Digital"], bg: "#e8f4f8", imgBg: "#b2dfdb", imgLabel: "Health workers" },
        { title: "Open Source Governance Platforms", author: "Ramesh Kumar +3 More", date: "22 Feb 2026", tags: ["Open Source","Platforms"], bg: "#e8f4f8", imgBg: "#c5cae9", imgLabel: "Tech platform" },
        { title: "Smart City Data Integration Report", author: "Ananya Sharma +2 More", date: "10 Feb 2026", tags: ["Smart City","Data","Integration"], bg: "#fce4ec", imgBg: "#f8bbd0", imgLabel: "City skyline" }
      ],
      "articles": [
        { title: "Reimagining Citizen Services with AI", author: "Vikram Das +1 More", date: "28 Feb 2026", tags: ["AI","Citizen Services","Innovation"], bg: "#e8f4f8", imgBg: "#80cbc4", imgLabel: "AI illustration" },
        { title: "Federated Data Governance in India", author: "Sonal Mehta +2 More", date: "14 Feb 2026", tags: ["Data Governance","India","Policy"], bg: "#e8f4f8", imgBg: "#a5d6a7", imgLabel: "Data governance" },
        { title: "Urban Local Bodies & Digital Infra", author: "Arjun Patel +1 More", date: "01 Feb 2026", tags: ["Urban","Infrastructure","Digital"], bg: "#fdf8e1", imgBg: "#fff9c4", imgLabel: "Urban infrastructure" },
        { title: "Inclusive Technology for Grassroots", author: "Meena Krishnan +3 More", date: "18 Jan 2026", tags: ["Inclusion","Grassroots","Tech"], bg: "#e8f4f8", imgBg: "#b3e5fc", imgLabel: "Community tech" }
      ],
      "whitepapers": [
        { title: "DIGIT Platform Architecture Overview", author: "eGov Tech Team", date: "10 Mar 2026", tags: ["Architecture","DIGIT","Platform"], bg: "#e8f4f8", imgBg: "#b2ebf2", imgLabel: "Architecture diagram" },
        { title: "Municipal Finance & Digital Payments", author: "Finance Working Group", date: "25 Jan 2026", tags: ["Finance","Payments","Municipal"], bg: "#fdf8e1", imgBg: "#f0f4c3", imgLabel: "Finance report" },
        { title: "Open Standards in Public Sector Tech", author: "Policy Research Unit", date: "12 Jan 2026", tags: ["Open Standards","Public Sector"], bg: "#e8f4f8", imgBg: "#c8e6c9", imgLabel: "Standards document" }
      ],
      "case-studies": [
        { title: "Odisha's Property Tax Digital Journey", author: "State Team Odisha +1 More", date: "08 Mar 2026", tags: ["Odisha","Property Tax","Digital"], bg: "#e8f4f8", imgBg: "#ffccbc", imgLabel: "Odisha case study" },
        { title: "Kerala's Integrated Citizen App", author: "Kerala eGov Team", date: "17 Feb 2026", tags: ["Kerala","Citizen App","Integration"], bg: "#fce4ec", imgBg: "#f48fb1", imgLabel: "Kerala app" },
        { title: "Punjab Water Supply Digitisation", author: "Punjab Urban Mission +2 More", date: "03 Jan 2026", tags: ["Punjab","Water Supply","Urban"], bg: "#e8f4f8", imgBg: "#81d4fa", imgLabel: "Water supply" }
      ],
      "strategy-papers": [
        { title: "National Urban Digital Mission 2026", author: "MoHUA Working Group", date: "01 Mar 2026", tags: ["Urban Mission","National","Policy"], bg: "#e8f4f8", imgBg: "#ce93d8", imgLabel: "Urban mission" },
        { title: "GovTech Roadmap for Tier-2 Cities", author: "Strategy & Innovation Team", date: "14 Jan 2026", tags: ["GovTech","Tier-2 Cities","Roadmap"], bg: "#fdf8e1", imgBg: "#a5d6a7", imgLabel: "City roadmap" },
        { title: "Public Health Data Strategy 2025–30", author: "Health Policy Unit +2 More", date: "05 Dec 2025", tags: ["Health","Data Strategy","Policy"], bg: "#e8f4f8", imgBg: "#80deea", imgLabel: "Health strategy" }
      ],
      "news-media": [
        { title: "eGov Foundation Wins Digital India Award", author: "Communications Team", date: "11 Mar 2026", tags: ["Award","Digital India","Recognition"], bg: "#e8f4f8", imgBg: "#ffe082", imgLabel: "Award ceremony" },
        { title: "eGov in the News: February Roundup", author: "Media Desk", date: "28 Feb 2026", tags: ["Media","Roundup","Press"], bg: "#fce4ec", imgBg: "#f48fb1", imgLabel: "News roundup" },
        { title: "CEO Speaks at Smart Cities Summit", author: "eGov Leadership", date: "15 Feb 2026", tags: ["Smart Cities","Summit","Leadership"], bg: "#fdf8e1", imgBg: "#ffcc80", imgLabel: "Summit stage" }
      ],
      "videos": [
        { title: "DIGIT Platform Demo – End to End", author: "Product Team", date: "05 Mar 2026", tags: ["Demo","DIGIT","Platform"], bg: "#e8f4f8", imgBg: "#90caf9", imgLabel: "▶ Platform demo video" },
        { title: "Citizen Stories from Rajasthan", author: "Field Communications", date: "20 Feb 2026", tags: ["Citizen Stories","Rajasthan"], bg: "#fdf8e1", imgBg: "#ffcc80", imgLabel: "▶ Citizen stories" },
        { title: "Panel Discussion: Future of GovTech", author: "eGov Events +3 More", date: "10 Jan 2026", tags: ["Panel","GovTech","Future"], bg: "#e8f4f8", imgBg: "#b39ddb", imgLabel: "▶ Panel discussion" }
      ],
      "newsletter": [
        { title: "DOT – A DIGIT Quarterly Newsletter", author: "eGov Foundation +2 More", date: "20 Jan 2026", tags: ["Newsletter","DIGIT","Quarterly"], bg: "#d6f0f5", imgBg: "#00bcd4", imgLabel: "dot — The eGov Quarterly" },
        { title: "eGov Monthly Digest – February 2026", author: "Content Team", date: "28 Feb 2026", tags: ["Digest","Monthly","Updates"], bg: "#e8f4f8", imgBg: "#80cbc4", imgLabel: "Monthly digest" },
        { title: "Year in Review: 2025 Impact Report", author: "eGov Foundation", date: "05 Jan 2026", tags: ["2025","Impact","Annual"], bg: "#fdf8e1", imgBg: "#fff9c4", imgLabel: "Annual report" }
      ]
    };

    let currentTab = "whats-new", showAll = false;
    const INIT = 3;
    const grid = document.getElementById("cardsGrid");
    const seeAllBtn = document.getElementById("seeAllBtn");

    function isDark(hex) {
      const c = hex.replace('#','');
      const r = parseInt(c.substring(0,2),16), g = parseInt(c.substring(2,4),16), b = parseInt(c.substring(4,6),16);
      return (r*299 + g*587 + b*114) / 1000 < 128;
    }

    function renderCards() {
      const items = cardsData[currentTab] || [];
      const toShow = showAll ? items : items.slice(0, INIT);
      grid.innerHTML = "";
      toShow.forEach(item => {
        const card = document.createElement("div");
        card.className = "eg-card";
        card.innerHTML = `
          <div class="eg-card-img-ph" style="background:${item.imgBg};color:${isDark(item.imgBg)?'#fff':'#444'};">${item.imgLabel}</div>
          <div class="eg-card-body" style="background:${item.bg};">
            <div class="eg-card-title">${item.title}</div>
            <div class="eg-card-meta">
              <span class="meta-dot"></span>
              <span>${item.author}</span>
              <span class="meta-dot"></span>
              <span>${item.date}</span>
            </div>
            <div class="eg-tags">${item.tags.slice(0,4).map(t=>`<span class="eg-tag">${t}</span>`).join("")}</div>
          </div>
        `;
        grid.appendChild(card);
      });
      seeAllBtn.textContent = showAll ? "Show less" : "See all";
    }

    document.querySelectorAll(".tab-btn-c").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn-c").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.dataset.tab;
        showAll = false;
        renderCards();
      });
    });
    seeAllBtn.addEventListener("click", () => { showAll = !showAll; renderCards(); });
    renderCards();

    const track = document.getElementById("carouselTrack");
    track.innerHTML += track.innerHTML;
  });