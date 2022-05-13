const path = require("path");
// const webpack = require("webpack");
// const cracoAlias = require("craco-alias");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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
  // {
  //   plugin: cracoAlias,
  //   options: {
  //     baseUrl: "./src",
  //     source: "tsconfig",
  //     tsConfigPath: "./tsconfig.path.json",
  //   },
  // },
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

      if (env === "production") {
        webpackConfig.optimization = {
          splitChunks: {
            chunks: "all",
            minSize: 1000000,
            maxSize: 5000000,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                name(module) {
                  // get the name. E.g. node_modules/packageName/not/this/part.js
                  // or node_modules/packageName
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  // npm package names are URL-safe, but some servers don't like @ symbols
                  return `npm.${packageName.replace("@", "")}`;
                },
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
        };
      }
      return {
        ...webpackConfig,
        plugins: [
          ...webpackConfig.plugins,
          // new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
        ],
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve.fallback,
            buffer: require.resolve("buffer/"),
            crypto: require.resolve("crypto-browserify"),
          },
        },
      };
    },
  },
};
