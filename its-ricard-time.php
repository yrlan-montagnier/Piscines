<?php

$nbrRicard = 0;

do {
    echo("$nbrRicard \n");
    $nbrRicard++;
    continue;

    if($nbrRicard = 3) {
        echo("I'll have to stop soon!");
        $nbrRicard++;
        continue;
    } 
    else if($nbrRicard = 5  ) {
        echo("I am no longer very fresh ...");
        $nbrRicard++;
        continue;
    } 
} while($nbrRicard <= 7);
