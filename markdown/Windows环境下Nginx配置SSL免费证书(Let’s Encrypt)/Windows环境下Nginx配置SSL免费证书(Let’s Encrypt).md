   现如今，百度、谷歌、Github等网站已经全站启用https，https就像是给网站上了一个“锁”，HTTPS做的就是给请求加密，让其对用户更加安全。对于自身而言除了保障用户利益外，还可避免本属于自己的流量被挟持。谷歌已经将http定义为不安全的网站，在我看来HTTPS已经是未来的趋势。
  
   读在最前：

    1、部署环境为Winodws Nginx
    2、Let's Encrypt是国外一个公共的免费SSL项目，由 Linux 基金会托管，由Mozilla、思科、Akamai、IdenTrust和EFF等组织发起！
    3、Let's Encrypt证书有效期三个月，每三个月需要续签证书 
    4、利用win-acme工具来生成Let's Encrypt证书
   开始生成证书：

   1.首先先在github上下载最新版的win-acme。  [下载win-acme](https://github.com/win-acme/win-acme/releases/  "点击下载") 。 
我下载的是win-acme.v2.1.12.943.x86.pluggable.zip这个版本

   2.下载nginx。  [下载nginx。](http://nginx.org/en/download.html  "点击下载") 

   3.解压缩win-acme压缩包，打开wacs.exe ， 多图预警！

   ![创建证书](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%B8%80%E6%AD%A5%E5%88%9B%E5%BB%BA%E8%AF%81%E4%B9%A6.png?raw=true "创建证书")

   ![选择手动输入](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%BA%8C%E6%AD%A5%20%E6%89%8B%E5%8A%A8%E8%BE%93%E5%85%A5.png?raw=true "选择手动输入")

   ![手动输入域名](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%B8%89%E6%AD%A5%20%E8%BE%93%E5%85%A5%E5%9F%9F%E5%90%8D.png?raw=true "手动输入域名")

   ![回车略过](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%9B%9B%E6%AD%A5%20%E7%9B%B4%E6%8E%A5%E5%9B%9E%E8%BD%A6.png?raw=true "回车略过")

   ![选择dns方式验证域名](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%BA%94%E6%AD%A5%20%E9%80%89%E6%8B%A9dnf%E9%AA%8C%E8%AF%81%E5%9F%9F%E5%90%8D.png?raw=true "选择dns方式验证域名")

   ![RSA](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%85%AD%E6%AD%A5%20RSA.png?raw=true "RSA")

   ![nginx](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%B8%83%E6%AD%A5%20%20%E9%80%89nginx%E6%94%AF%E6%8C%81.png?raw=true "nginx")

   ![存放位置](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%85%AB%E6%AD%A5%20%E7%A7%98%E9%92%A5%E5%AD%98%E6%94%BE%E4%BD%8D%E7%BD%AE.png?raw=true "存放位置")

   ![过](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E4%B9%9D%E6%AD%A5%20%E8%BF%87.png?raw=true "过")

   ![过](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%8D%81%E6%AD%A5%20%E8%BF%87.png?raw=true "过")

   ![域名解析1](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%8D%81%E4%B8%80%E6%AD%A5%20%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%901.png?raw=true "域名解析1")

   ![域名解析2](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%8D%81%E4%BA%8C%E6%AD%A5%20%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%902.png?raw=true "域名解析2")
  
   ![验证成功](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%8D%81%E4%B8%89%E6%AD%A5%20%20%E9%AA%8C%E8%AF%81%E6%88%90%E5%8A%9F.png?raw=true "验证成功")

   ![本地文件](https://github.com/nalani5210/love.github.io/blob/bolg/Windows%E7%8E%AF%E5%A2%83%E4%B8%8BNginx%E9%85%8D%E7%BD%AESSL%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6(Let%E2%80%99s%20Encrypt)/%E7%AC%AC%E5%8D%81%E5%9B%9B%E6%AD%A5%20%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6.png?raw=true "本地文件")

   4.配置nginx ， 打开/conf/nginx.conf

	server {
		listen       443 ssl;
		server_name  你的域名;

		ssl_certificate      D:/nginx-1.15.6/ssl/xxxxx-chain.pem;  
		ssl_certificate_key  D:/nginx-1.15.6/ssl/xxxxxx-key.pem;  

		ssl_session_timeout 5m;
		charset utf-8;

        location / {
            root  D:/index/;
	        index index.html;
        }
	}

   4.启动nginx，访问域名！ 

   5.证书的有效期是90天，到期前需要续上，研究一下怎么续期及自动续期，到时候会分享出来

   6.统一域名、规定时间申请证书是有限制的， 具体见官方介绍 [申请限制](https://letsencrypt.org/docs/rate-limits/  "点击查看申请限制") 。 