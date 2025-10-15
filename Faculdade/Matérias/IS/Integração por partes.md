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

