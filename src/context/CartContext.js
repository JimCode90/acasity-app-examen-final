import {createContext, useEffect, useReducer} from "react";
import {cartReducer} from "./cartReducer";


export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // const addToCart = (id) => {
    const addToCart = (curso) => {
        dispatch({
            type: 'add',
            payload: {
                // id
                curso
            }
        });
    }

    const fetchCart = () => {
        dispatch({type: 'get'});
    }

    const deleteCurso = (curso) => {
        dispatch({
            type: 'delete',
            payload: {
                curso
            }
        })
    }

    const resetCart = () => {
        dispatch({
            type: 'reset-cart'
        })
    }

    const cartFacade = {
        addToCart,
        fetchCart,
        deleteCurso,
        resetCart
    }

    useEffect(() => {
        fetchCart();
    }, [])

    return (
        <CartContext.Provider value={{
            state, cartFacade
        }}>
            {children}
        </CartContext.Provider>
    )

}