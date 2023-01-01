## 目次

<ul>
  <li><a href="#01">Reactの基礎</a></li>
  <li><a href="#02">イベントリスナーと状態管理（state）</a></li>
  <li><a href="#03">制御構文とフォームの制御</a></li>
  <li><a href="#04">Reactでのスタイル適用方法</a></li>
  <li><a href="#05">ReactでDOM操作を行う方法</a></li>
  <li><a href="#06">Immutability（不変性）</a></li>
  <li><a href="#07">関数型プログラミング</a></li>
  <li><a href="#08">useContextでstate管理</a></li>
  <li><a href="#09">useEffectの実行タイミング</a></li>
  <li><a href="#10">カスタムフック</a></li>
  <li><a href="#11">useEffectと副作用</a></li>
  <li><a href="#12">Redux</a></li>
  <li><a href="#13">クラスコンポーネント</a></li>
  <li><a href="#14">レンダリングの最適化</a></li>
  <li><a href="#15">パフォーマンスの最適化</a></li>
  <li><a href="#16">Rest APIを使ったサーバーとの通信</a></li>
  <li><a href="#17">Next.js</a></li>
  <li><a href="#18">Next.jsにおけるレンダリング</a></li>
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
  <li><a href="#01-9">コンポーネントツリー</a></li>
</ul>

<h3 id="01-1">JSX</h3>

React による JavaScript の構文を拡張したもの。<br>
JSX は JavaScript のオブジェクトに変換される。

<img src="https://user-images.githubusercontent.com/39920490/199717046-deafe89b-0074-463a-8a12-369d096508df.png" width="1200px" alt="JSX" />
<br>
<br>

<h3 id="01-2">JSX がオブジェクトに変換される過程</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510527-b502d88b-b2bb-4a4d-a36e-524db6066c08.png" width="1200px" alt="JSXがオブジェクトに変換される過程" />
<br>
<br>

<h3 id="01-3">React 要素のレンダー</h3>

ReactDOM が仮想 DOM を元に DOM を更新する。

<img src="https://user-images.githubusercontent.com/39920490/201510529-7f9d2dce-a280-41ac-bd69-e7ffac93dce0.png" width="1200px" alt="React要素のレンダー" />
<br>
<br>

<h3 id="01-4">コンポーネントの定義</h3>

コンポーネントは JavaScript の関数として定義する。

<img src="https://user-images.githubusercontent.com/39920490/201510530-6b044bf4-c1a1-4b64-83b9-999f3e3eb3b7.png" width="1200px" alt="コンポーネントの定義" />

関数で定義されるコンポーネントは**関数コンポーネント**と呼ばれる。
<br>
<br>

<h3 id="01-5">関数コンポーネント</h3>

関数コンポーネントは**props を受け取り、JSX を返す**。

↓

・再利用性の向上（コードが使いまわせる）<br>
・可読性の向上（コードが整理される）<br>
・疎結合になる（バグを減らせる）
<br>
<br>

<h3 id="01-6">コンポーネントの親子関係</h3>

コンポーネントは出力する JSX の中に他のコンポーネントを含めることができる。

<img src="https://user-images.githubusercontent.com/39920490/201510533-fe7df4f7-419c-4132-8935-eb9959890256.png" width="1200px" alt="コンポーネントの親子関係" />
<br>
<br>

<h3 id="01-7">コンポーネント間のデータのやりとり</h3>

コンポーネントは props を親から子に渡すことでデータを受け渡す。<br>
props を通して JavaScript のあらゆる値を渡すことができる。

<img src="https://user-images.githubusercontent.com/39920490/201510534-b9c32263-44e4-4c6d-a45e-2c405b7f0ef1.png" width="450px" alt="コンポーネント間のデータのやりとり" />

**props の流れは一方通行**<br>
props を子から親に渡すことはできない。

**props は読み取り専用**<br>
コンポーネント内で props の値を変更してはいけない。
<br>
<br>

<h3 id="01-8">React 要素とコンポーネント</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510535-f49449a5-18db-4e57-b201-b8cdc2dceb21.png" width="1200px" alt="React要素とコンポーネント" />
<br>
<br>

<h3 id="01-9">コンポーネントツリー</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510537-2710c654-e06d-49de-b35f-9496cec6163f.png" width="1200px" alt="コンポーネントツリー" />
<br>
<br>

<h2 id="02">イベントリスナーと状態管理（State）</h2>

<ul>
  <li><a href="#02-1">画面が変更されるために必要な処理</a></li>
  <li><a href="#02-2">useStateの役割と使い方</a></li>
  <li><a href="#02-3">useStateを使う際の注意点</a></li>
  <li><a href="#02-4">state更新用関数とレンダリング</a></li>
  <li><a href="#02-5">stateはコンポーネント毎に状態（値）を保持</a></li>
  <li><a href="#02-6">React要素のツリー構造が変わらない場合</a></li>
  <li><a href="#02-7">同じ位置に独立してコンポーネントを表示</a></li>
</ul>

<h3 id="02-1">画面が変更されるために必要な処理</h3>

・React にコンポーネントの再実行（**再レンダリング**）を依頼し、新しい React 要素を作成してもらう必要がある。<br>
・変更した値をどこかに保持しておく必要がある。（**state**に保存）

↓

これらを可能にする仕組みを提供するのが**useState**関数

<img src="https://user-images.githubusercontent.com/39920490/202904267-8b6acb2c-da5b-46c0-b62f-f760c4b1e2b5.png" width="500px" alt="画面が変更されるために必要な処理" />
<br>
<br>

<h3 id="02-2">useState の役割と使い方</h3>

① 接続（Hook into）<br>
React 内部と接続。状態が管理されるようになる。

② "現在の値"と"更新関数"を返却する。

③ 更新関数で**新しい値を React に渡す**。また、React に自身のコンポーネントを再実行するように依頼する。

<img src="https://user-images.githubusercontent.com/39920490/202904294-e5d1e51a-c793-45c8-8ca0-f8641ce9e563.png" width="500px" alt="useStateの役割と使い方" />

React 内部に保持されたコンポーネントに紐づく値を**state**と呼ぶ。
<br>
<br>

<h3 id="02-3">useState を使う際の注意点</h3>

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

<h3 id="02-4">state 更新用関数とレンダリング</h3>

<img src="https://user-images.githubusercontent.com/39920490/202904319-31e57d20-eb90-495a-b277-a2848abb3562.png" width="1200px" alt="state更新用関数とレンダリング" />
<br>
<br>

<h3 id="02-5">state はコンポーネント毎に状態（値）を保持</h3>

コンポーネントに紐づく値はそれぞれ独立している。

↓

**React 要素のツリー内の位置**によっってどのコンポーネントの state か識別している。

<img src="https://user-images.githubusercontent.com/39920490/202904344-7f51d3bc-871c-45dd-bd74-83fc7a66acc0.png" width="500px" alt="stateはコンポーネント毎に状態（値）を保持している" />
<br>
<br>

<h3 id="02-6">React 要素のツリー構造が変わらない場合</h3>

コンポーネントの**React 要素ツリーにおける位置**が変わらない場合は state は保持される

<img src="https://user-images.githubusercontent.com/39920490/202904374-396d1696-cf2b-428d-bf96-9f03d593dbee.png" width="700px" alt="React要素のツリー構造が変わらない場合" />
<br>
<br>

<h3 id="02-7">同じ位置に独立してコンポーネントを表示</h3>

key を付けることによって同じ位置の同じコンポーネントでも別物と認識させることができる。

<img src="https://user-images.githubusercontent.com/39920490/202904392-8e16920c-9eba-4ea1-a4e1-49bcd428228d.png" width="700px" alt="同じ位置に独立してコンポーネントを表示" />
<br>
<br>

<h2 id="03">制御構文とフォームの制御</h2>

<ul>
  <li><a href="03-1">リストには必ずkeyを設定する</a></li>
  <li><a href="03-2">keyを付ける際の注意点</a></li>
</ul>

<h3 id="03-1">リストには必ずキーを設定する</h3>
前提知識

React は React 要素ツリー（厳密には Fiber ツリー）の差分検出処理をして DOM を更新している

<img src="https://user-images.githubusercontent.com/39920490/202904624-77af870f-cc12-4161-a57f-e1d3f4d655cc.png" width="1200px" alt="前提知識" />
<br>
<br>

最後に要素を挿入した場合

差分検出は子の React 要素に対して先頭から順に比較し、差分処理を行う

<img src="https://user-images.githubusercontent.com/39920490/202904796-087d5ebd-50a4-4c5a-b9a7-b5dfa784f7f9.png" width="1200px" alt="最後に要素を挿入した場合" />
<br>
<br>

先頭に要素を挿入した場合（key なし）

<img src="https://user-images.githubusercontent.com/39920490/202905083-3bb1cac8-a66b-40c0-a3b6-fbcd68183951.png" width="1200px" alt="最後に要素を挿入した場合" />

React は全ての子の React 要素を変更してしまい、全ての Real DOM を洗替える（子要素を全て削除して、新しい子要素を追加する）。
<br>
<br>

先頭に要素を挿入した場合（key あり）

<img src="https://user-images.githubusercontent.com/39920490/202905160-f0b61830-fca2-4331-be74-3f49326c3844.png" width="1200px" alt="最後に要素を挿入した場合" />

子要素に key を持たせると、React はどの要素が変更、追加、削除されたかを識別できるようになるため、差分のみ更新することが可能になる。
<br>
<br>

<h3 id="03-2">keyを付ける際の注意点</h3>
<ul>
  <li>キーには必ず一意の値を設定する。</li>
  <li>キーに設定した値は変更しない。</li>
  <li>配列のインデックスはなるべく使わない。</li>
</ul>
<br>
<br>

<h2 id="04">React でのスタイル適用方法</h2>

<ul>
  <li><a href="#04-1">CSSファイルの読み込み</a></li>
  <li><a href="#04-2">インラインスタイル</a></li>
  <li><a href="#04-3">CSS Modules</a></li>
  <li><a href="#04-4">CSS in JS</a></li>
</ul>

<h3 id="04-1">CSSファイルの読み込み</h3>

```jsx
import "./Example.css";
```

CSS ファイルに class を定義して、JSX の className に適用する

##### 特徴

<ul>
  <li>グローバルスコープとなるため、クラス名の衝突が起きやすい</li>
  <li>ルートファイル（`App.js`等）でグローバルなスタイルを当てたいときに使用する</li>
</ul>
<br>
<br>

<h3 id="04-2">インラインスタイル</h3>

```jsx
style={{ color: 'red' }}
```

JSX の style 属性にオブジェクトを渡す

##### 特徴

<ul>
  <li>再利用性が低い</li>
  <li>擬似要素やメディアクエリが使用できない</li>
  <li>レンダリングの度に計算されるので、パフォーマンスが劣る</li>
  <li>動的で頻繁に計算されるスタイルの適用</li>
</ul>
<br>
<br>

<h3 id="04-3">CSS Modules</h3>

```jsx
import styles from "./Example.module.css";
```

CSS ファイルをモジュールとして JS ファイルに読み込んで、コンポーネントごとにローカルスコープを作ってスタイルを適用する

##### 特徴

<ul>
  <li>クラス名の衝突が起きない</li>
  <li>`create-react-app`で設定済みのため、すぐ使える</li>
  <li>将来、非推奨になる可能性がある</li>
  <li>CSSとJSが2つのファイルに分かれる</li>
</ul>
<br>
<br>

<h3 id="04-4">CSS in JS</h3>

```jsx
const StyledButton = styled.div``;
```

CSS を JS ファイル内に記載して、CSS を適用したコンポーネントを作成する

##### 特徴

<ul>
  <li>クラス名の衝突が起きない</li>
  <li>ライブラリを導入する必要がある</li>
  <li>CSSとJSが1つのファイルにまとまる</li>
  <li>propsを参照して動的にスタイルできる</li>
  <li>擬似要素やメディアクエリが使用できる</li>
</ul>
<br>
<br>

<h2 id="05">ReactでDOM操作を行う方法</h2>

<ul>
  <li><a href="#05-1">ポータル</a></li>
  <li><a href="#05-2">useRefとは</a></li>
  <li><a href="#05-3">refの特徴</a></li>
  <li><a href="#05-4">refを使ったDOMの操作</a></li>
  <li><a href="#05-5">他のコンポーネントのDOMの操作</a></li>
  <li><a href="#05-6">useRefの使用上の注意</a></li>
  <li><a href="#05-7">useImperativeHandle</a></li>
</ul>

<h3 id="05-1">ポータル</h3>

ポータルの子要素を、直接の親要素ではなく別の DOM 要素にマウントすることができる。

<img src="https://user-images.githubusercontent.com/39920490/204136253-5a0b0143-ccd2-4aca-a4cb-80d45da878a2.png" width="1000px" alt="ポータル" />
<br>
<br>

<h3 id="05-2">useRefとは</h3>

再レンダリングを発生させず値を保持する方法

```jsx
const ref = useRef(initialValue);
```

<ul>
  <li>useRefは"refオブジェクト"を返す。</li>
  <li>currentプロパティに値が設定される。</li>
  <li>
    ref.currentで値にアクセスできる。<br>
    値は読み書き可能
  </li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/204136515-fa9a06f2-499c-4a68-814c-33aeee0ea4d7.png" width="300px" alt="useRefとは" />
<br>
<br>

<h3 id="05-3">refの特徴</h3>

<ul>
  <li>
    再レンダリングされても情報が保存される。<br>
    ※通常の変数はレンダリングの度に初期化される。
  </li>
  <li>
    refの値を変更しても再レンダリングがトリガーされない。<br>
    ※同じく値を保持できるstateは変更されると再レンダリングされる。
  </li>
  <li>refオブジェクトをJSXのref属性に渡すとそのDOMにアクセスできるようになる。</li>
</ul>

↓

**最も一般的な利用法**

<br>
<br>

<h3 id="05-4">refを使ったDOMの操作</h3>

① ref オブジェクトの作成

```jsx
const inputRef = useRef(null);
```

② 操作したい DOM に対応する JSX の ref 属性に渡す

```jsx
<input ref={inputRef}>
```

③ React は DOM への参照を`inputRef.current`に格納する

④ イベントハンドラなどで DOM にアクセスする

```jsx
inputRef.current.focus();
```

⑤ イベントハンドラを`<button>`のクリックイベントなどで発火させる
<br>
<br>

<h3 id="05-5">他のコンポーネントのDOMの操作</h3>

React のデフォルトでは、コンポーネントが他のコンポーネントの DOM にアクセスすることはできない

↓

アクセスされる側のコンポーネントがそれを許すかどうかを決めることができる（`forwardRef`）

<img src="https://user-images.githubusercontent.com/39920490/204544878-c55c6848-7a91-4c44-a862-6c34eea6ee5c.png" width="500px" alt="他のコンポーネントのDOMの操作" />
<br>
<br>

<h3 id="05-6">useRefの使用上の注意</h3>

<ul>
  <li>refはレンダリングに使用しない値を保持するための逃げ道であり、頻繁に必要とするものではない。（ReactではDOMは直接操作するものではなく、あくまでReactの機能として変更が加えられるもの</li>
  <li>レンダリング中はref.currentを参照・変更してはならない（初回レンダリングは除く）。通常はイベントハンドラからアクセスする。</li>
  <li>DOMを手動で追加・削除する場合は、ReactのDOMの操作と干渉しないように注意する。</li>
</ul>
<br>
<br>

<h3 id ="05-7">useImperativeHandle</h3>

`forwardRef`と共に使用する。親から受け取った ref オブジェクトをカスタマイズすることができる。

<img src="https://user-images.githubusercontent.com/39920490/204547960-c8105ee3-210e-4ec0-877b-79802513f3a2.png" width="200px" alt="useRefとは" />

子コンポーネント内で`useImperativeHandle`に渡したメソッドが、親の ref に登録され、`ref.current."メソッド名"`で実行できるようになる。
<br>
<br>

<h2 id="06">Immutability（不変性）</h2>

<ul>
  <li><a href="#06-1">前提</a></li>
  <li><a href="#06-2">イミュータブル（immutable）な値の変更</a></li>
  <li><a href="#06-3">ミュータブル（mutable）な値の変更</a></li>
  <li><a href="#06-4">Immutabilityの保持</a></li>
  <li><a href="#06-5">関数型プログラミングとImmutabilityの保持</a></li>
</ul>

<h3 id="06-1">前提</h3>

**イミュータブル（immutable）**

書き換えが不可（元の値は変わらない）

_文字列、数値、BigInt、真偽値、undefined、シンボル_
<br>

**ミュータブル（mutable）**

_イミュータブルな値以外。オブジェクト（Object、Array など）_

<br>
<br>

<h3 id="06-2">イミュータブル（immutable）な値の変更</h3>

<img src="https://user-images.githubusercontent.com/39920490/204672978-8e6c963d-a743-4d18-964f-21cb929b3d61.png" width="800px" alt="イミュータブル（immutable）な値の変更" />

例えば数値のようなイミュータブルな値を変更すると、値自体が変更されるのではなく、新しい別の値に参照が向けられるようになる。
<br>
<br>

<h3 id="06-3">ミュータブル（mutable）な値の変更</h3>

変数の参照先が変わらないため、配列の中身が変わっていることになる（オブジェクトも同様）。

<img src="https://user-images.githubusercontent.com/39920490/205046510-b2bfcc95-f5b3-44fc-987e-b787c094dd98.png" width="1000px" alt="ミュータブル（mutable）な値の変更" />
<br>
<br>

<h3 id="06-4">Immutabilityの保持</h3>

コピーをすることで変数の参照先を変え、mutable な配列やオブジェクトを immutable のように扱う。

<img src="https://user-images.githubusercontent.com/39920490/205050746-7f59a8de-0824-464c-941b-8d8b11ae1f23.png" width="1000px" alt="Immutabilityの保持" />
<br>
<br>

<h3 id="06-5">関数型プログラミングとImmutabilityの保持</h3>

mutable なオブジェクトを immutable として取り扱う。

関数内で使用する場合は必ずオブジェクトをコピーして使用する。

<img src="https://user-images.githubusercontent.com/39920490/205051198-e91ba971-0153-4e5e-8f37-2928216eef38.png" width="1200px" alt="関数型プログラミングとImmutabilityの保持" />
<br>
<br>

<h2 id="07">関数型プログラミング</h2>

<ul>
  <li><a href="#07-1">前提</a></li>
  <li><a href="#07-2">関数型とオブジェクト指向型</a></li>
  <li><a href="#07-3">手続き（命令）型プログラミングとは？</a></li>
  <li><a href="#07-4">関数型プログラミングとは？</a></li>
  <li><a href="#07-5">関数型と手続き型は混在する</a></li>
  <li><a href="#07-6">関数型プログラミングの重要なキーワード</a></li>
  <li><a href="#07-7">関数型プログラミングのメリット（目標）</a></li>
</ul>

<h3 id="07-1">前提</h3>

React は 16.8.0 の React Hooks 導入により、様々な Hooks が使用できるようになった。

それと同じく関数コンポーネントと呼ばれる関数でコンポーネントを定義するようになった。その影響で関数型プログラミングに大きくシフトした。

<img src="https://user-images.githubusercontent.com/39920490/205052254-9e9faeda-048b-412a-8d74-d50b869d77e9.png" width="600px" alt="関数型プログラミングの前提" />
<br>
<br>

<h3 id="07-2">関数型とオブジェクト指向型</h3>

現実ではオブジェクト指向型と関数型が混合して書かれることがよくある。

<img src="https://user-images.githubusercontent.com/39920490/205053129-0fd9c27a-5cba-4569-9553-c646835ed3b8.png" width="800px" alt="関数型とオブジェクト指向型" />
<br>
<br>

<h3 id="07-3">手続き（命令）型プログラミングとは？</h3>

ブラウザなどへの命令を手順通り（手続き通り）記述していく手法。

↓

コード量が大きくなってくると可読性が悪くなる。

```jsx
// 制御フロー
let nums = [1, 2, 3];
let doubleNums = [];
for (let i = 0; i < nums.length; i++) {
  let double = nums[i] * 2;
  doubleNums.push(double);
}
```

<br>
<br>

<h3 id="07-4">関数型プログラミングとは？</h3>

**手続き型の制御を（なるべく）関数に分離（隠蔽）** し、やりたいことに集中できるようにするプログラミング手法。

```jsx
let nums = [1, 2, 3];
let doubleNums = nums.map((num) => num * 2);
```

ループ制御：map メソッドが担当<br>
やりたいこと：関数で定義（開発者が担当）
<br>
<br>

<h3 id="07-5">関数型と手続き型は混在する</h3>

関数の利用者（関数型プログラミング）

```jsx
let nums = [1, 2, 3];
let doubleNums = nums.map((num) => num * 2);
```

map メソッドはブラウザのビルトインメソッドだが、実際に 0 から記述すると手続き型の書き方になる。

↑

ループ処理は分離（中身は手続き型プログラミング）

```jsx
for (let i = 0; i < nums.length; i++) {
  let double = nums[i] * 2;
  doubleNums.push(double);
}
```

<br>
<br>

<h3 id="07-6">関数型プログラミングの重要なキーワード</h3>

<ul>
  <li>
    （値の）状態管理と処理を分岐
    <ul>
        <li>状態と処理は切り離す</li>
    </ul>
  </li>
  <li>
純粋関数（副作用を排除する）
<ul>
    <li>特定の入力には特定の出力を返す</li>
</ul>
</li>
  <li>
不変性（Immutability）
<ul>
    <li>一度設定した値は書き換えない</li>
</ul>
</li>
</ul>
<br>
<br>

<h3 id="07-7">関数型プログラミングのメリット（目標）</h3>

<ul>
<li>コードの可読性の向上</li>
<li>拡張性・再利用性の向上</li>
<li>テスト性の向上</li>
<li>モジュール化の向上</li>
<li>Tree Shakingの向上</li>
</ul>
<br>
<br>

<h2 id="08">useContextでstate管理</h2>

<ul>
<li><a href="#08-1">propsバケツリレー</a></li>
<li><a href="#08-2">コンポーネント間のデータの共有</a></li>
</ul>

<h3 id="08-1">propsバケツリレー</h3>

<img src="https://user-images.githubusercontent.com/39920490/205431686-d6d77b8a-c895-45e4-ad9d-73ab8227d0ea.png" width="300px" alt="propsバケツリレー" />

コンポーネントは親から子へ props を渡す。コンポーネントを跨いだり、兄弟コンポーネントに渡すことはできない。
<br>
<br>

<h3 id="08-2">コンポーネント間のデータの共有</h3>

<img src="https://user-images.githubusercontent.com/39920490/205431773-0699bc5c-2728-4d2b-8ab9-d423242cf893.png" width="400px" alt="コンポーネント間のデータの共有" />

**props**で**state**と**更新関数**をを間にある全てのコンポーネントでリレーして共有する。

↑ この書き方だと冗長になってしまうため、アプリケーション全体で共有して使用する state に関しては、**useContext**でラップする。
<br>
<br>

<h2 id="09">useEffectの実行タイミング</h2>

<ul>
<li><a href="#09-1">useEffect（依存配列が空のとき）</a></li>
<li><a href="#09-2">useEffect（依存配列あり、更新あり）</a></li>
<li><a href="#09-3">useEffect（依存配列省略）</a></li>
</ul>

<h3 id="09-1">useEffect（依存配列が空のとき）</h3>

コンポーネントの状態

<ul>
<li>Mounted：コンポーネントが生成されたとき</li>
<li>Updated：何らかのstateが更新されたとき</li>
<li>Unmounted：コンポーネントが消滅したとき</li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/205432053-1f301260-e3fc-485d-8e00-0d91dab56d1d.png" width="1200px" alt="useEffect（依存配列が空のとき）" />
<br>
<br>

<h3 id="09-2">useEffect（依存配列あり、更新あり）</h3>

state 更新のタイミングで、依存値が更新されたかどうかを判断し、更新されていれば`cleanUp()`、`callback()`の処理が実行される。

<img src="https://user-images.githubusercontent.com/39920490/205432511-ddddb5e1-62d4-40e8-8051-8c6a5c9ad9f7.png" width="1200px" alt="useEffect（依存配列あり、更新あり）" />
<br>
<br>

