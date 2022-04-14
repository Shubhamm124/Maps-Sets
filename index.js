console.log("working");


//Problem :- 1

let element1  = new Set();
function removeDuplicate(str,n){
    for(let v=0;v<str.length;v++){
         element1.add(str[v]);
    }
    let str1 = " ";
    for(let val of element1.values()){
          str1+= val;
    }
    console.log(str1);
}
removeDuplicate("aabbccddeeff")


//Problem  :- 2



let element2 = "abcadeecfb";
let x = element2.split("");
let newMap = new Map();

for (let i = 0; i < x.length; i++) {
    let count = 1;
    for (let b = i + 1; b < x.length; b++) {
        if (x[i] === x[b]) {
            count++;
            x.splice(b, 1);
            b--;
        }
    }
    newMap.set(x[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}