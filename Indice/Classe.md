---
Data: 2024-06-18
---
# O que é uma classe em Java?

Uma classe em Java é uma estrutura fundamental que define um tipo de objeto. Ela serve como um modelo ou plano para criar objetos que compartilham características comuns.

## Sintaxe de declaração de uma classe:

```java

public class MinhaClasse {

  // Campos (variáveis de instância)

  // Construtores

  // Métodos

}

```

## Campos (variáveis de instância):

- Campos são variáveis que armazenam dados específicos de uma instância da classe.

- Eles são declarados na classe e podem ter diferentes tipos de dados, como int, String, etc.

## Construtores:

- Construtores são métodos especiais usados para criar objetos da classe.

- Eles têm o mesmo nome da classe e podem ter parâmetros para inicializar os campos.

## Métodos:

- Métodos são funções definidas na classe que executam ações ou fornecem funcionalidades específicas.

- Eles podem ser chamados em objetos da classe usando a notação de ponto.

## Método main():

- A classe Java deve ter um método main() para ser executada como um programa independente.

- É o ponto de entrada para o programa Java.

## Encapsulamento:

- Java suporta encapsulamento, que é a prática de ocultar detalhes internos da classe e expor apenas métodos seguros e campos.

- Isso é feito usando modificadores de acesso como public, private e protected.

## Herança:

- No Java, é possível criar novas classes com base em classes existentes usando o conceito de herança.

- Isso permite que as classes derivadas herdem campos e métodos da classe base.

## Polimorfismo:

- Polimorfismo permite que objetos de diferentes classes sejam tratados como objetos da mesma classe base.

- Isso é alcançado por meio de herança e interfaces.

## Exemplo de Classe em Java:

```java

public class Pessoa {

  // Campos

  private String nome;

  private int idade;

  // Construtor

  public Pessoa(String nome, int idade) {

    this.nome = nome;

    this.idade = idade;

  }

  // Métodos

  public void saudacao() {

    System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

  }

  public static void main(String[] args) {

    Pessoa pessoa1 = new Pessoa("João", 30);

    pessoa1.saudacao();

  }

}

```