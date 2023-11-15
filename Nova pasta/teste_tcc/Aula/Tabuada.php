<?php 
 
 echo "<style>table {border: 1px solid black;}</style>";
 echo "<table>";
 echo "-------------------------------------TABUADAS-------------------------------------";
for ($i = 1; $i <= 10; $i++) {
    if ($i % 5 == 1) {
        echo "<tr>";
    }
    echo "<td><table><tr><td>Tabuada do $i</td></tr>";
    for ($j = 1; $j <= 10; $j++) {
        echo "<tr><td>$i x $j = " . ($i*$j) . "</td></tr>";
    }
    echo "</table></td>";
    if ($i % 5 == 0) {
        echo "</tr>";
    }
}
echo "</table>";
?>