///////////////////////////////////////////
///            Desafio                  ///
///////////////////////////////////////////

const inventores = [

  { nome: 'Albert', sobrenome: 'Einstein', nasc: 1879, morte: 1955 },                       
  { nome: 'Isaac', sobrenome: 'Newton', nasc: 1643, morte: 1727 },                              
  { nome: 'Galileo', sobrenome: 'Galilei', nasc: 1564, morte: 1642 },                       
  { nome: 'Marie', sobrenome: 'Curie', nasc: 1867, morte: 1934 },                    
  { nome: 'Johannes', sobrenome: 'Kepler', nasc: 1571, morte: 1630 },                         
  { nome: 'Nicolaus', sobrenome: 'Copernicus', nasc: 1473, morte: 1543 },                       
  { nome: 'Max', sobrenome: 'Planck', nasc: 1858, morte: 1947 }                                

]

// Questão 1 -  Usando filter()
// Filtre a lista de inventores para mostrar aqueles que nasceram somente nos anos de 1500:

const inventoresAno = inventores.filter(function (inventor) {
  return inventor.nasc >= 1500 && inventor.nasc < 1600;
});
console.log(inventoresAno);


// Questão 2 - Usando map()
// Retorne um array com o nome e sobrenome dos inventores:

const nomesCompletos = inventores.map(function (inventores) {
  return `${inventores.nome} ${inventores.sobrenome}`;
});
console.log(nomesCompletos);


// Questão 3 - Usando sort()
// Ordene os inventores pela idade que tinha quando morreu, do mais velho para o mais novo

const inventoresOrdenados = inventores.sort(function(a,b){
  if ((a.morte - a.nasc) < (b.morte - b.nasc))
   return 1;
  if ((a.morte - a.nasc) > (b.morte - b.nasc))
   return -1;
});
console.log(inventoresOrdenados);


// Questão 4 - Usando reduce()
// Qual a quantidade total de anos que todos os inventores viveram (soma de todas as idades)

const soma = inventores.reduce(function (acumulado, item) {
  return acumulado + (item.morte - item.nasc)
}, 0);
console.log(soma);


