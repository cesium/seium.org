[asdf-vm]: https://asdf-vm.com/

# 🚀 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## 📥 Prerequisites

The following software is required to be installed on your system:

- [Node.js 16.13+](https://nodejs.org/en/download/)

We recommend using [asdf version manager][asdf-vm] to install and manage all the
programming languages' requirements.

## 🔧 Setup

Install all dependencies.

```
npm install
```

Then, create your local environment file and fill in all the required details.

```
cp -n .env.sample .env.local
```

## 🔨 Development

Starting the development server.

```
npm run develop
```

Test your code against common guidelines.

```
npm run test
```

Lint your code.

```
npm run lint
```

Format your code.

```
npm run format
```

## 🧩 Editor Extensions

We recommend installing the follow extensions in Visual Studio Code or
equivalent ones in your favourite editor.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)

## 🔗 References

You can use these resources to learn more about the technologies this project
uses.

- [Getting Started with React](https://reactjs.org/docs/getting-started.html)
- [Learn Next.js](https://nextjs.org/learn)
- [Get started with Tailwind CSS](https://tailwindcss.com/docs)
