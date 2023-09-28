export function validateNumber(event) {
  const inputValue = event.key;
  const pattern = /^[0-9]$/;
  if (!pattern.test(inputValue)) {
    event.preventDefault();
  }
}

export function validateString(event) {
  const inputValue = event.key;
  const pattern = /^[a-zA-Zа-яА-ЯaeiouAEIOUІі]+$/;
  if (!pattern.test(inputValue)) {
    event.preventDefault();
  }
}
