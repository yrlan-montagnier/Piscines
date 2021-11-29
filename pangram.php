<?php

function isPangram($str) {
    $pattern = "/abcdefghijklmnopqrstuvwxyz/i";
    return preg_match($pattern, $str);
}