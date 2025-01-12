# Projeto Patrocar

Este repositório contém o código-fonte desenvolvido para a atividade "Patrocar", proposta pelo Professor Rogério Silva. O objetivo do projeto é implementar funcionalidades relacionadas à gestão de montadoras de automóveis.

## Estrutura do Projeto

O código-fonte está organizado na pasta `src/`:

* `patrocar_app.js`: Arquivo principal da aplicação, responsável pela execução do programa.
* `patrocar_utils.js`: Funções utilitárias específicas para a lógica de negócio do Patrocar.
* `utils.js`: Funções auxiliares genéricas.


## Dependências

O projeto utiliza as seguintes bibliotecas:

* `readline-sync`:  Para leitura de dados do usuário via terminal.
* `ulidx`: Para geração de IDs únicos.

## Instalação

Para instalar as dependências, execute o seguinte comando no terminal, dentro da pasta raiz do projeto:

```bash
npm install readline-sync ulidx
```

## Execução

Após a instalação das dependências, o projeto pode ser executado com o Node.js:

```bash
node src/patrocar_app.js
```
