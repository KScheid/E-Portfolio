function openTab(tabName) { //tab switcher
    var i;
    var x = document.getElementsByClassName("menuTitle");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function openNav() {
    if (window.outerWidth <= 769) { //smaller than 769px 
        var infoPanel = document.getElementById("myInfo").style.width = "100%";
    } else {
        infoPanel = document.getElementById("myInfo").style.width = "48.9%";
    }
}

function closeNav() {
    document.getElementById("myInfo").style.width = "0";
}

function resizeSwitch() {//resizes info section if page size changes
    if (window.outerWidth > 769) {
        var infoPanel = document.getElementById("myInfo").style.width = "48.9%";
    } 

}
