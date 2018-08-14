<?php 

// var_dump($_POST);

$data = json_decode(file_get_contents('php://input'));
$data2 = json_decode(trim(file_get_contents('php://input')), true);

// var_dump($data);
// var_dump($data2);
// echo $data->var1;
// echo $data2['var2'];

$answer = [
	'key1' => 'Значение 1',
	'key2' => 'Значение 2'
];
echo json_encode($answer);