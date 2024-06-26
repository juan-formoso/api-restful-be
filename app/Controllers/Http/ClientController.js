'use strict'

const Client = use('App/Models/Client')

class ClientController {
    async index({ response }) {
        const clients = await Client.all()
        return response.json(clients)
    }

    async show({ params, response }) {
        try {
            const client = await Client.findOrFail(params.id)
            await client.load('sales')
            return response.json(client)
        } catch (error) {
            return response.status(404).json({ message: 'Client not found', error })
        }
    }

    async store({ request, response }) {
        const clientData = request.only(['name', 'cpf'])
        try {
            const client = await Client.create(clientData)
            return response.status(201).json(client)
        } catch (error) {
            return response.status(400).json({ message: 'Error creating client', error })
        }
    }

    async update({ params, request, response }) {
        const client = await Client.find(params.id)
        if (!client) {
            return response.status(404).json({
                status: 'error',
                message: 'Client not found'
            })
        }
        const data = request.only(['nome', 'cpf'])
        client.merge(data)
        await client.save()
        return response.json({
            status: 'success',
            data: client
        })
    }

    async delete({ params, response }) {
        try {
            const client = await Client.findOrFail(params.id)
            await client.delete()
            return response.status(200).json({ message: 'Client deleted' })
        } catch (error) {
            return response.status(404).json({ message: 'Client not found', error })
        }
    }
}

module.exports = ClientController
