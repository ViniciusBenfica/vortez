<div align="center">
    <img src="assets/images/logo.png" width="300">
</div>

# Sobre o projeto
O objetivo do projeto é desenvolver um jogo interativo para um grupo de amigos. Nele, uma pessoa não conhece uma palavra secreta, enquanto as outras estão cientes dela. Durante o jogo, ocorrerá uma série de rodadas de perguntas relacionadas a essa palavra secreta. Ao final do jogo, todos os participantes devem votar em quem eles acham que não conhece a palavra. O desafio para quem conhece a palavra é identificar quem está por fora, enquanto a pessoa que não sabe deve tentar descobrir a palavra ou, ao menos, convencer os outros de que sabe.

## Pré-requisitos

O sistema foi desenvolvido utilizando a versão `20.11.1` do `Node.js` e a versão `8.15.5` do gerenciador de pacotes `pnpm`.

## Como rodar a aplicação

No terminal, clone o projeto:

```
git clone https://github.com/ViniciusBenfica/vortez.git
```

Instale as dependências:

```
pnpm intall
```

Caso queira rodar no navegador use o comando:

```
pnpm web
```

Para executar no emulador android use o comando:

```
pnpm android
```

## Testes

Os testes unitários foram implementados utilizando o Jest. Para executar os testes, utilize o comando:

```
pnpm test
```

## Imagens do projeto

<div align="center">
    <img src="assets/projectImages/start.png" width="200">
    <img src="assets/projectImages/players.png" width="200">
    <img src="assets/projectImages/word.png" width="200">
</div>