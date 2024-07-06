
import Biblioteca from "./biblioteca"
import Botao from "./Botao"
import Navbar from "./components/Navbar"
import Header from "./Header"


const App = ()=>{
  const diaSemana = 'Sábado'
  const nome = 'turma'
  const n1 = 12
  const n2 = 6
  return(
    <> {/* fragment */}
    
    <Header /> 
    <Biblioteca />
    <Botao />
     
    </>
  )
}

export default App

