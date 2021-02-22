<?php
include "conn.php";
if(isset($_POST['username'])){
    $username=$_POST['username'];
    $password=sha1($_POST['password']);
    $tel=sha1($_POST['tel']);
    $conn->query("insert registry values(null,'$username','$password','$tel')");
}
if(isset($_POST['checkname'])){
    $checkname=$_POST['checkname'];
    $result=$conn->query("select * from registry where username='$checkname'");
    if($result->fetch_assoc()){//满足条件，存在值，说明此用户名不能被注册。
        echo 'true';
    }else{
        echo 'false';
    }
}