/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper,
  modulePaths: ["<rootDir>/src"],
};
