const submenus = document.querySelectorAll('.submenu');
const menuItems = document.querySelectorAll('.menu-item');

// 메뉴 아이템에 마우스를 올릴 때 서브메뉴 표시
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', function () {
    // 모든 서브메뉴를 숨기기
    submenus.forEach((sub) => (sub.style.display = 'none'));

    // 해당 서브메뉴 보이기
    const submenuId = this.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);

    if (submenu) {
      submenu.style.display = 'block';
      const rect = this.getBoundingClientRect();
      submenu.style.top = `${rect.bottom}px`;
      submenu.style.left = `${rect.left}px`;
    }
  });
});

// 서브메뉴에 마우스가 올려져 있을 때 서브메뉴가 숨겨지지 않도록 유지
submenus.forEach((submenu) => {
  submenu.addEventListener('mouseenter', function () {
    this.style.display = 'block';
  });
});

// 마우스가 메뉴 아이템이나 서브메뉴 밖으로 나갈 때 서브메뉴 숨기기
document.addEventListener('mousemove', function (e) {
  if (!e.target.closest('.menu-item') && !e.target.closest('.submenu')) {
    submenus.forEach((sub) => (sub.style.display = 'none'));
  }
});
