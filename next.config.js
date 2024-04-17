/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
<<<<<<< HEAD
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
};
=======
    }
>>>>>>> 8752829e19506e8e90069f59f7ec66abb614cef9
