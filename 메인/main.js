function goTomainpage() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}

function goTosinmungopage() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}

function gotointroducepage() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}

function gotohacpok() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}
function gotofood() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}
function gotosunjeong() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}
function gotogita() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}
function gotomypage() {
  window.location.href =
    'http://127.0.0.1:5501/%EB%A9%94%EC%9D%B8/%EB%A9%94%EC%9D%B8.html';
}
document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu-item');
  const submenus = document.querySelectorAll('.submenu');

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', function () {
      const submenuId = this.getAttribute('data-submenu');
      const submenu = document.getElementById(submenuId);

      // 모든 서브메뉴를 숨기기
      submenus.forEach((sub) => (sub.style.display = 'none'));

      // 해당 서브메뉴를 보이도록 설정하고 위치 조정
      if (submenu) {
        submenu.style.display = 'block';
        const rect = this.getBoundingClientRect();
        submenu.style.top = `${rect.bottom}px`;
        submenu.style.left = `${rect.left}px`;
      }
    });
  });

  submenus.forEach((submenu) => {
    submenu.addEventListener('mouseenter', function () {
      // 서브메뉴에 마우스가 올려져 있을 때 서브메뉴가 숨겨지지 않도록 유지
      this.style.display = 'block';
    });
  });

  document.addEventListener('mousemove', function (e) {
    // 마우스가 메뉴 아이템이나 서브메뉴 위에 없을 때 서브메뉴 숨기기
    if (!e.target.closest('.menu-item') && !e.target.closest('.submenu')) {
      submenus.forEach((sub) => (sub.style.display = 'none'));
    }
  });
});
