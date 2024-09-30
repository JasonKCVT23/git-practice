# 什麼是 AWS Region, AZ (availability zones)

<img src="https://docs.aws.amazon.com/images/AmazonRDS/latest/UserGuide/images/Con-AZ-Local.png" alt="AWS Region and Available Zone 圖片無法顯示" title="AWS Region and Available Zone">
[AWS新手的30天之旅 - 3. 全球基礎設施](https://ithelp.ithome.com.tw/m/articles/10236103)

AWS 雲端基礎設施是以區域(Region)與可用區域(Available Zone)為中心來建置的。區域(Region)是世界上有多個可用區域的實體位置。可用區域由一或多個分散的資料中心(Data Center)所組成，每一個AZ就是一個可獨立運作的資料中心都有備援電源、聯網和連線能力，且置放在不同的機構。<br> 

<img src="https://blackie1019.github.io/2017/12/21/Amazon-Web-Service-30-days-3-Cloud-host-on-Global-Region-Available-Zone-and-Edge/Global_Infrastructure.png" alt="AWS Global Infrastructure - Region and Available Zone 圖片無法顯示" title="AWS Global Infrastructure - Region and Available Zone">
[30天鐵人賽介紹 AWS 雲端世界 - 3: 雲端服務上的Global, Region, Available Zone 與Edge 介紹](https://ithelp.ithome.com.tw/m/articles/10192075)

每一個區域所提供的服務單價會略微不同，所以在區域上的選擇通常都是看我們的客戶是在哪邊依據能提供最快的服務或是挑選最便宜的區域來決定，<br> 

而多個可用區域提(Multiple AZs)供則提供了我們在單一區域的的高可用性(high availability)，如下圖：<br> 

<img src="https://blackie1019.github.io/2017/12/21/Amazon-Web-Service-30-days-3-Cloud-host-on-Global-Region-Available-Zone-and-Edge/Multiple_AZs.png" alt="REGION 圖片無法顯示" title="start: REGION">
[30天鐵人賽介紹 AWS 雲端世界 - 3: 雲端服務上的Global, Region, Available Zone 與Edge 介紹](https://ithelp.ithome.com.tw/m/articles/10192075)

目前 AWS 在全球有 17 個地區運作(Region)，共有 46 個可用區域(AZ)，<br> 

## 已啟用

### 美國東部

- 維吉尼亞北部 (6)、俄亥俄 (3)

### 美國西部

- 加利佛尼亞北部 (3)、奧勒岡 (3)

### 亞太區域

- 孟買 (2)、首爾 (2)、新加坡 (2)、雪梨 (3)、東京 (3)

### 加拿大

- 中部 (2)

### 中國

- 北京 (2)、寧夏 (2)

### 歐洲

- 法蘭克福 (3)、愛爾蘭 (3)、倫敦 (2)

### 南美洲

- 聖保羅 (3)

- AWS GovCloud (US-West) (2)

## 即將推出
- 巴林
- 法國
- 香港特別行政區，中國
- 瑞典
- AWS GovCloud (US-East)

---

# 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？

略<br>

---

# 參考資料

1. [賴怡玲 (小賴) 老師「20240926 W03 - 個人作業 3」](https://lightda-tw.notion.site/20240926-W03-3-10c2ceabc70c80c1b42ec8475beb843a)

2. [Blackie Tsai「30天鐵人賽介紹 AWS 雲端世界 - 3: 雲端服務上的Global, Region, Available Zone 與Edge 介紹」](https://ithelp.ithome.com.tw/m/articles/10192075)

3. [Charles「AWS新手的30天之旅 - 3. 全球基礎設施」](https://ithelp.ithome.com.tw/m/articles/10236103)

4. [iFUS艾芙詩系統顧問有限公司「【iFUS】伺服器位置要選哪個國家?【@ AWS Region】」](https://www.youtube.com/watch?v=ZS63CC9l_H0)
