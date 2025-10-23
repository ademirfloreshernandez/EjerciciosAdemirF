let medida_pecho, medida_cintura, medida_cadera, medida_pies, medida_peso, medida_libs;
let medida_pulg1, medida_pulg2, medida_pulg3, medida_mtrs;

medida_pecho = 89;
medida_cintura = 58;
medida_cadera = 89;
medida_mtrs = 1.70;
medida_peso = 53;

medida_pulg1 = medida_pecho * 0.394;
medida_pulg2 = medida_cintura * 0.394;
medida_pulg3 = medida_cadera * 0.394;
medida_pies = medida_mtrs * 3.28084;
medida_libs = medida_peso * 2.205;

console.log("Altura en pies: " + medida_pies);
console.log("Peso en libras: " + medida_libs);
console.log("Medidas en pulgadas pecho " + medida_pulg1);
console.log("Medidas en pulgadas cintura " + medida_pulg2);
console.log("Medidas en pulgadas cadera " + medida_pulg3);
