<?php
$i = 1;
$num = 10;

while ($i < $num) {
    for($i = 1; $i <= 10; $i++) {	
        echo "<tr>";
        for($j =1; $j <= $num; $j++) {
            $multiplication_table = ($i * $j);
            echo "<td>$j  x $i =  $multiplication_table</td>";
        }
        echo "<tr/>";
    }
}
