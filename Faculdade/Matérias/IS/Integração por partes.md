---
materia: "[[Integração e Séries]]"
tipo: anotação
conteudo: Integrais Indefinidas
relacionados:
  - "[[Introdução - Integrais indefinidas]]"
tags:
  - estudo
  - faculdade
  - calculo
cssclasses:
  - daily
  - segunda-feira
---

---
# Integração por Partes
---
Integração Por partes está relacionada diretamente a regra do produto em derivada.

Para relembrar:
![[Regra do Produto]]

Se integrar tudo

$\int(u\cdot v)'=\int v\cdot du+\int u\cdot dv$

isolar $\int u\cdot dv$

$u\cdot v-\int v\cdot du$

ficando:

$$\int u\cdot dv=u\cdot v-\int v\cdot du$$
Virando a formula de Integração por partes.

Para realizar os exercicios, eu tenho que pensar que, quem eu escolher para ser o u, eu preciso saber o du.

E no caso quando escolher o dv tenho que pensar que vou precisar integrala, então se for muito dificil já nao escolho ela.

#### exercicios:

#### A) $\int x\cdot e^xdx$

```
posso escolher o u sendo x ou e^x, porém, é mais interessante ser o x pois derivando o x vira 1 e derivando e^x continua a mesma coisa, e para ser o dv compensa mais escolher o e^x, pois vou ter que derivala e iria continuar a mesma coisa enquanto se eu escolhesse o x para ser o dv, derivando ela seria x²/2, apenas dificultando a conta.
```

$u=x$

$du=1\cdot dx$

$v=e^x$

$dv=e^xdx$

Jogando na formula -> $\int u\cdot dv=u\cdot v-\int v\cdot du$

$\int x\cdot e^xdx=x\cdot e^x-\int e^x\cdot dx$

$x\cdot e^x-e^x+c$

#### B) $\int \ln xdx$

```
quando tiver so uma expressão assim, é so pagar de doido e imaginar que ta sendo multiplicado por 1 entao seria 1.lnxdx

o dv poderia ser o 1 e o u poderia ser o lnx (pois derivade de lnx é 1/x)
```

"Reescrevendo" -> $\int 1\cdot \ln xdx$

$u=\ln x$

$du=\frac{1}{x}dx=\frac{dx}{x}$

$dv=1dx$

$v=x$

Jogando na Formula $\int u\cdot dv=u\cdot v-\int v\cdot du$

$\int 1\cdot \ln xdx=\ln x\cdot x-\int x\cdot \frac{dx}{x}$

$=x\cdot \ln x-\int dx$

$=x\cdot \ln x-x +C$ 

#### C) $\int x\cdot sen(5x)dx$

```
melhor o u ser o x pois a derivada dele é 1 e o dv ser o sen(5x) pois a integral dele é -cos(5x)
```

$u=x$

$du=1dx$

$dv=sen(5x)dx$

$v=-\cos(5x)$ ERRADO, corrigir depois

Jogando na Formula -> $\int u\cdot dv=u\cdot v-\int v\cdot du$

$\int x\cdot sen(5x)dx=x\cdot-\cos(5x)-\int-\cos(5x)\cdot dx$

$=x\cdot-\cos(5x)-sen(5x)\cdot x$

$x²\cdot-\cos(5x)-sen(5x)+C$ 


