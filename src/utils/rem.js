// 基础设置为1px
const baseSize = 1
// 设置 rem 函数
function setRem () {
    // 保留后四位  String(number).replace(/^(.*\..{4}).*$/,"$1")
    const scale = Number(String(document.documentElement.clientWidth / 1920).replace(/^(.*\..{4}).*$/,"$1"))
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 首次加载设置 rem
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}
