// let str = '互联网程序员';
// let str1 = 'aaa'
// console.log(str + str1);
// ------------------------基本类型-------------
let str: string = '互联网程序员';
let str1: string;
str1 = 'daoyan';
let str2: string  = `Hello my name is ${str}`;
let num: number = 1000;
let boo = false;
// boo = 99;
let unusable: void = undefined;
let n: null = null;
let un: undefined = undefined;

let test:any = true; // 失去了ts的意义 



// ------------------------数组-------------
let arr: number[] = [1,2,3,4,5];
arr.push(32);
// arr.push('互联网');
let arr1: Array<number> = [32,45,56];
// 元组
// 合并了相同类型的对象， 合并了不同类型的对象 这就是元组
let tom: [string, number] = ['Tom', 25];
let tuple = [1, 'a', true] 
let tuple1: [number, string, boolean] = [33, 'tuple', false];

let tom1: [string, number];
tom[0] = 'tom';
tom[1] = 23;
tom[0].slice(1);
tom[1].toFixed(2);
// ------------------------枚举-------------

// 成功 失败  占用
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    USEING = 1
}
const res = LiveStatus.FAIL;
enum Days {
    Sun, Mon, Tue, Wed
}
console.log('Days', Days.Sun === 0);
// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

console.log(Directions.Up);


// 外部枚举
declare enum Dire {
    Up,
    Down,
    Left,
    Right
}
let dir1 = [Dire.Up, Dire.Down, Dire.Left, Dire.Right];
console.log(dir1);

// ------------------------Union-------------
let aaa: number | string | boolean;
aaa =1000;
aaa = '互联网程序员';
aaa= true;

// ------------------------interface-------------
// 首字母要大写  一般建议以 I 开头
// interface IPerson {
//     name: string
//     age?: number

// }
// let jack: IPerson = {
//     name: 'jack',
//     // age: 25,
//     // gender: 'male'
// }
// 任意属性
// interface IPerson {
//     name: string
//     age: number
//     [propName: string]: string | number
// }


interface IPerson {
    readonly id: number
    name: string
    age: number
}
let jack: IPerson = {
    id: 333,
    name: 'jack',
    age: 25
}
// jack.id =333;
interface IPerson {

}

// ------------------------type-------------

type Card = {
    name: string
}
// type Card = {

// }

// interface 是可以扩充的 继承的   class

// ------------------------Function-------------
// 函数声明  函数表达式
function sum (x: number, y: number) {
    return x + y;
}

sum(1, 3);
// sum(1, 3, 3);
// sum(1);

//  函数表达式
// let mySum = function (x: number, y: number) {
//     return x + y;
// }

let mySum: (x: number, y :number) => number =  function (x: number, y: number) {
    return x + y;
}

// typescript 中的 =>  es6中的 => 

// 可选参数
// function buildName (fistName: string, lastName?: string) {
//     if (lastName) {
//         return fistName + lastName
//     } else {
//         return fistName
//     }
// }

// 参数默认值
function buildName (lastName: string = 'jack', fistName: string) {
        return fistName + lastName
}
let tomcat = buildName('tom', 'cat');
let tom12 = buildName('', 'tom');

// 剩余参数
// ...rest
function push(arry: number[], ...items: number[]){
    items.forEach(function (item) {
        arry.push(item);
    });
}
// 重载 一个函数接受不同数量 不同类型的参数 做出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse (x:number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// ------------------------断言-----------------

// {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     }

interface Data {
    userId: number,
    id: number,
    titile: string,
    completed: boolean
}
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const data = await res.json(); 
    const data = await res.json() as Data;
}

const data1: Data =  {
    'userId': 1,
    'id': 1,
    'titile': 'test',
    'completed': false
}
interface Beta  {
    name: string
}
const beta = data1 as unknown as Beta;

