function suma(){

    let suma=0;

    for(let i =1; i <=20; i+=2) {
    if (i % 2 !=0) {


        suma+= i;
    }
}
 return suma;
}
console.log ("la suma de numeros impares " + suma());
