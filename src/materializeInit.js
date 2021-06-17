document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.querySelector('.sidenav');
    const sidenavInstances = M.Sidenav.init(sidenav, {});
    const modal = document.querySelectorAll('.modal');
    const modalInstances = M.Modal.init(modal, {
        preventScrolling: false
    });
});
