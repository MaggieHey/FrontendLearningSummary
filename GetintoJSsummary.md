# 1.course content review

## 1.1 introducion

**Firstly**,learn basic building blocks programming .(**variables,loops,functions and operations**)

**Secondly**,go through three main pillars of JavaScript.(**type and coercion,scope and closure,this and prototype**)

Recommended books:《You don't know JS》series

(**《Up&Going》**

**chapter1:for people not knowing programming**

**chapter2:more specific content about basic building blocks programming and three pillars of JS**

**chapter3:catalogue of other series**)



## 1.2 summary

What I have learned in thie course are like a landscope of the fundamental core principles that I need for JavaScript.

For **core principles**  in this course,I should **remember** them.

For **exercise** in this course ,I should **do** them again and **retry** them.

For **diving further into JS** ,I should **read YDKJS** and **watch more videoes**.

- what's good code

  | degree | requirements                              |
  | ------ | ----------------------------------------- |
  | useful | when the reader can tell what will happen |
  | better | when the reader understands the code      |

  

## 1.3 knowledge

### 1.3.1 programming primer in JS 

#### values

- numbers

  ```
  1 2 3
  ```

- strings

  ```
  hello world
  ```

#### operations

- +of numbers

  ```
  1+1
  ```

- +of strings

  ```
  ""
  ```

  

- comparision

- !

- logic

#### variables 

- definition

  ```
  it's the representation of some place in memory.and we give those things useful name.
  ```

- var 

  ```javascript
  var name="Maggie";
  var age="21";
  var friends=["Maggie","Hey"];
  ```

- let

  ```
  let+同上
  ```

#### variables and operations

- ++

  ```
  var age = 21;
  age ++ ;
  ```

- +=

  ```
  var age = 21;
  age += 2;
  ```

#### expression and statements

- definition

  ```
  an expression is like a phrase in a sentence, a statement is a whole sentecne.
  ```

- example

  ```javascript
  var age/*expression*/ = 21;
  age = 1+(age*2);/*statement*/
  ```

#### if&else

- definition

  ```
  decide whether or not to do sth or to do sth else
  ```

- example

  ```javascript
  var insenrolled=false;
  if (insenrolled){
      console.log("take the class");
  }
  else{
      console.log("enroll first!");
  }
  ```

#### loops

- definition

  ```
  repeat sth over and over again
  ```

- for 

  ```javascript
  var favoritebooks=[];
  for (let bookname of favoritebooks){
    console.log(bookname);
  }
  ```

- while

  ```javascript
  var favoritebooks=[];
  while(favoritebooks.length>0){
      let bookname=favotitebooks.pop();
      console.log(bookname);
  }
  ```

#### function

- definition

  ```
  functions are [building blocks] making up a program,making up the logic instructions we give to the computer.
  here function is a [procedure] which collects information/things that we want it to do.
  ```

- not give feedback

  ```javascript
  function lookfavoritebook(bookname){
      console.log(
      `this is one of my favoritebooks ,${bookname.name}`;
      );
  }
  ```

- give feedback

  ```javascript
  function looklikebooknum(allbooknum,dislikebooknum){
      return allbooknum-dislikebooknum;
  }
  var num=looklikebooknum(100,50);
  console.log(`
  ${num}`;
             );
  
  ```

  

#### others

- definition

  ```
  these are things which are seen and used in JS,and not included in existing parts.
  ```

- .length

  - definition

    ```
    get the length of a array.
    ```

  - example

    ```javascript
    var names=["Maggie","Hey"];
    console.log(${names.length});
    ```

    

- .name

  - definition

    ```
    get a element's name from a array.
    ```

  - example

    ```javascript
    var names=["Maggie","Hey"];
    function myname(names){
        console.log(`
         My name is ${names.name}
    `);
    }
    ```

    

- .pop()

  - definition

    ```
    take the bottom element out of a array.
    ```

  - example

    ```javascript
    var names=["Maggie","Hey"];
    var firstname=names.pop();
    ```

    

- console.log

  - definition

    ```
    output sth
    ```

  - example

    ```javascript
    var num=1;
    console.log(num);
    var name="Maggie";
    console.log(${name});
    ```

    

