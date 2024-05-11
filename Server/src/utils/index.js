const cleanInfoSuplements = (suplements) => {
    return suplements.map((suplement) => {
        return {
            id: suplement.id,
            name: suplement.name,
            category: suplement.category,
            price: suplement.price,
            image: suplement.image,
            amount: suplement.amount
        }
    })
}

module.exports = { cleanInfoSuplements }