module.exports = {
    configureWebpack: () => {
        return {
            module: {
                rules: [
                    {
                        test: /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/,
                        use: [
                            {
                                loader: "image-webpack-loader",
                                options: {
                                    mozjpeg: {
                                        progressive: true,
                                        quality: 65
                                    },
                                    optipng: {
                                        enabled: true
                                    },
                                    pngquant: {
                                        quality: "25-50",
                                        speed: 4
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}