<?php

function isPangram(string $str): bool {
    $pattern = '/[A-Z]/i';
    return preg_match($pattern, $str);
}

isPangram('the quick brown fox jumps over the lazy dog');