---
materia: "[[AED I]]"
tipo: anotação
conteudo: "[[Complexidade de Algoritmos]]"
relacionados: []
tags:
  - estudo
  - faculdade
  - java
  - algoritmo
cssclasses:
  - daily
  - quarta-feira
---
A pesquisa binária (ou busca binária) ==é um algoritmo eficiente para encontrar um elemento em uma lista ordenada, que funciona dividindo repetidamente a lista ao meio e eliminando metade dos elementos restantes a cada comparação==. Ela compara o elemento buscado com o item do meio da lista; se forem diferentes, continua a busca na metade que pode conter o elemento, até que ele seja encontrado ou o espaço de busca se esgote.


#### Exemplo de código utilizando algoritmo de Busca Binária:

```java
  
public class PesquisaBinaria {  
    public static Integer pesquisaBinaria(int[] lista, int item) {  
        int baixo = 0;  
        int alto = lista.length - 1;  
  
        while (baixo <= alto) {  
            int meio = (baixo + alto) / 2;  
            int chute = lista[meio];  
  
            System.out.println("baixo: " + baixo + ", alto: " + alto + ", meio: " + meio + ", chute: " + chute);  
  
            if (chute == item) {  
                System.out.println("Encontrado!");  
                return meio;  
            }  
  
            if (chute > item) {  
                alto = meio - 1;  
            } else {  
                baixo = meio + 1;  
            }  
  
            // Pausa de 1 segundo para ver passo a passo  
            try {  
                Thread.sleep(1000);  
            } catch (InterruptedException e) {  
                e.printStackTrace();  
            }  
        }  
  
        System.out.println("Não encontrado.");  
        return null;  
    }  
  
    public static void main(String[] args) {  
        int[] minhaLista = new int[10000];  
  
   
        for (int i = 0; i < 10000; i++) {  
            minhaLista[i] = i + 1;  
        }  
  
        System.out.println(pesquisaBinaria(minhaLista, 3550));   
    }  
  
}
```

#### saida:

```java
baixo: 0, alto: 9999, meio: 4999, chute: 5000
baixo: 0, alto: 4998, meio: 2499, chute: 2500
baixo: 2500, alto: 4998, meio: 3749, chute: 3750
baixo: 2500, alto: 3748, meio: 3124, chute: 3125
baixo: 3125, alto: 3748, meio: 3436, chute: 3437
baixo: 3437, alto: 3748, meio: 3592, chute: 3593
baixo: 3437, alto: 3591, meio: 3514, chute: 3515
baixo: 3515, alto: 3591, meio: 3553, chute: 3554
baixo: 3515, alto: 3552, meio: 3533, chute: 3534
baixo: 3534, alto: 3552, meio: 3543, chute: 3544
baixo: 3544, alto: 3552, meio: 3548, chute: 3549
baixo: 3549, alto: 3552, meio: 3550, chute: 3551
baixo: 3549, alto: 3549, meio: 3549, chute: 3550
Encontrado!
3549
```

