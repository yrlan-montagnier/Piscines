<?php

function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       

    foreach( $arr as $value ){
        $str = $value.$separator;
        echo $str;
    }
    return $str;
}

joinWords(['La', 'fonction', 'join'], ' ');