// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const NODE_ENV = process.env.NODE_ENV || 'development';
const outFilename = `index.${NODE_ENV}.js`;

console.log(`Building ${NODE_ENV}...`);

const config = {
  entry: "./src/index.js",
  output: {
    library: 'HCReactCashmere',
    libraryTarget: "umd",
    filename: outFilename,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  externals: [
    {
      // Don't bundle react or react-dom
      "react": {
          commonjs: "react",
          commonjs2: "react",
          amd: "React",
          root: "React"
      },
      "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "ReactDOM",
          root: "ReactDOM"
      },
      "react-router-dom": {
          commonjs: "react-router-dom",
          commonjs2: "react-router-dom",
          amd: "ReactRouterDOM",
          root: "ReactRouterDOM"
      },
      "@emotion": {
        root: "@emotion"
      },
      "@mui": {
        root: "@mui"
      },
      "font-awesome": {
        root: "font-awesome"
      },
      "notosans-fontface": {
        root: "notosans-fontface"
      },
      "@healthcatalyst": {
        root: "@healthcatalyst"
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: ["/node_modules/", "/public/", "/src/stories"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler, {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
              },
            },
          }, 
          { 
            loader: "sass-loader", 
            options: { 
              implementation: require("sass")
            } 
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
        generator: {
          filename: './fonts/[name][ext]',
        }
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
