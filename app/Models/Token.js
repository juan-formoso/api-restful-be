'use strict'

const Model = use('Model')

class Token extends Model {
    static boot () {
        super.boot()
    }

    // Relacionamento com User
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Token