// ------------------------class -----------------
class Animal {
    // private name;
    protected name;
    // constructor(name: string) {
    //     this.name = name;
    // }
    // protected constructor(name: string) {
    //     this.name = name;
    // }
    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        return `my name is ${this.name}`
    }
}
let a = new Animal('jack');
console.log(a.sayHi()); // 
// a.name = 'Tom';

// 继承
class Cat extends Animal {
    constructor(name: string) {
        super(name); // 调用了父类的constructor 
        console.log(this.name);
    }
    sayHi(): string {
        return 'my name is ' + super.sayHi(); // 调用了父类的 sayHI
    }
}
let c = new Cat('jack');
console.log(c.sayHi());  

// 静态方法和属性
class Animal1 {
    static num = 32;
    static isAnimail(a: Animal) {
        return a instanceof Animal1;
    }
}
Animal1.isAnimail(a);

// public  private protected


// readyonly

class Animal2 {
    readonly name;
    constructor(name: string) {
        this.name = name;
    }
}
let a2 = new Animal2('daoyan');
// a2.name = '32';

// 抽象类 abstract  不允许被实例化 不能new
abstract class Animal3 {
    name;
    constructor(name: string) {
        this.name = name;
    }
    public abstract sayHi(): void;
}
// let a3 = new Animal3('daoyan'); 是报错的

// 抽象类中的抽象方法必须被子类实现

class Cat3 extends Animal3 {
    eat() {
        console.log('吃东西');
    }
    sayHi() {
        // 不去实现的话 会报错
    }
}
// 类的类型

class Animal4 {
    name;
    constructor(name: string) {
        this.name = name;
    }
}
let a4: Animal4= new Animal4('daoyan');

// ------------------------泛型 -----------------

// function createArray(len: number, value: any): Array<any> {
//     let res = [];
//     for (let i =0; i<len; i++) {
//         res[i] =value;
//     }
//     return res;

// }
// createArray(3, 'x'); // ['x', 'x', 'x']

function createArray<T> (len: number, value: T): Array<T> {
    let res: T[] = [];
    for (let i =0; i<len; i++) {
        res[i] =value;
    }
    return res;

}
createArray(3, 'x'); // ['x', 'x', 'x']
// 泛型约束
interface Len {
    lenght: number
}
function log<T extends Len>(arg: T): T {
    console.log(arg.lenght);
    return arg;
}
// ------------------------class interface -----------------
interface Alarm {
    alert(): void;
}
class Door {

}
class SDoor extends Door implements Alarm {
    alert(): void {
        console.log('SDoor alert');
    }
}
class Car implements Alarm {
    alert(): void {
        console.log('Car alert');
    }
}

interface Light {
    on(): void;
    off():void;
}

class Car1 implements Alarm, Light {
    alert(): void {
        
    }
    off(): void {
        
    }
    on(): void {
        
    }
}
// 接口和接口之间也可以继承
interface LightAlarm extends Alarm {
    // alert();
    on(): void,
    off(): void
}
// 接口可以继承类
class Point {
    x: number;
    y: number;
    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
    }
}
interface Point3D extends Point {
    z: number
}
let point3d : Point3D = {x: 1, y:2, z:3};


let p = new Point(1,2); // 
// Point 当做一个类型来使用 ：Ponit
function printPoint (p: Point) {
    console.log(p.x, p.y);
}
interface PonitType {
    x: number,
    y: number
}
function printPoint1 (p: PonitType) {
    console.log(p.x, p.y);
}
interface Point3D1 extends Point {

}
interface Point3D1 extends PonitType {
    z: number
}

// ------------------------Utility  -----------------

interface CatInfo {
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris" | "mordred" | 'daoyan';
// 第一个参数是key 
// 第二个参数是value
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    'daoyan': {age: 5, breed: "Maine Coon"}
};


// pick
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Pick<Todo, "title" | "completed">;
// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     // description: 'sss'

// };
// omit

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "description" | "title">;

const todo: TodoPreview = {
    // title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
    // description: '333'
};
// ------------------------declear  ----------------

// jquery  $ 

$('#id');
// 声明文件 .d.ts 结尾
// @types