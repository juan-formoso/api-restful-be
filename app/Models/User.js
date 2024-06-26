'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
    static boot () {
        super.boot()

        /**
         * Hook que realiza um hash na senha do usuário
         * antes de salvá-la no banco de dados
         */
        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

    // Oculta a senha quando o objeto do usuário for serializado para JSON
    static get hidden () {
        return ['password']
    }

    // Relacionamento 1:N entre usuários e tokens
    tokens () {
        return this.hasMany('App/Models/Token')
    }
}

module.exports = User
