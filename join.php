<?php

function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       
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

echo joinWords(['La', 'fonction', 'join'], '-');