# 摘要

- 說明 blob, tree, commit, branch, head 分別是什麼
- 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
- commit message 應該怎麼寫比較好？應該有什麼 `style` 嗎？

# 名詞說明

- 首先，重要觀念：「Git 只在乎檔案的內容，不在乎目錄或檔案名稱」。相同內容的檔案，在 Git 內只會留存一份。

- 因此可以說，Git 就是個內容追蹤軟體，而這個功能，剛好很適合拿來做版本控制。

## Blob

- 當我們開始把檔案加到 Git 的暫存區(或稱之索引區)，開始使用 Git 進行版控時，Git 便會開始生出一些 Blob 物件。

## Tree

- 當開始進行 Commit，Git 便會產生出一些 Tree 物件，指向剛剛那些 Blob 物件。或是可能會有其它的子目錄，所以 Tree 物件也可能會指向其它的 Tree 物件。

## Commit

- 承上 Tree 的解釋，當我們進行 Git Commit，產生 Tree 物件的同時，也會產生出 Commit 物件，它會指向某一個 Tree 物件。而除了最一開始的 Commit 之外，所有的 Commit 物件也都會指向它的前一個 Commit 物件。

## Branch

- 錯誤觀念：「把檔案複製出來一份改，改完之後會再合併回去，所以在改的時候才不會影響到原來的分支」，但其實 Git 的分支並非如此。

- 正確觀念：分支(Branch)是一個指向某個 Commit 的指標。

- 分支(Branch)的實際運作形式，是一個記錄著 40 個字元的 SHAI 值的檔案，這串 SHAI 值的最後一段，就是某個他所指向的 Commit 物件，該 Commit 物件本身的SHAI值。

## Head

- Head是一個指向某一個分支的指標，在分支切換(checkout)的時候，HEAD 會跟著指向切換過去的那個分支。

- 在我們操作 Git 的時候，就是藉由Head這個指標，讓 Git 知道，現在是位於哪個分支(Branch)內。

- 而 Head 實際上的紀錄形式，是在我們終端的.git目錄裡，有個名稱為HEAD的檔案，在檔案內紀錄目前是在哪個分支。

## 還有什麼？

### Tag

- 標籤(Tag)其實是跟分支(Branch)有點像的東西，差別只在於在 Commit 發生的時候，分支會隨著一起往前移動，但標籤一旦定下來之後就不會再移動了。

# Commit Message怎麼寫

## Commit Message 之規範
- 在撰寫 Git 與 SVN 等版本控制軟體 Commit Message 時，可以參照國外 AngularJS 團隊的規範： [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

## Commit Message 規範組成：

### Header: \<type>(<scope>): <subject>
- type: 代表 commit 的類別：feat, fix, docs, style, refactor, test, chore，必要欄位。
- scope 代表 commit 影響的範圍，例如資料庫、控制層、模板層等等，視專案不同而不同，為可選欄位。
- subject 代表此 commit 的簡短描述，不要超過 50 個字元，結尾不要加句號，為必要欄位。

### Body: 72-character wrapped. This should answer:
- Body 部份是對本次 Commit 的詳細描述，可以分成多行，每一行不要超過 72 個字元。
- 說明程式碼變動的項目與原因，還有與先前行為的對比。

### Footer: 
- 填寫任務編號（如果有的話）.
- BREAKING CHANGE（可忽略），記錄不兼容的變動，
   以 BREAKING CHANGE: 開頭，後面是對變動的描述、以及變動原因和遷移方法。

### type:
- subject 是簡述不要超過 50 個字元

## 何謂 Type

### 定義
Type 是用來告訴進行 Code Review 的人應該以什麼態度來檢視 Commit 內容。
- 例如：
- 看到 Type 為 fix，進行 Code Review 的人就可以用「觀察 Commit 如何解決錯誤」的角度來閱讀程式碼。
- 若是 refactor，則可以放輕鬆閱讀程式碼如何被重構，因為重構的本質是不會影響既有的功能。
- 利用不同的 Type 來決定進行 Code Review 檢視的角度，可以提升 Code Review 的速度。因此開發團隊應該要對這些 Type 的使用時機有一致的認同。

### 類別限制
- Type 只允許使用以下類別：
-
- feat: 新增/修改功能 (feature)。
- fix: 修補 bug (bug fix)。
- docs: 文件 (documentation)。
- style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。
- refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
- perf: 改善效能 (A code change that improves performance)。
- test: 增加測試 (when adding missing tests)。
- chore: 建構程序或輔助工具的變動 (maintain)。
- revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。


# 參考資料

1. [Ray「Git的物件，當我們commit時，究竟發生了什麼事2」](https://ithelp.ithome.com.tw/articles/10208341?sc=iThelpR)

2. [高見龍「你知道 Git 是怎麼一回事嗎」](https://kaochenlong.com/2017/08/11/git-on-modern-web.html)

3. [Noob Tsai「常見的五個開源專案授權條款，使用軟體更自由」](https://noob.tw/open-source-licenses/)

4. [WadeHuang的學習迷航記「Git Commit Message 這樣寫會更好，替專案引入規範與範例」](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
