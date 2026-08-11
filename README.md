# atividade01

Aplicativo mobile desenvolvido em React Native com Expo e TypeScript.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS)
- [Git](https://git-scm.com/)
- App **Expo Go** no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [iOS](https://apps.apple.com/app/expo-go/id982107779))

Não é necessário ter Android Studio ou Xcode instalados para rodar o projeto em modo de desenvolvimento.

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd atividade01
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm start
```

Isso vai abrir o Metro Bundler e exibir um QR code no terminal.

### 4. Abra o app no celular

- **Android**: abra o app Expo Go e escaneie o QR code direto por dentro do app.
- **iOS**: abra a câmera nativa do iPhone e aponte para o QR code — ela vai reconhecer e abrir no Expo Go automaticamente.

O app vai carregar no seu celular com hot reload ativado: qualquer alteração salva no código aparece na tela quase instantaneamente, sem precisar reiniciar o app.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento (Metro Bundler) |
| `npm run android` | Inicia o servidor e tenta abrir automaticamente em um emulador/dispositivo Android |
| `npm run ios` | Inicia o servidor e tenta abrir automaticamente em um simulador/dispositivo iOS |
| `npm run web` | Roda o projeto no navegador |
| `npm run lint` | Executa a checagem de tipos (TypeScript) e o ESLint |
| `npm run check-typescript` | Verifica erros de tipagem sem gerar arquivos |
| `npm run check-eslint` | Executa apenas o linter |
| `npm run prettier` | Formata o código-fonte automaticamente |
| `npm test` | Executa os testes com Jest |

## Estrutura do projeto

```
.
├── src/              # Código-fonte da aplicação (componentes, telas, etc.)
├── assets/           # Imagens, fontes e outros recursos estáticos
├── index.ts          # Ponto de entrada do app
├── app.json          # Configurações do Expo (nome, ícone, splash screen)
└── package.json      # Dependências e scripts do projeto
```

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) — testes
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — padronização de código
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) — validação automática antes de cada commit

## Solução de problemas comuns

**Erro `ERESOLVE` ao rodar `npm install`**
Costuma acontecer por conflito de versão entre `react` e dependências transitivas (como `react-test-renderer`). Verifique se o `package.json` tem um bloco `overrides` fixando essas versões, e rode `npm install` novamente.

**Husky falha no commit com erro do ESLint sobre "no files matching pattern"**
No Windows, os scripts precisam usar aspas duplas (`"..."`) em vez de aspas simples (`'...'`) nos padrões glob dentro do `package.json`.