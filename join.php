<?php
function joinWords(array $arr, string $separator) {
    return implode($separator, $arr);
}
echo(joinWords(['My', 'name', 'is', 'John'], "-"));