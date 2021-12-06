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

function arrayContains(array $arr, int|string|float $search): int|string {
    return array_search($search, $arr);
}

function merge(array $arr1, array $arr2, array $arr3) {
    return array_merge($arr1, $arr2, $arr3);
}