<?php

function reverse(string $str): string {
    return strrev($str);
}

function isPalindrome(string $str): bool {
    if(reverse($str) == $str) 
        return true;
    else
        return false;
}