const path = require("path");

module.exports = ({ config }) => {
  // a bunch of other rules here

  config.resolve.modules = [
    path.resolve(__dirname, "..", "..", "swapper-elements", "src"),
    path.resolve(__dirname, "..", "..", "swapper-components", "src"),
    path.resolve(__dirname, "..", "..", "swapper-config", "src"),
    "node_modules",
  ];

  config.resolve.alias = {
    "@swapper-org/swapper-config": path.resolve(
      __dirname,
      "..",
      "..",
      "swapper-config",
      "src"
    ),
  };

  /*
  // Alternately, for an alias:
  config.resolve.alias: {
    "@styles": path.resolve(__dirname, "..", "src", "styles")
  }
   */

  return config;
};
