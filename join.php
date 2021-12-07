<?php
function joinWords(array $arr, string $separator = ' '): string {
    $str = "";       

    foreach( $arr as $key => $value ){
        $str = $value.$separator;
        return $str;
    }
}

joinWords(['La', 'fonction', 'join'], ' ');