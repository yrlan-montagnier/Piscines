<?php

$hour = date('H');

if ($hour < 12) {
    echo("Hello! Have a nice day :)");
} elseif ($hour < 24) {
    echo("Hello! Have a nice day :)");
} else {
    echo("Good night! See you tomorrow :)");
}