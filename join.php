<?php

function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       
    $last = end($arr);

    foreach( $arr as $value ) {

        if ($value != $last) {
            $str = $value.$separator;
        } 

        if ($value == $last) {
            $str = $value;
        }
        
    }
    return $str;
}

joinWords(['La', 'fonction', 'join'], ' ');