<h3 id="09-3">useEffect（依存配列省略）</h3>

依存値が設定されていないので、再レンダリングが実行される度に`cleanUp()`と`callback()`が呼ばれる。

<img src="https://user-images.githubusercontent.com/39920490/205432622-36702638-3dd0-4fb3-9f27-9079d8afcdfb.png" width="1200px" alt="useEffect（依存配列省略）" />
<br>
<br>

<h2 id="10">カスタムフック</h2>

useState などの React Hooks を内部で使用した関数（フック）のこと。

※ 関数名は**use◯◯**とする。

↓

React Hooks を関数に切り出すことで**再利用**できる。

<img src="https://user-images.githubusercontent.com/39920490/205433130-119e31c8-5f84-4d00-94fe-acb8f1909002.png" width="600px" alt="useEffect（依存配列省略）" />
<br>
<br>

<h2 id="11">useEffectと副作用</h2>

<ul>
<li><a href="#11-1">純粋関数と副作用（Side Effect）</a></li>
<li><a href="#11-2">Reactにおける副作用（Side Effect）</a></li>
</ul>

<h3 id="11-1">純粋関数と副作用（Side Effect）</h3>

純粋関数

<ul>
<li>関数の出力（戻り値）が、提供される入力値（引数）のみに依存する。</li>
<li>外部スコープの状態（データ）は参照・変更しない。</li>
<li>引数で渡された値を変更しない。</li>
<li>関数外に影響を及ぼさない。</li>
</ul>

→ 上記の要件を満たさない操作は**副作用**と呼ばれる。
<br>
<br>

<h3 id="11-2">Reactにおける副作用（Side Effect）</h3>

コンポーネントは JSX を構築する場所。JSX の構築に"直接"関係のない処理は全て**副作用**として扱われる。

副作用の例

<ul>
<li>コンソールへのログ出力</li>
<li>DOM操作</li>
<li>サーバーとの通信</li>
<li>タイマー処理</li>
<li>ランダムな値の生成</li>
</ul>

↓

useEffect or イベントハンドラ内に記述
<br>
<br>

<h2 id="12">Redux</h2>

<ul>
<li><a href="#12-1">Reduxとは</a></li>
<li><a href="#12-2">Redux Toolkit（RTK）</a></li>
<li><a href="#12-3">ステート（状態管理）</a></li>
<li><a href="#12-4">ContextとuseContext</a></li>
<li><a href="#12-5">Reduxによる状態管理</a></li>
<li><a href="#12-6">Reduxのデータフロー</a></li>
<li><a href="#12-7">ReduxのReducerには副作用は書かない</a></li>
<li><a href="#12-8">Redux Thunkとミドルウェア</a></li>
</ul>

<h3 id="12-1">Reduxとは</h3>

React とは別の状態管理のライブラリ

↓

React 以外のライブラリとも組み合わせて使用可能（React で使用する場合は`react-redux`というライブラリが必要）

<img src="https://user-images.githubusercontent.com/39920490/206192961-338b2fc0-f93c-49dc-90e5-4c415fb67a55.png" width="300px" alt="Reduxとは" />
<br>
<br>

<h3 id="12-2">Redux Toolkit（RTK）</h3>

素の Redux は他のライブラリが必要なケースが多い。

↓

公式が推奨する設定や書き方をまとめたもの。

様々な便利なライブラリが同梱されている。

Redux Toolkit（RTK）

<ul>
<li>Redux</li>
<li>Immer</li>
<li>redux-thunk</li>
<li>createSlice...</li>
</ul>

<br>
<br>

<h3 id="12-3">ステート（状態管理）</h3>

**グローバルステート**<br>
アプリ全体で共有されるステート

例）`useContext`、`Redux`

**ローカルステート**<br>
特定のコンポーネント内でのみ使用されるステート

<img src="https://user-images.githubusercontent.com/39920490/206193893-a1cbf333-9dda-4990-b6b9-f5032134986b.png" width="350px" alt="ステート（状態管理）" />
<br>
<br>

<h3 id="12-4">ContextとuseContext</h3>

<img src="https://user-images.githubusercontent.com/39920490/206194005-7a7d2150-3bc3-4ce9-9cbe-b8f8aee0d2e7.png" width="1200px" alt="ContextとuseContext" />
<br>
<br>

<h3 id="12-5">Reduxによる状態管理</h3>

Redux を使用する場合でもルートコンポーネントは Provider で囲う必要がある。

<img src="https://user-images.githubusercontent.com/39920490/206194072-f8e8a595-de1a-4905-b87b-955fe30e13c4.png" width="1200px" alt="Reduxによる状態管理" />
<br>
<br>

<h3 id="12-6">Reduxのデータフロー</h3>

<img src="https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" width="1200px" alt="Reduxのデータフロー" />
<br>
<br>

<h3 id="12-7">ReduxのReducerには副作用は書かない</h3>

Reducer は純粋関数として定義する。<br>
副作用が発生する操作は Reducer には書かない。

副作用の例

<ul>
<li>コンソールへのログ出力</li>
<li>DOM操作</li>
<li>サーバーとの通信</li>
<li>タイマー処理</li>
<li>ランダムな値の生成</li>
</ul>

↓

ミドルウェア（middleware）に記載
<br>
<br>

<h3 id="12-8">Redux Thunkとミドルウェア</h3>

<img src="https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif" width="1000px" alt="Redux Thunkとミドルウェア" />
<br>
<br>

<h2 id="13">クラスコンポーネント</h2>

<ul>
<li><a href="#13-1">Reactのコンポーネント</a></li>
<li><a href="#13-2">コンポーネントの定義方法の変化</a></li>
<li><a href="#13-3">Hooksの登場"前"のReact</a></li>
<li><a href="#13-4">なぜクラスコンポーネントを学ぶのか？</a></li>
<li><a href="#13-5">クラスコンポーネントの問題点</a></li>
<li><a href="#13-6">クラスコンポーネントの問題点まとめ</a></li>
<li><a href="#13-7">クラスコンポーネントのライフサイクルとは？</a></li>
<li><a href="#13-8">主なライフサイクルメソッド</a></li>
<li><a href="#13-9">ライフサイクルメソッドとuseEffectの比較</a></li>
</ul>

