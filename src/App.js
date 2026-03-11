import { useState, useEffect, useRef } from "react";

const ME = {
  name: "Steeve Tagasling",
  role: "Full-Stack Developer",
  subtitle: "Graphic Designer",
  tagline: "Combining design and code to build digital experiences.",
  location: "Bohol, Philippines",
  email: "steevetagasling@gmail.com",
  github: "https://github.com/SteeveTagasling",
  linkedin: "https://linkedin.com/",
  bio: "I'm a developer and graphic designer who enjoys creating clean and user-friendly digital experiences. I build websites and design visuals that are both functional and appealing. My goal is to turn ideas into simple, effective, and beautiful digital products.",
  avatar: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773123025/Gemini_Generated_Image_xnh03cxnh03cxnh0_mhp81q.png",
  aboutPhoto: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773124429/Gemini_Generated_Image_ra57d2ra57d2ra57_uvrrdc.png",
};

const PROJECTS = [
  { title: "DNHS Information System", year: "2025", desc: "DNHS Information System is a digital platform that helps the school manage academic and administrative data efficiently.", tags: ["Python", "Tailwind CSS", "PostgreSQL"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773124832/582525009_695559973273900_5948769035578402337_n_xu7yhh.png", color: "#89ad05", link: " " },
  { title: "IT Equipment Tracking and Maintenance System", year: "2026", desc: "The IT staff can easily monitor equipment status, schedule repairs, and keep accurate records.", tags: ["React", "Expo Go", "Google Sheet API"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773125074/Screenshot_2026-03-10_144259_jbg35f.png", color: "#278cff", link: " " },
  { title: "Fishkeypers", year: "2023", desc: "FishKeypers is an application designed to help fish owners or aquaculture managers monitor, manage, and maintain fish tanks or fish farming activities. The app provides tools for tracking fish health, feeding schedules, water conditions, and overall aquarium or pond management.", tags: ["Android Studio"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773125590/Untitled_design_l380fl.png", color: "#ececec", link: " " },
  { title: "FruitSnap", year: "2024", desc: "FruitSnap is an application designed to help users identify fruits quickly using a camera or image capture. By simply taking a photo of a fruit, the app analyzes the image and provides information such as the fruit’s name, nutritional value, and other useful details.", tags: ["Android Studio", "Tensorflow", "Machine Learning"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126022/Untitled_design_1_cihqmt.png", color: "#ececec", link: "https://fortune-desk.netlify.app/" },
  { title: "Home Management", year: "2026", desc: "A Bohol Tourism System is a digital platform designed to promote, manage, and provide information about tourist destinations, accommodations, and activities in Bohol. It serves both tourists and tourism administrators by offering a centralized system for booking, exploring attractions, and planning trips.", tags: ["Python"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773130193/Screenshot_2026-03-10_160924_vuq5hf.png", color: "#278cff", link: " " },
  { title: "Graphic Design", year: "2025", desc: "Designing an esports jersey involves creating a visually appealing and functional uniform for a gaming team. The jersey should represent the team’s brand, colors, and identity while remaining comfortable for players.", tags: ["Adobo Photoshop"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126291/DRACONIC_ESPORTS_-_Red_m410c9.png", color: "#df1010", link: " " },
  { title: "Canteen Reservation Management", year: "2022", desc: "The system allows students, employees, or customers to reserve meals, order food, and schedule pickup or dine-in times. It helps the canteen manage crowd control, food preparation, and inventory more effectively.", tags: ["Java"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126920/Screenshot_2026-03-10_151240_vpuuku.png", color: "#df1010", link: " " },
  { title: "Cemetery Management", year: "2022", desc: "A Cemetery Management System manages all aspects of a cemetery, from grave plots and burials to maintenance schedules and record-keeping. It provides centralized data access for staff and improves service to families and visitors.", tags: ["Java"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126936/Screenshot_2026-03-10_151309_yj3sep.png", color: "#eb6b0b", link: " " },
  { title: "Hotel Reservation Management", year: "2022", desc: "A Hotel Reservation System allows guests to check room availability, book rooms, and make payments online, while helping hotel staff manage reservations, room inventory, and customer data. It can also generate reports and analytics to improve operational efficiency.", tags: ["Java"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126939/Screenshot_2026-03-10_151347_jg5uyc.png", color: "#eb6b0b", link: " " },
  { title: "Bohol Tourism", year: "2022", desc: "A Bohol Tourism System is a digital platform designed to promote, manage, and provide information about tourist destinations, accommodations, and activities in Bohol. It serves both tourists and tourism administrators by offering a centralized system for booking, exploring attractions, and planning trips.", tags: ["Java"], img: "https://res.cloudinary.com/ddztoiwez/image/upload/v1773126942/Screenshot_2026-03-10_151456_zni4cn.png", color: "#89ad05", link: " " },
];

const SKILLS = [
  { name: "React / RN", icon: "⚛️", level: 50 },
  { name: "JavaScript", icon: "🟨", level: 60 },
  { name: "TypeScript", icon: "🔷", level: 20 },
  { name: "Node.js", icon: "🟩", level: 40 },
  { name: "UI / UX", icon: "🎨", level: 90 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "PostgreSQL", icon: "🐘", level: 70 },
  { name: "Graphic", icon: "🍃", level: 90 },
];

const EXPERIENCE = [
  { role: "Full-Stack Developer", company: " ", period: "Present", desc: "Builds and manages both the front-end and back-end of applications" },
  { role: "App Developer", company: " ", period: "Present", desc: "Creates functional mobile or desktop apps" },
  { role: "Graphic Designer", company: " ", period: "Present", desc: "Crafts visual content to communicate ideas effectively." },
];
// ============================================================

const NAV = ["Home", "About", "Work", "Skills", "Experience", "Contact"];

// ── Responsive hook ──
function useIsMobile() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

// ── Particles ──
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const count = window.innerWidth <= 768 ? 35 : 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.o})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

// ── Cursor glow (desktop only) ──
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const move = (e) => {
      if (ref.current) { ref.current.style.left = e.clientX + "px"; ref.current.style.top = e.clientY + "px"; }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (window.innerWidth <= 768) return null;
  return (
    <div ref={ref} style={{ position: "fixed", pointerEvents: "none", zIndex: 9999, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", transform: "translate(-50%, -50%)", transition: "left 0.12s ease, top 0.12s ease" }} />
  );
}

// ── Scroll reveal ──
function useVisible(ref, threshold = 0.1) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return seen;
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const visible = useVisible(ref);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.75s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

// ── Skill bar ──
function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const visible = useVisible(ref);
  return (
    <div ref={ref} style={{ padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms` }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", display: "flex", alignItems: "center", gap: 7 }}><span>{skill.icon}</span>{skill.name}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#f97316" }}>{skill.level}%</span>
      </div>
      <div style={{ height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 5, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 5, background: "linear-gradient(90deg,#f97316,#fbbf24)", width: visible ? `${skill.level}%` : "0%", transition: `width 1.4s cubic-bezier(.16,1,.3,1) ${delay + 200}ms`, boxShadow: "0 0 10px rgba(249,115,22,0.5)" }} />
      </div>
    </div>
  );
}

// ── Project card ──
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const visible = useVisible(ref);
  const isMobile = useIsMobile();

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${index * 100}ms, transform 0.8s cubic-bezier(.16,1,.3,1) ${index * 100}ms` }}>
      <a href={project.link} target="_blank" rel="noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          borderRadius: isMobile ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${hovered ? project.color + "60" : "rgba(255,255,255,0.07)"}`,
          transition: "all 0.35s ease",
          transform: hovered && !isMobile ? "scale(1.012)" : "scale(1)",
          boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}25` : "0 6px 24px rgba(0,0,0,0.3)",
          textDecoration: "none",
        }}>
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? 200 : 260 }}>
          <img src={project.img} alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease", transform: hovered ? "scale(1.07)" : "scale(1)" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${project.color}30, rgba(0,0,0,0.4))` }} />
          <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", border: `1px solid ${project.color}50`, borderRadius: 20, padding: "3px 11px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: project.color, letterSpacing: 1 }}>{project.year}</span>
          </div>
        </div>
        {/* Text */}
        <div style={{ background: "rgba(15,23,42,0.97)", padding: isMobile ? "24px 20px" : "34px 30px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: project.color, marginBottom: 16, boxShadow: `0 0 10px ${project.color}` }} />
          <h3 style={{ fontSize: isMobile ? 18 : 21, fontWeight: 800, color: "#f8fafc", marginBottom: 10, letterSpacing: -0.4, fontFamily: "'Georgia', serif" }}>{project.title}</h3>
          <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, marginBottom: 18 }}>{project.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
            {project.tags.map((t) => (
              <span key={t} style={{ fontSize: 11, fontWeight: 600, color: project.color, background: project.color + "15", border: `1px solid ${project.color}40`, padding: "3px 11px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: project.color }}>View Project {hovered ? "→→" : "→"}</span>
        </div>
      </a>
    </div>
  );
}

// ── Typewriter ──
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setIdx((idx + 1) % words.length); }
      }
    }, deleting ? 60 : 110);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);
  return <span style={{ color: "#f97316" }}>{text}<span style={{ animation: "blink 1s infinite" }}>|</span></span>;
}

// ── Hamburger menu ──
function MobileMenu({ active, go, open, setOpen }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1100, backdropFilter: "blur(4px)" }} />
      )}
      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: "75vw", maxWidth: 300,
        background: "rgba(8,13,24,0.98)", backdropFilter: "blur(24px)",
        borderLeft: "1px solid rgba(249,115,22,0.15)",
        zIndex: 1200, padding: "80px 28px 40px",
        transform: open ? "translateX(0)" : "translateX(110%)",
        transition: "transform 0.35s cubic-bezier(.16,1,.3,1)",
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        {NAV.map((n) => (
          <button key={n} onClick={() => { go(n); setOpen(false); }} style={{
            background: active === n ? "rgba(249,115,22,0.12)" : "transparent",
            border: active === n ? "1px solid rgba(249,115,22,0.25)" : "1px solid transparent",
            borderRadius: 12, padding: "14px 20px", cursor: "pointer",
            color: active === n ? "#f97316" : "#94a3b8", fontSize: 16, fontWeight: 600,
            textAlign: "left", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif",
          }}>{n}</button>
        ))}
        <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          <a href={`mailto:${ME.email}`} style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg,#f97316,#ea580c)", padding: "14px", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
            ✉️ Hire Me
          </a>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { overflow-x: hidden; background: #080d18; }
    ::selection { background: rgba(249,115,22,0.3); color: #fff; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 4px; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
    @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(1.55);opacity:0} }
    @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes about-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes slideDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
    .nav-btn:hover { color: #f97316 !important; }
    .hire-btn:hover { background: #ea6a0a !important; box-shadow: 0 0 28px rgba(249,115,22,0.4) !important; }
    .social-btn:hover { border-color: #f97316 !important; color: #f97316 !important; background: rgba(249,115,22,0.05) !important; }
    .exp-card:hover { border-color: rgba(249,115,22,0.28) !important; transform: translateX(6px) !important; }
    .about-img-wrap:hover img { transform: scale(1.04) !important; filter: grayscale(0%) !important; }
    button { font-family: inherit; }
    a { text-decoration: none; }
  `;

  const pad = isMobile ? "0 20px" : "0 40px";
  const secPad = isMobile ? "70px 20px" : "100px 40px";
  const h2Size = isMobile ? 32 : 44;

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#080d18", color: "#e2e8f0", minHeight: "100vh" }}>
      <style>{css}</style>
      <CursorGlow />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `14px ${isMobile ? "20px" : "40px"}`,
        background: scrolled ? "rgba(8,13,24,0.97)" : "rgba(8,13,24,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
        animation: "slideDown 0.6s ease",
      }}>
        {/* Logo */}
        <div onClick={() => go("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
  
            <img
              src="https://res.cloudinary.com/ddztoiwez/image/upload/v1773129562/Logo_syozqi.png"
              alt="logo"
             style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(249,115,22,0.5)",
              boxShadow: "0 0 10px rgba(249,115,22,0.25)"
            }}
            />
           

            <span style={{
              fontSize: 17, fontWeight: 700, color: "#f8fafc",
              fontFamily: "'Playfair Display', serif", letterSpacing: -0.3
            }}>
              SGraphix<span style={{ color: "#f97316" }}>.</span>
            </span>

          </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 3 }}>
            {NAV.map((n) => (
              <button key={n} className="nav-btn" onClick={() => go(n)} style={{
                background: active === n ? "rgba(249,115,22,0.1)" : "transparent",
                border: active === n ? "1px solid rgba(249,115,22,0.2)" : "1px solid transparent",
                cursor: "pointer", color: active === n ? "#f97316" : "#64748b",
                fontSize: 13, fontWeight: 500, padding: "6px 13px", borderRadius: 8, transition: "all 0.25s",
              }}>{n}</button>
            ))}
          </div>
        )}

        {/* Desktop hire / Mobile hamburger */}
        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)",
            cursor: "pointer", borderRadius: 10, padding: "8px 12px",
            display: "flex", flexDirection: "column", gap: 5, alignItems: "center",
          }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 20, height: 2, background: "#f97316", borderRadius: 2, display: "block", transition: "all 0.3s",
                transform: menuOpen && i === 0 ? "translateY(7px) rotate(45deg)" : menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        ) : (
          <button className="hire-btn" onClick={() => go("Contact")} style={{
            background: "#f97316", border: "none", cursor: "pointer", color: "#fff",
            fontWeight: 600, fontSize: 13, padding: "9px 22px", borderRadius: 10,
            transition: "all 0.2s", boxShadow: "0 4px 15px rgba(249,115,22,0.3)",
          }}>Hire Me ✦</button>
        )}
      </nav>

      {/* Mobile menu drawer */}
      {isMobile && <MobileMenu active={active} go={go} open={menuOpen} setOpen={setMenuOpen} />}

      {/* ── HERO ── */}
      <section id="Home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Particles />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", left: "5%", width: isMobile ? 300 : 500, height: isMobile ? 300 : 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "2%", width: isMobile ? 250 : 400, height: isMobile ? 250 : 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 60,
          alignItems: "center",
          maxWidth: 1100, margin: "0 auto",
          padding: isMobile ? "110px 24px 80px" : "120px 40px 80px",
          width: "100%", position: "relative", zIndex: 1,
        }}>
          {/* Text */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1) 100ms" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 20, padding: "6px 16px", marginBottom: 22 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)", display: "inline-block" }} />
                <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>Available · {ME.location}</span>
              </div>
            </div>
            <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1) 200ms" }}>
              <h1 style={{ fontSize: isMobile ? 38 : 58, fontWeight: 900, lineHeight: 1.06, letterSpacing: isMobile ? -1 : -2, marginBottom: 8, fontFamily: "'Playfair Display', serif", color: "#f8fafc" }}>
                {ME.name}
              </h1>
            </div>
            <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1) 300ms" }}>
              <h2 style={{ fontSize: isMobile ? 17 : 21, fontWeight: 300, color: "#94a3b8", marginBottom: 18, fontStyle: "italic" }}>
                <Typewriter words={["Full-Stack Developer", "UI/UX Designer", "Graphic Designer"]} />
              </h2>
            </div>
            <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1) 400ms" }}>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#64748b", lineHeight: 1.8, maxWidth: 430, marginBottom: 34, margin: isMobile ? "0 auto 34px" : "0 0 34px" }}>{ME.tagline}</p>
            </div>
            <div style={{ opacity: heroLoaded ? 1 : 0, transition: "opacity 0.8s ease 500ms", display: "flex", gap: 12, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
              <button onClick={() => go("Work")} style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", border: "none", cursor: "pointer", color: "#fff", fontWeight: 600, fontSize: isMobile ? 14 : 15, padding: isMobile ? "13px 26px" : "14px 32px", borderRadius: 12, transition: "all 0.25s", boxShadow: "0 8px 25px rgba(249,115,22,0.35)" }}
                onMouseEnter={e => e.target.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
                See My Work ↓
              </button>
              <button onClick={() => go("Contact")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.14)", cursor: "pointer", color: "#e2e8f0", fontWeight: 500, fontSize: isMobile ? 14 : 15, padding: isMobile ? "13px 26px" : "14px 32px", borderRadius: 12, transition: "all 0.25s" }}
                onMouseEnter={e => { e.target.style.borderColor = "rgba(249,115,22,0.4)"; e.target.style.color = "#f97316"; }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.14)"; e.target.style.color = "#e2e8f0"; }}>
                Let's Talk →
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 40, opacity: heroLoaded ? 1 : 0, transition: "opacity 0.8s ease 700ms", justifyContent: isMobile ? "center" : "flex-start" }}>
              {[["2+", "Years"], ["10+", "Projects"], ["10+", "Clients"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: isMobile ? 22 : 26, fontWeight: 900, color: "#f97316", fontFamily: "'Playfair Display', serif" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#475569", fontWeight: 500, letterSpacing: 0.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", opacity: heroLoaded ? 1 : 0, transition: "opacity 1s ease 400ms" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: isMobile ? -14 : -20, borderRadius: "50%", border: "1px dashed rgba(249,115,22,0.2)", animation: "spin-slow 20s linear infinite" }} />
              <div style={{ position: "absolute", inset: isMobile ? -28 : -40, borderRadius: "50%", border: "1px dashed rgba(249,115,22,0.1)", animation: "spin-slow 30s linear infinite reverse" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(249,115,22,0.3)", animation: "pulse-ring 2.5s ease-out infinite" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(249,115,22,0.3)", animation: "pulse-ring 2.5s ease-out infinite 0.8s" }} />
              <div style={{ width: isMobile ? 220 : 300, height: isMobile ? 220 : 300, borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(249,115,22,0.4)", boxShadow: "0 0 60px rgba(249,115,22,0.2), 0 0 120px rgba(249,115,22,0.06)", animation: "float 6s ease-in-out infinite", background: "#1e293b", position: "relative" }}>
                <img src={ME.avatar} alt={ME.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,13,24,0.4), transparent)" }} />
              </div>
              {!isMobile && <>
                <div style={{ position: "absolute", top: 10, right: -34, background: "rgba(15,23,42,0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 12, padding: "8px 13px", fontSize: 12, fontWeight: 600, color: "#f97316", whiteSpace: "nowrap" }}>🐍 Python</div>
                <div style={{ position: "absolute", bottom: 20, left: -44, background: "rgba(15,23,42,0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: 12, padding: "8px 13px", fontSize: 12, fontWeight: 600, color: "#a78bfa", whiteSpace: "nowrap" }}>🎨 UI / UX</div>
                <div style={{ position: "absolute", top: 50, left: -74, background: "rgba(15,23,42,0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(212,134,39,0.3)", borderRadius: 12, padding: "8px 13px", fontSize: 12, fontWeight: 600, color: "#d48627", whiteSpace: "nowrap" }}>☕ Java</div>
              </>}
              {/* Mobile badges — compact row below avatar */}
              {isMobile && (
                <div style={{ position: "absolute", bottom: -44, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, whiteSpace: "nowrap" }}>
                  {[["🐍", "Python", "#f97316", "rgba(249,115,22,0.2)"], ["🎨", "UI/UX", "#a78bfa", "rgba(167,139,250,0.2)"], ["☕", "Java", "#d48627", "rgba(212,134,39,0.2)"]].map(([icon, label, color, bg]) => (
                    <div key={label} style={{ background: "rgba(15,23,42,0.9)", border: `1px solid ${bg}`, borderRadius: 20, padding: "5px 10px", fontSize: 11, fontWeight: 600, color }}>
                      {icon} {label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#64748b", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #f97316, transparent)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="About" style={{ padding: secPad, maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><p style={{ fontSize: 11, fontWeight: 700, color: "#f97316", letterSpacing: 5, textTransform: "uppercase", marginBottom: 10 }}>About Me</p></Reveal>
        <Reveal delay={100}><h2 style={{ fontSize: h2Size, fontWeight: 900, letterSpacing: -1.5, marginBottom: 50, fontFamily: "'Playfair Display', serif", color: "#f8fafc", lineHeight: 1.1 }}>The person<br /><span style={{ fontStyle: "italic", color: "#f97316" }}>behind the code.</span></h2></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 40, alignItems: "center" }}>
          <Reveal delay={150}>
            <div className="about-img-wrap" style={{ position: "relative", cursor: "pointer" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: isMobile ? "1/1" : "4/5", background: "#1e293b", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
                <img src={ME.aboutPhoto} alt="About" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)", transition: "transform 0.5s ease, filter 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, transparent 50%, rgba(8,13,24,0.75) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,13,24,0.85) 0%, transparent 55%)" }} />
              </div>
              <div style={{ position: "absolute", top: 14, left: 14, right: -14, bottom: -14, borderRadius: 20, border: "1px solid rgba(249,115,22,0.12)", zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <div style={{ background: "rgba(8,13,24,0.82)", backdropFilter: "blur(14px)", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(249,115,22,0.14)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 13, color: "#f8fafc", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>{ME.name}</div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{ME.role} · {ME.subtitle}</div>
                    </div>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#fbbf24)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 900, color: "#fff", flexShrink: 0 }}>{ME.name[0]}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", top: -8, right: -8, width: 18, height: 18, borderRadius: "50%", background: "#f97316", boxShadow: "0 0 16px rgba(249,115,22,0.6)", animation: "about-float 3s ease-in-out infinite" }} />
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#94a3b8", lineHeight: 1.85, marginBottom: 28 }}>{ME.bio}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
                {[["📧", "Email", ME.email], ["📍", "Location", ME.location], ["💼", "Status", "Open to Work"], ["🎓", "Degree", "B.S. Info Tech"]].map(([icon, k, v]) => (
                  <div key={k} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "13px 14px" }}>
                    <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, letterSpacing: 0.5, marginBottom: 4, textTransform: "uppercase" }}>{icon} {k}</div>
                    <div style={{ fontSize: 12, color: "#cbd5e1", fontWeight: 500, wordBreak: "break-word" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: isMobile ? "wrap" : "nowrap" }}>
                <a href={ME.github} target="_blank" rel="noreferrer" className="social-btn" style={{ flex: 1, textAlign: "center", padding: "11px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#94a3b8", fontSize: 13, fontWeight: 500, transition: "all 0.25s", minWidth: 80 }}>GitHub ↗</a>
                <a href={ME.linkedin} target="_blank" rel="noreferrer" className="social-btn" style={{ flex: 1, textAlign: "center", padding: "11px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#94a3b8", fontSize: 13, fontWeight: 500, transition: "all 0.25s", minWidth: 80 }}>LinkedIn ↗</a>
                <a href={`mailto:${ME.email}`} className="social-btn" style={{ flex: 1, textAlign: "center", padding: "11px", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 10, color: "#f97316", fontSize: 13, fontWeight: 600, transition: "all 0.25s", background: "rgba(249,115,22,0.05)", minWidth: 80 }}>Email ✦</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="Work" style={{ padding: secPad, background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><p style={{ fontSize: 11, fontWeight: 700, color: "#f97316", letterSpacing: 5, textTransform: "uppercase", marginBottom: 10 }}>Selected Work</p></Reveal>
          <Reveal delay={100}><h2 style={{ fontSize: h2Size, fontWeight: 900, letterSpacing: -1.5, marginBottom: isMobile ? 36 : 56, fontFamily: "'Playfair Display', serif", color: "#f8fafc", lineHeight: 1.1 }}>Projects that<br /><span style={{ fontStyle: "italic", color: "#f97316" }}>tell a story.</span></h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 20 : 26 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="Skills" style={{ padding: secPad, maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><p style={{ fontSize: 11, fontWeight: 700, color: "#f97316", letterSpacing: 5, textTransform: "uppercase", marginBottom: 10 }}>Toolkit</p></Reveal>
        <Reveal delay={100}><h2 style={{ fontSize: h2Size, fontWeight: 900, letterSpacing: -1.5, marginBottom: isMobile ? 30 : 48, fontFamily: "'Playfair Display', serif", color: "#f8fafc", lineHeight: 1.1 }}>Skills &<br /><span style={{ fontStyle: "italic", color: "#f97316" }}>expertise.</span></h2></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 12 }}>
          {SKILLS.map((s, i) => <SkillBar key={s.name} skill={s} delay={i * 70} />)}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="Experience" style={{ padding: secPad, background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal><p style={{ fontSize: 11, fontWeight: 700, color: "#f97316", letterSpacing: 5, textTransform: "uppercase", marginBottom: 10 }}>Career</p></Reveal>
          <Reveal delay={100}><h2 style={{ fontSize: h2Size, fontWeight: 900, letterSpacing: -1.5, marginBottom: isMobile ? 32 : 52, fontFamily: "'Playfair Display', serif", color: "#f8fafc", lineHeight: 1.1 }}>Where I've<br /><span style={{ fontStyle: "italic", color: "#f97316" }}>made my mark.</span></h2></Reveal>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 110}>
              <div className="exp-card" style={{ display: "flex", gap: isMobile ? 16 : 22, marginBottom: 24, padding: isMobile ? "18px 16px" : "22px 26px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f97316", flexShrink: 0, boxShadow: "0 0 0 3px rgba(249,115,22,0.15)" }} />
                  {i < EXPERIENCE.length - 1 && <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, rgba(249,115,22,0.3), transparent)", marginTop: 7 }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, color: "#f8fafc", fontFamily: "'Playfair Display', serif" }}>{e.role}</h3>
                      <span style={{ fontSize: 12, color: "#f97316", fontWeight: 600 }}>{e.company}</span>
                    </div>
                    <span style={{ fontSize: 11, color: "#475569", background: "rgba(255,255,255,0.04)", padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="Contact" style={{ padding: secPad }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><p style={{ fontSize: 11, fontWeight: 700, color: "#f97316", letterSpacing: 5, textTransform: "uppercase", marginBottom: 10 }}>Contact</p></Reveal>
          <Reveal delay={100}>
            <h2 style={{ fontSize: isMobile ? 36 : 52, fontWeight: 900, letterSpacing: -2, marginBottom: 18, fontFamily: "'Playfair Display', serif", color: "#f8fafc", lineHeight: 1.05 }}>
              Let's build<br /><span style={{ fontStyle: "italic", color: "#f97316" }}>something great.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: isMobile ? 14 : 16, color: "#64748b", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 40px" }}>
              I'm open to new opportunities, collaborations, or just a good conversation. My inbox is always open.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`mailto:${ME.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#f97316,#ea580c)", padding: isMobile ? "14px 26px" : "15px 34px", borderRadius: 14, color: "#fff", fontWeight: 700, fontSize: isMobile ? 14 : 16, transition: "all 0.25s", boxShadow: "0 8px 28px rgba(249,115,22,0.35)", width: isMobile ? "100%" : "auto", justifyContent: "center" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                ✉️ Send an Email
              </a>
              <div style={{ display: "flex", gap: 12, width: isMobile ? "100%" : "auto" }}>
                <a href={ME.github} target="_blank" rel="noreferrer" className="social-btn" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: isMobile ? "14px 18px" : "15px 28px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", fontWeight: 500, fontSize: 14, transition: "all 0.25s" }}>GitHub ↗</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: isMobile ? "24px 20px" : "26px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 8, textAlign: "center" }}>
        <span style={{ fontSize: 13, color: "#334155" }}>
          © 2026 <span style={{ color: "#f97316", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{ME.name}</span>. All rights reserved.
        </span>
        <span style={{ fontSize: 11, color: "#1e293b" }}>Crafted with React ⚡ Deployed on Netlify</span>
      </footer>
    </div>
  );
}