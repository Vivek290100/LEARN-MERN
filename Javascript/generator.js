function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



function* generator(){
    let i = 0
    while(i<10){
        yield i++
    }
}

const genr = generator()
console.log(genr.next().value);
console.log(genr.next().value);
console.log(genr.next().value);
console.log(genr.next().value);
console.log(genr.next().value);



function* generator(){
    for(let i=100;i>1;i--){
        if(i%5===0){
            yield i
        }
    }
} 
const gener = generator();

for(i=100;i<100;i++){
    console.log(gener.next().value); //100 95 90 85 80 75 70 65 60 55 50 45 40 35 30 25 20 15 10 5    
}