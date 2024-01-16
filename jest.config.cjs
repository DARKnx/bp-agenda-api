module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    roots: ['<rootDir>/src', '<rootDir>/src/tests'],
  };
  