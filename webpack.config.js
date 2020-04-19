const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
        main2: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 정규식
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './dist',
                    name: '[name].[ext]?[hash]', //파일로더가 파일 output에 복사할때 (파일 이름.확장자? 캐시 무력화를 위한 매번 달라지는 해쉬값'
                    limit:20000, //2kb // 2키로 미만은 Base64로 인코딩 되어서 자바스크립트 스트링으로 변환(main.js안에) 2kb보다 큰 파일은 복사된다.(file-loader)가 실행
                }
            }
        ]
    }
};

