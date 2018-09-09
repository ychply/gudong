<?php
 //修改响应头格式为JSON
 header("Content-Type:application/json;charset=utf-8");
 //1:获取用户参数 uname
 @$uname = $_REQUEST["uname"];
 //2:获取用户参数 upwd
 @$upwd = $_REQUEST["upwd"];
 //*3:创建正则表达式验证用户输入 用户名和密码
 $reg = '/^[a-zA-Z0-9_]{3,25}$/';
 //*4:如果验证失败 输出错误消息
 $rs = preg_match($reg,$uname);
 if(!$rs){
   die('{"code":-1,"msg":"用户名格式有误"}');
 }
 $rs = preg_match($reg,$upwd);
 if(!$rs){
   die('{"code":-1,"msg":"密码格式有误"}');
 }
 //5:创建sql语句查询用户名和密码是否匹配
 $sql =  " SELECT count(id) AS c";
 $sql .= " FROM xz_admin";
 $sql .= " WHERE uname='$uname'";
 $sql .= " AND upwd = md5('$upwd')";
 //echo $sql;
 //6:创建数据库连接
 $conn = mysqli_connect("127.0.0.1","root","123","gudong",3306);
 //7:设置编码
 mysqli_query($conn,"SET NAMES UTF8");
 //8:发送sql语句
 $rs = mysqli_query($conn,$sql);
 //9:获取数据库返回结果
 //echo 3;
 if(mysqli_error($conn)){
   echo mysqli_error($conn);
 }
 //10:判断验证是否成功并且返回消息
 $row = mysqli_fetch_row($rs);
 if($row[0]==0){
   echo '{"code":-1,"msg":"用户名或密码有误"}'.$uname;
 }else{
  echo '{"code":1,"msg":"登录成功"}';
 }
