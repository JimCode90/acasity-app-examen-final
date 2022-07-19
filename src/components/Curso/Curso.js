import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";



function Curso({ curso }) {

    let { id, nombre, desc, precio, tutor, img, nro_horas, nro_clases, nro_alumnos } = curso

    const { state, cartFacade } = useContext(CartContext);

    const imgStyle = {
        height: '300px',
        width: '100%',
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const addToCart = () => {

        // cartFacade.addToCart(id);
        cartFacade.addToCart(curso);
    }

    return (
        <>

            <div className="feature col card mb-4">
                <Link to={`/`}>
                    <div style={imgStyle} className="card-img-top"></div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{ nombre }</h5>
                    { desc ? <p>{ desc }</p> : <hr />}

                    { tutor && <div className="fw-bold">Creado por: { tutor }</div> }

                    { nro_alumnos && <div>{ nro_alumnos } estudiantes</div> }

                    { nro_clases && <div>{ nro_clases } clases</div> }

                    <div className='d-flex flex-row justify-content-between mb-3'>
                        { nro_horas && <div>{ nro_horas } horas de video bajo demanda</div> }
                        { precio && <div className='text-danger fw-bold'>S/. { precio }</div>}
                    </div>
                    <button type="button" className="btn btn-primary w-100" onClick={addToCart}>Añadir al carrito</button>
                </div>
            </div>

        </>
    )
}

export default Curso