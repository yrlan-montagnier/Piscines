<?php
function joinWords(array $arr, $separator = ' ') {
    $str = "";       

    foreach( $arr as $key => $value ){
         $str.=$value.$separator;
    }
    
    return $str;
}
