const path = require('path');


module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        './utils/testSetup.js',
    ],
    moduleNameMapper: {
        '^.+\\.css$': path.resolve(__dirname, '__mocks__/stylesMock.js'),
    },
    testMatch: [
        path.resolve(__dirname, "test/**/*.spec.ts?(x)"),
    ],
};
