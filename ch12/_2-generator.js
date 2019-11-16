function* rainbow(){
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();
let current = it.next();
while(!current.done){
    console.log(current);
    current = it.next();
}