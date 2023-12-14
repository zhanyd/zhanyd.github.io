import{_ as r,r as p,o as n,c as s,a as e,d as t,e as o,b as h}from"./app-aQkPSHhh.js";const d="/images/network/8NetworkProtocols/8NetworkProtocols.gif",c={},i=h('<h1 id="什么是网络协议" tabindex="-1"><a class="header-anchor" href="#什么是网络协议" aria-hidden="true">#</a> 什么是网络协议？</h1><p>网络协议就是计算机之间沟通的语言，为了有效地交流，计算机之间需要一种共同的规则或协议，就像我们和老外沟通之前，要先商量好用哪种语言，要么大家都说中文，要么大家都说英语，这才能有效地沟通。</p><p>网络协议就是计算机之间的语言，它们有一定的规则，规定了数据是怎么传输的，确保了数据在互联网上的传输是有序、可靠的。</p><p>下面这张动图形象地展示了8种流行的网络协议：</p><p><img src="'+d+'" alt="在这里插入图片描述"> （图片来源：https://twitter.com/alexxubyte/status/1708863540067696878）</p><p>下面简单地介绍下这几个网络协议，这些网络协议的细节很复杂，这里只做最简单的介绍：</p><h2 id="http-超文本传输协议" tabindex="-1"><a class="header-anchor" href="#http-超文本传输协议" aria-hidden="true">#</a> HTTP（超文本传输协议）</h2><p>HTTP是用于获取HTML等资源的协议，它使用TCP协议作为底层的支撑协议，它是Web上任何数据交换的基础，是一种客户端-服务器协议。</p><p>使用场景：浏览器</p><p><strong>HTTP协议就像一个邮递员，负责把网页内容送到你的电脑上。</strong></p><h2 id="http-3" tabindex="-1"><a class="header-anchor" href="#http-3" aria-hidden="true">#</a> HTTP/3</h2><p>HTTP/3是HTTP的第三个版本，它使用QUIC作为底层的支撑协议，QUIC是一种为移动互联网使用而设计的新传输协议。它依赖于UDP而不是TCP，这使得网页响应速度更快，可以实现虚拟现实应用，用更多的带宽来渲染虚拟场景的复杂细节。</p><p>使用场景：物联网（IOT）、虚拟现实</p><p><strong>HTTP/3就像一个超级快递员，可以让网页变得更快。</strong></p><h2 id="https-超文本传输协议安全版" tabindex="-1"><a class="header-anchor" href="#https-超文本传输协议安全版" aria-hidden="true">#</a> HTTPS（超文本传输协议安全版）</h2><p>HTTPS是HTTP协议的安全版本，扩展了HTTP，并使用加密进行安全通信，主打一个<strong>安全</strong>。</p><p>使用场景：浏览器、网上银行、网上支付</p><p><strong>HTTPS就像一个保镖，可以保护你的信息安全。</strong></p><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2><p>WebSocket是一种基于TCP协议的全双工通信协议，与传统的HTTP通信不同，WebSocket允许服务器主动向客户端推送数据，而不需要等待客户端的请求。</p><p>使用场景：实时聊天、视频会议、股票行情</p><p><strong>WebSocket就像一个实时对话的接线员，可以让你与网站实时交流信息。</strong></p><h2 id="tcp-传输控制协议" tabindex="-1"><a class="header-anchor" href="#tcp-传输控制协议" aria-hidden="true">#</a> TCP（传输控制协议）</h2><p>TCP是一种面向连接的、可靠的、基于字节流的传输层通信协议。TCP是互联网的基础，用于在互联网上传输各种类型的数据，包括文本、图像、音频、视频等，许多应用层协议都建立在TCP之上。</p><p>使用场景：浏览器、文件传输、邮件</p><p><strong>TCP就像一个可靠的快递员，可以确保你的数据安全到达目的地。</strong></p><h2 id="udp-用户数据报协议" tabindex="-1"><a class="header-anchor" href="#udp-用户数据报协议" aria-hidden="true">#</a> UDP（用户数据报协议）</h2><p>UDP是一种面向无连接的、不可靠的、基于数据报的传输层通信协议。UDP是TCP的补充，UDP提高了数据传输的速度，但是可能会丢失某些数据，用于那些对可靠性要求不高的应用场景。</p><p>使用场景：视频流媒体、网络游戏、实时监控</p><p><strong>UDP就像一个粗心的快递员，他送包裹的速度很快，但是经常丢快递。</strong></p><h2 id="smtp-简单邮件传输协议" tabindex="-1"><a class="header-anchor" href="#smtp-简单邮件传输协议" aria-hidden="true">#</a> SMTP（简单邮件传输协议）</h2><p>SMTP是一个标准协议，是电子邮件传递的基础，用于在互联网上发送和接收电子邮件。</p><p>使用场景：电子邮件</p><p><strong>SMTP就像电子邮件的邮递员，负责把你的邮件送到朋友的邮箱。</strong></p><h2 id="ftp-文件传输协议" tabindex="-1"><a class="header-anchor" href="#ftp-文件传输协议" aria-hidden="true">#</a> FTP（文件传输协议）</h2><p>FTP是文件传输协议，用于在客户端和服务器之间传输计算机文件，FTP是文件传输的基础，用于在不同计算机之间共享文件。</p><p>使用场景：文件传输</p><p><strong>FTP就像一个文件的搬运工，他帮助你把文件从一台计算机传输到另一台计算机。</strong></p><h1 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h1><p>这些协议为互联网的正常运行提供了基础，我们能够在互联网上尽情冲浪，背后就是这些网络协议在辛勤地工作。</p>',40),T={href:"https://blog.csdn.net/zhanyd/article/details/103552137?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"如果你需要网络协议的高清大图，请关注公众号“编程我们也会”，回复”网络协议“获取。",-1);function l(_,g){const a=p("ExternalLinkIcon");return n(),s("div",null,[i,e("p",null,[t("我以前写过一篇文章，详细介绍了TCP协议建立连接和断开连接的过程，链接在这里："),e("a",T,[t("分手比确定恋爱关系更麻烦？计算机之间也这样！"),o(a)])]),P])}const b=r(c,[["render",l],["__file","一张图看懂 8 种网络协议.html.vue"]]);export{b as default};
