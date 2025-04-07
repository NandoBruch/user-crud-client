# user-crud-client

Este é o repositório do cliente Front-end para uma aplicação de CRUD de usuários.

## Pré-requisitos

- **Node** >= v22.x
- **NestJs** instalado em sua máquina (versão recomendada para Next.js 15).
- **npm** instalado em sua máquina.

## Passo a Passo para Execução

1.  **Instalar as Dependências**

    Navegue até a pasta raiz do projeto (`user-crud-client`) e execute um dos seguintes comandos para instalar todas as dependências necessárias:

    **Com npm:**

    ```bash
    npm install
    ```

2.  **Configurar as Variáveis de Ambiente**

    Na raiz do projeto, crie um arquivo chamado `.env`. Dentro deste arquivo, você precisará definir as variáveis de ambiente necessárias para a aplicação.

    **Exemplo encontrado no arquivo `.env.sample`:**

3.  **Iniciar a Aplicação de Desenvolvimento**

    Após instalar as dependências e configurar o arquivo `.env.local`, você pode iniciar o servidor de desenvolvimento do Next.js com o seguinte comando:

    ```bash
    npm run dev

    ```

    Este comando inicia o servidor de desenvolvimento e geralmente abre a aplicação em seu navegador padrão (normalmente em `http://localhost:3000`).

## Usuário Padrão para Testes

Para facilitar o uso e testes iniciais da aplicação, um usuário padrão já foi criado no backend (assumindo que o backend esteja configurado com este usuário). Você pode utilizar as seguintes credenciais para acessar a aplicação inicialmente:

- **Nome de Usuário:** `admin@email.com`
- **Senha:** `admin`
