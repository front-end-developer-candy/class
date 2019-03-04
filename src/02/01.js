/**
 * 面向对象 - 继承
 * 1.People 是父类，公共的，不仅仅服务于 Student
 * 2.继承可将公共方法抽离出来，提高复用，减少亢余
 */

/**
 * 父类
 */
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    alert(`${this.name} eat something`);
  }

  speak() {
    alert(`My name is ${this.name},age ${this.age}`);
  }
}

/**
 * 子类
 */
class Student extends People {
  constructor(name, age, number) {
    super(name, age);
  }

  study() {
    alert(`${this.name} study`);
  }
}

const xiaoming = new Student('xiaoming', 10, 'A1');
xiaoming.study();
xiaoming.eat();

const xiaohong = new Student('xiaohong', 11, 'A2');
xiaohong.study();
xiaohong.eat();
