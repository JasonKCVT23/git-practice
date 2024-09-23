# 摘要

- 安裝的 nodejs 版本
- nvm 與 npm 分別是什麼

# 安裝的 nodejs 版本

- v20.10.0

## 說明

- Node.js 21.2.0 是2023年較新的一個穩定版本，發布於2023年11月14日。該版本使用的V8引擎版本為11.8.172.17，npm 版本為10.2.3。Node.js 21.2.0 帶來了一些新的特性和改進，如性能優化、錯誤處理機制改進等，使得開發者能夠更高效地開發和部署 Node.js 應用。

- Node.js 20.10.0 則是另一個值得關注的穩定版本，發布於2023年11月22日。該版本使用的V8引擎版本為11.3.244.8，npm 版本同樣為10.2.3。與 Node.js 21.2.0 相比，Node.js 20.10.0 更注重穩定性和兼容性，為那些需要穩定運行現有項目的用戶提供了可靠的選擇。

- 在選擇適合的 Node.js 穩定版本時，開發者需要綜合考慮項目的需求、團隊的技術棧以及社區的支持等因素。對於新項目來說，可以考慮使用較新的穩定版本，以獲取最新的特性和性能優化。而對於已經穩定運行的項目來說，則可以選擇相對穩定的版本，以確保項目的持續運行和減少潛在的風險。

- 除了選擇合適的 Node.js 版本外，開發者還需要關注 Node.js 的更新日志和文檔，以了解每個版本的具體變化和改進。這些更新日志和文檔通常會詳細說明每個版本的新增特性、修復的問題以及性能改進等內容，幫助開發者更好地理解和應用這些更新。

# nvm 與 npm 分別是什麼

- 首先須了解，Node.js是什麼？

## Node.js

- Node.js 是能夠在伺服器端運行 JavaScript 的，開放原始碼、跨平台 JavaScript 執行環境。

## nvm

- nvm 是 Node.js 的版本管理器 (node version manager)。
- 因為不同專案下使用的 Node.js 版本可能不同,透過 nvm 來切換 Node.js 版本來符合版本需求。

## npm

- npm 是Node Package Manager的縮寫 用來管理專案使用到的套件。
- 當我們透過 npm init 指令，來建立一個 npm 專案，會產生一個 package.json 的檔案，根據這個檔案紀錄，專案使用了哪些套件。

### 關鍵字

- package.json：紀錄安裝套件資訊。
- npm install <套件> — save：用來安裝套件。
- node_modules：資料夾，用來存放安裝的套件。
- .gitignore：上傳時記得忽略，不需要上傳的檔案 (ex：node_modules)。

# 參考資料

1. [賴怡玲 (小賴) 老師「20240919 W02 - 個人作業 2」](https://lightda-tw.notion.site/20240919-W02-2-1052ceabc70c80e88074d8a9e03ec715)

2. [百度智能雲「Node.js穩定歷史版本解析（2023年）」](https://cloud.baidu.com/article/3285908)

3. [林威儒「了解node.js nvm npm差別」](https://a0910288060.medium.com/%E4%BA%86%E8%A7%A3node-js-nvm-npm%E5%B7%AE%E5%88%A5-47cda7c1d569)

4. [小白大戰基礎網頁開發系列「D27 - 實作 Node.js Project」](https://ithelp.ithome.com.tw/articles/10307939)

5. [Oxxo Studio「JavaScript Array 陣列操作方法大全 ( 含 ES6 )」](https://www.oxxostudio.tw/articles/201908/js-array.html#array_tostring)

6. [Long「用JavaScript學習資料結構與演算法 5：堆疊&佇列」](https://break0344.medium.com/data-structures-and-algorithms-5-stack-queue-fcd1c8d95a62)

7. [eugenechen「Day 3 - 一周目- 建立 第一個Node.js 專案」](https://ithelp.ithome.com.tw/m/articles/10199745)
