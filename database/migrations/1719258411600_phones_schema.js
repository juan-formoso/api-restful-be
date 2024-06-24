'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhonesSchema extends Schema {
  up () {
    this.table('phones', (table) => {
      // alter table
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.string('number', 15).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.table('phones', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PhonesSchema
