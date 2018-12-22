module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: [
        'js',
        'json'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    collectCoverageFrom: [
        'src/**/*.{js,vue}'
    ],
    coverageReporters: [
        'lcov',
        'text'
    ]

    /*
     * TODO
     *
     * coverageThreshold: {
     *  global: {
     *      branches: 100,
     *      functions: 100,
     *      lines: 100,
     *      statements: 100
     *  }
     * }
     */
};
