<?php

function isPangram(string $str): bool {
    $pattern = '/[A-Z]/i';

    if (preg_match($pattern, $str))
        return 1;
    else 
        return 0;
}

isPangram('the quick brown fox jumps over the lazy dog');