import Articles from "./components/articles/Articles"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Section from "./components/sections/Section"
import WhyChoose from "./components/sections/WhyChoose"


function App() {

  return (
    <div className="app">
      <Navbar />
      <Section />
      <WhyChoose />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
