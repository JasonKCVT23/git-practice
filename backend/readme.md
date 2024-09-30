# 基礎題

## package.json 中的 dependencies 與 devDependencies 分別是什麼

1.dependencies : 使用在已經發布的環境下，換句話說，是指發布後仍然需要依賴使用的 plug-in。
2.devDependencies : 使用在開發中的環境下，意思是指——只單純會在開發時應用到的 plug-in。

一開始在使用 npm 管理安裝套件時，一定會對於這兩者很困惑：<br> 

```
$ npm install packagename –save;

$ npm install packagename –save-dev
```

可以看到分別有 dependencies 與 devDependencies 兩個節點，分別有裝入不同的套件。<br> 
–save 與 –save-dev 的兩個安裝指令<br> 

- 前者分別是指到 dependencies 與 devDependencies 下。
- 後者則是只有寫入 devDependencies 下。所以執行 npm install 時，可以根據需求，使用不同的指令安裝。

## package.json 中的 scripts 這個區塊怎麼用？

用來編寫模組中使用的腳本<br> 

package.json 檔案中，我們可在 scripts 區塊加入各種指令。<br> 

"key": "要執行的內容＂<br> 
以如何運行 index.js 這個專案為例：<br> 

"start": "node index.js"：代表以 start 為 key，輸入即可在 node 運行 index.js。<br> 

注意是使用雙引號。<br> 

