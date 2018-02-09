export class MyUtils {
  static hasClass (el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  }

  static addClass (el, className) {
    if (MyUtils.hasClass(el, className)) {
      return
    }
    let classNames = el.className.split(' ')

    classNames.push(className)
    const classStr = classNames.join(' ')
    console.log(classStr)
    el.className = classStr
  }
}
