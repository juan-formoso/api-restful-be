'use strict'

const User = use('App/Models/User')

class UserController {
    async signup ({ request, auth, response }) {
        const userData = request.only(['email', 'password'])
        const user = await User.create(userData)

        // Gera token para o usuário
        const token = await auth.generate(user)

        return response.json({
            status: 'success',
            data: token
        })
    }

    async login ({ request, auth, response }) {
        const { email, password } = request.all()
        try {
            const token = await auth.attempt(email, password)

            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Invalid email/password'
            })
        }
    }
}

module.exports = UserController
