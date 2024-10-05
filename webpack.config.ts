import path from 'node:path';
import {
    BuildOptions,
    EnvOptions,
    TypeMode,
    TypePaths
} from './app/config/build/types';
import { buildWebpackConfig } from './app/config/build/buildWebpackConfig';

export default (env: EnvOptions) => {
    const mode: TypeMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const paths: TypePaths = {
        entry: path.resolve(__dirname, 'app', 'src', 'index.tsx'),
        build: path.resolve(__dirname,'app', 'dist'),
        html: path.resolve(__dirname,'app',  'public', 'main.html'),
        src: path.resolve(__dirname,'app', 'src')
    };

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT
    };

    const config = buildWebpackConfig(options);

    return config;
};
