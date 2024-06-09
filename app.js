var array = [[], []]
var arraymulti = [
    [0, 1, 2, 3,],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
for (i = 0; i < arraymulti.length; i++) {
    for (j = 0; j < arraymulti[i].length; j++) {
        document.write(arraymulti[i][j]);
    }
    document.write("<br>")

}
document.write("<br>"); document.write("<br>");

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");

}

document.write("<br>"); document.write("<br>");
document.write("<h1>" + "MULTIPLICATION TABLE" + "</h1>")
var table = prompt("Enter a number for multiplicatio table ");
var start = prompt("from which number do you want to start table");
var end = prompt("from which number do you want to end table");

for (var i = start; i <= end; i++) {
    document.write(table + "x" + i + "=" + table * i + "<br>");
}

document.write("<br>"); document.write("<br>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry "]
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");

}
document.write("<br>"); document.write("<br>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry "]
for (i = 0; i < fruits.length; i++) {

    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

document.write("<br>"); document.write("<br>");
document.write("<h1>" + "Counting:" + "</h1>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("<h1>" + " Reverse Counting:" + "</h1>")
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("<h1>" + " Even:" + "</h1>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ")
    }

}

document.write("<br>");

// document.write ("<h1>" +  " odd:"+ "</h1>")
// for (var i=1; i<=19; i+2){
//     if  (i%2==1) {
//         document.write (i + ", ")
//     }
// }
document.write("<br>");
document.write("<h1>" + " Series:" + "</h1>")
for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ")
    }

}


document.write("<br>"); document.write("<br>");

var menu = ["cake", "apple pie", "cookies", "chips", "patties"]
var user = prompt("welcome to our bakery . what do you bwant to order sir/mam");
var matchfound = false;
for (i = 0; i < menu.length; i++) {
    if (menu[i] === user) {
        matchfound = true;



        alert(user + "  is availabe at index  " + [i] + " in our bakkery");
        break;
    }
}

if (matchfound == false) {
    alert("we are sorry " + user + " is not avalable in our bakery ");
}

document.write("<br>"); document.write("<br>");

var a = [24, 53, 78, 91, 12]
var largest = a[0]

document.write(a);
document.write("<br>")
for (i = 1; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];

    }

}
document.write("The largest value is " + largest)

document.write("<br>"); document.write("<br>");

var a = [24, 53, 78, 91, 12]
var smallest = a[0]

document.write(a);
document.write("<br>")
for (i = 1; i < a.length; i++) {
    if (a[i] < smallest) {
        smallest = a[i];

    }

}
document.write("The smallest value is " + smallest)

document.write("<br>"); document.write("<br>");

for (var i = 5; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ", ")

    }
}