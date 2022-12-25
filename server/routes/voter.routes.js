const Prometheus = require('prom-client');
const express = require('express');
const { counter, httpRequestDurationMicrosSeconds} = require('../middleware/grafana.middleware');

const router = express.Router()
let register = new Prometheus.Registry();

register.registerMetric(counter)
register.setDefaultLabels({
    app: 'nodejs-application'
})

router.get('/', (req, res, next) => {
    
    let start = new Date()
    let simulateTime = 1000
    
    setTimeout(function(arguments) {
        let end = new Date() - start
        httpRequestDurationMicrosSeconds.observe(end / 1000)
    }, simulateTime)
    
    counter.inc()
    res.send('server running...')

})


router.get('/metrics', async(req, res) => {
    res.set('Content-type', register.contentType);
    res.end(await register.metrics());
})

module.exports = router;


