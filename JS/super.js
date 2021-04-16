// class God{
//     hi(){
//         console.log("He is the GOD")
//     }
// }
// class Animal extends God{
//     constructor(name, height){
//         super()
//         this.name = name;
//         this.height = height;
//     }
//     hello(){
//         console.log(`Hii I am ${this.name} from the animal kingdom`)
//     }
// }

// // console.log(Animal)
// //create an object
// // let king = new Animal("Lion King", 4.5);
// // console.log(king)
// // king.hello();

// class Lion extends Animal{
//     constructor(name, height, color){
//         super(name, height);
//         this.color = color;
//     }
//     callParentHello(){
//         super.hello()
//     }
//     hello(){
//         console.log("From child")
//         // super.super.hi();
//     }
// }

// let l = new Lion("tiger", 4.5, 'stripes')
// l.callParentHello();
// l.hello();


// class A{
//     constructor(x)
//     {
//         this.a = x;
//     }
// }


// class B extends A{
//     constructor(x, y)
//     {
//         super(x)
//         this.b = y;
//     }
// }


// class C extends B{
//     constructor(x,y,z)
//     {
//         super(x,y)
//         this.c = z;
//     }
// }

// c = new C(11,22,33)
// console.log(c.a,c.b,c.c)

function a(){
    function b(){
        function c(){
                val = 45
        }
        c()
    }
    b()
}

a()
console.log(val)