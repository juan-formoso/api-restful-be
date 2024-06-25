'use strict'

const Sale = use('App/Models/Sale')
const Client = use('App/Models/Client')
const Product = use('App/Models/Product')

class SaleController {
    async store({ request, response }) {
        const { client_id, product_id, quantity } = request.only(['client_id', 'product_id', 'quantity'])

        try {
            const client = await Client.findOrFail(client_id)
            const product = await Product.findOrFail(product_id)
            const total_price = product.price * quantity
            
            const sale = await Sale.create({
                client_id,
                product_id,
                quantity,
                unit_price: product.price,
                total_price,
                sale_date: new Date()
            })

            return response.status(201).json(sale)
        } catch (error) {
            return response.status(400).json({ message: 'Error creating sale', error })
        }
    }
}

module.exports = SaleController
