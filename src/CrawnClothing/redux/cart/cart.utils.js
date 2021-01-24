export const addToCart = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(item => item.id === itemToAdd.id)

    if (itemExists) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const itemExists = cartItems.find(cartItem => {
        return cartItem.id === itemToRemove.id
    })

    if (itemExists) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    return cartItems
}

export const decreaseProductCount = (cartItems, itemToDecrease) => {
    if (itemToDecrease.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === itemToDecrease.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    }
    return cartItems
}

export const increaseProductCountUtil = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(item => item.id === itemToAdd.id)

    if (itemExists) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }]

}