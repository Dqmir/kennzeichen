/* Block of functions to handle the rezising of the window and applying the
correct map image to the desired scale */

// Initial definitions, setting mapImage2 as default (75%)
// this might be updated in the future to make way for more percentages

let mapImage = document.getElementById('mapImage1');
const areas = document.querySelectorAll('area');

// Simple if function to detect the width and update the id of the map image

function updateMapImage() {
    const width = window.innerWidth;

    if (width <= 500) {
        mapImage = document.getElementById('mapImage4');
    } else if (width > 500 && width < 768) {
        mapImage = document.getElementById('mapImage3');
    } else if (width >= 768 && width < 1024) {
        mapImage = document.getElementById('mapImage3');
    } else if (width >= 1024 && width <= 1536) {
        mapImage = document.getElementById('mapImage2');
    } else {
        mapImage = document.getElementById('mapImage1');
    }
}

// Inital call to the function

updateMapImage();

// Event listeners for the position and click of the cursor

window.addEventListener('resize', updateMapImage);

areas.forEach(area => {
    area.addEventListener('mouseover', function() {
        mapImage.src = area.getAttribute('data-hover');
    });

    area.addEventListener('mouseout', function() {
        mapImage.src = 'images/maps/de.png';
    });

    area.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = area.href;
    });
});

// Font loader

const loadCustomFont = async () => {
  const font = new FontFace('platefont', 'url(fonts/EuroPlate.ttf)');
  await font.load();
  document.fonts.add(font);
};


//Quitar (hacer con enlace normal)
function openSubpage(area)
{
    window.location.href = 'subpages/game/deutschland.html?area=' + area;
}
