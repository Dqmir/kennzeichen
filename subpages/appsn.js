const licensePlates = [
  { code: 'AE', city: 'Auerbach', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'ANA', city: 'Annaberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'ASZ', city: 'Aue, Schwarzenberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'AU', city: 'Aue', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'BED', city: 'Brand-Erbisdorf', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'BIW', city: 'Bischofswerda', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'BNA', city: 'Borna', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'BZ', city: 'Bautzen', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'C', city: 'Chemnitz', kreis: 'Stadt Chemnitz', land: 'Sachsen'},
  { code: 'DD', city: 'Dresden', kreis: 'Stadt Dresden', land: 'Sachsen'},
  { code: 'DL', city: 'Döbeln', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'DW', city: 'Dippoldiswalde', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'DZ', city: 'Delitzsch', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'EB', city: 'Eilenburg', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'ERZ', city: 'Erzgebirge', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'FG', city: 'Freiberg', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'FLÖ', city: 'Flöha', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'FTL', city: 'Freital', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'GC', city: 'Glauchau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'GHA', city: 'Geithain', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'GR', city: 'Görlitz', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'GRH', city: 'Großenhain', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'GRM', city: 'Grimma', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'HC', city: 'Hainichen', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'HOT', city: 'Hohenstein', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'HY', city: 'Hoyerswerda', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'KM', city: 'Kamenz', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'L', city: 'Leipzig', kreis: 'Stadt Leipzig, Landkreis Leipzig', land: 'Sachsen'},
  { code: 'LÖB', city: 'Löbau', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'MAB', city: 'Marienberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'MEI', city: 'Meißen', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'MEK', city: 'Mittlerer Erzgebirgskreis', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'MTL', city: 'Muldental', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'MW', city: 'Mittweida', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'NOL', city: 'Niederschlesische Oberlausitz', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'NY', city: 'Niesky', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'OVL', city: 'Obervogtland', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'OZ', city: 'Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'PIR', city: 'Pirna', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'PL', city: 'Plauen', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'RC', city: 'Reichenbach', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'RG', city: 'Riesa, Großenhain', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'RIE', city: 'Riesa', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'RL', city: 'Rochlitz', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'SEB', city: 'Sebnitz', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'STL', city: 'Stollberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'SZB', city: 'Schwarzenberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'TDO', city: 'Torgau, Delitzsch, Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'TG', city: 'Torgau', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'TO', city: 'Torgau, Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'V', city: 'Vogtland', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'WDA', city: 'Werdau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'WSW', city: 'Weisswasser', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'WUR', city: 'Wurzen', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'Z', city: 'Zwickau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'ZI', city: 'Zittau', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'ZP', city: 'Zschopau', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
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
