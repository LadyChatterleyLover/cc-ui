// 生成id
 const genId = (length) => {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
 }
 
 export default genId