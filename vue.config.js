const url = "http://api.zhuishushenqi.com/cats/lv2/statistics"

module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                "/api": {
                    target:"https://api.zhuishushenqi.com",
                    pathRewrite: {"^/api": ""},
                    changeOrigin: true
                },
                "/a": {
                    target:"http://chapterup.zhuishushenqi.com/chapter",
                    pathRewrite: {"^/a": ""},
                    changeOrigin: true
                }
            }
        }
    }
}
