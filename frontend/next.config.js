const fileloader = require('file-loader');
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'fileloader',
            options: {
                outputPath: 'images',
            },
        });
        return config;
    }
};