require('dotenv').config(); //載入.env環境檔
function getEnvVariable  () { // 創建函式
    const env_variable= process.env.time // 取出環境變數
    console.log(env_variable) // 用日誌將內容印出來
}
getEnvVariable () // 觸發