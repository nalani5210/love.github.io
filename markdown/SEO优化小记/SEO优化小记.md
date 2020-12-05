   最近做了一个在线服务类的小网站，为了能在google上有好的排名，自己做了一些相关的优化。 相关的优化知道网上应该都可以找到，我自己做了一些整理。

   1.首先说一下网站的**代码结构**， 是table结构还是div。 如果是div+css结构，是比较适合做SEO的，网页内容和网页样式尽量分开书写，分开管理，这是属于精简的代码结构； 如果是table结构，很容易产生冗余代码，属于不精简的代码结构，不适合做SEO，可能需要重新建站=0=。  我自己的小网站是div结构的，我也在google观察了一些排名比较靠前的网站，确实没见到用table结构的。

   2.**信噪比** 信噪比指的是网页有效信息和无效信息的比例；
有效信息是文字
无效信息指的是无效代码、空代码、富媒体；富媒体指的是视频、音频，flash动画、JavaScript。 这其实是平时编码的一个好习惯，文字不要有错别字，无效的信息要及时清理。

   3.**iframe** Iframe是一个比较特殊的标签。被Iframe嵌套的内容不会被搜索引擎抓取，一般用于出站链接的广告位。  但是项目有一些情况需要用到Iframe，比如嵌套一个页面，而且我们有希望这个被嵌套的页面被搜索引擎抓取，我自己的替代方案是用<object>标签。

   4.**javascript** js有一个特点，js输出的内容搜索引擎不识别。所以页面的关键字千万不要用js来做输出！  还有网页在使用js时尽量放置在网页底部，不影响搜索引擎抓取常规内容。

   5.**h1-h6标签** h1标记一个网页只能出现一次，整站所有页面h1需要对应同一个核心关键词，强调关键词； 这个很重要，把最重要的关键字用h1包起来 ！  h2-h3标记可以多次使用，尽量也不要太多；
h4-h6可以不使用，基本没什么权重了。

   6.**img和a标签** img标记的alt属性，搜索引擎依靠图片alt属性来判断图片内容，文章中图片alt属性使用文章标题即可； a标签的title属性，title属性同alt属性。

   7.**display: none** display: none对SEO的影响，网上的说法众说纷纭，所以我在自己的网站里，还是彻底抛弃了这种方法。我的替代方案有两种

	 .hiddenClass {
        width:1px;
        height:0;
        overflow:hidden;
     }
    
   或者用z-index建立层叠关系，不过z-index需要提醒一点

    z-index 仅能在定位元素上奏效,即该元素不是默认的position:static
    需要设置 position:absolute | relative | fixed;

   6.**robots.txt**

什么是 robots.txt 文件

	robots.txt 文件规定了搜索引擎抓取工具可以/无法请求抓取您网站上的哪些网页或文件
	此文件主要用于使您的网站避免收到过多请求
	
格式和位置规则	

	文件必须命名为 robots.txt
	网站只能有1个 robots.txt 文件
	robots.txt 文件必须位于要应用到的网站主机的根目录下

robots.txt 文件中可以使用下列指令

- User-agent
[必需，每个组需含一个或多个 User-agent 条目] 此规则的适用搜索引擎漫游器（即网页抓取工具软件）的名称。这是每条规则的首行内容。 支持通配符*

> 几个比较常用的代理
> 1. Google: Googlebot
> 2. Google Images: Googlebot-Image
> 3. Bing: Bingbot
> 4. Yahoo: Slurp
> 5. Baidu: Baiduspider
> 6. DuckDuckGo: DuckDuckBot

	# 示例 1：仅屏蔽 Googlebot
	User-agent: Googlebot
	Disallow: /
	
	# 示例 2：屏蔽 Googlebot 和 Adsbot
	User-agent: Googlebot
	User-agent: AdsBot-Google
	Disallow: /
	 
	# 示例 3：屏蔽除 AdsBot 抓取工具之外的所有抓取工具
	User-agent: * 
	Disallow: /

- Disallow
[每条规则需含至少一个或多个 Disallow 或 Allow 条目] 用户代理不应抓取的目录或网页（相对于根网域而言）。如果要指定网页，应提供浏览器中显示的完整网页名称；如果要指定目录，则应以标记/结尾。支持使用通配符*表示路径前缀、后缀或整个字符串


- Allow
[每条规则需含至少一个或多个 Disallow 或 Allow 条目] 上文中提到的用户代理应抓取的目录或网页（相对于根网域而言）。此指令用于替换 Disallow 指令，从而允许抓取已禁止访问的目录中的子目录或网页。如果要指定网页，就应提供浏览器中显示的完整网页名称；如果要指定目录，则应以标记/结尾。支持使用通配符*表示路径前缀、后缀或整个字符串

- Sitemap
后面细说




<br/>

	示例 1 ：允许所有的机器人
			User-agent: * 
			Disallow: /
			或者可以这么写
			User-agent: *
			Allow:/
<br/>

	示例 2 ：仅允许特定的机器人：（name_spider用真实名字代替）
			User-agent: name_spider
			Allow:
<br/>

	示例 3 ：拦截所有的机器人		
			User-agent: *
			Disallow: /

<br/>

	示例 4 ：仅禁止特定爬虫访问特定目录（BadBot用真实的名字代替）	
			User-agent: BadBot
			Disallow: /private/


   7.**sitemap**