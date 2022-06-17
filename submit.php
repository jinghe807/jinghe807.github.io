<?php
$servername = "message-db.c3l5gmbmq1iy.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "adminadmin";
$dbname = "messages";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = 'INSERT INTO MessageForms (firstname, lastname, email, message)
 VALUES ( ?, ?, ?, ? )';
//use ->prepare in favour of ->query
if ($stmt = $conn->prepare($sql)) {
   //bind your inputs
   $stmt->bind_param('ssss',$_POST["firstName"],$_POST["lastName"],$_POST['email'], $_POST["message"]);    
  //execute the prepared query
  if($stmt->execute()){
     echo "New record created successfully";
  }
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
  echo "</br>Stmt error: ".$stmt->error();
}
$conn->close();
?>