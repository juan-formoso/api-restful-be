'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    static boot () {
        super.boot()
    }

    // Relacionamento com Client
    client () {
        return this.belongsTo('App/Models/Client')
    }
}

module.exports = Address
