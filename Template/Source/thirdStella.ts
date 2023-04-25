namespace Template {
  export async function thirdStella(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory Template Scene Stella starting");

    console.log("first Scene Stella starting");

    await ƒS.Location.show(locations.citySteampunk);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(5);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
    await ƒS.update();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Willkommen zurück Lichterfee", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie war das Fest?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Es war unglaublich, überall diese schier unendlichen Lichter, in sovielen Farben und das ganze Essen");
    await ƒS.Speech.tell(characters.stella, "Ein Fest für die Götter");
    await ƒS.Speech.tell(characters.stella, "So sagen sie zumindest");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was meinst du mit so sagen sie zumindest?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "ehrlich gesagt, war ich gar nicht solange da");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "darf ich fragen wieso?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Darfst du nicht, sagen wir einfach, ich bin vom Schicksal verflucht");
    await ƒS.Speech.tell(characters.stella, "Tut mir leid" + dataForSave.nameBarkeeper + "heute werden wir kein langes Gespräch führen");
    await ƒS.Speech.tell(characters.stella, "Ich wollte nur vorbei kommen, um mich für den Tipp zu bedanken. Ich denke in ein paar Tagen komm ich wieder, ich muss nur noch etwas davor in Ordnung bringen");
    await ƒS.Speech.tell(characters.stella, "Bis zum nächsten Mal");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Bis zum nächsten Mal", true, "spieler");
    //Stella verlässt Bar animation
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "kleine Abenteurerin", true, "spieler");




  }
}