/* プリミティブ型とは */
/* プリミティブ型とは、TypeScriptが扱うことのできる基本的な値のこと。
具体的な例としては、文字列、数値、巨大な数値、真偽値、null、undefinedである。 */

const Example = () => {
  let str: string = "Hello";
  str = "Bye";
  console.log(str);

  let num: number = 102;
  console.log(num);

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  const nullish: null = null;
  console.log(nullish);
  const undefinedValue: undefined = undefined;
  console.log(undefinedValue);

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: "Hello" = "Hello";
};

export default Example;
