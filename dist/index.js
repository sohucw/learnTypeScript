"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let str = '互联网程序员';
// let str1 = 'aaa'
// console.log(str + str1);
// ------------------------基本类型-------------
let str = '互联网程序员';
let str1;
str1 = 'daoyan';
let str2 = `Hello my name is ${str}`;
let num = 1000;
let boo = false;
// boo = 99;
let unusable = undefined;
let n = null;
let un = undefined;
let test = true; // 失去了ts的意义 
// ------------------------数组-------------
let arr = [1, 2, 3, 4, 5];
arr.push(32);
// arr.push('互联网');
let arr1 = [32, 45, 56];
// 元组
// 合并了相同类型的对象， 合并了不同类型的对象 这就是元组
let tom = ['Tom', 25];
let tuple = [1, 'a', true];
let tuple1 = [33, 'tuple', false];
let tom1;
tom[0] = 'tom';
tom[1] = 23;
tom[0].slice(1);
tom[1].toFixed(2);
// ------------------------枚举-------------
// 成功 失败  占用
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["USEING"] = 1] = "USEING";
})(LiveStatus || (LiveStatus = {}));
const res = LiveStatus.FAIL;
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
})(Days || (Days = {}));
console.log('Days', Days.Sun === 0);
console.log(0 /* Up */);
let dir1 = [Dire.Up, Dire.Down, Dire.Left, Dire.Right];
console.log(dir1);
// ------------------------Union-------------
let aaa;
aaa = 1000;
aaa = '互联网程序员';
aaa = true;
let jack = {
    id: 333,
    name: 'jack',
    age: 25
};
// type Card = {
// }
// interface 是可以扩充的 继承的   class
// ------------------------Function-------------
// 函数声明  函数表达式
function sum(x, y) {
    return x + y;
}
sum(1, 3);
// sum(1, 3, 3);
// sum(1);
//  函数表达式
// let mySum = function (x: number, y: number) {
//     return x + y;
// }
let mySum = function (x, y) {
    return x + y;
};
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
function buildName(lastName = 'jack', fistName) {
    return fistName + lastName;
}
let tomcat = buildName('tom', 'cat');
let tom12 = buildName('', 'tom');
// 剩余参数
// ...rest
function push(arry, ...items) {
    items.forEach(function (item) {
        arry.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        // const data = await res.json(); 
        const data = yield res.json();
    });
}
const data1 = {
    'userId': 1,
    'id': 1,
    'titile': 'test',
    'completed': false
};
const beta = data1;
// ------------------------class -----------------
class Animal {
    // constructor(name: string) {
    //     this.name = name;
    // }
    // protected constructor(name: string) {
    //     this.name = name;
    // }
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `my name is ${this.name}`;
    }
}
let a = new Animal('jack');
console.log(a.sayHi()); // 
// a.name = 'Tom';
// 继承
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用了父类的constructor 
        console.log(this.name);
    }
    sayHi() {
        return 'my name is ' + super.sayHi(); // 调用了父类的 sayHI
    }
}
let c = new Cat('jack');
console.log(c.sayHi());
// 静态方法和属性
class Animal1 {
    static isAnimail(a) {
        return a instanceof Animal1;
    }
}
Animal1.num = 32;
Animal1.isAnimail(a);
// public  private protected
// readyonly
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
let a2 = new Animal2('daoyan');
// a2.name = '32';
// 抽象类 abstract  不允许被实例化 不能new
class Animal3 {
    constructor(name) {
        this.name = name;
    }
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
    constructor(name) {
        this.name = name;
    }
}
let a4 = new Animal4('daoyan');
// ------------------------泛型 -----------------
// function createArray(len: number, value: any): Array<any> {
//     let res = [];
//     for (let i =0; i<len; i++) {
//         res[i] =value;
//     }
//     return res;
// }
// createArray(3, 'x'); // ['x', 'x', 'x']
function createArray(len, value) {
    let res = [];
    for (let i = 0; i < len; i++) {
        res[i] = value;
    }
    return res;
}
createArray(3, 'x'); // ['x', 'x', 'x']
function log(arg) {
    console.log(arg.lenght);
    return arg;
}
class Door {
}
class SDoor extends Door {
    alert() {
        console.log('SDoor alert');
    }
}
class Car {
    alert() {
        console.log('Car alert');
    }
}
class Car1 {
    alert() {
    }
    off() {
    }
    on() {
    }
}
// 接口可以继承类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point3d = { x: 1, y: 2, z: 3 };
let p = new Point(1, 2); // 
// Point 当做一个类型来使用 ：Ponit
function printPoint(p) {
    console.log(p.x, p.y);
}
function printPoint1(p) {
    console.log(p.x, p.y);
}
// 第一个参数是key 
// 第二个参数是value
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    'daoyan': { age: 5, breed: "Maine Coon" }
};
const todo = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLDRDQUE0QztBQUM1QyxJQUFJLEdBQUcsR0FBVyxRQUFRLENBQUM7QUFDM0IsSUFBSSxJQUFZLENBQUM7QUFDakIsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNoQixJQUFJLElBQUksR0FBWSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7QUFDOUMsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNoQixZQUFZO0FBQ1osSUFBSSxRQUFRLEdBQVMsU0FBUyxDQUFDO0FBQy9CLElBQUksQ0FBQyxHQUFTLElBQUksQ0FBQztBQUNuQixJQUFJLEVBQUUsR0FBYyxTQUFTLENBQUM7QUFFOUIsSUFBSSxJQUFJLEdBQU8sSUFBSSxDQUFDLENBQUMsWUFBWTtBQUlqQywwQ0FBMEM7QUFDMUMsSUFBSSxHQUFHLEdBQWEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNiLG1CQUFtQjtBQUNuQixJQUFJLElBQUksR0FBa0IsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLEtBQUs7QUFDTCwrQkFBK0I7QUFDL0IsSUFBSSxHQUFHLEdBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMxQixJQUFJLE1BQU0sR0FBOEIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTdE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