<?php  

function breakLines(string $str, int $length) :string {  
    return wordwrap($str, $length, "\n", true);
}

print_r(breakLines('sfdkgofdkgpofdsjgpofdkgfdpogkd', 5));