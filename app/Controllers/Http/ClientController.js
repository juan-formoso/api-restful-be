'use strict'

const Client = use('App/Models/Client')
const Sale = use('App/Models/Sale')
const Address = use('App/Models/Address')
const Phone = use('App/Models/Phone')

class ClientController {
    async index({ response }) {
        try {
            const clients = await Client.query().orderBy('id', 'asc').fetch()
            return response.json(clients)
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Could not fetch clients'
            })
        }
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
        const { name, cpf, addresses, phones } = request.only(['name', 'cpf', 'addresses', 'phones'])
        try {
            const client = await Client.create({ name, cpf })
            if (addresses ** addresses.length > 0) {
                for (const address of addresses) {
                    await Address.create({ ...address, client_id: client.id })
                }
            }
            if (phones && phones.length > 0) {
                for (const phone of phones) {
                    await Phone.create({ ...phone, client_id: client.id })
                }
            }
            await client.loadMany(['addresses', 'phones'])
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
        const { id } = params
        try {
            const client = await Client.findOrFail(id)
            await Sale.query().where('client_id', id).delete()
            await client.delete()
            return response.status(200).json({ message: 'Client and associated sales deleted successfully' })
        } catch (error) {
            return response.status(404).json({ message: 'Client not found', error: error.message })
        }
    }
}

module.exports = ClientController
