<?php
function joinWords(array $arr,string $separator = ' ') :string {
    return implode($separator, $arr);
}
