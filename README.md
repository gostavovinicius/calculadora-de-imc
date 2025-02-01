# Calculadora de IMC

Uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) e exibir sua classificação, utilizando HTML, CSS e JavaScript.

![Calculadora de IMC](https://i.imgur.com/3NhymsD.png)

## Sobre o Projeto

Este projeto consiste em uma calculadora de IMC que permite ao usuário inserir seus dados de **altura** e **peso** para calcular o IMC e receber uma classificação de acordo com a tabela padrão. Caso o IMC esteja fora do intervalo normal, são exibidas dicas para a melhoria do resultado (em telas maiores que 1024px).

O projeto foi desenvolvido com foco em responsividade e usabilidade, adaptando a interface para diferentes tamanhos de tela.

## Funcionalidades

- **Cálculo do IMC:** Realiza o cálculo do IMC a partir dos valores informados.
- **Classificação:** Informa a classificação do IMC, que pode ser:
  - Magreza
  - Normal
  - Sobrepeso
  - Obesidade grau I
  - Obesidade grau II
  - Obesidade grau III
- **Exibição de Dicas:** Exibe sugestões para melhorar o IMC quando o valor estiver fora da faixa normal (em telas maiores).
- **Validação de Dados:** Verifica se os valores inseridos estão dentro dos intervalos esperados:
  - Altura entre 0 e 2.20 metros.
  - Peso entre 0 e 200 kg.
- **Responsividade:** Layout adaptável para dispositivos móveis e telas maiores.

## Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação.
- **CSS3:** Estilização e responsividade.
- **JavaScript:** Lógica de cálculo e interatividade.
