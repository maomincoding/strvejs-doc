# 其它

## IDE 支持

### Visual Studio Code

- 模板字符串自动补全标签

打开设置下的`settings.json`，加入如下代码：

```json
"emmet.triggerExpansionOnTab": true,
"emmet.showAbbreviationSuggestions": true,
"emmet.showExpandedAbbreviation": "always",
"emmet.includeLanguages": {
    "javascript": "html"
}
```

注：如果在`<script>`内使用，要指定 `type`，如`type="module"；type="text/javascript"`。

- 支持 HTML 模板字符串高亮显示

下载[es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)插件后，在` h`` `方法中间加上`/*html*/`。

```js
function App() {
	return h/*html*/ `
        <div class='inner'>
            <p>${state.msg}</p>
        </div >
    `;
}
```

就像这样，在 VSCode 编辑器中，这个插件可以使 HTML 模板字符高亮显示。

![](./../../img/code1.png)

- 普通字符串转换为模板字符串

下载[template-string-converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)插件，然后在普通字符串内输入`${}`即可转换。

## UI 框架

- Bootstrap5

[https://v5.bootcss.com/](https://v5.bootcss.com/)

- Tailwindcss

[https://www.tailwindcss.cn/](https://www.tailwindcss.cn/)

## 浏览器兼容性

因为 Strve.js 项目构建工具默认采用[Vite](https://vitejs.dev/)来搭建的，所以默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入。传统浏览器可以通过官方插件`@vitejs/plugin-legacy`支持。

例如：

```js
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
	// options
	server: {
		strictPort: true,
		port: 3001,
	},
	plugins: [
		legacy({
			targets: ['ie >= 9'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
		}),
	],
});
```

## 关于作者

- 英文名：**Vam**
- 昵称 ID：**maomincoding**
- Github：[https://github.com/maomincoding](https://github.com/maomincoding)
- Twitter：[https://twitter.com/maomincoding](https://twitter.com/maomincoding)
- 微信公众号：前端历劫之路
