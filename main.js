let allControlDivs = document.querySelectorAll(".control-box");
let currentControlDiv = allControlDivs[0];

var fonts = [
  "Coemeter",
  "Crowlista Mono",
  "Crowlista Mono Italic",
  "Arsens"
];

function changeFont() {
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  if (document.body.style.fontFamily !== randomFont) {
    document.body.style.fontFamily = randomFont;
  } else {
    changeFont(); // Call the function again if the same font is already applied
  }
}

function shrinkHeader() {
  // Add code to shrink the header here
}

function initEvents() {
  window.addEventListener('scroll', function () {
    shrinkHeader();
  });
}

function changeClass() {
  var aboutElement = document.getElementById("about");
  var mailElements = document.getElementsByClassName("mail");

  aboutElement.addEventListener("click", function () {
    for (var i = 0; i < mailElements.length; i++) {
      mailElements[i].classList.toggle("clickable");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  changeClass(); // Call the changeClass function when the DOM is loaded
});


window.onload = function () {
  var button = document.getElementById("changefont");
  button.addEventListener("click", changeFont);
  initEvents();


  document.getElementById("titreadhoc").addEventListener("click", function() {
    var description = document.getElementById("aboutadhoc");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titreunilive").addEventListener("click", function() {
    var description = document.getElementById("aboutunilive");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titrebuldoz").addEventListener("click", function() {
    var description = document.getElementById("aboutbuldoz");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titre641").addEventListener("click", function() {
    var description = document.getElementById("about641");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titreduchamp").addEventListener("click", function() {
    var description = document.getElementById("aboutduchamp");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titre555").addEventListener("click", function() {
    var description = document.getElementById("about555");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titreagora").addEventListener("click", function() {
    var description = document.getElementById("aboutagora");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titrefievre").addEventListener("click", function() {
    var description = document.getElementById("aboutfievre");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titresuizpacio").addEventListener("click", function() {
    var description = document.getElementById("aboutsuizpacio");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("about").addEventListener("click", function() {
    var description = document.getElementById("aboutgeneral");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
      // description.style.pointerEvents = "all";
    } else {
      description.style.opacity = "1";
      // description.style.pointerEvents = "none";
    }

  })

  document.getElementById("titrepaisajes").addEventListener("click", function() {
    var description = document.getElementById("aboutpaisajes");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titrefonts").addEventListener("click", function() {
    var description = document.getElementById("aboutfonts");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titrecoemeter").addEventListener("click", function() {
    var description = document.getElementById("aboutcoemeter");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  document.getElementById("titrefigo").addEventListener("click", function() {
    var description = document.getElementById("aboutfigo");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
    } else {
      description.style.opacity = "1";
    }
  })

  // Ici-bas, le truc pour les mails

  // document.getElementById("about").addEventListener("click", function() {
  //   var mail = document.getElementsByClassName("mail");
  //   var currentPointerEvents = window.getComputedStyle(mail).pointerEvents;
  
  //   if (currentPointerEvents === "none") {
  //     mail.style.pointerEvents = "all";
  //   } else {
  //     mail.style.pointerEvents = "none";
  //   }
  // })

  // document.getElementById("about").addEventListener("click", function() {
  //   var description = document.getElementById("aboutfonts");
  //   var currentOpacity = parseFloat(description.style.opacity);
  
  //   if (currentOpacity === 1) {
  //     description.style.opacity = "0";
  //   } else {
  //     description.style.opacity = "1";
  //   }
  // })


  // $(document).ready(function() {
  //   if ($('.description').css('opacity') === '1') {
  //     $('.mail').css('pointer-events', 'all');
  //   } else {
  //     $('.mail').css('pointer-events', 'none');
  //   }
  // });
};


// if ($('#description').css('opacity') === '1') {
//   $('.mail').addClass('clickable');
// }; 

document.addEventListener('DOMContentLoaded', () => {
  // Get all the section elements
  const sections = document.querySelectorAll('.section');

  // Calculate the nearest scroll snap point
  let nearestDistance = Infinity;
  let nearestSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.left - window.innerWidth / 2);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestSection = section;
    }
  });

  // Scroll to the nearest section
  if (nearestSection) {
    nearestSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});
