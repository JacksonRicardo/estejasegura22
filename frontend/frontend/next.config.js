module.exports = {
    async headers() {
        return [
            {
                // matching all API routes
                source: '/path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Credentials', value: '*' },
                    { key: 'Access-Control-Allow-Credentials', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    { key: 'Access-Control-Allow-Credentials', value: 'X-CSRF-Token, X-Requested-With' },
                ]
            }
        ]
    }
}