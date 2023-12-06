//=====================================БУРГЕР===================================//

// Меню бургер

const iconMenu = document.querySelector(".icon-menu");
const bodyMenu = document.querySelector(".menu__body");
iconMenu.addEventListener('click', function () {
    document.documentElement.classList.toggle("menu-open")
    bodyMenu.classList.toggle("menu-open");

});


//=====================================ПОИСК ХЕДЕР ===================================//

// Активация строки поиска
let searchButton = document.querySelector('.right-block__search');
let pageSearch = document.querySelector('.page');

searchButton.addEventListener('click', function () {
    pageSearch.classList.toggle('search-open');
    searchButton.classList.toggle('search-open');
})

//С помощью Esc задвигаем обратно строку поиска

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        if (pageSearch.classList.contains('search-open')) {
            pageSearch.classList.remove('search-open');
            searchButton.classList.remove('search-open');
        }
    }
})

//Очистка поисковой строки
const cancelButton = document.querySelector('.search-block__cancel');
const inputElement = document.querySelector('input');

cancelButton.addEventListener('click', () => {
    inputElement.value = '';
});


//=====================================СУБМЕНЮ===================================//


const menuitems = document.querySelectorAll('.menu__item');
const submenus = document.querySelectorAll('.submenu');

let hideTimeouts = new Map();

function showSubmenu(item) {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        submenu.style.visibility = 'visible';
    }
}

function hideSubmenu(item) {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        submenu.style.visibility = 'hidden';
    }
}

function showSubmenuMobile(item) {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        hideAllSubmenus();
        showSubmenu(item);
    }
}

function hideAllSubmenus() {
    menuitems.forEach((item) => {
        hideSubmenu(item);
    });
}

function handleDocumentClick(event) {
    const isOutsideSubmenu = !event.target.closest('.submenu');
    const isOutsideMenuitem = !event.target.closest('.menu__item');

    if (isOutsideSubmenu && isOutsideMenuitem) {
        hideAllSubmenus();
    }
}

document.addEventListener('click', handleDocumentClick);

menuitems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        const timeoutId = setTimeout(() => {
            hideSubmenu(item);
        }, 50); // Уменьшили задержку до 50 миллисекунд

        hideTimeouts.set(item, timeoutId);
    });

    item.addEventListener('mouseenter', () => {
        const timeoutId = hideTimeouts.get(item);
        if (timeoutId) {
            clearTimeout(timeoutId);
            hideTimeouts.delete(item);
        }
        showSubmenu(item);
    });

    item.addEventListener('touchstart', (event) => {
        event.preventDefault();
        showSubmenuMobile(item);
    });

    item.addEventListener('click', (event) => {
        event.preventDefault();
        showSubmenuMobile(item);
    });
});


//Работа кКнопки "Назад" в мобильном субменю

const submenuTitles = document.querySelectorAll('.submenu__title');
submenuTitles.forEach((title) => {
    title.addEventListener('touchstart', (event) => {
        event.stopPropagation();
        const submenu = event.currentTarget.closest('.submenu');
        if (submenu) {
            submenu.style.visibility = 'hidden';
        } else {
            console.log('Ошибка');
        }
    });
});

//=====================================ПОИСК СУБМЕНЮ ===================================//

//Активация строки поиска в субменю

function setupSubMenuActivation(menuItem) {
    const inputSearchMenu = menuItem.querySelector('.submenu__search input');
    const searchSubMenu = menuItem.querySelector('.submenu__search');
    const labelSearchMenu = menuItem.querySelector('.submenu__search label');
    const cancelSearchMenu = menuItem.querySelector('.submenu__cancel');

    const config = {
        displayNone: ['title', 'find', 'cancel'],
        width: '100%',
        labelLeft: '0',
    };

    function activateSubMenu() {
        config.displayNone.forEach(item => menuItem.querySelector(`.submenu__${item}`).style.display = 'none');

        searchSubMenu.style.width = config.width;
        labelSearchMenu.style.left = config.labelLeft;
        cancelSearchMenu.style.display = 'block';
    }

    function deactivateSubMenu() {
        config.displayNone.forEach(item => menuItem.querySelector(`.submenu__${item}`).style.display = '');

        searchSubMenu.style.width = '';
        labelSearchMenu.style.left = '';
        cancelSearchMenu.style.display = 'none';
        inputSearchMenu.value = '';
        inputSearchMenu.blur();
        inputSearchMenu.setCustomValidity('');
    }

    inputSearchMenu.addEventListener('focus', activateSubMenu);
    inputSearchMenu.addEventListener('blur', deactivateSubMenu);

    cancelSearchMenu.addEventListener('click', deactivateSubMenu);
}

const menuContainer = document.querySelector('.menu');

menuContainer.addEventListener('mouseenter', (event) => {
    const menuItem = event.target.closest('.menu__item');
    if (menuItem) {
        setupSubMenuActivation(menuItem);
    }
});

menuContainer.addEventListener('click', (event) => {
    const menuItem = event.target.closest('.menu__item');
    if (menuItem) {
        setupSubMenuActivation(menuItem);
    }
});

// menuContainer.addEventListener('touchstart', (event) => {
//     const menuItem = event.target.closest('.menu__item');
//     if (menuItem) {
//         setupSubMenuActivation(menuItem);
//     }
// });
