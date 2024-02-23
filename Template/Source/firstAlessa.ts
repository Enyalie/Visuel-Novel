namespace Template {
    export async function firstAlessa(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene Alessa starting");

        console.log("first Scene Alessa starting");
        console.log(dataForSave)
        ƒS.Sound.play(sound.footstep, 1.2);
        await ƒS.Speech.tell(characters.narrator, "Eine Person mit Krähenmaske nährt sich der Tür.");
        await ƒS.Speech.tell(characters.narrator, "Durch die Gesammte Bar geht ein Murmeln, fast wie ein Singsang.");
        await ƒS.Speech.tell(characters.narrator, "Du musst wirklich am ende sein, du musst wahrlich verückt sein, oder von der Pest verschlungen");
        await ƒS.Speech.tell(characters.narrator, "Solltest du durch die Nacht hinaus rufen flehend.");
        await ƒS.Speech.tell(characters.narrator, "Nach den Dunklen Schatten");
        await ƒS.Speech.tell(characters.narrator, "Nach den schwarzen Federn.");
        await ƒS.Speech.tell(characters.narrator, "Denn diesem Ruf wird folgegeleistet");
        await ƒS.Speech.tell(characters.narrator, "doch vergiss nicht du närrisches Kind");
        await ƒS.Speech.tell(characters.narrator, "Mit jeder Heilung kommt-")
        ƒS.Sound.play(sound.alessa, 1.2,true);
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ja, Ja der Preis der Raben, ich hab dafür heute echt keine Zeit.",true, "alessa");
        await ƒS.Location.show(locations.tavernSunset);
        await ƒS.update(2);
        await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, enterToMiddle());
        await ƒS.Speech.tell(characters.narrator, "....");
        await ƒS.Speech.tell(characters.narrator, "....");
        await ƒS.Speech.tell(characters.narrator, "....");
        await ƒS.Speech.tell(characters.narrator, "....");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Öhm, dürfte es etwas sein?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Whisky einen Doppelten bitte",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Einen doppelten also .... harter Tag?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Wie schwer kann es bitte sein still zu liegen?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also es kommt drauf an, je nachdem, also ähm. Wollen Sie jetzt echt eine Antwort von mir darauf?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Nein alles gut, es war",true, "alessa");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Es war einfach ein langer Tag",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wissen sie ich möchte ihnen nicht zu nahetreten, aber lange bei ihnen heißt oft nicht gut.", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "So so, und dem ist so weil?",true, "alessa");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Naja ihres gleichen, taucht ja nicht grade an den schönsten Orten auf.",true, "alessa");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Meinesgleichen?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach kommen sie, sie wissen genau, was ich meine. Rabenmaske, schwarze Kleidung. Wollen sie etwa noch mehr Pestdoktor schreien?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Sie haben die Federn vergessen",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bitte um verzeihung natürlich wollte ich nicht ihr wunderschönes Federgewandt vergessen", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ach wie schön das ihnen das Auffält, wissen sie es ist so schwer in dieser Branche sich Stilbewusst zu kleiden",true, "alessa");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "aber ich nehme sie nur auf den Arm, mir ist schon bewusst welchen Eindruck ich auf Menschen mache",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich denke sie sind weniger furchteinflößend, wenn sie ihre Maske abnehmen", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Vielleicht, ist dann immer nur ein wenig schwer, mit dem Alltag wissen Sie",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ja ich kenne das, ich trage deswegen auch immer mein Barkeeper gesicht beim Arbeiten um unerkannt zu bleiben", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Okay Barkeeper, ich mag sie. Was halten sie von einem Spiel? Ich bräuchte wirklich ein wenig Ablenkung von dem ganzen Elend",true, "alessa");

        let keineWahl = {
            iPickYes: "Okay, lass uns Spielen"

        };

        let dialoguekeineWahl = await ƒS.Menu.getInput(keineWahl, "choicesCSSClass");

        switch (dialoguekeineWahl) {
            //Path Yes for Game
            case keineWahl.iPickYes:
                console.log("Path Yes for Game");
                await ƒS.Speech.tell(characters.barkeeper, "Okay was schlagen Sie vor?");
                await ƒS.Speech.tell(characters.alessaButWithoutName, "Danke ihnen, okay für den Anfang einfach nur ein Rätselspiel. Nichts besonderes",true, "alessa");
                await ƒS.Speech.tell(characters.alessaButWithoutName, "also",true, "alessa");
                await ƒS.Speech.tell(characters.alessaButWithoutName, "Was hat Wurzeln die keiner sieht. Ragt höher als Bäume und Wipfelsäume, wächst nie und treibt nicht und reicht doch ins licht?",true, "alessa");

                let rätsel1 = {
                    iPickTurm: "Ein Turm",
                    iPickBerg: "Ein Berg", //right Answer
                    iPickWolke: "Eine Wolke",
                    iPickFluss: "Ein Fluss"

                };
                let indicatorforRätsel = {
                    number: 0
                };

                let rätsel1Entscheidung = await ƒS.Menu.getInput(rätsel1, "choicesAlessa");

                switch (rätsel1Entscheidung) {
                    case rätsel1.iPickTurm:
                        break;
                    case rätsel1.iPickBerg:
                        indicatorforRätsel.number++;
                        console.log(indicatorforRätsel.number);
                        break;
                    case rätsel1.iPickFluss:
                        break;
                    case rätsel1.iPickWolke:
                        break;

                }

                await ƒS.Speech.tell(characters.alessaButWithoutName, "Sehr gut nächste Frage",true, "alessa");
                await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Warten sie sagen, sie mir denn nicht, ob ich richtig war?", true, "spieler");
                await ƒS.Speech.tell(characters.alessaButWithoutName, "Am ende des Spieles gerne, nun denn Rätsel Nummer 2",true, "alessa");

                await ƒS.Speech.tell(characters.alessaButWithoutName, "Zweiundreißig Schimmel auf einem roten hang-erst mahlen sie, dann stampfen sie und warten wieder lang",true, "alessa");

                let rätsel2 = {
                    iPickFliegenpilz: "Ein fliegenpilz",
                    iPickEinhörner: "Ein Einhorn",
                    iPickWindmühle: "Eine Windmühle",
                    iPickZähne: "Zähne" //right Answer
                };

                let rätsel2Entscheidung = await ƒS.Menu.getInput(rätsel2, "choicesAlessa");

                switch (rätsel2Entscheidung) {
                    case rätsel2.iPickFliegenpilz:
                        break;
                    case rätsel2.iPickEinhörner:
                        break;
                    case rätsel2.iPickWindmühle:
                        break;
                    case rätsel2.iPickZähne:
                        indicatorforRätsel.number++;
                        break;
                }

                await ƒS.Speech.tell(characters.alessaButWithoutName, "Sehr gut, sehr gut, ein letztes noch",true, "alessa");

                await ƒS.Speech.tell(characters.alessaButWithoutName, "Etwas, das alles und jeden verschlingt: Baum, der rauscht, Vogel, der singt, frisst Eisen, zermalmt den härtesten Stein, Zerbeißt jedes Schwert, jeden Schrein, schlägt Könige nieder, schleift ihren Palast, trägt mächtigen Fels fort als leichte last",true, "alessa");

                let rätsel3 = {
                    iPickWasser: "Wasser",
                    iPickWind: "Wind", //right Answer
                    iPickZeit: "Zeit",
                    iPickNichts: "Nichts"
                };

                let rätsel3Entscheidung = await ƒS.Menu.getInput(rätsel3, "choicesAlessa");

                switch (rätsel3Entscheidung) {
                    case rätsel3.iPickWasser:
                        break;
                    case rätsel3.iPickWind:
                        indicatorforRätsel.number++;
                    case rätsel3.iPickZeit:
                        break;
                    case rätsel3.iPickNichts:
                        break;
                }
                console.log(indicatorforRätsel.number)

                while (indicatorforRätsel.number == 3) {
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "Hoho 3 von 3. Sehr gut mein lieber und danke für die großartige Unterhaltung, kommen sie. Als Dank gebe ich ihnen ein kleines Geschenk",true, "alessa");
                    //Item Erhalten, eine Feder von Alessa
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "„Falls sie jemals einen Arzt brauchen, schicken sie diese Feder einfach in die Nacht. Ich werde kommen.",true, "alessa");
                    dataForSave.secretEndingPartOne = true;
                    break;
                }

                while (indicatorforRätsel.number == 2) {
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.",true, "alessa");
                    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await ƒS.Speech.tell(characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.",true, "alessa");
                    break;
                }

                while (indicatorforRätsel.number == 1) {
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.",true, "alessa");
                    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await ƒS.Speech.tell(characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.",true, "alessa");
                    dataForSave.variableRätselsceneAlessa1 = true;
                    break;
                }

                while (indicatorforRätsel.number == 0) {
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "Ach kommen sie, wirklich 0",true, "alessa");
                    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Entschuldigen sie bitte. Nächstes Mal werde ich sie nicht enttäuschen", true, "spieler");
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "So nächstes Mal also, ich zähle darauf.  Aber was, wenn doch?",true, "alessa");
                    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich versichere ihnen, es wird kein, wenn doch geben. Und falls doch, dann dürfen sie sich von mir eine Flasche ihrer Wahl wünschen", true, "spieler");
                    await ƒS.Speech.tell(characters.alessaButWithoutName, "Einverstanden. Eine Flasche gefüllt mit dem Inhalt meiner Wahl",true, "alessa");
                    break;
                }
                break;

        }

        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Woher haben sie eigentlich diese Rätsel?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Ach die, aus einer Höhle, ein gerissenes Männchen wollte mit mir ebenfalls Spielen und ich empfand seine als äußerst Lustig",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ein Rätselspiel in einer Höhle. Verrückte Welt", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Ein Rätselspiel in einer Höhle zählt wahrscheinlich nicht mal zu den 50 kuriosesten Dinge, die ich bisher erlebt habe"),true, "alessa";
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nicht mal zu den 50 besten wow, Stella würde sie lieben", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Stella?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Eine Kundin, die vor kurzem hier war. Sie ist sehr interessiert an... so ziemlich allem. Ja das ist eine sehr gute Beschreibung", true, "spieler");
        //Ja das ist eine sehr gute Beschreibung
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube sie würden sie mögen", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Vielleicht, vielleicht auch nicht, vielleicht treffe ich diese Stella ja eines Tages",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Glauben sie mir, falls sie sich begegnen, werden sie Sie erkennen. Zumindest kann ich mir nicht vorstellen, dass Stella nicht total ausflippt, wenn sie so eine Stilbewuste Ikone sieht", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Sie Charmeur. Bleiben sie am Leben, es wäre tragisch würde ich bei meinem nächsten Besuch jemand anderes vorfinden",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich werde mein Bestes geben. Bis zum nächsten Mal…", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wie war noch gleich ihr Name?", true, "spieler");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "Nächstes mal",true, "alessa");
        await ƒS.Speech.tell(characters.alessaButWithoutName, "....vielleicht",true, "alessa")
        await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, middleToLeave());
        ƒS.update();
        ƒS.Character.hide(characters.alessa);
        ƒS.update();
        await ƒS.update(1);

        while (dataForSave.entscheidungEinsamerberg === true) {
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.alessa, 0, 2);
            await ƒS.Location.show(locations.blackout);
            await ƒS.update(2);
            return "Einsamerberg";
        }
        while (dataForSave.entscheidungKristalhöhle === true) {
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.alessa, 0, 2);
            await ƒS.Location.show(locations.blackout);
            await ƒS.update(2);
            return "Kristalhöhle";
        }
        while (dataForSave.entscheidungMeer === true) {
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.alessa, 0, 2);
            await ƒS.Location.show(locations.blackout);
            await ƒS.update(2);
            return "Meer";
        }











    }
}