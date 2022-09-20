export function nl2br(s) {
  return s.trim().replace(/\r?\n/g, '<br /><br />');
}

export function nl2(s, tag) {
  return s
    .trim()
    .split('\n')
    .map((line) => `<${tag}>${line}</${tag}>`)
    .join('\n');
}

export function isBlank(s) {
  return s.trim().length === 0;
}
