# Reserva BP API

O Reserva BP é um aplicativo desenvolvido para otimizar a gestão de atendimentos e planos da Bem Protege, facilitando a interação entre Corretores de Seguro e Clientes.

[documentação](https://app.swaggerhub.com/apis-docs/JoaoDutra/reserva-bp/1.0.0)

## Tecnologias Utilizadas

- TypeScript
- Docker
- Bcrypt
- Chalk
- Express
- Gulog
- Helmet
- JSON Web Token (JWT)
- MongoDB
- Swagger

## Funcionalidades da Aplicação

### Autenticação com JWT
- Mecanismo de autenticação seguro utilizando JSON Web Tokens (JWT).

### Gerenciamento de Usuários
- CRUD completo para usuários, permitindo criar, deletar, ler e atualizar informações.
- Listagem de todos os usuários, podendo ser filtrada por cargo ou visualização geral.
- Login e cadastro de novos usuários.

### Gerenciamento de Histórico
- Operações de leitura e criação de históricos associados a eventos específicos.

### Gerenciamento de Agenda
- CRUD para agendas, possibilitando criar, deletar, ler e atualizar informações.
- Listagem da agenda pessoal de corretores.

### Funcionalidades Adicionais
- Tratamento de erros (error handler).
- Manipulação de requisições (request handler).
- Configuração do container Docker.
- Rotas divididas por controller e service.
- Suporte para HTTPS (opcional).
- Arquivo de configuração geral da API.
- Ambientes de produção e desenvolvimento.
- Registro de logs de requisições.
- Criptografia de dados sensíveis.

## Rodando o Container Docker

### Guia de Instalação do Docker
[Guia de Instalação Docker](https://docs.docker.com/desktop/install/windows-install/)

Clone o projeto

```bash
git clone https://github.com/DARKnx/bp-agenda-api.git
```

Entre no diretório do projeto

```bash
cd bp-agenda-api
```

Crie a imagem do Docker

```bash
npm run docker:build
```

Inicie o container

```bash
npm run docker:run
```

## Apresentação do Projeto

[Assista à apresentação no YouTube](https://youtu.be/nWphD52Loik)

## Frontend

O frontend do projeto está disponível em [reserva-bp](https://github.com/DARKnx/bp-agenda).

## Autor

- [@darknx](https://www.github.com/darknx)