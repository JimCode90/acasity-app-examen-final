import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/shared/layout/Layout";
import CursoContainer from "./components/CursoContainer";
import {CursoContext} from "./context/CursoContext";
import {useContext, useEffect} from "react";
import CartContainer from "./components/CartContainer";
import {CartContext} from "./context/CartContext";


function App() {

    const {cursos, cargandoCursos} = useContext(CursoContext);
    const {state} = useContext(CartContext);

    useEffect(() => {
    }, [cargandoCursos, state])

    return (
        <div>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<CursoContainer cursos={cursos} loading={cargandoCursos}/>}/>
                    <Route exact path="/cart" element={<CartContainer cursos={state.cart} /> } />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
