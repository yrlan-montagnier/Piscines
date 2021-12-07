<?php  

function breakLine(string $str, int $length) {  
    return wordwrap($str, $length, "\n", true);
}

echo breakLine('testdsfkodkgfodsgjkodsgjkodskgds', 5);