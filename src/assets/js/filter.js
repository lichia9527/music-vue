export function numberConvert (num) {
  let fNum = parseFloat(num)
  if (num < 1000) {
    return fNum
  }

  return (fNum / 10000).toFixed(1) + '万'
}
