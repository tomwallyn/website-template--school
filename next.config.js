/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['flowbite.s3.amazonaws.com'], // Ajoutez le domaine de votre image ici
  },
}

module.exports = nextConfig
