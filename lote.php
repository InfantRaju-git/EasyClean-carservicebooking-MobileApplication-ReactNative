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


// Populate Password from JSON $obj array and store into $password.
$phno = $obj['phno'];

$Sql_Query = "SELECT * FROM user_details WHERE phno='$phno'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 
 }
 else{
$InvalidMSG = 'Invalid Phone Number Please Try Again' ;
$InvalidMSGJSon = json_encode($InvalidMSG);
echo $InvalidMSGJSon ;
 }
mysqli_close($con);
?>