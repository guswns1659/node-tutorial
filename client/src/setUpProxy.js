const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // CORS test using proxy
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};