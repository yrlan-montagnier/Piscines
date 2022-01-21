<?php

function explodeWords(string $str, string $separator = ' ', int $limit = PHP_INT_MAX):array {
    $arr = [];
    array_push($arr, $str);
    
    $last = end($arr);

    return $arr;
}

print_r(explodeWords('My name is John'));