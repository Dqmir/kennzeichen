const licensePlates = [{ code: 'ABI', city: 'Anhalt-Bitterfeld', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
{ code: 'ASL', city: 'Aschersleben', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'AZE', city: 'Anhalt-Zerbst ', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
{ code: 'BBG', city: 'Bernburg', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'BLK', city: 'Burgenlandkreis', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'BÖ', city: 'Börde', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'BRG', city: 'Burg', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
{ code: 'BTF', city: 'Bitterfeld', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
{ code: 'DE', city: 'Dessau', kreis: 'Stadt Dessau-Roßlau', land: 'Sachsen-Anhalt'},
{ code: 'EIL', city: 'Eisleben', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
{ code: 'GA', city: 'Gardelegen', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
{ code: 'GHC', city: 'Gräfenhainichen', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
{ code: 'GNT', city: 'Genthin', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
{ code: 'HAL', city: 'Halle', kreis: 'Stadt Halle (Saale)', land: 'Sachsen-Anhalt'},
{ code: 'HBS', city: 'Halberstadt', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
{ code: 'HDL', city: 'Haldensleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'HET', city: 'Hettstedt', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
{ code: 'HHM', city: 'Hohenmölsen', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'HV', city: 'Havelberg', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
{ code: 'HZ', city: 'Harz', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
{ code: 'JE', city: 'Jessen', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
{ code: 'JL', city: 'Jerichower Land', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
{ code: 'KLZ', city: 'Klötze', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
{ code: 'KÖT', city: 'Köthen', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
{ code: 'MD', city: 'Magdeburg', kreis: 'Stadt Magdeburg', land: 'Sachsen-Anhalt'},
{ code: 'MER', city: 'Merseburg', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
{ code: 'ML', city: 'Mansfelder Land', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
{ code: 'MQ', city: 'Merseburg, Querfurt', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
{ code: 'MSH', city: 'Mansfeld, Südharz', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
{ code: 'NEB', city: 'Nebra', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'NMB', city: 'Naumburg', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'OBG', city: 'Osterburg', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
{ code: 'OC', city: 'Oschersleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'OK', city: 'Ohrekreis', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'QFT', city: 'Querfurt', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
{ code: 'QLB', city: 'Quedlinburg', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
{ code: 'RSL', city: 'Rosslau', kreis: 'Stadt Dessau-Roßlau', land: 'Sachsen-Anhalt'},
{ code: 'SAW', city: 'Salzwedel', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
{ code: 'SBK', city: 'Schönebeck', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'SDL', city: 'Stendal', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
{ code: 'SFT', city: 'Staßfurt', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'SGH', city: 'Sangerhausen', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
{ code: 'SK', city: 'Saalekreis', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
{ code: 'SLK', city: 'Salzlandkreis', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'WB', city: 'Wittenberg', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
{ code: 'WMS', city: 'Wolmirstedt', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'WR', city: 'Wernigerode', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
{ code: 'WSF', city: 'Weissenfels', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
{ code: 'WZL', city: 'Wanzleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
{ code: 'ZE', city: 'Zerbst', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
{ code: 'ZZ', city: 'Zeitz', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
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
