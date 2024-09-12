class Mobiles{
    constructor(name){
        this.name = name
    }
}

class vivo extends Mobiles{
    ringing () {
        console.log(`${this.name} is ringing`);
    }
}

// const ring = new vivo("vivoModel1")
// ring.ringing()

class redmi extends vivo{
    ringing( ) {
        console.log(`${this.name} model is 123`);
    }
}

const redmimodel123 = new redmi("redmi")
redmimodel123.ringing()