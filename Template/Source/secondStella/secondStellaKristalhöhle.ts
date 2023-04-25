namespace Template {
  export async function secondStellaKristalhöhle(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory second Scene Stella Kristalhöhle starting");

    console.log("second Scene Stella starting");

    await ƒS.Location.show(locations.citySteampunk);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(5);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
    await ƒS.update();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie war die Höhle so? Funkelnd genug", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "könnte man sagen ja");
    await ƒS.Speech.tell(characters.stella, "Es war aufjedenfall einen besuch Wert.");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das freut mich doch zu hören, heißt ich habe meinen fehler von letztem mal wieder gut gemacht?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ausnahmsweise ja, aber nur ganz ausnahmsweise.");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich fühle mich geehrt danke", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Okay spaß beiseite, es war unfassbar beindruckend.");
    await ƒS.Speech.tell(characters.stella, "wie der Mond auf den unterirdischen See leuchtete, das Wesen das dort herumflog und das Wasser bei seinen berührungen zum Glitzern brachte");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Stella wovon redest du grade?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "naa von dem See am ende der höhle");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "du warst aber schon in der Höhle von der Karte oder?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ja wo denn sonst?");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Stella, dort gibt es keinen See, auf den der Modnscheinen kann", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "doch natürlich, du kennst doch bestimmt die große halle am ende oder?");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja, ich glaube ich weiß welche du meinst.", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Die mit den Farbigen Kristalen");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Aaaaaah ja klar, die kenne ich", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ja aber dann weißt du ja auch, das dass ganze ein Rätsel ist um den gag dahinter zu öffnen");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "MOMENTAL WAS", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie das ist ein Rätsel, woher weißt du das?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "ach wir hatten was ganz ähnliches daheim");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "woher kommst du noch gleich?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ähm aus Elysee, du weißt schon das");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das verwunsche Königreich aus den alten Gesichten, ja klar kenne ich das. Aber das gibt es doch nur in Märchen", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Dafür war meine Kindheit aber ziemlich real");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Warte mal kurz nen Moment, du erzählst mir grade allern ernstes, das du aus DEM ELYSEE kommst und sagst das so als wäre es das normalste der Welt?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Und du tust so als wäre es, irgendwas total abgefahrenes, du kommst ja auch aus dieser Welt");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja aber das hier ist ja auch die normale Welt", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Sagt wer?");
    await ƒS.Speech.tell(characters.stella, "zugegeben, bisher war ich nur in meinem beheimaten Königreich und Elysee, aber ich versichere dir, es gibt definitiv mehr als nur deine Welt");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wow, einfach nur wow. Das ist wow", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Kannst du, Kannst du es mir zeigen", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Also was das betrifft.");
    await ƒS.Speech.tell(characters.stella, "Das könnte sich als schwer erweisen, weißt du, ehrlich gesagt");
    await ƒS.Speech.tell(characters.stella, "Ist es mir nicht mehr möglich zurückzukehren");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh das tut mir leid.", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Oh nein nein, das muss es nicht. Ich ging freiwillig, zu dem eure Welt ist sowieso viel Aufregender und vor allem Lebendiger");
    await ƒS.Speech.tell(characters.stella, "Ich bin gerne hier");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Schön das dir unsere Welt sogut gefällt, aber jetzt verstehe ich wenigstens auch, warum du auf alles so Naive reagierst", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Paaah ich und naive? Niemals!");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Natürlich nicht, mein fehler", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "ganz genau");
    await ƒS.Speech.tell(characters.stella, "Also, jetzt weißt du was über mich, was bekomme ich dafür?");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sooooo, daher weht also der Wind, was schwebt dir denn vor, für diese außerordentlich Interessante Information", true, "spieler");
    await ƒS.Speech.tell(characters.stella, " Noch mal so eine Karte wäre doch recht Interessant, meinst du nicht?");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Noch so eine habe ich leider nicht, aber wie wäre es mit einem Sternenfest, stattdessen", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "klingt angebracht, wo finde ich denn besagtes Sternenfest");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Im benachbarten Königreich, Munkelt man", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Munkelt man?");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Eine Redewendung, ich wollte nur lustig sein...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie dem auch sei, im Benachbarten Königreich findet es statt, aber du solltes tdich beeilen, es ist nämlich schon in 3 Tagen", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Oh so bald schon, okay dann ähm ich muss los");
    await ƒS.Speech.tell(characters.stella, "Danke dir für das Gespräch, ich komme wieder");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das ist alles was ich hören wollte, Gute Reise dir", true, "spieler");
    dataForSave.variableKristalhöhle = true;



  }
}