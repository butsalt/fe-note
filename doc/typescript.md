# typescript


## namespace vs module
namespace: 用namespace的语法创建全局对象
module: 用ESNext的模块化语法创建对象


## module
* 在编译时通过`module`声明编译后的产出文件使用的模块语法

* 当`module`的值不为'ESNext'，也不为'CommonJS'时，代码中不支持使用dynamic import。因为dynamic import只在'ESNext'和'CommonJS'语法中存在对应的语法实现

* 'ES6'模块语法不支持dynamic import

* 在编译时通过`moduleResolution`告知编译器该如何resolve依赖，'classic'是typescript过去的resolve方式，'node'是目前最流行的，比如`node_modules`，`module/index.js`都包含在'node'提出的resolve方式中


## namespace

```typescript
  namespace A {
    // 需要暴露给外部使用的成员需要export
    export const name: string;

    // 外部不可使用
    const _name: string;
  }
```

```typescript
  // A是全局对象，直接使用
  console.log(A.name);
```


## declare关键字
delcare关键字用于为*本地未实现的*或*本地虽有实现但无法提供typescript类型描述的*module或全局对象提供typescript类型描述

### 如何引入？
* 一般项目都提供一个`global.d.ts`文件，将所有`declare`写入其中，然后在`tsconfig.json`中通过`include`，`files`等方式引入进来

* 如果不使用`tsconfig.json`文件引入，也可以在依赖描述的代码文件的开头处使用`/// <reference>`引入各类`.d.ts`文件

* 再偷懒的就是在依赖描述的代码文件中直接declare了

### 写法
* module
```typescript
  declare module 'D' {
    // 需要暴露给外部使用的成员需要export
    export const name: string;
    // 没export的成员外部只要后面没被default export外部也可以使用，但不推荐这样做
  }
```

```typescript
  import { name } from 'D';

  console.log(name);
```

* 全局对象
```typescript
  declare namespace D {
    // declare namespace下的所有成员不用export，外部都可以使用
    const name: string;
  }
```

```typescript
  console.log(D.name);
```


### /// <reference>

* 用于声明文件间的依赖，当所有文件最终通过`--outFile`打包到一个文件时，如果源代码仅使用namespace来实现，就可以通过`/// <reference>`来调整内容顺序（比如a依赖b，通过reference声明后，b就会先于a被输出）。如果使用了module来实现，就可以不用，因为module本身就描述了依赖关系

* 声明依赖后，就可以在本文件中使用被依赖文件中声明的全局类型了
