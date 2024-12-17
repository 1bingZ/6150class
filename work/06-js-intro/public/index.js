"use strict";

(function () {
    // Variable Assignment （初始化变量）
    const menu = document.querySelector('.menu');
    const externalLinks = document.querySelector('.external.links');
    const menuDropdownContent = document.querySelector('.menu + .dropdown-content');
    const externalLinksDropdownContent = document.querySelector('.external.links + .dropdown-content');

    
    // switch dropdownConten‘s status （切换下拉菜单的显示状态）
    function toggleDropdown(dropdownContent) {
        console.log('switch dropdownConten‘s status');
        dropdownContent.classList.toggle('show');
    }


    // click event （点击menu时，显示或隐藏下拉菜单）
    menu.addEventListener('click', function () {
        console.log('click hide/show menuDropdownContent');
        toggleDropdown(menuDropdownContent);
    });

    // keydown event （按下enter键，menu显示或隐藏下拉菜单）
    menu.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            console.log('keydown hide/show menuDropdownContent');
            toggleDropdown(menuDropdownContent);
        }
    });


    externalLinks.addEventListener('click', function () {
        console.log('click hide/show externalLinksDropdownContent');
        toggleDropdown(externalLinksDropdownContent);
    });

    externalLinks.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            console.log('keydown hide/show externalLinksDropdownContent');
            toggleDropdown(externalLinksDropdownContent);
        }
    });
})();