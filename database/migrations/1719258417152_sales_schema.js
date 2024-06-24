'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.table('sales', (table) => {
      // alter table
    })
  }

  down () {
    this.table('sales', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SalesSchema