- num.isNaN()

  - definition

    ```
    make sure whether a value is NaN.
    ```

  - example

    ```javascript
    var name="Maggie";
    num.isNaN(name);
    ```

- .includes("")

  - definition

    ```
    judge whether the value includes sth in"".
    ```

  - example

    ```javascript
    var name="maggie";
    if (name.includes("M")){
        console.log(name);
    }
    ```

    

### 1.3.2 three pillars of JS

#### types

- primitive types
  - undefined
  - string
  - number
  - boolean
  - object
  - subobjct
    - function
    - array

- NaN

  - definition

    ```
    a value which came from wrong operation ,and is often misunderstood in JavaScipt language.
    ```

  - example

    ```javascript
    var name="Maggie,Hey";
    var something=name/2;
    something;
    number.isNaN(something);//true
    number.isNaN(name);//false
    ```

- new

  - definition

    ```
    a fundamental object copied from a language like Java.
    ```

  - use new

    - object()
    - array()
    - function()
    - Date()
    - RegExp()
    - Error()
    - class()

  - not use new

    - string()
    - number()
    - boolean()

#### coercion

- definition

  ```
  it's a way to convert from one type to another,including both implicit and explicit to handle type.
  
  what's more,programmers should know the type of value and make it obvious.
  ```

- normal

  ```javascript
  number+number=number;
  number+string=string;
  string+number=string;
  string+string=string;
  ```

- number()

  - definition

    ```
    number can be used with any value.So you can convert it from a string/boolean to a number.
    ```

- string()

  - definition

    ```
    convert number/boolean to a string
    ```

- checking equality

  - definition 

    ```
    check whether or not two values are equal or one value' less than
    ```

  - "=="

  - "==="

  - null==undefined

#### ________________________

#### scope

- definition

  ```
  it's the rule for [where things are] in memory and what bucket of organization  it fit into.
  
  it means[where] the JavaScript engine looks for things.(what they are looking for are variables and identifiers)
  ```

- related concepts

  - undefined 

    - definition

      ```
      undefined is a variable that has been declared,but it doesn't have a value.
      ```

      

  - undeclared

    - definition

      ```
      undeclared is a variable that has never been declared anywhere.
      ```

- function expression

  - definition

    ```
    function expression is a function assigned as a value somewhere.(which is usually called first class value).
    ```

  - anoymous function expression

    - definition

      ```
      function expression without name
      ```

    - example

      ```javascript
      [arrow function expresssion]
      var ids = people.map(person=>person.id);
      
      ```

  - named function expression

    - definition

      ```
      function expresssion with descriptive name tells what they are doing .(advice:if possible,name all function expression)
      ```

    - example

      ```javascript
      var favoritebook=function(bookNames){     for(let bookname of bookNames){         if(bookname.includes("G")){             favoritebook.push(bookname);         }     } }
      ```

      

  - IFFEs

    - definition

      ```
      IFFEs means "Immediately Invoked Function Expression"
      
      it is used to collect a set of variables and protect them from encroaching upon an outer scope.
      ```

    - example 

      ```javascript
      var student = "Maggie";
      (function newstudent(){
          var student="Hey";
          console.log(student);
      })()
      console.log(teacher);
      ```

      

  - block scoping with let

    - definition

      ```
      it'is used to organize a set of variables in case of having these variables pollute the enclosing scope,the outer scope.
      ```

    - example

      ```javascript
      function pintfname(names,n){
          for(let i=0;i<n;i++){
              console.log(${names[i]});
          }
      
      }
      
      
      function printfall(first){
          {let second,third;
           second=first+1;
           third=first+2;
           first=first+second+third;
          }
          console.log(first);
      }
      ```

      

  - promise chains

    - definition 

      ```
      it's common in a lot of people's code base(especially when you use anonymous arrow functions).
      ```

    - example

      ```javascript
      getPerson()
      .then (person=>getData(person.id))
      .then (renderData);
      
      getPerson()
      .then(function getDataFrom(person){
          return getData(person.id);
      })
      .then(renderData);
               
      ```

#### closure

- definition

  ```
  it is used to remember value over time 
  ```

#### ________________________

#### this

- definition

  ```
  where the this keyword is pointing at determined by how the function was called.
  ```

