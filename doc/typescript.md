# typescript

## `.d.ts`

### 概念

用于为*本地未实现的*或*本地虽有实现但无法提供typescript类型描述的*module或全局对象提供typescript类型定义

### declare关键字

一般出现在`.d.ts`文件中，声明接下来的内容是作为`类型定义`，而不是`实际内容`

### 如何引入？

* 一般项目都提供一个`global.d.ts`文件，将除`node_modules`以外的所有类型定义写入其中，然后在`tsconfig.json`中通过`include`，`files`等方式引入进来

* 如果不使用`tsconfig.json`文件引入，也可以在依赖描述的代码文件的开头处使用`/// <reference>`引入各类`.d.ts`文件

* 再偷懒的就是在依赖描述的代码文件中直接`declare`了

### `/// <reference>`

* 用于声明文件间的依赖，当所有文件最终通过`--outFile`打包到一个文件时，如果源代码仅使用`namespace`来实现，就可以通过`/// <reference>`来调整内容顺序（比如a依赖b，通过reference声明后，b就会先于a被输出）。如果使用了module来实现，就可以不用，因为module本身就描述了依赖关系

* 声明依赖后，就可以在本文件中使用被依赖文件中声明的`全局对象`或`module`了

## namespace

### 概念

* 用namespace的语法创建全局对象

### 用法

`.ts`

```typescript
  namespace A {
    // 外部不可使用
    const _name: string = 'foo';

    // 需要暴露给外部使用的成员需要export
    export const name: string = _name;
  }
```

```typescript
  // A是全局对象，直接使用
  console.log(A.name);
```

`.d.ts`

```typescript
  declare namespace A {
    // export可加可不加
    /* export */ const name: string;
  }
```

```typescript
  // 通过reference引入

  // A是全局对象，直接使用
  console.log(A.name);
```

## module

### 概念

* 用ECMAScript的模块化语法创建对象

* 在编译时通过`module`声明编译后的产出文件使用的模块语法

* 当`module`的值不为'ESNext'，也不为'CommonJS'时，代码中不支持使用dynamic import。因为dynamic import只在'ESNext'和'CommonJS'语法中存在对应的语法实现

* 'ES6'模块语法不支持dynamic import

* 在编译时通过`moduleResolution`告知编译器该如何resolve依赖，'classic'是typescript过去的resolve方式，'node'是目前最流行的，比如`node_modules`，`module/index.js`都包含在'node'提出的resolve方式中

### 用法

`.d.ts`

```typescript
  declare module 'A' {
    // export可加可不加
    /* export */  const name: string;
  }
```

`.ts`

```typescript
  import { name } from 'A';

  console.log(name);
```

### `export =`

有些`module`采用的实现是`CommonJS`或`AMD`，它们与ECMAScript的`export default`存在语法的冲突，这个时候要用`export =`来声明这个`module`的导出部分

`.ts`

```typescript
  const name = 'foo';

  // compileOption的module值为'AMD'时，这个模块在被tsc编译后会是直接return 'foo'
  export = name;
```

```typescript
  import foo = require('./foo');

  console.log(foo === 'foo');
```

### `export as`

有些文件采用的实现是`UMD`，既可以用`module loader`导出又可以作为全局对象，在为这种文件声明类型定义时，通过追加`export as namespace Xxx`来表明它的全局对象的名称

`.d.ts`

```typescript
  export const name: string;

  // 全局对象的名称是Foo
  export as namespace Foo;
```

### `ts.transpileModule`

不做类型校验，直接将单独文件的内容编译成目标语言。`compile option`中有一项`isolatedModules`为`true`时`tsc`执行时就会做额外校验从而防止在进行单独文件编译时出现问题（比如有一个文件导出了另外一个文件中的类型定义，那么单文件编译后ts会因为不知道这是一个类型定义所以仍然导出，这样就有问题了）

### `esModuleInterop`

严格来说，`import foo from 'foo'`相当于`const foo = require('foo').default`。

`.ts`

```typescript
// 当esModuleInterop为false时，
// 如果foo是以export =导出的，那么就不能这样导入，因为这样声明导入的实际上是'foo'包的'default'的值，我们只能import * as foo from 'foo'

// 当esModuleInterop为true时，
// 即使foo是以export =导出的，也可以这样导入，编译结果的代码会检查'foo'的__esModule的值是否为true，如果为true就用'foo'包的'default'的值，否则就直接用'foo'包
import foo from 'foo';
```
