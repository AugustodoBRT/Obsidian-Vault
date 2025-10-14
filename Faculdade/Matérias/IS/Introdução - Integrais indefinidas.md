---
materia: "[[Integração e Séries]]"
tipo: anotação
conteudo: Integrais Indefinidas
relacionados:
  - https://www.youtube.com/watch?v=M_xCxHcBdBo&t=1195s
tags:
  - estudo
  - faculdade
  - calculo
cssclasses:
  - daily
  - segunda-feira
---
#### Resumo:

O contrario de Derivada (antiderivada).

$\large F(x)=\frac{x^3}{3+5}$ e $\large G(x)=\frac{x^3}{3-12}$ são primitivas de $\large f(x)=x^2$ . Isso significa que, derivando as duas, viram a mesma f(x)

$F'(x)=\frac{3x²}{3}=x²$ e $\large G'(x)=\frac{3x²}{3}=x²$  

#### ex:

Determinar uma primitiva para $\large f(x) = \cos x$. (procurar uma função que derivada de o cos x)

#### resposta:

$\large F(x) = sen x + C$ pois derivadando seno se encontra o cosseno.

#### Forma de escrever:

$\large \int \cos u dx = senx + C$ 

#### Definição:

se $F(x)$ é a primitiva de $f(x)$, escreveremos $\large F(x) + C = \int f(x) dx$. 

### Propriedades:
$$I - \large \int k\cdot f(x)dx= k\cdot \int f(x)dx $$

$$II - \large \int(f(x)+g(x))dx = \int f(x)dx+\int g(x)dx$$$

#### ex:

- A) $\int 2\cdot senx\cdot dx$ 

	= $2\cdot \int senx\cdot dx$ = $2\cdot-\cos x+C$. Pois a derivada de -cosx é senx.

- B) $\large \int(e^x+x)\cdot dx$ 
	= $\int e^x+C + \int x+C$ = $e^x + \frac{x²}{2}+C$. (integral de $\large e^x$ é o proprio $\large e^x$, pois essa é a sua derivada.)

## Tabela de integrais imediatas.

![[Tabela Integrais Imediatas]]


#### exercicios:

- 1 - $\int \left( 4x²+3+x^{1/2} \right)dx$ - FORMULA USADA $\int u^ndu=\frac{u^{n+1}}{n+1}$

	$\int 4x²dx + \int 3dx +\int x^{1/2}dx$ 
	
	$\frac{4x³}{3} + \frac{3²}{2} + \frac{x^{1/2+1}}{\frac{1}{2}+1}+C$.

- 2 - $\int\left( 5\cdot \frac{tgx}{\cos x}+ \frac{1}{sen²x}dx \right)$. FORMULA USADA $\int \sec u\cdot tgu\cdot du=\sec u+C$ e $\int \csc²u\cdot du=-\cot\cdot u+C$ 

	$\int (5\cdot tgx\cdot\frac{1}{\cos x}+\csc²x)dx$
	
	$\int (5\cdot tgx\cdot \sec x+\csc²x)dx$
	
	$5\cdot\sec -\cot x +C$.


#### Para lembrar:

![[Trigonometria-base]]

---
