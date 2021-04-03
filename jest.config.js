module.exports = {
  setupFiles: [
    './jest.setup.js',
  ],
  verbose: true,
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.test).js?(x)'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|scss|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>app/__mocks__/styleMock.js',
  },
  coveragePathIgnorePatterns: [
    '.*\/tests\/.*',
    '.*\/mocks\/.*',
    '.*\/keys\/.*',
    '.*\/config\/.*',
    '.*\/build\/.*',
    '.*\/productInfo.scss\/.*',
  ],
  collectCoverageFrom: [
    'app/**/*.js',
  ]
};
