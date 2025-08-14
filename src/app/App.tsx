import '../styles/index.css'
import Services from '../components/Services'
import Cases from '../components/Cases'
import Testimonials from '../components/Testimonials'
import QuemSomos from '../components/QuemSomos'
import Header from '../components/Header'

function App() {
  return (
    <div className='w-full h-full'>
      <Header />
      <div id="quem-somos" className="scroll-mt-20">
        <QuemSomos />
      </div>
      <div id="services" className="scroll-mt-20">
        <Services />
      </div>
      <div id="cases">
        <Cases />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </div>
  )
}

export default App
