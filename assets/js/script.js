const menuToggleBtn = document.querySelectorAll(".menuToggleBtn");
const toggleMenu = document.querySelectorAll(".toggleMenu");
const arrow = document.querySelectorAll(".arrow");

for (let x = 0; x < menuToggleBtn.length; x++) {
  menuToggleBtn[x].addEventListener("click", () => {
    toggleMenu[x].classList.toggle("menu-show");
    arrow[x].classList.toggle("arrow-rotate");
  });
}

const submenuToggleBtn = document.querySelectorAll(".submenuToggleBtn");
const toggleSubMenu = document.querySelectorAll(".toggleSubMenu");
const subArrow = document.querySelectorAll(".subArrow");

for (let x = 0; x < submenuToggleBtn.length; x++) {
  submenuToggleBtn[x].addEventListener("click", () => {
    toggleSubMenu[x].classList.toggle("toggleSubMenu-show");
    subArrow[x].classList.toggle("arrow-rotate");
  });
}

// Sticky Header Toggle
const header = document.getElementById("main-header");
const fixedNavToggleBtn = document.getElementById("fixedNavToggle-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20 && fixedNavToggleBtn.checked) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

// Sticky Header Toggle
const fixedNavToggle = (e) => {
  if (!e.target.checked) {
    header.classList.remove("sticky-header");
  } else {
    header.classList.add("sticky-header");
  }
};

// rightSidebarToggle
const rightSidebar = document.getElementById("rightSidebar");
const rightSidebarShow = () => {
  rightSidebar.classList.add("right-sidebar-show");
};
const rightSidebarClose = () => {
  rightSidebar.classList.remove("right-sidebar-show");
};
// Remove rightSidebar click  other side
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".right-sidebar") &&
    !e.target.closest(".rightSidebarShow-btn")
  ) {
    rightSidebar.classList.remove("right-sidebar-show");
  }
});

// Notification dropdown Toggle
const notificationDropdown = document.getElementById("notification-dropdown");
const notificationToggle = () => {
  notificationDropdown.classList.toggle("notification-show");
};

// Remove Notification dropdown click  other side
document.addEventListener("click", (e) => {
  if (
    !e.target.closest("#notification-dropdown") &&
    !e.target.closest(".notification-btn")
  ) {
    notificationDropdown.classList.remove("notification-show");
  }
});

// Dark light Toggle
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggle = () => {
  if (themeToggleBtn.checked) {
    localStorage.setItem("them", "dark");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    localStorage.setItem("them", "light");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
};
// get local store theme
const themName = localStorage.getItem("them");
if (themName === "dark") {
  themeToggleBtn.checked = true;
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
} else if (themName === "light") {
  themeToggleBtn.checked = false;
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
}

// Mobile sidebar Toggle
const mobileSidebarToggle = () => {
  document.getElementById("mainSidebar").classList.toggle("sidebar-show");
};
// Mobile sidebar close click to other side
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".sidebar") &&
    !e.target.closest("#mobile-sidebar-btn")
  ) {
    sidebar.classList.remove("sidebar-show");
  }
});

// Main sidebar toggle
const sidebarToggleRightSideBtn = document.getElementById(
  "sidebarToggle-rightSideBtn"
);
const sidebar = document.getElementById("mainSidebar");
const sideDocFooter = document.querySelector(".side-doc");

const sidebarToggle = () => {
  sidebar.classList.toggle("hover");
  sidebar.classList.toggle("close");
  sideDocFooter.classList.toggle("side-doc-mini");

  if (sidebarToggleRightSideBtn.checked == false) {
    sidebarToggleRightSideBtn.checked = true;
  } else if (sidebarToggleRightSideBtn.checked == true) {
    sidebarToggleRightSideBtn.checked = false;
  }
};

// onmouseover="hoverSidebarToggle()"
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".close")) {
    sidebar.classList.remove("close");
    sideDocFooter.classList.remove("side-doc-mini");
  } else if (
    !e.target.closest("#mainSidebar") &&
    sidebar.className == "sidebar hover"
  ) {
    sidebar.classList.add("close");
    sideDocFooter.classList.add("side-doc-mini");
  }
});

// Sidebar background color toggle
const transparentBtn = document.getElementById("transparent-btn");
const whiteBtn = document.getElementById("white-btn");
const sidebarContent = document.querySelector(".sidebar-content");
const handelTransparentBtn = () => {
  transparentBtn.classList.add("btn-active");
  transparentBtn.classList.remove("unactive-btn");
  whiteBtn.classList.remove("btn-active");
  whiteBtn.classList.add("unactive-btn");

  sidebarContent.classList.remove("sidebar-bg");
};

