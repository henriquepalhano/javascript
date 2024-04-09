function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')

     if (inicio.value.lenght == 0 || fim.value.lenght==0 || passo.value.lenght==0)  
     res.innerHTML = 'impossivel contar'
     else {
    res.innerHTML = 'contando.. <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value) 
    if (p<=0)
    {window.alert('passo invalido, considerando passo 1')
         p= 1     }
         if (i < f)
     {for(let c = 1; c<=f; c+=p) {
        res.innerHTML += `${c}  \u{1F604}` } }
         for(let c = 1; c<=f; c +=p ) {
         else { for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{if449}`
         }}
}       res.innerHTML += '\u{1f3c1}'
    }   
        } 
    