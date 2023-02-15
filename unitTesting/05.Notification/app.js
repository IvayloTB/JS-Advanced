function notify(message) {
 const notif = document.getElementById('notification');
 notif.textContent = message;
 notif.style.display = 'block';
 notif.addEventListener('click', () => {
  notif.style.display = 'none'
 })
}