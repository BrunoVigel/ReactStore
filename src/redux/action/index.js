// For Add item to Cart
export const addCart = (product) => {
    return {
        type : 'ADDITEM',
        payload: product
    }
}

// For Remove item from Cart
export const removeCart = (product) => {
    return {
        type : 'REMOVEITEM',
        payload: product
    }
}