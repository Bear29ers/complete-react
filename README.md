# Complete React

## コンポーネント

画面の各構成要素を React で定義したもの。

↓

- 再利用性の向上（コードが使いまわせる）
- 可読性の向上（コードが整理される）
- 疎結合になる（バグを減らせる）
  <br>

## JSX

JSX（JavaScript Syntax Extension）
React による JavaScript の構文を拡張したもの。<br>
JSX は JavaScript のオブジェクトに変換される。

`<h1>Hello, world!</h1>`

↓

JS オブジェクト（React 要素）

### JSX がオブジェクトに変換される過程

```jsx
const element = <h1 className="greeting">Hello World</h1>;
```

↓ Babel

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'}
  'Hello World',
);
```

↓ React 要素

```js
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello World",
  },
};
```

### React 要素のツリー

JSX の構造はツリー状に管理される

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>GoodBye!<h2>
  </div>
);
```

↓

```
{
  type: 'div',
  props: { children: [
    0: { type: 'h1', props: { children: 'Hello!' } },
    1: { type: 'h2', props: { children: 'GoodBye!' } }
  ]}
}
```

<br>
