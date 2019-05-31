module.exports = {
  setupFiles: ["<rootDir>/src/__tests__/setup/setupEnzyme.js"],
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/setup/"],
  testEnvironment: "node",
  testURL: "http://localhost",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/__tests__/**",
    "!src/index.js"
  ],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.scss$": "<rootDir>/src/__tests__/setup/cssTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  verbose: true
};
