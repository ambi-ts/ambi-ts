const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  extensions: [".ts", ".tsx", ".js", ".json"],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  exclude: [
    "./src/**/*.spec.ts",
    "./src/**/*.spec.tsx",
    "node_modules",
    "./lib",
  ],
};
