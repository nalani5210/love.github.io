如果你想建立自己的博客，又不想受制于第三方平台的限制，那么自建博客就是你最好的选择。 自然而然WordPress就是最佳的建站工具了。


- 域名
- 服务器
- 安装xampp
- 安装WordPress
- 解析

1. 域名

   
   首先，如果你希望你的博客对外开放，与大家一起交流，那么域名是必须的； 如果你建立博客只是想自己看不希望对外开放，那么域名是不需要的。

   域名的购买方式有很多，我习惯去万网 [万网购买域名](https://wanwang.aliyun.com/domain/searchresult#/?keyword=&suffix=com "万网") 。直接搜索心仪的域名直接购买，域名的选择没有要求，建议买便宜的就行 ，够用！

2. 服务器


   同样，如果博客不希望对外，服务器同样不用买，用自己的主机就可以。

   服务器我推荐几种方式

   a. 谷歌服务器

   前提是需要翻墙。 登录  [google](https://www.google.com.hk/ "google")，注册账号，这里具体的注册流程就不细讲了。 有了账号以后登录[谷歌云计算服务](https://cloud.google.com/?hl=zh-cN "谷歌云") ，点击免费试用，按照步骤来填就可以，谷歌会免费送你 $300 赠金用来购买服务器并且未来90天内都是免费。这里需要注意一点，**需要个人有一张双币（或者全币种）的信用卡才可以**。


   b. AWS


   前提同样需要翻墙。 登录  [aws.amazon官网](https://aws.amazon.com/cn/ "AWS")，注册账号。 **同样需要个人有一张双币（或者全币种）的信用卡才可以**。 不细讲了，我会单独开一文章来说 。AWS免费12个月
   
   c. 阿里云/腾讯云/华为云等等

   国内的云服务厂家众多，可以挑选一家或者等活动购买，配置的话用基础配置就可以，如果后期不够再加。

3. 安装xampp


   > xampp是什么





   XAMPP是一个把Apache网页服务器与PHP、Mysql等集合在一起的安装包，允许用户可以在个人的电脑上或者服务器轻易的建立网页服务器。

   [点击下载](https://www.apachefriends.org/index.html "xampp下载") 

   一直next，安装好以后打开目录，xampp-control.exe 就是我们以后的启动程序了


   ![xampp本地目录](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/%E6%9C%AC%E5%9C%B0%E7%9B%AE%E5%BD%95.png?raw=true "xampp本地目录")

   如果一切没问题，那么xampp就已经安全好了

4. 安装WordPress



   [点击下载](https://cn.wordpress.org/wordpress-4.9.4-zh_CN.zip "WordPress下载") 


   下载完以后，压缩，将所有文件放在\xampp\htdocs目录下

   ![文件放在指定目录下](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/wp%E6%96%87%E4%BB%B6%E6%94%BE%E5%9C%A8%E6%8C%87%E5%AE%9A%E7%9B%AE%E5%BD%95.png?raw=true "文件放在指定目录下")

   现在在浏览器输入你的127.0.0.1:80，如果前面都没问题，会跳转到绑定数据库安装程序的页面，**先别忙着点击开始**，我们先切回到xampp程序。

   ![建立mp数据库](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/%E5%BB%BA%E7%AB%8Bmp%E6%95%B0%E6%8D%AE%E5%BA%93.png?raw=true "建立mp数据库")

   打开\xampp\htdocs\目录下的wp-config-sample.php文件，推荐使用[notepad++](https://notepad-plus-plus.org/downloads/ "notepad++下载")编辑器

   ![wp-config-sample.php](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/wp-config-sample.png?raw=true "wp-config-sample.php")

   设置好以后，切回浏览器，点击开始安装。 填上对应的数据库信息 及 后续的站点基本信息。 浏览器输入127.0.0.1  就可以打开个人的博客地址了



5. 解析



   这里拿阿里云的做说明，登录到后台，对应的域名点[解析]
  
   ![解析](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/@%E8%A7%A3%E6%9E%90.png?raw=true "解析")

   ![解析](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BAWordPress/www%E8%A7%A3%E6%9E%90.png?raw=true "解析")
    