const handelWhiteBtn = () => {
  whiteBtn.classList.add("btn-active");
  whiteBtn.classList.remove("unactive-btn");
  transparentBtn.classList.remove("btn-active");
  transparentBtn.classList.add("unactive-btn");

  sidebarContent.classList.add("sidebar-bg");
};

const colorBtn = document.querySelectorAll(".color");
colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("color-active")) {
      resetActive();
      btn.classList.add("color-active");
    }

    const sideDashboardIcon = document.getElementById("side-dashboard-icon");
    if (btn.classList.contains("bg-blue-600")) {
      sideDashboardIcon.style.background = "blue";
    } else if (btn.classList.contains("bg-green-500")) {
      sideDashboardIcon.style.background = "green";
    } else if (btn.classList.contains("bg-title")) {
      sideDashboardIcon.style.background = "#333";
    } else if (btn.classList.contains("bg-red-500")) {
      sideDashboardIcon.style.background = "red";
    } else if (btn.classList.contains("bg-gradient")) {
      sideDashboardIcon.style.background =
        "linear-gradient(310deg, var(--secondary), var(--primary))";
    } else if (btn.classList.contains("bg-orange-500")) {
      sideDashboardIcon.style.background = "orange";
    }
  });
});

const resetActive = () => {
  colorBtn.forEach((btn) => {
    btn.classList.remove("color-active");
  });
};

// ---  option toggle
const toggleBtn = document.querySelectorAll(".teamToggleBtn");

for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].onclick = function () {
    let toggleOptions = this.nextElementSibling;
    if (toggleOptions.classList.contains("showTeamOption")) {
      toggleOptions.classList.remove("showTeamOption");
    } else {
      toggleOptions.classList.add("showTeamOption");
    }

    for (let x = 0; x < toggleBtn.length; x++) {
      if (toggleBtn[x] !== this) {
        toggleBtn[x].nextElementSibling.classList.remove("showTeamOption");
      }
    }
  };
}

// option remove to click other side
document.addEventListener("click", (e) => {
  const toggleOption = document.querySelectorAll(".teamToggle-Option");
  if (
    !e.target.closest(".teamToggle-Option") &&
    !e.target.closest(".teamToggleBtn")
  ) {
    toggleOption.forEach((option) => {
      option.classList.remove("showTeamOption");
    });
  }
});

// Orders List Filter
const filterOptions = document.querySelector(".filter-options");
const filterLists = document.querySelectorAll(".filter-options li");
const filterBox = document.getElementById("filter-box");

// filterOptions Toggle
const filterOptionsToggle = () => {
  filterOptions.classList.toggle("filter-options-show");
};

// Display Filter
filterLists.forEach((list) => {
  list.addEventListener("click", (e) => {
    let filterOption = e.target.innerText.split(":")[1];
    filterBox.innerText = filterOption;
    filterOptions.classList.remove("filter-options-show");
  });
});

// Remove Filter
const removeFilter = () => {
  filterBox.innerHTML = `Filters <i class="fas fa-chevron-down"></i>`;
  filterOptions.classList.remove("filter-options-show");
};

// filterOptions remove to click other side
document.addEventListener("click", (e) => {
  const filterOption = document.querySelector(".filter-options");
  if (
    !e.target.closest(".filter-options") &&
    !e.target.closest("#filter-box")
  ) {
    filterOption.classList.remove("filter-options-show");
  }
});

//------------------ New user Form -------------------------------

const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const step4 = document.querySelector(".step-4");

const form_1 = document.querySelector(".form_1");
const form_2 = document.querySelector(".form_2");
const form_3 = document.querySelector(".form_3");
const form_4 = document.querySelector(".form_4");

const btn_done = document.querySelector(".btn_done");

const handelStep1 = () => {
  step1.classList.add("active-step");
  step2.classList.remove("active-step");
  step3.classList.remove("active-step");
  step4.classList.remove("active-step");

  form_2.style.display = "none";
  form_3.style.display = "none";
  form_4.style.display = "none";
  form_1.style.display = "block";
};

