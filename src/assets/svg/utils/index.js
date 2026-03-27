//源自stackoverflow老前辈的工具代码，用于将css style字符串转换为对象格式
function styleStringToObject(styleStr){
  const obj = {}
  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    }).replace(/;\s?$/g,"").split(/:|;/g);

  for (var i = 0; i < s.length; i += 2)
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
  
  return obj;
}

export default styleStringToObject