<img src="https://imgur.com/fvF1YuH" alt="start:node index.js 圖片無法顯示" title="start: node index.js">
[week 3 JavaScript：認識 Module & NPM 套件庫](https://hackmd.io/@Heidi-Liu/note-js102-npm)

```
npm run 'key'
```

在終端機輸入 npm run start 即可透過 key 來運行該指令：<br> 

<img src="https://imgur.com/K3XhyO3" alt="npm run start 圖片無法顯示" title="npm run start">
[week 3 JavaScript：認識 Module & NPM 套件庫](https://hackmd.io/@Heidi-Liu/note-js102-npm)



## Port number 要怎麼以環境變數來設定？

- 怎麼透過環境變數的設定來修改要監聽的 port number（而不是直接去修改 app.js 這個檔案）<br> 

在終端機中，可以透過以下指令來設定環境變數：<br> 

```
export PORT=8080
```

其中，PORT是環境變數的名稱，8080是你想要監聽的連接埠號碼。<br> 


## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

略<br> 

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

### CJS

CJS 是 CommonJS 的模塊系統，最初是為了在伺服器端使用的 Node.js 開發而設計的，但也被廣泛用於前端開發。CJS 使用 require 函數來導入模塊，並使用 module.exports 或 exports 對象來定義導出的內容，例如：<br> 

```
// 定義模塊
// math.js
exports.add = function(a, b) {
  return a + b;
};

// 導入模塊
// main.js
var math = require('./math.js');
console.log(math.add(2, 3)); // 輸出: 5
```

### ESM

ESM 是 ECMAScript 的模塊系統，從 ECMAScript 6（ES6）開始引入並成為 JavaScript 的一部分。ESM 使用 import 和 export 關鍵字來定義和導入模塊。例如：<br> 

```
// 定義模塊
// math.js
export function add(a, b) {
  return a + b;
}

// 導入模塊
// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 輸出: 5
```

### 兩者差異之處

ESM 和 CJS 在語法和用法上有一些不同之處，主要區別如下：<br> 
語法：ESM 使用 import 和 export，而 CJS 使用 require 和 module.exports 或 exports。<br> 
加載時間：ESM 是靜態加載，即在編譯時就可以確定模塊的依賴關係；而 CJS 是動態加載，即在運行時根據需要動態加載模塊。<br> 
運行環境：ESM 可以在現代瀏覽器中使用，但需要在 <script> 標籤上使用 type="module" 屬性；而 CJS 主要用於 Node.js 環境。<br> 
預設導出：ESM 支援預設導出，可以使用 export default，而 CJS 沒有內建的預設導出機制。<br> 
需要注意的是，ESM 和 CJS 是不相容的模塊系統，即不能直接在 ES6 模塊和 CommonJS 模塊之間進行導入和導出。<br> 
這也就是為什麼衍生了許多的轉換套件， 例如 Babel 或 webpack…。<br> 

### 目前主流

- 目前主流的模塊系統是 ESM（ES Modules）。<br> 
ESM 是 JavaScript 的官方模塊系統，自 ECMAScript 6（ES6）開始引入並成為語言的一部分。<br> 
它在現代瀏覽器中得到廣泛支援，同時也可以在 Node.js 環境中使用（從 Node.js 12 版本開始原生支援）。<br> 
- 相較於CJS之下有以下的優勢:
1. 靜態加載：ESM 在編譯時就可以確定模塊的依賴關係，這使得瀏覽器可以更有效地進行模塊的加載和緩存，提高應用程序的性能。
2. 非阻塞加載：ESM 的加載是非阻塞的，這意味著當瀏覽器遇到 <script type="module"> 標籤時，它可以繼續解析後面的 HTML，而不需要等待模塊加載完成。
3. 預設導出：ESM 支援預設導出，可以使用 export default 導出模塊的預設內容，這使得導入模塊時可以更簡潔。
- 隨著時代的演進也開始慢慢的走向ESM模組，剛入門的開發者也可以考慮直接以ESM模組來進行學習。

---

# 進階題

## [localhost](http://localhost) 是什麼？

localhost 就是指自己正在使用的電腦的位址，你也可以用 127.0.0.1 來代替。不管是 localhost 或是 127.0.0.1 ，指的都是自己的電腦。所以當你在瀏覽器的網址列輸入 http://localhost/ 或是 http://127.0.0.1 ，都會連到自己的電腦的網頁伺服器(如果有架設的話)。<br> 

- 那如果別人的電腦要連到自己的電腦的網頁伺服器呢？

首先你要知道自己在網路上的IP位址，在 WindowsXP/Windows2000/Windows2003 的環境下可以這麼做：<br> 

開啟→執行→輸入 cmd → 按 Enter ，出現「命令提示字元」視窗→輸入 ipconfig 按 Enter<br> 

<img src="http://byfiles.storage.msn.com/y1pPIKjz1hHnuKW4orkHfbScRTcFGnksWmZsz9TPNmiCdRjxLAaMJXZRIc-E1M4kUhc?PARTNER=WRITER" alt="我目前的IP 圖片無法顯示" title="我目前的IP">
[什麼是 localhost ？](https://john543443.wordpress.com/2008/10/01/%E4%BB%80%E9%BA%BC%E6%98%AF-localhost-%EF%BC%9F/)

在另一台電腦輸入你用 ipconfig 查詢得到的 IP ，就能連到你的網頁伺服器了。<br> 

但是，如果你的 IP 是10.0.0.0 – 10.255.255.255、172.16.0.0 – 172.31.255.255、192.168.0.0 – 192.168.255.255 這樣的 IP 稱為私用位址(private address)，只有在同一區網內的電腦才能連得到。也就是說，如果你在學校得到的 IP 是私用位址，那麼你在家裡打這樣的位址是連不到的喔！<br> 

## `curl` 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

### 官網

- curl is used in command lines or scripts to transfer data.

### 說明

- 「 curl 」是一款藉由指定的網路協定，以指令/命令列方式來進行檔案傳輸的免費開源工具，目前已支援超過25種以上的網路協定，且Linux、Windows、macOS三大作業系統都有支援，以使用經驗來說，最常使用它來測試網站Web的資訊傳輸、測試API是否可以正常運作等，算是相當普遍且實用的工具，如果你的身份是個工程師、網管、IT相關工作的技術人員，那建議可以對這個工具有基本的認識，在工作上應該會有些幫助。

### 安裝

```
$ sudo apt-get install curl
```

### 測試首頁 index.html
- 準備一下檔案 index.html，內容如下<br> 

```
<!DOCTYPE html>
<html>
<head>
    <title>Curl Testing</title>
</head>
<body>
    <h1>Hello World from Node.js</h1>
    <div>
        <p>Have Fun!</p>
    </div>
</body>
</html>
```

- 當 client 端進來後，回傳 index.html 的內容<br> 

```
var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

});

server.listen(3000, function () {
    console.log('Server for curl testing');
});
```

- 重新啟動 server.js，並用瀏覽器開看看

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4cNSFqew8k-AAEsqoimRLNs-UXcwe_GO5kBqvy8e5jXO0m-gIlI76dBFQYTMRgZfFd6vggG1j4c-bESrwptwfK0BE7epEl820HhAihJBY1ayIQ2cDyD-ryxhV4bjYoDvO1xsyvpgd/s1600/02.jpg" alt="Hello World from Node.js 圖片無法顯示" title="Hello World from Node.js">
[使用 curl 工具進行簡單的 http 測試](https://blog.byparams.com/2016/10/curl-http.html)

- 用 curl 試試看

```
$ curl http://localhost:3000
<!DOCTYPE html><html> ...
```

### 路由測試

這裡的路由測試很簡單，如果你想要建立完整的路由或 REST endpoints，建議使用 express 或 hapi 這一類的框架來協助你。因為只是要測一下 curl，我就不裝 express 啦！<br> 

兩個路由，一個是網站的根 '/'，另一個是 '/greeting'<br> 

```
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/greeting') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello my friend!</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});
```

- 測試 http://localhost:3000/greeting，得到 Hello my friend!<br> 

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPyUTyMb5w80_O4g9r0F5J72EYTq1vYQy87wUmIlioh6h2N6eGB_tAU6Wa00MKf__JAyNKmO3mxyJrWBU2uo3rfzFS_ay7XMqWDirZ8Y_NASoeIgBd5gDNZti5Lq6emQs7TPt0PtUL/s1600/03.jpg" alt="Hello my friend! 圖片無法顯示" title="Hello my friend!">
[使用 curl 工具進行簡單的 http 測試](https://blog.byparams.com/2016/10/curl-http.html)

- 用 curl

```
$ curl http://localhost:3000/greeting
<h1>Hello my friend!</h1>
```

### 常用參數

- 發 request 到 http 或 ftp 伺服器

```
$ curl http://www.example.com:port
$ curl ftp://www.example.com:port
```

- 如果要帳號密碼 (-u)

```
$ curl -u name:passwd http://xxx.xxx.xxx:port/path/to/endpoint
$ curl -u name:passwd ftp://xxx.xxx.xxx:port/path/to/file
```

- 取回來的東西存成檔案 (-o)

```
$ curl -o filename http://xxx.xxx.xxx:port/path/to/endpoint
以 server 端檔案名稱作為檔名儲存下來 (-O)
$ curl -O http://xxx.xxx.xxx:port/path/to/filename
```

---

# 其他

## 觀察 package.json 的變化


1. package.json 記錄了你剛剛裝的套件
- (多了 dependencies "express:^4.1.0")

2. node_modules 裡面除了剛剛安裝的 selenium-webdriver，還安裝了許多其他的套件

3. 多了一個檔案 package-lock.json

package-lock.json是在npm install時後生成一份文件，用以紀錄當前狀態下實際安裝的各個npm package的具體來源和版本號。<br> 

因為npm是一個用於管理package之間dependency關係的管理器，它允許開發者在package.json中間標出自己的項目對npm個庫包的依賴。<br> 

舉個例子<br> 

```
"dependencies": {
 "@types/node": "^8.0.33",
},
```

裡面的向上符號^是定義 向後(新)兼容依賴，指如果@types/node的版本過8.0.33，並在大版本號(8)以上相同，就允許下載最新版本的types/node庫包。<br> 

因此npm最新的版本就開始提供自動生成package-lock.json功能，為的是讓開發者知道只要你保存了源文件，到一個新的機器上、或者新的下載源，只要按照這個package-lock.json所標示的具體版本下載依賴庫包，就確保所有庫包和上次安裝的一樣。<br> 


## 觀察 node_modules 裡面有什麼

- 58個資料夾，內容待了解。<br> 

---

# 參考資料

1. [賴怡玲 (小賴) 老師「20240926 W03 - 個人作業 3」](https://lightda-tw.notion.site/20240926-W03-3-10c2ceabc70c80c1b42ec8475beb843a)

2. [HellMagic「package json for NPM 文件詳解」](https://gist.github.com/HellMagic/a6555d921659890f69046b788f21f23b)

3. [Alex Tzeng, 曾苔眠「NPM Install 到底做了些什麼？node_modules 檔案結構 + 特性入門」](https://ithelp.ithome.com.tw/articles/10191783)


4. [不與天鬥8866「npm install 提示 “ 1 package is looking for funding“」](https://blog.csdn.net/wejack/article/details/128525347)

5. [yhlwork「package-lock.json和package.json的作用」](https://hackmd.io/@Hsuan93625/SJQB3JLMO)

6. [PHPz「怎麼修改nodejs連接埠號」](https://www.php.cn/zh-tw/faq/522104.html)

7. [WBOY「怎麼修改nodejs的端口」](https://www.php.cn/zh-tw/faq/538596.html)

8. [yhlwork「package.json 需要了解的事」](https://hackmd.io/@Hsuan93625/HkUdUG8zd)

9. [阿Han「程式語言 - Javascript ESM與CJS」](https://vocus.cc/article/649cc0e0fd89780001a7d34d)

10. [john543443「什麼是 localhost ？」](https://john543443.wordpress.com/2008/10/01/%E4%BB%80%E9%BA%BC%E6%98%AF-localhost-%EF%BC%9F/)

11. [魏子靖「curl 網路資料傳輸工具，常用指令範例教學」](https://www.jinnsblog.com/2022/12/linux-curl-data-transfer-tutorial.html)

12. [simen「使用 curl 工具進行簡單的 http 測試」](https://blog.byparams.com/2016/10/curl-http.html)

13. [Dylan's blog「Node.js module system (一) - module.exports 及 require 運作原理」](https://dylan237.github.io/nodejs-module-system.html)
