/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
}

// module.exports = nextConfig
module.exports = {
    nextConfig,
    images: {
        domains: ['ibb.co', 'i.ibb.co', 'example.com', 'another-domain.com'], // Add other allowed domains if needed
    },

};
