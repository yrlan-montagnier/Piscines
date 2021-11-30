<?php

function isPangram($str)
{
    $alphabet = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    $isPangram = false;
    $strArray = str_split($str);

    foreach ($strArray as $char) {
        if (ctype_alpha($char)) {
            if (ctype_upper($char)) {
                $char = strtolower($char);
            }
            $key = array_search($char, $alphabet);
            if ($key !== false) {
                unset($alphabet[$key]);
            }
        }
    }
    if (!$alphabet) {
        $isPangram = true;
    }
    return $isPangram;
}
