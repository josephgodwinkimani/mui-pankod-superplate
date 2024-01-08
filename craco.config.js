const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.entry = './src/index.js'
            return webpackConfig
        },
        plugins: {
            add: [new CleanWebpackPlugin()],
        },
    },
    devServer: {
        client: {
            overlay: false, // disable full screen overlay

            // You can configure more specifically:
            // overlay: {
            //  errors: true,
            //  warnings: false,
            //  runtimeErrors: true,
            //}
        },
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}
