const Prometheus = require("prom-client")

const metricsInterval = Prometheus.collectDefaultMetrics()

const counter = new Prometheus.Counter({
    name: 'node_request_operations_total',
    help: 'The total number of processed requests'
})

const httpRequestDurationMicrosSeconds = new Prometheus.Histogram({
    name: 'node_request_duration_seconds',
    help: 'Histogram for the duration in seconds.',
    labelNames: ['method', 'route', 'code'],
    buckets: [1, 2, 5, 6, 10] // buckets for response time from 1ms to 10ms
})


module.exports = {
    httpRequestDurationMicrosSeconds,
    counter,
    metricsInterval
}