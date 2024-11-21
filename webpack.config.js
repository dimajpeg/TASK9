const path = require('path');

module.exports = {
    entry: './public/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Обрабатываем все .js файлы
                exclude: /node_modules/,  // Исключаем папку node_modules
                use: {
                    loader: 'babel-loader',  // Используем babel-loader
                    options: {
                        presets: ['@babel/preset-env']  // Настройка для трансформации кода
                    }
                }
            }
        ]
    },
    mode: 'development'  // Устанавливаем режим разработки
};
