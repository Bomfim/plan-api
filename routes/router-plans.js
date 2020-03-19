const router = require('../config/server').server;
const service = require('../services/plans');

router.get('/plans', (request, response, next) => {
    service.readPlan().then(data => {
        response.send(200, data);
    }).catch(err => {
        console.log(err);
        response.send(503, err);
    })
    next();
});

router.get('/plans/:id', (request, response, next) => {
    service.readPlan(request.params).then(data => {
        response.send(200, data);
    }).catch(err => {
        console.log(err);
        response.send(503, err);
    })
    next();
});

router.post('/plans', (request, response, next) => {
    service.createPlan(request.body).then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/plans/:id', (request, response, next) => {
    service.updatePlan(request.params, request.body).then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/plans/:id', (request, response, next) => {
    service.deletePlan(request.params).then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

module.exports = router;