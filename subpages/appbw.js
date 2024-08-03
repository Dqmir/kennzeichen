const licensePlates = [
  { code: 'AA', city: 'Aalen', kreis: 'Ostalbkreis', land: 'Baden-Württemberg'},
  { code: 'BAD', city: 'Baden-Baden', kreis: 'Stadt Baden-Baden', land: 'Baden-Württemberg'},
  { code: 'BB', city: 'Böblingen', kreis: 'Landkreis Böblingen', land: 'Baden-Württemberg'},
  { code: 'BC', city: 'Biberach', kreis: 'Landkreis Biberach', land: 'Baden-Württemberg'},
  { code: 'BCH', city: 'Buchen', kreis: 'Neckar-Odenwald-Kreis', land: 'Baden-Württemberg'},
  { code: 'BH', city: 'Bühl', kreis: 'Ortenaukreis, Landkreis Rastatt', land: 'Baden-Württemberg'},
  { code: 'BK', city: 'Backnang', kreis: 'Rems-Murr-Kreis, Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'BL', city: 'Balingen', kreis: 'Zollernalbkreis', land: 'Baden-Württemberg'},
  { code: 'BÜS', city: 'Büsingen', kreis: 'Landkreis Konstanz', land: 'Baden-Württemberg'},
  { code: 'CR', city: 'Crailsheim', kreis: 'Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'CW', city: 'Calw', kreis: 'Landkreis Calw', land: 'Baden-Württemberg'},
  { code: 'EM', city: 'Emmendingen', kreis: 'Landkreis Emmendingen', land: 'Baden-Württemberg'},
  { code: 'ES', city: 'Esslingen', kreis: 'Landkreis Esslingen', land: 'Baden-Württemberg'},
  { code: 'FDS', city: 'Freudenstadt', kreis: 'Landkreis Freudenstadt', land: 'Baden-Württemberg'},
  { code: 'FN', city: 'Friedrichshafen', kreis: 'Bodenseekreis', land: 'Baden-Württemberg'},
  { code: 'FR', city: 'Freiburg', kreis: 'Stadt Freiburg im Breisgau, Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'GD', city: 'Gmünd', kreis: 'Ostalbkreis', land: 'Baden-Württemberg'},
  { code: 'GP', city: 'Göppingen', kreis: 'Landkreis Göppingen', land: 'Baden-Württemberg'},
  { code: 'HCH', city: 'Hechingen', kreis: 'Landkreis Freudenstadt, Zollernalbkreis', land: 'Baden-Württemberg'},
  { code: 'HD', city: 'Heidelberg', kreis: 'Stadt Heidelberg, Rhein-Neckar-Kreis', land: 'Baden-Württemberg'},
  { code: 'HDH', city: 'Heidenheim', kreis: 'Landkreis Heidenheim', land: 'Baden-Württemberg'},
  { code: 'HN', city: 'Heilbronn', kreis: 'Stadt Heilbronn, Landkreis Heilbronn', land: 'Baden-Württemberg'},
  { code: 'HOR', city: 'Horb', kreis: 'Landkreis Freudenstadt', land: 'Baden-Württemberg'},
  { code: 'KA', city: 'Karlsruhe', kreis: 'Stadt Karlsruhe, Landkreis Karlsruhe', land: 'Baden-Württemberg'},
  { code: 'KEL', city: 'Kehl', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'KN', city: 'Konstanz', kreis: 'Landkreis Konstanz ', land: 'Baden-Württemberg'},
  { code: 'KÜN', city: 'Künzelsau', kreis: 'Hohenlohekreis', land: 'Baden-Württemberg'},
  { code: 'LB', city: 'Ludwigsburg', kreis: 'Landkreis Ludwigsburg', land: 'Baden-Württemberg'},
  { code: 'LEO', city: 'Leonberg', kreis: 'Landkreis Böblingen', land: 'Baden-Württemberg'},
  { code: 'LÖ', city: 'Lörrach', kreis: 'Landkreis Lörrach', land: 'Baden-Württemberg'},
  { code: 'LR', city: 'Lahr', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'MA', city: 'Mannheim', kreis: 'Stadt Mannheim', land: 'Baden-Württemberg'},
  { code: 'MGH', city: 'Mergentheim', kreis: 'Main-Tauber-Kreis', land: 'Baden-Württemberg'},
  { code: 'MOS', city: 'Mosbach', kreis: 'Neckar-Odenwald-Kreis', land: 'Baden-Württemberg'},
  { code: 'MÜL', city: 'Müllheim', kreis: 'Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'NEU', city: 'Neustadt', kreis: 'Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'NT', city: 'Nürtingen', kreis: 'Landkreis Esslingen', land: 'Baden-Württemberg'},
  { code: 'OG', city: 'Offenburg', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'ÖHR', city: 'Öhringen', kreis: 'Hohenlohekreis', land: 'Baden-Württemberg'},
  { code: 'PF', city: 'Pforzheim', kreis: 'Stadt Pforzheim, Enzkreis', land: 'Baden-Württemberg'},
  { code: 'RA', city: 'Rastatt', kreis: 'Landkreis Rastatt', land: 'Baden-Württemberg'},
  { code: 'RT', city: 'Reutlingen', kreis: 'Landkreis Reutlingen', land: 'Baden-Württemberg'},
  { code: 'RV', city: 'Ravensburg', kreis: 'Landkreis Ravensburg', land: 'Baden-Württemberg'},
  { code: 'RW', city: 'Rottweil', kreis: 'Landkreis Rottweil', land: 'Baden-Württemberg'},
  { code: 'S', city: 'Stuttgart', kreis: 'Stadt Stuttgart', land: 'Baden-Württemberg'},
  { code: 'SÄK', city: 'Säckingen', kreis: 'Landkreis Waldshut', land: 'Baden-Württemberg'},
  { code: 'SHA', city: 'Schwäbisch Hall', kreis: 'Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'SIG', city: 'Sigmaringen', kreis: 'Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'SLG', city: 'Saulgau', kreis: 'Landkreis Ravensburg, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'STO', city: 'Stockach', kreis: 'Landkreis Konstanz, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'TBB', city: 'Tauberbischofsheim', kreis: 'Main-Tauber-Kreis', land: 'Baden-Württemberg'},
  { code: 'TT', city: 'Tettnang', kreis: 'Bodenseekreis', land: 'Baden-Württemberg'},
  { code: 'TÜ', city: 'Tübingen', kreis: 'Landkreis Tübingen', land: 'Baden-Württemberg'},
  { code: 'TUT', city: 'Tuttlingen', kreis: 'Landkreis Tuttlingen', land: 'Baden-Württemberg'},
  { code: 'ÜB', city: 'Überlingen', kreis: 'Bodenseekreis, Landkreis Ravensburg, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'UL', city: 'Ulm', kreis: 'Stadt Ulm, Alb-Donau-Kreis', land: 'Baden-Württemberg'},
  { code: 'VAI', city: 'Vaihingen', kreis: 'Landkreis Ludwigsburg', land: 'Baden-Württemberg'},
  { code: 'VS', city: 'Villingen-Schwenningen', kreis: 'Schwarzwald-Baar-Kreis', land: 'Baden-Württemberg'},
  { code: 'WG', city: 'Wangen', kreis: 'Landkreis Ravensburg', land: 'Baden-Württemberg'},
  { code: 'WN', city: 'Waiblingen', kreis: 'Rems-Murr-Kreis', land: 'Baden-Württemberg'},
  { code: 'WOL', city: 'Wolfach', kreis: 'Landkreis Freudenstadt, Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'WT', city: 'Waldshut', kreis: 'Landkreis Waldshut', land: 'Baden-Württemberg'},
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
