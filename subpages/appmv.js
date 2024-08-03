const licensePlates = [{ code: 'ANK', city: 'Anklam', kreis: 'Landkreis Vorpommern-Greifswald', land: 'Mecklenburg-Vorpommern'},
{ code: 'AT', city: 'Altentreptow', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
{ code: 'BÜZ', city: 'Bützow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'DBR', city: 'Doberan', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'DM', city: 'Demmin', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'GDB', city: 'Gadebusch', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
{ code: 'GMN', city: 'Grimmen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
{ code: 'GÜ', city: 'Güstrow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'GVM', city: 'Grevesmühlen', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
{ code: 'GW', city: 'Greifswald', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
{ code: 'HGN', city: 'Hagenow', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'HGW', city: 'Hansestadt Greifswald', kreis: 'Stadt Greifswald', land: 'Mecklenburg-Vorpommern'},
{ code: 'HRO', city: 'Hansestadt Rostock', kreis: 'Stadt Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'HST', city: 'Hansestadt Stralsund', kreis: 'Stadt Stralsund ', land: 'Mecklenburg-Vorpommern'},
{ code: 'HWI', city: 'Hansestadt Wismar', kreis: 'Stadt Wismar ', land: 'Mecklenburg-Vorpommern'},
{ code: 'LBZ', city: 'Lübz', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'LRO', city: 'Landkreis Rostock', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'LUP', city: 'Ludwigslust, Parchim', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'LWL', city: 'Ludwigslust', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'MC', city: 'Malchin', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'MSE', city: 'Mecklenburgische Seenplatte', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'MST', city: 'Mecklenburg-Strelitz', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
{ code: 'MÜR', city: 'Müritz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'NB', city: 'Neubrandenburg', kreis: 'Stadt Neubrandenburg ', land: 'Mecklenburg-Vorpommern'},
{ code: 'NVP', city: 'Nordvorpommern', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
{ code: 'NWM', city: 'Nordwestmecklenburg', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
{ code: 'NZ', city: 'Neustrelitz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'PCH', city: 'Parchim', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'PW', city: 'Pasewalk', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
{ code: 'RDG', city: 'Ribnitz-Damgarten', kreis: 'Landkreis Vorpommern-Rügen', land: 'Mecklenburg-Vorpommern'},
{ code: 'RM', city: 'Röbel/Müritz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
{ code: 'ROS', city: 'Rostock', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'RÜG', city: 'Rügen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
{ code: 'SBG', city: 'Strasburg', kreis: 'Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald', land: 'Mecklenburg-Vorpommern'},
{ code: 'SN', city: 'Schwerin', kreis: 'Stadt Schwerin', land: 'Mecklenburg-Vorpommern'},
{ code: 'STB', city: 'Sternberg', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
{ code: 'TET', city: 'Teterow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
{ code: 'UEM', city: 'Ueckermünde', kreis: 'Landkreis Vorpommern-Greifswald', land: 'Mecklenburg-Vorpommern'},
{ code: 'VG', city: 'Vorpommern, Greifswald', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
{ code: 'VR', city: 'Vorpommern, Rügen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
{ code: 'WIS', city: 'Wismar', kreis: 'Landkreis Nordwestmecklenburg', land: 'Mecklenburg-Vorpommern'},
{ code: 'WLG', city: 'Wolgast', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
{ code: 'WRN', city: 'Waren', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
];

let currentPlate = {};

function getRandomLicensePlate()
{
  const imageContainer = document.getElementById('image-container');
  imageContainer.textContent = "";

  const randomIndex = Math.floor(Math.random() * licensePlates.length);
  currentPlate = licensePlates[randomIndex];

  document.getElementById('guess').value = '';
  document.getElementById('result').innerText = '';

  drawLicensePlate(currentPlate.code, currentPlate.land);

  document.getElementById('guess').style.display = 'inline';
  const einreichenButton = document.querySelector('button[onclick="checkGuess()"]');

  if (einreichenButton)
  {
    einreichenButton.style.display = 'inline';
  }
}

points = 0;
total = 0;

function checkGuess()
{
  const userGuess = document.getElementById('guess').value.trim();
  const resultDiv = document.getElementById('result');

  if (userGuess.toLowerCase() === currentPlate.city.toLowerCase())
  {
    if(currentPlate.kreis.includes('Stadt'))
    {
      resultDiv.innerText = `Richtig! ${currentPlate.code} gehört zu ${currentPlate.city} in der ${currentPlate.kreis} (${currentPlate.land}).`;
    }
    else
    {
      resultDiv.innerText = `Richtig! ${currentPlate.code} gehört zu ${currentPlate.city} im ${currentPlate.kreis} (${currentPlate.land}).`;
    }
    points += 1;
    total += 1;
  }
  else
  {
    if(currentPlate.kreis.includes('Stadt'))
    {
      resultDiv.innerText = `Falsch. ${currentPlate.code} gehört zu ${currentPlate.city} in der ${currentPlate.kreis} (${currentPlate.land}).`;
    }
    else
    {
      resultDiv.innerText = `Falsch. ${currentPlate.code} gehört zu ${currentPlate.city} im ${currentPlate.kreis} (${currentPlate.land}).`;
    }
    total +=1;
  }

  showFlag();
  showButton();
  showPoints();
  showPercentage();

  document.getElementById('guess').style.display = 'none';

  const einreichenButton = document.querySelector('button[onclick="checkGuess()"]');

  if (einreichenButton)
  {
    einreichenButton.style.display = 'none';
  }
}

function showFlag()
{
  const imageContainer = document.getElementById('image-container');

  imageContainer.textContent = "";

  const newImage = document.createElement('img');

  newImage.src = `../images/flags/${currentPlate.land}.png`;

  newImage.style.marginTop = '10px';
  newImage.style.width = '83px';
  newImage.style.height = '50px';

  imageContainer.appendChild(newImage);
}


function showButton()
{
  const newButton = document.createElement('button');

  newButton.textContent = 'Nächstes Kfz-Kennzeichen';
  newButton.style.marginTop = '10px';
  newButton.style.padding = '10px';

  newButton.addEventListener('click', function () {
    newButton.remove();
    getRandomLicensePlate();

    const einreichenButton = document.querySelector('button[onclick="checkGuess()"]');

    if (einreichenButton)
    {
      einreichenButton.style.display = 'inline';
    }
  });

  const buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(newButton);
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
}

document.getElementById('guess').addEventListener('keyup', handleEnterKey);

const loadCustomFont = async () => {
  const font = new FontFace('platefont', 'url(../fonts/EuroPlate.ttf)');
  await font.load();
  document.fonts.add(font);
};

async function drawLicensePlate(code, land)
{
  await loadCustomFont();

  const canvas = document.getElementById('license-plate-canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = '../images/plates/'+land+'.png';

  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.font = '83px "platefont"';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(code, 140, 80);
  };
}

document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('colorSwitch');
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');
    const houseIcon = document.getElementById('house');
    const alertText = document.getElementById('alert');

    switchElement.addEventListener('change', () => {
        changeBackgroundColor(switchElement.checked);
    });

    function changeBackgroundColor(isChecked) {
        if (isChecked) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            sunIcon.src = '../images/icons/blacksun.png';
            moonIcon.src = '../images/icons/blackmoon.png';
            houseIcon.src = '../images/icons/blackhouse.png';
            alertText.style.color = 'black';
        } else {
            document.body.style.backgroundColor = '#181818';
            document.body.style.color = 'white';
            sunIcon.src = '../images/icons/whitesun.png';
            moonIcon.src = '../images/icons/whitemoon.png';
            houseIcon.src = '../images/icons/whitehouse.png';
            alertText.style.color = 'white';
        }
    }
});

function showPoints()
{
  const pointsDiv = document.getElementById('points');

  pointsString = points.toString() + ' / ' + total.toString();

  pointsDiv.innerText = pointsString;
}

function showPercentage() {
    const percentageDiv = document.getElementById('percentage');

    const percentage = (points / total) * 100;
    const percentageString = percentage.toFixed(2) + '%';

    const color = getColorFromPercentage(percentage);

    percentageDiv.innerText = percentageString;
    percentageDiv.style.color = color;
}

function getColorFromPercentage(percentage) {
    const boundedPercentage = Math.min(100, Math.max(0, percentage));

    const red = Math.min(255, Math.floor((100 - boundedPercentage) * 2.55));
    const green = Math.min(255, Math.floor(boundedPercentage * 2.55));

    return `rgb(${red}, ${green}, 0)`;
}

getRandomLicensePlate();
