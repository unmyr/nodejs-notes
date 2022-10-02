module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  moduleNameMapper: {
    "^@/components[/]+(.*)$": "<rootDir>/src/components/$1",  //(1)
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  testMatch: ["**/tests/unit/*.spec.js"],
  collectCoverage: true,
};
