export function displayMessage(messageType, message) {
  return `<div class="alert alert-${messageType}" role="alert">
          ${message}</div>`;
}
