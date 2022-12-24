const Prometheus = require('prom-client');
const express = require('express');
const { counter, httpRequestDurationMicrosSeconds, metricsInterval} = require('../middleware/grafana.middleware');

const router = express.Router()
let register = new Prometheus.Registry();

register.registerMetric(counter)
register.setDefaultLabels({
    app: 'networkpoll-api'
})

router.get('/', (req, res, next) => {
    res.send('server running...')
    
    let start = new Date()
    let simulateTime = 1000

    setTimeout((arguments) => {
        let end = new Date() - start
        httpRequestDurationMicrosSeconds.observe(end / 1000)
    }, simulateTime)
    
    counter.inc({
        request_method: Math.random(500)
    })

    next()
})


router.get('/metrics', async(req, res) => {
    res.set('Content-type', register.contentType);
    res.end(await register.metrics());
})

module.exports = router;


