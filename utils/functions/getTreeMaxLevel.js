// 获取树形结构最大层级
 const getTreeMaxlevel = (treeData, attr = 'children') => {
   let level = 0
   let v = this
   let maxLevel = 0

   function loop(data, level) {
     data.forEach(item => {
       item.level = level
       if (level > maxLevel) {
         maxLevel = level
       }
       if (attr in item) {
         if (item.children.length > 0) {
           loop(item.children, level + 1)
         }
       }
     })
   }
   loop(treeData, 1)
   return maxLevel
 }

export default getTreeMaxlevel