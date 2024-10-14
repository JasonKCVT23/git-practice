# Questions About Linux

## /etc 是什麼的縮寫？這裡通常都放哪些檔案？

- the etcetera diectory<br>

系統主要的設定檔幾乎都放置在這個目錄內，例如人員的帳號密碼、系統的主要設定、各種服務的起始檔等等，所以在這個目錄下工作的時候，記得一定要備份。<br>

一般來說，這個目錄下的各檔案屬性是可以讓一般使用者查閱的，但是只有root有權力修改。FHS建議不要放置可執行檔(binary)在這個目錄中。<br>

另外，FHS 還規範幾個重要的目錄最好要存在 /etc/ 目錄下：<br>

- /etc/opt(必要)：放置第三方協力軟體 /opt 的相關設定檔<br>
- /etc/X11/(建議)：與 X Window 有關的各種設定檔<br>
- /etc/sgml/(建議)：與 SGML 格式有關的各項設定檔<br>
- /etc/xml/(建議)：與 XML 格式有關的各項設定檔<br>

## /var 這裡通常都放哪些檔案？

- 第二層 FHS 設定，主要為放置變動性的資料。<br>

## /boot 這裡通常都放哪些檔案？

- 主要放置開機會使用到的檔案，包括Linux核心檔案以及開機選單與開機所需設定檔等等。 Linux kernel常用的檔名為：vmlinuz。

## $PATH 環境變數的作用是什麼？

### 定義

PATH是Linux和其他類Unix操作系統中的一個環境變數。它包含一個目錄列表，當您輸入命令時，shell會搜索這些目錄。每個目錄都由冒號（:）分隔。當您輸入ls或gcc等命令時，系統會按照PATH變數中它們出現的順序查找命令的可執行文件。<br>

例如，如果您的PATH變數包含以下目錄：<br>

