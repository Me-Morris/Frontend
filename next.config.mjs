/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login.html',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
