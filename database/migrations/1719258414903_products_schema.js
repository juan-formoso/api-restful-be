'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.table('products', (table) => {
      // alter table
      table.increments()
      table.string('name', 80).notNullable()
      table.decimal('price', 12, 2).notNullable()
      table.boolean('deleted').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductsSchema
