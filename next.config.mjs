/** @type {import('next').NextConfig} */

const nextConfig = {
images:{
remotePatterns: [
    {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "img.onmanorama.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "img.taste.com.au",
      },
      {
        protocol: "https",
        hostname: "hamariweb.com",
      },
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
      },
      {
        protocol: "https",
        hostname: "www.cookforindia.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "content.jwplatform.com",
      },
      {
        protocol: "https",
        hostname: "tawaqqo.com",
      },
      {
        protocol: "https",
        hostname: "www.brandsynario.com",
      },
],
},
};
export default nextConfig;
