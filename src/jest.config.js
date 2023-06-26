module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]sx?$': 'esbuild-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/test/tsconfig.json',
            transformIgnorePatterns: ["node_modules/(?!axios)"],
        },
    },
    transformIgnorePatterns: [
        "node_modules/(?!troublesome-dependency/.*)",
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/src/setupTests.ts"
    ],
}

