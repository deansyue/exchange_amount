# 外匯換算
此專案為將傳入的原幣換算成外幣金額之API

## Installing 專案安裝流程
1. 打開您的終端機(terminal)，複製(clone)專案至本機
```
git clone https://github.com/deansyue/exchange_amount.git
```

2. 進入存放此專案資料夾
```
cd exchange_amount
```

3. 安裝npm套件
```
npm install
```

4. 使用腳本，即可啟動伺服器
```
npm run dev
```

5. 當終端機(terminal)出現以下文字，代表伺服器已啟動
```
app is running on localhost:3000
```

6. 在瀏覽器輸入以下網址，及可獲得換算的外匯金額
```
http://localhost:3000/getExchangeAmount?source=&target=&amount=
```