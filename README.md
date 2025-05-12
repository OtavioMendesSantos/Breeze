# Guia de Como Executar o Projeto

Este guia fornecerá instruções sobre como configurar e executar este projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (recomendado: versão 18.x ou superior)
- npm (normalmente é instalado com o Node.js)
- Expo CLI (global)

Instalar Expo CLI globalmente (caso ainda não tenha):

```bash
npm install -g expo-cli
```
> 💡 Alternativamente, você pode usar npx expo sem precisar instalar globalmente, mas instalar o CLI facilita o uso frequente.

## Instalação

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/OtavioMendesSantos/Breeze.git
```

2. Navegue até o diretório do projeto:

```bash
cd Breeze
```

3. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Para iniciar o projeto em modo de desenvolvimento:

Dependendo da configuração do projeto, você também pode ter outros scripts disponíveis:

```bash
npm run start   # Executa em modo de desenvolvimento com hot-reload
npm run build   # Cria uma versão de produção
npm run test    # Executa os testes
```

## Resolução de Problemas

Se encontrar algum problema durante a instalação ou execução:

- Verifique se todas as dependências foram instaladas corretamente
- Certifique-se de que está usando a versão correta do Node.js
- Tente remover o diretório node_modules e o arquivo package-lock.json e execute npm install novamente

