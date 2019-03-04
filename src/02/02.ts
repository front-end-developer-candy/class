/**
 * 面向对象 - 封装
 * public 完全开放
 * protected 对子类开放
 * private 对自己开放
 *
 * 减少耦合，不该外露的不外露
 * 利于数据、接口的权限管理
 * */

class People {
    name: String;
    age: Number;

    // 受保护属性，只有自己或者子类可以访问
    protected weight: Number;

    constructor(name: String, age: Number) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }

    eat() {
        alert(`${this.name} eat something`);
    }

    speak() {
        alert(`My name is ${this.name},age ${this.age}`);
    }
}

class Student extends People {
    public number: Number;

    // 私有属性 - 只能自己访问
    private girl: String;

    constructor(name: String, age: Number, number: Number) {
        super(name, age);
        this.number = number;
        this.girl = 'xiaoli';

    }

    study() {
        alert(`${this.name} study`);
    }

    getWeight() {
        alert(`weight ${this.weight}`);
    }
}

let xiaoming = new Student('xiaoming', 10, 20);
xiaoming.getWeight();

// alert(xiaoming.girl);