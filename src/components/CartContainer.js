import Cart from "./Cart/Cart";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";


function CartContainer({cursos}) {
    const [totalPrecio, setTotalPrecio] = useState(0);

    const { state, cartFacade } = useContext(CartContext);

    const sumarTotal = () => {
        let total = 0
        cursos.forEach(cur => {
            total += parseInt(cur.curso.precio)
        })

        setTotalPrecio(total)
    }

    const resetCursoCart = () => {
        cartFacade.resetCart();
        document.querySelector("#modalPagarMontoTotal .btn-close").click();
    }

    useEffect(() => {
        sumarTotal()
    }, [cursos]);


    return (
        <>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Cesta</h2>
                <div className="row g-4 py-5">
                    <div className="col-lg-9">
                        {
                            cursos.length > 0 ? cursos.map(el =>
                                <Cart curso={el.curso} key={el.curso.id} />
                            ) : (
                                <div className="text-center">
                                    <h3 className="text-danger fw-bold">No se agregar cursos al carrito</h3>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-3">
                        <h1><strong>Total a pagar: </strong></h1>
                        <h3><strong>S/. { totalPrecio }</strong></h3>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#modalPagarMontoTotal">Pagar</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalPagarMontoTotal" tabIndex="-1" aria-labelledby="modalPagarMontoTotalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Atención!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-success text-center fw-bold">
                                <p>El monto correspondiente a de: S/. { totalPrecio }. ha sido procesado con éxito.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={resetCursoCart}>Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartContainer