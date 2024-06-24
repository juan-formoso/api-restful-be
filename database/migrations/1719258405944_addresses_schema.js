'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressesSchema extends Schema {
  up () {
    this.table('addresses', (table) => {
      // alter table
    })
  }

  down () {
    this.table('addresses', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddressesSchema
