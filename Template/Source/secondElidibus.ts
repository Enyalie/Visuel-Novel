namespace Template {
    export async function secondElidibus(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene starting");
  
  
      console.log("FudgeStory second Elidibus starting");
  
      console.log("second Scene Elidibus starting");
  
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
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Verwundert dich das etwa");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Red dir das nur weiter ein");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Also");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "wie ist es dir ergangen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Hab ich mitbekommen");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "und dir so?");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "Arbeitsreich. Viele Kunden halt");
      await ƒS.Speech.tell(characters.elidibusButWithoutName, "verstehe");
      await ƒS.Speech.tell(characters.alessaButWithoutName, "kamst du denn viel rum?");
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
      
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alles okay", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Oh du bist ja noch da");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja ist ja auch meine Bar", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Trotzdem das Gespräch war ja wohl mehr als Privat.");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie wärs wenn du den Wütenden teil überspringen und du mir beantwortest ob du darüber reden willst", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Ich weiß nicht, würde es denn etwas bringen");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das kommt auf dich an", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "dann lass es uns versuchen");
      //Meter einbauen und ab dann frage runde die das Meter erhöhen oder Seknken, falls Meter Max == geschaft Good falls Bad == bad ending for this branche

  


      
  
  
    }
  }