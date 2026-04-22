# NTFY React Explorer 🚀

Uma interface web moderna desenvolvida com **React**, **Vite** e **TypeScript** para interagir com instâncias self-hosted da [NTFY API](https://ntfy.sh/). Este projeto permite configurar conexões personalizadas, enviar notificações ricas (com título, conteúdo e imagem) e monitorar o histórico de mensagens recebidas em tempo real.

## ✨ Funcionalidades

-   **Configuração Dinâmica**: Informe a URL da sua instância self-hosted e o tópico desejado diretamente na interface.
-   **Envio de Notificações**: Formulário intuitivo para disparo de mensagens suportando:
    -   `Title`: Assunto da notificação.
    -   `Content`: Corpo da mensagem.
    -   `Image`: URL de imagem para anexos visuais.
-   **Histórico em Tempo Real**: Visualização das notificações enviadas/recebidas na parte inferior da tela.
-   **Type Safety**: Desenvolvido integralmente com TypeScript para maior robustez.

## 🛠️ Tecnologias Utilizadas

-   [React](https://reactjs.org/) - Biblioteca para interfaces de usuário.
-   [Vite](https://vitejs.dev/) - Build tool ultra-rápida.
-   [TypeScript](https://www.typescriptlang.org/) - Superset Javascript com tipagem estática.
-   [Axios](https://axios-http.com/) - Cliente HTTP baseado em promises para o navegador e NodeJS.
-   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e moderna.
-   [NTFY API](https://docs.ntfy.sh/) - Sistema de notificação HTTP baseado em tópicos.

## 🚀 Como Executar o Projeto

### Pré-requisitos

[Node.js](https://nodejs.org/) 18.x ou superior.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/felipeleite11/ntfy-estudo.git
    cd ntfy-estudo
    ```

2.  Instale as dependências:
    ```bash
    yarn install
    ```

3.  Inicie o servidor de desenvolvimento:
    ```bash
    yarn dev
    ```

4.  Acesse `http://localhost:5173` no seu navegador.

## 📖 Como Usar

<img height="500" style="object-fit: contain" alt="Demo" src="https://github.com/user-attachments/assets/de7ee074-585a-4dd6-8f1d-b0ae817e92d7" />

1.  **Conexão**: No topo da tela, insira no campo "Server URL" a URL do seu servidor NTFY (ex: `https://ntfy.meu-dominio.com`) e no campo "Topic", o nome do tópico que deseja enviar.
2.  **Envio**: Preencha o formulário "Create notification" com o título, conteúdo e a imagem que compõem a notificação. Clique em "Create notification".
3.  **Visualização**: O sistema operacional do dispositivo exibirá uma notificação nativa (testando no Windows e Android). Na parte inferior da tela, verifique o histórico de notificações.

## 🚀 Demonstração

Acesse [https://ntfy-estudo.vercel.app](https://ntfy-estudo.vercel.app)
