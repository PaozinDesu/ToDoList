export function getToday() {
  return new Date(Date.now()).toDateString().replace(" ", ", ");
}
