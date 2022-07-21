import{c as e}from"./app.f16f0893.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const t={},o=e('<h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log" aria-hidden="true">#</a> Change Log</h1><h2 id="v3-2-0" tabindex="-1"><a class="header-anchor" href="#v3-2-0" aria-hidden="true">#</a> v3.2.0</h2><ul><li>Add <code>domInfo</code>, <code>propsData</code> API;</li><li>Added <code>onMounted</code>, <code>onUnmounted</code>, <code>nextTick</code>Hook;</li><li>remove <code>emit</code> API;</li><li>Added <code>$props</code> tag;</li><li>Added iife file format, an automatic function, suitable as <code>&lt;script&gt;</code> tag;</li></ul><h2 id="v3-1-0" tabindex="-1"><a class="header-anchor" href="#v3-1-0" aria-hidden="true">#</a> v3.1.0</h2><ul><li><p>Modify API:</p><table><thead><tr><th>Old API</th><th>New API</th></tr></thead><tbody><tr><td><code>Strve</code></td><td><code>createApp</code></td></tr><tr><td><code>render</code></td><td><code>h</code></td></tr><tr><td><code>updateView</code></td><td><code>setData</code></td></tr><tr><td><code>watchDOMChange</code></td><td><code>watchDom</code></td></tr><tr><td><code>emitEvent</code></td><td><code>emit</code></td></tr><tr><td><code>strveVersion</code></td><td><code>version</code></td></tr><tr><td><code>deepCloneData</code></td><td><code>clone</code></td></tr></tbody></table></li><li><p>Adjust <code>createApp</code> API;</p></li><li><p><code>useFkey</code> tag changed to <code>useFirstKey</code>;</p></li><li><p>add tags <code>$key</code>, <code>$name</code>;</p></li><li><p>Add component tag <code>&lt;component&gt;</code>, empty node tag <code>&lt;null&gt;</code>;</p></li><li><p>Adjust <code>setData</code> API;</p></li><li><p>Optimize the Diff algorithm;</p></li><li><p>TypeScript refactoring code;</p></li></ul><h2 id="v2-3-4" tabindex="-1"><a class="header-anchor" href="#v2-3-4" aria-hidden="true">#</a> v2.3.4</h2><ul><li>Added data deep copy API <code>deepCloneData</code>;</li></ul><h2 id="v2-3-3" tabindex="-1"><a class="header-anchor" href="#v2-3-3" aria-hidden="true">#</a> v2.3.3</h2><ul><li>Parameter adjustment of <code>Strve</code> API;</li></ul><h2 id="v2-3-2" tabindex="-1"><a class="header-anchor" href="#v2-3-2" aria-hidden="true">#</a> v2.3.2</h2><ul><li>HTML tag content supports displaying non-string types;</li><li>The <code>${}</code> symbol is used for data binding, and the <code>{}</code> symbol is no longer supported;</li><li>View templates support multiple root nodes;</li><li>View template supports Text node;</li><li>Fixed switching states during conditional rendering, and nodes could not be rendered correctly;</li><li>Added <code>watchDOMChange</code> API for monitoring DOM tree changes;</li><li>Added support for HTML template string highlighting (VSCode editor needs to install <code>es6-string-html</code> plugin);</li><li>Remove the <code>data</code> attribute parameter of the <code>Strve</code> API;</li><li>View templates support Class writing;</li></ul><h2 id="v2-3-1" tabindex="-1"><a class="header-anchor" href="#v2-3-1" aria-hidden="true">#</a> v2.3.1</h2><ul><li>Modify some error messages;</li></ul><h2 id="v2-3-0" tabindex="-1"><a class="header-anchor" href="#v2-3-0" aria-hidden="true">#</a> v2.3.0</h2><ul><li>Added version number <code>strveVersion</code> API;</li><li>Modify the internal logic of <code>updateView</code> API;</li></ul><h2 id="v2-2-0" tabindex="-1"><a class="header-anchor" href="#v2-2-0" aria-hidden="true">#</a> v2.2.0</h2><ul><li>Support SVG elements;</li><li>Optimize internal diff algorithm;</li><li>Add necessary error prompt;</li></ul><h2 id="v2-1-0" tabindex="-1"><a class="header-anchor" href="#v2-1-0" aria-hidden="true">#</a> v2.1.0</h2><ul><li>Fixed the problem that the DOM attribute property could not be assigned;</li><li>Improve the logical problem of converting strings to virtual DOM;</li></ul><h2 id="v2-0-0" tabindex="-1"><a class="header-anchor" href="#v2-0-0" aria-hidden="true">#</a> v2.0.0</h2><ul><li><p>Inserting data into the head of the list needs to bind the <code>useFkey</code> field to avoid repeated rendering of the <code>DOM</code> node;</p></li><li><p>Hide the <code>DOM</code> node event method after rendering;</p></li><li><p>Bind the <code>Style</code> style (object);</p></li><li><p>The binding properties are uniformly bound using the <code>${}</code> symbol;</p></li><li><p>Support HTML template string highlighting (VSCode editor needs to install <code>comment-tagged-templates</code> plugin);</p></li><li><p>Support parent and child components to pass values to each other;</p></li><li><p>Adapt to Bootstrap5\u3001Tailwindcss UI framework;</p></li></ul>',21);function i(a,r){return o}var n=d(t,[["render",i]]);export{n as default};
