const licensePlates = [
  { code: 'BID', city: 'Biedenkopf', kreis: 'Landkreis Marburg-Biedenkopf', land: 'Hessen'},
  { code: 'BÜD', city: 'Büdingen', kreis: 'Wetteraukreis', land: 'Hessen'},
  { code: 'DA', city: 'Darmstadt', kreis: 'Landkreis Darmstadt-Dieburg und Stadt Darmstadt', land: 'Hessen'},
  { code: 'DI', city: 'Dieburg', kreis: 'Landkreis Darmstadt-Dieburg', land: 'Hessen'},
  { code: 'DIL', city: 'Dillenburg', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'ERB', city: 'Erbach', kreis: 'Odenwaldkreis', land: 'Hessen'},
  { code: 'ESW', city: 'Eschwege', kreis: 'Werra-Meißner-Kreis', land: 'Hessen'},
  { code: 'F', city: 'Frankfurt', kreis: 'Stadt Frankfurt am Main', land: 'Hessen'},
  { code: 'FB', city: 'Friedberg', kreis: 'Wetteraukreis', land: 'Hessen'},
  { code: 'FD', city: 'Fulda', kreis: 'Landkreis Fulda', land: 'Hessen'},
  { code: 'FKB', city: 'Frankenberg', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'FZ', city: 'Fritzlar', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'GG', city: 'Groß-Gerau', kreis: 'Kreis Groß-Gerau', land: 'Hessen'},
  { code: 'GI', city: 'Gießen', kreis: 'Landkreis Gießen', land: 'Hessen'},
  { code: 'GN', city: 'Gelnhausen', kreis: 'Main-Kinzig-Kreis ', land: 'Hessen'},
  { code: 'HEF', city: 'Hersfeld', kreis: 'Landkreis Hersfeld-Rotenburg', land: 'Hessen'},
  { code: 'HG', city: 'Homburg', kreis: 'Hochtaunuskreis', land: 'Hessen'},
  { code: 'HOG', city: 'Hofgeismar', kreis: 'Landkreis Kassel', land: 'Hessen'},
  { code: 'HP', city: 'Heppenheim', kreis: 'Kreis Bergstraße', land: 'Hessen'},
  { code: 'HR', city: 'Homberg', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'HU', city: 'Hanau', kreis: 'Stadt Hanau, Main-Kinzig-Kreis', land: 'Hessen'},
  { code: 'KB', city: 'Korbach', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'KS', city: 'Kassel', kreis: 'Landkreis Kassel und Stadt Kassel', land: 'Hessen'},
  { code: 'LDK', city: 'Lahn-Dill-Kreis', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'LM', city: 'Limburg', kreis: 'Landkreis Limburg-Weilburg', land: 'Hessen'},
  { code: 'MEG', city: 'Melsungen', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'MKK', city: 'Main-Kinzig-Kreis', kreis: 'Main-Kinzig-Kreis ohne die Stadt Hanau', land: 'Hessen'},
  { code: 'MR', city: 'Marburg', kreis: 'Landkreis Marburg-Biedenkopf', land: 'Hessen'},
  { code: 'MTK', city: 'Main-Taunus-Kreis', kreis: 'Main-Taunus-Kreis', land: 'Hessen'},
  { code: 'OF', city: 'Offenbach', kreis: 'Landkreis Offenbach und Stadt Offenbach am Main', land: 'Hessen'},
  { code: 'ROF', city: 'Rotenburg An Der Fulda', kreis: 'Landkreis Hersfeld-Rotenburg', land: 'Hessen'},
  { code: 'RÜD', city: 'Rüdesheim', kreis: 'Rheingau-Taunus-Kreis', land: 'Hessen'},
  { code: 'SLÜ', city: 'Schlüchtern', kreis: 'Main-Kinzig-Kreis ohne die Stadt Hanau', land: 'Hessen'},
  { code: 'SWA', city: 'Schwalbach', kreis: 'Rheingau-Taunus-Kreis', land: 'Hessen'},
  { code: 'USI', city: 'Usingen', kreis: 'Hochtaunuskreis', land: 'Hessen'},
  { code: 'VB', city: 'Vogelsberg', kreis: 'Vogelsbergkreis', land: 'Hessen'},
  { code: 'WA', city: 'Waldeck', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'WEL', city: 'Weilburg', kreis: 'Landkreis Limburg-Weilburg', land: 'Hessen'},
  { code: 'WI', city: 'Wiesbaden', kreis: 'Stadt Wiesbaden', land: 'Hessen'},
  { code: 'WIZ', city: 'Witzenhausen', kreis: 'Werra-Meißner-Kreis', land: 'Hessen'},
  { code: 'WOH', city: 'Wolfhagen', kreis: 'Landkreis Kassel', land: 'Hessen'},
  { code: 'WZ', city: 'Wetzlar', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'ZIG', city: 'Ziegenhain', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
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
