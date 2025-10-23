import React, { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Wrench, LineChart, Cpu, FlaskConical, Microscope, Mail, MapPin, Phone } from "lucide-react";

// One-file landing page for bamtechcenter.com
// TailwindCSS + framer-motion + lucide-react
// Palette: Metallic Navy #0F1C2E, Black #0A0A0A, Cyan/Teal Accent #00B3B3, Light Gray #F4F6F8
// Slogan: “Dijital Diş Teknolojisi Araştırma ve Uygulama Merkezi / Research. Design. Verify.”

export default function BAMTechLanding() {
  const [lang, setLang] = useState("tr");

  const t = (tr, en) => (lang === "tr" ? tr : en);

  const nav = [
    { id: "services", tr: "Hizmetler", en: "Services" },
    { id: "projects", tr: "Projeler", en: "Projects" },
    { id: "labs", tr: "Laboratuvarlar", en: "Labs" },
    { id: "about", tr: "Hakkımızda", en: "About" },
    { id: "contact", tr: "İletişim", en: "Contact" },
  ];

  const Section = ({ id, children, className }) => (
    <section id={id} className={`max-w-7xl mx-auto px-6 md:px-10 ${className || "py-20"}`}>{children}</section>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00B3B3]/30">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          {/* Logo/Wordmark */}
          <div className="mt-6 space-y-3 text-white/80">
  <div className="flex items-center gap-3"><Mail className="size-5"/><a href="mailto:info@bamtechcenter.com" className="hover:underline">info@bamtechcenter.com</a></div>
  <div className="flex items-center gap-3"><Phone className="size-5"/><span>+90 (___) ___ __ __</span></div>
  <div className="flex items-center gap-3"><MapPin className="size-5"/><span>{t("Türkiye","Türkiye")}</span></div>
  <div className="flex items-center gap-3">
    <a href="https://www.instagram.com/bamtechcenter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r=".5" />
      </svg>
      <span>@bamtechcenter</span>
    </a>
  </div>
</div>

          {/* Nav + Lang */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-white/80 hover:text-white transition">
                {t(n.tr, n.en)}
              </a>
            ))}
            <div className="h-5 w-px bg-white/15" />
            <button
              onClick={() => setLang(l => (l === "tr" ? "en" : "tr"))}
              className="text-xs bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full"
              aria-label="Language toggle"
            >{lang === "tr" ? "EN" : "TR"}</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Section className="py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
              {t("Dijital Diş Teknolojisi Araştırma ve Uygulama Merkezi", "Digital Dental Technology & Research Center")}
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              {t(
                "Araştırma tasarımı, dijital ölçüm ve biyomekanik test altyapısını tek çatı altında birleştiriyoruz.",
                "We combine research design, digital measurement and biomechanical testing under one roof."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-[#00B3B3] text-[#0A0A0A] font-medium hover:brightness-110">
                {t("Teklif/İletişim", "Get in Touch")}
              </a>
              <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 font-medium">
                {t("Hizmetler", "Our Services")}
              </a>
            </div>
            <div className="mt-6 text-xs uppercase tracking-widest text-white/50">Research · Design · Verify</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0F1C2E] to-[#0A0A0A]" />
              <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
                {/* Feature tiles */}
                {[{icon:Beaker, label:t("Araştırma Tasarımı","Research Design")},{icon:LineChart,label:t("Veri Analizi","Data Analysis")},{icon:Wrench,label:t("Prototipleme","Prototyping")},{icon:Microscope,label:t("Test & Doğrulama","Testing & Validation")},{icon:Cpu,label:t("Dijital Ölçüm","Digital Metrology")},{icon:FlaskConical,label:t("Biyomekanik","Biomechanics")}].map((it,idx)=> (
                  <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col gap-3 justify-center">
                    <it.icon className="size-6 text-white" />
                    <div className="text-sm text-white/80">{it.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2 className="text-2xl md:text-3xl font-semibold">{t("Hizmetler","Services")}</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          {t(
            "Akademik ve endüstriyel projeler için uçtan uca destek: metodoloji, veri toplama, cihaz geliştirme, analiz ve yayın süreci.",
            "End-to-end support for academic and industrial projects: methodology, data acquisition, device development, analysis, and publications."
          )}
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: t("Araştırma Tasarımı","Research Design"), desc: t("Hipotez, örneklem ve istatistiksel plan.","Hypothesis, sampling and statistical planning."), icon: Beaker },
            { title: t("Veri Toplama ve Analiz","Data Collection & Analysis"), desc: t("Dijital ölçüm sistemleri, veri temizleme ve modelleme.","Digital metrology systems, data cleaning and modeling."), icon: LineChart },
            { title: t("Prototipleme & Üretim","Prototyping & Fabrication"), desc: t("Mekatronik prototipler, test fikstürleri ve jigler.","Mechatronic prototypes, test fixtures and jigs."), icon: Wrench },
            { title: t("Biyomekanik Test","Biomechanical Testing"), desc: t("Çiğneme simülatörleri ve kuvvet/yorulma testleri.","Chewing simulators and force/fatigue testing."), icon: Microscope },
            { title: t("Akademik Yazım & Yayın","Scientific Writing"), desc: t("Makale, rapor ve etik süreç danışmanlığı.","Manuscripts, reports and ethics guidance."), icon: FlaskConical },
            { title: t("Dijital Ölçüm & Algoritmalar","Digital Metrology & Algorithms"), desc: t("Sinyal işleme ve doğrulama protokolleri.","Signal processing and validation protocols."), icon: Cpu }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:border-white/20"
            >
              <card.icon className="size-6" />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-white/70">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Labs */}
      <Section id="labs">
        <h2 className="text-2xl md:text-3xl font-semibold">{t("Laboratuvar Altyapısı","Laboratory Infrastructure")}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Biomechanics Lab","Digital Metrology","Prototyping Studio"].map((lab,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-white/90 font-medium">{lab}</div>
              <div className="mt-2 text-sm text-white/60">{t("Cihaz listesi ve rezervasyon yakında.","Equipment list & booking coming soon.")}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t("Hakkımızda","About Us")}</h2>
            <p className="mt-3 text-white/70">
              {t(
                "BAMTech Center, akademik araştırma destek hizmetleri ile dijital üretim ve ölçüm teknolojilerini bir araya getiren hibrit bir araştırma ve uygulama merkezidir.",
                "BAMTech Center is a hybrid research and application hub uniting academic support with digital fabrication and measurement technologies."
              )}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#0F1C2E]/40 min-h-56" />
        </div>
      </Section>

     {/* Contact */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t("İletişim","Contact")}</h2>
            <p className="mt-2 text-white/70">{t("Bize projenizi anlatın, birlikte planlayalım.","Tell us about your project — let’s plan together.")}</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Mail className="size-5"/><a href="mailto:info@bamtechcenter.com" className="hover:underline">info@bamtechcenter.com</a></div>
              <div className="flex items-center gap-3"><Phone className="size-5"/><span>+90 (___) ___ __ __</span></div>
              <div className="flex items-center gap-3"><MapPin className="size-5"/><span>{t("Türkiye","Türkiye")}</span></div>
            </div>
          </div>
          <form
  action="https://formsubmit.co/info@bamtechcenter.com"
  method="POST"
  className="bg-white/5 border border-white/10 rounded-2xl p-6 grid gap-4"
>
  {/* Güvenlik/Honeypot (bot engelleme) */}
  <input type="text" name="_honey" className="hidden" />
  {/* FormSubmit captcha kapat */}
  <input type="hidden" name="_captcha" value="false" />
  {/* Mail konusu */}
  <input type="hidden" name="_subject" value="BAMTech Center: Yeni iletişim mesajı" />
  {/* Gönderim sonrası yönlenecek sayfa (istersen değiştir) */}
  <input type="hidden" name="_next" value="https://bamtechcenter.com/#contact" />

  <div className="grid md:grid-cols-2 gap-4">
    <input name="name" className="bg-white/10 rounded-xl px-4 py-3" placeholder="Ad Soyad" required />
    <input name="email" type="email" className="bg-white/10 rounded-xl px-4 py-3" placeholder="Email" required />
  </div>
  <input name="subject" className="bg-white/10 rounded-xl px-4 py-3" placeholder="Konu" />
  <textarea name="message" className="bg-white/10 rounded-xl px-4 py-3 h-32" placeholder="Mesajınız" required />
  <button type="submit" className="justify-self-start px-5 py-3 rounded-xl bg-[#00B3B3] text-[#0A0A0A] font-medium hover:brightness-110">
    Gönder
  </button>
</form>
        </div>
      </Section>

      {/* Footer */}
<footer className="border-t border-white/10">
  <Section className="py-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
      <div>© {new Date().getFullYear()} BAMTech Center</div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/bamtechcenter/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          @bamtechcenter
        </a>
      </div>
    </div>
  </Section>
</footer>
>
    </div>
  );
}
