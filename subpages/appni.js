const licensePlates = [
  { code: 'ALF', city: 'Alfeld', kreis: 'Landkreis Hildesheim', land: 'Niedersachsen'},
  { code: 'AUR', city: 'Aurich', kreis: 'Landkreis Aurich', land: 'Niedersachsen'},
  { code: 'BRA', city: 'Brake', kreis: 'Landkreis Wesermarsch', land: 'Niedersachsen'},
  { code: 'BRL', city: 'Braunlage', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'BRV', city: 'Bremervörde', kreis: 'Landkreis Rotenburg (Wümme)', land: 'Niedersachsen'},
  { code: 'BS', city: 'Braunschweig', kreis: 'Stadt Braunschweig', land: 'Niedersachsen'},
  { code: 'BSB', city: 'Bersenbrück', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'CE', city: 'Celle', kreis: 'Landkreis Celle', land: 'Niedersachsen'},
  { code: 'CLP', city: 'Cloppenburg', kreis: 'Landkreis Cloppenburg', land: 'Niedersachsen'},
  { code: 'CLZ', city: 'Clausthal-Zellerfeld', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'CUX', city: 'Cuxhaven', kreis: 'Landkreis Cuxhaven', land: 'Niedersachsen'},
  { code: 'DAN', city: 'Dannenberg', kreis: 'Landkreis Lüchow-Dannenberg', land: 'Niedersachsen'},
  { code: 'DEL', city: 'Delmenhorst', kreis: 'Stadt Delmenhorst', land: 'Niedersachsen'},
  { code: 'DH', city: 'Diepholz', kreis: 'Landkreis Diepholz', land: 'Niedersachsen'},
  { code: 'DUD', city: 'Duderstadt', kreis: 'Landkreis Göttingen', land: 'Niedersachsen'},
  { code: 'EIN', city: 'Einbeck', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'EL', city: 'Emsland', kreis: 'Landkreis Emsland', land: 'Niedersachsen'},
  { code: 'EMD', city: 'Emden', kreis: 'Stadt Emden', land: 'Niedersachsen'},
  { code: 'FRI', city: 'Friesland', kreis: 'Landkreis Friesland', land: 'Niedersachsen'},
  { code: 'GAN', city: 'Gandersheim', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'GF', city: 'Gifhorn', kreis: 'Landkreis Gifhorn', land: 'Niedersachsen'},
  { code: 'GÖ', city: 'Göttingen', kreis: 'Landkreis Göttingen, Stadt Göttingen ', land: 'Niedersachsen'},
  { code: 'GS', city: 'Goslar', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'H', city: 'Hannover', kreis: 'Stadt Hannover', land: 'Niedersachsen'},
  { code: 'HE', city: 'Helmstedt', kreis: 'Landkreis Helmstedt', land: 'Niedersachsen'},
  { code: 'HI', city: 'Hildesheim', kreis: 'Landkreis Hildesheim', land: 'Niedersachsen'},
  { code: 'HK', city: 'Heidekreis', kreis: 'Landkreis Heidekreis', land: 'Niedersachsen'},
  { code: 'HM', city: 'Hameln', kreis: 'Landkreis Hameln-Pyrmont', land: 'Niedersachsen'},
  { code: 'HMÜ', city: 'Hann. Münden', kreis: 'Landkreis Göttingen ', land: 'Niedersachsen'},
  { code: 'HOL', city: 'Holzminden', kreis: 'Landkreis Holzminden', land: 'Niedersachsen'},
  { code: 'LER', city: 'Leer', kreis: 'Landkreis Leer', land: 'Niedersachsen'},
  { code: 'LG', city: 'Lüneburg', kreis: 'Landkreis Lüneburg', land: 'Niedersachsen'},
  { code: 'MEL', city: 'Melle', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'NI', city: 'Nienburg', kreis: 'Landkreis Nienburg/Weser', land: 'Niedersachsen'},
  { code: 'NOH', city: 'Nordhorn', kreis: 'Landkreis Grafschaft Bentheim', land: 'Niedersachsen'},
  { code: 'NOM', city: 'Northeim', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'NOR', city: 'Norden', kreis: 'Landkreis Aurich', land: 'Niedersachsen'},
  { code: 'OHA', city: 'Osterode Am Harz', kreis: 'Landkreis Göttingen', land: 'Niedersachsen'},
  { code: 'OHZ', city: 'Osterholz', kreis: 'Landkreis Osterholz', land: 'Niedersachsen'},
  { code: 'OL', city: 'Oldenburg', kreis: 'Stadt Oldenburg, Landkreis Oldenburg', land: 'Niedersachsen'},
  { code: 'OS', city: 'Osnabrück', kreis: 'Stadt Osnabrück, Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'PE', city: 'Peine', kreis: 'Landkreis Peine', land: 'Niedersachsen'},
  { code: 'RI', city: 'Rinteln', kreis: 'Landkreis Schaumburg', land: 'Niedersachsen'},
  { code: 'ROW', city: 'Rotenburg (Wümme)', kreis: 'Landkreis Rotenburg (Wümme)', land: 'Niedersachsen'},
  { code: 'SHG', city: 'Stadthagen', kreis: 'Landkreis Schaumburg', land: 'Niedersachsen'},
  { code: 'STD', city: 'Stade', kreis: 'Landkreis Stade', land: 'Niedersachsen'},
  { code: 'SY', city: 'Syke', kreis: 'Landkreis Diepholz', land: 'Niedersachsen'},
  { code: 'SZ', city: 'Salzgitter', kreis: 'Stadt Salzgitter', land: 'Niedersachsen'},
  { code: 'UE', city: 'Uelzen', kreis: 'Landkreis Uelzen', land: 'Niedersachsen'},
  { code: 'VEC', city: 'Vechta', kreis: 'Landkreis Vechta', land: 'Niedersachsen'},
  { code: 'VER', city: 'Verden', kreis: 'Landkreis Verden', land: 'Niedersachsen'},
  { code: 'WF', city: 'Wolfenbüttel', kreis: 'Landkreis Wolfenbüttel', land: 'Niedersachsen'},
  { code: 'WHV', city: 'Wilhelmshaven', kreis: 'Stadt Wilhelmshaven', land: 'Niedersachsen'},
  { code: 'WL', city: 'Winsen (Luhe)', kreis: 'Landkreis Harburg', land: 'Niedersachsen'},
  { code: 'WOB', city: 'Wolfsburg', kreis: 'Stadt Wolfsburg', land: 'Niedersachsen'},
  { code: 'WST', city: 'Westerstede', kreis: 'Landkreis Ammerland', land: 'Niedersachsen'},
  { code: 'WTL', city: 'Wittlage', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'WTM', city: 'Wittmund', kreis: 'Landkreis Wittmund', land: 'Niedersachsen'},
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
