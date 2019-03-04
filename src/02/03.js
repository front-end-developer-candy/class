/**
 * 面向对象 - 多态
 * 定义一个接口，在子类改写同一个接口实现不同的功能
 * 保持子类的开放性和灵活性
 * 面向接口编程【不管子类实现，只管子类接口】
 * */

class People {
  constructor(name) {
    this.name = name;
  }

  saySomething() {

  }
}

class A extends People {
  constructor(name) {
    super(name);
  }

  saySomething() {
    alert(`I am A`);
  }
}

class B extends People {
  constructor(name) {
    super(name);
  }

  saySomething() {
    alert(`I am B`);
  }
}

const a = new A('a');
a.saySomething();

const b = new B('b');
b.saySomething();