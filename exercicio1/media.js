var nota1, nota2, nota3, media;    
nota1=parseFloat(prompt("Escreva sua primeira nota"))
nota2=parseFloat(prompt("Escreva sua segunda nota"))
nota3=parseFloat(prompt("Escreva sua terceira nota"))
media =((nota1 + nota2 + nota3) / 3);
window.alert("Sua média é de " + media)
if(media>=60)
{
    window.alert("Você está aprovado")
}
else if(media<60)
{
    window.alert("Você está reprovado")
}
