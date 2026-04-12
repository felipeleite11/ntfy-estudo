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
-   [Axios](https://axios-http.com/) - Cliente HTTP baseado em promessas para o navegador e node.js.
-   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e moderna.
-   [NTFY API](https://docs.ntfy.sh/) - Sistema de notificação HTTP baseado em tópicos.

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada).

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/felipeleite11/ntfy-estudo.git](https://github.com/felipeleite11/ntfy-estudo.git)
    cd ntfy-estudo
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Acesse `http://localhost:5173` no seu navegador.

## 📖 Como Usar

1.  **Conexão**: No topo da tela, insira a URL do seu servidor NTFY (ex: `https://ntfy.meu-dominio.com`) e o nome do tópico que deseja monitorar/enviar.
2.  **Envio**: Preencha o formulário de criação com o título, conteúdo e o link de uma imagem. Clique em enviar.
3.  **Visualização**: Verifique o card de histórico na parte inferior para confirmar o recebimento e os detalhes da notificação.
