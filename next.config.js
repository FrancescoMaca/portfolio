/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: '/',
                destination: '/home-page.tsx',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
