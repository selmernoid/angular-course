export function* generateId() {
  let i = 0;
  while (1) {
    yield i++;
  }
}
