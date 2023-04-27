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




    const handleScroll = () => {
      const ev = document.getElementById("Ev");
      const ev1 = document.getElementById("ev1");
      const evPosition = ev.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (evPosition < windowHeight / 2 && evPosition > -windowHeight / 2) {
        ev1.classList.add("active");        
      } else {
        ev1.classList.remove("active");          
      }

      const aboutUs = document.getElementById("AboutUs");
      const aboutUs1 = document.getElementsByClassName("aboutUs1")[0];
      const aboutUsPosition = aboutUs.getBoundingClientRect().top;
      const aboutUsHeight = aboutUs.offsetHeight;
      const aboutUsCenter = aboutUsPosition + aboutUsHeight / 2;

      if (
        aboutUsCenter < (windowHeight * 3) / 4 &&
        aboutUsCenter > windowHeight / 4
      ) {
        aboutUs1.classList.add("active");
      } else {
        aboutUs1.classList.remove("active");
      }      
      const OnfutureTv = document.getElementById("OnfutureTv");
      const Videolar1 = document.getElementsByClassName("Videolar1")[0];
      const OnfutureTvPosition = OnfutureTv.getBoundingClientRect().top;
      const OnfutureTvHeight = OnfutureTv.offsetHeight;
      const OnfutureTvCenter = OnfutureTvPosition + OnfutureTvHeight / 2;

      if (
        OnfutureTvCenter < (windowHeight * 3) / 4 &&
        OnfutureTvCenter > windowHeight / 4
      ) {
        Videolar1.classList.add("active");
      } else {
        Videolar1.classList.remove("active");
      }
      const Services = document.getElementById("Services");
      const Xidmetler1 = document.getElementsByClassName("Xidmetler1")[0];
      const ServicesPosition = Services.getBoundingClientRect().top;
      const ServicesHeight = Services.offsetHeight;
      const ServicesCenter = ServicesPosition + ServicesHeight / 2;
      if (
        ServicesCenter < (windowHeight * 3) / 4 &&
        ServicesCenter > windowHeight / 4
      ) {
        Xidmetler1.classList.add("active");
      } else {
        Xidmetler1.classList.remove("active");
      }
      const Karyera = document.getElementById("Karyera");
      const Karyera1 = document.getElementsByClassName("Karyera1")[0];
      const KaryeraPosition = Karyera.getBoundingClientRect().top;
      const KaryeraHeight = Karyera.offsetHeight;
      const KaryeraCenter = KaryeraPosition + KaryeraHeight / 2;

      if (
        KaryeraCenter < (windowHeight * 3) / 4 &&
        KaryeraCenter > windowHeight / 4
      ) {
        Karyera1.classList.add("active");
      } else {
        Karyera1.classList.remove("active");
      }

      const Footer = document.getElementById("Contact");
      const Elaqe1 = document.getElementsByClassName("Elaqe1")[0];
      const FooterPosition = Footer.getBoundingClientRect().top;
      const FooterHeight = Footer.offsetHeight;
      const FooterCenter = FooterPosition + FooterHeight / 2;

      if (
        FooterCenter < (windowHeight * 3) / 4 &&
        FooterCenter > windowHeight / 4
      ) {
        Elaqe1.classList.add("active");
      } else {
        Elaqe1.classList.remove("active");
      }
    };
    
    window.addEventListener("scroll", handleScroll);