/**
 * Created by Administrator on 2018/11/3.
 */
let settingData = {
    basePath: "G:/SoftwareOutSourcing/HSBC/问卷/project", //基础路径
    domainName: "http://questionnaire.hsbc.liphin.com", //域名设置
    isProd: false, //是否为生产环境
    frontPort: 3301, //前端port
};
//其他配置
settingData['projectPath'] = settingData['basePath'] + "/front/public";
settingData['resourcePath'] = settingData['basePath'] + "/resource";

//http和https服务开启
let certConfig = {
    key: 'G:/SoftwareOutSourcing/HSBC/问卷/project/cert/Apache/3_questionnaire.hsbc.liphin.com.key',
    cert: 'G:/SoftwareOutSourcing/HSBC/问卷/project/cert/Apache/2_questionnaire.hsbc.liphin.com.crt',
};


//小程序应用配置
let appConfig = {
    appid: 'wx6da8ac15c2cf2279',
    secret: '49d4f13b66eca5a8a7360168a7b1ac8c',
};

//允许的origin
let allowedOrigin = [
    'http://127.0.0.1:3301'
];

module.exports = {
    settingData: settingData,
    appConfig: appConfig,
    certConfig: certConfig,
    allowedOrigin: allowedOrigin,
};
