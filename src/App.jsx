import {useState} from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Nome de Usuário" />
    

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    </>
  )
}

export default App
