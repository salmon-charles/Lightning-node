const resolve = require('./rollup.plugin.resolver');

export default {
    input: './src/lightning.mjs',
    plugins: [resolve("node")],
    output: {
        file: './dist/lightning-node.js',
        format: 'cjs',
        name: 'lng'
    }
};