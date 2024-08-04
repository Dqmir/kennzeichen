const licensePlates = [
  { code: 'A', city: 'Augsburg', kreis: 'Stadt Augsburg, Landkreis Augsburg', land: 'Bayern'},
  { code: 'AA', city: 'Aalen', kreis: 'Ostalbkreis', land: 'Baden-Württemberg'},
  { code: 'AB', city: 'Aschaffenburg', kreis: 'Stadt Aschaffenburg , Landkreis Aschaffenburg', land: 'Bayern'},
  { code: 'ABG', city: 'Altenburg', kreis: 'Landkreis Altenburger Land', land: 'Thüringen'},
  { code: 'ABI', city: 'Anhalt-Bitterfeld', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
  { code: 'AC', city: 'Aachen', kreis: 'Städtregion Aachen', land: 'Nordrhein-Westfalen'},
  { code: 'AE', city: 'Auerbach', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'AH', city: 'Ahaus', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
  { code: 'AIB', city: 'Aibling', kreis: 'Landkreis München, Landkreis Rosenheim', land: 'Bayern'},
  { code: 'AIC', city: 'Aichach', kreis: 'Landkreis Aichach-Friedberg', land: 'Bayern'},
  { code: 'AK', city: 'Altenkirchen', kreis: 'Landkreis Altenkirchen', land: 'Rheinland-Pfalz'},
  { code: 'ALF', city: 'Alfeld', kreis: 'Landkreis Hildesheim', land: 'Niedersachsen'},
  { code: 'ALZ', city: 'Alzenau', kreis: 'Landkreis Aschaffenburg', land: 'Bayern'},
  { code: 'AM', city: 'Amberg', kreis: 'Stadt Amberg', land: 'Bayern'},
  { code: 'AN', city: 'Ansbach', kreis: 'Stadt Ansbach, Landkreis Ansbach', land: 'Bayern'},
  { code: 'ANA', city: 'Annaberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'ANG', city: 'Angermünde', kreis: 'Landkreis Uckermark', land: 'Brandenburg'},
  { code: 'ANK', city: 'Anklam', kreis: 'Landkreis Vorpommern-Greifswald', land: 'Mecklenburg-Vorpommern'},
  { code: 'AÖ', city: 'Altötting', kreis: 'Landkreis Altötting', land: 'Bayern'},
  { code: 'AP', city: 'Apolda', kreis: 'Landkreis Weimarer Land', land: 'Thüringen'},
  { code: 'APD', city: 'Apolda', kreis: 'Landkreis Weimarer Land', land: 'Thüringen'},
  { code: 'ARN', city: 'Arnstadt', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'ART', city: 'Artern', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'AS', city: 'Amberg, Sulzbach', kreis: 'Landkreis Amberg-Sulzbach', land: 'Bayern'},
  { code: 'ASL', city: 'Aschersleben', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'ASZ', city: 'Aue, Schwarzenberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'AT', city: 'Altentreptow', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
  { code: 'AU', city: 'Aue', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'AUR', city: 'Aurich', kreis: 'Landkreis Aurich', land: 'Niedersachsen'},
  { code: 'AW', city: 'Ahrweiler', kreis: 'Landkreis Ahrweiler', land: 'Rheinland-Pfalz'},
  { code: 'AZ', city: 'Alzey', kreis: 'Landkreis Alzey-Worms', land: 'Rheinland-Pfalz'},
  { code: 'AZE', city: 'Anhalt-Zerbst ', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
  { code: 'B', city: 'Berlin', kreis: 'Stadt Berlin', land: 'Berlin'},
  { code: 'BA', city: 'Bamberg', kreis: 'Stadt Bamberg, Landkreis Bamberg', land: 'Bayern'},
  { code: 'BAD', city: 'Baden-Baden', kreis: 'Stadt Baden-Baden', land: 'Baden-Württemberg'},
  { code: 'BAR', city: 'Barnim', kreis: 'Landkreis Barnim', land: 'Brandenburg'},
  { code: 'BB', city: 'Böblingen', kreis: 'Landkreis Böblingen', land: 'Baden-Württemberg'},
  { code: 'BBG', city: 'Bernburg', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'BC', city: 'Biberach', kreis: 'Landkreis Biberach', land: 'Baden-Württemberg'},
  { code: 'BCH', city: 'Buchen', kreis: 'Neckar-Odenwald-Kreis', land: 'Baden-Württemberg'},
  { code: 'BE', city: 'Beckum', kreis: 'Kreis Warendorf', land: 'Nordrhein-Westfalen'},
  { code: 'BED', city: 'Brand-Erbisdorf', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'BER', city: 'Bernau', kreis: 'Landkreis Barnim', land: 'Brandenburg'},
  { code: 'BF', city: 'Burgsteinfurt', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
  { code: 'BGD', city: 'Berchtesgaden', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
  { code: 'BGL', city: 'Berchtesgadener Land', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
  { code: 'BH', city: 'Bühl', kreis: 'Ortenaukreis, Landkreis Rastatt', land: 'Baden-Württemberg'},
  { code: 'BI', city: 'Bielefeld', kreis: 'Stadt Bielefeld', land: 'Nordrhein-Westfalen'},
  { code: 'BID', city: 'Biedenkopf', kreis: 'Landkreis Marburg-Biedenkopf', land: 'Hessen'},
  { code: 'BIN', city: 'Bingen', kreis: 'Landkreis Mainz-Bingen', land: 'Rheinland-Pfalz'},
  { code: 'BIR', city: 'Birkenfeld', kreis: 'Landkreis Birkenfeld', land: 'Rheinland-Pfalz'},
  { code: 'BIT', city: 'Bitburg', kreis: 'Eifelkreis Bitburg-Prüm', land: 'Rheinland-Pfalz'},
  { code: 'BIW', city: 'Bischofswerda', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'BK', city: 'Backnang', kreis: 'Rems-Murr-Kreis, Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'BKS', city: 'Bernkastel', kreis: 'Landkreis Bernkastel-Wittlich', land: 'Rheinland-Pfalz'},
  { code: 'BL', city: 'Balingen', kreis: 'Zollernalbkreis', land: 'Baden-Württemberg'},
  { code: 'BLB', city: 'Berleburg', kreis: 'Kreis Siegen-Wittgenstein', land: 'Nordrhein-Westfalen'},
  { code: 'BLK', city: 'Burgenlandkreis', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'BM', city: 'Bergheim', kreis: 'Rhein-Erft-Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'BN', city: 'Bonn', kreis: 'Stadt Bonn', land: 'Nordrhein-Westfalen'},
  { code: 'BNA', city: 'Borna', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'BO', city: 'Bochum', kreis: 'Stadt Bochum', land: 'Nordrhein-Westfalen'},
  { code: 'BÖ', city: 'Börde', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'BOG', city: 'Bogen', kreis: 'Landkreis Straubing-Bogen', land: 'Bayern'},
  { code: 'BOH', city: 'Bocholt', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
  { code: 'BOR', city: 'Borken', kreis: 'Kreis Borken', land: 'Nordrhein-Westfalen'},
  { code: 'BOT', city: 'Bottrop', kreis: 'Stadt Bottrop', land: 'Nordrhein-Westfalen'},
  { code: 'BRA', city: 'Brake', kreis: 'Landkreis Wesermarsch', land: 'Niedersachsen'},
  { code: 'BRB', city: 'Brandenburg', kreis: 'Stadt Brandenburg an der Havel', land: 'Brandenburg'},
  { code: 'BRG', city: 'Burg', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
  { code: 'BRK', city: 'Brückenau', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
  { code: 'BRL', city: 'Braunlage', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'BRV', city: 'Bremervörde', kreis: 'Landkreis Rotenburg (Wümme)', land: 'Niedersachsen'},
  { code: 'BS', city: 'Braunschweig', kreis: 'Stadt Braunschweig', land: 'Niedersachsen'},
  { code: 'BSB', city: 'Bersenbrück', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'BSK', city: 'Beeskow', kreis: 'Landkreis Oder-Spree', land: 'Brandenburg'},
  { code: 'BT', city: 'Bayreuth', kreis: 'Stadt Bayreuth, Landkreis Bayreuth', land: 'Bayern'},
  { code: 'BTF', city: 'Bitterfeld', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
  { code: 'BÜD', city: 'Büdingen', kreis: 'Wetteraukreis', land: 'Hessen'},
  { code: 'BUL', city: 'Burglengenfeld', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Schwandorf', land: 'Bayern'},
  { code: 'BÜR', city: 'Büren', kreis: 'Kreis Paderborn', land: 'Nordrhein-Westfalen'},
  { code: 'BÜS', city: 'Büsingen', kreis: 'Landkreis Konstanz', land: 'Baden-Württemberg'},
  { code: 'BÜZ', city: 'Bützow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'BYL', city: 'Bayerischer Landtag', kreis: 'Bayern, Landesregierung und Landtag', land: 'Bayern'},
  { code: 'BZ', city: 'Bautzen', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'C', city: 'Chemnitz', kreis: 'Stadt Chemnitz', land: 'Sachsen'},
  { code: 'CA', city: 'Calau', kreis: 'Landkreis Oberspreewald-Lausitz', land: 'Brandenburg'},
  { code: 'CAS', city: 'Castrop', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
  { code: 'CB', city: 'Cottbus', kreis: 'Stadt Cottbus', land: 'Brandenburg'},
  { code: 'CE', city: 'Celle', kreis: 'Landkreis Celle', land: 'Niedersachsen'},
  { code: 'CHA', city: 'Cham', kreis: 'Landkreis Cham', land: 'Bayern'},
  { code: 'CLP', city: 'Cloppenburg', kreis: 'Landkreis Cloppenburg', land: 'Niedersachsen'},
  { code: 'CLZ', city: 'Clausthal-Zellerfeld', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'CO', city: 'Coburg', kreis: 'Stadt Coburg, Landkreis Coburg ', land: 'Bayern'},
  { code: 'COC', city: 'Cochem', kreis: 'Landkreis Cochem-Zell', land: 'Rheinland-Pfalz'},
  { code: 'COE', city: 'Coesfeld', kreis: 'Kreis Coesfeld', land: 'Nordrhein-Westfalen'},
  { code: 'CR', city: 'Crailsheim', kreis: 'Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'CUX', city: 'Cuxhaven', kreis: 'Landkreis Cuxhaven', land: 'Niedersachsen'},
  { code: 'CW', city: 'Calw', kreis: 'Landkreis Calw', land: 'Baden-Württemberg'},
  { code: 'D', city: 'Düsseldorf', kreis: 'Stadt Düsseldorf', land: 'Nordrhein-Westfalen'},
  { code: 'DA', city: 'Darmstadt', kreis: 'Stadt Darmstadt, Landkreis Darmstadt-Dieburg', land: 'Hessen'},
  { code: 'DAH', city: 'Dachau', kreis: 'Landkreis Dachau', land: 'Bayern'},
  { code: 'DAN', city: 'Dannenberg', kreis: 'Landkreis Lüchow-Dannenberg', land: 'Niedersachsen'},
  { code: 'DAU', city: 'Daun', kreis: 'Landkreis Vulkaneifel', land: 'Rheinland-Pfalz'},
  { code: 'DBR', city: 'Doberan', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'DD', city: 'Dresden', kreis: 'Stadt Dresden', land: 'Sachsen'},
  { code: 'DE', city: 'Dessau', kreis: 'Stadt Dessau-Roßlau', land: 'Sachsen-Anhalt'},
  { code: 'DEG', city: 'Deggendorf', kreis: 'Landkreis Deggendorf', land: 'Bayern'},
  { code: 'DEL', city: 'Delmenhorst', kreis: 'Stadt Delmenhorst', land: 'Niedersachsen'},
  { code: 'DGF', city: 'Dingolfing', kreis: 'Landkreis Dingolfing-Landau', land: 'Bayern'},
  { code: 'DH', city: 'Diepholz', kreis: 'Landkreis Diepholz', land: 'Niedersachsen'},
  { code: 'DI', city: 'Dieburg', kreis: 'Landkreis Darmstadt-Dieburg', land: 'Hessen'},
  { code: 'DIL', city: 'Dillenburg', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'DIN', city: 'Dinslaken', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
  { code: 'DIZ', city: 'Diez', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'DKB', city: 'Dinkelsbühl', kreis: 'Landkreis Ansbach', land: 'Bayern'},
  { code: 'DL', city: 'Döbeln', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'DLG', city: 'Dillingen', kreis: 'Landkreis Dillingen an der Donau', land: 'Bayern'},
  { code: 'DM', city: 'Demmin', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'DN', city: 'Düren', kreis: 'Kreis Düren', land: 'Nordrhein-Westfalen'},
  { code: 'DO', city: 'Dortmund', kreis: 'Stadt Dortmund', land: 'Nordrhein-Westfalen'},
  { code: 'DON', city: 'Donauwörth', kreis: 'Landkreis Donau-Ries', land: 'Bayern'},
  { code: 'DU', city: 'Duisburg', kreis: 'Stadt Duisburg', land: 'Nordrhein-Westfalen'},
  { code: 'DUD', city: 'Duderstadt', kreis: 'Landkreis Göttingen', land: 'Niedersachsen'},
  { code: 'DÜW', city: 'Dürkheim an der Weinstraße', kreis: 'Landkreis Bad Dürkheim', land: 'Rheinland-Pfalz'},
  { code: 'DW', city: 'Dippoldiswalde', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'DZ', city: 'Delitzsch', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'E', city: 'Essen', kreis: 'Stadt Essen', land: 'Nordrhein-Westfalen'},
  { code: 'EA', city: 'Eisenach', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'EB', city: 'Eilenburg', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'EBE', city: 'Ebersberg', kreis: 'Landkreis Ebersberg', land: 'Bayern'},
  { code: 'EBN', city: 'Ebern', kreis: 'Landkreis Haßberge', land: 'Bayern'},
  { code: 'EBS', city: 'Ebermannstadt', kreis: 'Landkreis Bayreuth, Landkreis Forchheim, Landkreis Kulmbach', land: 'Bayern'},
  { code: 'ECK', city: 'Eckernförde', kreis: 'Kreis Rendsburg-Eckernförde', land: 'Schleswig-Holstein'},
  { code: 'ED', city: 'Erding', kreis: 'Landkreis Erding', land: 'Bayern'},
  { code: 'EE', city: 'Elbe, Elster', kreis: 'Landkreis Elbe-Elster', land: 'Brandenburg'},
  { code: 'EF', city: 'Erfurt', kreis: 'Stadt Erfurt', land: 'Thüringen'},
  { code: 'EG', city: 'Eggenfelden', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
  { code: 'EH', city: 'Eisenhüttenstadt', kreis: 'Landkreis Oder-Spree', land: 'Brandenburg'},
  { code: 'EI', city: 'Eichstätt', kreis: 'Landkreis Eichstätt', land: 'Bayern'},
  { code: 'EIC', city: 'Eichsfeld', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'EIL', city: 'Eisleben', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
  { code: 'EIN', city: 'Einbeck', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'EIS', city: 'Eisenberg', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'EL', city: 'Emsland', kreis: 'Landkreis Emsland', land: 'Niedersachsen'},
  { code: 'EM', city: 'Emmendingen', kreis: 'Landkreis Emmendingen', land: 'Baden-Württemberg'},
  { code: 'EMD', city: 'Emden', kreis: 'Stadt Emden', land: 'Niedersachsen'},
  { code: 'EMS', city: 'Ems', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'EN', city: 'Ennepe', kreis: 'Ennepe-Ruhr-Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'ER', city: 'Erlangen', kreis: 'Stadt Erlangen', land: 'Bayern'},
  { code: 'ERB', city: 'Erbach', kreis: 'Odenwaldkreis', land: 'Hessen'},
  { code: 'ERH', city: 'Erlangen, Höchstadt', kreis: 'Landkreis Erlangen-Höchstadt', land: 'Bayern'},
  { code: 'ERK', city: 'Erkelenz', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
  { code: 'ERZ', city: 'Erzgebirge', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'ES', city: 'Esslingen', kreis: 'Landkreis Esslingen', land: 'Baden-Württemberg'},
  { code: 'ESB', city: 'Eschenbach', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Bayreuth, Landkreis Neustadt an der Waldnaab, Landkreis Nürnberger Land', land: 'Bayern'},
  { code: 'ESW', city: 'Eschwege', kreis: 'Werra-Meißner-Kreis', land: 'Hessen'},
  { code: 'EU', city: 'Euskirchen', kreis: 'Kreis Euskirchen', land: 'Nordrhein-Westfalen'},
  { code: 'EW', city: 'Eberswalde', kreis: 'Landkreis Barnim', land: 'Brandenburg'},
  { code: 'F', city: 'Frankfurt', kreis: 'Stadt Frankfurt am Main', land: 'Hessen'},
  { code: 'FB', city: 'Friedberg', kreis: 'Wetteraukreis', land: 'Hessen'},
  { code: 'FD', city: 'Fulda', kreis: 'Landkreis Fulda', land: 'Hessen'},
  { code: 'FDB', city: 'Friedberg', kreis: 'Landkreis Aichach-Friedberg', land: 'Bayern'},
  { code: 'FDS', city: 'Freudenstadt', kreis: 'Landkreis Freudenstadt', land: 'Baden-Württemberg'},
  { code: 'FEU', city: 'Feuchtwangen', kreis: 'Landkreis Ansbach', land: 'Bayern'},
  { code: 'FF', city: 'Frankfurt', kreis: 'Stadt Frankfurt (Oder)', land: 'Brandenburg'},
  { code: 'FFB', city: 'Fürstenfeldbruck', kreis: 'Landkreis Fürstenfeldbruck', land: 'Bayern'},
  { code: 'FG', city: 'Freiberg', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'FI', city: 'Finsterwalde', kreis: 'Landkreis Elbe-Elster', land: 'Brandenburg'},
  { code: 'FKB', city: 'Frankenberg', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'FL', city: 'Flensburg', kreis: 'Stadt Flensburg', land: 'Schleswig-Holstein'},
  { code: 'FLÖ', city: 'Flöha', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'FN', city: 'Friedrichshafen', kreis: 'Bodenseekreis', land: 'Baden-Württemberg'},
  { code: 'FO', city: 'Forchheim', kreis: 'Landkreis Forchheim', land: 'Bayern'},
  { code: 'FOR', city: 'Forst', kreis: 'Landkreis Spree-Neiße', land: 'Brandenburg'},
  { code: 'FR', city: 'Freiburg', kreis: 'Stadt Freiburg im Breisgau, Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'FRG', city: 'Freyung, Grafenau', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
  { code: 'FRI', city: 'Friesland', kreis: 'Landkreis Friesland', land: 'Niedersachsen'},
  { code: 'FRW', city: 'Freienwalde', kreis: 'Landkreis Märkisch-Oderland', land: 'Brandenburg'},
  { code: 'FS', city: 'Freising', kreis: 'Landkreis Freising', land: 'Bayern'},
  { code: 'FT', city: 'Frankenthal', kreis: 'Stadt Frankenthal (Pfalz)', land: 'Rheinland-Pfalz'},
  { code: 'FTL', city: 'Freital', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'FÜ', city: 'Fürth', kreis: 'Stadt Fürth, Landkreis Fürth ', land: 'Bayern'},
  { code: 'FÜS', city: 'Füssen', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
  { code: 'FW', city: 'Fürstenwalde', kreis: 'Landkreis Oder-Spree', land: 'Brandenburg'},
  { code: 'FZ', city: 'Fritzlar', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'G', city: 'Gera', kreis: 'Stadt Gera', land: 'Thüringen'},
  { code: 'GA', city: 'Gardelegen', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
  { code: 'GAN', city: 'Gandersheim', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'GAP', city: 'Garmisch-Partenkirchen', kreis: 'Landkreis Garmisch-Partenkirchen', land: 'Bayern'},
  { code: 'GC', city: 'Glauchau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'GD', city: 'Gmünd', kreis: 'Ostalbkreis', land: 'Baden-Württemberg'},
  { code: 'GDB', city: 'Gadebusch', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
  { code: 'GE', city: 'Gelsenkirchen', kreis: 'Stadt Gelsenkirchen', land: 'Nordrhein-Westfalen'},
  { code: 'GEL', city: 'Geldern', kreis: 'Kreis Kleve', land: 'Nordrhein-Westfalen'},
  { code: 'GEO', city: 'Gerolzhofen', kreis: 'Landkreis Haßberge, Landkreis Schweinfurt', land: 'Bayern'},
  { code: 'GER', city: 'Germersheim', kreis: 'Landkreis Germersheim', land: 'Rheinland-Pfalz'},
  { code: 'GF', city: 'Gifhorn', kreis: 'Landkreis Gifhorn', land: 'Niedersachsen'},
  { code: 'GG', city: 'Groß-Gerau', kreis: 'Kreis Groß-Gerau', land: 'Hessen'},
  { code: 'GHA', city: 'Geithain', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'GHC', city: 'Gräfenhainichen', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
  { code: 'GI', city: 'Gießen', kreis: 'Landkreis Gießen', land: 'Hessen'},
  { code: 'GK', city: 'Geilenkirchen', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
  { code: 'GL', city: 'Gladbach', kreis: 'Rheinisch-Bergischer Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'GLA', city: 'Gladbeck', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
  { code: 'GM', city: 'Gummersbach', kreis: 'Oberbergischer Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'GMN', city: 'Grimmen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
  { code: 'GN', city: 'Gelnhausen', kreis: 'Main-Kinzig-Kreis ', land: 'Hessen'},
  { code: 'GNT', city: 'Genthin', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
  { code: 'GÖ', city: 'Göttingen', kreis: 'Stadt Göttingen, Landkreis Göttingen', land: 'Niedersachsen'},
  { code: 'GOA', city: 'Sankt Goar', kreis: 'Rhein-Hunsrück-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'GOH', city: 'Sankt Goarshausen', kreis: 'Rhein-Lahn-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'GP', city: 'Göppingen', kreis: 'Landkreis Göppingen', land: 'Baden-Württemberg'},
  { code: 'GR', city: 'Görlitz', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'GRA', city: 'Grafenau', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
  { code: 'GRH', city: 'Großenhain', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'GRI', city: 'Griesbach', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
  { code: 'GRM', city: 'Grimma', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'GRZ', city: 'Greiz', kreis: 'Landkreis Greiz', land: 'Thüringen'},
  { code: 'GS', city: 'Goslar', kreis: 'Landkreis Goslar', land: 'Niedersachsen'},
  { code: 'GT', city: 'Gütersloh', kreis: 'Kreis Gütersloh', land: 'Nordrhein-Westfalen'},
  { code: 'GTH', city: 'Gotha', kreis: 'Landkreis Gotha', land: 'Thüringen'},
  { code: 'GÜ', city: 'Güstrow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'GUB', city: 'Guben', kreis: 'Landkreis Spree-Neiße', land: 'Brandenburg'},
  { code: 'GUN', city: 'Gunzenhausen', kreis: 'Landkreis Weißenburg-Gunzenhausen', land: 'Bayern'},
  { code: 'GV', city: 'Grevenbroich', kreis: 'Rhein-Kreis Neuss', land: 'Nordrhein-Westfalen'},
  { code: 'GVM', city: 'Grevesmühlen', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
  { code: 'GW', city: 'Greifswald', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
  { code: 'GZ', city: 'Günzburg', kreis: 'Landkreis Günzburg', land: 'Bayern'},
  { code: 'H', city: 'Hannover', kreis: 'Stadt Hannover', land: 'Niedersachsen'},
  { code: 'HA', city: 'Hagen', kreis: 'Stadt Hagen', land: 'Nordrhein-Westfalen'},
  { code: 'HAB', city: 'Hammelburg', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
  { code: 'HAL', city: 'Halle', kreis: 'Stadt Halle (Saale)', land: 'Sachsen-Anhalt'},
  { code: 'HAM', city: 'Hamm', kreis: 'Stadt Hamm', land: 'Nordrhein-Westfalen'},
  { code: 'HAS', city: 'Hassfurt', kreis: 'Landkreis Haßberge', land: 'Bayern'},
  { code: 'HB', city: 'Hansestadt Bremen', kreis: 'Stadt Bremen', land: 'Bremen'},
  { code: 'HBN', city: 'Hildburghausen', kreis: 'Landkreis Hildburghausen', land: 'Thüringen'},
  { code: 'HBS', city: 'Halberstadt', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
  { code: 'HC', city: 'Hainichen', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'HCH', city: 'Hechingen', kreis: 'Landkreis Freudenstadt, Zollernalbkreis', land: 'Baden-Württemberg'},
  { code: 'HD', city: 'Heidelberg', kreis: 'Stadt Heidelberg, Rhein-Neckar-Kreis', land: 'Baden-Württemberg'},
  { code: 'HDH', city: 'Heidenheim', kreis: 'Landkreis Heidenheim', land: 'Baden-Württemberg'},
  { code: 'HDL', city: 'Haldensleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'HE', city: 'Helmstedt', kreis: 'Landkreis Helmstedt', land: 'Niedersachsen'},
  { code: 'HEB', city: 'Hersbruck', kreis: 'Landkreis Nürnberger Land', land: 'Bayern'},
  { code: 'HEF', city: 'Hersfeld', kreis: 'Landkreis Hersfeld-Rotenburg', land: 'Hessen'},
  { code: 'HEI', city: 'Heide', kreis: 'Kreis Dithmarschen', land: 'Schleswig-Holstein'},
  { code: 'HER', city: 'Herne', kreis: 'Stadt Herne', land: 'Nordrhein-Westfalen'},
  { code: 'HET', city: 'Hettstedt', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
  { code: 'HF', city: 'Herford', kreis: 'Kreis Herford', land: 'Nordrhein-Westfalen'},
  { code: 'HG', city: 'Homburg', kreis: 'Hochtaunuskreis', land: 'Hessen'},
  { code: 'HGN', city: 'Hagenow', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'HGW', city: 'Hansestadt Greifswald', kreis: 'Stadt Greifswald', land: 'Mecklenburg-Vorpommern'},
  { code: 'HH', city: 'Hansestadt Hamburg', kreis: 'Stadt Hamburg', land: 'Hamburg'},
  { code: 'HHM', city: 'Hohenmölsen', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'HI', city: 'Hildesheim', kreis: 'Landkreis Hildesheim', land: 'Niedersachsen'},
  { code: 'HIG', city: 'Heiligenstadt', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'HIP', city: 'Hilpoltstein', kreis: 'Landkreis Roth', land: 'Bayern'},
  { code: 'HK', city: 'Heidekreis', kreis: 'Landkreis Heidekreis', land: 'Niedersachsen'},
  { code: 'HL', city: 'Hansestadt Lübeck', kreis: 'Stadt Lübeck', land: 'Schleswig-Holstein'},
  { code: 'HM', city: 'Hameln', kreis: 'Landkreis Hameln-Pyrmont', land: 'Niedersachsen'},
  { code: 'HMÜ', city: 'Hann. Münden', kreis: 'Landkreis Göttingen ', land: 'Niedersachsen'},
  { code: 'HN', city: 'Heilbronn', kreis: 'Stadt Heilbronn, Landkreis Heilbronn', land: 'Baden-Württemberg'},
  { code: 'HO', city: 'Hof', kreis: 'Stadt Hof, Landkreis Hof', land: 'Bayern'},
  { code: 'HOG', city: 'Hofgeismar', kreis: 'Landkreis Kassel', land: 'Hessen'},
  { code: 'HOH', city: 'Hofheim', kreis: 'Landkreis Haßberge', land: 'Bayern'},
  { code: 'HOL', city: 'Holzminden', kreis: 'Landkreis Holzminden', land: 'Niedersachsen'},
  { code: 'HOM', city: 'Homburg', kreis: 'Saarpfalz-Kreis ', land: 'Saarland'},
  { code: 'HOR', city: 'Horb', kreis: 'Landkreis Freudenstadt', land: 'Baden-Württemberg'},
  { code: 'HÖS', city: 'Höchstadt', kreis: 'Landkreis Erlangen-Höchstadt', land: 'Bayern'},
  { code: 'HOT', city: 'Hohenstein', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'HP', city: 'Heppenheim', kreis: 'Kreis Bergstraße', land: 'Hessen'},
  { code: 'HR', city: 'Homberg', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'HRO', city: 'Hansestadt Rostock', kreis: 'Stadt Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'HS', city: 'Heinsberg', kreis: 'Kreis Heinsberg', land: 'Nordrhein-Westfalen'},
  { code: 'HSK', city: 'Hochsauerlandkreis', kreis: 'Hochsauerlandkreis', land: 'Nordrhein-Westfalen'},
  { code: 'HST', city: 'Hansestadt Stralsund', kreis: 'Stadt Stralsund ', land: 'Mecklenburg-Vorpommern'},
  { code: 'HU', city: 'Hanau', kreis: 'Stadt Hanau, Main-Kinzig-Kreis', land: 'Hessen'},
  { code: 'HV', city: 'Havelberg', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
  { code: 'HVL', city: 'Havelland', kreis: 'Landkreis Havelland', land: 'Brandenburg'},
  { code: 'HWI', city: 'Hansestadt Wismar', kreis: 'Stadt Wismar ', land: 'Mecklenburg-Vorpommern'},
  { code: 'HX', city: 'Höxter', kreis: 'Kreis Höxter', land: 'Nordrhein-Westfalen'},
  { code: 'HY', city: 'Hoyerswerda', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'HZ', city: 'Harz', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
  { code: 'IGB', city: 'Ingbert', kreis: 'Stadt St. Ingbert ', land: 'Saarland'},
  { code: 'IK', city: 'Ilm-Kreis', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'IL', city: 'Ilmenau', kreis: 'Ilm-Kreis', land: 'Thüringen'},
  { code: 'ILL', city: 'Illertissen', kreis: 'Landkreis Neu-Ulm', land: 'Bayern'},
  { code: 'IN', city: 'Ingolstadt', kreis: 'Stadt Ingolstadt', land: 'Bayern'},
  { code: 'IZ', city: 'Itzehoe', kreis: 'Kreis Steinburg', land: 'Schleswig-Holstein'},
  { code: 'J', city: 'Jena', kreis: 'Stadt Jena', land: 'Thüringen'},
  { code: 'JE', city: 'Jessen', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
  { code: 'JL', city: 'Jerichower Land', kreis: 'Landkreis Jerichower Land', land: 'Sachsen-Anhalt'},
  { code: 'JÜL', city: 'Jülich', kreis: 'Kreis Düren', land: 'Nordrhein-Westfalen'},
  { code: 'K', city: 'Köln', kreis: 'Stadt Köln', land: 'Nordrhein-Westfalen'},
  { code: 'KA', city: 'Karlsruhe', kreis: 'Stadt Karlsruhe, Landkreis Karlsruhe', land: 'Baden-Württemberg'},
  { code: 'KB', city: 'Korbach', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'KC', city: 'Kronach', kreis: 'Landkreis Kronach', land: 'Bayern'},
  { code: 'KE', city: 'Kempten', kreis: 'Stadt Kempten (Allgäu)', land: 'Bayern'},
  { code: 'KEH', city: 'Kelheim', kreis: 'Landkreis Kelheim', land: 'Bayern'},
  { code: 'KEL', city: 'Kehl', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'KEM', city: 'Kemnath', kreis: 'Landkreis Bayreuth, Landkreis Tirschenreuth', land: 'Bayern'},
  { code: 'KF', city: 'Kaufbeuren', kreis: 'Stadt Kaufbeuren', land: 'Bayern'},
  { code: 'KG', city: 'Kissingen', kreis: 'Landkreis Bad Kissingen', land: 'Bayern'},
  { code: 'KH', city: 'Kreuznach', kreis: 'Landkreis Bad Kreuznach', land: 'Rheinland-Pfalz'},
  { code: 'KI', city: 'Kiel', kreis: 'Stadt Kiel', land: 'Schleswig-Holstein'},
  { code: 'KIB', city: 'Kirchheimbolanden', kreis: 'Donnersbergkreis', land: 'Rheinland-Pfalz'},
  { code: 'KK', city: 'Kempen, Krefeld', kreis: 'Kreis Viersen', land: 'Nordrhein-Westfalen'},
  { code: 'KL', city: 'Kaiserslautern', kreis: 'Stadt Kaiserslautern, Landkreis Kaiserslautern', land: 'Rheinland-Pfalz'},
  { code: 'KLE', city: 'Kleve', kreis: 'Kreis Kleve', land: 'Nordrhein-Westfalen'},
  { code: 'KLZ', city: 'Klötze', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
  { code: 'KM', city: 'Kamenz', kreis: 'Landkreis Bautzen', land: 'Sachsen'},
  { code: 'KN', city: 'Konstanz', kreis: 'Landkreis Konstanz ', land: 'Baden-Württemberg'},
  { code: 'KO', city: 'Koblenz', kreis: 'Stadt Koblenz', land: 'Rheinland-Pfalz'},
  { code: 'KÖN', city: 'Königshofen', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
  { code: 'KÖT', city: 'Köthen', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
  { code: 'KÖZ', city: 'Kötzting', kreis: 'Landkreis Cham', land: 'Bayern'},
  { code: 'KR', city: 'Krefeld', kreis: 'Stadt Krefeld', land: 'Nordrhein-Westfalen'},
  { code: 'KRU', city: 'Krumbach', kreis: 'Landkreis Günzburg', land: 'Bayern'},
  { code: 'KS', city: 'Kassel', kreis: 'Stadt Kassel, Landkreis Kassel', land: 'Hessen'},
  { code: 'KT', city: 'Kitzingen', kreis: 'Landkreis Kitzingen', land: 'Bayern'},
  { code: 'KU', city: 'Kulmbach', kreis: 'Landkreis Kulmbach', land: 'Bayern'},
  { code: 'KÜN', city: 'Künzelsau', kreis: 'Hohenlohekreis', land: 'Baden-Württemberg'},
  { code: 'KUS', city: 'Kusel', kreis: 'Landkreis Kusel', land: 'Rheinland-Pfalz'},
  { code: 'KW', city: 'Königs Wusterhausen', kreis: 'Landkreis Dahme-Spreewald', land: 'Brandenburg'},
  { code: 'KY', city: 'Kyritz', kreis: 'Landkreis Ostprignitz-Ruppin', land: 'Brandenburg'},
  { code: 'KYF', city: 'Kyffhäuser', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'L', city: 'Leipzig', kreis: 'Stadt Leipzig, Landkreis Leipzig', land: 'Sachsen'},
  { code: 'LA', city: 'Landshut', kreis: 'Stadt Landshut, Landkreis Landshut', land: 'Bayern'},
  { code: 'LAN', city: 'Landau', kreis: 'Landkreis Dingolfing-Landau', land: 'Bayern'},
  { code: 'LAU', city: 'Lauf', kreis: 'Landkreis Nürnberger Land', land: 'Bayern'},
  { code: 'LB', city: 'Ludwigsburg', kreis: 'Landkreis Ludwigsburg', land: 'Baden-Württemberg'},
  { code: 'LBS', city: 'Lobenstein', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'LBZ', city: 'Lübz', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'LC', city: 'Luckau', kreis: 'Landkreis Dahme-Spreewald', land: 'Brandenburg'},
  { code: 'LD', city: 'Landau', kreis: 'Stadt Landau in der Pfalz', land: 'Rheinland-Pfalz'},
  { code: 'LDK', city: 'Lahn-Dill-Kreis', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'LDS', city: 'Landkreis Dahme-Spreewald', kreis: 'Landkreis Dahme-Spreewald', land: 'Brandenburg'},
  { code: 'LEO', city: 'Leonberg', kreis: 'Landkreis Böblingen', land: 'Baden-Württemberg'},
  { code: 'LER', city: 'Leer', kreis: 'Landkreis Leer', land: 'Niedersachsen'},
  { code: 'LEV', city: 'Leverkusen', kreis: 'Stadt Leverkusen', land: 'Nordrhein-Westfalen'},
  { code: 'LF', city: 'Laufen', kreis: 'Landkreis Altötting, Landkreis Berchtesgadener Land, Landkreis Traunstein', land: 'Bayern'},
  { code: 'LG', city: 'Lüneburg', kreis: 'Landkreis Lüneburg', land: 'Niedersachsen'},
  { code: 'LH', city: 'Lüdinghausen', kreis: 'Kreis Coesfeld, Kreis Unna', land: 'Nordrhein-Westfalen'},
  { code: 'LI', city: 'Lindau', kreis: 'Landkreis Lindau (Bodensee)', land: 'Bayern'},
  { code: 'LIB', city: 'Liebenwerda', kreis: 'Landkreis Elbe-Elster', land: 'Brandenburg'},
  { code: 'LIF', city: 'Lichtenfels', kreis: 'Landkreis Lichtenfels', land: 'Bayern'},
  { code: 'LIP', city: 'Lippe', kreis: 'Kreis Lippe', land: 'Nordrhein-Westfalen'},
  { code: 'LL', city: 'Landsberg Am Lech', kreis: 'Landkreis Landsberg am Lech', land: 'Bayern'},
  { code: 'LM', city: 'Limburg', kreis: 'Landkreis Limburg-Weilburg', land: 'Hessen'},
  { code: 'LN', city: 'Lübben', kreis: 'Landkreis Dahme-Spreewald', land: 'Brandenburg'},
  { code: 'LÖ', city: 'Lörrach', kreis: 'Landkreis Lörrach', land: 'Baden-Württemberg'},
  { code: 'LÖB', city: 'Löbau', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'LOS', city: 'Landkreis Oder-Spree', kreis: 'Landkreis Oder-Spree', land: 'Brandenburg'},
  { code: 'LP', city: 'Lippstadt', kreis: 'Kreis Soest', land: 'Nordrhein-Westfalen'},
  { code: 'LR', city: 'Lahr', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'LRO', city: 'Landkreis Rostock', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'LSZ', city: 'Langensalza', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'LU', city: 'Ludwigshafen', kreis: 'Stadt Ludwigshafen am Rhein', land: 'Rheinland-Pfalz'},
  { code: 'LÜN', city: 'Lünen', kreis: 'Kreis Unna', land: 'Nordrhein-Westfalen'},
  { code: 'LUP', city: 'Ludwigslust, Parchim', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'LWL', city: 'Ludwigslust', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'M', city: 'München', kreis: 'Stadt München, Landkreis München', land: 'Bayern'},
  { code: 'MA', city: 'Mannheim', kreis: 'Stadt Mannheim', land: 'Baden-Württemberg'},
  { code: 'MAB', city: 'Marienberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'MAI', city: 'Mainburg', kreis: 'Landkreis Kelheim, Landkreis Landhut', land: 'Bayern'},
  { code: 'MAK', city: 'Marktredwitz', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
  { code: 'MAL', city: 'Mallersdorf', kreis: 'Landkreis Landshut, Landkreis Straubing-Bogen', land: 'Bayern'},
  { code: 'MB', city: 'Miesbach', kreis: 'Landkreis Miesbach', land: 'Bayern'},
  { code: 'MC', city: 'Malchin', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'MD', city: 'Magdeburg', kreis: 'Stadt Magdeburg', land: 'Sachsen-Anhalt'},
  { code: 'ME', city: 'Mettmann', kreis: 'Kreis Mettmann', land: 'Nordrhein-Westfalen'},
  { code: 'MED', city: 'Meldorf', kreis: 'Kreis Dithmarschen', land: 'Schleswig-Holstein'},
  { code: 'MEG', city: 'Melsungen', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'MEI', city: 'Meißen', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'MEK', city: 'Mittlerer Erzgebirgskreis', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'MEL', city: 'Melle', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'MER', city: 'Merseburg', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
  { code: 'MET', city: 'Mellrichstadt', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
  { code: 'MG', city: 'Mönchengladbach', kreis: 'Stadt Mönchengladbach', land: 'Nordrhein-Westfalen'},
  { code: 'MGH', city: 'Mergentheim', kreis: 'Main-Tauber-Kreis', land: 'Baden-Württemberg'},
  { code: 'MGN', city: 'Meiningen', kreis: 'Landkreis Schmalkalden-Meiningen', land: 'Thüringen'},
  { code: 'MH', city: 'Mülheim', kreis: 'Stadt Mülheim an der Ruhr', land: 'Nordrhein-Westfalen'},
  { code: 'MHL', city: 'Mühlhausen', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'MI', city: 'Minden', kreis: 'Kreis Minden-Lübbecke', land: 'Nordrhein-Westfalen'},
  { code: 'MIL', city: 'Miltenberg', kreis: 'Landkreis Miltenberg', land: 'Bayern'},
  { code: 'MK', city: 'Märkischer Kreis', kreis: 'Märkischer Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'MKK', city: 'Main-Kinzig-Kreis', kreis: 'Main-Kinzig-Kreis', land: 'Hessen'},
  { code: 'ML', city: 'Mansfelder Land', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
  { code: 'MM', city: 'Memmingen', kreis: 'Stadt Memmingen', land: 'Bayern'},
  { code: 'MN', city: 'Mindelheim', kreis: 'Landkreis Unterallgäu', land: 'Bayern'},
  { code: 'MO', city: 'Moers', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
  { code: 'MOD', city: 'Marktoberdorf', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
  { code: 'MOL', city: 'Märkisch-Oderland', kreis: 'Landkreis Märkisch-Oderland', land: 'Brandenburg'},
  { code: 'MON', city: 'Monschau', kreis: 'Städteregion Aachen, Kreis Düren', land: 'Nordrhein-Westfalen'},
  { code: 'MOS', city: 'Mosbach', kreis: 'Neckar-Odenwald-Kreis', land: 'Baden-Württemberg'},
  { code: 'MQ', city: 'Merseburg, Querfurt', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
  { code: 'MR', city: 'Marburg', kreis: 'Landkreis Marburg-Biedenkopf', land: 'Hessen'},
  { code: 'MS', city: 'Münster', kreis: 'Stadt Münster', land: 'Nordrhein-Westfalen'},
  { code: 'MSE', city: 'Mecklenburgische Seenplatte', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'MSH', city: 'Mansfeld, Südharz', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
  { code: 'MSP', city: 'Main, Spessart', kreis: 'Landkreis Main-Spessart', land: 'Bayern'},
  { code: 'MST', city: 'Mecklenburg-Strelitz', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
  { code: 'MTK', city: 'Main-Taunus-Kreis', kreis: 'Main-Taunus-Kreis', land: 'Hessen'},
  { code: 'MTL', city: 'Muldental', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'MUC', city: 'Muenchen', kreis: 'Stadt München', land: 'Bayern'},
  { code: 'MÜ', city: 'Mühldorf', kreis: 'Landkreis Mühldorf am Inn', land: 'Bayern'},
  { code: 'MÜB', city: 'Münchberg', kreis: 'Landkreis Bayreuth, Landkreis Hof', land: 'Bayern'},
  { code: 'MÜL', city: 'Müllheim', kreis: 'Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'MÜR', city: 'Müritz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'MW', city: 'Mittweida', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'MY', city: 'Mayen', kreis: 'Landkreis Mayen-Koblenz', land: 'Rheinland-Pfalz'},
  { code: 'MYK', city: 'Mayen, Koblenz', kreis: 'Landkreis Mayen-Koblenz', land: 'Rheinland-Pfalz'},
  { code: 'MZ', city: 'Mainz', kreis: 'Stadt Mainz, Landkreis Mainz-Bingen', land: 'Rheinland-Pfalz'},
  { code: 'MZG', city: 'Merzig', kreis: 'Landkreis Merzig-Wadern', land: 'Saarland'},
  { code: 'N', city: 'Nürnberg', kreis: 'Stadt Nürnberg, Landkreis Nürnberger Land', land: 'Bayern'},
  { code: 'NAB', city: 'Nabburg', kreis: 'Landkreis Amberg-Sulzbach, Landkreis Schwandorf', land: 'Bayern'},
  { code: 'NAI', city: 'Naila', kreis: 'Landkreis Hof', land: 'Bayern'},
  { code: 'NAU', city: 'Nauen', kreis: 'Landkreis Havelland', land: 'Brandenburg'},
  { code: 'NB', city: 'Neubrandenburg', kreis: 'Stadt Neubrandenburg ', land: 'Mecklenburg-Vorpommern'},
  { code: 'ND', city: 'Neuburg an der Donau', kreis: 'Landkreis Neuburg-Schrobenhausen', land: 'Bayern'},
  { code: 'NDH', city: 'Nordhausen', kreis: 'Landkreis Nordhausen', land: 'Thüringen'},
  { code: 'NE', city: 'Neuss', kreis: 'Rhein-Kreis Neuss', land: 'Nordrhein-Westfalen'},
  { code: 'NEA', city: 'Neustadt an der Aisch', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
  { code: 'NEB', city: 'Nebra', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'NEC', city: 'Neustadt bei Coburg', kreis: 'Stadt Coburg, Landkreis Coburg ', land: 'Bayern'},
  { code: 'NEN', city: 'Neunburg', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
  { code: 'NES', city: 'Neustadt an der Saale', kreis: 'Landkreis Rhön-Grabfeld', land: 'Bayern'},
  { code: 'NEU', city: 'Neustadt', kreis: 'Landkreis Breisgau-Hochschwarzwald', land: 'Baden-Württemberg'},
  { code: 'NEW', city: 'Neustadt an der Waldnaab', kreis: 'Landkreis Neustadt an der Waldnaab', land: 'Bayern'},
  { code: 'NF', city: 'Nordfriesland', kreis: 'Kreis Nordfriesland', land: 'Schleswig-Holstein'},
  { code: 'NH', city: 'Neuhaus', kreis: 'Landkreis Sonneberg', land: 'Thüringen'},
  { code: 'NI', city: 'Nienburg', kreis: 'Landkreis Nienburg/Weser', land: 'Niedersachsen'},
  { code: 'NK', city: 'Neunkirchen', kreis: 'Landkreis Neunkirchen', land: 'Saarland'},
  { code: 'NM', city: 'Neumarkt', kreis: 'Landkreis Neumarkt in der Oberpfalz', land: 'Bayern'},
  { code: 'NMB', city: 'Naumburg', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'NMS', city: 'Neumünster', kreis: 'Stadt Neumünster', land: 'Schleswig-Holstein'},
  { code: 'NÖ', city: 'Nördlingen', kreis: 'Landkreis Donau-Ries', land: 'Bayern'},
  { code: 'NOH', city: 'Nordhorn', kreis: 'Landkreis Grafschaft Bentheim', land: 'Niedersachsen'},
  { code: 'NOL', city: 'Niederschlesische Oberlausitz', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'NOM', city: 'Northeim', kreis: 'Landkreis Northeim', land: 'Niedersachsen'},
  { code: 'NOR', city: 'Norden', kreis: 'Landkreis Aurich', land: 'Niedersachsen'},
  { code: 'NP', city: 'Neuruppin', kreis: 'Landkreis Ostprignitz-Ruppin', land: 'Brandenburg'},
  { code: 'NR', city: 'Neuwied am Rhein', kreis: 'Landkreis Neuwied', land: 'Rheinland-Pfalz'},
  { code: 'NT', city: 'Nürtingen', kreis: 'Landkreis Esslingen', land: 'Baden-Württemberg'},
  { code: 'NU', city: 'Neu-Ulm', kreis: 'Landkreis Neu-Ulm', land: 'Bayern'},
  { code: 'NVP', city: 'Nordvorpommern', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
  { code: 'NW', city: 'Neustadt an der Weinstraße', kreis: 'Stadt Neustadt an der Weinstraße', land: 'Rheinland-Pfalz'},
  { code: 'NWM', city: 'Nordwestmecklenburg', kreis: 'Landkreis Nordwestmecklenburg ', land: 'Mecklenburg-Vorpommern'},
  { code: 'NY', city: 'Niesky', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'NZ', city: 'Neustrelitz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'OA', city: 'Oberallgäu', kreis: 'Landkreis Oberallgäu', land: 'Bayern'},
  { code: 'OAL', city: 'Ostallgäu', kreis: 'Landkreis Ostallgäu', land: 'Bayern'},
  { code: 'OB', city: 'Oberhausen', kreis: 'Stadt Oberhausen', land: 'Nordrhein-Westfalen'},
  { code: 'OBB', city: 'Obernburg', kreis: 'Landkreis Miltenberg', land: 'Bayern'},
  { code: 'OBG', city: 'Osterburg', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
  { code: 'OC', city: 'Oschersleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'OCH', city: 'Ochsenfurt', kreis: 'Landkreis Würzburg', land: 'Bayern'},
  { code: 'OD', city: 'Oldesloe', kreis: 'Kreis Stormarn', land: 'Schleswig-Holstein'},
  { code: 'OE', city: 'Olpe', kreis: 'Kreis Olpe', land: 'Nordrhein-Westfalen'},
  { code: 'OF', city: 'Offenbach', kreis: 'Stadt Offenbach am Main, Landkreis Offenbach', land: 'Hessen'},
  { code: 'OG', city: 'Offenburg', kreis: 'Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'OH', city: 'Ostholstein', kreis: 'Kreis Ostholstein', land: 'Schleswig-Holstein'},
  { code: 'OHA', city: 'Osterode am Harz', kreis: 'Landkreis Göttingen', land: 'Niedersachsen'},
  { code: 'ÖHR', city: 'Öhringen', kreis: 'Hohenlohekreis', land: 'Baden-Württemberg'},
  { code: 'OHV', city: 'Oberhavel', kreis: 'Landkreis Oberhavel', land: 'Brandenburg'},
  { code: 'OHZ', city: 'Osterholz', kreis: 'Landkreis Osterholz', land: 'Niedersachsen'},
  { code: 'OK', city: 'Ohrekreis', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'OL', city: 'Oldenburg', kreis: 'Stadt Oldenburg, Landkreis Oldenburg', land: 'Niedersachsen'},
  { code: 'OP', city: 'Opladen', kreis: 'Stadt Leverkusen', land: 'Nordrhein-Westfalen'},
  { code: 'OPR', city: 'Ostprignitz, Ruppin', kreis: 'Landkreis Ostprignitz-Ruppin', land: 'Brandenburg'},
  { code: 'OS', city: 'Osnabrück', kreis: 'Stadt Osnabrück, Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'OSL', city: 'Oberspreewald, Lausitz', kreis: 'Landkreis Oberspreewald-Lausitz', land: 'Brandenburg'},
  { code: 'OTW', city: 'Ottweiler', kreis: 'Landkreis Neunkirchen', land: 'Saarland'},
  { code: 'OVI', city: 'Oberviechtach', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
  { code: 'OVL', city: 'Obervogtland', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'OZ', city: 'Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'P', city: 'Potsdam', kreis: 'Stadt Potsdam', land: 'Brandenburg'},
  { code: 'PA', city: 'Passau', kreis: 'Stadt Passau, Landkreis Passau', land: 'Bayern'},
  { code: 'PAF', city: 'Pfaffenhofen', kreis: 'Landkreis Pfaffenhofen an der Ilm', land: 'Bayern'},
  { code: 'PAN', city: 'Pfarrkirchen', kreis: 'Landkreis Rottal-Inn', land: 'Bayern'},
  { code: 'PAR', city: 'Parsberg', kreis: 'Landkreis Kelheim, Landkreis Neumarkt in der Oberpfalz', land: 'Bayern'},
  { code: 'PB', city: 'Paderborn', kreis: 'Kreis Paderborn', land: 'Nordrhein-Westfalen'},
  { code: 'PCH', city: 'Parchim', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'PE', city: 'Peine', kreis: 'Landkreis Peine', land: 'Niedersachsen'},
  { code: 'PEG', city: 'Pegnitz', kreis: 'Landkreis Bayreuth, Landkreis Forchheim, Landkreis Nürnberger Land', land: 'Bayern'},
  { code: 'PF', city: 'Pforzheim', kreis: 'Stadt Pforzheim, Enzkreis', land: 'Baden-Württemberg'},
  { code: 'PI', city: 'Pinneberg', kreis: 'Kreis Pinneberg', land: 'Schleswig-Holstein'},
  { code: 'PIR', city: 'Pirna', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'PL', city: 'Plauen', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'PLÖ', city: 'Plön', kreis: 'Kreis Plön', land: 'Schleswig-Holstein'},
  { code: 'PM', city: 'Potsdam, Mittelmark', kreis: 'Landkreis Potsdam-Mittelmark', land: 'Brandenburg'},
  { code: 'PN', city: 'Pößneck', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'PR', city: 'Prignitz', kreis: 'Landkreis Prignitz', land: 'Brandenburg'},
  { code: 'PRÜ', city: 'Prüm', kreis: 'Eifelkreis Bitburg-Prüm', land: 'Rheinland-Pfalz'},
  { code: 'PS', city: 'Pirmasens', kreis: 'Stadt Pirmasens, Landkreis Südwestpfalz', land: 'Rheinland-Pfalz'},
  { code: 'PW', city: 'Pasewalk', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
  { code: 'PZ', city: 'Prenzlau', kreis: 'Landkreis Uckermark', land: 'Brandenburg'},
  { code: 'QFT', city: 'Querfurt', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
  { code: 'QLB', city: 'Quedlinburg', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
  { code: 'R', city: 'Regensburg', kreis: 'Stadt Regensburg,Landkreis Regensburg', land: 'Bayern'},
  { code: 'RA', city: 'Rastatt', kreis: 'Landkreis Rastatt', land: 'Baden-Württemberg'},
  { code: 'RC', city: 'Reichenbach', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'RD', city: 'Rendsburg', kreis: 'Kreis Rendsburg-Eckernförde', land: 'Schleswig-Holstein'},
  { code: 'RDG', city: 'Ribnitz-Damgarten', kreis: 'Landkreis Vorpommern-Rügen', land: 'Mecklenburg-Vorpommern'},
  { code: 'RE', city: 'Recklinghausen', kreis: 'Kreis Recklinghausen', land: 'Nordrhein-Westfalen'},
  { code: 'REG', city: 'Regen', kreis: 'Landkreis Regen', land: 'Bayern'},
  { code: 'REH', city: 'Rehau', kreis: 'Landkreis Hof, Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
  { code: 'REI', city: 'Reichenhall', kreis: 'Landkreis Berchtesgadener Land', land: 'Bayern'},
  { code: 'RG', city: 'Riesa, Großenhain', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'RH', city: 'Roth', kreis: 'Landkreis Roth', land: 'Bayern'},
  { code: 'RI', city: 'Rinteln', kreis: 'Landkreis Schaumburg', land: 'Niedersachsen'},
  { code: 'RID', city: 'Riedenburg', kreis: 'Landkreis Kelheim', land: 'Bayern'},
  { code: 'RIE', city: 'Riesa', kreis: 'Landkreis Meißen', land: 'Sachsen'},
  { code: 'RL', city: 'Rochlitz', kreis: 'Landkreis Mittelsachsen', land: 'Sachsen'},
  { code: 'RM', city: 'Röbel/Müritz', kreis: 'Landkreis Mecklenburgische Seenplatte ', land: 'Mecklenburg-Vorpommern'},
  { code: 'RN', city: 'Rathenow', kreis: 'Landkreis Havelland', land: 'Brandenburg'},
  { code: 'RO', city: 'Rosenheim', kreis: 'Stadt Rosenheim, Landkreis Rosenheim', land: 'Bayern'},
  { code: 'ROD', city: 'Roding', kreis: 'Landkreis Cham', land: 'Bayern'},
  { code: 'ROF', city: 'Rotenburg an der Fulda', kreis: 'Landkreis Hersfeld-Rotenburg', land: 'Hessen'},
  { code: 'ROK', city: 'Rockenhausen', kreis: 'Donnersbergkreis', land: 'Rheinland-Pfalz'},
  { code: 'ROL', city: 'Rottenburg an der Laaber', kreis: 'Landkreis Kelheim, Landkreis Landshut', land: 'Bayern'},
  { code: 'ROS', city: 'Rostock', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'ROT', city: 'Rothenburg ob der Tauber', kreis: 'Landkreis Ansbach', land: 'Bayern'},
  { code: 'ROW', city: 'Rotenburg (Wümme)', kreis: 'Landkreis Rotenburg (Wümme)', land: 'Niedersachsen'},
  { code: 'RP', city: 'Rhein-Pfalz', kreis: 'Rhein-Pfalz-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'RS', city: 'Remscheid', kreis: 'Stadt Remscheid', land: 'Nordrhein-Westfalen'},
  { code: 'RSL', city: 'Rosslau', kreis: 'Stadt Dessau-Roßlau', land: 'Sachsen-Anhalt'},
  { code: 'RT', city: 'Reutlingen', kreis: 'Landkreis Reutlingen', land: 'Baden-Württemberg'},
  { code: 'RU', city: 'Rudolstadt', kreis: 'Landkreis Saalfeld-Rudolstadt', land: 'Thüringen'},
  { code: 'RÜD', city: 'Rüdesheim', kreis: 'Rheingau-Taunus-Kreis', land: 'Hessen'},
  { code: 'RÜG', city: 'Rügen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
  { code: 'RV', city: 'Ravensburg', kreis: 'Landkreis Ravensburg', land: 'Baden-Württemberg'},
  { code: 'RW', city: 'Rottweil', kreis: 'Landkreis Rottweil', land: 'Baden-Württemberg'},
  { code: 'RZ', city: 'Ratzeburg', kreis: 'Kreis Herzogtum Lauenburg', land: 'Schleswig-Holstein'},
  { code: 'S', city: 'Stuttgart', kreis: 'Stadt Stuttgart', land: 'Baden-Württemberg'},
  { code: 'SAB', city: 'Saarburg', kreis: 'Landkreis Trier-Saarburg', land: 'Rheinland-Pfalz'},
  { code: 'SAD', city: 'Schwandorf', kreis: 'Landkreis Schwandorf', land: 'Bayern'},
  { code: 'SÄK', city: 'Säckingen', kreis: 'Landkreis Waldshut', land: 'Baden-Württemberg'},
  { code: 'SAN', city: 'Stadtsteinach', kreis: 'Landkreis Hof, Landkreis Kronach, Landkreis Kulmbach', land: 'Bayern'},
  { code: 'SAW', city: 'Salzwedel', kreis: 'Altmarkkreis Salzwedel', land: 'Sachsen-Anhalt'},
  { code: 'SB', city: 'Saarbrücken', kreis: 'Regionalverband Saarbrücken', land: 'Saarland'},
  { code: 'SBG', city: 'Strasburg', kreis: 'Landkreis Vorpommern-Greifswald', land: 'Mecklenburg-Vorpommern'},
  { code: 'SBK', city: 'Schönebeck', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'SC', city: 'Schwabach', kreis: 'Stadt Schwabach', land: 'Bayern'},
  { code: 'SCZ', city: 'Schleiz', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'SDH', city: 'Sondershausen', kreis: 'Kyffhäuserkreis', land: 'Thüringen'},
  { code: 'SDL', city: 'Stendal', kreis: 'Landkreis Stendal', land: 'Sachsen-Anhalt'},
  { code: 'SDT', city: 'Schwedt', kreis: 'Landkreis Uckermark', land: 'Brandenburg'},
  { code: 'SE', city: 'Segeberg', kreis: 'Kreis Segeberg', land: 'Schleswig-Holstein'},
  { code: 'SEB', city: 'Sebnitz', kreis: 'Landkreis Sächsische Schweiz-Osterzgebirge', land: 'Sachsen'},
  { code: 'SEE', city: 'Seelow', kreis: 'Landkreis Märkisch-Oderland', land: 'Brandenburg'},
  { code: 'SEF', city: 'Scheinfeld', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
  { code: 'SEL', city: 'Selb', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
  { code: 'SFB', city: 'Senftenberg', kreis: 'Landkreis Oberspreewald-Lausitz', land: 'Brandenburg'},
  { code: 'SFT', city: 'Staßfurt', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'SG', city: 'Solingen', kreis: 'Stadt Solingen', land: 'Nordrhein-Westfalen'},
  { code: 'SGH', city: 'Sangerhausen', kreis: 'Landkreis Mansfeld-Südharz', land: 'Sachsen-Anhalt'},
  { code: 'SHA', city: 'Schwäbisch Hall', kreis: 'Landkreis Schwäbisch Hall', land: 'Baden-Württemberg'},
  { code: 'SHG', city: 'Stadthagen', kreis: 'Landkreis Schaumburg', land: 'Niedersachsen'},
  { code: 'SHK', city: 'Saale-Holzland-Kreis', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'SHL', city: 'Suhl', kreis: 'Stadt Suhl', land: 'Thüringen'},
  { code: 'SI', city: 'Siegen', kreis: 'Kreis Siegen-Wittgenstein', land: 'Nordrhein-Westfalen'},
  { code: 'SIG', city: 'Sigmaringen', kreis: 'Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'SIM', city: 'Simmern', kreis: 'Rhein-Hunsrück-Kreis', land: 'Rheinland-Pfalz'},
  { code: 'SK', city: 'Saalekreis', kreis: 'Saalekreis', land: 'Sachsen-Anhalt'},
  { code: 'SL', city: 'Schleswig', kreis: 'Kreis Schleswig-Flensburg', land: 'Schleswig-Holstein'},
  { code: 'SLE', city: 'Schleiden', kreis: 'Kreis Düren, Kreis Euskirchen', land: 'Nordrhein-Westfalen'},
  { code: 'SLF', city: 'Saalfeld', kreis: 'Landkreis Saalfeld-Rudolstadt', land: 'Thüringen'},
  { code: 'SLG', city: 'Saulgau', kreis: 'Landkreis Ravensburg, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'SLK', city: 'Salzlandkreis', kreis: 'Salzlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'SLN', city: 'Schmölln', kreis: 'Landkreis Altenburger Land', land: 'Thüringen'},
  { code: 'SLS', city: 'Saarlouis', kreis: 'Landkreis Saarlouis', land: 'Saarland'},
  { code: 'SLÜ', city: 'Schlüchtern', kreis: 'Main-Kinzig-Kreis', land: 'Hessen'},
  { code: 'SLZ', city: 'Salzungen', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'SM', city: 'Schmalkalden', kreis: 'Landkreis Schmalkalden-Meiningen', land: 'Thüringen'},
  { code: 'SMÜ', city: 'Schwabmünchen', kreis: 'Landkreis Augsburg', land: 'Bayern'},
  { code: 'SN', city: 'Schwerin', kreis: 'Stadt Schwerin', land: 'Mecklenburg-Vorpommern'},
  { code: 'SO', city: 'Soest', kreis: 'Kreis Soest', land: 'Nordrhein-Westfalen'},
  { code: 'SOB', city: 'Schrobenhausen', kreis: 'Landkreis Neuburg-Schrobenhausen', land: 'Bayern'},
  { code: 'SOG', city: 'Schongau', kreis: 'Landkreis Weilheim-Schongau', land: 'Bayern'},
  { code: 'SOK', city: 'Saale-Orla-Kreis', kreis: 'Saale-Orla-Kreis', land: 'Thüringen'},
  { code: 'SÖM', city: 'Sömmerda', kreis: 'Landkreis Sömmerda', land: 'Thüringen'},
  { code: 'SON', city: 'Sonneberg', kreis: 'Landkreis Sonneberg', land: 'Thüringen'},
  { code: 'SP', city: 'Speyer', kreis: 'Stadt Speyer', land: 'Rheinland-Pfalz'},
  { code: 'SPB', city: 'Spremberg', kreis: 'Landkreis Spree-Neiße', land: 'Brandenburg'},
  { code: 'SPN', city: 'Spree, Neiße', kreis: 'Landkreis Spree-Neiße', land: 'Brandenburg'},
  { code: 'SR', city: 'Straubing', kreis: 'Stadt Straubing, Landkreis Straubing-Bogen', land: 'Bayern'},
  { code: 'SRB', city: 'Strausberg', kreis: 'Landkreis Märkisch-Oderland', land: 'Brandenburg'},
  { code: 'SRO', city: 'Stadtroda', kreis: 'Saale-Holzland-Kreis', land: 'Thüringen'},
  { code: 'ST', city: 'Steinfurt', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
  { code: 'STA', city: 'Starnberg', kreis: 'Landkreis Starnberg', land: 'Bayern'},
  { code: 'STB', city: 'Sternberg', kreis: 'Landkreis Ludwigslust-Parchim', land: 'Mecklenburg-Vorpommern'},
  { code: 'STD', city: 'Stade', kreis: 'Landkreis Stade', land: 'Niedersachsen'},
  { code: 'STE', city: 'Staffelstein', kreis: 'Landkreis Lichtenfels', land: 'Bayern'},
  { code: 'STL', city: 'Stollberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'STO', city: 'Stockach', kreis: 'Landkreis Konstanz, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'SU', city: 'Siegburg', kreis: 'Rhein-Sieg-Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'SUL', city: 'Sulzbach-Rosenberg', kreis: 'Landkreis Amberg-Sulzbach', land: 'Bayern'},
  { code: 'SÜW', city: 'Südliche Weinstraße', kreis: 'Landkreis Südliche Weinstraße', land: 'Rheinland-Pfalz'},
  { code: 'SW', city: 'Schweinfurt', kreis: 'Stadt Schweinfurt, Landkreis Schweinfurt', land: 'Bayern'},
  { code: 'SWA', city: 'Schwalbach', kreis: 'Rheingau-Taunus-Kreis', land: 'Hessen'},
  { code: 'SY', city: 'Syke', kreis: 'Landkreis Diepholz', land: 'Niedersachsen'},
  { code: 'SZ', city: 'Salzgitter', kreis: 'Stadt Salzgitter', land: 'Niedersachsen'},
  { code: 'SZB', city: 'Schwarzenberg', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'TBB', city: 'Tauberbischofsheim', kreis: 'Main-Tauber-Kreis', land: 'Baden-Württemberg'},
  { code: 'TDO', city: 'Torgau, Delitzsch, Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'TE', city: 'Tecklenburg', kreis: 'Kreis Steinfurt', land: 'Nordrhein-Westfalen'},
  { code: 'TET', city: 'Teterow', kreis: 'Landkreis Rostock', land: 'Mecklenburg-Vorpommern'},
  { code: 'TF', city: 'Teltow, Fläming', kreis: 'Landkreis Teltow-Fläming', land: 'Brandenburg'},
  { code: 'TG', city: 'Torgau', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'TIR', city: 'Tirschenreuth', kreis: 'Landkreis Tirschenreuth', land: 'Bayern'},
  { code: 'TO', city: 'Torgau, Oschatz', kreis: 'Landkreis Nordsachsen', land: 'Sachsen'},
  { code: 'TÖL', city: 'Tölz', kreis: 'Landkreis Bad Tölz-Wolfratshausen', land: 'Bayern'},
  { code: 'TP', city: 'Templin', kreis: 'Landkreis Uckermark', land: 'Brandenburg'},
  { code: 'TR', city: 'Trier', kreis: 'Stadt Trier, Landkreis Trier-Saarburg', land: 'Rheinland-Pfalz'},
  { code: 'TS', city: 'Traunstein', kreis: 'Landkreis Traunstein', land: 'Bayern'},
  { code: 'TT', city: 'Tettnang', kreis: 'Bodenseekreis', land: 'Baden-Württemberg'},
  { code: 'TÜ', city: 'Tübingen', kreis: 'Landkreis Tübingen', land: 'Baden-Württemberg'},
  { code: 'TUT', city: 'Tuttlingen', kreis: 'Landkreis Tuttlingen', land: 'Baden-Württemberg'},
  { code: 'ÜB', city: 'Überlingen', kreis: 'Bodenseekreis, Landkreis Ravensburg, Landkreis Sigmaringen', land: 'Baden-Württemberg'},
  { code: 'UE', city: 'Uelzen', kreis: 'Landkreis Uelzen', land: 'Niedersachsen'},
  { code: 'UEM', city: 'Ueckermünde', kreis: 'Landkreis Vorpommern-Greifswald', land: 'Mecklenburg-Vorpommern'},
  { code: 'UFF', city: 'Uffenheim', kreis: 'Landkreis Neustadt an der Aisch-Bad Windsheim', land: 'Bayern'},
  { code: 'UH', city: 'Unstrut, Hainich', kreis: 'Unstrut-Hainich-Kreis', land: 'Thüringen'},
  { code: 'UL', city: 'Ulm', kreis: 'Stadt Ulm, Alb-Donau-Kreis', land: 'Baden-Württemberg'},
  { code: 'UM', city: 'Uckermark', kreis: 'Landkreis Uckermark', land: 'Brandenburg'},
  { code: 'UN', city: 'Unna', kreis: 'Kreis Unna', land: 'Nordrhein-Westfalen'},
  { code: 'USI', city: 'Usingen', kreis: 'Hochtaunuskreis', land: 'Hessen'},
  { code: 'V', city: 'Vogtland', kreis: 'Vogtlandkreis', land: 'Sachsen'},
  { code: 'VAI', city: 'Vaihingen', kreis: 'Landkreis Ludwigsburg', land: 'Baden-Württemberg'},
  { code: 'VB', city: 'Vogelsberg', kreis: 'Vogelsbergkreis', land: 'Hessen'},
  { code: 'VEC', city: 'Vechta', kreis: 'Landkreis Vechta', land: 'Niedersachsen'},
  { code: 'VER', city: 'Verden', kreis: 'Landkreis Verden', land: 'Niedersachsen'},
  { code: 'VG', city: 'Vorpommern, Greifswald', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
  { code: 'VIB', city: 'Vilsbiburg', kreis: 'Landkreis Landshut, Landkreis Mühldorf a.Inn, Landkreis Rottal-Inn', land: 'Bayern'},
  { code: 'VIE', city: 'Viersen', kreis: 'Kreis Viersen', land: 'Nordrhein-Westfalen'},
  { code: 'VIT', city: 'Viechtach', kreis: 'Landkreis Regen', land: 'Bayern'},
  { code: 'VK', city: 'Völklingen', kreis: 'Stadt Völklingen ', land: 'Saarland'},
  { code: 'VOH', city: 'Vohenstrauß', kreis: 'Landkreis Neustadt an der Waldnaab', land: 'Bayern'},
  { code: 'VR', city: 'Vorpommern, Rügen', kreis: 'Landkreis Vorpommern-Rügen ', land: 'Mecklenburg-Vorpommern'},
  { code: 'VS', city: 'Villingen-Schwenningen', kreis: 'Schwarzwald-Baar-Kreis', land: 'Baden-Württemberg'},
  { code: 'W', city: 'Wuppertal', kreis: 'Stadt Wuppertal', land: 'Nordrhein-Westfalen'},
  { code: 'WA', city: 'Waldeck', kreis: 'Landkreis Waldeck-Frankenberg', land: 'Hessen'},
  { code: 'WAF', city: 'Warendorf', kreis: 'Kreis Warendorf', land: 'Nordrhein-Westfalen'},
  { code: 'WAK', city: 'Wartburgkreis', kreis: 'Wartburgkreis', land: 'Thüringen'},
  { code: 'WAN', city: 'Wanne', kreis: 'Stadt Herne', land: 'Nordrhein-Westfalen'},
  { code: 'WAR', city: 'Warburg', kreis: 'Kreis Höxter', land: 'Nordrhein-Westfalen'},
  { code: 'WAT', city: 'Wattenscheid', kreis: 'Stadt Bochum', land: 'Nordrhein-Westfalen'},
  { code: 'WB', city: 'Wittenberg', kreis: 'Landkreis Wittenberg', land: 'Sachsen-Anhalt'},
  { code: 'WBS', city: 'Worbis', kreis: 'Landkreis Eichsfeld', land: 'Thüringen'},
  { code: 'WDA', city: 'Werdau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'WE', city: 'Weimar', kreis: 'Stadt Weimar', land: 'Thüringen'},
  { code: 'WEL', city: 'Weilburg', kreis: 'Landkreis Limburg-Weilburg', land: 'Hessen'},
  { code: 'WEN', city: 'Weiden', kreis: 'Stadt Weiden in der Oberpfalz', land: 'Bayern'},
  { code: 'WER', city: 'Wertingen', kreis: 'Landkreis Augsburg, Landkreis Dillingen an der Donau', land: 'Bayern'},
  { code: 'WES', city: 'Wesel', kreis: 'Kreis Wesel', land: 'Nordrhein-Westfalen'},
  { code: 'WF', city: 'Wolfenbüttel', kreis: 'Landkreis Wolfenbüttel', land: 'Niedersachsen'},
  { code: 'WG', city: 'Wangen', kreis: 'Landkreis Ravensburg', land: 'Baden-Württemberg'},
  { code: 'WHV', city: 'Wilhelmshaven', kreis: 'Stadt Wilhelmshaven', land: 'Niedersachsen'},
  { code: 'WI', city: 'Wiesbaden', kreis: 'Stadt Wiesbaden', land: 'Hessen'},
  { code: 'WIL', city: 'Wittlich', kreis: 'Landkreis Bernkastel-Wittlich', land: 'Rheinland-Pfalz'},
  { code: 'WIS', city: 'Wismar', kreis: 'Landkreis Nordwestmecklenburg', land: 'Mecklenburg-Vorpommern'},
  { code: 'WIT', city: 'Witten', kreis: 'Ennepe-Ruhr-Kreis', land: 'Nordrhein-Westfalen'},
  { code: 'WIZ', city: 'Witzenhausen', kreis: 'Werra-Meißner-Kreis', land: 'Hessen'},
  { code: 'WK', city: 'Wittstock', kreis: 'Landkreis Ostprignitz-Ruppin', land: 'Brandenburg'},
  { code: 'WL', city: 'Winsen (Luhe)', kreis: 'Landkreis Harburg', land: 'Niedersachsen'},
  { code: 'WLG', city: 'Wolgast', kreis: 'Landkreis Vorpommern-Greifswald ', land: 'Mecklenburg-Vorpommern'},
  { code: 'WM', city: 'Weilheim', kreis: 'Landkreis Weilheim-Schongau', land: 'Bayern'},
  { code: 'WMS', city: 'Wolmirstedt', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'WN', city: 'Waiblingen', kreis: 'Rems-Murr-Kreis', land: 'Baden-Württemberg'},
  { code: 'WND', city: 'Wendel', kreis: 'Landkreis St. Wendel', land: 'Saarland'},
  { code: 'WO', city: 'Worms', kreis: 'Stadt Worms', land: 'Rheinland-Pfalz'},
  { code: 'WOB', city: 'Wolfsburg', kreis: 'Stadt Wolfsburg', land: 'Niedersachsen'},
  { code: 'WOH', city: 'Wolfhagen', kreis: 'Landkreis Kassel', land: 'Hessen'},
  { code: 'WOL', city: 'Wolfach', kreis: 'Landkreis Freudenstadt, Ortenaukreis', land: 'Baden-Württemberg'},
  { code: 'WOR', city: 'Wolfratshausen', kreis: 'Landkreis Bad Tölz-Wolfratshausen, Landkreis München, Landkreis Starnberg', land: 'Bayern'},
  { code: 'WOS', city: 'Wolfstein', kreis: 'Landkreis Freyung-Grafenau', land: 'Bayern'},
  { code: 'WR', city: 'Wernigerode', kreis: 'Landkreis Harz', land: 'Sachsen-Anhalt'},
  { code: 'WRN', city: 'Waren', kreis: 'Landkreis Mecklenburgische Seenplatte', land: 'Mecklenburg-Vorpommern'},
  { code: 'WS', city: 'Wasserburg', kreis: 'Landkreis Mühldorf a.Inn', land: 'Bayern'},
  { code: 'WSF', city: 'Weissenfels', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
  { code: 'WST', city: 'Westerstede', kreis: 'Landkreis Ammerland', land: 'Niedersachsen'},
  { code: 'WSW', city: 'Weisswasser', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'WT', city: 'Waldshut', kreis: 'Landkreis Waldshut', land: 'Baden-Württemberg'},
  { code: 'WTL', city: 'Wittlage', kreis: 'Landkreis Osnabrück', land: 'Niedersachsen'},
  { code: 'WTM', city: 'Wittmund', kreis: 'Landkreis Wittmund', land: 'Niedersachsen'},
  { code: 'WÜ', city: 'Würzburg', kreis: 'Stadt Würzburg, Landkreis Würzburg', land: 'Bayern'},
  { code: 'WUG', city: 'Weißenburg', kreis: 'Landkreis Weißenburg-Gunzenhausen', land: 'Bayern'},
  { code: 'WÜM', city: 'Waldmünchen', kreis: 'Landkreis Cham', land: 'Bayern'},
  { code: 'WUN', city: 'Wunsiedel', kreis: 'Landkreis Wunsiedel im Fichtelgebirge', land: 'Bayern'},
  { code: 'WUR', city: 'Wurzen', kreis: 'Landkreis Leipzig', land: 'Sachsen'},
  { code: 'WW', city: 'Westerwald', kreis: 'Westerwaldkreis', land: 'Rheinland-Pfalz'},
  { code: 'WZ', city: 'Wetzlar', kreis: 'Lahn-Dill-Kreis', land: 'Hessen'},
  { code: 'WZL', city: 'Wanzleben', kreis: 'Landkreis Börde', land: 'Sachsen-Anhalt'},
  { code: 'Z', city: 'Zwickau', kreis: 'Landkreis Zwickau', land: 'Sachsen'},
  { code: 'ZE', city: 'Zerbst', kreis: 'Landkreis Anhalt-Bitterfeld', land: 'Sachsen-Anhalt'},
  { code: 'ZEL', city: 'Zell', kreis: 'Landkreis Cochem-Zell', land: 'Rheinland-Pfalz'},
  { code: 'ZI', city: 'Zittau', kreis: 'Landkreis Görlitz', land: 'Sachsen'},
  { code: 'ZIG', city: 'Ziegenhain', kreis: 'Schwalm-Eder-Kreis', land: 'Hessen'},
  { code: 'ZP', city: 'Zschopau', kreis: 'Erzgebirgskreis', land: 'Sachsen'},
  { code: 'ZR', city: 'Zeulenroda', kreis: 'Landkreis Greiz', land: 'Thüringen'},
  { code: 'ZW', city: 'Zweibrücken', kreis: 'Stadt Zweibrücken, Landkreis Südwestpfalz', land: 'Rheinland-Pfalz'},
  { code: 'ZZ', city: 'Zeitz', kreis: 'Burgenlandkreis', land: 'Sachsen-Anhalt'},
];

let currentPlate = {};

function getRandomLicensePlate() {
    const selectedArea = localStorage.getItem('selectedArea');
    const imageContainer = document.getElementById('image-container');
    imageContainer.textContent = "";

    const filteredPlates = licensePlates.filter(plate => plate.land === selectedArea);

    if (filteredPlates.length === 0) {
        document.getElementById('result').innerText = 'No license plates available for this area.';
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredPlates.length);
    const currentPlate = filteredPlates[randomIndex];

    document.getElementById('guess').value = '';
    document.getElementById('result').innerText = '';

    drawLicensePlate(currentPlate.code, currentPlate.land);

    document.getElementById('guess').style.display = 'inline';
    const einreichenButton = document.querySelector('button[onclick="checkGuess()"]');

    if (einreichenButton) {
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

document.addEventListener('DOMContentLoaded', function() {
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function updatePage(area) {
        var contentSections = document.getElementsByClassName('content-section');
        for (var i = 0; i < contentSections.length; i++) {
            contentSections[i].style.display = 'none';
        }

        var selectedContent = document.getElementById(area + '-content');
        if (selectedContent) {
            selectedContent.style.display = 'block';
            document.title = area + "s Trainer";
            document.getElementById('favicon').href = '../images/icons/pages/' + area + '.png';
        } else {
            document.getElementById('content').innerHTML = '<p>Content not found.</p>';
        }
    }

    const area = getQueryParameter('area') || localStorage.getItem('selectedArea');
    if (area) {
        updatePage(area);
    }
});

getRandomLicensePlate();
