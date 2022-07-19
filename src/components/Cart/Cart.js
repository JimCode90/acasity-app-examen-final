import {useContext} from "react";
import {CartContext} from "../../context/CartContext";


function Cart({curso}) {

    const { state, cartFacade } = useContext(CartContext);

    const delteCursoCart = () => {
        cartFacade.deleteCurso(curso);
    }

    return (
        <>

            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">
                <div className="col-auto p-2 d-none d-lg-block">
                    <img src={curso.img} alt="" width="200" height="150"/>

                </div>
                <div className="col p-1 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">{curso.nombre}</strong>
                    <p className="mb-auto">{curso.desc}</p>
                    <p className="stretched-link">S/ {curso.precio}</p>
                    <a href="#" className="stretched-link" onClick={delteCursoCart}>Eliminar</a>
                </div>

            </div>

        </>
    )
}

export default Cart