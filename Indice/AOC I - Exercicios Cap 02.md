---
tipo: Trabalho
titulo: AOC 01/25 - Exercicios Cap 02
data: 06/10/2025
relacionados:
  - "[[aula 13-10]]"
tags:
  - trabalho
  - faculdade
cssclasses:
  - daily
materia: "[[aula 13-10]]"
---
### AOC 01/25 - Exercicios Cap 02

==Nome: Augusto Oliveira da Silva==
==Matrícula: 20233004816==
==Professor: Bruno==
==Data: 06/01/25== 

#### 2.4

**Enunciado:** Para as instruções assembly do MIPS a seguir, qual é a instrução C correspondente? Suponha que as variáveis `f`, `g`, `h`, `i` e `j` sejam atribuídas aos registradores `$s0`, `$s1`, `$s2`, `$s3`, e `$s4`, respectivamente. Suponha também que o endereço de base dos arrays `A` e `B` estejam nos registradores `$s6` e `$s7`, respectivamente.

**Código assembly:**
```assembly

sll $t0, $s0, 2      
add $t0, $s6, $t0    
sll $t1, $s1, 2      
add $t1, $s7, $t1   
lw  $s0, 0($t0)      
addi $t2, $t0, 4    
lw  $t0, 0($t2)     
add $t0, $t0, $s0   
sw  $t0, 0($t1)      

```

**Resposta:**
```C
B[g] = A[f] + A[f+1];
```
#### 2.5

**Enunciado:** Para as instruções assembly do MIPS no Exercício 2.4, reescreva o código assembly para diminuir o número de instruções MIPS (se possível) necessárias para executar a mesma função.

**Código Original:**
```assembly
#9 instruções

sll $t0, $s0, 2      
add $t0, $s6, $t0    
sll $t1, $s1, 2      
add $t1, $s7, $t1   
lw  $s0, 0($t0)      
addi $t2, $t0, 4    
lw  $t0, 0($t2)     
add $t0, $t0, $s0   
sw  $t0, 0($t1)      
```
**otimizado:**
```assembly
# Supõe que $s0 já contém o deslocamento (f * 4)
# e $s1 já contém o deslocamento (g * 4).
#6 instruções

add $t0, $s6, $s0   
add $t1, $s7, $s1    

lw  $s0, 0($t0)      
lw  $t0, 4($t0)      

add $t0, $t0, $s0    
sw  $t0, 0($t1)      
```
#### 2.7

**Enunciado:** Mostre como o valor `0xABCDEF12` seria arrumado na memória de uma máquina **little-endian** e de uma máquina **big-endian**.  
Suponha que os dados sejam armazenados a partir do endereço `0`.

**Resposta:**

| **Little-Endian** |          | **Big-Endian** |          |
| :---------------: | :------: | :------------: | :------: |
|    **Address**    | **Data** |  **Address**   | **Data** |
|        12         |   `ab`   |       12       |   `12`   |
|         8         |   `cd`   |       8        |   `ef`   |
|         4         |   `ef`   |       4        |   `cd`   |
|         0         |   `12`   |       0        |   `ab`   |


#### 2.11

**Enunciado:**  Para cada instrução MIPS, mostre o valor dos campos de **opcode (OP)**, **registrador fonte (RS)** e **registrador de destino (RT)**.  
Para as instruções **tipo I**, mostre o valor do campo **imediato**; e para as instruções **tipo R**, mostre o valor do campo **de registrador de destino (RD)**

**Resposta:**

| **Instrução**       | **Tipo** | **Opcode** | **RS** | **RT** | **RD** | **Immed** |
|:--------------------|:--------:|:----------:|:------:|:------:|:------:|:---------:|
| `addi $t0, $s6, 4`  | I-type   | 8          | 22     | 8      | —      | 4         |
| `add $t1, $s6, $s0` | R-type   | 0          | 22     | 16     | 9      | —         |
| `sw $t1, 0($t0)`    | I-type   | 43         | 8      | 9      | —      | 0         |
| `lw $t0, 0($t0)`    | I-type   | 35         | 8      | 8      | —      | 0         |
| `add $s0, $t1, $t0` | R-type   | 0          | 9      | 8      | 16     | —         |
#### 2.12.1

**Enunciado:** Qual é o valor de `$t0` para o código assembly a seguir, dados os valores iniciais dos registradores?
```assembly
add $t0, $s0, $s1
```
**soma:**
```soma
  0x80000000
+ 0xD0000000 
----------------- 
0x150000000
```
**Resposta:**
```
Como só cabem 32 bits, descarta o bit extra: 0x50000000
```

#### 2.12.2

**Enunciado:** O resultado em $t0 é o resultado desejado ou houve
overflow?

**Resposta:** Houve **overflow**.

#### 2.12.3

**Enunciado:** Para o conteúdo dos registradores $s0 e $s1, conforme
especificado acima, qual é o valor de $t0 para o código assembly a seguir?
```assembly
sub $t0, $s0, $s1
```
**Cálculo**
```assembly
  0x80000000 (valor de $s0) 
+ 0x30000000 (valor de -$s1) 
  ----------------- 
  0xB0000000
```
**Resposta:**
```
O valor de $t0 após a execução da instrução é 0xB0000000.
```


