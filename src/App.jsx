import './App.css'
import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ChevronRight, Mail, Phone, Instagram, Linkedin, Facebook, Rocket, Layers, ShoppingCart, Palette, Search, Gauge, X } from 'lucide-react'
import bg from '../public/bg.jpg'
function App() {
  const [showModal, setShowModal] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = useTransform(mouseX, [0, 1], [-8, 8])
  const parallaxY = useTransform(mouseY, [0, 1], [-8, 8])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  const fadeUpSlow = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }
  const hoverLift = { y: -4, scale: 1.01 }
  const tapPress = { y: 0, scale: 0.985 }

  return (
    <div className="min-h-screen bg-[#0B0F1C] text-white overflow-x-hidden">

      {/* Header (always visible) */}
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F1C]/70 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/Untitled.jpg" alt="Vertex" className="h-8 w-8 rounded-sm object-cover ring-1 ring-white/10" />
            <span className="font-semibold tracking-wide text-white group-hover:text-[#C4B5FD] transition-colors">Vertex Web Agency</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">Головна</a>
            <a href="#services" className="hover:text-white transition-colors">Послуги</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Портфоліо</a>
            <a href="#about" className="hover:text-white transition-colors">Про нас</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакти</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-[#4B5ED7] hover:bg-[#2E3C8C] px-4 py-2 text-sm font-medium transition-colors">Замовити консультацію</a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate scroll-mt-[35px] h-screen pt-24 md:pt-32 pb-16 md:pb-24"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const nx = (e.clientX - rect.left) / rect.width
          const ny = (e.clientY - rect.top) / rect.height
          mouseX.set(nx)
          mouseY.set(ny)
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B0F1C] via-[#140F2D]/40 to-[#241452]/60"
          style={{ x: parallaxX, y: parallaxY }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#7C5CFF]/30 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-20 h-72 w-72 rounded-full bg-[#A78BFA]/25 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Сучасні вебсайти, які продають і вражають.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl">
                Розробляємо швидкі, стильні та адаптивні сайти на React, Next.js і Tailwind CSS. Впроваджуємо продуману архітектуру, сучасні анімації та SEO-практики, щоб ваш сайт не лише виглядав преміально, а й працював на конверсію.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <motion.a
                  href="#portfolio"
                  whileHover={hoverLift}
                  whileTap={tapPress}
                  className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_24px_-8px_rgba(124,92,255,0.55)]"
                >
                  Переглянути роботи <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.button
                  whileHover={hoverLift}
                  whileTap={tapPress}
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center rounded-md bg-[#7C5CFF] hover:bg-[#6D4AFF] px-5 py-3 text-sm font-medium text-white transition-colors shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_30px_-10px_rgba(124,92,255,0.8)]"
                >
                  Подати заявку
                </motion.button>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
             
             {/*bg.png is in public folder*/}
             <img src={bg} alt="Hero" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4" aria-modal="true" role="dialog" onKeyDown={(e) => { if (e.key === 'Escape') setShowModal(false) }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-b from-[#1C1242]/70 to-[#0E0A21]/80 p-6 shadow-[0_40px_120px_-30px_rgba(124,92,255,0.6)]"
          >
            <button aria-label="Close" onClick={() => setShowModal(false)} className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-semibold">Подати заявку</h3>
            <p className="mt-1 text-sm text-gray-300">Заповніть форму — повернемось протягом 24 годин.</p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Ім’я</label>
                <input type="text" placeholder="Ваше ім’я" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Опис проєкту</label>
                <textarea rows={4} placeholder="Коротко опишіть цілі та функціонал" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="inline-flex rounded-md border border-white/10 px-4 py-2 text-sm text-gray-200 hover:bg-white/5">Скасувати</button>
                <motion.button type="button" whileHover={hoverLift} whileTap={tapPress} className="inline-flex rounded-md bg-[#7C5CFF] hover:bg-[#6D4AFF] px-5 py-2.5 text-sm font-medium shadow-[0_8px_30px_-10px_rgba(124,92,255,0.8)]">Надіслати</motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}



      {/* Services */}
      <section id="services" className="scroll-mt-[35px] py-20 md:py-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <motion.h2 className="text-2xl sm:text-3xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Наші послуги</motion.h2>
              <motion.p className="mt-2 text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Повний цикл: стратегія → дизайн → розробка → оптимізація → підтримка.</motion.p>
            </div>
            <button onClick={() => setShowModal(true)} className="hidden md:inline-flex rounded-md bg-[#7C5CFF] hover:bg-[#6D4AFF] px-4 py-2 text-sm font-medium transition-colors shadow-[0_8px_30px_-10px_rgba(124,92,255,0.6)]">Дізнатися більше</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Rocket, title: 'Односторінкові сайти', desc: 'Лендінги з високою конверсією, A/B-тести, інтеграції форм та CRM.' },
              { Icon: Layers, title: 'Багатосторінкові сайти', desc: 'Корпоративні сайти, блоги, каталоги з продуманою структурою контенту.' },
              { Icon: ShoppingCart, title: 'E-commerce', desc: 'Кошик, оплати, фільтри, персоналізація, аналітика продажів.' },
              { Icon: Palette, title: 'UI/UX дизайн', desc: 'Преміум-візуал, дизайн-система, адаптив, доступність WCAG.' },
              { Icon: Search, title: 'SEO-оптимізація', desc: 'Core Web Vitals, семантика, мікророзмітка, sitemap/robots, швидкість.' },
              { Icon: Gauge, title: 'Швидкодія', desc: 'Code-splitting, кешування, оптимізація зображень, Lighthouse 90+.' },
            ].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUpSlow}
                whileHover={hoverLift}
                whileTap={tapPress}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-[#C4B5FD] to-[#7C5CFF] text-white/90 overflow-hidden">
                  <Icon className="h-5 w-5 relative z-10" />
                  <span className="pointer-events-none absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-[35px] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Портфоліо / Кейси</motion.h2>
          <motion.p className="mt-2 text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Реальні проєкти: проблема → рішення → результат. Звертаємо увагу на бізнес-метрики, а не лише на дизайн.</motion.p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'RetailPro',
                desc: 'Низька конверсія. Рішення: редизайн, спрощення шляху користувача, оптимізація швидкодії.',
                tech: 'React, Tailwind, Vite',
              },
              {
                name: 'EduFlow',
                desc: 'Плутана навігація. Рішення: UX-спрощення, нова структура контенту, пошук.',
                tech: 'Next.js, Tailwind',
              },
              {
                name: 'FinEdge',
                desc: 'Довга загрузка. Рішення: code-splitting, кешування, оптимізовані графіки.',
                tech: 'React, SW, SEO',
              },
            ].map((p) => (
              <motion.div
                key={p.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUpSlow}
                whileHover={hoverLift}
                whileTap={tapPress}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[#1C1242] via-[#2D1B69]/45 to-[#0E0A21]" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-medium text-white">{p.name}</h3>
                    <span className="text-xs text-gray-300">{p.tech}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                  <motion.a href="#contact" whileHover={{ x: 2 }} className="mt-4 inline-flex text-sm text-[#C4B5FD] hover:text-white transition-colors">Переглянути деталі кейсу</motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners marquee slider */}
      <section id="partners" className="scroll-mt-[35px] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm uppercase tracking-widest text-white/70">Нам довіряють</h3>
          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0F1C] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0F1C] to-transparent" />
            <div className="flex gap-10 animate-[marquee_20s_linear_infinite] will-change-transform">
              {['Techstars','MIT','Google','SAP','J.P. Morgan','Oracle','Stripe','Shopify'].map((name, i) => (
                <div key={name + i} className="flex items-center justify-center shrink-0 h-10 px-4 rounded-md border border-white/10 bg-white/5 text-white/80">
                  {name}
                </div>
              ))}
              {['Techstars','MIT','Google','SAP','J.P. Morgan','Oracle','Stripe','Shopify'].map((name, i) => (
                <div key={'dup'+name + i} className="flex items-center justify-center shrink-0 h-10 px-4 rounded-md border border-white/10 bg-white/5 text-white/80">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-[35px] py-20 md:py-28 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-semibold">Про нас</h2>
              <p className="mt-4 text-gray-300 max-w-2xl">
                Vertex Web Agency — діджитал-команда, яка створює сайти “під ключ”. Ми поєднуємо стратегічне мислення, преміальний дизайн і чистий код, щоб швидко запускати проєкти і масштабувати їх безболісно.
              </p>
              <ul className="mt-6 space-y-3 text-gray-200">
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4FC3F7]" />Прозорий процес: таймлайни, стейкхолдери, демо-зустрічі</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4FC3F7]" />Підтримка: супровід після запуску, аналітика, ітерації</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4FC3F7]" />Гарантії: SLA, фіксований обсяг, ретести</li>
              </ul>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Проєктів', value: '120+' },
                { label: 'Клієнтів', value: '80+' },
                { label: 'Років досвіду', value: '6+' },
              ].map((s) => (
                <motion.div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-sm hover:shadow-lg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} whileHover={hoverLift}>
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                  <div className="mt-1 text-xs text-gray-300">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="scroll-mt-[35px] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="rounded-2xl border border-purple-400/10 bg-gradient-to-br from-[#1C1242]/60 to-[#0E0A21]/40 p-8 sm:p-10 text-center shadow-[0_30px_120px_-30px_rgba(124,92,255,0.6)]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} whileHover={hoverLift}>
            <h3 className="text-2xl font-semibold">Готові створити сайт, який працює на ваш бізнес?</h3>
            <p className="mt-2 text-gray-300">Залиште заявку — повернемось з пропозицією впродовж 24 годин.</p>
            <motion.button onClick={() => setShowModal(true)} whileHover={hoverLift} whileTap={tapPress} className="mt-6 inline-flex rounded-md bg-[#7C5CFF] hover:bg-[#6D4AFF] px-6 py-3 text-sm font-medium transition-colors shadow-[0_8px_30px_-10px_rgba(124,92,255,0.8)]">Подати заявку</motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-[35px] py-20 md:py-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <motion.h2 className="text-2xl sm:text-3xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Контакти</motion.h2>
              <motion.p className="mt-2 text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Розкажіть про ваш проєкт — повернемось із планом дій та приблизним бюджетом.</motion.p>

              <form className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Ім’я</label>
                  <input type="text" placeholder="Ваше ім’я" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Опис проєкту</label>
                  <textarea rows="4" placeholder="Коротко опишіть цілі та функціонал" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40" />
                </div>
                <motion.button type="button" whileHover={hoverLift} whileTap={tapPress} className="inline-flex rounded-md bg-[#7C5CFF] hover:bg-[#6D4AFF] px-6 py-3 text-sm font-medium transition-colors shadow-[0_8px_30px_-10px_rgba(124,92,255,0.8)]">Подати заявку</motion.button>
              </form>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Як з нами зв’язатися</h3>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li className="flex items-center gap-2 group"><Phone className="h-4 w-4 transition-transform group-hover:scale-110" /><span className="text-white">Телефон:</span> +380 (67) 000-00-00</li>
                  <li className="flex items-center gap-2 group"><Mail className="h-4 w-4 transition-transform group-hover:scale-110" /><span className="text-white">Email:</span> hello@vertex.agency</li>
                  <li className="flex items-center gap-2 group"><Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" /><span className="text-white">Соцмережі:</span> LinkedIn, Instagram, Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (expanded) */}
      <footer className="border-t border-white/10 pt-14 pb-10 text-sm bg-[#0E1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <img src="/Untitled.jpg" alt="Vertex" className="h-7 w-7 rounded-sm object-cover ring-1 ring-white/10" />
                <span className="font-medium">Vertex Web Agency</span>
              </div>
              <p className="mt-4 text-gray-300">Створюємо швидкі та елегантні вебрішення, що масштабуються разом із вашим бізнесом.</p>
              <div className="mt-4 flex gap-3 text-gray-300">
                <a href="#" aria-label="LinkedIn" className="group hover:text-white relative">
                  <Linkedin className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110" />
                  <span className="pointer-events-none absolute inset-0 rounded bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </a>
                <a href="#" aria-label="Instagram" className="group hover:text-white relative">
                  <Instagram className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110" />
                  <span className="pointer-events-none absolute inset-0 rounded bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </a>
                <a href="#" aria-label="Facebook" className="group hover:text-white relative">
                  <Facebook className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110" />
                  <span className="pointer-events-none absolute inset-0 rounded bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium">Навігація</h4>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Головна</a></li>
                <li><a href="" className="hover:text-white">Послуги</a></li>
                <li><a href="" className="hover:text-white">Портфоліо</a></li>
                <li><a href="" className="hover:text-white">Про нас</a></li>
                <li><a href="" className="hover:text-white">Контакти</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium">Послуги</h4>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>Лендінги</li>
                <li>Корпоративні сайти</li>
                <li>Інтернет-магазини</li>
                <li>UI/UX дизайн</li>
                <li>SEO та швидкодія</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium">Отримувати новини</h4>
              <p className="mt-2 text-gray-300">Раз на місяць надсилаємо корисні інсайти та кейси.</p>
              <div className="mt-4 flex items-center gap-2">
                <input type="email" placeholder="Ваш email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]/50" />
                <button className="rounded-md bg-[#3F51B5] hover:bg-[#2B3D9E] px-4 py-2 text-xs font-medium transition-colors">Підписатися</button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-gray-400">
            <div>© {new Date().getFullYear()} Vertex. Зроблено з React, Vite, Tailwind CSS.</div>
            <div className="mt-2 sm:mt-0">Політика конфіденційності · Умови користування</div>
          </div>
        </div>
      </footer>
     </div>
  )
}

export default App
