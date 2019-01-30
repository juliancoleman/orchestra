module.exports = {
  collectCoverageFrom: [
    "lib/**/!(index).{js,ts}",
    "helpers/**/!(index).{js,ts}"
  ],
  coverageDirectory: "coverage",
  testMatch: [
    "<rootDir>/src/lib/**/?(*.)(spec|test).(js|ts)?(x)",
    "<rootDir>/src/helpers/**/?(*.)(spec|test).(js|ts)?(x)",
  ],
  reporters: process.env.CI ? undefined : ["jest-spec-reporter"],
  rootDir: ".",
  moduleFileExtensions: [
    "ts",
    "js",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "node",
};
