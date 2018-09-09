
#设置客户端连接服务器使用utf8编码
SET NAMES UTF8;
#丢弃数据库xz，如果存在的话
DROP DATABASE IF EXISTS gudong;
#创建数据库gudong，使用utf8字符集
CREATE DATABASE gudong CHARSET=UTF8;
#进入数据库xz
USE gudong;
#1:设计一张表 管理登录表
#  xz_admin
#2:设计几列
#3:每个列类型
#  id    INT 主键 自增  100%[效率]
#  uname VARCHAR(25)
#  upwd  VARCHAR(32) 123->2892378126712SX932278X
#        MD5->32位
CREATE TABLE xz_admin(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
#4:添加三条测试数据
#限定密码位数足够长 8
INSERT INTO xz_admin VALUES(null,'tom',md5('123456'));
INSERT INTO xz_admin VALUES(null,'jerry',md5('123456'));
INSERT INTO xz_admin VALUES(null,'james',md5('123456'));
