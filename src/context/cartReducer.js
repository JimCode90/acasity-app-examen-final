import {getFromLocalStorage, setToLocalStorage} from "../utils/localStorageUtils";


export const cartReducer = (state, action) => {

    switch (action.type) {
        case 'get':
            state.cart = getFromLocalStorage('cart', []);
            return {...state};
        case 'add':
            state.cart.push(action.payload);
            //agregamos al local storage
            setToLocalStorage('cart',state.cart )
            return {...state};
        case 'update':
            //payload -> objeto a modificar
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload.id) {
                    state.cart[i] = action.payload;
                    break;
                }
            }

            return {...state};

        case 'delete':
            //payload -> objeto a eliminar

            const cursoIndex = state.cart.findIndex(curso => curso.curso.id === action.payload.curso.id )
            const newCursos = [...state.cart]
            newCursos.splice(cursoIndex, 1)
            setToLocalStorage('cart',newCursos )
            state.cart = newCursos
            return {...state};

        case 'reset-cart':
            setToLocalStorage('cart', [])
            state.cart = []
            return {...state};

        default:
            return state;
    }
}