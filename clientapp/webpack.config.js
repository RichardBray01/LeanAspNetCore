const path = require('path');

module.exports = (env = {}, argv = {}) => {

    const config = {
        mode: argv.mode || 'development', // we default to development when no 'mode' arg is passed
        entry: {
            main: './js/main.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../wwwroot/dist'),
            publicPath: "/dist/"
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options:
                            {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                }
            ]
        }
    }

    return config;
};
