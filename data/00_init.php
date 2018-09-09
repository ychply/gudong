<?php
 header("Content-Type:application/json;charset=utf-8");
 $conn = mysqli_connect("127.0.0.1","root","123","gudong",3306);
 //7:设置编码
 mysqli_query($conn,"SET NAMES UTF8");
