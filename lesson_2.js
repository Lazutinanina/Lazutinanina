// let item_1 = 5;
// console.log(item_1);

// let item_2 = 3;
// console.log(item_2);

// let item_3 = item_1 + item_2;
// console.log(item_3);

// let item_4 = "Yolochka";
// console.log(item_4);
// console.log(item_3 + " "+ item_4);
// console.log(item_3 * item_4);

// let item_5 = item_3;
// console.log(item_5);

// let item_6;
// let item_6_type;
// item_6 = 15;
// console.log(item_6);
// // Присвоить переменной item_6_type тип переменной item_6
// item_6_type = typeof(item_6);
// console.log(item_6_type);
// // Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
// console.log(item_6_type + " =item_6_type " + typeof(item_6) + " =item_6");

// // Создать переменную item_7 и в ней преобразовать item_6 в String.
// let item_7 = String(item_6);
// console.log(typeof item_7);

// // Создать переменную item_7_type
// // Присвоить переменной item_7_type тип переменной item_7
// let item_7_type = typeof(item_7);
// console.log(item_7_type);

// // Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
// console.log(item_7_type + " =item_7_type " + typeof(item_7) + " =item_7");

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// // Создать if в котором будите проверять значение переменной age_1
// if (age_1 < age_2) {
//     console.log("You don't have access cause your age is " + `${age_1}` + " It's less then")
// } 
// else if (age_1 >=  age_2 && age_1 <  age_3) {
//     console.log("Welcome  !")
// } 
// else if (age_1  > age_3) {
//    console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical wor")
// }

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

//  function checkAge(age){
//     let age_2 = 18;
//     let age_3 = 60;
//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then")
//     } 
//     else if (age >=  age_2 && age <  age_3) {
//         console.log("Welcome  !")
//     } 
//     else if (age  > age_3) {
//        console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical wor")
//     }    
// } 
// checkAge(17);
// checkAge(18);
// checkAge(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// function checkAge(age){
//     let age_2 = 18;
//     let age_3 = 60;
//     if (typeof(age) == "number") {
        
//         if (age < age_2) {
//             console.log("You don't have access cause your age is " + age + " It's less then")
//         } 
//         else if (age >=  age_2 && age <  age_3) {
//             console.log("Welcome  !")
//         } 
//         else if (age  > age_3) {
//            console.log("Keep calm and look Culture channel")
//         } else {
//             console.log("Technical wor")
//         }    
//     } else {
//         console.log("Not number");
//     }  
// } 
// checkAge('Nina');
// checkAge(18);
// checkAge(61);

// checkAge('2');
// checkAge('2a');


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// function checkAge(age){
//         let age_2 = 18;
//         let age_3 = 60;
//         age = Number (age);
//         if (! isNaN(age)) { // если не строка
        
//             if (age < age_2) {
//                 console.log("You don't have access cause your age is " + age + " It's less then")
//             } 
//             else if (age >=  age_2 && age <  age_3) {
//                 console.log("Welcome  !")
//             } 
//             else if (age  > age_3) {
//                console.log("Keep calm and look Culture channel")
//             } else {
//                 console.log("Technical wor")
//             }    
//         } else {
//             console.log("Not number");
//         }  
//     } 
//     checkAge('Nina');
//     checkAge(18);
//     checkAge(61);
//     checkAge('2');
//     checkAge('2a');
//     checkAge('a2');
//     checkAge("");

// function checkAge(age){
//         let age_2 = 18;
//         let age_3 = 60;

//         if(Number(age)){
//         age = Number(age);
//             if (age < age_2) {
//                 console.log("You don't have access cause your age is " + age + " It's less then")
//             } 
//             else if (age >=  age_2 && age <  age_3) {
//                 console.log("Welcome  !")
//             } 
//             else if (age  > age_3) {
//                console.log("Keep calm and look Culture channel")
//             } else {
//                 console.log("Technical wor")
//             }   
             
//     } else {
//                 console.log("Not number");
//             } 
// }

//     checkAge('Nina');
//     checkAge(18);
//     checkAge(61);
//     checkAge('2');
//     checkAge('2a');
//     checkAge('a2');
//     checkAge("");
//     checkAge(NaN);
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке 

let age = prompt("Введите ваш возраст?");

function checkAge(age){
       
        let age_2 = 18;
        let age_3 = 60;
            
        age = Number (age);
            if (! isNaN(age)) { // если не строка
            
                if (age < age_2) {
                    alert("You don't have access cause your age is " + age + " It's less then 18")
                } 
                else if (age >=  age_2 && age <  age_3) {
                    alert("Welcome!")
                } 
                else if (age  > age_3) {
                   alert("Keep calm and look Culture channel")
                } else {
                    alert("Technical wor")
                }    
            } else {
                alert("Not number");
            }  
        } 
       
(checkAge(age));
