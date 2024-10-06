
class person{
    constructor(name, age){
        this.name = name;
        this.age = age ;
    }
    sleep(){
        console.log(`${this.name} sleeping now`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new person('kodom ali', 21);
console.log(kodom);
kodom.sleep();
const badam = new person('badam ali', 23);
console.log(badam);
badam.sleep();
