const path = require("path");
// const webpack = require("webpack");
// const cracoAlias = require("craco-alias");

/**
 * ALlows us to edit create-react-app configuration
 * without ejecting.
 *
 *
 */
const { getLoader, loaderByName } = require("@craco/craco");
// Replace `components` with your folder's structure.
// Again, Here I'm showcasing my current project.
const absolutePath = path.join(__dirname, "../../packages");

module.exports = {
  // plugins: [
  //   {
  //     plugin: cracoAlias,
  //     options: {
  //       baseUrl: "./src",
  //       source: "tsconfig",
  //       tsConfigPath: "./tsconfig.path.json",
  //     },
  //   },
  // ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // https://medium.com/frontend-digest/using-create-react-app-in-a-monorepo-a4e6f25be7aa
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        // match.loader.include = include.concat(absolutePath, schonComponents);
        match.loader.include = include.concat(absolutePath);
      }
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve.fallback,
            buffer: require.resolve("buffer/"),
            crypto: require.resolve("crypto-browserify"),
          },
        },
        /**
         * Optionally, other webpack configuration details.
         */
        // optimization: {
        //   splitChunks: {
        //   },
        // },
      };
    },
  },
};
