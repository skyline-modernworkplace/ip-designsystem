let package = require("./package.json");
const webpack = require("webpack");

("use strict");

// check if gulp dist was called
if (process.argv.indexOf("dist") !== -1) {
  // add ship options to command call
  process.argv.push("--ship");
}

const path = require("path");
const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");
const gulpSequence = require("gulp-sequence");

build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`
);

// Create clean distrubution package
gulp.task("dist", gulpSequence("clean", "bundle", "package-solution"));
// Create clean development package
gulp.task("dev", gulpSequence("clean", "bundle", "package-solution"));

/**
 * Webpack Bundle Anlayzer
 * Reference and gulp task
 */
const bundleAnalyzer = require("webpack-bundle-analyzer");

const getAcronym = (str) => str.match(/\b(\w)/g).join("");

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    const lastDirName = path.basename(__dirname);
    const dropPath = path.join(__dirname, "temp", "stats");
    generatedConfiguration.resolve.alias = {
      "ui-toolkit": path.resolve(__dirname, "./lib/ui-toolkit/"),
    };

    generatedConfiguration.plugins.push(
      new webpack.DefinePlugin({
        SC_PREFIX: JSON.stringify(getAcronym(package.name).toLowerCase()),
      })
    );
    generatedConfiguration.node = { fs: "empty" };
    generatedConfiguration.plugins.push(
      new bundleAnalyzer.BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: "static",
        reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
        generateStatsFile: true,
        statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
        logLevel: "error",
      })
    );

    return generatedConfiguration;
  },
});

/**
 * Custom Framework Specific gulp tasks
 */

build.initialize(gulp);
