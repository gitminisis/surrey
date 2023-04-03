const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
    entry: ["babel-polyfill", "./src/index"],
    plugins: [new BundleAnalyzerPlugin()],
    watch: true,
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"],
                },
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: "images/[hash]-[name].[ext]",
                    },
                }, ],
            },
        ],
    },
};