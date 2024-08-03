const licensePlates = [
  { code: 'ABG', city: 'Altenburg', kreis: 'Landkreis Altenburger Land', land: 'Thüringen'},
  { code: 'AP', city: 'Apolda', kreis: 'Landkreis Weimarer Land', land: 'Thüringen'},
  { code: 'APD', city: 'Apolda', kreis: 'Landkreis Weimarer Land', land: 'Thüringen'},
  { code: 'ARN', city: 'Arnstadt', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'ART', city: 'Artern', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'EA', city: 'Eisenach', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'EF', city: 'Erfurt', kreis: 'Stadt Erfurt', land: 'Thüringen'},
  { code: 'EIC', city: 'Eichsfeld', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'EIS', city: 'Eisenberg', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'G', city: 'Gera', kreis: 'Stadt Gera', land: 'Thüringen'},
  { code: 'GRZ', city: 'Greiz', kreis: 'Landkreis Greiz', land: 'Thüringen'},
  { code: 'GTH', city: 'Gotha', kreis: 'Landkreis Gotha', land: 'Thüringen'},
  { code: 'HBN', city: 'Hildburghausen', kreis: 'Landkreis Hildburghausen', land: 'Thüringen'},
  { code: 'HIG', city: 'Heiligenstadt', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'IK', city: 'Ilm-Kreis', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'IL', city: 'Ilmenau', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'J', city: 'Jena', kreis: 'Stadt Jena', land: 'Thüringen'},
  { code: 'KYF', city: 'Kyffhäuser', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'LBS', city: 'Lobenstein', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'LSZ', city: 'Langensalza', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'MGN', city: 'Meiningen', kreis: 'Landkreis Schmalkalden-Meiningen', land: 'Thüringen'},
  { code: 'MHL', city: 'Mühlhausen', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'NDH', city: 'Nordhausen', kreis: 'Landkreis Nordhausen', land: 'Thüringen'},
  { code: 'NH', city: 'Neuhaus', kreis: 'Landkreis Sonneberg', land: 'Thüringen'},
  { code: 'PN', city: 'Pößneck', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'RU', city: 'Rudolstadt', kreis: 'Landkreis Saalfeld-Rudolstadt', land: 'Thüringen'},
  { code: 'SCZ', city: 'Schleiz', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'SDH', city: 'Sondershausen', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'SHK', city: 'Saale-Holzland-Kreis', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'SHL', city: 'Suhl', kreis: 'Stadt Suhl', land: 'Thüringen'},
  { code: 'SLF', city: 'Saalfeld', kreis: 'Landkreis Saalfeld-Rudolstadt', land: 'Thüringen'},
  { code: 'SLN', city: 'Schmölln', kreis: 'Landkreis Altenburger Land', land: 'Thüringen'},
  { code: 'SLZ', city: 'Salzungen', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'SM', city: 'Schmalkalden', kreis: 'Landkreis Schmalkalden-Meiningen', land: 'Thüringen'},
  { code: 'SOK', city: 'Saale-Orla-Kreis', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'SÖM', city: 'Sömmerda', kreis: 'Landkreis Sömmerda', land: 'Thüringen'},
  { code: 'SON', city: 'Sonneberg', kreis: 'Landkreis Sonneberg', land: 'Thüringen'},
  { code: 'SRO', city: 'Stadtroda', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'UH', city: 'Unstrut, Hainich', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'WAK', city: 'Wartburgkreis', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'WBS', city: 'Worbis', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'WE', city: 'Weimar', kreis: 'Stadt Weimar', land: 'Thüringen'},
  { code: 'ZR', city: 'Zeulenroda', kreis: 'Landkreis Greiz', land: 'Thüringen'},
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
