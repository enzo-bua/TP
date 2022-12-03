import { useState } from "react";
import jsonBooks from "../jsonBooks";
const useJsonBooks = () => {
    const [state, setState] = useState(jsonBooks)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.isbn != payload.isbn)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }
    
    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
}

export default useJsonBooks
