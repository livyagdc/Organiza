
# Organiza

Organiza é uma aplicação web desenvolvida com o objetivo de ajudar os usuários a organizar suas finanças de maneira eficiente e prática. Com recursos como gerenciamento de receitas e despesas, definição de metas orçamentárias, rastreamento de investimentos e notificações, o Organiza oferece uma solução completa para quem deseja ter controle financeiro.

## Funcionalidades

- **Cadastro e Login de Usuários**: Criação de contas seguras com validação de e-mail e senha.
- **Painel Principal**: Visão geral das finanças e acesso a relatórios detalhados.
- **Cashflow**: Gerenciamento de receitas e despesas, com opções de edição e exclusão.
- **Orçamento**: Definição de metas financeiras e alertas para quando os limites forem ultrapassados.
- **Investimentos**: Rastreamento e cálculo de crescimento de investimentos, com opções pré-definidas como Tesouro Direto, CDB, LCI/LCA, entre outros.
- **Notificações**: Sistema de lembretes para pagamentos e eventos importantes.
- **Design Responsivo**: Experiência fluida em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Front-end**: [Next.js](https://nextjs.org/)
- **Estilização**: CSS Modules e bibliotecas complementares.
- **Banco de Dados**: MySQL.
- **Autenticação**: Implementação segura com validação de usuário.
- **Deploy**: Realizado com [Render](https://render.com/).

## Estrutura do Projeto

### Páginas
1. **Registro e Login**: Interface para autenticação e criação de contas.
2. **Painel Principal**: Resumo financeiro e gráficos.
3. **Cashflow**: Gerenciamento de receitas e despesas.
4. **Orçamento**: Interface para definição de metas.
5. **Investimentos**: Controle e acompanhamento de investimentos.
6. **Configurações de Notificações**: Personalização de lembretes e alertas.

### Design
- Prototipado com [Figma](https://www.figma.com/proto/f4upQT7gBnha1pQeM18vQ2/Organiza?node-id=0-1&t=oNgpa6bCdTDyG2Ge-1).
- Segue princípios de um design system.

## Requisitos de Instalação

1. Certifique-se de ter o Node.js e o MySQL instalados.
2. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/organiza.git
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Configure o banco de dados no arquivo `.env`:
   ```env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/organiza"
   ```
5. Execute as migrações do Prisma para criar as tabelas no banco de dados:
   ```bash
   npx prisma migrate dev
   ```
6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
7. Inicie o build:
  ```bash
  npm run build
  ```
8. Encerre o terminal do npm run dev e inicie:
  ```bash
  npm start
  ```

## Links Importantes

- **Deploy**: [https://organiza.onrender.com](https://organiza.onrender.com)
- **Design no Figma**: [Organiza no Figma](https://www.figma.com/proto/f4upQT7gBnha1pQeM18vQ2/Organiza?node-id=0-1&t=oNgpa6bCdTDyG2Ge-1)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. 
