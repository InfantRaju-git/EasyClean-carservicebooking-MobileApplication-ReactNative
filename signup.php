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
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];

$address = $obj['addr'];
 
// Populate Password from JSON $obj array and store into $password.
$phno = $obj['phno'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM user_details WHERE phno='$phno'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'Phone number already exists!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into user_details (username,phno,email,address) values ('$username','$phno','$email','$address')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Registered Successfully' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);
?>