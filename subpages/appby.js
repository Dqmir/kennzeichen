const licensePlates = [{ code: 'A', city: 'Augsburg', kreis: 'Stadt Augsburg, Landkreis Augsburg', land: 'Bayern'},
{ code: 'AB', city: 'Aschaffenburg', kreis: 'Stadt Aschaffenburg , Landkreis Aschaffenburg', land: 'Bayern'},
{ code: 'AIB', city: 'Aibling', kreis: 'Landkreis München, Landkreis Rosenheim', land: 'Bayern'},
{ code: 'AIC', city: 'Aichach', kreis: 'Landkreis Aichach-Friedberg', land: 'Bayern'},
{ code: 'ALZ', city: 'Alzenau', kreis: 'Landkreis Aschaffenburg', land: 'Bayern'},
{ code: 'AM', city: 'Amberg', kreis: 'Stadt Amberg', land: 'Bayern'},
{ code: 'AN', city: 'Ansbach', kreis: 'Stadt Ansbach, Landkreis Ansbach', land: 'Bayern'},
{ code: 'AÖ', city: 'Altötting', kreis: 'Landkreis Altötting', land: 'Bayern'},
{ code: 'AS', city: 'Amberg, Sulzbach', kreis: 'Landkreis Amberg-Sulzbach', land: 'Bayern'},
{ code: 'BA', city: 'Bamberg', kreis: 'Stadt Bamberg, Landkreis Bamberg', land: 'Bayern'},
{ code: 'BGD', city: 'Berchtesgaden', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
{ code: 'BGL', city: 'Berchtesgadener Land', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
{ code: 'BOG', city: 'Bogen', kreis: 'Landkreis Straubing-Bogen', land: 'Bayern'},
{ code: 'BRK', city: 'Brückenau', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
{ code: 'BT', city: 'Bayreuth', kreis: 'Stadt Bayreuth, Landkreis Bayreuth', land: 'Bayern'},
{ code: 'BUL', city: 'Burglengenfeld', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Schwandorf', land: 'Bayern'},
{ code: 'BYL', city: 'Bayerischer Landtag', kreis: 'Bayern, Landesregierung und Landtag', land: 'Bayern'},
{ code: 'CHA', city: 'Cham', kreis: 'Landkreis Cham', land: 'Bayern'},
{ code: 'CO', city: 'Coburg', kreis: 'Stadt Coburg, Landkreis Coburg ', land: 'Bayern'},
{ code: 'DAH', city: 'Dachau', kreis: 'Landkreis Dachau', land: 'Bayern'},
{ code: 'DEG', city: 'Deggendorf', kreis: 'Landkreis Deggendorf', land: 'Bayern'},
{ code: 'DGF', city: 'Dingolfing', kreis: 'Landkreis Dingolfing-Landau', land: 'Bayern'},
{ code: 'DKB', city: 'Dinkelsbühl', kreis: 'Landkreis Ansbach', land: 'Bayern'},
{ code: 'DLG', city: 'Dillingen', kreis: 'Landkreis Dillingen an der Donau', land: 'Bayern'},
{ code: 'DON', city: 'Donauwörth', kreis: 'Landkreis Donau-Ries', land: 'Bayern'},
{ code: 'EBE', city: 'Ebersberg', kreis: 'Landkreis Ebersberg', land: 'Bayern'},
{ code: 'EBN', city: 'Ebern', kreis: 'Landkreis Haßberge', land: 'Bayern'},
{ code: 'EBS', city: 'Ebermannstadt', kreis: 'Landkreis Bayreuth, Landkreis Forchheim, Landkreis Kulmbach', land: 'Bayern'},
{ code: 'ED', city: 'Erding', kreis: 'Landkreis Erding', land: 'Bayern'},
{ code: 'EG', city: 'Eggenfelden', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
{ code: 'EI', city: 'Eichstätt', kreis: 'Landkreis Eichstätt', land: 'Bayern'},
{ code: 'ER', city: 'Erlangen', kreis: 'Stadt Erlangen', land: 'Bayern'},
{ code: 'ERH', city: 'Erlangen, Höchstadt', kreis: 'Landkreis Erlangen-Höchstadt', land: 'Bayern'},
{ code: 'ESB', city: 'Eschenbach', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Bayreuth, Landkreis Neustadt an der Waldnaab, Landkreis Nürnberger Land', land: 'Bayern'},
{ code: 'FDB', city: 'Friedberg', kreis: 'Landkreis Aichach-Friedberg', land: 'Bayern'},
{ code: 'FEU', city: 'Feuchtwangen', kreis: 'Landkreis Ansbach', land: 'Bayern'},
{ code: 'FFB', city: 'Fürstenfeldbruck', kreis: 'Landkreis Fürstenfeldbruck', land: 'Bayern'},
{ code: 'FO', city: 'Forchheim', kreis: 'Landkreis Forchheim', land: 'Bayern'},
{ code: 'FRG', city: 'Freyung, Grafenau', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
{ code: 'FS', city: 'Freising', kreis: 'Landkreis Freising', land: 'Bayern'},
{ code: 'FÜ', city: 'Fürth', kreis: 'Stadt Fürth, Landkreis Fürth ', land: 'Bayern'},
{ code: 'FÜS', city: 'Füssen', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
{ code: 'GAP', city: 'Garmisch-Partenkirchen', kreis: 'Landkreis Garmisch-Partenkirchen', land: 'Bayern'},
{ code: 'GEO', city: 'Gerolzhofen', kreis: 'Landkreis Haßberge, Landkreis Schweinfurt', land: 'Bayern'},
{ code: 'GRA', city: 'Grafenau', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
{ code: 'GRI', city: 'Griesbach', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
{ code: 'GUN', city: 'Gunzenhausen', kreis: 'Landkreis Weißenburg-Gunzenhausen', land: 'Bayern'},
{ code: 'GZ', city: 'Günzburg', kreis: 'Landkreis Günzburg', land: 'Bayern'},
{ code: 'HAB', city: 'Hammelburg', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
{ code: 'HAS', city: 'Hassfurt', kreis: 'Landkreis Haßberge', land: 'Bayern'},
{ code: 'HEB', city: 'Hersbruck', kreis: 'Landkreis Nürnberger Land', land: 'Bayern'},
{ code: 'HIP', city: 'Hilpoltstein', kreis: 'Landkreis Roth', land: 'Bayern'},
{ code: 'HO', city: 'Hof', kreis: 'Stadt Hof, Landkreis Hof', land: 'Bayern'},
{ code: 'HOH', city: 'Hofheim', kreis: 'Landkreis Haßberge', land: 'Bayern'},
{ code: 'HÖS', city: 'Höchstadt', kreis: 'Landkreis Erlangen-Höchstadt', land: 'Bayern'},
{ code: 'ILL', city: 'Illertissen', kreis: 'Landkreis Neu-Ulm', land: 'Bayern'},
{ code: 'IN', city: 'Ingolstadt', kreis: 'Stadt Ingolstadt', land: 'Bayern'},
{ code: 'KC', city: 'Kronach', kreis: 'Landkreis Kronach', land: 'Bayern'},
{ code: 'KE', city: 'Kempten', kreis: 'Stadt Kempten (Allgäu)', land: 'Bayern'},
{ code: 'KEH', city: 'Kelheim', kreis: 'Landkreis Kelheim', land: 'Bayern'},
{ code: 'KEM', city: 'Kemnath', kreis: 'Landkreis Bayreuth, Landkreis Tirschenreuth', land: 'Bayern'},
{ code: 'KF', city: 'Kaufbeuren', kreis: 'Stadt Kaufbeuren', land: 'Bayern'},
{ code: 'KG', city: 'Kissingen', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
{ code: 'KÖN', city: 'Königshofen', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
{ code: 'KÖZ', city: 'Kötzting', kreis: 'Landkreis Cham', land: 'Bayern'},
{ code: 'KRU', city: 'Krumbach', kreis: 'Landkreis Günzburg', land: 'Bayern'},
{ code: 'KT', city: 'Kitzingen', kreis: 'Landkreis Kitzingen', land: 'Bayern'},
{ code: 'KU', city: 'Kulmbach', kreis: 'Landkreis Kulmbach', land: 'Bayern'},
{ code: 'LA', city: 'Landshut', kreis: 'Stadt Landshut, Landkreis Landshut', land: 'Bayern'},
{ code: 'LAN', city: 'Landau', kreis: 'Landkreis Dingolfing-Landau', land: 'Bayern'},
{ code: 'LAU', city: 'Lauf', kreis: 'Landkreis Nürnberger Land', land: 'Bayern'},
{ code: 'LF', city: 'Laufen', kreis: 'Landkreis Altötting, Landkreis Berchtesgadener Land, Landkreis Traunstein', land: 'Bayern'},
{ code: 'LI', city: 'Lindau', kreis: 'Landkreis Lindau (Bodensee)', land: 'Bayern'},
{ code: 'LIF', city: 'Lichtenfels', kreis: 'Landkreis Lichtenfels', land: 'Bayern'},
{ code: 'LL', city: 'Landsberg Am Lech', kreis: 'Landkreis Landsberg am Lech', land: 'Bayern'},
{ code: 'M', city: 'München', kreis: 'Stadt München, Landkreis München', land: 'Bayern'},
{ code: 'MAI', city: 'Mainburg', kreis: 'Landkreis Kelheim, Landkreis Landhut', land: 'Bayern'},
{ code: 'MAK', city: 'Marktredwitz', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
{ code: 'MAL', city: 'Mallersdorf', kreis: 'Landkreis Landshut, Landkreis Straubing-Bogen', land: 'Bayern'},
{ code: 'MB', city: 'Miesbach', kreis: 'Landkreis Miesbach', land: 'Bayern'},
{ code: 'MET', city: 'Mellrichstadt', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
{ code: 'MIL', city: 'Miltenberg', kreis: 'Landkreis Miltenberg', land: 'Bayern'},
{ code: 'MM', city: 'Memmingen', kreis: 'Stadt Memmingen', land: 'Bayern'},
{ code: 'MN', city: 'Mindelheim', kreis: 'Landkreis Unterallgäu', land: 'Bayern'},
{ code: 'MOD', city: 'Marktoberdorf', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
{ code: 'MSP', city: 'Main, Spessart', kreis: 'Landkreis Main-Spessart', land: 'Bayern'},
{ code: 'MUC', city: 'Muenchen', kreis: 'Stadt München', land: 'Bayern'},
{ code: 'MÜ', city: 'Mühldorf', kreis: 'Landkreis Mühldorf am Inn', land: 'Bayern'},
{ code: 'MÜB', city: 'Münchberg', kreis: 'Landkreis Bayreuth, Landkreis Hof', land: 'Bayern'},
{ code: 'N', city: 'Nürnberg', kreis: 'Stadt Nürnberg, Landkreis Nürnberger Land', land: 'Bayern'},
{ code: 'NAB', city: 'Nabburg', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Schwandorf', land: 'Bayern'},
{ code: 'NAI', city: 'Naila', kreis: 'Landkreis Hof', land: 'Bayern'},
{ code: 'ND', city: 'Neuburg An Der Donau', kreis: 'Landkreis Neuburg-Schrobenhausen', land: 'Bayern'},
{ code: 'NEA', city: 'Neustadt An Der Aisch', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
{ code: 'NEC', city: 'Neustadt Bei Coburg', kreis: 'Stadt Coburg, Landkreis Coburg ', land: 'Bayern'},
{ code: 'NEN', city: 'Neunburg', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
{ code: 'NES', city: 'Neustadt An Der Saale', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
{ code: 'NEW', city: 'Neustadt An Der Waldnaab', kreis: 'Landkreis Neustadt an der Waldnaab', land: 'Bayern'},
{ code: 'NM', city: 'Neumarkt', kreis: 'Landkreis Neumarkt in der Oberpfalz', land: 'Bayern'},
{ code: 'NÖ', city: 'Nördlingen', kreis: 'Landkreis Donau-Ries', land: 'Bayern'},
{ code: 'NU', city: 'Neu-Ulm', kreis: 'Landkreis Neu-Ulm', land: 'Bayern'},
{ code: 'OA', city: 'Oberallgäu', kreis: 'Landkreis Oberallgäu', land: 'Bayern'},
{ code: 'OAL', city: 'Ostallgäu', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
{ code: 'OBB', city: 'Obernburg', kreis: 'Landkreis Miltenberg', land: 'Bayern'},
{ code: 'OCH', city: 'Ochsenfurt', kreis: 'Landkreis Würzburg', land: 'Bayern'},
{ code: 'OVI', city: 'Oberviechtach', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
{ code: 'PA', city: 'Passau', kreis: 'Stadt Passau, Landkreis Passau', land: 'Bayern'},
{ code: 'PAF', city: 'Pfaffenhofen', kreis: 'Landkreis Pfaffenhofen an der Ilm', land: 'Bayern'},
{ code: 'PAN', city: 'Pfarrkirchen', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
{ code: 'PAR', city: 'Parsberg', kreis: 'Landkreis Kelheim, Landkreis Neumarkt in der Oberpfalz', land: 'Bayern'},
{ code: 'PEG', city: 'Pegnitz', kreis: 'Landkreis Bayreuth, Landkreis Forchheim, Landkreis Nürnberger Land', land: 'Bayern'},
{ code: 'R', city: 'Regensburg', kreis: 'Stadt Regensburg,Landkreis Regensburg', land: 'Bayern'},
{ code: 'REG', city: 'Regen', kreis: 'Landkreis Regen', land: 'Bayern'},
{ code: 'REH', city: 'Rehau', kreis: 'Landkreis Hof, Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
{ code: 'REI', city: 'Reichenhall', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
{ code: 'RH', city: 'Roth', kreis: 'Landkreis Roth', land: 'Bayern'},
{ code: 'RID', city: 'Riedenburg', kreis: 'Landkreis Kelheim', land: 'Bayern'},
{ code: 'RO', city: 'Rosenheim', kreis: 'Stadt Rosenheim, Landkreis Rosenheim', land: 'Bayern'},
{ code: 'ROD', city: 'Roding', kreis: 'Landkreis Cham', land: 'Bayern'},
{ code: 'ROL', city: 'Rottenburg An Der Laaber', kreis: 'Landkreis Kelheim, Landkreis Landshut', land: 'Bayern'},
{ code: 'ROT', city: 'Rothenburg Ob Der Tauber', kreis: 'Landkreis Ansbach', land: 'Bayern'},
{ code: 'SAD', city: 'Schwandorf', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
{ code: 'SAN', city: 'Stadtsteinach', kreis: 'Landkreis Hof, Landkreis Kronach, Landkreis Kulmbach', land: 'Bayern'},
{ code: 'SC', city: 'Schwabach', kreis: 'Stadt Schwabach', land: 'Bayern'},
{ code: 'SEF', city: 'Scheinfeld', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
{ code: 'SEL', city: 'Selb', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
{ code: 'SMÜ', city: 'Schwabmünchen', kreis: 'Landkreis Augsburg', land: 'Bayern'},
{ code: 'SOB', city: 'Schrobenhausen', kreis: 'Landkreis Neuburg-Schrobenhausen', land: 'Bayern'},
{ code: 'SOG', city: 'Schongau', kreis: 'Landkreis Weilheim-Schongau', land: 'Bayern'},
{ code: 'SR', city: 'Straubing', kreis: 'Landkreis Straubing-Bogen, Stadt Straubing', land: 'Bayern'},
{ code: 'STA', city: 'Starnberg', kreis: 'Landkreis Starnberg', land: 'Bayern'},
{ code: 'STE', city: 'Staffelstein', kreis: 'Landkreis Lichtenfels', land: 'Bayern'},
{ code: 'SUL', city: 'Sulzbach-Rosenberg', kreis: 'Landkreis Amberg-Sulzbach', land: 'Bayern'},
{ code: 'SW', city: 'Schweinfurt', kreis: 'Stadt Schweinfurt, Landkreis Schweinfurt', land: 'Bayern'},
{ code: 'TIR', city: 'Tirschenreuth', kreis: 'Landkreis Tirschenreuth', land: 'Bayern'},
{ code: 'TÖL', city: 'Tölz', kreis: 'Landkreis Bad Tölz-Wolfratshausen', land: 'Bayern'},
{ code: 'TS', city: 'Traunstein', kreis: 'Landkreis Traunstein', land: 'Bayern'},
{ code: 'UFF', city: 'Uffenheim', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
{ code: 'VIB', city: 'Vilsbiburg', kreis: 'Landkreis Landshut, Landkreis Mühldorf a.Inn, Landkreis Rottal-Inn', land: 'Bayern'},
{ code: 'VIT', city: 'Viechtach', kreis: 'Landkreis Regen', land: 'Bayern'},
{ code: 'VOH', city: 'Vohenstrauß', kreis: 'Landkreis Neustadt an der Waldnaab', land: 'Bayern'},
{ code: 'WEN', city: 'Weiden', kreis: 'Stadt Weiden in der Oberpfalz', land: 'Bayern'},
{ code: 'WER', city: 'Wertingen', kreis: 'Landkreis Augsburg, Landkreis Dillingen an der Donau', land: 'Bayern'},
{ code: 'WM', city: 'Weilheim', kreis: 'Landkreis Weilheim-Schongau', land: 'Bayern'},
{ code: 'WOR', city: 'Wolfratshausen', kreis: 'Landkreis Bad Tölz-Wolfratshausen, Landkreis München, Landkreis Starnberg', land: 'Bayern'},
{ code: 'WOS', city: 'Wolfstein', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
{ code: 'WS', city: 'Wasserburg', kreis: 'Landkreis Mühldorf a.Inn', land: 'Bayern'},
{ code: 'WÜ', city: 'Würzburg', kreis: 'Stadt Würzburg, Landkreis Würzburg', land: 'Bayern'},
{ code: 'WUG', city: 'Weißenburg', kreis: 'Landkreis Weißenburg-Gunzenhausen', land: 'Bayern'},
{ code: 'WÜM', city: 'Waldmünchen (Mit Einem Buchstabendreher)', kreis: 'Landkreis Cham', land: 'Bayern'},
{ code: 'WUN', city: 'Wunsiedel', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
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
