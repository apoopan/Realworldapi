const { Router } = require('express')

const route = Router()
 
route.get('/', (req, res) => {
    //TO: Send current user 
    if (req.user) {
        res.send(req.user)
      }
})

module.exports = route


