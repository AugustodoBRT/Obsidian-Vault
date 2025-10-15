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
# Método da Substituição
---

Relembre a regra da cadeia:
![[Regra da Cadeia]]

Integrando:

$\int F'(g(x))\cdot g'(x)dx=F(g(x))+C$.

Trocando o $g(x)$ por u vou ter $F'(u)\cdot du=F(u)+C$ 

Sempre "enxergar" uma função u e sua derivada dentro da função.

---

#### exercicios:

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

---

#### B) $\int sen²x\cdot \cos x dx$

```
senx é o U pois a derivada do sen é cos.
```

$u=senx$

$\frac{du}{dx}=\cos x$ então

$du=\cos x\cdot dx$

voltando na integral:

$\int u^2\cdot du$ 

$\frac{senx³}{3} +C$ Resultado já aplicando a integral imediata.

---

#### C) $\int \frac{2x}{1+x²} dx$

```
1+x² será o U pois derivando se encontra 2x (que está na integral)
```

$u=1+x²$

$\frac{du}{dx} = 2x$ então

$du=2x\cdot dx$

Voltando na integral:

$\int \frac{du}{u}$

```Integral Imediata
De acordo com a tabela de Integrais imediatas
du/u = ln u + C
```

$\ln 1+x² +C$.

```DICA
Sempre que for uma fração e a derivada do de baixo aparece em cima, sempre vai ser ln devido a tabela de integral imediata
```

#### D) $\int \cos(x+7)dx$

```
O cos não pode ser nosso u porque não tem nenhum -sen na expressão, logo vai ter que ser o (x +7) que da 1, o número 1 ta implicito na expressão, visto que pode ser 1.dx, logo ele sera nosso u.
```

$u=x+7$

$\frac{du}{dx}=1$ então

$du=1\cdot dx$

voltando na integral:

$\int \cos(u)du=sen u+C$ 

subsituindo:

$sen\cdot (x+7) +C$ 

#### E) $\int tg(x+2)dx$ =ERREI

```
mesma coisa, (x+2) será o u, pois da 1 e derivada de tg não se encontra na expressão.
```

$u=x+2$

$du=1\cdot dx$

voltando na integral:

$\int tg(u)du$

