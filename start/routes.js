'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Rotas de autenticação
Route.post('/signup', 'UserController.signup')
Route.post('/login', 'UserController.login')

Route.group(() => {
  // Rotas de Clientes
  Route.get('/clients', 'ClientController.index')
  Route.get('/clients/:id', 'ClientController.show')
  Route.post('/clients', 'ClientController.store')
  Route.put('/clients/:id', 'ClientController.update')
  Route.delete('/clients/:id', 'ClientController.delete')

  // Rotas de Produtos
  Route.get('/products', 'ProductController.index')
  Route.get('/products/:id', 'ProductController.show')
  Route.post('/products', 'ProductController.store')
  Route.put('/products/:id', 'ProductController.update')
  Route.delete('/products/:id', 'ProductController.delete')

  // Rotas de Vendas
  Route.post('/sales', 'SaleController.store')
}).middleware(['auth']) // Aplica o middleware 'auth' a todas as rotas dentro do grupo
