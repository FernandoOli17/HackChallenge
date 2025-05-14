/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = {
  // Garanta que o diretório raiz está correto
  basePath: '', // Opcional (para projetos em subdiretórios)
}


export default nextConfig
