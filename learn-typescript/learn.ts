import { Invoice, Payment } from './src/implementInterface';
import { hasPrint } from './src/interfacrForClass';

const documentOne: hasPrint = new Invoice('Vinamilk', 'drink milk', 5000000);

const documentTwo: hasPrint = new Payment('Viet Nam Airline', 'fly', 25000000);

const allDocument: hasPrint[] = [];

allDocument.push(documentOne, documentTwo);

type numArr = Array<number>;
type stringArr = Array<string>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];

const l3 = lastT([1, 3, 3]);

const l4 = lastT(['a']);

const l5 = lastT<string>(['d', 'e']);

const makeArr = (x: number) => [x];

const m = makeArr(5);

const makeArrT = <T>(x: T) => [x];

const m3 = makeArr(4);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];

const m4 = makeArrXY(2, 5);

const m5 = makeArrXY('Hoàng Minh', 22);

type myType<T> = T;

interface myInterface<T> {
  name: T;
  age: T;
}

const myInterfaceImpl: myInterface<string> = {
  name: 'Hoàng Minh',
  age: '12',
};

const myfunction = <T>(name: T) => {
  return name;
};

let myfunc: <T>(a: T) => T = myfunction;

type Info = {
  name: string;
  age: number;
};

type School = {
  schoolName: string;
  address: string;
};

type Mixed = Info | School;

const student: Mixed = {
  name: 'Hoàng Minh',
  age: 22,
  schoolName: 'Ngô Quyền',
  address: 'Hà Nội',
};

interface List<T> {
  length: number;
  [index: string]: T | number;
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: 'Hoàng Minh',
  age: 22,
};

let readonlyPerson: ReadonlyPerson = writablePerson;

writablePerson.age++;

interface testInterface1 {
  name: string;
}

interface testInterface2 {
  age: number;
}

type test2Interface = testInterface1 | testInterface2;

const check: test2Interface = {
  name: 'Hoàng Minh',
  age: 22,
};

enum TaskState {
  PENDING,
  INPROGRESS,
  FINISH,
}

interface TaskInterface {
  id: number;
  name: string;
  state?: TaskState;
}

class TaskService {
  static username = 'Hoàng Minh';
  static tasks: Array<TaskInterface>;

  constructor(tasks: Array<TaskInterface>) {
    TaskService.tasks = tasks;
  }
  getItems() {
    return TaskService.tasks;
  }

  static showItemsInfo(): void {
    for (let task of TaskService.tasks) {
      console.log(`${TaskService.username} - ${task.name}`);
    }
  }
}

const taskList = new TaskService([
  { id: 1, name: 'Học bài' },
  { id: 2, name: 'Tán Thục Hiền', state: TaskState.INPROGRESS },
]);

// -------------------------------------------

class Course {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  showCourseInfo(): void {
    console.log(`${this.id}`);
  }
}

class CourseMobile extends Course {
  author: string;
  constructor(id: string, name: string, price: number, author: string) {
    super(id, name, price);
    this.author = author;
  }
  showCourseInfo() {
    super.showCourseInfo();
    console.log(this.name, this.price, this.author);
  }
}

var courseObj = new Course('C102', 'Programming', 23);

var courseMobileObj = new CourseMobile('C013', 'Android', 60, 'Hoàng Minh');

// -------------------------------------

class newCourse {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

var newCourseObj = new newCourse('Hoàng Minh');

// console.log(newCourseObj.name);

newCourseObj.name = 'Thục Hiền';

// console.log(newCourseObj.name);

// ----------------------------------

abstract class Laptop {
  public keyboard(): void {
    console.log('Laptop.keyboard');
  }

  public abstract mainboard(name: string): void; // Có tham số nhưng implement không có tham số thì cũng không lỗi

  public chipset(): void {
    console.log('Laptop.chipset');
  }
}

class LaptopDell extends Laptop {
  public mainboard(): void {
    console.log('Laptop.mainboard');
  }
}

let laptopObj: Laptop = new LaptopDell();

// laptopObj.keyboard();

// ------------------------------------
interface People {
  name: string;
  eat: () => void;
  sleep: () => void;
}

interface Bird {
  fly(): void;
}

class Machine {
  calculate(x: number, y: number) {
    return x + y;
  }
}

class Superman extends Machine implements People, Bird {
  name: string;
  eat(): void {
    console.log('eat');
  }
  sleep(): void {
    console.log('sleep');
  }

  fly(): void {
    console.log('fly');
  }

  constructor(name: string) {
    super();
    this.name = name;
  }
}

let john: Superman = new Superman('John');
// john.eat();
// john.sleep();
// console.log(john.calculate(1, 2));

// ---------------------------------

function showNumberInfo(x: number) {
  return x;
}

function showStringInfo(x: string) {
  return x;
}

function showInfo<T>(x: T) {
  return x;
}

// -------------------------------

class StudyGeneric {
  static printArray<T>(params: T[]): void {
    console.log(params);
  }
}

StudyGeneric.printArray<number>([1, 2, 3, 5]);
StudyGeneric.printArray<string>(['1', '2', '3', '5']);

// -------------------------------

class Product<A, B, C> {
  id: A;
  name: B;
  price: C;

  constructor(id: A, name: B, price: C) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  showProductInfo() {
    console.log(`${this.id} - ${this.name} - ${this.price}`);
  }
}

let product1 = new Product<string, string, number>('ID1', 'Product', 20);
let product2 = new Product<number, string, number>(1, 'Product 2', 30);
let product3 = new Product<string, number, boolean>('1', 5, true);

product1.showProductInfo();
product2.showProductInfo();

product3.showProductInfo();
