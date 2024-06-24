'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhonesSchema extends Schema {
  up () {
    this.table('phones', (table) => {
      // alter table
    })
  }

  down () {
    this.table('phones', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PhonesSchema
