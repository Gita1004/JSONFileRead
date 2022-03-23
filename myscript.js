


fetch ("./fetch_info.txt")
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);
