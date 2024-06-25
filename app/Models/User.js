'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
    static boot () {
        super.boot()

        /**
         * Hook que realiza um has na senha do usuário
         * antes de salvá-la no banco de dados
         */
        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

    // Autenticação
    tokens () {
        return this.hasMany('App/Models/Token')
    }
}

module.exports = User
