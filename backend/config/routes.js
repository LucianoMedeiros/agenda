const express = require('express')

module.exports = (server) => {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const agendaService = require('../api/agenda/agendaService')
    agendaService.register(router, '/contacts')
}