```
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

當您輸入ls時，系統會首先在/usr/local/sbin中查找ls可執行文件。如果在那裡找不到，它會繼續搜索/usr/local/bin，依此類推，直到找到可執行文件或遍歷了PATH中的所有目錄。<br>

### 為什麼要修改PATH變數？

默認的PATH變數通常適用於大多數用戶。然而，有些情況下，您可能需要修改它：<br>

- 添加自定義腳本：如果您有自定義腳本存儲在特定目錄中，將該目錄添加到您的PATH中允許您從任何位置運行這些腳本作為命令。<br>

- 軟體位於非標準位置：某些軟體可能安裝在默認PATH中不存在的目錄中。添加這些目錄允許您運行軟體而無需指定其完整路徑。<br>

- 提高效率：將經常使用的目錄包含在PATH中可以使您的工作流程更加高效，減少了鍵入完整目錄路徑的需要。<br>

## which 指令的作用？

- which 指令的作用，為標識當您向 shell 發出命令時啟動的可執行二進位檔案。如果您的電腦上有相同程式的不同版本，您可以使用 which 來找出 shell 將使用哪一個。<br>

# Questions about EC2

## 什麼是 instance type?

EC2 包含：<br>
- vCPU<br>
- Memory：記憶體<br>
- Instance Storage：可用儲存空間類型<br>
- Network Bandwidth：網路頻寬<br>
- EBS Bandwidth：EBS 頻寬<br>

## 什麼是 Nginx？有哪些用途與特性？

Nginx(讀音：engine x)是HTTP和反向代理服務器，郵件代理服務器，以及Igor Sysoev最初編寫的通用TCP/UDP代理服務器。在很長一段時間以來，它一直在許多負載重的俄羅斯網站上運行，包括：Yandex，Mail.Ru，VK和Rambler。 根據Netcraft的說法，Nginx在2017年3月份服務或代理了28.50％的最繁忙的網站。這裏有一些成功案例：Netflix，Wordpress.com，FastMail.FM。<br>

Nginx 是一個高性能的 Web 和反向代理服務器, 它具有有很多非常優越的特性：<br>

作爲 Web 服務器：相比 Apache，Nginx 使用更少的資源，支持更多的併發連接，體現更高的效率，這點使 Nginx 尤其受到虛擬主機提供商的歡迎。能夠支持高達 50,000 個併發連接數的響應，感謝 Nginx 爲我們選擇了 epoll and kqueue 作爲開發模型.

作爲負載均衡服務器：Nginx 既可以在內部直接支持 Rails 和 PHP，也可以支持作爲 HTTP代理服務器 對外進行服務。Nginx 用 C 編寫, 不論是系統資源開銷還是 CPU 使用效率都比 Perlbal 要好的多。

作爲郵件代理服務器: Nginx 同時也是一個非常優秀的郵件代理服務器(最早開發這個產品的目的之一也是作爲郵件代理服務器)，Last.fm 描述了成功並且美妙的使用經驗。

Nginx 安裝非常的簡單，配置文件 非常簡潔(還能夠支持perl語法)，Bugs非常少的服務器: Nginx 啓動特別容易，並且幾乎可以做到7*24不間斷運行，即使運行數個月也不需要重新啓動。你還能夠在 不間斷服務的情況下進行軟件版本的升級。

## pm2 套件是什麼？有什麼用處？

### 定義

- node 的程序管理器<br>

### 用途

- pm2 可以讓 node 服務 crash 掉之後，自動幫我們重啟<br>
- pm2 可以在 server 重啟之後，自動幫我們重啟<br>
- pm2 可利用 CPU 多核，開啟多程序，已達到類似負載平衡的效果<br>
Graceful reload 可達成類似 rolling upgrade 的效果，0 downtime 升級<br>
多程序多服務，可提升處理 request 的速度<br>
可設定 cron 排程自動重啟時間<br>
- pm2 提供多項資訊，包含已重啟次數、 CPU 用量、 memory 用量, process id, 等等…<br>
- pm2 可以在指定的條件下，自動幫我們重啟，條件可以是’up time’, ‘已使用多少 memory’, 等等…,<br>
- pm2 可以幫我們整理 log, 讓 log 以我們想要的週期分割檔案，並保存我們想要的數量，若有超過，自動刪除。<br>
- pm2 提供簡單的部署方式，可一次性部署到多台 server<br>
- pm2 可與 CD / CD 工具做結合， CI / CD 部署也沒有問題<br>

## 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?
提示 Reverse proxy vs Forward Proxy

### 定義

- 位於 Client 和 Server 之間的 Server，Client 會向 Proxy 發送請求， Proxy 會轉發請求到 Server，並將 Server 的回應返回給 Client。Proxy 可以用來隱藏 Client IP，並提供 Cache 功能，提高網站的訪問速度。 Reverse Proxy 是位於 Server 的 Server ，Client 會向 Reverse Proxy 發送請求， Reverse Proxy 會根據請求的內容，將請求轉發到不同的 Server ，並將 Server 的回應返回給 Client 。 Reverse Proxy 可以用來負載均衡、Cache、安全防護等。<br>

### 用途

- 隱藏 Client IP：<br>

當Client 訪問網站時，可以使用 Proxy 來隱藏 Client IP，這可以保護用戶隱私。<br>

- 提供 Cache 功能：<br>

Proxy 可以提供 Cache 功能，提高網站的訪問速度。當 Client 第一次訪問網站時， Proxy 會將網站的內容 Cache 到自己的內存中，當 Client 再次訪問網站時， Proxy 會直接返回 Cache 的內容，這可以提高網站的訪問速度。<br>

### Reverse Proxy

- 負載均衡：Reverse Proxy 可以用來負載均衡，將用戶的請求均勻分散到不同的 Server ，這可以提高網站的性能和可用性。<br>

- Cache：Reverse Proxy 可以提供 Cache 功能，提高網站的訪問速度。當 Client 第一次訪問網站時， Reverse Proxy 會將網站的內容 Cache 到自己的內存中，當 Client 再次訪問網站時， Reverse Proxy 會直接返回 Cache 的內容，這可以提高網站的訪問速度。<br>

- 安全防護：Reverse Proxy 可以用來安全防護，例如可以用來防火牆、DDoS 攻擊等。<br>

- 小結

1. 可以做負載均衡，可以根據不同狀況分發請求。<br>
2. Cache。<br>
3. Reverse Proxy Server 內可以做 firewall 跟安全防護。<br>

## Security Group 是什麼？用途為何？有什麼設定原則嗎？

預設的SG規則是限制流入的流量，但流出不限制，若您的公司對於流量控管有嚴格的要求，SG也可以設定限制流出的流量只能到某些您設定的目標位置，以下是一些比較常見設定SG規則的條件：<br>

- SG規則是透過允許來設定，您無法建立拒絕存取的規則。
- SG規則可讓您選擇協定(TCP、HTTP、HTTPS、SSH)以及port 號
- SG是stateful，也就是說今天當您的Instance發出request，當response流量進來的時候不會管SG規則
- 您可以隨時新增或移除SG規則
- 您可以套用超過一組的SG規則

## 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

### 定義

「Super User DO」的縮寫<br>

### 用途

通常會被加在某一個指令的前面，代表這個指令是透過 Super User 所執行的。<br>

Super User 在這裡就是指電腦管理員的意思，也就是擁有這台電腦的最高權限，可以讀寫這台電腦中的任何檔案。在 Linux 系統中，root 就是一個 Super User。<br>

#### 什麼樣的指令會需要在前面加上 sudo 呢？

比如說，更改電腦的網路設定、查看某些密鑰、更改系統設定等等。<br>

一台電腦可能有很多不同的使用者，而一般來說，我們不會想要每一個使用者都有權限更改電腦設定，因為這很容易搞砸電腦設定。<br>

#### 那麼假如，今天一個沒有權限的使用者需要這樣的權限怎麼辦？

可以利用 sudo 來執行指令，代表他是透過管理員身份執行的！<br>

#### History：為什麼要有 sudo？

在初始 Linux 系統被開發時，sudo 指令並不存在。<br>

那麼，在 sudo 出現前，大家是如何取得權限的呢？<br>

不外乎就是兩個：<br>

- 登入 root 使用者
- 利用指令 su (switch user) 切換成為 root 使用者

這兩個方式都需要知道 root 的密碼。而這兩個方式也都並不安全。<br>

想像一下，假如今天有一個人登入了 root 帳號，執行指令後忘記登出了，那麼下一個人就直接成為 root 了。<br>

使用指令 su 也是一樣的概念，如果做完事忘記切換回來，那麼下一個人就有權限可以更改所有檔案。<br>

這當然不是我們想要的，因此，之後才有了 sudo 的出現。<br>

兩個重要的手段：<br>

- 在一段時間後，可以強制登出 root 使用者<br>
- 只有特定的使用者可以使用 sudo<br>

第一點的好處不用我多講，我們來看看第二點。<br>

其實並不是所有使用者都可以使用 sudo 這個指令，只有在特定群組中才有這樣的權限（接下去會講）。<br>

這讓我們可以更好的掌控哪些人可以讀寫哪些資料，對電腦系統提供更多的保護。<br>

## Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

- 預設都會存放在『/usr/local/nginx/logs』(或『{NGING_INSTALL_PATH}/logs』)目錄<br>

- 如果想要日後比較好管理，可將 Log 檔的 http-log-path 和 error-log-path 移到『/var/log/nginx』目錄<br>




# 參考資料

1. [iT邦幫忙－chleif「D07_可以很簡單也可以非常複雜的EC2_InstanceType」](https://ithelp.ithome.com.tw/m/articles/10295411)

2. [HackMD－wenting「探索AWS：從菜鳥到熟練的完全指南(八)EC2實例類型與Security Group」](https://hackmd.io/@gdw7l5sPTOyNv76kZ_twjA/Byrr9UdD2)

3. [HackMD－R1140「AWS EC2 運算資源 (觀念講解篇)」](https://hackmd.io/@AWSlearning/HJX_F1yZ2?utm_source=preview-mode&utm_medium=rec)

4. [nextLink－架構師專欄「AWS 雲端資安 Inside out－安全群組與NACL建置教學簡介(一)」](https://www.nextlink.cloud/aws-cloud-security-part4/)

5. [ExplainThis「Nginx 是什麼？有哪些用途？」](https://www.explainthis.io/zh-hant/swe/why-nginx)

6. [莫力全 Kyle Mo「[Day 08] Web Server & Nginx — (2)」](https://ithelp.ithome.com.tw/articles/10241354)

7. [文科少女學程式「【前端學Nginx】什麼是Nginx？」](https://pink-learn-frontend.medium.com/%E5%89%8D%E7%AB%AF%E5%AD%B8nginx-%E4%BB%80%E9%BA%BC%E6%98%AFnginx-fc604db20ad1)

8. [Ray Lee 李宗叡「好 pm2, 不用嗎？」](https://medium.com/learn-or-die/%E5%A5%BD-pm2-%E4%B8%8D%E7%94%A8%E5%97%8E-fc7434cc8821)

9. [科技讀蟲「三分鐘快速了解 Linux sudo 指令是什麼！」](https://yhtechnote.com/linux-sudo/)

10. [億聚網「Nginx教程」](https://www.1ju.org/nginx/logging-and-monitoring)

11. [Soul & Shell Blog－SJ「Nginx Log 以日期歸檔（筆記）」](https://blog.toright.com/posts/4622/nginx-log-%e4%bb%a5%e6%97%a5%e6%9c%9f%e6%ad%b8%e6%aa%94)

12. [Yish「Proxy、 Reverse Proxy 概念與 Nginx 配置」](https://yish.dev/posts/proxy-and-reverse-proxy/#:~:text=Proxy%20%E6%98%AF%E4%BD%8D%E6%96%BC%20Client%20%E5%92%8C%20Server%20%E4%B9%8B%E9%96%93%E7%9A%84%20Server%EF%BC%8CClient%20%E6%9C%83%E5%90%91,%E7%9A%84%E5%9B%9E%E6%87%89%E8%BF%94%E5%9B%9E%E7%B5%A6%20Client%E3%80%82%20Proxy%20%E5%8F%AF%E4%BB%A5%E7%94%A8%E4%BE%86%E9%9A%B1%E8%97%8F%20Client%20IP%EF%BC%8C%E4%B8%A6%E6%8F%90%E4%BE%9B%20Cache%20%E5%8A%9F%E8%83%BD%EF%BC%8C%E6%8F%90%E9%AB%98%E7%B6%B2%E7%AB%99%E7%9A%84%E8%A8%AA%E5%95%8F%E9%80%9F%E5%BA%A6%E3%80%82)
