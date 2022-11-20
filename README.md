## 目次

<ul>
  <li><a href="#01">Reactの基礎</a></li>
  <li><a href="#02">イベントリスナーと状態管理（state）</a></li>
</ul>

<h2 id="01">React の基礎</h2>

<ul>
  <li><a href="#01-1">JSX</a></li>
  <li><a href="#01-2">JSXがオブジェクトに変換される過程</a></li>
  <li><a href="#01-3">React要素のレンダー</a></li>
  <li><a href="#01-4">コンポーネントの定義</a></li>
  <li><a href="#01-5">関数コンポーネント</a></li>
  <li><a href="#01-6">コンポーネントの親子関係</a></li>
  <li><a href="#01-7">コンポーネント間のデータのやりとり</a></li>
  <li><a href="#01-8">React要素とコンポーネント</a></li>
</ul>

<h3 id="01-1">JSX</h3>

React による JavaScript の構文を拡張したもの。<br>
JSX は JavaScript のオブジェクトに変換される。

<img src="https://user-images.githubusercontent.com/39920490/199717046-deafe89b-0074-463a-8a12-369d096508df.png" width="100%" style="max-width:1200px" alt="JSX" />
<br>
<br>

### JSX がオブジェクトに変換される過程

<img src="https://user-images.githubusercontent.com/39920490/201510527-b502d88b-b2bb-4a4d-a36e-524db6066c08.png" width="100%" style="max-width:1200px" alt="JSXがオブジェクトに変換される過程" />
<br>
<br>

### React 要素のレンダー

ReactDOM が仮想 DOM を元に DOM を更新する。

<img src="https://user-images.githubusercontent.com/39920490/201510529-7f9d2dce-a280-41ac-bd69-e7ffac93dce0.png" width="100%" style="max-width: 1200px" alt="React要素のレンダー" />
<br>
<br>

### コンポーネントの定義

コンポーネントは JavaScript の関数として定義する。

<img src="https://user-images.githubusercontent.com/39920490/201510530-6b044bf4-c1a1-4b64-83b9-999f3e3eb3b7.png" width="100%" style="max-width:1200px" alt="コンポーネントの定義" />

関数で定義されるコンポーネントは**関数コンポーネント**と呼ばれる。
<br>
<br>

### 関数コンポーネント

関数コンポーネントは**props を受け取り、JSX を返す**。

↓

・再利用性の向上（コードが使いまわせる）<br>
・可読性の向上（コードが整理される）<br>
・疎結合になる（バグを減らせる）
<br>
<br>

### コンポーネントの親子関係

コンポーネントは出力する JSX の中に他のコンポーネントを含めることができる。

<img src="https://user-images.githubusercontent.com/39920490/201510533-fe7df4f7-419c-4132-8935-eb9959890256.png" width="100%" style="max-width:1200px" alt="コンポーネントの親子関係" />
<br>
<br>

### コンポーネント間のデータのやりとり

コンポーネントは props を親から子に渡すことでデータを受け渡す。<br>
props を通して JavaScript のあらゆる値を渡すことができる。

<img src="https://user-images.githubusercontent.com/39920490/201510534-b9c32263-44e4-4c6d-a45e-2c405b7f0ef1.png" width="100%" style="max-width:450px" alt="コンポーネント間のデータのやりとり" />

**props の流れは一方通行**<br>
props を子から親に渡すことはできない。

**props は読み取り専用**<br>
コンポーネント内で props の値を変更してはいけない。
<br>
<br>

### React 要素とコンポーネント

<img src="https://user-images.githubusercontent.com/39920490/201510535-f49449a5-18db-4e57-b201-b8cdc2dceb21.png" width="100%" style="max-width:1200px" alt="React要素とコンポーネント" />
<br>
<br>

### コンポーネントツリー

<img src="https://user-images.githubusercontent.com/39920490/201510537-2710c654-e06d-49de-b35f-9496cec6163f.png" width="100%" style="max-width:1200px" alt="コンポーネントツリー" />
<br>
<br>

## イベントリスナーと状態管理（State）

### 画面が変更されるために必要な処理

・React にコンポーネントの再実行（**再レンダリング**）を依頼し、新しい React 要素を作成してもらう必要がある。<br>
・変更した値をどこかに保持しておく必要がある。（**state**に保存）

↓

これらを可能にする仕組みを提供するのが**useState**関数

<img src="" width="100%" style="max-width:500px" alt="画面が変更されるために必要な処理" />
<br>
<br>

### useState の役割と使い方

① 接続（Hook into）<br>
React 内部と接続。状態が管理されるようになる。

② "現在の値"と"更新関数"を返却する。

③ 更新関数で**新しい値を React に渡す**。また、React に自身のコンポーネントを再実行するように依頼する。

<img src="" width="100%" style="max-width:500px" alt="useStateの役割と使い方" />

React 内部に保持されたコンポーネントに紐づく値を**state**と呼ぶ。
<br>
<br>

### useState を使う際の注意点

<ul>
  <li>コンポーネントの中で呼び出す。</li>
  <li>if文やfor文の中で呼び出さない。</li>
  <li>値の更新と再レンダリングは予約（非同期）される。</li>
  <li>前回のstate値を使用する場合は、更新用関数に関数を渡す。</li>
  <li>オブジェクト型のstateを更新する再は新しいオブジェクトを作成する。</li>
  <li>stateの値はコンポーネントごとに独立して管理される。</li>
  <li>一度消滅したコンポーネントのstateの値はリセットされる。</li>
  <li>stateをpropsとして渡すことで子コンポーネントで利用できる</li>
  <li>コンポーネントの位置によってstateが維持される。</li>
</ul>
<br>
<br>

### state 更新用関数とレンダリング

<img src="" width="100%" style="max-width:1200px" alt="state更新用関数とレンダリング" />
<br>
<br>

### state はコンポーネント毎に状態（値）を保持

コンポーネントに紐づく値はそれぞれ独立している。

↓

**React 要素のツリー内の位置**によっってどのコンポーネントの state か識別している。

<img src="" width="100%" style="max-width:500px" alt="stateはコンポーネント毎に状態（値）を保持している" />
<br>
<br>

### React 要素のツリー構造が変わらない場合

コンポーネントの**React 要素ツリーにおける位置**が変わらない場合は state は保持される

<img src="" width="100%" style="max-width:700px" alt="React要素のツリー構造が変わらない場合" />
<br>
<br>

### 同じ位置に独立してコンポーネントを表示

key を付けることによって同じ位置の同じコンポーネントでも別物と認識させることができる。

<img src="" width="100%" style="max-width:700px" alt="同じ位置に独立してコンポーネントを表示" />
<br>
<br>
