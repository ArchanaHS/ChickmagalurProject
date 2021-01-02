<?php

$FirstName=$_POST['FirstName'];
$LastName=$_POST['LastName'];
$Email=$_POST['Email'];
$TextInput=$_POST['TextInput'];
//database connection
    $host="localhost";
    $dbUsername="root";
    $dbPassword=" ";
    $dbname="Test";

$conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);
if($conn->connect_error){
    die('Connection failed :'.$conn->connect_error);
}
else{
    $SELECT="SELECT Email From ContactUs Where Email=? Limit=1";
    $INSERT="INSERT Into ContactUs(FirstName,LastName,Email,TextInput) values(?,?,?,?)";
    $stmt= $conn->prepare($SELECT);
    $stmt->bind_param("s",$Email);
    $stmt->execute();
    $stmt->bind_result($Email);
    $rnum=$stmt->num_rows();
    if($rnum==0){
        $stmt->close();
        $stmt=$conn->prepare($INSERT);
        $stmt->bind_param("ssss",$FirstName,$LastName,$Email,$TextInput);
        $stmt->execute();
        echo "Successfully updated.";
    }else{
        echo "already have Email.";
    } 
    $stmt->close();
    $conn->close();
 
}   
?>