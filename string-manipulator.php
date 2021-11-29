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
    $lowerCaseStr = implode(' ', array_map(function($e) { return lcfirst($e); }, explode(' ', $str)));
    return $lowerCaseStr;
}

#function removeBlankSpace(string $str): string
#{
#    return strtolower($str);
#}