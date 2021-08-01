import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { WebpackOptionsNormalized } from "webpack";

const isProduction = process.env.NODE_ENV == "production";

const config: WebpackOptionsNormalized = {
  entry: {
    main: {
      import: ["./src/index.tsx"],
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    defaultRules: ["..."],
    generator: {},
    parser: {},
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  cache: { type: "memory" },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    port: 3000,
  },
  node: {},
  infrastructureLogging: {},
  optimization: {},
  resolveLoader: {},
  snapshot: {},
  stats: {},
  watchOptions: {},
  experiments: {},
  externals: {},
  externalsPresets: {},
};

if (isProduction) {
  config.mode = "production";
  config.output.clean = true;
  config.devtool = false;
} else {
  config.mode = "development";
  config.devtool = "eval-source-map";
}

export default config;
