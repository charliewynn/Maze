<?php

$host="cwynnlogin2.db.2873762.hostedresource.com"; // Host name 
$username="cwynnlogin2"; // Mysql username 
$password="L20Inches"; // Mysql password 
$db_name="cwynnlogin2"; // Database name 
$tbl_name="mazemmo"; // Table name

$con = mysql_connect("$host","$username","$password");
if (!$con)
{
	die('Could not connect: ' . mysql_error());
}
mysql_select_db("$db_name", $con);
 
$map = $_POST[map];
$x = $_POST[x];
$y = $_POST[y];
  
$query_players = 'INSERT INTO `mazemmo` (`name`, `map`, `x`, `y`) VALUES (\'somename\', \'$map\', \'$x\', \'$y\');';

if (!$query_players)
{
	die("I JUST GOT A BLEEDIN QUERY ERROR!!!!!<br>Query is: $sql<br>Error2 is: ".mysql_error());
}

echo mysql_insert_id();

?>