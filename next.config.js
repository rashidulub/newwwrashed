// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         serverActions: true
//     }
// }
// module.exports = nextConfig;

// module.exports = {
//     nextConfig,
//     images: {
//         domains: ['ibb.co', 'i.ibb.co', 'example.com', 'another-domain.com', 'lh3.googleusercontent.com'], // Add other allowed domains if needed
//     },

// };


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
}

module.exports = {
    ...nextConfig,
    images: {
        domains: ['ibb.co', 'i.ibb.co', 'example.com', 'another-domain.com', 'lh3.googleusercontent.com'], // Add other allowed domains if needed
    },
};
