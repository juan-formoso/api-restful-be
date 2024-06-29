'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static boot () {
    super.boot()
  }

  // Relacionamento 1:N entre Product e Sale
  sales () {
    return this.hasMany('App/Models/Sale')
  }
}

module.exports = Product

