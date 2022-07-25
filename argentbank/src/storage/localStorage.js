//Local Storage managment functions//

function setLocalStorage(token) {
  window.localStorage.setItem("token", token);
}

function verifyLocalStorage() {
  return !!window.localStorage.getItem("token");
}
function getLocalToken() {
  return window.localStorage.getItem("token");
}

export {
    setLocalStorage,
    verifyLocalStorage,
    getLocalToken,
}