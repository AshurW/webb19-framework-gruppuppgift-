const array = [0, 11, 12, 22, 35, 121]
  
let  mapped = array.map(x => x % 11 == 0 && x < 111 ? x : 0)

return mapped