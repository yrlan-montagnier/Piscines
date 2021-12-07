<?php

function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       
    $last = end($arr);

    foreach( $arr as $value ) {

        $str = $value.$separator;

        if ($value == $last) {
            $str = $value;
        }
    echo $str;
    }
    return $str;
}

joinWords(['La', 'fonction', 'join'], ' ');