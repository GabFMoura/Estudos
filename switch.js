var nome = prompt('Qual o seu nome?')
var altura = prompt('Qual a sua altura em centímetros?')
var peso = prompt('Qual o seu peso em quilos?')
peso = parseFloat(peso)
altura = parseFloat(altura)
altura = altura/100
calculo = peso/(altura*altura)

var classificacao = 'Empty'

switch (calculo) {
 case (calculo < 16):
   var classificacao = 'Baixo peso muito grave'
   break

case (calculo >= 16 && calculo < 17):
   var classificacao = 'Baixo peso grave'
   break

case(calculo >= 17 && calculo < 18,5):
   var classificao ='Baixo peso'
   break

case (calculo >= 18,5 && calculo < 25):
   var classificacao = 'peso normal';
   break

case (calculo >= 25 && calculo < 30):
   var classificacao = 'sobrepeso'
   break

case (calculo > 30):
   var classificacao = 'obeso'
}

document.write(nome + ', você possui índice de massa corporal igual a ' + calculo + ', sendo classificado como: ' + classificacao)