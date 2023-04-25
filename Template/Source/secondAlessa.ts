namespace Template {
  export async function secondAlessa(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory Template Scene Alessa starting");

    console.log("second Scene Alessa starting");

    await ƒS.Location.show(locations.citySteampunk);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(5);
    await ƒS.Character.show(characters.alessaButWithoutName, characters.alessaButWithoutName.pose.normal, ƒS.positionPercent(0, 0));
    await ƒS.update();
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Immer noch am Leben wie ich sehe");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wie ich sehe immer noch Maskiert", true, "spieler");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Touché");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "also Barkeeper, sag mir wie ist es dir ergangen?");

    let erzählenüberStellaElidius = {
      iPickStella: "von Stella erzählen",
      iPickElidibus: "von Elidibus erzählen"

    };

    let dialogueElement = await ƒS.Menu.getInput(erzählenüberStellaElidius, "choicesCSSClass");

    switch (dialogueElement) {
      case erzählenüberStellaElidius.iPickElidibus:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Letztens war hier ein Kunde, ein netter Zeitgenosse.", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "welcher...", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Welcher nur den Nächsten Auftrag im Kopf hatte");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "woher", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ich denke es gibt keine bessere Beschreibung von Elidibus als „Netter Zeitgenosse“.");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Also wie hat der Auftrag gelautet?");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach nichts allzu Spannendes, er ging auf die Jagd nach einem Werwolf", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "und ihr sagt mein Leben wäre spannend");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Er sah mir aus wie ein fähiger Kämpfer, er wird das schon schaffen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ist ja auch nicht so, als hätte er mir eine Wahl gegeben.", true, "spieler");
        ƒS.Speech.setTickerDelays(150);
        await ƒS.Speech.tell(characters.alessaButWithoutName, "...wie ging es ihm");
        ƒS.Speech.setTickerDelays(30);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wir hatten nicht wirklich lange ein Gespräch, aber ich würde", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Atemlos lebt es");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wie bitte?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "wir Spielen!");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt, es");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ist bei Ihnen alles Okay? Wenn ich etwaaa", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "WIR");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "SPIELEN");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt es. Kennt keinen Durst -Dennoch trinkt es. Trägt ein Kettenhemd, doch nie klingt es");

        let sceneZweiRätsel1 = {
          iPickFisch: "Fisch",
          iPickNinja: "Ninja",
          iPickGeist: "Geist"
        };

        let scene2rätsel1Entscheidung = await ƒS.Menu.getInput(sceneZweiRätsel1, "choicesCSSClass");

        switch (scene2rätsel1Entscheidung) {
          case sceneZweiRätsel1.iPickFisch:
            break;
          case sceneZweiRätsel1.iPickGeist:
            break;
          case sceneZweiRätsel1.iPickNinja:
            break;

        }
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Man kann es nicht sehen, kann´s nicht aufstöbern, kann es nicht fressen und kann´s auch nicht hören. Es liegt hinter den Sternen und unterm Gestein, Rieselt in alle Höhlen hinein, Komm zuerst und folgt auch zuletzt, Löscht alles Leben, bis keiner mehr schwätzt.");

        let sceneZweiRätsel2 = {
          iPickDunkelheit: "Dunkelheit",
          iPickZeit: "Zeit",
          iPickLicht: "Licht"
        };

        let scene2rätsel2Entscheidung = await ƒS.Menu.getInput(sceneZweiRätsel2, "choicesCSSClass");

        switch (scene2rätsel2Entscheidung) {
          case sceneZweiRätsel2.iPickDunkelheit:
            break;
          case sceneZweiRätsel2.iPickZeit:
            break;
          case sceneZweiRätsel2.iPickLicht:
            break;

        }
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Kennt keine Gnade und");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es ist okay,wir müssen nicht darüber reden, aber bitte, keine Rätsel mehr", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "wann kommt er wieder?");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "in einer Woche", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "danke");
        break;

      case erzählenüberStellaElidius.iPickStella:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Erinnert ihr euch an das aufgewekte Mädchen, von dem ich euch erzählte?");
        ƒS.Speech.setTickerDelays(100);
        await ƒS.Speech.tell(characters.alessaButWithoutName, "öhm.......Stella richtig?");
        ƒS.Speech.setTickerDelays(30);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja genau! Aufjedenfall sie war wieder hier, brachte mir sogar en kleines Souvenir von ihren Reisen mit.", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ein Souvvenir sogar, sie scheint dich sehr zu mögen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube Stella mag jeden");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "So jeden also");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "glauben sie mir etwa nicht?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "sagen wir einfach, ich hab da meine Erfahrungen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Die können ja nicht sehr gut sein, immerhin mag ich dich schon mal", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Damit bist du vermutlich allein");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Glaub ich kaum, ich glaube viel mehr, das du dich bisher in den falschen kreisen herumgetrieben hast", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ist dem so");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ganz sicher sogar und ich denke ich kann es dir sogar beweisen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "falls du dich traust, soweit aus deiner Komfortzone zu gehen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Doktor ohne Name, was ist", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "bist du denn Mutig genug dafür", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Dachte nicht das du dass in dir hast.");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "aber wie könnte ich so einer Herausforderung wiederstehen.");
        await ƒS.update(5);
        await ƒS.Speech.tell(characters.alessaButWithoutName, "gut gemacht Barkeeer, dann lass uns spielen");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ich Alessa le Allier nehme deine Herausforderung an");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alessa, ich hätte nie Gedacht das du einen so herrlichen Namen hast", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "oder das du dich so leicht umstimmen lässt.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "aber aber, noch sahst du mich nicht ohne Maske");
        await ƒS.Speech.tell(characters.alessa, "Und glaub mir, mein Name ist nicht das einzig schöne an mir");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "das Geheimniss werde ich auch noch lüften", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alessa", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Aber zu erst noch unsere kleine Herausforderung", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Kommmt in 3 Tagen wieder", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Um eine neue Freundin von dir zu treffen nehme ich an");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wer weiß das schon", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Übrigens der fairness halber" + " " + dataForSave.nameBarkeeper, true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "auch euer Name hat einen sehr schönen Klang.");
        await ƒS.Speech.tell(characters.alessa, "bis in 3 Tagen dann");
        break;

    }





  }
}