<?php

$num = 10;

while ($i < 10) {
    for($i = 1; $i <= 10; $i++) {	
        for($j =1; $j <= $num; $j++) {
            $multiplication_table = ($i * $j);
            echo "$j x $i =  $multiplication_table \n";
        }
    }
}
