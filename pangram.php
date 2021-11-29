<?php

function isPangram(string $str): bool {
    $newStr = preg_replace('/\s+/', '', $str);
    $pattern = '/[A-Z]/ig';

    echo preg_match($pattern, $newStr);
    return preg_match($pattern, $newStr);
}
isPangram('the quick brown fox jumps over the lazy dog');