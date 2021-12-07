<?php
function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       

    foreach( $arr as $key => $value ){
        $str = $value.$separator;
        echo $str;
    }
    
    return $str;
}
