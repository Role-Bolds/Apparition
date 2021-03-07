module.exports = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/AChmBdp',
                permanent: true,
            }
        ]
    }
}