# Swing NTU - 台大交換學生搓湯圓系統

## 前言：關於搓湯圓

搓湯圓是什麼呢？我們來看看維基百科是怎麼解釋搓湯圓的吧～

> **維基百科**：
> 挲圓仔湯（台羅：so-înn-á-thng），臺灣政治界、商業界常用的臺語黑話，或稱挲圓仔、圓仔湯、煮圓仔湯、搓湯圓、搓圓仔湯等。 字面意義是手工製作圓仔（即湯圓）後煮成湯。 實際上指透過不合理的協商或威脅利誘等手段，要求他人放棄權利。

修但幾壘... 怎麼看起來這麼母湯...我們沒有要威脅他人好ㄇ！
搓湯圓活動其實是台大交換學生的習俗之一，取其溝通協商的意思，讓大家在備審成績公告後、正式選填志願前的期間，透過互相交換訊息、知己知彼的方式，來評估自己的最佳落點，做出最合適的選填策略。而我們系統的英文名稱 Swing NTU，就是參考 "喬事情" 的英文 "swing it" 來命名的～

### 喔喔那我了解搓湯圓是什麼了，但為什麼要特別做一個系統啊？
過往的搓湯圓活動都會由其中一名交換生發起，在NTU台大學生交流版貼上一個 google sheet 共編連結，大家在裡面填選志願，也在裡面聊天交換訊息。然而因為表格的特性，聊天訊息常常亂糟糟一片，重要訊息都會被淹沒在雜談中，大家搶著用醒目色彩標示自己的表格，結果形成百家爭鳴、無人生還（？）的情況。
作者之一的 77 身為去年的交換學生，深刻體會了這種困擾與聊天室的慘況，決定挺身而出自己寫一個專屬於交換生的搓湯圓系統！

## 使用說明
首先點選以下連結進入我們的系統首頁: 
https://swing-ntu.herokuapp.com/
### 註冊與登入
我們會在國際事務處公告成績與名單的當下，把這些資料加入我們的資料庫，請各位交換生攜碼加入~~遠傳電信，即刻享有通話優惠費~~，欸不是啦，是請大家帶著自己的交換生序號，來我們的系統註冊一個帳號。（請注意，只有公告名單內的學生們可以加入聊天室喔～）
當系統跳出註冊成功的提示之後，就可以回到登入頁面進行登入囉！
### 主頁面：聊天室
登入後首先會進到主頁面，顯示大群（包含所有交換生的群組）的留言與回覆，也可以透過左方的按鈕切換至分組聊天室，進到各組的溫馨小天地～

* **新增留言**：點按新增留言的框框即可開啟一個話題，輸入完畢按送出，留言就會顯示在頁面上囉！已經送出的留言也可以修改內容或是刪除，成功後系統皆會跳出提示框框。
* **新增回覆**：點按一則留言即可檢視該留言下方的所有回覆。點按留言右下角的箭號就可以新增回覆，送出後同樣可以修改內容或是刪除留言。
* **關注留言、留言排序**：點按留言右下角的愛心即可關注留言，透過選擇左上角的排序條件，可以把所有排序依照時間、回覆數量、或是關注者數量進行排序。
* **查詢留言**：點按留言區最上方的標籤可以篩選出你有按過讚的留言，或者你自己發布的留言。若是你沒有特別制定關注或自己的留言等等篩選標籤，而是顯示全體留言時，也可以透過主頁面右上角的搜尋框框，輸入關鍵字查找包含該關鍵字的留言。

### 檢視志願表與修改志願
除了跟大家聊天哈啦、交換訊息之外，我們當然不會忘了搓湯圓系列最重要的功能：檢視志願序！
點選畫面右上角的檢視志願表，可以看到組內所有人（以序號顯示）的成績與志願選填規劃，包含要填哪幾間學校、預計交換的期間，以及一階放榜後要報到、還是放棄並釋出名額。
點按表格上自己的欄位就可以輸入、修改自己的資料喔～

### 登出
最後也要溫馨提醒大家，使用完畢記得點選右上角登出～
下次再回來我們的系統跟大家一起聊天、討論，希望大家都能知己知彼，成為交換填志願大師 ><

## 系統架構
前端使用 React.js，後端使用 Node.js + GraphQL，資料庫則是 MongoDB，程式碼公開在 Github (https://github.com/pupss95315/Exchange-Student-Communication-System)，歡迎大家 PR 或者來信建議想要新增修改的功能～
喜歡我們的系統也可以在 Github 上面給我們星星！
最後不免俗要祝有申請的大家都能順利出發去交換，展開新的人生體驗～
 
