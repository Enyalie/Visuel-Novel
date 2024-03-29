namespace Template {
  export async function firstStella(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene Stella starting");

    console.log("first Scene Stella starting");
    await ƒS.Location.show(locations.tavernDay);
    await ƒS.Speech.tell(characters.narrator, "Du bist Bartender einer gut besuchten Bar, in einem kleinen Ort.");
    await ƒS.Speech.tell(characters.narrator, "Als Barkeeper ist es nicht nur deine Aufgabe köstliche Getränke zu servieren, sondern auch als Psychologe zu Diensten zu sein");
    await ƒS.Speech.tell(characters.narrator, "Und wer weiß vielleicht kannst du wirklich etwas verändern");
    await ƒS.Speech.tell(characters.narrator, "Doch dies ist keine Geschichte, über einen Bartender und seine Gäste.");
    await ƒS.Speech.tell(characters.narrator, "Dies ist eine Geschichte, über einen mürrischen Krieger");
    await ƒS.Speech.tell(characters.narrator, "einer vermummten Doktorin");
    await ƒS.Speech.tell(characters.narrator, " und einer....Da kommt sie ja schon.")
    ƒS.Sound.play(sound.tavern, 1.2,true);

    await ƒS.update();
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(200, 100));
    await ƒS.update();
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddleFast());
    await ƒS.Speech.tell(characters.stella, "Oh ihr Götter wie das duftet und sind das etwa frische Pilze aaaah och nein wie süß ein Kürbis und ist das etwa", true, "stella");
    ƒS.Sound.play(sound.fall, 1.2);
    await ƒS.Speech.tell(characters.stella, "Oh tut mir leid, ähm, ich-ich räume das sofort wieder auf.", true, "stella");
    await ƒS.Speech.tell(characters.barkeeper, "Machen Sie sich keine Sorgen junge Frau, das passiert schon mal");
    await ƒS.Speech.tell(characters.stella, "Ähm, es tut mir dennoch unfassbar leid. Stella übrigens. Und du bist?", true, "stella");
    dataForSave.nameBarkeeper = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sehr erfreut,Ich bin" + " " + dataForSave.nameBarkeeper + "" + "der Barkeeper  dieses kleinen Ambientes", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Stella, sagen sie mir, darf ich ihnen etwas zum trinken anbieten?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "„Hmmmmmmm, trinken hmmm, sie haben so viel auf ihrer Karte, was soll ich nur. Okay Okay wie wärs. ", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Aaaaaaah ich habs", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Überraschen sie mich", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun aber langsam, ich kenne sie doch kaum, wie soll ich ihnen da etwas Empfehlen.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dennoch Sie sind bestimmt durstig, also sollte mir einen Hinweis reichen.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagen sie mir bitte ihre Lieblingsblume", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Öhm meine lieblingsblume hmmmm. Ich denke die Kirschblüte", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Die Schönheits des Lebens in seiner Zerbrechlichkeit also", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In diesem fall, ja genau würde ich ihnen folgendes Empfehlen.", true, "spieler");


    let drinkempfehlung = {
      iPickBier: "Zwergenfeuer",
      iPickTequilaSunrise: "TequilaSunrise",
      iPickDrachenwhiksy: "Drachenwhisky"
    };

    let dialogueElement = await ƒS.Menu.getInput(drinkempfehlung, "choicesCSSClass");



    switch (dialogueElement) {
      //Path Bier
      case drinkempfehlung.iPickBier:
        console.log("Case Bier ab jetzt abspielen.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke für sie, ja genau einmal ein Zwergenfeuer unser Haus Bier. ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ist etwas nicht Inordnung miss?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ähm doch doch sorry, es ist nur. Was ist das?", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Meinen Sie etwa den Zwerg?", true, "spieler");
        ƒS.Speech.setTickerDelays(200);
        await ƒS.Speech.tell(characters.stella, "Z-w-e-r-g", true, "stella");
        ƒS.Speech.setTickerDelays(30);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In Gedanken:Ist es wirklich möglich bisher noch nie etwas von Zwergen gehört zu haben? ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun ja, ähm wie beschreibe ich Ihnen das am besten", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Zwerge sind Meister der Schmiede, es gibt kein Feuer das für sie zu heiß  und keinen Stein der für sie zu hart ist.", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ebenfalls legen sie viel Wert auf ihre Bärte. Das Beeindruckendste an ihnen ist, aber vor allem ihre Feier Kunst. ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Riesenfeste mit Maßen an Bier und Fleisch. Grade ihr Pökel Fleisch ist legendär.", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Oooh das klingt ja wundervoll, wo kann ich solche Zwerge antreffen und dieses Bakel Fleisch probieren.", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Ich muss sie einfach sehen, jetzt wo sie mir so viel von ihnen Erzählt haben, bitte ", true, "stella");
        await ƒS.Speech.tell(characters.stella, "bitte, bitte, bitte, bitte bitte bitte Sie müssen mir sagen wo ich sie finde.", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also wenn sie wirklich Zwerge sehen wollen, dann, müssen sie nach Norden zu dem einsamen Berg reisen", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Der einsame Berg also….ich danke ihnen vielmals", true, "stella");
        await ƒS.Speech.tell(characters.narrator, "Stella springt wie ein Wirbelwind auf uns verlässt die Bar…..ohne zu Bezahlen ");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middeToLLeaveFast());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
        dataForSave.entscheidungEinsamerberg = true;

        break;

      //Path Tequila Sunrise
      case drinkempfehlung.iPickTequilaSunrise:
        console.log("Path Tequila Sunrise ab jetzt abspielen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In dem fall, denke ich bestimmt das ich sie damit begeistern kann", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Uuuuuh schmeckt das süß und diese Farbe, wie ein Sonnenuntergang", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "eigentlich soll es einen Sonnenaufgang Symbolisieren", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wissen Sie. Jedes Mal, wenn ich diesen Cocktail mache, denke ich an meinen letzten Strandurlaub zurück und erinnere mich ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "an das Lila und Organe, das langsam die letzten Schatten der Nacht am Horizont durchbricht.", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es tut mir furchtbar leid, ich muss sie bestimmt langweilen.", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Nein überhaupt nicht, bitte erzählen Sie mir mehr", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So viel mehr gibt es gar nicht, das alles ist schon eine Weile her, damals war ich selbst noch Abenteuer und bereiste die Welt", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Wieso tuen sie es jetzt nicht mehr? Was hält sie davon ab", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach weißt du, da war ein Kampf und ein Pfeil und seit dem, hach ja jeder wird Irgendwann mal sesshaft", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ich nicht niemals! Wie könnte ich auch, es gibt soviel unglaubliches zu sehen gibt. ", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Diese Welt ist so voller Wunder, wie könnte ich da jemals nicht alles davon sehen und erleben wollen", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Imerhin ist dieses Leben doch so kurz, wie soll ich da jemans aufhören zu suchen", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke das ist keine Entscheidung die man bewusst trifft", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke für jeden von uns ko-", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das Meer also", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie bitte", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das Meer, das wird mein nächstes Ziel sein. Ich danke ihnen, bis bald", true, "stella");
        await ƒS.Speech.tell(characters.narrator, "Stella steht auf, zwinkert dir noch einmal zu, wirft 1 Goldmünze auf den Tisch und macht sich Richtung anbrechende Dämmerung. ");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeave());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
        dataForSave.entscheidungMeer = true;
        break;

      //Path Drachenwhisky
      case drinkempfehlung.iPickDrachenwhiksy:
        console.log("Path Drachenwhisky ab jetzt abspielen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sie sehen mir aus, als könnten sie was vertragen.");
        ƒS.Sound.play(sound.drink, 1.2);
        await ƒS.Speech.tell(characters.stella, "Götter WAS IST DAS", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Selbstgebrannter Drachenwhisky, nur das Beste für unsere Kundschaft", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "sagen sie mir nicht, Leute trinken sowas freiwillig, das brennt ja wie Drachen Feuer…..", true, "stella");
        await ƒS.Speech.tell(characters.stella, ".... ........ .....  ...... daher also der Name", true, "stella");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(characters.narrator, "...");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun Stella war es richtig, was treibt sie in unsere Stadt?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Öhm nicht viel, ich bin einfach nur auf der Durchreise und wolle mir einen Trink nehmen, eigentlich war die Idee dabei nicht vergiftet zu werden", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bitte vielmals um Entschuldigung, es ist nicht immer leicht den Geschmack meiner Kundschaft vorauszusagen. ", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nächstes Mal enttäusche ich sie nicht, ganz sicher", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Nächstes Mal also, sie sind aber zuversichtlich, dass ich wieder herkomme", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nur so ein Gefühl", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Stella, auf der Durchreise, wo soll es denn hingehen?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Wenn ich das nur wüsste", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Diese Welt ist so groß, wie soll man da überhaupt wissen, wohin man gehen soll.", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also falls sie mir diese Chance erlauben, könnte ich ihnen einen Vorschlag machen", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Hmmmmmmm", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Keine sorge ich kam selbst viel herum, ich kenne da ein paar schöne Orte", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "waren sie den schon mal in einer Kristalhöhle?", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dachte ich es mir doch, hier bitte nehmen sie als Entschuldigung diese Karte sie führt sie direkt dorthin", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Oh mein Gott, danke danke danke danke danke danke", true, "stella");
        
        await ƒS.Speech.tell(characters.narrator, "Stella steht wie ein Wirbelwind auf und rennt zur Tür ");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middeToLLeaveFast());
        await ƒS.update (2);
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddle());
        await ƒS.Speech.tell(characters.stella, "Ähm tut mir furchtbar leid, ich muss ja noch bezahlen.", true, "stella")
       
        ƒS.Sound.play(sound.searching, 1.2);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Passt schon, kommen Sie einfach wieder", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Das werde ich", true, "stella");
        await ƒS.Speech.tell(characters.narrator, " Stella lächelt dir zu ehe Sie in die anbrechende Nacht hinaus rennt");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeave());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
         dataForSave.entscheidungKristalhöhle = true;
        console.log(dataForSave.entscheidungEinsamerberg);
        console.log(dataForSave.entscheidungKristalhöhle);
        break;

    }
    ƒS.Sound.fade(sound.tavern, 0, 2);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.blackout);
     await ƒS.update(2);

  }
}