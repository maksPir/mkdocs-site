import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash:8].js',
            publicPath: '',
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolves(options),
        plugins: buildPlugins(options),
    };
}
