import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    WebpackPluginInstance,
    ProgressPlugin,
    DefinePlugin,
} from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
    paths,
    isDev
}: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'main.html'
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash:8].css',
            chunkFilename: './css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ];

    return plugins;
}
