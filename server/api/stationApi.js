var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

//查找站点接口
router.post('/selectStation', (req,res) => {
  var sql_name = $sql.station.station_first;
  var sql_password = $sql.station.station_last;
  var params = req.body;
  conn.query(sql_name,params.origin,function(err, result) {
    if(err) {
      console.log(err)
    }
    if(result[0]===undefined) {
      res.send('-1')
    }else {
      conn.query(sql_password,params.terminus, function(err, result) {
        if(err) {
          console.log(err)
        }
        if(result[0]===undefined) {
          res.send('0')
        }else {
          jsonWrite(res, result);
        }
      })
    }
  })
});


router.post('/queryRoute', (req, res) => {//直达线路
  var sql = $sql.station.nonstop;
  var params = req.body;
  console.log(params);
  //var result1='';
  conn.query(sql, [params.origin, params.terminus], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      if (result.length==0) {
        res.send('1')
      }else {
        console.log(result);
        jsonWrite(res, result);
        //result1=JSON.stringify(result);
        res.end(result);
      }
    }
  })
});

router.post('/queryOneTransfer', (req, res) => {//一次换乘
  var sql = $sql.station.one_transfer;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.origin, params.terminus], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      if (result.length==0){
        res.send('-1')
      } else {
        console.log(result);
        jsonWrite(res, result);
        res.end(result);
      }
    }
  })
});

router.post('/queryTwoTransfers', (req, res) => {//二次换乘
  var sql = $sql.station.one_transfer;
  var sql1 = $sql.station.two_transfers;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.origin, params.terminus], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log("数据是"+result);
      console.log("长度是"+result.length);
      if (result.length!=0){
        console.log("返回数据0");
          res.send('0');

      } else {
        conn.query(sql1, [params.origin,params.origin, params.terminus], function(err, result) {
          if (err) {
            console.log(err);
          }
          if (result) {
            if (result.length > 7) {
              console.log("返回数据1");
              res.send('1')
            } else {
              console.log(result);
              console.log(result.length);
              if (result.length==0) {
                console.log("返回数据2");
                res.send('2')
              }else {
                jsonWrite(res, result);
                res.end(result);
              }
            }
          }
        })
      }
    }
  })
});

router.post('/totalDistance', (req, res) => {//某线路上两站点之间的总距离
  var sql = $sql.station.totaldistance;
  var sql1=$sql.station.select_seq;
  var params = req.body;
  console.log(params);
  conn.query(sql1, [params.line_name,params.origin], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      var key='seq';
      var a=result[0][key];
      conn.query(sql1, [params.line_name,params.terminus], function(err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          var key = 'seq';
          var b = result[0][key];
          if (a<b){//判断一条线上站点的顺序
            conn.query(sql, [params.line_name,params.line_name,params.origin, params.line_name,params.terminus], function(err, result) {
              if (err) {
                console.log(err);
              }
              if (result) {
                if (result.length==0) {
                  res.send('1')
                }else {
                  console.log(result);
                  jsonWrite(res, result);
                  res.end(result);
                }
              }
            })
          } else{
            conn.query(sql, [params.line_name,params.line_name,params.terminus, params.line_name,params.origin], function(err, result) {
              if (err) {
                console.log(err);
              }
              if (result) {
                if (result.length==0) {
                  res.send('1')
                }else {
                  console.log(result);
                  jsonWrite(res, result);
                  res.end(result);
                }
              }
            })
          }
        }
      })
    }
  })


});

module.exports = router;
