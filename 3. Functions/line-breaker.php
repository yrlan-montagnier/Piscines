<?php  

function breakLine(string $str, int $length) {  
    $strArray = str_split($str, $length);
    
    foreach ($strArray as $char) {
        $charLength = strlen($char);
        if ($char < $charLength) {
            return $char;
        } else {
            return '\n';
        }
    }
}

echo breakLine('test', 3);