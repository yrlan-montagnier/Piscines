<?php  

function breakLines(string $str, int $length) {  
    return wordwrap($str, $length, "\n", true);
}