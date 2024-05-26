// next.config.js

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent-jnb2-1.xx.fbcdn.net',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };
  