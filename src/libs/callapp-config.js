export default {
    protocol: 'rmrbapp',
    intent: {
        package: 'com.peopledailychina.activity',
        scheme: 'rmrbapp'
    },
    timeout: 5000,
    appstore: 'https://itunes.apple.com/cn/app/id625077646?mt=8',
    yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.peopledailychina.activity',
    fallback: 'https://wap.peopleapp.com',
    logFunc: function () {
        console.log('logFunc')
    }
}