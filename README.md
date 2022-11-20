## 目次

<ul>
  <li><a href="#01">Reactの基礎</a></li>
  <li><a href="#02">イベントリスナーと状態管理（state）</a></li>
  <li><a href="#03">制御構文とフォームの制御</a></li>
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

<img src="https://user-images.githubusercontent.com/39920490/199717046-deafe89b-0074-463a-8a12-369d096508df.png" width="100%" style="max-width:1200px" alt="JSX" />
<br>
<br>

<h3 id="01-2">JSX がオブジェクトに変換される過程</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510527-b502d88b-b2bb-4a4d-a36e-524db6066c08.png" width="100%" style="max-width:1200px" alt="JSXがオブジェクトに変換される過程" />
<br>
<br>

<h3 id="01-3">React 要素のレンダー</h3>

ReactDOM が仮想 DOM を元に DOM を更新する。

<img src="https://user-images.githubusercontent.com/39920490/201510529-7f9d2dce-a280-41ac-bd69-e7ffac93dce0.png" width="100%" style="max-width: 1200px" alt="React要素のレンダー" />
<br>
<br>

<h3 id="01-4">コンポーネントの定義</h3>

コンポーネントは JavaScript の関数として定義する。

<img src="https://user-images.githubusercontent.com/39920490/201510530-6b044bf4-c1a1-4b64-83b9-999f3e3eb3b7.png" width="100%" style="max-width:1200px" alt="コンポーネントの定義" />

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

<img src="https://user-images.githubusercontent.com/39920490/201510533-fe7df4f7-419c-4132-8935-eb9959890256.png" width="100%" style="max-width:1200px" alt="コンポーネントの親子関係" />
<br>
<br>

<h3 id="01-7">コンポーネント間のデータのやりとり</h3>

コンポーネントは props を親から子に渡すことでデータを受け渡す。<br>
props を通して JavaScript のあらゆる値を渡すことができる。

<img src="https://user-images.githubusercontent.com/39920490/201510534-b9c32263-44e4-4c6d-a45e-2c405b7f0ef1.png" width="100%" style="max-width:450px" alt="コンポーネント間のデータのやりとり" />

**props の流れは一方通行**<br>
props を子から親に渡すことはできない。

**props は読み取り専用**<br>
コンポーネント内で props の値を変更してはいけない。
<br>
<br>

<h3 id="01-8">React 要素とコンポーネント</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510535-f49449a5-18db-4e57-b201-b8cdc2dceb21.png" width="100%" style="max-width:1200px" alt="React要素とコンポーネント" />
<br>
<br>

<h3 id="01-9">コンポーネントツリー</h3>

<img src="https://user-images.githubusercontent.com/39920490/201510537-2710c654-e06d-49de-b35f-9496cec6163f.png" width="100%" style="max-width:1200px" alt="コンポーネントツリー" />
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

<img src="https://user-images.githubusercontent.com/39920490/202904267-8b6acb2c-da5b-46c0-b62f-f760c4b1e2b5.png" width="100%" style="max-width:500px" alt="画面が変更されるために必要な処理" />
<br>
<br>

<h3 id="02-2">useState の役割と使い方</h3>

① 接続（Hook into）<br>
React 内部と接続。状態が管理されるようになる。

② "現在の値"と"更新関数"を返却する。

③ 更新関数で**新しい値を React に渡す**。また、React に自身のコンポーネントを再実行するように依頼する。

<img src="https://user-images.githubusercontent.com/39920490/202904294-e5d1e51a-c793-45c8-8ca0-f8641ce9e563.png" width="100%" style="max-width:500px" alt="useStateの役割と使い方" />

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

<img src="https://user-images.githubusercontent.com/39920490/202904319-31e57d20-eb90-495a-b277-a2848abb3562.png" width="100%" style="max-width:1200px" alt="state更新用関数とレンダリング" />
<br>
<br>

<h3 id="02-5">state はコンポーネント毎に状態（値）を保持</h3>

コンポーネントに紐づく値はそれぞれ独立している。

↓

**React 要素のツリー内の位置**によっってどのコンポーネントの state か識別している。

<img src="https://user-images.githubusercontent.com/39920490/202904344-7f51d3bc-871c-45dd-bd74-83fc7a66acc0.png" width="100%" style="max-width:500px" alt="stateはコンポーネント毎に状態（値）を保持している" />
<br>
<br>

<h3 id="02-6">React 要素のツリー構造が変わらない場合</h3>

コンポーネントの**React 要素ツリーにおける位置**が変わらない場合は state は保持される

<img src="https://user-images.githubusercontent.com/39920490/202904374-396d1696-cf2b-428d-bf96-9f03d593dbee.png" width="100%" style="max-width:700px" alt="React要素のツリー構造が変わらない場合" />
<br>
<br>

<h3 id="02-7">同じ位置に独立してコンポーネントを表示</h3>

key を付けることによって同じ位置の同じコンポーネントでも別物と認識させることができる。

<img src="https://user-images.githubusercontent.com/39920490/202904392-8e16920c-9eba-4ea1-a4e1-49bcd428228d.png" width="100%" style="max-width:700px" alt="同じ位置に独立してコンポーネントを表示" />
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

<img src="https://user-images.githubusercontent.com/39920490/202904624-77af870f-cc12-4161-a57f-e1d3f4d655cc.png" width="100%" style="max-width:1200px" alt="前提知識" />
<br>
<br>

最後に要素を挿入した場合

差分検出は子の React 要素に対して先頭から順に比較し、差分処理を行う

<img src="https://user-images.githubusercontent.com/39920490/202904796-087d5ebd-50a4-4c5a-b9a7-b5dfa784f7f9.png" width="100%" style="max-width:1200px" alt="最後に要素を挿入した場合" />
<br>
<br>

先頭に要素を挿入した場合（key なし）

<img src="https://user-images.githubusercontent.com/39920490/202905083-3bb1cac8-a66b-40c0-a3b6-fbcd68183951.png" width="100%" style="max-width:1200px" alt="最後に要素を挿入した場合" />

React は全ての子の React 要素を変更してしまい、全ての Real DOM を洗替える（子要素を全て削除して、新しい子要素を追加する）。
<br>
<br>

先頭に要素を挿入した場合（key あり）

<img src="https://user-images.githubusercontent.com/39920490/202905160-f0b61830-fca2-4331-be74-3f49326c3844.png" width="100%" style="max-width:1200px" alt="最後に要素を挿入した場合" />

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
