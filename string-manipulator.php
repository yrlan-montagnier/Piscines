<?php

function capsMe(string $str): string
{
    return strtoupper($str);
}

function lowerMe(string $str): string
{
    return strtolower($str);
}

function upperCaseFirst(string $str): string
{
    return ucwords($str);
}

function lowerCaseFirst(string $str): string
{
    return strtoLower($str[0]);
}

#function removeBlankSpace(string $str): string
#{
#    return strtolower($str);
#}