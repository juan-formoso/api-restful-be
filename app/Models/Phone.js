'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Phone extends Model {
    static boot () {
        super.boot()
    }

    // Relacionamento com Client
    client () {
        return this.belongsTo('App/Models/Client')
    }
}

module.exports = Phone
