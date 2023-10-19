````markdown
# DompixelBlog

Bem-vindo ao DompixelBlog, um projeto de blog simples construído com Next.js. Este aplicativo permite que você crie, leia e visualize postagens de blog. Ele também inclui recursos adicionais, como autenticação básica, pesquisa e estilização usando a biblioteca Mantine.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dificuldades](#dificuldades)

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js: [Baixar Node.js](https://nodejs.org/)
- npm (Node Package Manager): Normalmente é instalado com o Node.js
- Git: [Baixar Git](https://git-scm.com/)

## Instalação

1. Instale as dependências:

   ```bash
   npm install
   ```

## Como Usar

2. Inicie o servidor `json-server` para a API falsa:

   ```bash
   npm run server
   ```

3. Inicie o aplicativo Next.js:

   ```bash
   npm run dev
   ```

4. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

O DompixelBlog oferece as seguintes funcionalidades:

- Visualização de postagens de blog na página inicial.
- Leitura de postagens detalhadas em páginas individuais.
- Criação de novas postagens de blog com título, conteúdo e imagem de capa.
- Autenticação básica (Bônus): os usuários podem fazer login antes de criar postagens.
- Pesquisa (Bônus): os usuários podem procurar postagens por título ou conteúdo.
- Estilização atraente e responsiva usando Mantine.

## Dificuldades

Durante o desenvolvimento do DompixelBlog, enfrentamos algumas dificuldades que gostaria de compartilhar. Foi importante superar esses desafios para tornar este projeto uma realidade:

1. **Roteamento e Navegação:** Tive algumas dificuldades na configuração inicial do roteamento e da navegação entre páginas. A abordagem baseada em rotas do Next.js exigiu um tempo para compreender completamente.

2. **Integração com json-server:** A integração com o json-server para simular uma API falsa também me apresentou desafios. Lidar com solicitações HTTP e garantir que os dados fossem recuperados corretamente foi um ponto de dificuldade.

3. **Estilização Responsiva:** Mesmo com o uso do Mantine, a criação de um layout responsivo que funcionasse em diferentes tamanhos de tela demandou tempo e ajustes.

4. **Funcionalidades Bônus:** A implementação das funcionalidades de autenticação, pesquisa e animações (bônus) provou ser um desafio adicional. Essas tarefas mais complexas exigiram um conhecimento mais profundo.

No entanto, considero que enfrentar essas dificuldades fez parte do processo de aprendizado e aprimoramento. Cada desafio superado foi uma oportunidade de crescimento. Encarei essas dificuldades como parte do processo de desenvolvimento e estou continuamente melhorando o DompixelBlog.
````
