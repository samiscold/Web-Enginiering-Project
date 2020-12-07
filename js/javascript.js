window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 25) nav.className = ''; else nav.className = 'scroll';
  };



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("lista-dropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.butoni-dropdown')) {
      var dropdowns = document.getElementsByClassName("loopa-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  /*
   <div class="dropdown">
                    <a onclick="myFunction()" class="butoni-dropdown">E-Sherbimet</a>
                    <div id="lista-dropdown" class="dropdown-content">
                      <a href="#home">Home</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
                    </div>
                  </div>

  /** */