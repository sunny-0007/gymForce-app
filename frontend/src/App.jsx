import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Plans from './components/Plans.jsx'
import RegistrationModal from './components/RegistrationModal.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [modal, setModal] = useState({ open: false, plan: '' })

  return (
    <>
    <div>
      
    </div>
      <Navbar />
      <Hero onOpenForm={(plan) => setModal({ open: true, plan })} />
      <Plans onOpenForm={(plan) => setModal({ open: true, plan })} />
      <Footer />

      {modal.open && (
        <RegistrationModal 
          plan={modal.plan} 
          onClose={() => setModal({ open: false, plan: '' })}
        />
      )}
    </>
  )
}

export default App;

