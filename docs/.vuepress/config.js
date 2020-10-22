const path = require('path');

module.exports = {
    title: 'xzl田园',
    description: '一分耕耘，一分收获。',
    head: [
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' }]
    ],
    // 配置文件
    configureWebpack: {
        resolve: {
            alias: {
              'styles': './styles'
            }
        }
    }
}
