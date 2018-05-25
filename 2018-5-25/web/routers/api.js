/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let User = require('../models/user');
let Weibo = require('../models/weibo');
let multiparty = require('multiparty');
let fs = require('fs');
let resData;

router.use(function (req, res, next) {
  resData = {
    code: 0,
    msg: ''
  };
  next();
});

router.post('/user/login', (req, res, next) => {
 
  let username = req.body.username;
  let password = req.body.password;
  console.log(username)
  if (username == '' || password == '') {
    resData.code = -1;
    resData.msg = '用户名或密码不能为空';
    res.json(resData);
    return;
  }
  User.findOne({
    username: username,
    password: password
  }).then((userInfo) => {
    if (!userInfo) {
      resData.code = -3;
      resData.msg = '用户不存在或密码错误'
      res.json(resData);
      return;
    }
    resData.msg = '登录成功';
    resData.userInfo = {
      _id: userInfo._id,
      username: userInfo.username
    };
    res.json(resData);
  })
});

router.post('/user/register', (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;

  if (username == '') {
    resData.code = -1;
    resData.msg = '用户名不能为空';
    res.json(resData);
    return;
  }
  if (password == '') {
    resData.code = -2;
    resData.msg = '密码不能为空';
    res.json(resData);
    return;
  }
  // let user = new User({
  //   username: username,
  //   password: password
  // });
// user.save().then(function (newUserInfo) {

  console.log(username,'这个就是前端传的name')
  User.findOne({
    username: username
  }).then(function(newUserInfo){
    console.log(newUserInfo+'OK');
    if(!newUserInfo){
      let user = new User({
        username: username,
        password: password
      });
      user.save().then(()=>{
        resData.code = 0;
        resData.msg = '注册成功！';
        console.log(resData);
        res.json(resData);
      });
    }else{
        resData.code = 1;
        resData.msg = '用户名已占用!';
        res.json(resData);
    }
  });
});

router.post('/upload', (req, res, next) => {
  //生成对象，配置上传目标路径
  let form = new multiparty.Form({
    uploadDir: './public/files/',
    encoding: 'utf-8'
  });
  form.parse(req, function (err, fields, files) {
    fs.rename(files.file[0].path, './public/files/' + files.file[0].originalFilename, function (err) {
      if (err) {
       console.log('重命名失败');
      } else {
        resData.code = 0;
        resData.msg = '上传成功！';
        res.json(resData);
      }
    })
  });
});

//weibo
router.get('/weibo', (req, res, next) => {
  let act = req.query.act;
  let id,content;
  const PAGE_SIZE = 6;

  switch(act) {
    case 'add':
      content = req.query.content;
      if (!content) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        let time = +new Date();
        content = content.replace('\n','');
        let weibo = new Weibo({
          content: content,
          time: time,
          like: 0,
          dislike: 0
        });
        weibo.save((err, newWeiboInfo) => {
          resData.code = 0;
          resData.msg = '提交成功！';
          resData.id = newWeiboInfo._id;
          resData.time = newWeiboInfo.time;
          res.json(resData);
        });
      }
      break;
    case 'get_page_count':
      Weibo.count({}, (err, n) => {
        resData.code = 0;
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        res.json(resData);
      });
      break;
    case 'get':
      let page = Number(req.query.page);
      if (!page) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        Weibo
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
              id: o._id,
              content: o.content,
              time: o.time,
              like: o.like,
              dislike: o.dislike
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      }
      break;
    case 'like':
      id = req.query.id;
      Weibo.findOne({_id: id}, (err, data) => {
        if(err) console.log(err);
        data.like = data.like + 1;
        data.save((err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '点赞成功';
            res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '点赞失败';
            res.json(resData);
          }
        });
      });
      break;
    case 'dislike':
      id = req.query.id;
      Weibo.findOne({_id: id}, (err, data) => {
        if(err) console.log(err);
        data.dislike = data.dislike + 1;
        data.save((err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '踩成功';
            res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '踩失败';
            res.json(resData);
          }
        });
      });
      break;
    case 'del':
      id = req.query.id;
      Weibo.remove({_id: id}, (err) => {
        if (!err) {
          resData.code = 0;
          resData.msg = '删除成功';
          res.json(resData);
        } else {
          resData.code = -1;
          resData.msg = '删除失败';
          res.json(resData);
        }
      });
      break;
    default:
      resData.code = -1;
      resData.msg = '参数错误';
      res.json(resData);
  }

});

module.exports = router;