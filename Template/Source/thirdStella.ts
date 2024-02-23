namespace Template {
  export async function thirdStella(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory Template Scene Stella starting");

    console.log("first Scene Stella starting");
    ƒS.Sound.play(sound.tavern, 0.4,true);
    await ƒS.Location.show(locations.tavernDay);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(2);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(200, 100));
    await ƒS.update();
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddleslow());
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Willkommen zurück Lichterfee", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie war das Fest?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Es war unglaublich, überall diese schier unendlichen Lichter, in sovielen Farben und das ganze Essen", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Ein Fest für die Götter", true, "stella");
    await ƒS.Speech.tell(characters.stella, "So sagen sie zumindest", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was meinst du mit so sagen sie zumindest?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "ehrlich gesagt, war ich gar nicht solange da", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "darf ich fragen wieso?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Darfst du nicht, sagen wir einfach, ich bin vom Schicksal verflucht", true, "stella");
    await ƒS.Speech.tell(characters.stella, "...", true, "stella");
    await ƒS.Speech.tell(characters.stella, "...", true, "stella");
    await ƒS.Speech.tell(characters.stella, "...", true, "stella");
    ƒS.Speech.setTickerDelays(100);
    await ƒS.Speech.tell(characters.stella, "Weißt du ich kam hier nicht einfach her, es ist ein wenig... egal.", true, "stella");
    ƒS.Speech.setTickerDelays(30);
    await ƒS.Speech.tell(characters.stella, "Tut mir leid"+ " "  + dataForSave.nameBarkeeper + " " + "heute werden wir kein langes Gespräch führen", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Ich wollte nur vorbei kommen, um mich für den Tipp zu bedanken. Ich denke in drei Tagen Tagen komm ich wieder, ich muss nur etwas erledigen", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Bis zum nächsten Mal", true, "stella");
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middeToLLeaveSlow());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Bis zum nächsten Mal", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "kleine Abenteurerin", true, "spieler");
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.blackout);
    await ƒS.update(2);
    ƒS.Sound.fade(sound.tavern, 0, 2);



  }
}