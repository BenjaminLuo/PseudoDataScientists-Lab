module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    testMatch: ['**/components/*.cy.js?(x)'],
    testEnvironment: 'jest-environment-jsdom',
};
