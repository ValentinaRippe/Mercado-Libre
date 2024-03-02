/* eslint-disable no-undef */
module.exports = {
    //TODO: jsdom 
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],

    // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mocks/fileMock.js',
        '\\.(css|less|scss)$': '<rootDir>/test/mocks/styleMock.js',
    },
}