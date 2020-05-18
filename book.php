<?php
 
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "id10478039_easyclean";
 
//Define your database username here.
$HostUser = "id10478039_ecdb";
 
//Define your database password here.
$HostPass = "easyclean";
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$username = $obj['username'];
$phno = $obj['phno'];
$reqtype = $obj['type'];
$req_period = $obj['period'];
$email = $obj['email'];
$address = $obj['addr'];
$addon=$obj['addon'];
$cartype=$obj['carty'];

$Sql_Query = "insert into request_user (username,phno,reqtype,req_period,address,email,cartype,addon,book_date) values ('$username','$phno','$reqtype','$req_period','$address','$email','$cartype','$addon',CURRENT_DATE)";
 
if(mysqli_query($con,$Sql_Query)){

$MSG = 'Request Booked' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
}

else{
    $MSG1 = 'Request Failed' ;
    $json = json_encode($MSG1);
    echo $json ;
}
mysqli_close($con);
?>
