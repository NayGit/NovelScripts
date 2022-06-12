const path = require('path');

module.exports = (env) => {
    return {
        entry: {
            WebnovelCom_Crawler: './src/WebnovelCom_Crawler.js',
            WebnovelCom_Tag: './src/WebnovelCom_Tag.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: env.test ? 'Test.[name].bundle.user.js' : '[name].bundle.user.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src/'),
                Domain: path.resolve(__dirname, 'src/js/Domain/'),

                Crawler: path.resolve(__dirname, 'src/js/Crawler/'),
                CrawlerClass: path.resolve(__dirname, 'src/js/Crawler/class/'),
                CrawlerHtml: path.resolve(__dirname, 'src/js/Crawler/html/'),
                CrawlerVariable: path.resolve(__dirname, 'src/js/Crawler/variable/'),

                Tag: path.resolve(__dirname, 'src/js/Tag/'),
            }
        },
        optimization: {
            minimize: false
        },
        performance: {
            maxEntrypointSize: 1512000,
            maxAssetSize: 1512000
        }
    };
};