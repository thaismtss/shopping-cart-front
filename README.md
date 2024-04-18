# Shopping Cart Front

Projeto em NextJS que implementa uma vitrine e uma página de carrinho com o fluxo de adicionar items, alterar quantidade e excluir produtos

## Stack utilizada

NextJs, React, Chakra UI, Typescript

## Rodando localmente

Siga estas etapas para executar o projeto em sua máquina local:

1. **Clone o Repositório:**

Abra o terminal e execute o seguinte comando para clonar o repositório do GitHub:

```bash
  git clone git@github.com:thaismtss/shopping-cart-front.git
```

2. **Crie a Rede Docker:**

Se ainda não tiver sido feito, crie a rede Docker executando o seguinte comando:

```bash
docker network create -d bridge app-network
```

2. **Execute os Comandos:**

Navegue até o diretório do projeto clonado e execute os seguintes comandos:

```bash
  cp ./.env.example ./.env && docker compose up -d
```

Acesse a aplicação em: http://localhost:3000

## Rodando os testes

Execute os testes com o camando:

```bash
  docker exec shopping-cart-front yarn test
```

## Referência

- [Fake Store Api](https://fakestoreapi.com/docs)
- [Chakra UI](https://v2.chakra-ui.com/getting-started)
- [Next.js](https://nextjs.org/docs)
