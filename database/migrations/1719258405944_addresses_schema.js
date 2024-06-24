'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressesSchema extends Schema {
  up () {
    this.table('addresses', (table) => {
      // alter table
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.string('street', 254).notNullable()
      table.string('city', 80).notNullable()
      table.string('state', 80).notNullable()
      table.string('country', 80).notNullable()
      table.string('zip-code', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.table('addresses', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddressesSchema
