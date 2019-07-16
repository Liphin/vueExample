/**
 * Created by Administrator on 2019/5/27.
 */

const uuidv1 = require('uuid/v1');
const express = require('express');
const mongo = require('../db/mongo');
const serverData = require('../serverSerData');
const router = express.Router();
const userDom = "user";//mongodb中的sheet文档库


/**
 * 登录操作
 */
router.post('/loginOpt', function (req, res, next) {
    let param = req.body;
    console.log(param);
    res.send({
        status: 200,
    })
});

/**
 * 注册操作
 */
router.post('/register', function (req, res, next) {
    let param = req.body;
    //查看该账号是否已经被注册过了
    mongo.findDocuments(userDom, {account: param.account}, response => {
        if (response.length > 0) {
            //该账号已被注册，返回401
            res.send({
                status: 403
            });
        }
        else {
            //该账号尚未被注册过，进行注册该账号
            param.right = 1; //设置用户权限，默认普通用户为1
            mongo.insertOneDocuments(userDom, param, response => {
                //插入数据成功
                if (response.result.ok == 1) {
                    res.send({
                        status: 200,
                        data: response.ops[0],
                    });
                }
                //插入数据失败
                else {
                    res.send({
                        status: 404,
                    });
                }
            })
        }
    });
});


module.exports = router;
