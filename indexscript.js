document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('colorSwitch');
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');
    const title1Text = document.getElementById('title1');
    const brdlogoOp = document.getElementById('brdlogo');

    switchElement.addEventListener('change', () => {
        changeBackgroundColor(switchElement.checked);
    });

    function changeBackgroundColor(isChecked) {
        if (isChecked) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            sunIcon.src = 'images/icons/blacksun.png';
            moonIcon.src = 'images/icons/blackmoon.png';
            title1Text.style.color = '#000000';
            brdlogoOp.style.opacity = 0.15;
        } else {
            document.body.style.backgroundColor = '#181818';
            document.body.style.color = 'white';
            sunIcon.src = 'images/icons/whitesun.png';
            moonIcon.src = 'images/icons/whitemoon.png';
            title1Text.style.color = '#666666';
            brdlogoOp.style.opacity = 0.75;
        }
    }
});


const mapImage = document.getElementById('mapImage');
const areas = document.querySelectorAll('area');

areas.forEach(area => {
    area.addEventListener('mouseover', function() {
        mapImage.src = area.getAttribute('data-hover');
    });

    area.addEventListener('mousein', function() {
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

const loadCustomFont = async () => {
  const font = new FontFace('platefont', 'url(fonts/EuroPlate.ttf)');
  await font.load();
  document.fonts.add(font);
};


//Quitar (hacer con enlace normal)
function openSubpage(area)
{
    window.location.href = 'subpages/deutschland.html?area=' + area;
}
