/* eslint-disable global-require */
//get the variables path from dotenv
const variables = require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
  }).parsed;
  //main webpack module
  const webpack = require("webpack");
  //webpack plugin that simplifies the process of creating an html file
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  // enabling React Fast Refresh in developmen
  const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
  //extracts CSS into separate files
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  //clean / remove your build folder and unused webpack assets after every successful rebuild
  const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

  const path = require("path");

  const envKeys = Object.keys(variables).reduce(
    (prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(variables[next]);
      return prev;
    },
    {
      APPLICATION_NAME: process.env.APPLICATION_NAME,
      HOST_URL: process.env.HOST_URL,
      HOST_PORT: process.env.HOST_PORT,
    }
  );
  const localDeps = require("./package.json").dependencies;
  
  const isDevelopment = process.env.NODE_ENV !== "production";
  const isProduction = process.env.NODE_ENV === "production";
  
  const configScript = isDevelopment ? "app-config.dev.js" : "app-config.js";
  
  module.exports = {
    entry: { index: "./src/index" },
    mode: isDevelopment ? "development" : "production",
    bail: isProduction,
    devtool: isDevelopment ? "cheap-module-source-map" : false,
    optimization: {
      usedExports: isDevelopment,
      chunkIds: "named",
      minimize: isProduction,
    },
    watchOptions: {
      ignored: ["**/.git/**", "**/node_modules/**", "**/dist/**"],
    },
    devServer: {
      historyApiFallback: true,
      port: process.env.HOST_PORT,
      hot: true,
      liveReload: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
      client: {
        overlay: { warnings: false, errors: true },
      },
    },
    output: {
      path: path.resolve(process.cwd(), "dist"),
      filename: "static/js/[name].[contenthash:8].js",
      assetModuleFilename: "static/asset/[name].[contenthash:8][ext][query]",
      publicPath: process.env.HOST_URL,
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        forOf: false,
        dynamicImport: false,
        module: false,
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      fallback: {
        fs: false,
        path: false,
        util: false,
        crypto: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
            plugins: [
              "@babel/plugin-transform-runtime",
              // isDevelopment && require.resolve("react-refresh/babel"),
              [
                "babel-plugin-styled-components",
                {
                  namespace: process.env.NAME_APPLICATION,
                  displayName: true,
                  fileName: false,
                },
              ],
            ].filter(Boolean),
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/i,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new MiniCssExtractPlugin(),
          new ModuleFederationPlugin({
            name: process.env.APPLICATION_NAME,
            filename: "remoteEntry.js",
            shared: [
              {
                ...localDeps,
                react: {
                  singleton: true,
                  requiredVersion: localDeps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: localDeps["react-dom"],
                },
                "react-router-dom": {
                  singleton: true,
                },
                "styled-components": {
                    singleton: true,
                    requiredVersion: localDeps["styled-components"],
                  },
              },
            ],
          }),
          new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/craft.png",
            configScript: `<script src="/${configScript}"></script>`,
          }),
          isDevelopment &&
          new ReactRefreshWebpackPlugin({
            exclude: [/node_modules/, /bootstrap\.tsx$/],
          }),
      ].filter(Boolean),  };
  