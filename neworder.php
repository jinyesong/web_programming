<?php

$lines = @file('./booklist.txt') or $result = "파일을 읽을 수 없습니다.";

for($i = 0; $i < count($lines); $i++){
    $str[$i] = trim($_POST[$i])."|".$_POST[($i + 1) * 10]."\n";
}

$fp = fopen("./".$_POST['name1'].".txt",'w');

for($i = 0; $i< count($lines); $i++){
    if($_POST[$i] != ""){
        fputs($fp,$str[$i]);
    }
}

fclose();

for($i = 0; $i<count($lines);$i++){
    $BookList[$i] = explode('|',$lines[$i]);
}
$BookName = [];
$BookPrice = [];
$BookNumber = [];
$BookImg = [];
for($i = 0; $i < count($lines);$i++){
    $BookName[$i] = $BookList[$i][0];
    $BookPrice[$i] = $BookList[$i][1];
    $BookNumber[$i] = $BookList[$i][2];
    $BookImg[$i] = $BookList[$i][3];
}

$number = [];
for($i = 0; $i <count($lines); $i++){
    if($_POST[$i] == ""){
    $number[$i] = $BookNumber[$i]; 
    }
    else{
      $number[$i] = $BookNumber[$i] - $_POST[($i + 1) * 10];
     
    }
    echo $_POST[$i];
}
  $str2 = [];

  for($i = 0; $i<count($lines); $i++){
      $str2[$i] = $BookName[$i]."|".$BookPrice[$i]."|".$number[$i]."|".$BookImg[$i];
      
  }

  $fp2 = fopen('./booklist.txt','w');

  for($i = 0; $i<count($lines); $i++){
    fputs($fp2,$str2[$i]);
  }

  fclose();
?>

<form action="Main.html" method="post">
  <input type="submit" value="돌아가기!">
</form>