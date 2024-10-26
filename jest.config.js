module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html)$': 'babel-jest', // Handle TypeScript, JavaScript, and HTML
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-test|@angular|rxjs)/)', // Don't ignore Angular modules
  ],
  moduleFileExtensions: ['ts', 'js', 'html', 'mjs'], // Add mjs for ESM support
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock out CSS modules
  },
  testEnvironment: 'jsdom', // Use jsdom for DOM-related tests
};
