function carregar(){
msg = window.document.getElementById("msg")
img = window.document.getElementById("foto")
data = new Date
hora = data.getHours()
msg.innerHML = `agora são ${hora} horas`

if (hora >= 0 && hora <= 12){
// bom dia.
img. src = 'manga'
document.body.style.background = '#e2cd9f }
else if (hora > 12 && hora <= 18){
// boa tarde.
img.src = 'tarde'
document.body.style.backgroun = '#b9846f'}
else if{
// boa noite
img.src = 'pexels-alex-andrews-861443'
document.body.style.background = '515154' }
}
