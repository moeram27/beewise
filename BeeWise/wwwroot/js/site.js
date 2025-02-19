// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const langsWrapper = $('.gs-langs-wrapper');
const langsArrow = $('.lang-dropdown-wrapper');
const burgerMenu = $('.burger-menu');
const sidebarBackdrop = $('.sidebar-backdrop');
let isSidebarOpen = true;
const logicLegend = $(".info-badge-wrapper");
const modalOverlay = $(".info-modal-overlay");
let isModalOpen = false;
const openModalBtn = $(".open-modal");
const closeModalBtn = $(".close-modal");

// Function to toggle language menu
function openLangMenu(el) {
    const btn = $(el);
    langsWrapper.slideToggle();
    btn.toggleClass("expanded");
}


function toggleSideBar(el) {
    const toggleSideBarBtn = $(el);
    sidebarBackdrop.fadeToggle();
    $('body').toggleClass("no-scroll");

    if (isSidebarOpen) {
        toggleSideBarBtn.find("img").prop('src', '/images/header-items/close-burgermenu-icon.png');
    } else {
        toggleSideBarBtn.find("img").prop('src', '/images/header-items/burger-menu.svg');
    }

    isSidebarOpen = !isSidebarOpen;
}

// Function to toggle Logic Legend visibility
logicLegend.click(function (event) {
    event.stopPropagation(); // Prevent event bubbling

    if ($(this).hasClass("collapsed")) {
        // Expand the legend
        $(this).animate({ maxWidth: "190px", paddingLeft: "10px", paddingRight: "10px" }, 300).removeClass("collapsed");
    } else {
        // Collapse the legend, keeping only the curved section & info icon visible
        $(this).animate({ maxWidth: "50px", paddingLeft: "5px", paddingRight: "5px" }, 300).addClass("collapsed");
    }
});

// Function to open modal when clicking the info icon
openModalBtn.click(function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    modalOverlay.fadeIn(); // Show the modal
    $("body").addClass("no-scroll"); // Disable scrolling
});

// Function to close modal when clicking the close button
closeModalBtn.click(function () {
    modalOverlay.fadeOut(); // Hide the modal
    $("body").removeClass("no-scroll"); // Re-enable scrolling
});

// Close modal when clicking outside the modal content
modalOverlay.click(function (event) {
    if ($(event.target).is(modalOverlay)) {
        modalOverlay.fadeOut();
        $("body").removeClass("no-scroll");
    }
});

const swiper = new Swiper('.service-info-swiper', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    centerInsufficientSlides: true
});
