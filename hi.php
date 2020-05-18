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

//Applying User Login query with email and password match.
$sql = "select username,email,address from user_details where phno = '$phno' ";

$result=$con->query($sql);

if ($result->num_rows >0) {
 while($row[] = $result->fetch_assoc()) {
 $tem = $row;
 $json = json_encode($tem);
 }
}
else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>
