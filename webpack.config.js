const path = require('path');

module.exports = {
    entry: {
        WebnovelCom_Crawler: './src/WebnovelCom_Crawler.js',
        WebnovelCom_GetText: './src/WebnovelCom_GetText.js',
        WebnovelCom_Replace: './src/WebnovelCom_Replace.js',
        WebnovelCom_Tag: './src/WebnovelCom_Tag.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.user.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: false
    }
};