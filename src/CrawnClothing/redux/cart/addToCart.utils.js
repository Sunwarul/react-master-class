export const addToCart = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(item => item.id === itemToAdd.id)

    if (itemExists) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}