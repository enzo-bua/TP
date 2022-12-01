import { useState } from "react";
import jsonBooks from "../jsonBooks";
const useJsonBooks = () => {
    const [state, setState] = useState(jsonBooks)

    const addToTemplate = payload => {
        setState({
            ...state,
            template: [...state.template, payload]
        })
    }

    const removeFromTemplate = payload => {
        setState({
            ...state,
            template: state.template.filter(items => items.isbn != payload.isbn)
        })
    }


    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id)
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
        addToTemplate,
        removeFromTemplate,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state, 
    }
}

export default useJsonBooks
