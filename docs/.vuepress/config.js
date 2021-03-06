module.exports = {
	base: '/strvejs-doc/',
	title: 'Strve.js',
	description: 'A JS library that can convert strings into view',
	head: [['link', { rel: 'icon', href: '/strvejs-doc/' + 'logo.png' }]],
	plugins: [
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search',
					},
					'/zh/': {
						placeholder: '搜索',
					},
				},
				maxSuggestions: 8,
			},
		],
	],
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Strve.js',
			description: 'A JS library that can convert strings into view',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'Strve.js',
			description: '一个可以将字符串转换为视图的JS库',
		},
	},
	themeConfig: {
		contributors: false,
		lastUpdated: false,
		darkMode: true,
		logo: '/logo.png',
		displayAllHeaders: true,
		sidebar: 'auto',
		sidebarDepth: 4,
		locales: {
			'/': {
				selectLanguageText: 'Languages',
				selectLanguageName: 'English',
				selectLanguageAriaLabel: 'English',
				navbar: [
					{ text: 'GitHub', link: 'https://github.com/maomincoding/strve' },
					{ text: 'Change log', link: '/changeLog/' },
				],
				sidebar: [
					{
						text: 'Introduce',
						link: '/introduce/',
					},
					{
						text: 'Install',
						link: '/install/',
					},
					{
						text: 'Started',
						link: '/started/',
					},
					{
						text: 'Usage',
						link: '/usage/',
					},
					{
						text: 'Tool',
						link: '/tool/',
					},
					{
						text: 'Other',
						link: '/other/',
					},
				],
			},
			'/zh/': {
				selectLanguageText: '选择语言',
				selectLanguageAriaLabel: '简体中文',
				selectLanguageName: '简体中文',
				navbar: [
					{ text: 'GitHub', link: 'https://github.com/maomincoding/strve' },
					{ text: '更新日志', link: '/zh/changeLog/' },
				],
				sidebar: [
					{
						text: '介绍',
						link: '/zh/introduce/',
					},
					{
						text: '安装',
						link: '/zh/install/',
					},
					{
						text: '开始',
						link: '/zh/started/',
					},
					{
						text: '使用',
						link: '/zh/usage/',
					},
					{
						text: '工具',
						link: '/zh/tool/',
					},
					{
						text: '其它',
						link: '/zh/other/',
					},
				],
			},
		},
		smoothScroll: true,
	},
};
