const ws = new WeakSet()

let obj = {
    name:"vivek"
}

ws.add(obj)


console.log(ws);// Object may be garbage-collected
