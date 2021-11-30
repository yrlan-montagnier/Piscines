<?php

function isPangram(string $str): bool {
    $new_str = str_replace(' ', '', $str);
    echo $new_str;

    $pattern = "/[A-Z]/i";
    $match = preg_match_all($pattern, $new_str);

    echo preg_match($pattern, $new_str);

    if ($match) {
        return 1;
        echo "Pangram";
    }
    else {
        return 0;
        echo "Pas un pangram";
    }
}

isPangram('the quick brown fox jumps over the lazy dog');