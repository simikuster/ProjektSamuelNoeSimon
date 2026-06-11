import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Classes from './components/Classes/Classes'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Prices from './components/Prices/Prices'
import TrainingCar from './components/TrainingCar/TrainingCar'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Classes />
        <TrainingCar />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
