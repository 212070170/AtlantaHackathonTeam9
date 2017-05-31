var path = require('path');
var webpack = require('webpack');
var ZipPlugin = require('zip-webpack-plugin');
module.exports = {
    context: __dirname + "/",
    entry: './public/scripts/bootstrapper',
    output: {
        path:'./public/dist',
        publicPath: "/dist/",
        filename:'prod-ready-app.js'
    },
    module:{
        loaders:[

            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: "file-loader"
            }

        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, '/public')],
        descriptionFiles: ['package.json'],
        extensions : ['', '.js', '.ts']
    },
//    plugins: [
//        new webpack.optimize.UglifyJsPlugin({
//            compress: { warnings: false }
//        })
//    ]
    plugins:[
        new ZipPlugin({
            path:'zip',
            filename:'dist.zip',
            exclude: [/node_modules$/],
            // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
            fileOptions: {
                mtime: new Date(),
                mode: 0o100664,
                compress: true,
                forceZip64Format: false
            },

            // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
            zipOptions: {
                forceZip64Format: false
            }

        })
    ]
}