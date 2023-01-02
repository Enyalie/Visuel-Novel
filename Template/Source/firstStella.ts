namespace Template {
  export async function firstStella(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene Stella starting");

    console.log("first Scene Stella starting");

    await ƒS.Location.show(locations.citySteampunk);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(5);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
    await ƒS.update();
    await ƒS.Speech.tell(characters.stella, "Oh ihr Götter wie das duftet und sind das etwa frische Pilze aaaah och nein wie süß ein Kürbis und ist das etwa");
    //sound einspielen, hatten wir bisher noch nicht
    await ƒS.Speech.tell(characters.stella, "Oh tut mir leid, ähm, ich-ich räume das sofort wieder auf.");
    await ƒS.Speech.tell(characters.barkeeper, "Machen Sie sich keine Sorgen junge Frau, das passiert schon mal");
    await ƒS.Speech.tell(characters.stella, "Ähm, es tut mir dennoch unfassbar leid. Stella übrigens. Und du bist?");
    //Pose pease einspielen und wieder zurück zu Pose normal
    dataForSave.nameBarkeeper = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sehr erfreut,Ich bin" + " " + dataForSave.nameBarkeeper + "" + "der Barkeeper  dieses kleinen Ambientes", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Stella, sagen sie mir, darf ich ihnen etwas zum trinken anbieten?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "„Hmmmmmmm, trinken hmmm, sie haben so viel auf ihrer Karte, was soll ich nur. Okay Okay wie wärs. ");
    await ƒS.Speech.tell(characters.stella, "Aaaaaaah ich habs");
    await ƒS.Speech.tell(characters.stella, "Überraschen sie mich");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun aber langsam, ich kenne sie doch kaum, wie soll ich ihnen da etwas Empfehlen.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dennoch Sie sind bestimmt durstig, also sollte mir einen Hinweis reichen.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagen sie mir bitte ihre Lieblingsblume", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Öhm meine lieblingsblume hmmmm. Ich denke die Kirschblüte");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Die Schönheits des Lebens in seiner Zerbrechlichkeit also", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In diesem fall, ja genau würde ich ihnen folgendes Empfehlen.", true, "spieler");
    //await  ƒS.Speech.setTickerDelays(_letter20,characters.stella, "hey hey hey hey");

    let drinkempfehlung = {
      iPickBier: "Bier",
      iPickTequilaSunrise: "TequilaSunrise",
      iPickDrachenwhiksy: "Drachenwhisky"
    };

    let dialogueElement = await ƒS.Menu.getInput(drinkempfehlung, "choicesCSSClass");



    switch (dialogueElement) {
      //Path Bier
      case drinkempfehlung.iPickBier:
        console.log("Case Bier ab jetzt abspielen.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke für sie, ja genau einmal ein Zwergenfeuer unser Haus Bier. ", true, "spieler");
        //Stella Fragezeichen über dem Kopf anzeigen lassen
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ist etwas nicht Inordnung miss?", true, "spieler");
        //Stella erschrocken anzeigen
        await ƒS.Speech.tell(characters.stella, "Ähm doch doch sorry, es ist nur. Was ist das?");
        //Einbledung Bierflasche mit Zwergenbild
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Meinen Sie etwa den Zwerg?", true, "spieler");
        ƒS.Speech.setTickerDelays(200);
        await ƒS.Speech.tell(characters.stella, "Z-w-e-r-g");
        ƒS.Speech.setTickerDelays(20);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In Gedanken:Ist es wirklich möglich bisher noch nie etwas von Zwergen gehört zu haben? ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun ja, ähm wie beschreibe ich Ihnen das am besten", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Zwerge sind Meister der Schmiede, es gibt kein Feuer das für sie zu heiß  und keinen Stein der für sie zu hart ist.", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ebenfalls legen sie viel Wert auf ihre Bärte. Das Beeindruckendste an ihnen ist, aber vor allem ihre Feier Kunst. ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Riesenfeste mit Maßen an Bier und Fleisch. Grade ihr Pökel Fleisch ist legendär.", true, "spieler");
        //Sprachausgabe anpassen, sehr schnell bei Stella gleich
        await ƒS.Speech.tell(characters.stella, "Oooh das klingt ja wundervoll, wo kann ich solche Zwerge antreffen und dieses Bakel Fleisch probieren.");
        await ƒS.Speech.tell(characters.stella, "Ich muss sie einfach sehen, jetzt wo sie mir so viel von ihnen Erzählt haben, bitte ");
        await ƒS.Speech.tell(characters.stella, "bitte, bitte, bitte, bitte bitte bitte Sie müssen mir sagen wo ich sie finde.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also wenn sie wirklich Zwerge sehen wollen, dann, müssen sie nach Norden zu dem einsamen Berg reisen", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Der einsame Berg also….ich danke ihnen vielmals");
        //Satz langsam einpielen, dann verzögert und nach punkten schnell
        await ƒS.Speech.tell(characters.narrator, "Stella springt wie ein Wirbelwind auf uns verlässt die Bar…..ohne zu ");
        break;

      //Path Tequila Sunrise
      case drinkempfehlung.iPickTequilaSunrise:
        console.log("Path Tequila Sunrise ab jetzt abspielen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In dem fall, denke ich bestimmt das ich sie damit begeistern kann", true, "spieler");
        //Bild Tequila Sunrise einspielen
        await ƒS.Speech.tell(characters.stella, "Uuuuuh schmeckt das süß und diese Farbe, wie ein Sonnenuntergang");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "eigentlich soll es einen Sonnenaufgang Symbolisieren", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wissen Sie. Jedes Mal, wenn ich diesen Cocktail mache, denke ich an meinen letzten Strandurlaub zurück und erinnere mich ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "an das Lila und Organe, das langsam die letzten Schatten der Nacht am Horizont durchbricht.", true, "spieler");
        //Lachen Einspielen, Goldroger maybe
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es tut mir furchtbar leid, ich muss sie bestimmt langweilen.", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Nein überhaupt nicht, bitte erzählen Sie mir mehr");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So viel mehr gibt es gar nicht, das alles ist schon eine Weile her, damals war ich selbst noch Abenteuer und bereiste die Welt", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Wieso tuen sie es jetzt nicht mehr? Was hält sie davon ab");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach weißt du, da war ein Kampf und ein Pfeil und seit dem, hach ja jeder wird Irgendwann mal sesshaft", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ich nicht niemals! Wie könnte ich auch, es gibt soviel unglaubliches zu sehen gibt. ");
        await ƒS.Speech.tell(characters.stella, "Diese Welt ist so voller Wunder, wie könnte ich da jemals nicht alles davon sehen und erleben wollen");
        await ƒS.Speech.tell(characters.stella, "Imerhin ist dieses Leben doch so kurz, wie soll ich da jemans aufhören zu suchen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke das ist keine Entscheidung die man bewusst trifft", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke für jeden von uns ko-", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das Meer also");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie bitte", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das Meer, das wird mein nächstes Ziel sein. Ich danke ihnen, bis in ein paar Wochen");
        await ƒS.Character.hide(characters.stella);
        await ƒS.Speech.tell(characters.narrator, "Stella steht auf, zwinkert dir noch einmal zu, wirft 1 Goldmünze auf den Tisch und macht sich Richtung anbrechende Dämmerung. ");
        //Item bekommen Goldmünze, mit Symbol aus einem Königreich das du nicht kennst
        break;

      //Path Drachenwhisky
      case drinkempfehlung.iPickDrachenwhiksy:
        console.log("Path Drachenwhisky ab jetzt abspielen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sie sehen mir aus, als könnten sie was vertragen.");
        //schluckgeräusch
        await ƒS.Speech.tell(characters.stella, "Götter WAS IST DAS");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Selbstgebrannter Drachenwhisky, nur das Beste für unsere Kundschaft", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "sagen sie mir nicht, Leute trinken sowas freiwillig, das brennt ja wie Drachen Feuer…..");
        await ƒS.Speech.tell(characters.stella, ".... ........ .....  ...... daher also der Name");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun Stella war es richtig, was treibt sie in unsere Stadt?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Öhm nicht viel, ich bin einfach nur auf der Durchreise und wolle mir einen Trink nehmen, eigentlich war die Idee dabei nicht vergiftet zu werden");
        //Lachen Einspielen Barkeeper
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bitte vielmals um Entschuldigung, es ist nicht immer leicht den Geschmack meiner Kundschaft vorauszusagen. ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nächstes Mal enttäusche ich sie nicht, ganz sicher", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Nächstes Mal also, sie sind aber zuversichtlich, dass ich wieder herkomme");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nur so ein Gefühl", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Stella, auf der Durchreise, wo soll es denn hingehen?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Wenn ich das nur wüsste");
        //Säufzer Einspielen
        await ƒS.Speech.tell(characters.stella, "Diese Welt ist so groß, wie soll man da überhaupt wissen, wohin man gehen soll.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also falls sie mir diese Chance erlauben, könnte ich ihnen einen Vorschlag machen", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Hmmmmmmm");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Keine sorge ich kam selbst viel herum, ich kenne da ein paar schöne Orte", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "waren sie den schon mal in einer Kristalhöhle?", true, "spieler");
        //Stella Pose Aufgeregt zeigen
        await ƒS.update();
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dachte ich es mir doch, hier bitte nehmen sie als Entschuldigung diese Karte sie führt sie direkt dorthin", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Oh mein Gott, danke danke danke danke danke danke");
        await ƒS.Character.hide(characters.stella);
        await ƒS.Speech.tell(characters.narrator, "Stella steht wie ein Wirbelwind auf und rennt zur Tür ");
        //einspielen Schritte
        await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
        //Einspielen Geld suchen sound
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Passt schon, kommen Sie einfach wieder", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das werde ich");
        await ƒS.Character.hide(characters.stella);
        await ƒS.Speech.tell(characters.narrator, " Stella lächelt dir zu ehe Sie in die anbrechende Nacht hinaus rennt");
        break;

    }


  }
}