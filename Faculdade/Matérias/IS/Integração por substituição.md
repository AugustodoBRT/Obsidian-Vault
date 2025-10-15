---
materia: "[[Integração e Séries]]"
tipo: anotação
conteudo: Integrais Indefinidas
relacionados: []
tags:
  - estudo
  - faculdade
  - calculo
cssclasses:
  - daily
  - segunda-feira
---
---
# Método da Substituição
---

Relembre a regra da cadeia:
![[Regra da Cadeia]]

Integrando:

$\int F'(g(x))\cdot g'(x)dx=F(g(x))+C$.

Trocando o $g(x)$ por u vou ter $F'(u)\cdot du=F(u)+C$ 

Sempre "enxergar" uma função u e sua derivada dentro da função.

#### exemplo:

#### A) $\int 6x²\cdot(2x³-1)^9⁹dx$.

```
observe que nesse exemplo, o que está dentro do parentese, derivando-a, encontra o 6x². Sendo assim, podemos utilizar o metodo da substituição
```

$u=2x³-1$

$\frac{du}{dx}=6u^2$ (SEMPRE ISOLAR O U)

$du=6x²dx$

Volta na integral agora:

$\int u⁹⁹\cdot du$ Agora conseguimos resolver utilizando a tabela de integrais imediatas(para relembrar [[Tabela Integrais Imediatas]])

$\frac{u¹⁰⁰}{100}+C$  Porém a resposta não pode ficar em U.

$\frac{(2x³-1)¹⁰⁰}{100} +C$. E esse é o resultado.

#### B) $\int sen²x\cdot \cos x dx$

```
senx é o U pois a derivada do sen é cos.
```

$u=senx$

$\frac{du}{dx}=\cos x$ então

$du=\cos x\cdot dx$

voltando na integral:

$\int u^2\cdot du$.

