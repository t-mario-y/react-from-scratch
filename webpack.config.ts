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
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  cache: {
    type: "filesystem",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
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
} else {
  config.mode = "development";
}

export default config;
