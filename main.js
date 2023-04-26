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
        const ev1 = document.getElementsByClassName("ev1")[0];
        const evPosition = ev.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (evPosition < windowHeight / 2 && evPosition > -windowHeight / 2) {
          setIsEvInView(true);
        } else {
          setIsEvInView(false);
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
          aboutUs1.classList.add("acrive");
        } else {
          aboutUs1.classList.remove("active");
        }
        const OnfutureTv = document.getElementById("OnfutureTv");
        const OnfutureTvPosition = OnfutureTv.getBoundingClientRect().top;
        const OnfutureTvHeight = OnfutureTv.offsetHeight;
        const OnfutureTvCenter = OnfutureTvPosition + OnfutureTvHeight / 2;
  
        if (
          OnfutureTvCenter < (windowHeight * 3) / 4 &&
          OnfutureTvCenter > windowHeight / 4
        ) {
          setIsVideoInView(true);
        } else {
          setIsVideoInView(false);
        }
        const Services = document.getElementById("Services");
        const ServicesPosition = Services.getBoundingClientRect().top;
        const ServicesHeight = Services.offsetHeight;
        const ServicesCenter = ServicesPosition + ServicesHeight / 2;
        if (
          ServicesCenter < (windowHeight * 3) / 4 &&
          ServicesCenter > windowHeight / 4
        ) {
          setServiceInView(true);
        } else {
          setServiceInView(false);
        }
        const Karyera = document.getElementById("Karyera");
        const KaryeraPosition = Karyera.getBoundingClientRect().top;
        const KaryeraHeight = Karyera.offsetHeight;
        const KaryeraCenter = KaryeraPosition + KaryeraHeight / 2;
  
        if (
          KaryeraCenter < (windowHeight * 3) / 4 &&
          KaryeraCenter > windowHeight / 4
        ) {
          setKaryeraInView(true);
        } else {
          setKaryeraInView(false);
        }
  
        const Footer = document.getElementById("Contact");
        const FooterPosition = Footer.getBoundingClientRect().top;
        const FooterHeight = Footer.offsetHeight;
        const FooterCenter = FooterPosition + FooterHeight / 2;
  
        if (
          FooterCenter < (windowHeight * 3) / 4 &&
          FooterCenter > windowHeight / 4
        ) {
          setFooterInView(true);
        } else {
          setFooterInView(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);