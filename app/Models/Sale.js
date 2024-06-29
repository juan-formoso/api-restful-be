'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
  static boot () {
    super.boot()
  }

  // Relacionamento entre vendas e clientes
  client () {
    return this.belongsTo('App/Models/Client')
  }

  // Relacionamento entre vendas e produtos
  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Sale
