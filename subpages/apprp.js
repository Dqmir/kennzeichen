const licensePlates = [{ code: 'AK', city: 'Altenkirchen', kreis: 'Landkreis Altenkirchen', land: 'Rheinland-Pfalz'},
{ code: 'AW', city: 'Ahrweiler', kreis: 'Landkreis Ahrweiler', land: 'Rheinland-Pfalz'},
{ code: 'AZ', city: 'Alzey', kreis: 'Landkreis Alzey-Worms', land: 'Rheinland-Pfalz'},
{ code: 'BIN', city: 'Bingen', kreis: 'Landkreis Mainz-Bingen', land: 'Rheinland-Pfalz'},
{ code: 'BIR', city: 'Birkenfeld', kreis: 'Landkreis Birkenfeld', land: 'Rheinland-Pfalz'},
{ code: 'BIT', city: 'Bitburg', kreis: 'Eifelkreis Bitburg-Prüm', land: 'Rheinland-Pfalz'},
{ code: 'BKS', city: 'Bernkastel', kreis: 'Landkreis Bernkastel-Wittlich', land: 'Rheinland-Pfalz'},
{ code: 'COC', city: 'Cochem', kreis: 'Landkreis Cochem-Zell', land: 'Rheinland-Pfalz'},
{ code: 'DAU', city: 'Daun', kreis: 'Landkreis Vulkaneifel', land: 'Rheinland-Pfalz'},
{ code: 'DIZ', city: 'Diez', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'DÜW', city: 'Dürkheim An Der Weinstraße', kreis: 'Landkreis Bad Dürkheim', land: 'Rheinland-Pfalz'},
{ code: 'EMS', city: 'Ems', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'FT', city: 'Frankenthal', kreis: 'Stadt Frankenthal (Pfalz)', land: 'Rheinland-Pfalz'},
{ code: 'GER', city: 'Germersheim', kreis: 'Landkreis Germersheim', land: 'Rheinland-Pfalz'},
{ code: 'GOA', city: 'Sankt Goar', kreis: 'Rhein-Hunsrück-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'GOH', city: 'Sankt Goarshausen', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'KH', city: 'Kreuznach', kreis: 'Landkreis Bad Kreuznach', land: 'Rheinland-Pfalz'},
{ code: 'KIB', city: 'Kirchheimbolanden', kreis: 'Donnersbergkreis', land: 'Rheinland-Pfalz'},
{ code: 'KL', city: 'Kaiserslautern', kreis: 'Stadt Kaiserslautern, Landkreis Kaiserslautern', land: 'Rheinland-Pfalz'},
{ code: 'KO', city: 'Koblenz', kreis: 'Stadt Koblenz', land: 'Rheinland-Pfalz'},
{ code: 'KUS', city: 'Kusel', kreis: 'Landkreis Kusel', land: 'Rheinland-Pfalz'},
{ code: 'LD', city: 'Landau', kreis: 'Stadt Landau in der Pfalz', land: 'Rheinland-Pfalz'},
{ code: 'LU', city: 'Ludwigshafen', kreis: 'Stadt Ludwigshafen am Rhein', land: 'Rheinland-Pfalz'},
{ code: 'MY', city: 'Mayen', kreis: 'Landkreis Mayen-Koblenz', land: 'Rheinland-Pfalz'},
{ code: 'MYK', city: 'Mayen, Koblenz', kreis: 'Landkreis Mayen-Koblenz', land: 'Rheinland-Pfalz'},
{ code: 'MZ', city: 'Mainz', kreis: 'Stadt Mainz, Landkreis Mainz-Bingen', land: 'Rheinland-Pfalz'},
{ code: 'NR', city: 'Neuwied Am Rhein', kreis: 'Landkreis Neuwied', land: 'Rheinland-Pfalz'},
{ code: 'NW', city: 'Neustadt An Der Weinstraße', kreis: 'Stadt Neustadt an der Weinstraße', land: 'Rheinland-Pfalz'},
{ code: 'PRÜ', city: 'Prüm', kreis: 'Eifelkreis Bitburg-Prüm', land: 'Rheinland-Pfalz'},
{ code: 'PS', city: 'Pirmasens', kreis: 'Stadt Pirmasens, Landkreis Südwestpfalz', land: 'Rheinland-Pfalz'},
{ code: 'ROK', city: 'Rockenhausen', kreis: 'Donnersbergkreis', land: 'Rheinland-Pfalz'},
{ code: 'RP', city: 'Rhein-Pfalz', kreis: 'Rhein-Pfalz-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'SAB', city: 'Saarburg', kreis: 'Landkreis Trier-Saarburg', land: 'Rheinland-Pfalz'},
{ code: 'SIM', city: 'Simmern', kreis: 'Rhein-Hunsrück-Kreis', land: 'Rheinland-Pfalz'},
{ code: 'SP', city: 'Speyer', kreis: 'Stadt Speyer', land: 'Rheinland-Pfalz'},
{ code: 'SÜW', city: 'Südliche Weinstraße', kreis: 'Landkreis Südliche Weinstraße', land: 'Rheinland-Pfalz'},
{ code: 'TR', city: 'Trier', kreis: 'Landkreis Trier-Saarburg und Stadt Trier', land: 'Rheinland-Pfalz'},
{ code: 'WIL', city: 'Wittlich', kreis: 'Landkreis Bernkastel-Wittlich', land: 'Rheinland-Pfalz'},
{ code: 'WO', city: 'Worms', kreis: 'Stadt Worms', land: 'Rheinland-Pfalz'},
{ code: 'WW', city: 'Westerwald', kreis: 'Westerwaldkreis', land: 'Rheinland-Pfalz'},
{ code: 'ZEL', city: 'Zell', kreis: 'Landkreis Cochem-Zell', land: 'Rheinland-Pfalz'},
{ code: 'ZW', city: 'Zweibrücken', kreis: 'Stadt Zweibrücken, Landkreis Südwestpfalz', land: 'Rheinland-Pfalz'},
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
