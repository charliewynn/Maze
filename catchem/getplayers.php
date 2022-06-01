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
 
$id = $_POST[id];
$map = $_POST[map];
  
$query_players = "SELECT * FROM $tbl_name WHERE `map` = $map AND `id` != $id";
if (!$query_players)
{
	die("I JUST GOT A BLEEDIN QUERY ERROR!!!!!<br>Query is: $sql<br>Error2 is: ".mysql_error());
}
$result=mysql_query($query_players);

$num = mysql_numrows($result);

$players = array();

for($i = 0; $i < $num; ++i)
{
	$name=mysql_result($result,$i,"name");
	$x=mysql_result($result,$i,"x");
	$y=mysql_result($result,$i,"y");
	
	array_push($players, array($name, $x, $y));
}

echo json_encode($players);

?>