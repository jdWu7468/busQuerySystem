// SQL语句映射文件，以供api逻辑调用
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(user_id, password) values (?, ?)',
        select_name: 'select * from user where user_id = ?',
        select_password : 'select * from user where password = ?',
    },
  //站点
    station:{
        station_first: 'select * from stop where stop_name= ?',
        station_last: 'select * from stop where stop_name= ?',
        select_seq:'select seq from linestops where line_id=(select line_id from line where line_name= ?) and stop_id =(select stop_id from stop where stop_name= ?)',
        nonstop: 'select * from (select line_name from line where line_id in(select line_id from linestops where stop_id = (select stop_id from stop where stop_name= ?))) A,(select line_name from line where line_id in(select line_id from linestops where stop_id = (select stop_id from stop where stop_name= ?))) B where A.line_name = B.line_name',
        one_transfer:'select * from (select stop_name from stop where stop_id in(select distinct stop_id from linestops where line_id in (select line_id from linestops where stop_id =(select stop_id from stop where stop_name= ?))))A,(select stop_name from stop where stop_id in(select distinct stop_id from linestops where line_id in (select line_id from linestops where stop_id =(select stop_id from stop where stop_name= ?))))B where A.stop_name= B.stop_name ',
        two_transfers:'select * from (select stop_name from stop where stop_id in(select distinct stop_id from linestops where line_id in (select line_id from linestops where stop_id = (select stop_id from stop where stop_name=?))))A,(select stop_name from stop where stop_id in(select stop_id from linestops where line_id in (select D.line_id from (select distinct line_id from linestops where stop_id in (select distinct stop_id from linestops where line_id in (select line_id from linestops where stop_id = (select stop_id from stop where stop_name=?)))) C,(select distinct line_id from linestops where stop_id in (select distinct stop_id from linestops where line_id in (select line_id from linestops where stop_id = (select stop_id from stop where stop_name=?)))) D where C.line_id = D.line_id))) B where A.stop_name = B.stop_name',
        totaldistance:'select sum(km) from linestops where line_id=(select line_id from line where line_name= ?) and seq between (select seq from linestops where line_id=(select line_id from line where line_name= ?) and  stop_id =(select stop_id from stop where stop_name= ?)) and ((select seq from linestops where line_id=(select line_id from line where line_name= ?) and stop_id =(select stop_id from stop where stop_name= ?))-1)',
        totaltime:'select sum(min) from linestops where line_id= ? and seq between (select seq from linestops where line_id=1 and  stop_id =(select stop_id from stop where stop_name= ?)) and ((select seq from linestops where line_id= ? and stop_id =(select stop_id from stop where stop_name= ?))-1);',
    }
}

module.exports = sqlMap;
