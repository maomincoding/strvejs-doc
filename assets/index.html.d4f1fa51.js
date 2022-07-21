import{o as n,a as s,f as a,g as t,F as p,c as e}from"./app.f16f0893.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=e(`<h1 id="started" tabindex="-1"><a class="header-anchor" href="#started" aria-hidden="true">#</a> Started</h1><p>The easiest way to try Strve.js is to use direct ingest CDN links. You can open it in your browser and follow the example to learn some basic usage.</p><p>It should be noted that the source code of Strve.js is managed by ES Modules, so when using it directly in the browser, you need to add a <code>type=&quot;module&quot;</code> attribute to the <code>script</code> tag to indicate that this file is used as a <code>module&#39; </code> way to run.</p><p>If you want to learn more about Strve.js in depth, you can read on.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Strve.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
			<span class="token keyword">import</span> <span class="token punctuation">{</span>
				h<span class="token punctuation">,</span>
				createApp<span class="token punctuation">,</span>
				setData<span class="token punctuation">,</span>
			<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/strvejs@3.2.0/dist/strve.esm.min.js&#39;</span><span class="token punctuation">;</span>

			<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> h<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;h1 $key&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;
            &lt;button onClick=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>add<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;Add&lt;/button&gt; 
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
			app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="MWOmyLW" data-preview="true" data-editable="true" data-user="maomincoding" style="height:300px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em;"><span>See the Pen <a href="https://codepen.io/maomincoding/pen/MWOmyLW"> Strve.js-\u793A\u4F8B</a> by Vam (<a href="https://codepen.io/maomincoding">@maomincoding</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>`,6);function u(i,r){return n(),s(p,null,[l,(n(),a(t("script"),{async:"",src:"https://cpwebassets.codepen.io/assets/embed/ei.js"}))],64)}var d=o(c,[["render",u]]);export{d as default};
