import React, { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Wrench, LineChart, Cpu, FlaskConical, Microscope, Mail, MapPin, Phone } from "lucide-react";

// One-file landing page for bamtechcenter.com
// TailwindCSS + framer-motion + lucide-react
// Palette: Metallic Navy #0F1C2E, Black #0A0A0A, Cyan/Teal Accent #00B3B3, Light Gray #F4F6F8
// Slogan: “Bilimle Üreten Teknoloji / Research. Design. Verify.”

export default function BAMTechLanding() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  const t = (tr: string, en: string) => (lang === "tr" ? tr : en);

  const nav = [
    { id: "services", tr: "Hizmetler", en: "Services" },
    { id: "projects", tr: "Projeler", en: "Projects" },
    { id: "labs", tr: "Laboratuvarlar", en: "Labs" },
    { id: "about", tr: "Hakkımızda", en: "About" },
    { id: "contact", tr: "İletişim", en: "Contact" },
  ];

  const Section: React.FC<{ id?: string; children: React.ReactNode; className?: string }>=({ id, children, className }) => (
    <section id={id} className={`max-w-7xl mx-auto px-6 md:px-10 ${className || "py-20"}`}>{children}</section>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00B3B3]/30">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          {/* Logo/Wordmark */}
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl bg-gradient-to-br from-[#0F1C2E] to-[#00B3B3] grid place-items-center shadow-lg">
              <FlaskConical className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">BAMTech Center</div>
              <div className="text-xs text-white/60">{t("BAM Teknoloji ve Araştırma Merkezi","Technology & Research Center")}</div>
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
              {t("Bilimle Üreten Teknoloji", "Engineering Technology with Science")}
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
            "End‑to‑end support for academic and industrial projects: methodology, data acquisition, device development, analysis, and publications."
          )}
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: t("Araştırma Tasarımı","Research Design"),
              desc: t("Hipotez, örneklem ve istatistiksel plan.","Hypothesis, sampling and statistical planning."),
              icon: Beaker
            },
            {
              title: t("Veri Toplama ve Analiz","Data Collection & Analysis"),
              desc: t("Dijital ölçüm sistemleri, veri temizleme ve modelleme.","Digital metrology systems, data cleaning and modeling."),
              icon: LineChart
            },
            {
              title: t("Prototipleme & Üretim","Prototyping & Fabrication"),
              desc: t("Mekatronik prototipler, test fikstürleri ve jigler.","Mechatronic prototypes, test fixtures and jigs."),
              icon: Wrench
            },
            {
              title: t("Biyomekanik Test","Biomechanical Testing"),
              desc: t("Çiğneme simülatörleri ve kuvvet/yorulma testleri.","Chewing simulators and force/fatigue testing."),
              icon: Microscope
            },
            {
              title: t("Akademik Yazım & Yayın","Scientific Writing"),
              desc: t("Makale, rapor ve etik süreç danışmanlığı.","Manuscripts, reports and ethics guidance."),
              icon: FlaskConical
            },
            {
              title: t("Dijital Ölçüm & Algoritmalar","Digital Metrology & Algorithms"),
              desc: t("Sinyal işleme ve doğrulama protokolleri.","Signal processing and validation protocols."),
              icon: Cpu
            }
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

      {/* Projects */}
      <Section id="projects">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t("Öne Çıkan Proje","Featured Project")}</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              {t(
                "Yeni Nesil Çiğneme Simülatörü: 50–250N yük, 25mm strok, 1.5Hz frekans ile 5.000.000 çevrim test kapasitesi.",
                "Next‑gen Chewing Simulator: 50–250N per‑stamp, 25mm stroke, 1.5Hz frequency, 5,000,000 cycle test capacity."
              )}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
              <li>{t("Çok eksenli hareket ve hassas yük kontrolü","Multi‑axis motion with precise load control")}</li>
              <li>{t("Modüler fikstür ve güvenilirlik protokolleri","Modular fixturing and reliability protocols")}</li>
              <li>{t("Akademik yayın ve raporlama desteği","Academic publishing & reporting support")}</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#0F1C2E]/40 min-h-64" />
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
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="bg-white/10 rounded-xl px-4 py-3 placeholder:text-white/50" placeholder={t("Ad Soyad","Full Name")} />
              <input className="bg-white/10 rounded-xl px-4 py-3 placeholder:text-white/50" placeholder="Email" type="email"/>
            </div>
            <input className="bg-white/10 rounded-xl px-4 py-3 placeholder:text-white/50" placeholder={t("Konu","Subject")} />
            <textarea className="bg-white/10 rounded-xl px-4 py-3 h-32 placeholder:text-white/50" placeholder={t("Mesajınız","Your Message")} />
            <button className="justify-self-start px-5 py-3 rounded-xl bg-[#00B3B3] text-[#0A0A0A] font-medium hover:brightness-110">{t("Gönder","Send")}</button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <Section className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>© {new Date().getFullYear()} BAMTech Center</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">X</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
