let valores = [5,7, 9, 0, 6, 3]

console.log(valores)

/*for(let pos=0; pos < valores.length; pos++) 
{console.log(` a posição de ${pos} tem o valor de ${valores[pos]}`)}*/

for(let pos in valores) {console.log(` a posição de ${pos} tem o valor de ${valores[pos]}`)

}