import { clearStorage } from ".././utils/storage.js"

export default function logoutButton() {
  const button = document.querySelector("#logout")

  button.onclick = function() {
    clearStorage();
    location.href = "/";
  }
}
logoutButton();

