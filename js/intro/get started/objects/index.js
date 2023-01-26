const student = {
    maths: 40,
    eng: 50,
    che: 30,
    phy: 60,
}
student["civic"] = 80
//creating dynamic objects

let age= 60, firstname = "john";

const ageobj = {
    age,
    firstname,
    testing(){
        console.log("hey!!!, I am working")
    }
}
//console.log(ageobj.testing)
console.log(ageobj);
console.log(ageobj.testing())
const anotherobj = {
    [firstname]: "this is the man"
}
console.log(anotherobj)
//accessing properties of an object
// D - B 
//D -> DOT(.)[PROPERTY ACCESSOR OPERATOR]
//B -> SQUARE BRACKETS
console.log(student.che)
console.log(student.eng)
console.log(student.maths)
console.log(student.phy)
ageobj.age
ageobj[age]
const haha = {
    gg: "double gg",
    hh:"double hh",
    ii: "double ii",
    jj:  jay = {
        gg:"heelloo",
        hh: "hheeeelllooo",
        kk: kay = {
            nn: nay = {
                yy: yay = {
                    zz: zay = {
                        haha: "console.log",
                        ahahaa: ahaha = {
                            rest: "rest",
                            inodeyrst: nonbro = {
                                rst: nope = {
                                    nope: nope = {
                                        nopr: nopr = {
                                            mpr: moneypowerrespect = {

                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    },
    kk: "nothing to say here bro",
};
console.log(haha.jj.kk.nn.yy.zz.ahahaa.inodeyrst.rst.nope.nopr.mpr)
//destructuring 
const{che} = student
console.log("hello world")

////modifying an object
const animalobj = {
    tail : 1,
    eyes: 2,
    test()  {
        console.log("testing")  
    }
}
//spread(..)
const animal = {
    ...animalobj,
    head: 1,
    legs: 4
}
console.log(animal)
animal.test()
//referencing in objects
const courses = {
    web: "php| sql| html",
    app: "java| dart| javascript"
}
const thecourse = {
    create: "this is how you create a list or something like that \nhello boy",
    NotCreate: "i am doing this again ",
}
    NowCreate:"haha"
const ref = courses
console.log(ref)
const defref = {...courses}
const dethecourse = {...thecourse}
const Dedethecourse = thecourse
console.log("%c hello world", "color:green")
console.log("%cthis is a message of red color", "color: red")
console.log("only the %c blue  is in blue color", "color:blue")
//alias in objects
const newage = 40;
const mynewvalue = "react"


const mynewobj = {
    mynewvalue, newage
}

//using alias to rename a variable[property- key]

const {newage: myothernewage} = mynewobj

//object methods
//object.keys()-> returns an array of keys in  object
//object.values() -> returns an array of values in th object
//object.entries() -> returns a multi-dimensional array of both the key and value

const myentries =  Object.entries(mynewobj);
const mykeys =  Object.keys(mynewobj);
const myvalues =  Object.values(mynewobj);
console.log("keys =", mykeys)
console.log("entries =", myentries)
console.log("values =", myvalues)
console.log(window)
// const name = prompt("enter your name")
// console.log(name)
// alert ("welcome!! "+ name)
console.table(mynewobj)
console.dir(mynewobj)
console.error("this is an error message")
let x = 5, y =6
let sumxy = x + y
console.log(sumxy)
console.info("")

console.group("numbers")
console.log(4)
console.log(5)
console.log(6)
console.groupEnd()
//if statements can be used to call the group#2, probably
console.group("letter")
console.log(4)
console.log(6)
console.groupCollapsed()
//console.clear()
console.log("this is my %c message", "color: green")
/*
console.table()
console.dir()
console.error
console.group()
console.info()
console.error()
console.warning()
*/