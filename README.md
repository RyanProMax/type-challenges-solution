# type-challenges-solution

搭配 type-challenges 食用的 TS 学习笔记📚

> type-challenges: https://github.com/type-challenges/type-challenges
>
> Github 大佬的解析: https://github.com/ghaiklor/type-challenges-solutions/tree/main/zh

## 1. Progress

### 1.1 wram-up (1/1 done)

- [x] 13-warm-hello-world

### 1.2 easy (13/13 done)

- [x] [4-easy-pick](./questions/4-easy-pick/template.ts)
- [x] [7-read-only](./questions/7-read-only/template.ts)
- [x] [11-easy-tuple-to-object](./questions/11-easy-tuple-to-object/template.ts)
- [x] [14-easy-first](./questions/14-easy-first/template.ts)
- [x] [18-easy-tuple-length](./questions/18-easy-tuple-length/template.ts)
- [x] [43-easy-exclude](./questions/43-easy-exclude/template.ts)
- [x] [189-easy-awaited](./questions/189-easy-awaited/template.ts)
- [x] [268-easy-if](./questions/268-easy-if/template.ts)
- [x] [533-easy-concat](./questions/533-easy-concat/template.ts)
- [x] [898-easy-includes](./questions/898-easy-includes/template.ts)
- [x] [3057-easy-push](./questions/3057-easy-push/template.ts)
- [x] [3060-easy-unshift](./questions/3060-easy-unshift/template.ts)
- [x] [3312-easy-parameters](./questions/3312-easy-parameters/template.ts)

### 1.3 medium (25/67 done)

- [x] [2-medium-return-type](./questions/2-medium-return-type/template.ts)
- [x] [3-medium-omit](./questions/3-medium-omit/template.ts)
- [x] [8-medium-readonly-2](./questions/8-medium-readonly-2/template.ts)
- [x] [9-medium-deep-readonly](./questions/9-medium-deep-readonly/template.ts)
- [x] [10-medium-tuple-to-union](./questions/10-medium-tuple-to-union/template.ts)
- [x] [12-medium-chainable-options](./questions/12-medium-chainable-options/template.ts)
- [x] [15-medium-last](./questions/15-medium-last/template.ts)
- [x] [16-medium-pop](./questions/16-medium-pop/template.ts)
- [x] [20-medium-promise-all](./questions/20-medium-promise-all/template.ts)
- [x] [62-medium-type-lookup](./questions/62-medium-type-lookup/template.ts)
- [x] [106-medium-trimleft](./questions/106-medium-trimleft/template.ts)
- [x] [108-medium-trim](./questions/108-medium-trim/template.ts)
- [x] [110-medium-capitalize](./questions/110-medium-capitalize/template.ts)
- [x] [116-medium-replace](./questions/116-medium-replace/template.ts)
- [x] [119-medium-replaceall](./questions/119-medium-replaceall/template.ts)
- [x] [191-medium-append-argument](./questions/191-medium-append-argument/template.ts)
- [x] [296-medium-permutation](./questions/296-medium-permutation/template.ts): i think it's difficult
- [x] [298-medium-length-of-string](./questions/298-medium-length-of-string/template.ts)
- [x] [459-medium-flatten](./questions/459-medium-flatten/template.ts)
- [x] [527-medium-append-to-object](./questions/527-medium-append-to-object/template.ts)
- [x] [529-medium-absolute](./questions/529-medium-absolute/template.ts)
- [x] [531-medium-string-to-union](./questions/531-medium-string-to-union/template.ts)
- [x] [599-medium-merge](./questions/599-medium-merge/template.ts)
- [x] [610-medium-camelcase](./questions/610-medium-camelcase/template.ts)
- [x] [612-medium-kebabcase](./questions/612-medium-kebabcase/template.ts)
- [ ] [645]()
- [ ] [949]()
- [ ] [1042]()
- [ ] [1097]()
- [ ] [1130]()
- [ ] [1367]()
- [ ] [1978]()
- [ ] [2070]()
- [ ] [2257]()
- [ ] [2595]()
- [ ] [2688]()
- [ ] [2693]()
- [ ] [2757]()
- [ ] [2759]()
- [ ] [2793]()
- [ ] [2852]()
- [ ] [2946]()
- [ ] [3062]()
- [ ] [3188]()
- [ ] [3192]()
- [ ] [3196]()
- [ ] [3243]()
- [ ] [3326]()
- [ ] [3376]()
- [ ] [4179]()
- [ ] [4182]()
- [ ] [4260]()
- [ ] [4425]()
- [ ] [4471]()
- [ ] [4484]()
- [ ] [4499]()
- [ ] [4518]()
- [ ] [4803]()
- [ ] [5117]()
- [ ] [5140]()
- [ ] [5153]()
- [ ] [5310]()
- [ ] [5317]()
- [ ] [5360]()
- [ ] [5821]()
- [ ] [7258]()
- [ ] [7544]()

## 2. Note

### 2.1 tsconfig.json

#### 2.1.1 作用

- 标识 TypeScript 项目的根目录
- 配置 TypeScript 编译器
- 指定编译文件

#### 2.1.2 重要字段

- files: 指定编译文件的名称
- include: 设置需要进行编译的文件，支持路径模式匹配
- exclude: 设置无需进行编译的文件，支持路径模式匹配
- compilerOptions: 其它编译流程选项

#### 2.1.3 compilerOptions

```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015','ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015', 'esnext'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true,         // 为装饰器提供元数据的支持
    "esModuleInterop": true,               // 支持使用 import d from 'cjs' 的方式引入 commonjs 包
    "skipLibCheck": false,                 // 跳过所有 .d.ts 文件的类型检查
  }
}
```

## 2.2 遍历对象、数组

- 遍历对象键（T 为对象）: `P in keyof T`
- 遍历数组索引（T 为数组）: `P in keyof T`
- 遍历数组值（T 为数组）: `P in T[number]`

## 2.3 extends

> [TypeScript extends 精读与实践](https://github.com/MuYunyun/blog/issues/140)

上文详细叙述了 `extends` 在不同应用场景中的使用，值得一看。

## 2.4 keyof any

string | number | symbol

## 2.5 Equal<X, Y>

[How does the `Equals` work in typescript?](https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796)

```ts
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
```

## 2.6 infer

> [理解TypeScript中的infer关键字](https://juejin.cn/post/6844904170353328135)

## 2.7 as

[使用 “as” 语法重新映射键类型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)，可用于过滤指定键。
