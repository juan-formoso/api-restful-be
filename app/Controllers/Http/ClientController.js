'use strict'

const Client = use('App/Models/Client')
const Sale = use('App/Models/Sale')

class ClientController {
    async index({ response }) {
        const clients = await Client.query().orderBy('id').fetch()
        return response.json(clients)
    }

    async show ({ params, request, response }) {
        const { id } = params
        const { month, year } = request.get()
        try {
            const client = await Client.findOrFail(id)
            let query = Sale.query().where('client_id', id).orderBy('sale_date', 'desc')
            if (month && year) {
                query = query.whereRaw('MONTH(sale_date) = ? AND YEAR(sale_date) = ?', [month, year])
            } else if (month) {
                query = query.whereRaw('MONTH(sale_date) = ?', [month])
            } else if (year) {
                query = query.whereRaw('YEAR(sale_date) = ?', [year])
            }
            const sales = await query.fetch()
            return response.json({ client, sales })
        } catch (error) {
            return response.status(404).json({ message: 'Client not found' })
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