#### 2.12.4

**Enunciado:** O resultado em $t0 é o resultado desejado ou houve
overflow?

**Resposta:** 
```
O resultado em $t0 é o resultado desejado.
```

#### 2.14

**Enunciado:** Forneça o tipo e a instrução em linguagem assembly para o seguinte **Valor Binário:** `0000 0010 0001 0001 1000 0000 0010 0000`

**Resposta:**
```assembly
Tipo: R-type
Instrução: add $s0, $s0, $s0
```

#### 2.16

**Enunciado:** Forneça o tipo, a instrução em linguagem assembly e a
representação binária da instrução descrita pelos seguintes campos MIPS:

**Campos MIPS:** `op=0`, `rs=3`, `rt=2`, `rd=3`, `shamt=0`, `funct=34`

**Resposta:**
```
Tipo: Tipo-R
Instrução Assembly: sub $v1, $v1, $v0
Representação Binária: 0000 0000 0110 0010 0001 1000 0010 0010
```

#### 2.17

Forneça o tipo, a instrução em linguagem assembly e a
representação binária da instrução descrita pelos seguintes campos MIPS:

**Campos MIPS:** `op=0x23`, `rs=1`, `rt=2`, `const=0x4`

**Resposta**
```
Tipo: Tipo-I
Instrução Assembly: lw $v0, 4($at)
Representação Binária: 1000 1100 0010 0010 0000 0000 0000 0100
```
#### 2.18

**Suponha que quiséssemos expandir o arquivo de registradores**
**MIPS para 128 registradores e expandir o conjunto de instruções para conter**
**quatro vezes o número de instruções atuais.**

#### 2.18.1

**Enunciado:** Como isso afetaria o tamanho de cada um dos campos de bit
nas instruções do tipo R?

**Formato Original:**

| Campo  | Bits |
| ------ | ---- |
| opcode | 6    |
| rs     | 5    |
| rt     | 5    |
| rd     | 5    |

**Analisar os registradores:**
```
Atualmente, MIPS possui 32 registradores → 5 bits para rs, rt, rd.  
Com 128 registradores → precisamos de 7 bits para cada registrador (2⁷ = 128).
```

 Analisar o opcode
```
Para conter 4× mais instruções → opcode precisa de 8 bits (2⁸ = 256).  
```

**Tipo:** R-type  
**Campos principais:**

| Campo  | Novo Tamanho |
| ------ | ------------ |
| opcode | 8 bits       |
| rs     | 7 bits       |
| rt     | 7 bits       |
| rd     | 7 bits       |

#### 2.18.2

**Enunciado:** Como isso afetaria o tamanho de cada um dos campos de bit
nas instruções do tipo I?

**Formato I original:**

|Campo|Bits|
|---|---|
|opcode|6|
|rs|5|
|rt|5|

 **Registradores:**
```
 Como no R, rs e rt precisam ser 7 bits para endereçar 128 registradores (2⁷ = 128).
```

 **Opcode:**
```
Para conter 4× mais instruções → opcode precisa de 8 bits (2⁸ = 256).  
```
**Conclusão para tipo I**

| Campo  | Novo tamanho |
| ------ | ------------ |
| opcode | 8 bits       |
| rs     | 7 bits       |
| rt     | 7 bits       |

#### 2.21

**Enunciado:** **Enunciado:** Forneça um conjunto mínimo de instruções MIPS que possa ser utilizado para implementar a seguinte pseudoinstrução: 

`not $t1, $t2 // bit-wise invert`

**Resposta:**
```
nor $t1, $t2, $zero
```

#### 2.25

A instrução a seguir não está incluída no conjunto de instruções do MIPS:
```assembly
rpt $t2, loop # se(R[rs] > 0) R[rs] = R[rs]-1, PC = PC + 4 + BranchAddr
```

#### 2.25.1

**Enunciado:** e essa instrução tivesse que ser implementada no conjunto
de instruções do MIPS, qual seria o formato de instrução mais apropriado?

**Resposta:** 
```
Instrução: rpt $t2, loop  
Formato mais apropriado: I-type  

Motivo: A instrução envolve um registrador e um endereço relativo de branch, assim como as instruções de salto condicional (`beq`, `bne`) do MIPS.
```

#### 2.39

**Enunciado:** Escreva o código assembly MIPS que cria a constante de 32
bits `0010 0000 0000 0001 0100 1001 0010 0100bin` e armazena esse valor
no registrador $t1.

**Resposta:**
```
Bits 31–16 (alto) → 0010 0000 0000 0001 → 0x2001   
Bits 15–0 (baixo) → 0100 1001 0010 0100 → 0x4924

lui $t1, 0x2001      # carrega 16 bits altos em $t1
ori $t1, $t1, 0x4924 # adiciona os 16 bits baixos
```
---

