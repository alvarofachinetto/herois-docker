const proxy = [
    {
        context: ['/api'],
        target: 'http://localhost:9000/',
        secure: false,
        pathRewrite: {
            '^/api' : ''
        }
    }
];

module.exports = proxy;