namespace Template {
  export async function secondStellaEinsamerberg(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory Template Scene second Stella Einsamerberg starting");

    console.log("second Scene Stella starting");
    ƒS.Sound.play(sound.tavern, 1.2,true);
    await ƒS.Location.show(locations.tavernDay);
    await ƒS.update(2);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(200, 100));
    await ƒS.update();
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddle());
    await ƒS.Speech.tell(characters.stella, "Hey Hey, ein Zwergenfeuer bittte", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie ich sehe, auf den Geschmack gekommen", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "deine Reise war also Erfolgreich", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "JA, es war unglaublich, sowas habe ich noch nie gesehen!", true, "stella");
    await ƒS.Speech.tell(characters.stella, "So du musst dir vorstellen, Ein ganzer Berg voller Gold und die Zwerge, sind einfach sooo lustig.", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Auch wenn ich eventuell jemanden ausversehen beleidgt habe", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie meinst du Beleidigt?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Naja also er wollte halt ein Wetttrinken, also habe ich ja gesagt.", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sag mir nicht du hast ihm auf die Füße gekotzt.", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Iuh natürlich nicht, wir haben also angefangen zu Trinken und nach ungefähr 35 Zwergenfeuer, fiel er einfach um", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Ich glaube er war einfach Müde, aber er wollte dann einfach auch nicht mehr mit mir Reden", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja du hast halt seine Ehre beleidigt, auch wenn ich sagen muss das.......", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, ".....", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "WAS MEINST DU MIT  35", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "35 Zwergenfeuer halt, hab ich doch schon gesagt, wieso machst du daraus denn so nee große Sache", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Stella, bitte erinnere mich daran, NIEMALS gegen dich ein Wetttrinken zu bestreiten", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Alsoooooooo", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Alsoooooooooooooooooooooooooooooooooooooooooooooooooooooooo", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja was ist?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Wohin als nächstes?", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "du bist doch grade erst wiedergekommen", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "aber aber", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Okay ich will mal nicht so sein, ich hab da tatsächlich was", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl ", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Immer mit der Ruhe, du stirbst mir ja noch an nem Herzinfakt", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Im benachbarten Köngireich, finden ein Sternenfest in 3 Tagen statt.", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Was ist denn ein Sternefest", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das wirst du schon selber herausfinden müssen", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Achja und Stella", true, "spieler");

    let erinnernAnGeld = {
      iPickGuteReise: "Gute Reise Wünschen",
      iPickErinnernAnGeld: "Ans Bezahlen Erinnern"
    };

    let dialogueElement = await ƒS.Menu.getInput(erinnernAnGeld, "choicesCSSClass");

    switch (dialogueElement) {
      case erinnernAnGeld.iPickGuteReise:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach nichts, Gute Reise und Probier unbedingt die Pasteten", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Werde ich machen, wir sehen uns dann in ein paar Tagen", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Und danke", true, "stella");
        ƒS.update();
            ƒS.Character.hide(characters.stella);
            ƒS.update();
        break;
      case erinnernAnGeld.iPickErinnernAnGeld:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dieses Mal bezahlst du bitte für dein Bier", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Oh Götter Ja ntürlich, Tut mir furchtbar leid", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Keine Sorge, ich wollte dich Sommerstum nur daran erinnern", true, "spieler");
        await ƒS.Speech.tell(characters.narrator, "Stella legt die 2 Gold Stücke auf den Tisch");
        await ƒS.Speech.tell(characters.stella, "Der Rest ist als dank für den guten Tipp", true, "stella");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeave());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
        break;
    }
  
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.tavern, 0, 2);
    await ƒS.Location.show(locations.blackout);
    await ƒS.update(2);



  }
}