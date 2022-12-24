const Prometheus = require("prom-client")

const metricsInterval = Prometheus.collectDefaultMetrics()
const counter = new Prometheus.Counter({
    name: 'request_operation_total',
    help: 'Total number of requests',
    labelNames: ['request_method']
})

const httpRequestDurationMicrosSeconds = new Prometheus.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [1, 2, 5, 6, 10] // buckets for response time from 1ms to 10ms
})


module.exports = {
    httpRequestDurationMicrosSeconds,
    counter,
    metricsInterval
}