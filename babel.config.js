module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript', // Ensure you have this preset if using TypeScript
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-transform-runtime', // Optional, if needed
  ],
};
