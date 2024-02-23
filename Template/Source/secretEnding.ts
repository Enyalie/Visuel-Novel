namespace Template {
    export async function secretEnding(): ƒS.SceneReturn {
        console.log("Du hast alles gesehen");


        console.log("Jede frage und möglichkeit zum besten gelöst");

        console.log("Zeit für dein Happy End" + dataForSave.nameBarkeeper);
        await ƒS.Location.show(locations.tavernNight);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, "Du stehst in deiner Bar, alleine");
        await ƒS.Speech.tell(characters.narrator, "Weder Alessa, noch Stella waren die letzten Monate da. Auch Elidibus hat sich nicht sehen lassen.");
        await ƒS.Speech.tell(characters.narrator, "Die Gäste die du in letzter Zeit betreut hast, waren immer die gleichen langweiligen Dorfbewohner");
        await ƒS.Speech.tell(characters.narrator, "Es gab keine, Diskussionen oder Geschichten zu belauschen. Du bist zurückgehert in deinen Alltag.");
        await ƒS.Speech.tell(characters.narrator, "Einen Alltag der immer gleich ist. Genau so wie Heute Nacht.");
        await ƒS.Speech.tell(characters.narrator, "Die Bar ist leer und du bist allein. Die wahrscheinlicheit das noch jemand kommt, ist sehr gering");
        await ƒS.Speech.tell(characters.narrator, "Willst du dich diesem Leben hingeben?");

        let lebenswegone = {
            iPickYes: "Ja",
            iPickYess: "Ja",
            iPickYessssssssss: "Ja",
            iPickYesss: "Ja",
            iPickYessss: "Ja",
            iPickYesssss: "Ja",
            iPickYessssss: "Ja",
            iPickYesssssss: "Ja",
            iPickYessssssss: "Ja",
            iPickYesssssssss: "Ja",




        };

        let lebenswegEntscheidung = await ƒS.Menu.getInput(lebenswegone, "choicesCSSClass");
        switch (lebenswegEntscheidung) {
            case lebenswegone.iPickYes:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYess:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesssssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssssss:
                await ƒS.Speech.tell(characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;

        }
        await ƒS.Speech.tell(characters.narrator, "Die Luft um dich herum verändert sich, wird Wärmer.");
        await ƒS.Speech.tell(characters.narrator, "Als würde jemand die Schwere aus ihr nehmen.");
        ƒS.Sound.play(sound.alessa, 1.2, true);
        await ƒS.Speech.tell(characters.narrator, "Du erinnerst dich an all die Rätsel zurück die du Gespielt hast.");
        await ƒS.Speech.tell(characters.narrator, "An all die Freude, die du verspürt hast, als dir Stella von ihren Abenteuern erzählt hat");
        await ƒS.Speech.tell(characters.narrator, "An dein Leben vor der Bar");
        ƒS.Sound.play(sound.footstep, 0.8);
        await ƒS.update(5);
        await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, enterToMiddle());
        await ƒS.Speech.tell(characters.alessa, "Und ich hatte schon Angst, ich hätte sie dir umsonst gegeben",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was machst du hier?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Dich Heilen was sonst?",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Es wird Zeit das du diese Bar schließt und wieder auf Reisen gehst",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Achja, und mit wem bitte Dir?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Zum Beispiel. Tatsächlich dachte ich daran mich der alles Tour anzuschließen",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Woher der Plözliche Sinneswandel?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Sagen wir einfach, ein Gewisser Schanken besuch hat mich wachgerüttelt",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Also was sagst du. Bereit dich mir anzuschließen?",true, "alessa");

        let finaleEntscheidung = {
            iPickAbenteuer: "Nichts lieber als das."
        }
        let enden = await ƒS.Menu.getInput(finaleEntscheidung, "choicesCSSClass");
        switch (enden) {
            case finaleEntscheidung.iPickAbenteuer:
                await ƒS.Speech.tell(characters.alessa, "Naa geht doch",true, "alessa");
                await ƒS.Speech.tell(characters.alessa, "Achja ich schulde dir ja noch was.",true, "alessa")
                ƒS.Character.hide(characters.alessa);
                ƒS.update();
                await ƒS.Character.show(characters.alessa, characters.alessa.pose.sectret, ƒS.positionPercent(50, 100));
                ƒS.update();
                await ƒS.Speech.tell(characters.alessa, "Ich hoffe ich wurde deinen Gedanken gerecht.",true, "alessa");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Knapp aber gerade so.", true, "spieler");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagte doch du hast ein schönes Gesicht", true, "spieler");
                await ƒS.Speech.tell(characters.alessa, "Du Charmeur du, naja damit ist deine Heilung wohl abgeschlossen",true, "alessa");
                await ƒS.Speech.tell(characters.alessa, "Wobei wenn ich ehrlich bin",true, "alessa");
                await ƒS.Speech.tell(characters.alessa, "Hast du eigentlich mich geheilt.",true, "alessa");
                await ƒS.Speech.tell(characters.alessa, "Und jetzt komm die anderen Warten",true, "alessa");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was meinst du mit sie warten?", true, "spieler");
                await ƒS.Speech.tell(characters.stella, "Man " + dataForSave.nameBarkeeper + " Unsere Kutsche geht in Zehn Minuten, jetzt komm, wir haben eine Welt zu sehen!",true, "stella");
                await ƒS.Speech.tell(characters.alessa, "Ungeduldig wie eh und jeh",true, "alessa");
                await ƒS.Speech.tell(characters.alessa, "Also dann, damit war es das wohl mit den Geschichten aus der Taverne",true, "alessa");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja...Ich glaube das wars.", true, "spieler");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Zeit für die Geschichten der Welt", true, "spieler");
                await ƒS.Speech.tell(characters.alessa, "Wohl gesprochen",true, "alessa");
                await ƒS.Speech.tell(characters.elidibus, "Wenn ihr nicht bald rauskommt, sorge ich dafür!", true, "Elidibus")
                await ƒS.Speech.tell(characters.alessa, "Wir sollten uns beeilen.",true, "alessa");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das sollten wir!", true, "spieler");
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                ƒS.Character.hide(characters.alessa);
                await ƒS.Location.show(locations.blackout);
                ƒS.update(5);
                return "end";


        }
    }
}