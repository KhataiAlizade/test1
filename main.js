window.addEventListener("scroll", function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var secondpart = document.querySelector(".secondpart");
    if (scrolled > 0) {
      secondpart.classList.add("fixed");
    } else {
      secondpart.classList.remove("fixed");
    }
  });

  var menuOpen = true;
      function toggleMenu() {
        menuOpen = !menuOpen;
        var menuIcon = document.querySelector(".menu-icon");
        menuIcon.classList.toggle("open", menuOpen);
      }

      var menuOpen = true;
      var menuElement = document.getElementById("menu");

      function setMenuClass() {
        var className = menuOpen ? "Containeritem3" : "Containermenu";
        menuElement.className = className;
      }

      function toggleMenu() {
        menuOpen = !menuOpen;
        setMenuClass();
      }

      setMenuClass(); 

      menuElement.addEventListener("click", toggleMenu);