function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString(){
        let className = this.constructor.name
        if (className == 'Person'){
            return `${className} (name: ${this.name}, email: ${this.email})`
        }else{
            return `${className} (name: ${this.name}, email: ${this.email}`

        }
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email, subject);
      this.subject = subject;
    }
    toString(){
        return super.toString() + ", " + `subject: ${this.subject})` 
    }
  }
  class Student extends Person{
      constructor(name,email, course){
          super(name,email)
          this.course = course
      }
      toString(){
        return super.toString() + ", " + `course: ${this.course})` 
    }
  }

  return {
    Person,
    Teacher,
    Student,

  };
}


let fn = personAndTeacher()
let p = new fn.Person('asd', ';as')
console.log(p.toString())
let t = new fn.Student('asd', 'asd', 'das')
console.log(t.toString())
// let t = new Teacher('qwe', '123qaw', "22@abv.bg")
// console.log(t)

// let s = new Strudent('ty', 'astyd', 'ty@abv.bg')
// console.log(s)

