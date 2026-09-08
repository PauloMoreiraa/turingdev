import './App.css'
import Header from './components/Header/Header'
import Home from './sections/Home/Home'
import Projetos from './sections/Projetos/Projetos'
import Servicos from './sections/Servicos/Servicos'
import Sobre from './sections/Sobre/Sobre'
import Contato from './sections/Contato/Contato'
import Footer from './sections/Footer/Footer'


function App() {
  return (
    <>
      <Header />
     <Home />
     <Servicos />
     <Projetos />
     <Sobre />
     <Contato />
     <Footer />
    </>
  )
}

export default App