const handelStep2 = () => {
  step1.classList.add("active-step");
  step2.classList.add("active-step");
  step3.classList.remove("active-step");
  step4.classList.remove("active-step");

  form_1.style.display = "none";
  form_3.style.display = "none";
  form_4.style.display = "none";
  form_2.style.display = "block";
};
const handelStep3 = () => {
  step1.classList.add("active-step");
  step2.classList.add("active-step");
  step3.classList.add("active-step");
  step4.classList.remove("active-step");

  form_1.style.display = "none";
  form_2.style.display = "none";
  form_4.style.display = "none";
  form_3.style.display = "block";
};

const handelStep4 = () => {
  step1.classList.add("active-step");
  step2.classList.add("active-step");
  step3.classList.add("active-step");
  step4.classList.add("active-step");

  form_1.style.display = "none";
  form_2.style.display = "none";
  form_3.style.display = "none";
  form_4.style.display = "block";
};

// Next Button action
const handelNext1 = () => {
  form_1.style.display = "none";
  form_2.style.display = "block";
  step2.classList.add("active-step");
};
const handelNext2 = () => {
  form_2.style.display = "none";
  form_3.style.display = "block";
  step3.classList.add("active-step");
};
const handelNext3 = () => {
  form_3.style.display = "none";
  form_4.style.display = "block";
  step4.classList.add("active-step");
};

// Back Button Action
const handelBack2 = () => {
  form_1.style.display = "block";
  form_2.style.display = "none";
  step2.classList.remove("active-step");
};
const handelBack3 = () => {
  form_2.style.display = "block";
  form_3.style.display = "none";
  step3.classList.remove("active-step");
};
const handelBack4 = () => {
  form_3.style.display = "block";
  form_4.style.display = "none";
  step4.classList.remove("active-step");
};

// Send Button Action
const handelSend = () => {
  alert("SUCCESS");
};

// Custom Dropdown Toggle
const arrows = document.querySelectorAll(".custom-dropdown-btn .arrow");
const customDropdownButtons = document.querySelectorAll(".custom-dropdown-btn");
const customDropdowns = document.querySelectorAll(".custom-dropdown");

for (let i = 0; i < customDropdownButtons.length; i++) {
  customDropdownButtons[i].onclick = function () {
    this.classList.toggle("active-dropdown-btn");
    let dropdowns = this.nextElementSibling;
    if (dropdowns.classList.contains("customDropdownShow")) {
      dropdowns.classList.remove("customDropdownShow");
    } else {
      dropdowns.classList.add("customDropdownShow");
    }

    for (let x = 0; x < customDropdownButtons.length; x++) {
      if (customDropdownButtons[x] !== this) {
        customDropdownButtons[x].classList.remove("active-dropdown-btn");
        customDropdownButtons[x].nextElementSibling.classList.remove(
          "customDropdownShow"
        );
      }
    }

    // Search Filter
    let filterBox = this.nextElementSibling.querySelector(
      ".dropdown-searchBox"
    );
    let customDropdownItems = this.nextElementSibling.querySelectorAll(
      ".custom-dropdown-items li"
    );

    filterBox.addEventListener("keyup", (e) => {
      const dropdownSearchInput = e.target.value.toLowerCase();
      console.log(dropdownSearchInput);
      customDropdownItems.forEach((customDropdownItem) => {
        let text = customDropdownItem.textContent.toLowerCase();
        if (text.includes(dropdownSearchInput)) {
          customDropdownItem.style.display = "";
        } else {
          customDropdownItem.style.display = "none";
        }
      });
    });
  };
}

//Custom Dropdown remove click to other side
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".custom-dropdown-btn") &&
    !e.target.closest(".custom-dropdown")
  ) {
    customDropdowns.forEach((customDropdown) => {
      customDropdown.classList.remove("customDropdownShow");
    });

    arrows.forEach((arrow) => {
      arrow.classList.remove("arrow-rotate");
    });
  }
});

// items Display
const customDropdownItems = document.querySelectorAll(
  ".custom-dropdown-items li"
);
const dropdownSearchBox = document.querySelectorAll(".dropdown-searchBox");

customDropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const itemText = e.target.innerText;

    e.target.parentNode.parentNode.parentNode.querySelector(
      ".custom-dropdown-btn"
    ).innerText = itemText;

    customDropdowns.forEach((customDropdown) => {
      customDropdown.classList.remove("customDropdownShow");
    });
  });
});

// Accordion
const accordionBtn = document.querySelectorAll(".accordion-btn");
const accordionContent = document.querySelectorAll(".accordion-content");
const accountArrow = document.querySelectorAll(".accordion-btn .arrow");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", () => {
    accordionContent[i].classList.toggle("accordion-content-show");
    accountArrow[i].classList.toggle("arrow-rotate");
  });
}