- dynamic context

  - definition

    ```
    here,define a function and call it in a bunch of different ways,it's gonna end up having different this keywords every time.
    ```

- four rules

  - implicit binding rule

    ```javascript
    var workshop = {
        teacher:"Kyle",
        ask(question){
            console.log(this.teacher,question);
        },
    };
    
    workshop.ask("what is implicit binding?");
    ```

  - explicit bindimg rule 

    ```javascript
    function ask(question){
        console.log (this.teacher,question);
    }
    function otherClass(){
        var myContext = {
            teacher:"Suzy"
        };
        ask.call(myContext,"why");
    }
    ```

    

#### prototype

- definition

  ```
  it's an object where any instance are going to be linked to or delegated to.
  ```

- example

  ```javascript
  function workshop (teacher){
      this.teacher=teacher;  
  }
  workshop.prototype.ask=function(question){
      console.log(this.teacher,question);
  };
  var deepJS = new workshop("Maggie");
  var ractJS = new workshop("Hey");
  deepJS.ask("what are you doing?");
  reactJS.ask("Are you kidding me?");
  ```

#### class

- definition

  ```
  it is layered on top of the prototype system and gives us some syntax seen in class of java/C++.
  (advice:understand prototype system first,and then understand how that fits in this keyword)
  ```

- example

  ```javascript
  class workshop {
      constructor(teacher){
          this.teacher=teacher;
      }
      ask(question){
          console.log(this.teacher,question);
      }
  }
  var deepJS=new workshop ("Maggie");
  var ractJS=new workshop ("Hey");
  deepJS.ask("what happened?");
  reactJS.ask("what are you doing?");
  
  ```

  

## 1.4 practice in course 

#### first

```javascript
function myteacher(name,nickname,age){
    console.log(`
     My teacher is ${name},and his twitter is ${nickname}.He is ${age} years old.
`);
}
var teacher="Kyle Simon";
var twitter="getify";
var age=39;
myteacher(teacher,twitter,age);
```

#### second

```javascript
var friends = ["maggie","hey"];
console.log(friends.length);
console.log(friends[1]);
```

#### third

```javascript
var value=false;
if(value){
    console.log("yes");
}
else{
    console.log("no");
}
```

#### fourth

```javascript
var mylove=["yuzuru","kirito","pooph"];
while(mylove.length>0){
    let love=mylove.pop();
    console.log(`this is my love ${love}`);
}
```

#### fifth

```javascript
function callmyname(name){
    console.log(`
    call me ${name}~
`);
}
callmyname("Maggie");
```

#### sixth

```javascript
function plus(first,second){
    var result=first+second; 
    console.log(result);
}
var fact=plus(1,2);
console.log(fact);
```

#### exercise one

```javascript
var favoriteBooks = [];
function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`
    Favorite Books:${favoriteBooks.length};
    `);
  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(`   
        Favorite Books:${favoriteBooks[i]};
    `);
  }
}
addFavoriteBook("MT");
addFavoriteBook("MTT");
addFavoriteBook("MTTT");
addFavoriteBook("MTTT");
printFavoriteBooks();

```



#### exercise two (three pillars)

```javascript
class Bookshelf {   constructor() {     this.favoriteBooks = [];   }   addFavoriteBook(bookName) {     if (!bookName.includes("Great")) {       this.favoriteBooks.push(bookName);     }   }   printFavoriteBooks() {     console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);     for (let bookName of this.favoriteBooks) {       console.log(bookName);     }   } } function loadBooks(bookshelf) {   fakeAjax(BOOK_API, function onBooks(bookNames) {     for (let bookName of bookNames) {       bookshelf.addFavoriteBook(bookName);     }     bookshelf.printFavoriteBooks();   }); } var BOOK_API = "https://some.url/api"; var myBooks = new Bookshelf(); loadBooks(myBooks); // ***********************  // NOTE: don't modify this function at all function fakeAjax(url,cb) { 	setTimeout(function fakeLoadingDelay(){ 		cb([ 			"A Song of Ice and Fire", 			"The Great Gatsby", 			"Crime & Punishment", 			"Great Expectations", 			"You Don't Know JS" 		]); 	},500); } 
```



