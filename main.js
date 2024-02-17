let word ='cademy';
let output ="";
for(let start=0;start<word.length;start++){
    if (word[start] != word[start]+1) {
        output+=`${word[start]}${word[start]}`; 
    }
}
console.log(output); 