namespace Template {
    export async function firstElidibus(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene Elidibus starting");

        console.log("first Scene Elidibus starting");

        await ƒS.Location.show(locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        //Play Bar ambience
        await ƒS.Speech.tell(characters.narrator, "Ein Mann betritt die Bar und läut Zielstrebig zur Theke, hinter ihm bildet sich eine Spur aus schwarzen Blut");
        await ƒS.update(3);
        await ƒS.Character.show(characters.elidibusButWithoutName, characters.elidibusButWithoutName.pose.normal, ƒS.positionPercent(0, 0));
        await ƒS.update();
        //show Monster Kopf + Einspielen aufklatschen Sound
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Zieh ein Becher von der Belohnung ab");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh natürlich natürlich, dennoch ich muss zugeben, wart ihr nicht erst vor ein paar Stunden hier?", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Es wäre schneller gegangen, wären die Angaben präziser gewesen.");
        await ƒS.Speech.tell(characters.narrator, "Der Mann vor dir ext das Bier, das du ihm hingestellt hast binnen sekunde");
        // trink geräusche einfügen
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Also was ist der nächste Auftrag!");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Immer mit der ruhe, ihr seid doch grade erst angekommen", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "und");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wollt ihr euch nicht erst einmal ausruhen? Die Nacht bricht sowieso heran", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Ich versichere dir Bartender. Ich muss mich nicht ausruhen.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ähem" + dataForSave.nameBarkeeper, true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "euer Name nähme ich an. Gut" + dataForSave.nameBarkeeper);
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Jetzt nennet mir den nächsten Auftrag!");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was bitte treibt euch zu diesem Dunkeln stunde so versessen auf die Jagd?", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Was Interessiert es euch. Ich entledige mich eures Problems und ihr Bezahlt mich.");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bin ein Barkeeper, Informationen sind mein Geschäft und genau diese verlangt ihr ja immerhin grade von mir", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "also Jäger, was treibt euch zu dieser stunde so versessen auf die Jagd", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Gold.... und jetzt den Auftrag");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "God also", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun gut Jäger, da ihr so veressen auf Gold seid, was haltet ihr von einem Werwolf?");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Was ich davon halte?");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "eine vielversprechende Jagd würde ich sagen");
        //Show Elidibus weggedreht
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Wir sehen uns in 2 Wochen");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach eines noch Jäger", true, "Spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nächstes mal, sagt mir doch bitte den wahren grund");
        //Speeker Elidibus tzz einspielen
        await ƒS.Speech.tell(characters.narrator, "Der Jäger geht hinaus in die Nacht");






    }
}