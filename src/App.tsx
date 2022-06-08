import { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Components/Home';
import { Pagina1 } from './Components/Pagina1';
import { Pagina2 } from './Components/Pagina2';
import { Login } from './Components/Login';
import { DetallePage1 } from './Components/DetallePage1';
import { RoutesPublic } from './Components/RoutesPublic';
import { RoutesPrivate } from './Components/RoutesPrivate';
import { NotFound } from './Components/NotFound';

function App() {
  const [tokenUser, setTokenUser] = useState(false)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <RoutesPublic isAuth={tokenUser}>
            <Login setTokenUser={setTokenUser} />
          </RoutesPublic>
        } />


        <Route path="/" element={
          <RoutesPrivate isAuth={tokenUser}>
            <Home />
          </RoutesPrivate>
        } />

        <Route path="/page1" element={
          <RoutesPrivate isAuth={tokenUser}>
            <Pagina1 />
          </RoutesPrivate>
        } />

        <Route path="/page2" element={
                  <RoutesPrivate isAuth={tokenUser}>
                    <Pagina2 />
                  </RoutesPrivate>
                } />
         <Route path="/detalle/:id" element={
                  <RoutesPrivate isAuth={tokenUser}>
                    <DetallePage1 />
                  </RoutesPrivate>
                } />
         <Route path="*" element={<NotFound />} />
        {/* <Route path="/page1" element={<Pagina1 />} />
         <Route path="/page2" element={<Pagina2 />} />
         <Route path="/detalle/:id" element={<DetallePage1 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
