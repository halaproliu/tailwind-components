let globalId = 0;

export function getId() {
  return globalId++;
}

export function getRandomId(length) {
  return Number(
    Math.random().toString().substr(3, length) + Date.now(),
  ).toString(36);
}

export function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0, //获取0-16之间的随机整数
      v = c == "x" ? r : (r & 0x3) | 0x8; //将x转换为16进制数据
    return v.toString(16); //获取16位id
  });
}
