export function toLocaleString(num) {
  // TODO : 여기에 코드 작성을 해주세요.
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
