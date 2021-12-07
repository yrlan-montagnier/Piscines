<?php

function explodeWords(string $str, string $separator = ' ', int $limit = PHP_INT_MAX):array {
    $arr = [];
    array_push($arr, $str);
    
    $last = end($arr);
    
    foreach( $arr as $value ) {
        if ($value == $last) {
            $str = $str.$value;
        } else {
            $str = $str.$value.$separator;
        }
    }
    return $str;
}

print_r(explodeWords('My name is John'));