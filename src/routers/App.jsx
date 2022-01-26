import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import styled from 'styled-components'
import {Ingreso} from '../components/Ingreso';
import { Listado } from '../components/Listado';

const DivCont = styled.div`
  margin: 0;
  padding: 0;
`

export const App = () => {
  return (
    <DivCont>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/Registro" element={<Ingreso/>}/>
            <Route exact path="/Listado" element={<Listado/>}/>
          </Routes>
      </BrowserRouter>
    </DivCont>
  );
}


