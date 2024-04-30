// while(i < 10){
//     texto += "O numero é " + i;
//     i++;
// }


// let count = 0;
// do {
//     console.log(count);
//     count++;
// }while (count < 6)

// var i = 0;

// while ( i < 10 ){
//     console.log(i);
//     i++;
// }
// do{
//     console.log(i);
//     i++;
// }while(i < 10)

// function calcular(){

//     var numero = document.getElementById('num1').value;
    
//     while(numero>0){
//         console.log(numero);
//         numero--;
//     }
// }

// for(i=0; i<=10; i++){
//     console.log(i);
// }

// function calcular(){
// var numero = document.getElementById('num').value

// for(i=0; i<=10; i++){
//     console.log(`${i} x ${numero} = ${i*numero}`)
// }
// }

function calcular(){

    var numero = document.getElementById('num').value

    for(i=0; i < numero; i++){
    resultado = numero % i;
    if (resultado == 0){;
    console.log(i);
    }
}
}