---
cssclasses:
  - daily
  - quarta-feira
tipo: caderno
materia: "[[AED I]]"
titulo: AEDI
relacionados:
  - "[[LAED I|LAED I]]"
tags:
  - estudo
  - faculdade
  - algoritmo
  - java
---
---
# Algoritmos e Estruturas de Dados I

---

## Sumário

- [[#^prova1|Prova 1]]
  - [[#^complexidade|Complexidade de Algoritmos]]
  - [[#^analise-assintotica|Análise Assintótica]]
  - [[#^recursao-e-recorrencias|Recursão e Equações de Recorrência]]
- [[#^prova2|Prova 2]]
  - [[#^listas-e-tads|Listas e Tipos Abstratos de Dados]]
- [[#^prova3|Prova 3]]
  - [[#^ordenacao-e-hash|Ordenação e Tabelas Hash]]

---

#  Prova 1 ^prova1

#### Complexidade de Algoritmos ^complexidade

notas: [[Complexidade de Algoritmos]]
- **Resumo:**  
  - Conceito de complexidade de tempo e espaço.  
  - Contagem de operações básicas (comparações, atribuições, laços).  
  - Diferença entre melhor, pior e caso médio.  
- **Palavras-chave:** `complexidade`, `eficiência`, `tempo de execução`, `espaço`, `iteração`.  
- **Exemplos:**  
  - Laço simples → O(n)  
  - Laço duplo → O(n²)  
  - Função com operações constantes → O(1)

---

#### Análise Assintótica ^analise-assintotica

notas: [[Análise Assintótica]]
- **Resumo:**  
  - Uso das notações **O**, **Ω** e **Θ** para medir o crescimento da função.  
  - Comparação de funções com base na taxa de crescimento.  
- **Palavras-chave:** `Big O`, `Ômega`, `Teta`, `análise assintótica`, `ordens de crescimento`.  
- **Exemplos:**  
  - O(n): linear  
  - O(n²): quadrática  
  - O(log n): logarítmica  
  - Θ(n): crescimento exato  

---

#### Recursão e Equações de Recorrência ^recursao-e-recorrencias
- **Resumo:**  
  - Conceito de **função recursiva** e **caso base**.  
  - Modelagem da complexidade com **equações de recorrência**.  
  - Métodos de resolução:
    - **Substituição**
    - **Iteração**
    - **Teorema Mestre**
- **Palavras-chave:** `recursão`, `recorrência`, `Teorema Mestre`, `divisão e conquista`, `análise recursiva`.  
- **Exemplos:**  
  - `T(n) = 2T(n/2) + n` → O(n log n) (Ex: Mergesort)  
  - `T(n) = T(n-1) + 1` → O(n)  
  - `T(n) = 9T(n/9) + n²` → O(n²)

---

##  Prova 2 ^prova2

#### Listas e Tipos Abstratos de Dados ^listas-e-tads
- **Resumo:**  
  - Conceito de **TAD (Tipo Abstrato de Dado)**.  
  - Implementações de **listas lineares**, **listas encadeadas** e **alocação dinâmica**.  
- **Palavras-chave:** `TAD`, `lista`, `nó`, `ponteiro`, `alocação dinâmica`.  
- **Exemplos:**  
  - Inserção e remoção em lista encadeada.  
  - Uso de ponteiros `next` e `prev`.

---

##  Prova 3 ^prova3

#### Ordenação e Tabelas Hash ^ordenacao-e-hash
- **Resumo:**  
  - Algoritmos de ordenação: bolha, seleção, inserção, shellsort, quicksort, heapsort.  
  - Estrutura de **tabela hash** e **funções de hashing**.  
- **Palavras-chave:** `ordenação`, `hash`, `busca`, `intercalação`, `heapsort`.  
- **Exemplos:**  
  - `BubbleSort` → O(n²)  
  - `QuickSort` → O(n log n)  
  - `HashTable` com encadeamento separado.


Referências:
```dataview
TABLE autor AS "Autor", Páginas
FROM ""
WHERE contains(file.tags, "algoritmo") AND contains(file.tags, "livro")
SORT autor ASC
```

