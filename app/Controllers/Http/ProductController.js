'use strict'

const Product = use('App/Models/Product')

class ProductController {
    async index({ response }) {
        const products = await Product.query().where('deleted', false).fetch()
        return response.json(products)
    }

    async show({ params, response }) {
        try {
            const product = await Product.findOrFail(params.id)
            return response.json(product)
        } catch (error) {
            return response.status(404).json({ message: 'Product not found', error })
        }
    }

    async store({ request, response }) {
        const productData = request.only(['name', 'price'])
        try {
            const product = await Product.create(productData)
            return response.status(201).json(product)
        } catch (error) {
            return response.status(400).json({ message: 'Error creating product', error })
        }
    }

    async update({ params, request, response }) {
        try {
            const product = await Product.findOrFail(params.id)
            const productData = request.only(['name', 'price'])
            product.merge(productData)
            await product.save()
            return response.json(product)
        } catch (error) {
            return response.status(404).json({ message: 'Product not found', error })
        }
    }

    async delete({ params, response }) {
        try {
            const product = await Product.findOrFail(params.id)
            product.deleted = true
            await product.save()
            return response.status(200).json({ message: 'Product deleted' })
        } catch (error) {
            return response.status(404).json({ message: 'Product not found', error })
        }
    }
}

module.exports = ProductController