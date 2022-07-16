
function bindCallApply(){
  //call源码
  Function.prototype.newCall = function(context){
    var context = context || window;
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
      args.push(arguments[i]);
    }
    const result = context.fn(...args);
    delete context.fn;
    return result;
  }
  //apply源码
  Function.prototype.newApply = function (context, arr) {
    var context = context || window;
    context.fn = this;
    var result;
    if (!arr) {
      result = context.fn();
    } else {
      if (!(arr instanceof Array)) throw new Error('params must be array');
      result = context.fn(...arr);
    }
    delete context.fn;
    return result;
  }
  //bind源码
  Function.prototype.newBind = function(context, ...rest) {
    var self = this;//谁调用myBind，this就指向谁
    return function fn(...args) {
      return this instanceof fn ? new self(...rest, ...args) : self.newApply(context, rest.concat(args))
    }
  }
  let obj = {
    name:'zhang',
    age:20,
    sex:'nan'
  }
  function Person(name,age,sex){
    this.name = name || this.name;
    this.age = age || this.age;
    this.sex = sex || this.sex;
    console.log(`姓名：${this.name}年龄：${this.age}性别：${this.sex}`);
  }
  //newCall
  console.log('newCall---------');
  Person.newCall(obj)
  Person.newCall(obj,'li',20,'1')
  //newApply
  console.log('newApply-------');
  Person.newApply(obj)
  Person.newApply(obj,['li',21,'1'])
  //newBind
  console.log('newBind--------');
  Person.newBind(obj)()
  Person.newBind(obj,'li',22,'1')()
  //newBind  new 的情况
  console.log('newBind  new 的情况------');
  let person = Person.newBind(obj,'xiao')
  let person2 = new person()
  console.log(person2);
  return <div>
    <div>bind,call,apply源码实现</div>
    <div>三者的区别在于：applycallbind</div>
    <ul>
      <li>三者都可以改变函数的对象指向this</li>
      <li>三者第一个参数都是要指向的对象，如果如果没有这个参数或参数为或，则默认指向全局thisundefinednullwindow</li>
      <li>三者都可以传参，但是是数组，而是参数列表，且和是一次性传入参数，而可以分为多次传入applycallapplycallbind</li>
      <li>bind 是返回绑定this之后的函数，、 则是立即执行apply call</li>
    </ul>
  </div>
}
export default bindCallApply