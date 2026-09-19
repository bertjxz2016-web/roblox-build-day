document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const updatesForm = document.querySelector('#updates-form');
const updatesStatus = document.querySelector('#updates-status');
if (updatesForm) {
  updatesForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = new FormData(updatesForm).get('email');
    localStorage.setItem('buildDayUpdatesRequest', String(email));
    updatesStatus.textContent = 'Your request is saved on this device. The organizer still needs to connect the live update list.';
    updatesForm.reset();
  });
}
const schoolForm = document.querySelector('#school-form');
const schoolStatus = document.querySelector('#school-status');
if (schoolForm) {
  schoolForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(schoolForm);
    localStorage.setItem('buildDaySchoolRequest', JSON.stringify({ email: data.get('email'), role: data.get('role') }));
    schoolStatus.textContent = 'Your inquiry is saved on this device. The organizer still needs to connect the live school-information inbox.';
    schoolForm.reset();
  });
}
