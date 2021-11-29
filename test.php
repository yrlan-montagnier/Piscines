<?php  

$num = 2;

while ($num <= 100 ) {  
    $div_count=0;  

    for ($i=1; $i<=$num; $i++) {  
        if (($num%$i)==0) {  
            $div_count++;  
        }  
    } 
    if ($div_count<3 && $num !=97) {  
        echo "$num , ";  
        $div_count++;
    }
    else if ($div_count<3 && $num = 97) {
        echo $num;
        $div_count++;
    }
    $num=$num+1;  
}