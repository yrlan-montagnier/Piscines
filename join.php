<?php
function joinWords(array $arr, string $separator = ' ') {
    $str = "";       

    foreach( $arr as $key => $value ){
        $str = $value.$separator;
        echo $str;
    }
    
    return $str;
}
