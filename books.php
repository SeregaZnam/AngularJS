<?php 

require 'db.php';

$res = mysqli_query($db, "SELECT * FROM books");
$books = mysqli_fetch_all($res, MYSQLI_ASSOC);
exit(json_encode($books));