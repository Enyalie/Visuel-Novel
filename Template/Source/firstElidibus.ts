namespace Template {
    export async function firstElidibus(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene Elidibus starting");

        console.log("first Scene Elidibus starting");

        
        ƒS.Sound.play(sound.footstep, 1.2);
        ƒS.Sound.play(sound.drag, 0.8);
        await ƒS.Speech.tell(characters.narrator, "Ein Mann betritt die Bar und läut Zielstrebig zur Theke, hinter ihm bildet sich eine Spur aus schwarzen Blut");
        await ƒS.Location.show(locations.tavernNight);
        await ƒS.update(3);
        await ƒS.Character.show(characters.elidibus, characters.elidibus.pose.normal, ƒS.positionPercent(200, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, enterToMiddle());
        ƒS.Sound.play(sound.fall, 0.8);
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Zieh ein Becher von der Belohnung ab", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Okay wow, aber dürfte ich fragen wie ihr so schnell wart. Der Auftrag wurde doch erst heute Morgen ausgegeben", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Es wäre schneller gegangen, wären die Angaben präziser gewesen.", true, "Elidibus");
        await ƒS.Speech.tell(characters.narrator, "Der Mann vor dir ext das Bier, das du ihm hingestellt hast binnen sekunde");
        ƒS.Sound.play(sound.drink, 1.2);
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Also was ist der nächste Auftrag!", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Immer mit der ruhe, ihr seid doch grade erst angekommen", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "und", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wollt ihr euch nicht erst einmal ausruhen? Die Nacht bricht sowieso heran", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Ich versichere dir Bartender. Ich muss mich nicht ausruhen.", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ähem" +" "+ dataForSave.nameBarkeeper, true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "euer Name nähme ich an. Gut" +" "+ dataForSave.nameBarkeeper, true, "Elidibus");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Jetzt nennet mir den nächsten Auftrag!", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was bitte treibt euch zu diesem Dunkeln stunde so versessen auf die Jagd?", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Was Interessiert es euch. Ich entledige mich eures Problems und ihr Bezahlt mich.", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bin ein Barkeeper, Informationen sind mein Geschäft und genau diese verlangt ihr ja immerhin grade von mir", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "also Jäger, was treibt euch zu dieser stunde so versessen auf die Jagd", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Gold.... und jetzt den Auftrag", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "God also", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun gut Jäger, da ihr so veressen auf Gold seid, was haltet ihr von einem Werwolf?", true, "spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Was ich davon halte?", true, "Elidibus");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "eine vielversprechende Jagd würde ich sagen", true, "Elidibus");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Wir sehen uns in 2 Wochen", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach eines noch Jäger", true, "Spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "hm?", true, "Elidibus");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nächstes mal, sagt mir doch bitte den wahren grund", true, "Spieler");
        await ƒS.Speech.tell(characters.elidibusButWithoutName, "Kümmert euch, um euren eigenen dreck", true, "Elidibus")
        await ƒS.Speech.tell(characters.narrator, "Der Jäger geht hinaus in die Nacht");
        await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, middleToLeave());
        ƒS.update();
            ƒS.Character.hide(characters.elidibus);
            ƒS.update();
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackout);
        await ƒS.update(2);





    }
}