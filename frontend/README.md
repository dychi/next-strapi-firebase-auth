## Next.js with TypeScript(Frontend)
Next.jsとTypescript設定コマンド
```
npx create-next-app <project-name>
yarn add --dev typescript @types/react
```
ファイルの拡張子を修正
> .js -> .ts
> .jsx -> .tsx

```
yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

### テストの設定
- モジュールのインストール
```
yarn add --dev @testing-library/react @types/jest jest ts-jest
```
```jest.config.js```の追加
```js
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
}
```
- [テストの書き方](https://github.com/syuji-higa/demo-fizzbuzz-nextjs-tdd)
