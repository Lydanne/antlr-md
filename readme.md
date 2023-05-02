# antlr md

使用 antlr4 开发的 markdown 解析器.

## 特性

- 使用 antlr4 开发
- 使用 Typescript 语言
- 支持浏览器环境

## 使用
```
npm i antlr-md
```

```js
import { parse, render } from 'antlr-md';

const mdText = `# 大标题

## 二级标题

这是正文。

`
console.log(render(parse(mdText))) 
```

## MD语法支持情况

- [x] 多级标题 (# hello)
- [x] 内联代码 (`hello`)
- [x] 块代码 (```)
- [ ] 项目列表 (-)
- [ ] 可选项目列表
- [ ] **加粗** (**)
- [ ] *倾斜字体* (*)
- [ ] ~~删除线~~ (~)
- [ ] HTML 标签支持

## License

MIT
