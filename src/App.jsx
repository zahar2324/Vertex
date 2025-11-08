import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import HowWeWork from './components/HowWeWork'
import Projects from './components/Projects'
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
    <div className="min-h-screen">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <WhyChooseUs onOpenModal={openModal} />
      <Services onOpenModal={openModal} />
      <About />
      <Pricing onOpenModal={openModal} />
      <HowWeWork />
      <Projects onOpenModal={openModal} />
      <FAQ />
      <Contacts onOpenModal={openModal} />
      <Footer />
      
      <FloatingContactButton />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
      
      <Analytics />
    </div>
  )
}

export default App
