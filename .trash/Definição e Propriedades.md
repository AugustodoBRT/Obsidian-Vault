---
materia: "[[Integração e Séries]]"
relacionados:
  - Integrais indefinidas
tipo: conteudo
tags:
  - estudo
  - faculdade
  - calculo
cssclasses:
  - daily
---


---

#  Definição e Propriedades

#### **Resumo:**

Uma função $F$ é uma **primitiva** de $f$ em um intervalo $I$ se $F'(x) = f(x)$ para qualquer $x$ em $I$. 

---

## ✏️ Anotações Gerais

Para falar uma primitiva geral sobre um $F(X)$ usamos $f(X)+c$ sendo C uma constante arbitrária.

#### exemplo:

Determine uma primitida de $f(x)=senx$ que satisfaça $F(0)=3$.

#### solução:

como a derivada de $-\cos x$ é $sen x$, a primitiva geral é $F(x) = -\cos x + C$. pois fornece todas as primitivas possiveis seguindo a condição $F(0)=3$.

#### Fórmulas de primitivas, sendo k uma constante diferente de zero.

| Nº  | Função $f(x)$        | Primitiva geral $F(x)$                       | Nº  | Função $f(x)$                    | Primitiva geral  $F(x)$                                |
| :-: | :------------------- | :------------------------------------------- | :-: | :------------------------------- | :----------------------------------------------------- |
|  1  | $$x^n$$              | $$\frac{1}{n+1}x^{n+1} + C,\quad n \neq -1$$ |  8  | $$e^{kx}$$                       | $$\frac{1}{k}e^{kx} + C$$                              |
|  2  | $$\sin(kx)$$         | $$-\frac{1}{k}\cos(kx) + C$$                 |  9  | $$\frac{1}{x}$$                  | $$\ln\|x\|+C,x\neq_ {0}$$                              |
|  3  | $$\cos(kx)$$         | $$\frac{1}{k}\sin(kx) + C$$                  | 10  | $$\frac{1}{\sqrt{1 - k^2x^2}}$$  | $$\frac{1}{k}\sin^{-1}(kx) + C$$                       |
|  4  | $$\sec^2(kx)$$       | $$\frac{1}{k}\tan(kx) + C$$                  | 11  | $$\frac{1}{1 + k^2x^2}$$         | $$\frac{1}{k}\tan^{-1}(kx) + C$$                       |
|  5  | $$\csc^2(kx)$$       | $$-\frac{1}{k}\cot(kx) + C$$                 | 12  | $$\frac{1}{x\sqrt{k^2x^2 - 1}}$$ | $$\sec^{-1}(kx) + C,\quad kx > 1$$                     |
|  6  | $$\sec(kx)\tan(kx)$$ | $$\frac{1}{k}\sec(kx) + C$$                  | 13  | $$a^{kx}$$                       | $$\frac{1}{k\ln(a)}a^{kx} + C,\quad a > 0,\ a \neq 1$$ |
|  7  | $$\csc(kx)\cot(kx)$$ | $$-\frac{1}{k}\csc(kx) + C$$                 |     |                                  |                                                        |
