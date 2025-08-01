import { useContext } from 'react'
import About from '../Components/About/About'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Sidebar from '../Components/Sidebar/Sidebar'
import Services from '../Components/Services/Services'
import Portfolio from '../Components/Portfolio/Portfolio'
import Contact from '../Components/Contact/Contact'
import './CSS/home.css'
import { PortfolioContext } from '../Context/Context'
// animation 
import { AnimatePresence, motion } from 'framer-motion';
import SharesPoint from '../Components/SharesPoint/SharesPoint'

function Home() {

  const Context = useContext(PortfolioContext)

  const {activeSection, setActiveSection} = Context

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'sharespoint' :
        return <SharesPoint />
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <section className='home-container'>
      <Header />
      <div className="main-content">
        <div className="left-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="right-container">
            <div className="fixed-sidebar">
              <Sidebar onSelect={setActiveSection} />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home