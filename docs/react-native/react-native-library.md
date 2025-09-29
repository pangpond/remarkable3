---
sidebar_position: 3
---

# React Native Library

Let's create a React Native library to learn the lifecycle of an open source contributor

## Setup

```bash
npx create-react-native-library@latest awesome-rn-lib
```

### enter project info

```bash
✔ What is the name of the npm package? … awesome-rn-lib
✔ What is the description for the package? … react native playground lib
✔ What is the name of package author? … nextensions
✔ What is the email address for the package author? … nextensions.io@gmail.com
✔ What is the URL for the package author? … https://github.com/nextensions
✔ What is the URL for the repository? … https://github.com/nextensions/awesome-rn-lib
✔ What type of library do you want to develop? › JavaScript library
```

```bash
cd awesome-rn-lib
```

### edit package.json

```json
"name": "awesome-rn-lib",
"version": "0.1.0",
"description": "react native playground lib",
"private": true, ---> add this line
"main": "./lib/module/index.js",
"types": "./lib/typescript/src/index.d.ts",
...
```

### install node modules then run example

```bash
yarn
```

### edit `metro.config.js`

add code block below to support monorepo (use node_modules from repo root)

```js
config.resolver.unstable_enablePackageExports = true;

//add this block
config.resolver.nodeModulesPaths = [
  path.join(__dirname, "node_modules"),
  path.join(root, "node_modules"),
];

module.exports = config;
```

### start example app on Expo go

```bash
yarn workspace awesome-rn-lib-example start --clear
```

## craft Basic component

create `src/components/Basic.tsx` then put content below

```tsx
import { View, Text } from "react-native";

export const Basic = () => {
  return (
    <View>
      <Text>Basic</Text>
    </View>
  );
};

export default Basic;
```

edit `src/index.tsx` to export Basic component

```
import { Basic } from './components/Basic'; --> add this line

export function multiply(a: number, b: number): number {
  return a * b;
}

export { Basic }; --> add this line

```

## use Basic component from lib at example app

edit `example/src/App.tsx`

```tsx
import { multiply, Basic } from 'awesome-rn-lib'; --> add Basic

export default function App() {
  return (
    <View style={styles.container}>
      <Basic /> --> add this line
      <Text>Result: {result}</Text>
    </View>
  );
}
```
