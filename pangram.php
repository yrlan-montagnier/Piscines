<?php

function isPangram($str): bool {
    $pattern = "/abcdefghijklmnopqrstuvwxyz/i";
    return preg_match($pattern, $str);
}