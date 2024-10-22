# DNS 的 A record 是什麼？

A 記錄 (主機紀錄)：是用於名稱解析的重要記錄，它將特定的主機名對映到對應主機的 IP 位址上。

# DNS 的 NS record 是什麼？

NS代表的是Name Server，也就是說當你買了一個網址，他的DNS Server在哪裡的意思，一般的網址提供商都會附加DNS Server管理功能，所以你只要選擇”代管”，就可以在同一個網頁下管理相關Record，但你如果選擇自管，他就會要你輸入最多四個Name Server地址，如果你的網站是架在另一個空間，你也需要用另一個空間申請免費網域憑證，你就會需要將DNS Server指定到代管的伺服器去。<br>

# Domain Name vs FQDN vs URL 這三者分別為何？


- Domain Name<br>

網域 (Domain Name) 為網域名稱，也稱域名，是網際網路上一個網站或網路資源的識別名稱。<br>

- FQDN<br>
完整網域名稱 FQDN （Fully Qualified Domain Name）<br>
網址的正式名稱為「完整網域名稱」（FQDN），FQD的總長度不可以超過 255 個字母，兩個 . 之間不可超過 63 個字母。<br>

- URL <br>
URL的全名是Uniform Resource Locator，中文翻譯為網頁位址，也就是我們俗稱的網址。<br>

## 關於 Domain Name

網域由兩個主要部分組成：主機名稱（hostname）和頂級域名（top-level domain，TLD），為一串用點分隔的字元，例如「example.com」，「example」是主機名稱，而「.com」是頂級域名。<br>

## 為何需要網域名稱？網域的作用

每個網站都會有一組IP位址，您可以透過輸入 IP 位址來找到對應的網站，但直接顯示 IP 位址對網站是有風險的，很容易遭到駭客入侵，且搜尋引擎也不會收錄 IP 位址的網址，因此通常會以具有意義的網域名稱來代替難記的 IP 位址。<br>



# 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

加上 SSL 憑證（SSL Certificate）後，https 上的 S 代表安全，https 可以支持網頁瀏覽器和網頁伺服器之間的安全傳輸，目標是防止盜取和篡改傳輸數據。<br>

# 參考資料

1. [bill「我的資訊兩三事 DNS NS Record」](https://www.hcm86.com/dns-ns-record)

2. [Medium－－CHEN「搞懂 IP、FQDN、DNS、Name Server│鼠年全馬鐵人挑戰 #05」](https://its-okay.medium.com/%E6%90%9E%E6%87%82-ip-fqdn-dns-name-server-%E9%BC%A0%E5%B9%B4%E5%85%A8%E9%A6%AC%E9%90%B5%E4%BA%BA%E6%8C%91%E6%88%B0-05-aa60f45496fb)

3. [遠振資訊「網域是什麼? 網址、域名又是什麼? 購買網域前需注意的9件事」](https://host.com.tw/%E7%B6%B2%E5%9F%9F)

4. [林杰銘 Jay Lin「SSL 憑證是什麼？電商網站都應該升級進化成 https」](https://imjaylin.com/ssl/)
