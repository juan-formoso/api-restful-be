'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  static boot () {
    super.boot()
  }

  // Relacionamento 1:N entre Client e Address
  addresses () {
    return this.hasMany('App/Models/Address')
  }

  // Relacionamento 1:N entre Client e Phone
  phones () {
    return this.hasMany('App/Models/Phone')
  }

  // Relacionamento 1:N entre Client e Sale
  sales () {
    return this.hasMany('App/Models/Sale')
  }
}

module.exports = Client

