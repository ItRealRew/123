window.onload = function () {
    FileItem.onclick = onClickFileHandler;
    SettingsItem.onclick = onClickSettingsHandler;
};


function onClickFileHandler() {
    var itemsContextMenu = document.getElementById("fileItems");
    var itemMainMenu = document.getElementById("FileItem");

    if (itemMainMenu.classList.contains("active-item-main-menu")) {
        resetMainMenu();
    } else {
        itemMainMenu.classList.add("active-item-main-menu");
        itemsContextMenu.className = "context-menu-active";
    }
}

function onClickSettingsHandler() {
    var itemsContextMenu = document.getElementById("settingItems");
    var itemMainMenu = document.getElementById("SettingsItem");

    if (itemMainMenu.classList.contains("active-item-main-menu")) {
        resetMainMenu();
    } else {
        itemMainMenu.classList.add("active-item-main-menu");
        itemsContextMenu.className = "context-menu-active";
    }
}

function resetMainMenu() {
    var itemsContextMenu = document.getElementById("settingItems");
    itemsContextMenu.className = "context-menu";
    itemsContextMenu = document.getElementById("fileItems");
    itemsContextMenu.className = "context-menu";

    var itemMainMenu = document.getElementById("SettingsItem");
    itemMainMenu.className = "";
    var itemMainMenu = document.getElementById("FileItem");
    itemMainMenu.classList.remove("active-item-main-menu");
}