<h3 id="13-1">Reactのコンポーネント</h3>

コンポーネントの定義方法は大きく分けて 2 つある。

<ul>
<li>関数コンポーネント
<ul>
<li>JSの関数として定義。ここまで登場したものは全て関数コンポーネント</li>
</ul>
</li>
<li>クラスコンポーネント
<ul>
<li>JS(ES6)のクラスとして定義するコンポーネント</li>
</ul>
</li>
</ul>
<br>
<br>

<h3 id="13-2">コンポーネントの定義方法の変化</h3>

React16.8 より追加された Hooks という新機能（2019 年）の登場によってコンポーネントの定義方法が大きく変わった。

`登場前` クラスコンポーネントがメイン

↓

`登場後` 関数コンポーネント + Hooks（公式に推奨されている）
<br>
<br>

<h3 id="13-3">Hooksの登場"前"のReact</h3>

<ul>
<li>状態の管理やライフサイクルを利用するにはクラスコンポーネントを使用する必要があった。</li>
<li>関数コンポーネントは存在したが、stateを管理できず、データを受け取って表示するだけなどの単純なコンポーネントにしか使えなかった。</li>
</ul>

↓

**Hooks 登場前はクラスコンポーネントがメイン**
<br>
<br>

<h3 id="13-4">なぜクラスコンポーネントを学ぶのか？</h3>

<ul>
<li>クラスコンポーネントが多用されている過去のプロジェクトに参加している、将来する可能性がある</li>
<li>既存のシステムの改修に携わる可能性がある</li>
<li>クラスコンポーネントにしか対応していないライブラリを使用したい</li>
<li>Reactの理解を深めたい</li>
</ul>
<br>
<br>

<h3 id="13-5">クラスコンポーネントの問題点</h3>

`問題点1`<br>
<ins>共通のステートフルなロジックの再利用が難しい</ins>

高階コンポーネントやレンダープロップという設計パターンで、共通のロジックを分離して、ビュー（見た目）を担当するコンポーネントと合成することで関心を分離する。

↓

分離のたびにコンポーネントの再構成が必要であり、面倒な上にコードが追いにくくなる。
<br>

`問題点2`<br>
<ins>ステートの管理が複雑なコンポーネントは保守性が低い</ins>

コンポーネントが複雑になると、ステートフルなロジックや副作用に関するロジックがコンポーネント内のいたる場所に存在してしまい、分散してしまう。

↓

コンポーネントが複雑化し、分割も困難になる。<br>
無理に分割しようとすると、問題点 1 が発生する。
<br>

`問題点3`<br>
<ins>JS の Class 構文は混乱を招き、関数に比べて可読性も低い。</ins>

JavaScript の Class 構文の`this`や`bind`などの独特な構文を理解してい意識する必要がある。

↓

コードの可読性が下がり、冗長になる。
<br>
<br>

<h3 id="13-6">クラスコンポーネントの問題点まとめ</h3>

<ol>
<li>ステートフルな共通のロジックの再利用が難しい</li>
<li>ステートの管理が複雑になると保守性が下がる</li>
<li>そもそもJSのクラスが混乱を招きやすく可読性が低い</li>
</ol>

↓

これらの問題を解決するため、Hooks が導入された。
<br>
<br>

<h3 id="13-7">コンポーネントのライスサイクルとは？</h3>

コンポーネントの一生には 3 つの段階がある。

<ol>
<li>Mounting</li>
<li>Updating</li>
<li>Unmounting</li>
</ol>

それぞれの段階で特別なメソッドが用意されており、特定のタイミングで実行させることができる。
<br>
<br>

<h3 id="13-8">主なライフサイクルメソッド</h3>

**Mounting**<br>
`componentDidMount()`: 1 回目の`render()`が呼ばれ、DOM がレンダーされた後に 1 度だけ実行される。

**Updating**<br>
`componentDidUpdate()`: state が更新された直後に実行される。

**Unmounting**<br>
`componentWillUnmount()`: コンポーネントが破棄される直前に実行される。

