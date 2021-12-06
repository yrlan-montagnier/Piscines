<?php

function reverse(array $arr): array {
    return array_reverse($arr);
}

function push(array $arr, string $str): array {
    $arr[] = $str;
    return $arr;
}

function sum(array $arr): int {
    return array_sum($arr);
}