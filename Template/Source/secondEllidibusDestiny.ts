namespace Template {
    export async function secondEllidibusDestiny(): ƒS.SceneReturn {
      console.log("FudgeStory secondEllidibusDestiny Scene starting");
  
  
      console.log("FudgeStory Destiny Scene Elidibus starting");
  
      console.log("second Scene Elidibus starting");
  
      await ƒS.Location.show(locations.citySteampunk);
      //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
      await ƒS.update(5);
      await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
      await ƒS.update();
      await ƒS.Location.show(locations.citySteampunk);
      //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
      await ƒS.update(1);
      await ƒS.Character.show(characters.elidibus, characters.elidibus.pose.normal, ƒS.positionPercent(0, 0));
      await ƒS.update();
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli");
      //Elidibus erschrocken zeigen
      await ƒS.update(1);
      await ƒS.Character.show(characters.alessa, characters.alessa.pose.normal, ƒS.positionPercent(0, 0));
      await ƒS.update();
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du hier");
      await ƒS.Speech.tell(characters.alessa, "Verwundert dich das etwa");
      await ƒS.Speech.tell(characters.alessa, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg");
      await ƒS.Speech.tell(characters.alessa, "Red dir das nur weiter ein");
      await ƒS.Speech.tell(characters.alessa, "Also");
      await ƒS.Speech.tell(characters.alessa, "wie ist es dir ergangen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf");
      await ƒS.Speech.tell(characters.alessa, "Hab ich mitbekommen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "und dir so?");
      await ƒS.Speech.tell(characters.alessa, "Arbeitsreich. Viele Kunden halt");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "verstehe");
      await ƒS.Speech.tell(characters.alessa, "kamst du denn viel rum?");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Alessa was soll das.");
      await ƒS.Speech.tell(characters.alessa, "Was soll was");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fräst mich diese belangenlosen sachen.");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf");
      await ƒS.Speech.tell(characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen");
      await ƒS.Speech.tell(characters.alessa, "Eli bitte");
      await ƒS.Speech.tell(characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu");
      await ƒS.Speech.tell(characters.alessa, "Okay Elidibus bitte, lass uns reden");
      await ƒS.Speech.tell(characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer");
      await ƒS.Speech.tell(characters.elidibus, "lebwohl Alessa");
      await ƒS.Speech.tell(characters.alessa, "Wie ich sehe immer noch das gleiche Kind"); 
      await ƒS.Speech.tell(characters.alessa, "Sag mal hörst du eigentlich immer noch diese Melodie, oder hat sie dich in deiner Gier nach Blut auch velassen");
      await ƒS.Speech.tell(characters.elidibus, "Wag es nicht so mit mir zu sprechen");
      await ƒS.Speech.tell(characters.alessa, "Oder was");
      await ƒS.Speech.tell(characters.elidibus, "Treib es nicht zu weit Alessa");
      await ƒS.Speech.tell(characters.alessa, "der alte Krieger ist also immer noch da und ich dachte das er in dem ganzen Alkohol erstickt wäre");
      await ƒS.Speech.tell(characters.alessa, "Hört dieser gleiche Krieger denn auch immer noch die Melodie");
      await ƒS.Speech.tell(characters.elidibus, "Ich wüsste nicht was dich das angeht.");
      await ƒS.Speech.tell(characters.alessa, "Schade und ich hab mich so darauf gefreut frohe kunde an Stella entrichten zu können");
      await ƒS.Speech.tell(characters.elidibus, "Wer soll das sein");
      await ƒS.Speech.tell(characters.alessa, "Wie ein weiser Mann einst sagte");
      await ƒS.Speech.tell(characters.alessa, "Ich wüsste nicht was dich das angeht");
      await ƒS.Speech.tell(characters.elidibus, "Kannst du endlich mit diesen Spielchen aufhören");
      await ƒS.Speech.tell(characters.elidibus, "3 JAHRE");
      await ƒS.Speech.tell(characters.elidibus, "3 Jahre lang hast du mich ignoriert und dein ebstes gegeben mir aus dem Weg zu gehen und mir nichts dir nichts");
      await ƒS.Speech.tell(characters.elidibus, "Kommst du hier angetanzt und raubst mich jeden nerve den ich noch habe wegen einer Dummen Geschichte");
      await ƒS.Speech.tell(characters.elidibus, "Ich flehe dich an, bitte lass endlich das Stück was du von mir übrig gelassen hast in frieden. ");
      await ƒS.Speech.tell(characters.alessa, "dann beantworte mir endlich meine frage!");
      await ƒS.Speech.tell(characters.elidibus, "Wieso, was ist so wichtig daran");
      await ƒS.Speech.tell(characters.alessa, "Es ist nun mal wichtig für mich.");
      await ƒS.Speech.tell(characters.alessa, "Zeig mir wenigstens das noch ein Funke von dem Mann vorhanden ist den ich einst liebte");
      await ƒS.Speech.tell(characters.elidibus, "Ja ich höre es, jeden Tag wenn ich aufwache und jede Nacht wenn ich schlafen gehe. Ich höre die immer gleiche Melodie rufend aus der Ferne.");
      await ƒS.Speech.tell(characters.elidibus, "ich höre ihre wunderschönen klänge genau so klar wie an dem ersten Tag als ich sie vernahm.");
      await ƒS.Speech.tell(characters.elidibus, "Zufrieden?");
      await ƒS.Speech.tell(characters.alessa, "Erinnerst du dich an unser versprechen");
      await ƒS.Speech.tell(characters.elidibus, "Natürlich aber was hat das jetzt damit zu tun");
      await ƒS.Speech.tell(characters.elidibus, "Götter Alessa komm zu deiner begiere");
      await ƒS.Speech.tell(characters.alessa, "Dann erzähl es mir");
      await ƒS.Speech.tell(characters.elidibus, "Alessa du hast deine Antwort lass mich nun endlich infrieden");
      await ƒS.Speech.tell(characters.alessa, "Elidibus, bitte");
      await ƒS.Speech.tell(characters.alessa, "Erzähl mir von unserem versprechen!");
      await ƒS.Speech.tell(characters.elidibus, "Haaah, okay okay aber dann gehst du");
      await ƒS.Speech.tell(characters.elidibus, "Egal was kommen mag, egal wie viel Sterne erloschen sind und egal wie sehr diese Welt dem Wahnsinn verfallen ist");
      await ƒS.Speech.tell(characters.elidibus, "Ich werde niemals aufhören den Weg zu folgen den mein Herz mir geebnet hat");
      await ƒS.Speech.tell(characters.elidibus, "Und oh so sollte ich eines Tages auf des anderen Geheimnis stoßen so werde ich");
      await ƒS.Speech.tell(characters.elidibus, "so werde ich egal was auch sein mag");
      await ƒS.Speech.tell(characters.elidibus, "diesen aufsuchen.");
      await ƒS.Speech.tell(characters.elidibus, "Alessa sag mir nicht das");
      await ƒS.Speech.tell(characters.alessa, "Ich fand es Elidibus. Obwohl eigentlich");
      await ƒS.Speech.tell(characters.alessa, "fand Stella mich");
      //In nem Buch müsste ich hier zu der nächsten Szene cutten weil Dramaturgie und so
    }
  }