[Class コンポーネントのライフサイクル](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
<br>
<br>

<h3 id="13-9">ライフサイクルメソッドとuseEffectの比較</h3>

| クラスコンポーネント     | 関数コンポーネント                           |
| ------------------------ | -------------------------------------------- |
| `componentDidMount()`    | `useEffect(..., [])`                         |
| `componentDidUpdate()`   | `useEffect(..., [val])`                      |
| `componentWillUnmount()` | `useEffect(() => { return () => {...}}, [])` |

<br>
<br>

<h2 id="14">レンダリングの最適化</h2>

<ul>
<li><a href="#14-1">Reactが画面を更新する流れ</a></li>
<li><a href="#14-2">レンダリングがトリガーされるタイミング</a></li>
<li><a href="#14-3">stateの比較</a></li>
<li><a href="#14-4">レンダリング</a></li>
<li><a href="#14-5">コミット</a></li>
</ul>

<h3 id="14-1">Reactが画面を更新する流れ</h3>

**トリガー**: 何らかの契機にレンダリングを予約すること

↓

**レンダリング**: コンポーネントを実行すること

↓

**コミット**: DOM への更新を行うこと
<br>
<br>

<h3 id="14-2">レンダリングがトリガーされるタイミング</h3>

1. 初回レンダリング<br>
   ルートコンポーネントを HTML(DOM)にマウントしたとき

`<div id="app"></div>` ← `root.render(<App />);`

2. "state"の値が更新されたとき<br>
   コンポーネントの state の値が変更されたとき<br>
   ※ 基本的には state の前後の値に差が生じた際にレンダリングがスケジュールされる
   <br>
   <br>

<h3 id="14-3">stateの比較</h3>

"更新用関数で渡された値"と"保持している値"を比較

<img src="https://user-images.githubusercontent.com/39920490/209142132-e3197b8f-9804-4591-b11a-aca9b537c6ac.png" width="1000px" alt="stateの比較">
<br>
<br>

値が異なることをもう少し具体的にすると、`Object.is(①, ②)`の結果が同じかどうかになる。

#### state の変更前後で値が同じ時も再レンダリングが発生することはある

> 現在値と同じ値で更新を行った場合、React は子のレンダーや副作用の事項を回避して処理を終了します
>
> 更新の回避が起きる前に React により該当のコンポーネント自体はレンダーされるかもしれない、ということに注意してください。
> ツリーのそれ以上「深く」にまで処理は及ばないためこれは問題ではないはずです。もしレンダー中にコストの高い計算を行っている場合は useMemo を使った最適化が可能です。

[React 公式（state 更新の回避）](https://ja.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update)
<br>
<br>

<h3 id="14-4">レンダリング</h3>

React が（関数）コンポーネントを実行すること

↓

state の変更によってコンポーネントが**再実行**されることを**再レンダリング**と呼ぶ。

<img src="https://user-images.githubusercontent.com/39920490/209142138-c74c0b69-70af-456a-ae60-4791df02f043.png" width="300px" alt="レンダリング">
<br>
<br>

<h3 id="14-5">コミット</h3>

再レンダリングの結果、React が React 要素の差分のみを DOM に反映する

<img src="https://user-images.githubusercontent.com/39920490/209142141-08290f09-2a92-4fe7-ba01-4b09cf8acb77.png" width="1000px" alt="コミット">
<br>
<br>

<h2 id="15">パフォーマンスの最適化</h2>

<ul>
<li><a href="15-1">再レンダリングを防ぐための関数</a></li>
<li><a href="15-2">React.memo</a></li>
<li><a href="15-3">関数がpropsに渡る場合</a></li>
<li><a href="15-4">useCallback</a></li>
<li><a href="15-5">useMemo</a></li>
</ul>

<h3 id="15-1">再レンダリングを防ぐための関数</h3>

<img src="https://user-images.githubusercontent.com/39920490/209558307-bde16eea-bc71-492c-8d5b-173dc17c4bb2.png" width="550px" alt="再レンダリングを防ぐための関数">
<br>
<br>

<h3 id="15-2">React.memo</h3>

受け取った props の値が同じであれば再レンダリングをスキップ

<img src="https://user-images.githubusercontent.com/39920490/209558313-ef2391cc-b75b-4dcf-aabf-4e26169a5b2b.png" width="1200px" alt="React.memo">
<br>
<br>

<h3 id="15-3">関数がpropsに渡る場合</h3>

コンポーネント内で定義した**関数**は再レンダリングのたびに再生成される。

<img src="https://user-images.githubusercontent.com/39920490/209558311-46913459-4300-4a6d-bf42-2072511ee6c3.png" width="1000px" alt="関数がpropsに渡る場合">
<br>
<br>

<h3 id="15-4">useCallback</h3>

コンポーネント内で定義した**"関数"**をメモして再利用し、レンダリングの度に生成されることを防ぐ

↓

子コンポーネントに関数を渡している場合に、**不要な再レンダリングを防ぐ**ことができる。
<br>
<br>

<h3 id="15-5">useMemo</h3>

コンポーネントだけでなく値をメモすることが可能。コストの高い処理などをメモ化する。

↓

useMemo 自体の実行にもコストがかかるため、思い処理にのみ使用すること。
<br>
<br>

<h2 id="16">Rest APIを使ったサーバーとの通信</h2>

<ul>
<li><a id="16-1">サーバーとブラウザの関係</a></li>
<li><a id="16-2">Rest APIとは？</a></li>
<li><a id="16-3">通常のリクエスト</a></li>
<li><a id="16-4">Rest API</a></li>
</ul>

<h3 id="16-1">サーバーとブラウザの関係</h3>

<img src="https://user-images.githubusercontent.com/39920490/209960746-0190daa8-4696-4a44-b87f-18c9f90d4607.png" width="1000px" alt="サーバーとブラウザの関係">
<br>
<br>

<h3 id="16-2">Rest APIとは？</h3>

以下の特徴を持つ、サーバーへのリクエスト方式のこと

<ul>
<li>リソースごとにURLを定義</li>
<li>
メソッドでリソースに対する処理を定義
<ul>
<li>メソッドの例）POST、GET、DELETE、PUTなど</li>
</ul>
</li>
<li>JSONでデータをやりとりする</li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/209961080-43b234c9-dac1-4480-b470-67cd9571824a.png" width="400px" alt="Rest API">
<br>
<br>

<h3 id="16-3">通常のリクエスト</h3>

処理ごとに URL のパスを設ける

<img src="https://user-images.githubusercontent.com/39920490/209966430-c96e656e-628c-4a84-9ca0-46a42bd4f45f.png" width="900px" alt="通常のリクエスト">
<br>
<br>

<h3 id="16-4">Rest API</h3>

リソースごとに URL のパスを設ける

<img src="https://user-images.githubusercontent.com/39920490/209963050-d1b1633a-ed0d-48b0-98e5-2ba12f064bb4.png" width="900px" alt="Rest API">
<br>
<br>

<h2 id="17">Next.js</h2>

<ul>
<li><a id="17-1">Next.jsとは</a></li>
<li><a id="17-2">Reactとの違い</a></li>
<li><a id="17-3">Next.jsのメリット</a></li>
<li><a id="17-4">Next.jsの主な機能</a></li>
<li><a id="17-5">プロジェクト構成</a></li>
<li><a id="17-6">ファイルベースルーティング</a></li>
<li><a id="17-7">ページ遷移</a></li>
<li><a id="17-8">その他</a></li>
</ul>

<h3 id="17-1">Next.jsとは</h3>

React 開発のためのフレームワーク

高速な Web アプリケーションを作成するための様々な機能を提供

<img src="https://user-images.githubusercontent.com/39920490/210026410-eecff3e7-c532-4f23-bc3d-7214ccdaeb92.png" width="600px" alt="Next.jsとは">
<br>
<br>

<h3 id="17-2">Reactとの違い</h3>

<ul>
<li>
React
<ul>
<li>UIを構築するための機能を提供するライブラリ</li>
</ul>
</li>
<li>
Next.js
<ul>
<li>React開発のための機能を提供するフレームワーク</li>
</ul>
</li>
</ul>
<br>
<br>

<h3 id="17-3">Next.jsのメリット</h3>

ゼロコンフィグで高度な機能を使用可能。

手動で複雑な設定をする必要なく、効率的に開発を進めることができる。
<br>
<br>

<h3>Next.jsの主な機能</h3>

<ul>
<li>複数のレンダリング方法（SSR、SG、ISG）</li>
<li>ファイルベースルーティング（ダイナミックルート）</li>
<li>APIの作成（API Routes）</li>
<li>デベロッパーに優しい開発環境（ゼロコンフィグ）</li>
</ul>
<br>
<br>

<h3 id="17-5">プロジェクト構成</h3>

<ul>
<li>
/pages
<ul><li>ファイルまでのパスがそのままページになる</li></ul>
</li>
<li>
/styles
<ul><li>グローバルに適用されるスタイルを配置</li></ul>
</li>
<li>
/pages/_app.js
<ul><li>ページ遷移時に必ず呼ばれる処理を記述</li></ul>
</li>
<li>
next.config.js
<ul><li>Next.jsの設定を記載</li></ul>
</li>
</ul>
<br>
<br>

<h3 id="17-6">ファイルベースルーティング</h3>

<ul>
<li>pages配下からexportされたコンポーネントを1ページとしてルーティングする。</li>
<li>[id]は動的なパスとして認識される。</li>
<li>getServerSideProps、queryでダイナミックルートを取得する</li>
</ul>
<br>
<br>

<h3 id="17-7">ページ遷移</h3>

・`useRouter`<br>
ページ遷移を行うための値やメソッドを取得する際に利用

・`<Link href>`<br>
href に遷移先の URL を設定する
<br>
<br>

<h3 id="17-8">その他</h3>

・`<Head>`<br>
`<head>`タグ内に挿入したいタグを記載する

・`<Script>`<br>
外部スクリプトを読み込む際に使用
<br>
<br>

<h2 id="18">Next.jsにおけるレンダリング</h2>

<ul>
<li><a href="18-1">複数のレンダリング方法の選択</a></li>
<li><a href="18-2">CSR - クライアントサイドレンダリング</a></li>
<li><a href="18-3">SSR - サーバーサイドレンダリング</a></li>
<li><a href="18-4">SG - 静的サイト生成</a></li>
<li><a href="18-5">Next.jsの基本構成</a></li>
<li><a href="18-6">ISR - インクリメンタル静的再作成</a></li>
</ul>

<h3 id="18-1">複数のレンダリング方法の選択</h3>

<ul>
<li>CSR - クライアントサイドレンダリング</li>
<li><strong>SSR - サーバーサイドレンダリング</strong></li>
<li><strong>SG - 静的サイト生成</strong></li>
<li>ISR - インクリメンタル静的再生成</li>
</ul>
<br>
<br>

<h3 id="18-2">CSR - クライアントサイドレンダリング</h3>

・データフェッチやルーティングの全てがクライアント上で行われる

**→ これまで行ってきた React 開発は CSR に分類される**

※ Next.js の開発ではクライアント側で**のみ**行いたい処理は`useEffect`で囲む

<img src="https://user-images.githubusercontent.com/39920490/210177069-52181d7b-1d82-4ac1-8412-e8801e3c4392.png" width="800px" alt="CSR - クライアントサイドレンダリング">
<br>
<br>

<ul>
<li>メリット
<ul>
<li>静的なファイルの配置のみで動く</li>
<li>Node.jsの実行は必要ないため、サーバーの負荷が軽い</li>
</ul>
</li>
<li>デメリット
<ul>
<li>初期描画までに時間がかかる</li>
<li>クローラーによっては<strong>SEO的な問題あり</strong></li>
</ul>
</li>
</ul>
<br>
<br>

<h3 id="18-3">SSR - サーバーサイドレンダリング</h3>

<ul>
<li>Node.js（サーバー）にリクエストが来たタイミングで動的にHTMLを生成</li>
<li>外部APIへのデータの取得やコンポーネントのpropsの値を決定する処理を行い、HTMLを作成してクライアント側に返却する</li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/210177070-243a892a-4988-4c16-bcbf-013778f88383.png" width="800px" alt="SSR - サーバーサイドレンダリング">
<br>
<br>

<ul>
<li>メリット
<ul>
<li>生成済みのHTMLを取得するのでSEOに強い</li>
</ul>
</li>
<li>デメリット
<ul>
<li>生成処理を全てサーバー側でするので負担大</li>
<li>HTMLをクライアントに渡すまで時間がかかる</li>
</ul>
</li>
</ul>
<br>
<br>

<h3 id="18-4">SG - 静的サイト生成</h3>

<ul>
<li><strong>ビルド時</strong>にデータフェッチやpropsの値の決定を行い、HTMLを構築する</li>
<li>クライアントからリクエストされると、サーバー側で構築することなく、生成済みのHTMLを渡す</li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/210177073-370a19c9-9765-422a-9bd2-96c4ef20badc.png" width="1150px" alt="SG - 静的サイト生成">
<br>
<br>

<ul>
<li>メリット
<ul>
<li>構築済みページのため表示速度が早い</li>
<li>SEOも問題なし</li>
</ul>
</li>
<li>デメリット
<ul>
<li>更新頻度が高い動的コンテンツとの相性が悪い</li>
</ul>
</li>
</ul>

<h3 id="18-5">Next.jsの基本構成</h3>

基本的なページは

**SG - 静的サイト生成**

動的に作成する必要があるページは

**SSR - サーバーサイドレンダリング**

を用いる
<br>
<br>

<h3 id="18-6">ISR - インクリメンタル静的再作成</h3>

<ul>
<li>ビルド時にHTMLを構築</li>
<li>一定時間後にアクセスがあった場合、生成済みのHTMLを返しつつ、サーバー側でHTMLを更新</li>
<li>次のアクセス時に最新のHTMLを返す</li>
</ul>

<img src="https://user-images.githubusercontent.com/39920490/210177074-986e8257-9a7e-4437-873b-86cdbc3fc949.png" width="1100px" alt="ISR - インクリメンタル静的再作成">
<br>
<br>

<ul>
<li>メリット
<ul>
<li>SGを利用しながら動的なコンテンツも更新できる</li>
</ul>
</li>
<li>デメリット
<ul>
<li>サーバーの設定が少し手間</li>
<li>基本はNext.jsの開発元のVercelを使う</li>
</ul>
</li>
</ul>
<br>
<br>
