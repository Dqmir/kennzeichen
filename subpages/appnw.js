const licensePlates = [
{ code: 'AC', city: 'Aachen', kreis: 'Städtregion Aachen', land: 'Nordrhein-Westfalen'},
{ code: 'AH', city: 'Ahaus', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
{ code: 'BE', city: 'Beckum', kreis: 'Kreis Warendorf', land: 'Nordrhein-Westfalen'},
{ code: 'BF', city: 'Burgsteinfurt', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
{ code: 'BI', city: 'Bielefeld', kreis: 'Stadt Bielefeld', land: 'Nordrhein-Westfalen'},
{ code: 'BLB', city: 'Berleburg', kreis: 'Kreis Siegen-Wittgenstein', land: 'Nordrhein-Westfalen'},
{ code: 'BM', city: 'Bergheim', kreis: 'Rhein-Erft-Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'BN', city: 'Bonn', kreis: 'Stadt Bonn', land: 'Nordrhein-Westfalen'},
{ code: 'BO', city: 'Bochum', kreis: 'Stadt Bochum', land: 'Nordrhein-Westfalen'},
{ code: 'BOH', city: 'Bocholt', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
{ code: 'BOR', city: 'Borken', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
{ code: 'BOT', city: 'Bottrop', kreis: 'Stadt Bottrop', land: 'Nordrhein-Westfalen'},
{ code: 'BÜR', city: 'Büren', kreis: 'Kreis Paderborn', land: 'Nordrhein-Westfalen'},
{ code: 'CAS', city: 'Castrop', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
{ code: 'COE', city: 'Coesfeld', kreis: 'Kreis Coesfeld', land: 'Nordrhein-Westfalen'},
{ code: 'D', city: 'Düsseldorf', kreis: 'Stadt Düsseldorf', land: 'Nordrhein-Westfalen'},
{ code: 'DIN', city: 'Dinslaken', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
{ code: 'DN', city: 'Düren', kreis: 'Kreis Düren', land: 'Nordrhein-Westfalen'},
{ code: 'DO', city: 'Dortmund', kreis: 'Stadt Dortmund', land: 'Nordrhein-Westfalen'},
{ code: 'DU', city: 'Duisburg', kreis: 'Stadt Duisburg', land: 'Nordrhein-Westfalen'},
{ code: 'E', city: 'Essen', kreis: 'Stadt Essen', land: 'Nordrhein-Westfalen'},
{ code: 'EN', city: 'Ennepe', kreis: 'Ennepe-Ruhr-Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'ERK', city: 'Erkelenz', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
{ code: 'EU', city: 'Euskirchen', kreis: 'Kreis Euskirchen', land: 'Nordrhein-Westfalen'},
{ code: 'GE', city: 'Gelsenkirchen', kreis: 'Stadt Gelsenkirchen', land: 'Nordrhein-Westfalen'},
{ code: 'GEL', city: 'Geldern', kreis: 'Kreis Kleve', land: 'Nordrhein-Westfalen'},
{ code: 'GK', city: 'Geilenkirchen', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
{ code: 'GL', city: 'Gladbach', kreis: 'Rheinisch-Bergischer Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'GLA', city: 'Gladbeck', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
{ code: 'GM', city: 'Gummersbach', kreis: 'Oberbergischer Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'GT', city: 'Gütersloh', kreis: 'Kreis Gütersloh', land: 'Nordrhein-Westfalen'},
{ code: 'GV', city: 'Grevenbroich', kreis: 'Rhein-Kreis Neuss', land: 'Nordrhein-Westfalen'},
{ code: 'HA', city: 'Hagen', kreis: 'Stadt Hagen', land: 'Nordrhein-Westfalen'},
{ code: 'HAM', city: 'Hamm', kreis: 'Stadt Hamm', land: 'Nordrhein-Westfalen'},
{ code: 'HER', city: 'Herne', kreis: 'Stadt Herne', land: 'Nordrhein-Westfalen'},
{ code: 'HF', city: 'Herford', kreis: 'Kreis Herford', land: 'Nordrhein-Westfalen'},
{ code: 'HS', city: 'Heinsberg', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
{ code: 'HSK', city: 'Hochsauerlandkreis', kreis: 'Hochsauerlandkreis', land: 'Nordrhein-Westfalen'},
{ code: 'HX', city: 'Höxter', kreis: 'Kreis Höxter', land: 'Nordrhein-Westfalen'},
{ code: 'JÜL', city: 'Jülich', kreis: 'Kreis Düren', land: 'Nordrhein-Westfalen'},
{ code: 'K', city: 'Köln', kreis: 'Stadt Köln', land: 'Nordrhein-Westfalen'},
{ code: 'KK', city: 'Kempen, Krefeld', kreis: 'Kreis Viersen', land: 'Nordrhein-Westfalen'},
{ code: 'KLE', city: 'Kleve', kreis: 'Kreis Kleve', land: 'Nordrhein-Westfalen'},
{ code: 'KR', city: 'Krefeld', kreis: 'Stadt Krefeld', land: 'Nordrhein-Westfalen'},
{ code: 'LEV', city: 'Leverkusen', kreis: 'Stadt Leverkusen', land: 'Nordrhein-Westfalen'},
{ code: 'LH', city: 'Lüdinghausen', kreis: 'Kreis Coesfeld, Kreis Unna', land: 'Nordrhein-Westfalen'},
{ code: 'LIP', city: 'Lippe', kreis: 'Kreis Lippe', land: 'Nordrhein-Westfalen'},
{ code: 'LP', city: 'Lippstadt', kreis: 'Kreis Soest', land: 'Nordrhein-Westfalen'},
{ code: 'LÜN', city: 'Lünen', kreis: 'Kreis Unna', land: 'Nordrhein-Westfalen'},
{ code: 'ME', city: 'Mettmann', kreis: 'Kreis Mettmann', land: 'Nordrhein-Westfalen'},
{ code: 'MG', city: 'Mönchengladbach', kreis: 'Stadt Mönchengladbach', land: 'Nordrhein-Westfalen'},
{ code: 'MH', city: 'Mülheim', kreis: 'Stadt Mülheim an der Ruhr', land: 'Nordrhein-Westfalen'},
{ code: 'MI', city: 'Minden', kreis: 'Kreis Minden-Lübbecke', land: 'Nordrhein-Westfalen'},
{ code: 'MK', city: 'Märkischer Kreis', kreis: 'Märkischer Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'MO', city: 'Moers', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
{ code: 'MON', city: 'Monschau', kreis: 'Städteregion Aachen, Kreis Düren', land: 'Nordrhein-Westfalen'},
{ code: 'MS', city: 'Münster', kreis: 'Stadt Münster', land: 'Nordrhein-Westfalen'},
{ code: 'NE', city: 'Neuss', kreis: 'Rhein-Kreis Neuss', land: 'Nordrhein-Westfalen'},
{ code: 'OB', city: 'Oberhausen', kreis: 'Stadt Oberhausen', land: 'Nordrhein-Westfalen'},
{ code: 'OE', city: 'Olpe', kreis: 'Kreis Olpe', land: 'Nordrhein-Westfalen'},
{ code: 'OP', city: 'Opladen', kreis: 'Stadt Leverkusen', land: 'Nordrhein-Westfalen'},
{ code: 'PB', city: 'Paderborn', kreis: 'Kreis Paderborn', land: 'Nordrhein-Westfalen'},
{ code: 'RE', city: 'Recklinghausen', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
{ code: 'RS', city: 'Remscheid', kreis: 'Stadt Remscheid', land: 'Nordrhein-Westfalen'},
{ code: 'SG', city: 'Solingen', kreis: 'Stadt Solingen', land: 'Nordrhein-Westfalen'},
{ code: 'SI', city: 'Siegen', kreis: 'Kreis Siegen-Wittgenstein', land: 'Nordrhein-Westfalen'},
{ code: 'SLE', city: 'Schleiden', kreis: 'Kreis Düren, Kreis Euskirchen', land: 'Nordrhein-Westfalen'},
{ code: 'SO', city: 'Soest', kreis: 'Kreis Soest', land: 'Nordrhein-Westfalen'},
{ code: 'ST', city: 'Steinfurt', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
{ code: 'SU', city: 'Siegburg', kreis: 'Rhein-Sieg-Kreis', land: 'Nordrhein-Westfalen'},
{ code: 'TE', city: 'Tecklenburg', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
{ code: 'UN', city: 'Unna', kreis: 'Kreis Unna', land: 'Nordrhein-Westfalen'},
{ code: 'VIE', city: 'Viersen', kreis: 'Kreis Viersen', land: 'Nordrhein-Westfalen'},
{ code: 'W', city: 'Wuppertal', kreis: 'Stadt Wuppertal', land: 'Nordrhein-Westfalen'},
{ code: 'WAF', city: 'Warendorf', kreis: 'Kreis Warendorf', land: 'Nordrhein-Westfalen'},
{ code: 'WAN', city: 'Wanne', kreis: 'Stadt Herne', land: 'Nordrhein-Westfalen'},
{ code: 'WAR', city: 'Warburg', kreis: 'Kreis Höxter', land: 'Nordrhein-Westfalen'},
{ code: 'WAT', city: 'Wattenscheid', kreis: 'Stadt Bochum', land: 'Nordrhein-Westfalen'},
{ code: 'WES', city: 'Wesel', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
{ code: 'WIT', city: 'Witten', kreis: 'Ennepe-Ruhr-Kreis', land: 'Nordrhein-Westfalen'},
,
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
