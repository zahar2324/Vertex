import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
//import { Helmet } from 'react-helmet-async'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import HowWeWork from './components/HowWeWork'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ContactForm from './components/ContactForm'
import FloatingContactButton from './components/FloatingContactButton'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
     {/* <Helmet>*/}
        <title>Vertex - Діджитал Агенція | Створення Сайтів та Веб-Розробка в Україні</title>
        <meta 
          name="description" 
          content="Vertex - професійна діджитал агенція. Створюємо веб-сайти, односторінкові сайти, інтернет-магазини та корпоративні сайти. Гарантія 5 років, підтримка 24/7. Від 300$. Харків, Україна." 
        />
        <meta 
          name="keywords" 
          content="створення сайтів, веб-розробка, діджитал агенція, односторінковий сайт, інтернет-магазин, корпоративний сайт, веб-дизайн, розробка сайтів Україна, Харків, Vertex" 
        />
        <meta name="author" content="Vertex Digital Agency" />
        <meta property="og:title" content="Vertex - Діджитал Агенція | Створення Сайтів" />
        <meta property="og:description" content="Професійна розробка сайтів та веб-рішень. Гарантія 5 років, підтримка 24/7. Від 300$." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vertex-web.com.ua" />
     {/* </Helmet>*/}
      <div className="min-h-screen">
        <Header onOpenModal={openModal} />
        <Hero onOpenModal={openModal} />
        <WhyChooseUs onOpenModal={openModal} />
        <Services onOpenModal={openModal} />
        <About />
        <Pricing onOpenModal={openModal} />
        <HowWeWork />
        <Reviews />
        <FAQ />
        <Contacts onOpenModal={openModal} />
        <Footer />
        
        <FloatingContactButton />
        
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ContactForm onClose={closeModal} />
        </Modal>
        
        <Analytics />
      </div>
    </>
  )
}

export default App
