---
materia: "[[AED I]]"
tipo: conteudo
cssclasses:
  - quarta-feira
  - daily
tags:
  - algoritmo
  - estudo
  - faculdade
  - java
---
#  Complexidade de Algoritmos


#### O que é?

Complexidade de [[Algoritmos]] é saber se o seu código ele é "bom" ou "ruim", se ele é rapido ou não e como saber se ele pode ficar mais rápido.

#### Por que é importante?

Para escrever códigos mais eficientes, prever o comportamento de um programa com grandes volumes de dados e comparar diferentes soluções para um mesmo problema.

---

## ✏️ Anotações Gerais

#### Pesquisa Binária

Uma [[Pesquisa Binária]] só pode ser utilizada se o que estivermos procurando estiver em uma lista ordenada. Porque se estiver em uma ordem aleatória não teria motivo pra utilizar esse algoritmo visto que ele não ajudaria em nada

#### Análise de Complexidade da Pesquisa Binária

A complexidade de tempo da Pesquisa Binária é **O(logn)**.

- **O que isso significa?** Significa que o número de operações (passos) não cresce na mesma proporção que o número de elementos (`n`). A cada passo, o algoritmo descarta metade dos dados.
    
- **Na prática:** Se você dobrar o número de elementos na lista, o número de passos para encontrar um item aumenta em apenas 1.
    
    - Para 8 itens, você precisa de no máximo 3 passos (2x3=8).
        
    - Para 1.024 itens, você precisa de no máximo 10 passos (2x10=1024).
        
    - Para os seus **10.000 itens**, o cálculo é log2​10000, que é aproximadamente 13.28. Por isso, seu algoritmo levou no máximo 14 passos (no seu caso, encontrou em 13).
        

Este desempenho de O(logn) é drasticamente melhor que a pesquisa simples, que tem uma complexidade de **O(n)** (tempo linear).
