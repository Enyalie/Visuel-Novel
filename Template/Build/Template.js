"use strict";
var Template;
(function (Template) {
    async function endScene() {
        await Template.ƒS.Location.show(Template.locations.end);
        Template.ƒS.update(10);
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    Template.endScene = endScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        puzzle: {
            duraion: 1,
            alpha: "",
            edge: 1
        }
    };
    //Animations
    function middleToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 100) },
            end: { translation: Template.ƒS.positionPercent(30, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.middleToLeft = middleToLeft;
    function middleToLeave() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.middleToLeave = middleToLeave;
    function middeToLLeaveFast() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.middeToLLeaveFast = middeToLLeaveFast;
    function middeToLLeaveSlow() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 4,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.middeToLLeaveSlow = middeToLLeaveSlow;
    function leftToLLeave() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToLLeave = leftToLLeave;
    function leftToLLeaveSlow() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToLLeaveSlow = leftToLLeaveSlow;
    function rightToLLeaveNormal() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.rightToLLeaveNormal = rightToLLeaveNormal;
    function leftToLLeaveNormal() {
        return {
            start: { translation: Template.ƒS.positionPercent(70, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToLLeaveNormal = leftToLLeaveNormal;
    function enterToMiddle() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(50, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.enterToMiddle = enterToMiddle;
    function enterToMiddleslow() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(50, 100) },
            duration: 4,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.enterToMiddleslow = enterToMiddleslow;
    function enterToMiddleFast() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(50, 100) },
            duration: 0.8,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.enterToMiddleFast = enterToMiddleFast;
    function enterToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(70, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.enterToRight = enterToRight;
    function rightToMiddle() {
        return {
            start: { translation: Template.ƒS.positionPercent(70, 100) },
            end: { translation: Template.ƒS.positionPercent(50, 100) },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.rightToMiddle = rightToMiddle;
    //For 3 Characters
    function leftToMoreLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(20, 100) },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToMoreLeft = leftToMoreLeft;
    function MoreLeftToLeave() {
        return {
            start: { translation: Template.ƒS.positionPercent(20, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.MoreLeftToLeave = MoreLeftToLeave;
    function enterToRightExtrem() {
        return {
            start: { translation: Template.ƒS.positionPercent(200, 100) },
            end: { translation: Template.ƒS.positionPercent(80, 100) },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.enterToRightExtrem = enterToRightExtrem;
    function RightExtremToLeave() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.RightExtremToLeave = RightExtremToLeave;
    //ingame Menu
    let ingameMenubuttosn = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        close: "close"
    };
    let gameMenu;
    //open entspricht Menü ist open und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case ingameMenubuttosn.save:
                await Template.ƒS.Progress.save();
                break;
            case ingameMenubuttosn.load:
                await Template.ƒS.Progress.load();
                break;
            case ingameMenubuttosn.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    //Menu Shortcuts
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Menu is Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    //*vor dem Hintergrund komm der Sound*//
    Template.sound = {
        //themes
        tavern: "Sounds/Music/Stella and Elidibus theme.wav",
        alessa: "Sounds/Music/alessa theme version.wav",
        fragment: "Sounds/Music/Stellla Fragment.wav",
        soldir: "Sounds/Music/soldir poet king piano.mp3",
        living: "Sounds/Music/the gift of living.wav",
        //SFX
        fall: "Sounds/Sounddesign/Impact,Wood,Skid,Hard 5.wav",
        drink: "Sounds/Sounddesign/Drinking Sound Effect.mp3",
        searching: "Sounds/Sounddesign/bag searching.mp3",
        footstep: "Sounds/Sounddesign/Footsteps.mp3",
        drag: "Sounds/Sounddesign/drag monster.mp3",
        pour: "Sounds/Sounddesign/pour.mp3"
        //Character text generating sound
    };
    Template.locations = {
        tavernDay: {
            name: "Tavern daylight",
            background: "Images/Bckground/tavernbacground normal.jpg"
        },
        tavernSunset: {
            name: "Tavern sunset",
            background: "Images/Bckground/tavernbacground sunet.jpg"
        },
        tavernNight: {
            name: "Tavern Night",
            background: "Images/Bckground/tavernbacground night.jpg"
        },
        blackout: {
            name: "blackout",
            background: "Images/Bckground/black.jpg"
        },
        newFriends: {
            name: "newFriends",
            background: "Images/Bckground/BarScene.png"
        },
        unfinished: {
            name: "unfinished",
            background: "Images/Bckground/AlessaDoor.png"
        },
        end: {
            name: "endee",
            background: "Images/Bckground/ende.png"
        }
    };
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        barkeeper: {
            name: ""
        },
        stella: {
            name: "Stella",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/stella.png"
            }
        },
        alessaButWithoutName: {
            name: "unbekannter Pestdoktor",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Alessa.PNG"
            }
        },
        alessa: {
            name: "Alessa",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Alessa.PNG",
                sectret: "Images/Charakter/Alessa without mask.png"
            }
        },
        elidibusButWithoutName: {
            name: "unbekannter Jäger",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        elidibus: {
            name: "Elidibus",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Elidibuss.png"
            }
        },
        StellaAndElidibus: {
            name: "StellaAndElidibus",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Stella and Eli dancing.png"
            }
        }
    };
    //*data will be safed (game progress)*//
    Template.dataForSave = {
        nameBarkeeper: "",
        entscheidungEinsamerberg: false,
        entscheidungMeer: false,
        entscheidungKristalhöhle: false,
        variableKristalhöhle: false,
        variableRätselsceneAlessa1: false,
        secretEndingPartOne: false,
        secretEndingPartTwo: false,
        meterBarAlessa: false,
        alessaScore: 0,
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(ingameMenubuttosn, buttonFunctionalities, "gameMenuCSSClass");
        // ****SCENE HIERACHY!!!!!!!
        let scenes = [
            { scene: Template.firstStella, name: "Das komische Mädchen" },
            { scene: Template.firstAlessa, name: "Die mit den Krähen kommt" },
            { id: "Einsamerberg", scene: Template.secondStellaEinsamerberg, name: "Eine unerwartete reise", next: "Der unfreundliche Krieger" },
            { id: "Meer", scene: Template.secondStellaMeer, name: "Eine unerwartete reise", next: "Der unfreundliche Krieger" },
            { id: "Kristalhöhle", scene: Template.secondStellaKristalhöhle, name: "Eine unerwartete reise", next: "Der unfreundliche Krieger" },
            { id: "Der unfreundliche Krieger", scene: Template.firstElidibus, name: "Monsterjagd", next: "Der verlorene Mensch" },
            { id: "Der verlorene Mensch", scene: Template.thirdStella, name: "Nachklang", next: "Hinter der Maske" },
            { id: "Hinter der Maske", scene: Template.secondAlessa, name: "Eine Krähe unter Menschen" },
            { id: "HalloFremde", scene: Template.fourthStellawithAlessa, name: "Wer bist du" },
            { id: "Versprechen", scene: Template.secondEllidibusDestiny, name: "Alter Zeiten Willen", next: "Ich kenne dich." },
            { id: "AlterFreund", scene: Template.secondElidibus, name: "lange nicht gesehen" },
            { id: "Ich kenne dich.", scene: Template.fivedStella, name: "Melodie der Herzen" },
            { id: "Alessa", scene: Template.secretEnding, name: "Mit schwarzen Fügeln" },
            { id: "end", scene: Template.endScene, name: "the end" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstAlessa() {
        console.log("FudgeStory Template Scene Alessa starting");
        console.log("first Scene Alessa starting");
        console.log(Template.dataForSave);
        Template.ƒS.Sound.play(Template.sound.footstep, 1.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Eine Person mit Krähenmaske nährt sich der Tür.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Durch die Gesammte Bar geht ein Murmeln, fast wie ein Singsang.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du musst wirklich am ende sein, du musst wahrlich verückt sein, oder von der Pest verschlungen");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Solltest du durch die Nacht hinaus rufen flehend.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nach den Dunklen Schatten");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nach den schwarzen Federn.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Denn diesem Ruf wird folgegeleistet");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "doch vergiss nicht du närrisches Kind");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Mit jeder Heilung kommt-");
        Template.ƒS.Sound.play(Template.sound.alessa, 1.2, true);
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ja, Ja der Preis der Raben, ich hab dafür heute echt keine Zeit.", true, "alessa");
        await Template.ƒS.Location.show(Template.locations.tavernSunset);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Öhm, dürfte es etwas sein?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Whisky einen Doppelten bitte", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Einen doppelten also .... harter Tag?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Wie schwer kann es bitte sein still zu liegen?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also es kommt drauf an, je nachdem, also ähm. Wollen Sie jetzt echt eine Antwort von mir darauf?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Nein alles gut, es war", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Es war einfach ein langer Tag", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wissen sie ich möchte ihnen nicht zu nahetreten, aber lange bei ihnen heißt oft nicht gut.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So so, und dem ist so weil?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Naja ihres gleichen, taucht ja nicht grade an den schönsten Orten auf.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Meinesgleichen?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach kommen sie, sie wissen genau, was ich meine. Rabenmaske, schwarze Kleidung. Wollen sie etwa noch mehr Pestdoktor schreien?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben die Federn vergessen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bitte um verzeihung natürlich wollte ich nicht ihr wunderschönes Federgewandt vergessen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach wie schön das ihnen das Auffält, wissen sie es ist so schwer in dieser Branche sich Stilbewusst zu kleiden", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "aber ich nehme sie nur auf den Arm, mir ist schon bewusst welchen Eindruck ich auf Menschen mache", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke sie sind weniger furchteinflößend, wenn sie ihre Maske abnehmen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Vielleicht, ist dann immer nur ein wenig schwer, mit dem Alltag wissen Sie", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja ich kenne das, ich trage deswegen auch immer mein Barkeeper gesicht beim Arbeiten um unerkannt zu bleiben", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Okay Barkeeper, ich mag sie. Was halten sie von einem Spiel? Ich bräuchte wirklich ein wenig Ablenkung von dem ganzen Elend", true, "alessa");
        let keineWahl = {
            iPickYes: "Okay, lass uns Spielen"
        };
        let dialoguekeineWahl = await Template.ƒS.Menu.getInput(keineWahl, "choicesCSSClass");
        switch (dialoguekeineWahl) {
            //Path Yes for Game
            case keineWahl.iPickYes:
                console.log("Path Yes for Game");
                await Template.ƒS.Speech.tell(Template.characters.barkeeper, "Okay was schlagen Sie vor?");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Danke ihnen, okay für den Anfang einfach nur ein Rätselspiel. Nichts besonderes", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "also", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Was hat Wurzeln die keiner sieht. Ragt höher als Bäume und Wipfelsäume, wächst nie und treibt nicht und reicht doch ins licht?", true, "alessa");
                let rätsel1 = {
                    iPickTurm: "Ein Turm",
                    iPickBerg: "Ein Berg",
                    iPickWolke: "Eine Wolke",
                    iPickFluss: "Ein Fluss"
                };
                let indicatorforRätsel = {
                    number: 0
                };
                let rätsel1Entscheidung = await Template.ƒS.Menu.getInput(rätsel1, "choicesAlessa");
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
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sehr gut nächste Frage", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warten sie sagen, sie mir denn nicht, ob ich richtig war?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Am ende des Spieles gerne, nun denn Rätsel Nummer 2", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Zweiundreißig Schimmel auf einem roten hang-erst mahlen sie, dann stampfen sie und warten wieder lang", true, "alessa");
                let rätsel2 = {
                    iPickFliegenpilz: "Ein fliegenpilz",
                    iPickEinhörner: "Ein Einhorn",
                    iPickWindmühle: "Eine Windmühle",
                    iPickZähne: "Zähne" //right Answer
                };
                let rätsel2Entscheidung = await Template.ƒS.Menu.getInput(rätsel2, "choicesAlessa");
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
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sehr gut, sehr gut, ein letztes noch", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Etwas, das alles und jeden verschlingt: Baum, der rauscht, Vogel, der singt, frisst Eisen, zermalmt den härtesten Stein, Zerbeißt jedes Schwert, jeden Schrein, schlägt Könige nieder, schleift ihren Palast, trägt mächtigen Fels fort als leichte last", true, "alessa");
                let rätsel3 = {
                    iPickWasser: "Wasser",
                    iPickWind: "Wind",
                    iPickZeit: "Zeit",
                    iPickNichts: "Nichts"
                };
                let rätsel3Entscheidung = await Template.ƒS.Menu.getInput(rätsel3, "choicesAlessa");
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
                console.log(indicatorforRätsel.number);
                while (indicatorforRätsel.number == 3) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Hoho 3 von 3. Sehr gut mein lieber und danke für die großartige Unterhaltung, kommen sie. Als Dank gebe ich ihnen ein kleines Geschenk", true, "alessa");
                    //Item Erhalten, eine Feder von Alessa
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "„Falls sie jemals einen Arzt brauchen, schicken sie diese Feder einfach in die Nacht. Ich werde kommen.", true, "alessa");
                    Template.dataForSave.secretEndingPartOne = true;
                    break;
                }
                while (indicatorforRätsel.number == 2) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.", true, "alessa");
                    break;
                }
                while (indicatorforRätsel.number == 1) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.", true, "alessa");
                    Template.dataForSave.variableRätselsceneAlessa1 = true;
                    break;
                }
                while (indicatorforRätsel.number == 0) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach kommen sie, wirklich 0", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Entschuldigen sie bitte. Nächstes Mal werde ich sie nicht enttäuschen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So nächstes Mal also, ich zähle darauf.  Aber was, wenn doch?", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich versichere ihnen, es wird kein, wenn doch geben. Und falls doch, dann dürfen sie sich von mir eine Flasche ihrer Wahl wünschen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Einverstanden. Eine Flasche gefüllt mit dem Inhalt meiner Wahl", true, "alessa");
                    break;
                }
                break;
        }
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Woher haben sie eigentlich diese Rätsel?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach die, aus einer Höhle, ein gerissenes Männchen wollte mit mir ebenfalls Spielen und ich empfand seine als äußerst Lustig", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ein Rätselspiel in einer Höhle. Verrückte Welt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Ein Rätselspiel in einer Höhle zählt wahrscheinlich nicht mal zu den 50 kuriosesten Dinge, die ich bisher erlebt habe"), true, "alessa";
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nicht mal zu den 50 besten wow, Stella würde sie lieben", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Stella?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Eine Kundin, die vor kurzem hier war. Sie ist sehr interessiert an... so ziemlich allem. Ja das ist eine sehr gute Beschreibung", true, "spieler");
        //Ja das ist eine sehr gute Beschreibung
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube sie würden sie mögen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Vielleicht, vielleicht auch nicht, vielleicht treffe ich diese Stella ja eines Tages", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Glauben sie mir, falls sie sich begegnen, werden sie Sie erkennen. Zumindest kann ich mir nicht vorstellen, dass Stella nicht total ausflippt, wenn sie so eine Stilbewuste Ikone sieht", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie Charmeur. Bleiben sie am Leben, es wäre tragisch würde ich bei meinem nächsten Besuch jemand anderes vorfinden", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich werde mein Bestes geben. Bis zum nächsten Mal…", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie war noch gleich ihr Name?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Nächstes mal", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "....vielleicht", true, "alessa");
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.middleToLeave());
        Template.ƒS.update();
        Template.ƒS.Character.hide(Template.characters.alessa);
        Template.ƒS.update();
        await Template.ƒS.update(1);
        while (Template.dataForSave.entscheidungEinsamerberg === true) {
            await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            Template.ƒS.Speech.clear();
            Template.ƒS.Speech.hide();
            Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
            await Template.ƒS.Location.show(Template.locations.blackout);
            await Template.ƒS.update(2);
            return "Einsamerberg";
        }
        while (Template.dataForSave.entscheidungKristalhöhle === true) {
            await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            Template.ƒS.Speech.clear();
            Template.ƒS.Speech.hide();
            Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
            await Template.ƒS.Location.show(Template.locations.blackout);
            await Template.ƒS.update(2);
            return "Kristalhöhle";
        }
        while (Template.dataForSave.entscheidungMeer === true) {
            await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich verlass mich drauf.", true, "spieler");
            Template.ƒS.Speech.clear();
            Template.ƒS.Speech.hide();
            Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
            await Template.ƒS.Location.show(Template.locations.blackout);
            await Template.ƒS.update(2);
            return "Meer";
        }
    }
    Template.firstAlessa = firstAlessa;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstElidibus() {
        console.log("FudgeStory Template Scene Elidibus starting");
        console.log("first Scene Elidibus starting");
        Template.ƒS.Sound.play(Template.sound.footstep, 1.2);
        Template.ƒS.Sound.play(Template.sound.drag, 0.8);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ein Mann betritt die Bar und läut Zielstrebig zur Theke, hinter ihm bildet sich eine Spur aus schwarzen Blut");
        await Template.ƒS.Location.show(Template.locations.tavernNight);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.enterToMiddle());
        Template.ƒS.Sound.play(Template.sound.fall, 0.8);
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Zieh ein Becher von der Belohnung ab", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Okay wow, aber dürfte ich fragen wie ihr so schnell wart. Der Auftrag wurde doch erst heute Morgen ausgegeben", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Es wäre schneller gegangen, wären die Angaben präziser gewesen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Mann vor dir ext das Bier, das du ihm hingestellt hast binnen sekunde");
        Template.ƒS.Sound.play(Template.sound.drink, 1.2);
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Also was ist der nächste Auftrag!", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Immer mit der ruhe, ihr seid doch grade erst angekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wollt ihr euch nicht erst einmal ausruhen? Die Nacht bricht sowieso heran", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Ich versichere dir Bartender. Ich muss mich nicht ausruhen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ähem" + " " + Template.dataForSave.nameBarkeeper, true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "euer Name nähme ich an. Gut" + " " + Template.dataForSave.nameBarkeeper, true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Jetzt nennet mir den nächsten Auftrag!", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was bitte treibt euch zu diesem Dunkeln stunde so versessen auf die Jagd?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Was Interessiert es euch. Ich entledige mich eures Problems und ihr Bezahlt mich.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bin ein Barkeeper, Informationen sind mein Geschäft und genau diese verlangt ihr ja immerhin grade von mir", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "also Jäger, was treibt euch zu dieser stunde so versessen auf die Jagd", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Gold.... und jetzt den Auftrag", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "God also", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun gut Jäger, da ihr so veressen auf Gold seid, was haltet ihr von einem Werwolf?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Was ich davon halte?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "eine vielversprechende Jagd würde ich sagen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Wir sehen uns in 2 Wochen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach eines noch Jäger", true, "Spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "hm?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nächstes mal, sagt mir doch bitte den wahren grund", true, "Spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Kümmert euch, um euren eigenen dreck", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Jäger geht hinaus in die Nacht");
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.middleToLeave());
        Template.ƒS.update();
        Template.ƒS.Character.hide(Template.characters.elidibus);
        Template.ƒS.update();
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.firstElidibus = firstElidibus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstStella() {
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.tavernDay);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du bist Bartender einer gut besuchten Bar, in einem kleinen Ort.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Als Barkeeper ist es nicht nur deine Aufgabe köstliche Getränke zu servieren, sondern auch als Psychologe zu Diensten zu sein");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Und wer weiß vielleicht kannst du wirklich etwas verändern");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Doch dies ist keine Geschichte, über einen Bartender und seine Gäste.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Dies ist eine Geschichte, über einen mürrischen Krieger");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "einer vermummten Doktorin");
        await Template.ƒS.Speech.tell(Template.characters.narrator, " und einer....Da kommt sie ja schon.");
        Template.ƒS.Sound.play(Template.sound.tavern, 1.2, true);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddleFast());
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh ihr Götter wie das duftet und sind das etwa frische Pilze aaaah och nein wie süß ein Kürbis und ist das etwa", true, "stella");
        Template.ƒS.Sound.play(Template.sound.fall, 1.2);
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh tut mir leid, ähm, ich-ich räume das sofort wieder auf.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, "Machen Sie sich keine Sorgen junge Frau, das passiert schon mal");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm, es tut mir dennoch unfassbar leid. Stella übrigens. Und du bist?", true, "stella");
        Template.dataForSave.nameBarkeeper = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sehr erfreut,Ich bin" + " " + Template.dataForSave.nameBarkeeper + "" + "der Barkeeper  dieses kleinen Ambientes", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Stella, sagen sie mir, darf ich ihnen etwas zum trinken anbieten?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "„Hmmmmmmm, trinken hmmm, sie haben so viel auf ihrer Karte, was soll ich nur. Okay Okay wie wärs. ", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aaaaaaah ich habs", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Überraschen sie mich", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun aber langsam, ich kenne sie doch kaum, wie soll ich ihnen da etwas Empfehlen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dennoch Sie sind bestimmt durstig, also sollte mir einen Hinweis reichen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagen sie mir bitte ihre Lieblingsblume", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm meine lieblingsblume hmmmm. Ich denke die Kirschblüte", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Die Schönheits des Lebens in seiner Zerbrechlichkeit also", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In diesem fall, ja genau würde ich ihnen folgendes Empfehlen.", true, "spieler");
        let drinkempfehlung = {
            iPickBier: "Zwergenfeuer",
            iPickTequilaSunrise: "TequilaSunrise",
            iPickDrachenwhiksy: "Drachenwhisky"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(drinkempfehlung, "choicesCSSClass");
        switch (dialogueElement) {
            //Path Bier
            case drinkempfehlung.iPickBier:
                console.log("Case Bier ab jetzt abspielen.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke für sie, ja genau einmal ein Zwergenfeuer unser Haus Bier. ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ist etwas nicht Inordnung miss?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm doch doch sorry, es ist nur. Was ist das?", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Meinen Sie etwa den Zwerg?", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(200);
                await Template.ƒS.Speech.tell(Template.characters.stella, "Z-w-e-r-g", true, "stella");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In Gedanken:Ist es wirklich möglich bisher noch nie etwas von Zwergen gehört zu haben? ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun ja, ähm wie beschreibe ich Ihnen das am besten", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Zwerge sind Meister der Schmiede, es gibt kein Feuer das für sie zu heiß  und keinen Stein der für sie zu hart ist.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ebenfalls legen sie viel Wert auf ihre Bärte. Das Beeindruckendste an ihnen ist, aber vor allem ihre Feier Kunst. ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Riesenfeste mit Maßen an Bier und Fleisch. Grade ihr Pökel Fleisch ist legendär.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oooh das klingt ja wundervoll, wo kann ich solche Zwerge antreffen und dieses Bakel Fleisch probieren.", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich muss sie einfach sehen, jetzt wo sie mir so viel von ihnen Erzählt haben, bitte ", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "bitte, bitte, bitte, bitte bitte bitte Sie müssen mir sagen wo ich sie finde.", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also wenn sie wirklich Zwerge sehen wollen, dann, müssen sie nach Norden zu dem einsamen Berg reisen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Der einsame Berg also….ich danke ihnen vielmals", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella springt wie ein Wirbelwind auf uns verlässt die Bar…..ohne zu Bezahlen ");
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middeToLLeaveFast());
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.update();
                Template.dataForSave.entscheidungEinsamerberg = true;
                break;
            //Path Tequila Sunrise
            case drinkempfehlung.iPickTequilaSunrise:
                console.log("Path Tequila Sunrise ab jetzt abspielen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In dem fall, denke ich bestimmt das ich sie damit begeistern kann", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Uuuuuh schmeckt das süß und diese Farbe, wie ein Sonnenuntergang", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "eigentlich soll es einen Sonnenaufgang Symbolisieren", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wissen Sie. Jedes Mal, wenn ich diesen Cocktail mache, denke ich an meinen letzten Strandurlaub zurück und erinnere mich ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "an das Lila und Organe, das langsam die letzten Schatten der Nacht am Horizont durchbricht.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es tut mir furchtbar leid, ich muss sie bestimmt langweilen.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Nein überhaupt nicht, bitte erzählen Sie mir mehr", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So viel mehr gibt es gar nicht, das alles ist schon eine Weile her, damals war ich selbst noch Abenteuer und bereiste die Welt", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso tuen sie es jetzt nicht mehr? Was hält sie davon ab", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach weißt du, da war ein Kampf und ein Pfeil und seit dem, hach ja jeder wird Irgendwann mal sesshaft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich nicht niemals! Wie könnte ich auch, es gibt soviel unglaubliches zu sehen gibt. ", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Diese Welt ist so voller Wunder, wie könnte ich da jemals nicht alles davon sehen und erleben wollen", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Imerhin ist dieses Leben doch so kurz, wie soll ich da jemans aufhören zu suchen", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke das ist keine Entscheidung die man bewusst trifft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke für jeden von uns ko-", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Meer also", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie bitte", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Meer, das wird mein nächstes Ziel sein. Ich danke ihnen, bis bald", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella steht auf, zwinkert dir noch einmal zu, wirft 1 Goldmünze auf den Tisch und macht sich Richtung anbrechende Dämmerung. ");
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeave());
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.update();
                Template.dataForSave.entscheidungMeer = true;
                break;
            //Path Drachenwhisky
            case drinkempfehlung.iPickDrachenwhiksy:
                console.log("Path Drachenwhisky ab jetzt abspielen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sie sehen mir aus, als könnten sie was vertragen.");
                Template.ƒS.Sound.play(Template.sound.drink, 1.2);
                await Template.ƒS.Speech.tell(Template.characters.stella, "Götter WAS IST DAS", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Selbstgebrannter Drachenwhisky, nur das Beste für unsere Kundschaft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "sagen sie mir nicht, Leute trinken sowas freiwillig, das brennt ja wie Drachen Feuer…..", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, ".... ........ .....  ...... daher also der Name", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun Stella war es richtig, was treibt sie in unsere Stadt?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm nicht viel, ich bin einfach nur auf der Durchreise und wolle mir einen Trink nehmen, eigentlich war die Idee dabei nicht vergiftet zu werden", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bitte vielmals um Entschuldigung, es ist nicht immer leicht den Geschmack meiner Kundschaft vorauszusagen. ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nächstes Mal enttäusche ich sie nicht, ganz sicher", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Nächstes Mal also, sie sind aber zuversichtlich, dass ich wieder herkomme", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nur so ein Gefühl", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Stella, auf der Durchreise, wo soll es denn hingehen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wenn ich das nur wüsste", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Diese Welt ist so groß, wie soll man da überhaupt wissen, wohin man gehen soll.", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also falls sie mir diese Chance erlauben, könnte ich ihnen einen Vorschlag machen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Hmmmmmmm", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine sorge ich kam selbst viel herum, ich kenne da ein paar schöne Orte", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "waren sie den schon mal in einer Kristalhöhle?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dachte ich es mir doch, hier bitte nehmen sie als Entschuldigung diese Karte sie führt sie direkt dorthin", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh mein Gott, danke danke danke danke danke danke", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella steht wie ein Wirbelwind auf und rennt zur Tür ");
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middeToLLeaveFast());
                await Template.ƒS.update(2);
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddle());
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm tut mir furchtbar leid, ich muss ja noch bezahlen.", true, "stella");
                Template.ƒS.Sound.play(Template.sound.searching, 1.2);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Passt schon, kommen Sie einfach wieder", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das werde ich", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.narrator, " Stella lächelt dir zu ehe Sie in die anbrechende Nacht hinaus rennt");
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeave());
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.update();
                Template.dataForSave.entscheidungKristalhöhle = true;
                console.log(Template.dataForSave.entscheidungEinsamerberg);
                console.log(Template.dataForSave.entscheidungKristalhöhle);
                break;
        }
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.firstStella = firstStella;
})(Template || (Template = {}));
//last one
var Template;
//last one
(function (Template) {
    async function fivedStella() {
        console.log("FudgeStory Fived Stella starting");
        console.log("FudgeStory Fived Scene Stella starting");
        console.log("Final Scene starting");
        await Template.ƒS.Location.show(Template.locations.tavernNight);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.play(Template.sound.tavern, 1.2, true);
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddle());
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh du bist wieder da", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich hoffe das dir nichts passiert ist, du gingst letztes Mal so apprubt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh ja ja natürlich, ich musste, ähm brauchte nur etwas Zeit für ähm dinge", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Tut mir leid ich will ungern darüber reden.", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Muss es nicht, dennoch freut es mich das du deinen Weg erneut in meine Tür gefunden hast", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Etwas das ich hoffentlich noch viele Male tun werde", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber sagt mir,", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "War Alessa Arg böse das ich gegangen bin, ich war keine 10 Schritte Entfernt da wollte ich umdrehen um ihr zu sagen das es nicht an ihr liegt nur, naja hätte ich mich so erklären müssen", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine Sorge Stella, Alessa war überhaupt nicth böse auf dich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dennoch wird sie sich bestimmt darüber freuen, wenn ihr, ihr das sagt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sofern ich die chance dazu bekommen sollte", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh glaubt mir das werdet ihr", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso seid ihr euch dessen so sicher?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Weil ein Barkeeper nun Mal seine Informationen hat, aber dies soll sie euch lieber selbst Erzählen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun denn Stella, wohin werdet ihr eigentlich als nächstes reisen?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin mir nicht sicher, vielleicht laufe ich einfach los und schaue wohin mich meine Füße so tragen", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So ganz ohne Ziel?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Auf der Reise wird sich bestimmt eines finden", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Immerhin bin ich weit davon entfernt diese Welt bereits vollends erkundet zu haben", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie immer bewundere ich eure Abenteuerlust", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und doch, so ganz alleine dort draußen habt ihr keine Angst?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso sollte ich. Das schlimmste was mir passieren kann, ist das ich um mein Leben renne", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und dabei hinfällst und dir das Bein brichst.", true, "alessa");
        Template.ƒS.Sound.play(Template.sound.footstep, 0.8);
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeft());
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToRight());
        //Alessa zeigen
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du bist wahrlich naiv, alleine durch die Welt zu reisen.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie lange hast du unser Gespräch bereits belauscht.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Lang genug um abermal einen Dramatischen auftritt hinzulegen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und lang genug um Stella davon zu bewahren etwas derart törrichtes zu tun ", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin überhaupt nicht Naiv, bisher kam ich auch alleine immer sehr gut zurecht");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "vermutlich schon, aber so alleine durch die Welt reisen ist doch auch furchtbar einsam. Möchtest du nicht lieber in Begleitung reisen ", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ist das etwa, ein angebot das du mitkommst", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Leider nicht, ich bin nicht so die große Abenteurerin. Aber", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich kenne da jemanden, den du vielleicht kennenlernen willst", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ach echt! wen?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dass muss dir die Person schon selber sagen.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "...", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "...", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "kommt da no-", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Jaa jaa, götter wo war ich.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "IIIIIIIIIch kenne da vielleicht jemanden den du kennenlernen willst", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "...", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "IIIIIIIICCHH KEEEEENNNEE, meine güte Eli jetzt schwing deinen Arsch hier herüber.", true, "alessa");
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.leftToMoreLeft());
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.rightToMiddle());
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.enterToRightExtrem());
        // aneigen von Eli
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Hey...", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...Hey?...Freut mich dich kennen zu lernen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Gleichfalls", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "und du gehst gerne auf Abenteuer?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ja, kann man so sagen. Ich bin zumindest gut im Kämpfen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ah, das klingt doch nett", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Das kann man sich ja nicht mehr durchlesen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli geh nicht nur gerne auf Abenteuer, er LIEBT ES. Und er kann nicht nur gut Kämpfen, sondern war Mal der Beste Schwertkämfper im ganzen Königreich.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und du müsstes Mal sei-", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "ALESSA!", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "das reicht.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber wieso denn?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "das war doch gerade so spannend.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "echt, fandest du?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "klar, mister mysteriöser namensloser Krieger.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Tzz", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Elidibus, oder um es in Lessys Worten zu sagen Eli", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Lessy?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "psssstt, wir reden später", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Was ein schöner Name. Ich bin Stella", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Freut mich dich kennen zu lernen Stella.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "das sagtest du bereits.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "stimmmt, tut mir leid", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sagt, falls Alessa nicht über dich log. Kennst du echt soviel von der Welt?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "man munkelt, das ich dass tue", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "was würdest du gerne sehen?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Alles", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Was meinst du mit alles?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Naa eben alles, halt alles alles alles.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Okay das könnte ein wenig dauern, da hast du dir echt was vorgenommen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hab ja auch noch ein ganzes Leben vor mir, ich denke das wird schon", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Mit der Einstellung definitiv. Viel glück dir Stella, ich hoffe das wir uns eine-", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Göötter Eli, ich schwöre bei all meinen Krähen wenn du nich gleich", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ist ja gut! Lessy dich hab ich damals auch nicht so gedrängt.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Unsere Geschichte musste Riem damals auch nicht durchlesen um eine Note zu geben, also mach hinne", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wo ist Riem?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich hab nee bessere frage, Wer ist Riem ", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich hab nee noch bessere, was ist Riem", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du sprichst in Rätseln mein Freund", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aber du hast doch, ihr habt doch gerade noch ääähh", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "pssst jetzt, wir waren gerade in einem wichtigen Gespräch.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also Eli", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ja, ja", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Also Stella, wie mir Lessy berichtete seid ihr, äh du noch sehr unerfahren in dieser Welt.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Würde ich zwar nicht sagen, aber eventuell schon");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Alles kann ich dir zwar vielleicht nicht zeigen, aber ein wenig kenne ich", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wenn du willst, begleite ich dich gerne auf deiner nächsten reise", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "klar, warum nicht.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Klasse dann lass uns aufbrechen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Was jetzt sofort?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Du willst doch alles sehen, Zeit ist ein Luxus den wir uns nicht mehr erlauben können.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ou-Okay dann gehen wir?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Nach dir, meine junge Abenteurerin.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Warte eins noch.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, " " + Template.dataForSave.nameBarkeeper + " " + " Es war mir ein Freude dich kennen lernen zu dürfen, dich natürlich auch Alessa. Bis zum nächsten Mal!", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich verlass mich drauf.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay, dann tschau. Ich komm so oft vorbei wie ich es schaffe", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ab und zu reicht und jetzt geh, ich sehe doch schon wie du auf heißen Kohlen sitzt.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso sollte man auf-", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "das erzählt dir Elidibus auf euren reisen und jetzt ab.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay okay, beeeeeeeyyy", true, "stella");
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.MoreLeftToLeave());
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Danke dir Lessy.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Pass auf sie auf", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Werde ich.", true, "Elidibus");
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.RightExtremToLeave());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also die beiden sind ja schon süß, aber irgendwie war das jetzt sehr schnell oder nicht?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Leider ja, aber dir ist Eli ja auch nicht die ganze Zeit auf deinen Füßen rumgetanzt.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Au das stelle ich mir schmerzhaft vor", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "War es, aber ich hoffe das es dass Wert war.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Bestimmt, das wird schon mit den beiden", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "ach du hast ja keine ahnung.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was hat es eigentlich mit dieser Melodie auf sich?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Das ist eine lange Geschichte, die ich dir gerne ein ander Mal erzähle, wenn wir mehr Zeit haben", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach wir sehen uns also noch öfter?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nur falls du dich als Rätselkönig erwiesen hast", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube das habe ich mitlerweile.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Das wird sich noch Zeigen.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was steht jetzt eigentlich bei dir an?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Gleich, wir müssen auf unser timing achten.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Timing für was?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Einen dramatischen auftritt, oder eher abschied.", true, "alessa");
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        Template.ƒS.Character.hide(Template.characters.alessa);
        await Template.ƒS.Location.show(Template.locations.blackout);
        Template.ƒS.update(2);
        Template.ƒS.Sound.play(Template.sound.living, 1.2, true);
        await Template.ƒS.Character.show(Template.characters.StellaAndElidibus, Template.characters.StellaAndElidibus.pose.normal, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Beende die Geschichte, wann immer du dich bereit dazu fühlst.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Bist du dir sicher?");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Danke fürs Spielen");
        Template.ƒS.Sound.fade(Template.sound.living, 0, 2);
        // gehen zur Tür und die beiden sehen wie sie lachend tränend singen      
        if (Template.dataForSave.secretEndingPartOne && Template.dataForSave.secretEndingPartTwo == true) {
            Template.ƒS.Character.hide(Template.characters.StellaAndElidibus);
            Template.ƒS.Speech.clear();
            Template.ƒS.Speech.hide();
            Template.ƒS.update(2);
            return "Alessa";
        }
        else {
            Template.ƒS.Character.hide(Template.characters.StellaAndElidibus);
            Template.ƒS.Speech.clear();
            Template.ƒS.Speech.hide();
            Template.ƒS.update(2);
            return "end";
        }
    }
    Template.fivedStella = fivedStella;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function fourthStellawithAlessa() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella meets Alessa starting");
        console.log("fourth Scene Stella starting");
        Template.ƒS.Sound.play(Template.sound.tavern, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.tavernDay);
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh Stella, freut mich dich zu sehen, gehts dir wieder besser?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich habe auf jeden Fall das Erledigt, was ich Erledigen wollte", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber lass uns doch nicht darüber reden, wie ist es dir ergangen?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja wie immer halt, Kunden waren hier ich gab Getränke aus", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das normale Leben hinter der Theke halt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Du bist nur eine Entscheidung entfernt davon das zu ändern", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und die durstigen Gäste ohne Zwergenfeuer lassen, wohl kaum", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wie du meinst", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ist das überhaupt Lustig? So am Thresen die ganze Zeit zu stehen und nur zu zuhören?", true, "stella");
        let fourthWallbreak = {
            iPickYes: "Ja, schon",
            iPickNo: "Nein, absolut nicht"
        };
        let dialoFourthWallBreak = await Template.ƒS.Menu.getInput(fourthWallbreak, "choicesCSSClass");
        switch (dialoFourthWallBreak) {
            case fourthWallbreak.iPickYes:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es gibt spannenderes, dennoch macht es mir spaß diese Arbeit auszuführen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Obgleich ich manchmal schon gerne dabei wäre, statt nur zuzuhören und Empfehlungen zu geben", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dennoch", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es ist kein Abenteuer reiches Leben mehr, aber dennoch ein Gutes", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich habe ein Dach über den Kopf, was zu Essen und immer gute Gesellschaft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es ist also wesentlich ertragbarer als du glaubst", true, "spieler");
                break;
            case fourthWallbreak.iPickNo:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja muss halt sein, irgendwie muss man halt über die runden kommen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich würde aber lügen, wenn ich sagen würde, das ich nicht den ruf der Welt vermisse", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In vielerlei Hinsicht beneide ich dich sogar Stella", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Du bist alles was mein jüngeres ich sein wollte", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Abenteuer froh, Welt offen, stark mutig", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Vielleicht ja in einem anderen Leben", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "vielleicht werde ich ihn eines Tages wieder hören", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "vielleicht sogar wieder in diesem", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "du wirst schon sehen, ich hab da so ein Gefühl", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "der Ruf wird kommen, du musst nur hinhören und ihm folgen", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ich hoffe du hast recht", true, "spieler");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.stella, "Übrigens, ich hab auf dem Fest von einem Jäger gehört", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Er muss ja ziemlich bekannt sein, falls man vom ihm redet", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Natürlich, immerhin hat er einen Werwolf besiegt und das mit bloßen Händen", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Mit bloßen Händen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wow", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "so viel hatte ich ihm tatsächlich nicht zugetraut", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sag mir nicht du kennst ihn", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kennen tue ich Elidibus jetzt nicht wirklich, selbst seinen Namen kenne ich nur durch eine Freundin.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aber ja, ich gab ihm den Auftrag", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "DU GIBST AUFTRÄGE RAUS", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warum sollte ich nicht? Woher glaubst du bitte, kenne ich all diese Orte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "uuuuuh, kannst du mir auch einen geben?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella bist du überhaupt eine Kämpferin?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Noch nicht, aber ich kann es ja werden", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du würdest echt alles für ein Abenteuer machen oder?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Das dir das jetzt erst klar wurde", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Du solltest eventuell dennoch erst mal damit Anfangen Kämpfen zu lernen, bevor du auf Monsterjagd gehst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wer sagt denn das ich nicht Kämpfen kann?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Du vor grade eben erst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Nein ich sagte, dass ich keine Kämpferin bin, nicht das ich nicht Kämpfen kann", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Natürlich habe ich gelernt mich zu verteidigen, es ist nur einfach so. Ich töte nicht gerne", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und wieso willst du dann einen Auftrag?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Weil ich so Leuten helfen könnte. Und Monster sind ja auch keine guten Wesen!", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "eventuell auch, weil ich langsam ein wenig Geld brauche", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Daher kommt also das Interesse", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Leider muss ich dich enttäuschen, ich habe grade keine Jobs", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also ich hätte vielleicht einen", true, "alessa");
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        Template.ƒS.Sound.play(Template.sound.alessa, 1.2, true);
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeft());
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich hatte fast nicht mehr mit dir gerechnet", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Als ob ich jemals vor einer Herausforderung zurückschrecken würde", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich hatte heute nur viel zu tun, deswegen meine Verspätung", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie unhöflich von mir. Du musst bestimmt Stella sein", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "öhm", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, " Ja, bin ich. Wer bist du? Und woher kennst du mich? Und wieso hast du nee Maske? Und sind das echte Federn, an diesem Mantel?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du darfst mich Alessa nennen, die Maske ist gegen Bakterien und zum Schutz, von unserem gemeinsamen Freund, ja sind es, schön oder?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wieeeee du hast ihr sofort deinen Namen gesagt. Ich musste hart dafür Arbeiten", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du hast so bezaubert von ihr geredet, da kann ich doch nicht anders", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Warte, er hat was", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, hab ich dir was getan und natürlich nur Gutes Stella", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay darüber reden wir später, aber zu erst", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Du siehst einfach sooooooooooooooo hübsch aus!", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Bist du auch Abenteurerin?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Mitnichten, ich bin Doktor, man könnte sagen ein sehr guter", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Seit wann sehen Doktoren denn so ", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Modebewusst aus. Tun sie nicht, ich bin da besonders", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber genug von mir, Stella spielst du gerne?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ähm ich denke schon", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du hättest sowieso keine Wahl gehabt keine sorge", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Sehr gut, dann spielen wir", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dieses Mal aber ein wenig was schwierigeres, immerhin ist " + Template.dataForSave.nameBarkeeper + " schon geübt in meinen Rätseln", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wurde geschlagen, aber nicht verwundet. Bin eine Mauer und doch stehe ich nicht still. Was bin ich? ", true, "alessa");
        let spielenMitStellaScene4 = {
            iPickolzpuppe: "eine Holzpuppe",
            iPickRitter: "ein Ritter",
            iPickBoxsack: "ein Boxsack"
        };
        let indicatorforRätselszene4 = {
            number: 0
        };
        let rätselSpielMitStella = await Template.ƒS.Menu.getInput(spielenMitStellaScene4, "choicesAlessa");
        switch (rätselSpielMitStella) {
            case spielenMitStellaScene4.iPickolzpuppe:
                await Template.ƒS.Speech.tell(Template.characters.stella, "aber eine Holzpuppe steht doch still?", true, "stella");
                break;
            case spielenMitStellaScene4.iPickRitter:
                await Template.ƒS.Speech.tell(Template.characters.stella, "There will come a soldier Who carries a mighty sword He will tear your city down, oh lei-oh lai-oh Lord", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh tut mir leid, es hat mich nur an etwas erinnert.", true, "stella");
                indicatorforRätselszene4.number++;
                let versteckterSong = {
                    iPickSong: "There will come a poet",
                    iPickAntwort: "An was?",
                    iPickJoke: "Einen trinken"
                };
                let schlüsselStellaWarheit = await Template.ƒS.Menu.getInput(versteckterSong, "choicesCSSClass");
                switch (schlüsselStellaWarheit) {
                    case versteckterSong.iPickSong:
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Whose brow is laid in thorn Smeared with oil like Davids boy, oh lei-oh lai-oh Lord", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Du", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Du kennst den Song", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Klar kenne ich den Song, warte mal kurz", true, "spieler");
                        Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
                        await Template.ƒS.Location.show(Template.locations.blackout);
                        await Template.ƒS.Character.hide(Template.characters.alessa);
                        await Template.ƒS.Character.hide(Template.characters.stella);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube ich erinnere mich auch noch an die Noten", true, "spieler");
                        Template.ƒS.Sound.play(Template.sound.soldir, 0.8);
                        await Template.ƒS.Progress.delay(10);
                        Template.ƒS.Sound.fade(Template.sound.soldir, 0, 2);
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "und was meinst du?", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Das war", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Also", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "das", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "es war einfach wunderschön", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "seit wann kannst…Du Klavier spielen", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja spielen kann ich jetzt nicht wirklich, das bisschen rumgeklimmper, aber ich habe es als Kind gelernt", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Klimpern, war das nicht. Es war wirklich sehr gut", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "vielleicht werden wir in Zukunft das machen, anstatt zu Spielen", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Danke euch. Ich habe ganz vergessen wie schön es ist zu Musizieren", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie eine eigene Welt", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "sag mal", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "dürfte ich eventuell etwas spielen?", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "ich bin nicht sonderlich gut aber", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist egal, sei mein Gast", true, "spieler");
                        Template.ƒS.Sound.play(Template.sound.fragment, 0.8);
                        await Template.ƒS.Progress.delay(30);
                        Template.ƒS.Sound.fade(Template.sound.fragment, 0, 2);
                        await Template.ƒS.Speech.tell(Template.characters.stella, "mehr kann ich leider nicht", true, "stella");
                        await Template.ƒS.Location.show(Template.locations.tavernSunset);
                        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(30, 100));
                        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(70, 100));
                        await Template.ƒS.update(1);
                        Template.ƒS.Sound.play(Template.sound.alessa, 1.2, true);
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das macht es nicht weniger schöner", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie heißt das Stück. Es ist wirrklich wahnsinnig schön", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich weiß es nicht, ich kenne diese Melodie einfach, sie begleitet mich schon mein Leben lang");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und sie ruft dich hinaus in die Welt.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "JA GENAU", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Hörst du es etwa auch?", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hm?", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nein, nein ich höre keine Melodie, aber ich kenne diese Worte. Ein ", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ein sehr guter Freund hat mal etwas sehr ähnliches zu mir gesagt", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "ich...Ich sollte ihn dir mal vorstellen. Ich glaube du wirst ihn mögen", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "er hat dir also was ähnliches gesagt....", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich hoffe die Gelegenheit wird sich bieten.", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war wirklich unfassbar schön dich kennenzulenen Alessa, ich hoffe wir können das wiederholen", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "tut mir leid, ich werde mich für heute Entschuldigen", true, "stella");
                        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.leftToLLeave());
                        Template.ƒS.update();
                        Template.ƒS.Character.hide(Template.characters.stella);
                        Template.ƒS.update();
                        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.rightToMiddle());
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hab ich was falsches gesagt", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bin mir nicht sicher. Ich weiß nur das ich Stella noch nie so förmlich erlebt habe", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich wusste nicht Mal das sie so förmlich sein kann", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Auch wenn ich es hasse das zu sagen, weil ich", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "weil ich wirklich daran geglaubt habe", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wollte das du recht hast. Aber", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "das heißt dann  wohl, das ich unser kleines Spiel gewonnen habe", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Trotzdem danke für den versuch.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So glaubst du das.", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich würde sagen wir gehen  in die zweite runde", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "das alles fängt grade erst an.", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du wirst schon sehen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Bis in ein paar Tagen " + Template.dataForSave.nameBarkeeper, true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wobei, ihr kennt nicht reinzufällig einen Krieger der ein wenig mürrisch ist", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es gäbe da schon eine Person auf die das zutrifft wieso?");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hat dieser zufällig Graues Haar?", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wenn ich michr echt entsinne hatte er dies");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wird dieser in näherer Zukunft erneut hier aufschlagen.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In ein paar Tagen, wieso fragt ihr");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nur eines versprechens wegen", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nun wirklich Gute Nacht", true, "alessa");
                        Template.ƒS.update();
                        Template.ƒS.Character.hide(Template.characters.alessa);
                        Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das war Interessant.");
                        Template.ƒS.Speech.clear();
                        Template.ƒS.Speech.hide();
                        Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
                        await Template.ƒS.Location.show(Template.locations.blackout);
                        await Template.ƒS.update(2);
                        return "Versprechen";
                    case versteckterSong.iPickAntwort:
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ach nur an eine Erinnerung aus meiner Kindheit, nix besonderes", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber es ist lustig oder? Ich sah eine Menge Ritter und Abenteurer mitlerweile auf meinen Reisen.", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Und doch, war es genau dieses Rätsel, das mich daran erinnerte.", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ah tut mir mega leid ich quatsche euch total voll", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich finde das überhaupt nicht komisch. Die Art und Weise wie das Gehirn funktioniert ist immerhin bisher kaum erforscht", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ein einziges Wort ist dazu fähig, vergessenes hervorzuholen, wieso sollte das Komisch sein. Ich finde wir sollten uns vielmehr daran erfreuen.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich dachte du wärst Doktor und keine Poetin", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Im gegensatz zu deinen, sind meine Kunden gebildeter.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagte meine Kundin", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "....................................", true, "alessa");
                        break;
                    case versteckterSong.iPickJoke:
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Solange er danach wenigstens hierher kommt um etwas zu Trinken", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "naja ich denke so ein Königreich zu stürzen macht schon durstig", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Also eine gute Chance bestünde ja schon mal. Uuuuuund, er würde aufjedenfall eine menge tipps bekommen, wie er das nächste Stürzen könnte", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du hast mir nie erzählt, das du Revolutionär bist.", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Jetzt macht das alles auch wenigstens Sinn, die Bar, die schlechten Drinks. Natrlich alles nur ein Deckmantel, für deinen großen Plan", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Meine Drinks sind überhaupt nicht schlecht!", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich würde lieber aufpassen was du sagst, jetzt wo du mein Geheimnis rausgefunden hast, sonst werde ich die Ärzte Kammer, als nächstes überfallen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Natürlich Natürlich, mir zittern schon die Knie, wenn ich an deine Armee aus trunkbolden denke", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sollte es auch, hast du Stella schon mal Kämpfen sehen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ach jetzt vertraust du auf einmal in meine Fähigkeiten", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Dann macht es dir ja auch bestimmt nichts aus, mir einen Auftrag zu geben, oh großer Revolutionist", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Unsere Stunde ist noch nicht gekommen, wir müssen wachsam bleiben", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ah ja", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "natürlich mein Anführer", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Götter bewahre uns vor dem Tag, wo du jemals eine Armee anführen musst", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sie würden erzittern vor meinem können", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und auserwählen für ihren Champion. Meine Daumen sind gedrückt keine sorge", true, "alessa");
                        break;
                }
                break;
            case spielenMitStellaScene4.iPickBoxsack:
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wird das nicht erst in 400 Jahren erfunden", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube du hast recht", true, "spieler");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay nächste frage", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Der Schrein ohne Deckel, Schlüssel, Schanier birgt einen goldenen Schatz, glaub es mir!", true, "alessa");
        let spielenMitStellaScene4Frage2 = {
            iPickHerz: "Das Herz",
            iPickTempel: "ein Tempel",
            iPickEi: "ein Ei"
        };
        let rätselSpielMitStellaFrage2 = await Template.ƒS.Menu.getInput(spielenMitStellaScene4Frage2, "choicesAlessa");
        switch (rätselSpielMitStellaFrage2) {
            case spielenMitStellaScene4Frage2.iPickHerz:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube mit dem herz liege ich sehr richtig, zumindest habe ich keinen Schlüssel dafür", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Und je nachdem wie man es sieht ist es auch golden, wenn auch sehr Poetisch", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "soviel kann ich euch sagen, das wäre zu poetisch für mich", true, "alessa");
                break;
            case spielenMitStellaScene4Frage2.iPickTempel:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ein Tempel klare sache!", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Schon, Mal von einem Tempel ohne Schlüssel gehört? oder dach?", true, "stella");
                break;
            case spielenMitStellaScene4Frage2.iPickEi:
                indicatorforRätselszene4.number++;
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wie kommst du bitte auf ein Ei?", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Herz würde doch viel mehr Sinn machen", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dachte ich zu erst auch, aber das goldene hat mich abgeschreckt", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Was wenn Alessa nur poetisch war?", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Da ich weiß wo diese Rätsel herkommen, gehe ich eher weniger davon aus", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was mnich zu dem schluss führte, es muss logisch sein. Und schau mal, ein Ei kann man nur aufbrechen und doch behütet es sein inneres. Und genau so wie man den Mutterschos Tempel nennt, würde das hier auch Sinn machen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Desweiteren, welche Farbe hat das innere?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Weiß und...Gold oh Götter ja du hast recht!", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Doch was meintest du mit, wo sie herkommen?", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube das sollte dir Alessa lieber selber erzählen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "muss ich", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "JA, und zwar die lange fassung!", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "du hast glück, das ich dich mag", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also es war vor ein paar Monaten", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich sollte eine kleine Gruppe von Helden begleiten, weil sie einen Ring zerstören wollten", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Frag mich nicht, ich fande das unterfangen sehr absurd, aber für sie war es ausgesprochen wichtig", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wir sind also durch eine Gebirskette gelaufen, damit wir einem dunklem Zauberer Namens Salamo, oder so ähnlich auswichen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Hat eher mittelmäßig gut funktioniert, da wir mit Blitzen abgeschossen wurden, was uns in eine Höhle zwang.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Da habe ich dann auch irgendwie, die Gruppe, vollkommen unabsichtlich natürlich versteht sich, verloren und sah beim hinaus laufen ein Männchen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Männchen könnte sehr nett ausgedrückt sein. Das wesen wiederholte seinen Namen andauernd, während es mit mir redete. Ich bezweifelte schon jemals wieder meine verloren gegangene Gehirnzellen wiederherzustellen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "doch dann aus heiterem Himmel, oder eben Fels.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Frage es mich ob wir nicht spielen wollen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "In meiner förmlichen manier könnte ich natürlich niemals nein sagen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wohl eher deiner Spielsucht", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ihr nennt es Spielsucht, ich sage positive Einstellung zu spaßigen wagnissen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "nun denn, wo waren wir", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "genau", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Zu meiner verwunderung, hat es während dem Spiel total seine Persönlichkeit geändert", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Tatsache, es behersche urplötzlich wieder die normale sprache und die Rätsel waren auch nicht, all zu schlecht", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie könnte ich anders, als sie selber zu verwenden", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "zufrieden?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "nein warte, was ist mit dem Männchen danach passiert?", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich musste es umbringen, es kam auf die wahnwitzige Idee mich zu fressen als Bezahlung für das Spiel", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ou das ist...", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "kein sehr schönes Ende", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "So ist die Welt herzchen. Wir müssen das beste daraus machen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also dann meine lieben Herrschaften. Das war es dieses Mal wieder mit unserem kleinen Spielchen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber aber, seid nicht traurig. Ich komme wieder mit mehr Rätseln", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "....", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "....", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "....", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ähm bravo?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also bitte, ein wenig mehr begeisterung bitte", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "okay ähm", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "BRAVO, BRAVO Ich kann es kaum erwarten!", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay vielleicht, ein ticken weniger", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "danke für die tollen Rätsel, ich freue mich aufs nächste Mal?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "JA, so ist es perfekt", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich mag dich Alessa", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "...", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagte ja das es nicht so schwer ist wie du glaubst", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Du kurz nee andere sache noch.", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Du meintest du hättest nen Auftrag für mich", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh du hast recht, damit hat das alles ja angefangen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja ich muss die nächsten Tage eine längere Reise für einen Auftrag antreten und Reise in den Momentanen Zeiten ungern alleine", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Eigentlich wollte ich Elidibus fragen, dieser scheint aber noch auf der Jagd zu sein. Und sofern ihr wirklich Kämpfen könnt, wäre ich gewillt eure Dienste in Auftrag zu nehmen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Meine Dienste gehören ganz euch Madam", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Sehr gut, so gefällt mir das, dann lass mich dich gerne auf einen Drink einladen, um dieses treffen zu feiern", true, "alessa");
                Template.ƒS.Sound.play(Template.sound.pour, 0.8);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So bitte die Damen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh nein mein Lieber, so kommst du mir nicht davon", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Du trinkst mit uns!", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "sehr gerne", true, "spieler");
                Template.ƒS.Sound.play(Template.sound.pour, 0.8);
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also dann", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Auf eine gute Reise", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "und neuen Freundschaften", true, "alessa");
                Template.ƒS.update();
                Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.Character.hide(Template.characters.alessa);
                Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
                await Template.ƒS.Location.show(Template.locations.newFriends);
                Template.ƒS.update(20);
                return "End";
            //ENDE 1 AUF NEUE FREUNDSCHAFTEN!!!!!!!!!!!!!!!!!!!!!!!
        }
        await Template.ƒS.Speech.tell(Template.characters.alessa, "okay, vielleicht waren die Rätsel doch zu schwer", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.stella, "haben wir echt so schlecht abgeschnitten?", true, "stella");
        while (indicatorforRätselszene4.number === 1) {
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Ihr habt 50% der Rätsel gelöst. Was bei 2 Rätseln naja, nicht so schwer ist.", true, "alessa");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber hey, 50% sind 50%", true, "alessa");
            await Template.ƒS.Speech.tell(Template.characters.stella, "weißt du, es würde nett klingen wäre dein unterton nicht so Sarkastisch", true, "stella");
            await Template.ƒS.Speech.tell(Template.characters.stella, "aber nächstes Mal strenge ich mich mehr an!", true, "stella");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Das will ich hören!", true, "alessa");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "und du? was ist deine Entschuldigung " + Template.dataForSave.nameBarkeeper, true, "alessa");
            let hälfteDerRätselGelöstEnding = {
                iPickSchwer: "Waren schwer",
                iPicksorry: "Nächstes Mal!"
            };
            let hälfteDerRätselGelöstEndingAusrede = await Template.ƒS.Menu.getInput(hälfteDerRätselGelöstEnding, "choicesCSSClass");
            switch (hälfteDerRätselGelöstEndingAusrede) {
                case hälfteDerRätselGelöstEnding.iPickSchwer:
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Alessa, du tust so als wärem diese Rätsel Kinderleicht", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Naja, sie stammen aus einem Kinderbuch", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagtest du nicht sie stammen aus einer Höhle?", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "Wie einer Höhle?", true, "stella");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Nicht so wichtig. Also ja sie stammen aus einer Höhle, aber das Wesen in dieser Höhle, hat sie aus einem Kinderbuch", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "jetzt im ernst?", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja im ernst. Ich bin selber nur vor kurzem darauf gestoßen. Das Wesen liebt anscheinend die Geschichte Namens der Hobbit. Du solltest sie lesen, dann wirst du vielleicht auch besser im lösen meiner Rätsel", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "jetzt warte doch mal welches Wesen, könnt ihr mir bitte erklären worüber ihr redet?", true, "stella");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa bekommt ihre Rätsel anscheinend aus Höhlen, welche noch anscheinender sie aus Kinderbücher bekommen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja das trifft es ziemlich gut. Wüsste nicht was man da noch hinzufügen müsste", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "eine Menge? wieso bekommst du überhaupt Rätsel aus Höhlen?", true, "stella");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "du etwa nicht?", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm NEIN", true, "stella");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "dann warst du einfach noch nicht in genug Höhlen", true, "alessa");
                    while (Template.dataForSave.variableKristalhöhle === true) {
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Doch war ich, erst vor kurzem. Sie war sogar komplett aus Kristall!", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich hab sogar einen geheimen Weg gefunden", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Und trotzdem waren da keinerlei Rätsel", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie würdest du die Kristalle denn sonst bezeichnen?");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "eine andere Art von Tür", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube der Punkt geht an Alessa");
                        break;
                    }
                    while (Template.dataForSave.variableKristalhöhle === false) {
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay ja vielleicht", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "AAAAAAber das heißt nur, das ich jetzt weiß was ich als nächstes machen muss!", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie siehts aus " + Template.dataForSave.nameBarkeeper + "hast du reinzufällig eine Höhle für mich parat?", true, "stella");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Tatsächlich ja, ich kenne da eine Kristalhöhle", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Perfekt, dann werde ich morgen dorthin aufbrechen", true, "stella");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, " da hab ich ja echt was losgetreten", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nein nein, das ist normal", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "HALLOOOO, ich bin noch da!", true, "stella");
                        break;
                    }
                    break;
                case hälfteDerRätselGelöstEnding.iPicksorry:
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "keine sorge beim nächsten Mal löse ich sie!", true, "spieler");
                    while (Template.dataForSave.variableRätselsceneAlessa1 === true) {
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Das sagtest du beim letzten Mal auch schon. Aber glück gehabt, diese eine richtige Antwort hat dich vorm verlieren bewahrt", true, "alessa");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "eventuell beim dritten Mal dann", true, "alessa");
                        break;
                    }
                    while (Template.dataForSave.variableRätselsceneAlessa1 === false) {
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich freue mich darauf und nehme dich beim Wort", true, "alessa");
                        break;
                    }
                    break;
            }
            break;
        }
        while (indicatorforRätselszene4.number === 0) {
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Sagen wir, ihr habt euch angestrengt.", true, "alessa");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Dabei sein ist ja sowieso das wichtigste", true, "alessa");
            while (Template.dataForSave.variableRätselsceneAlessa1 === true) {
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Obwohl ich entsinne mich da an etwas.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh nein", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh doch", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Da ich sehr gnädig bin, werde ich es nicht euer Blut sein lassen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Stattdessen, lasst mich überlegen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja da sklingt fair", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich denke eure teuerste Flasche Rum sollte angemessen sein", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, wegen euch darf ich noch meien Bar schließen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "aber aber mein lieber, doch nicht wegen einer Flasche", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ihr habt wahrlich keine Ahnung was dieser Rum kostet", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "vermutlich", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber wenn ich schon anfange dann richtig.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das ist nicht wirklich euer erster Rum, bitte tut mir das nicht an", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was ist mit euch Stella, habt ihr wenigstens schon Mal davor Rum getrunken?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ist die Frage jtzt ernst gemeint", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "oh ihr Götter was habe ich euch nur getan", true, "spieler");
                break;
            }
            break;
        }
        await Template.ƒS.Speech.tell(Template.characters.stella, "So ich begebe mich dann Mal zur Nachtruhe, Es hat mich gefreut dich kennen zu lernen.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Morgen were ich mich dann wohl auf Wanderschaft begeben, aber ich würde mich freuen dich wieder zu sehen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dem kann ich nur zustimmen. Auf das sich unsere Wege erneut Kreuzen", true, "alessa");
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.rightToLLeaveNormal());
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.leftToLLeaveNormal());
        Template.ƒS.update();
        Template.ƒS.Character.hide(Template.characters.stella);
        Template.ƒS.Character.hide(Template.characters.alessa);
        Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.alessa, 0, 2);
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So kam es dann auch. Alessa und Stella besuchten regelmäßig meine Bar und wurden zu den besten Kunden die ich jemals hatte.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Auch der Mürrische Namenlose Krieger kam ab und an vorbei um sein Geld in Alkohol zu ertränken.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wobei ich mich an eine Nacht erinnere, in der er volltrunken eine Melodie vor sich hinsummte und mir erzählte wie ihn diese verfolgt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In den folgenden kam es leider zu keiner solchen begebenheit mehr", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich wüsste zu gern was es damit auf sich hat", true, "spieler");
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackout);
        Template.ƒS.update(5);
        return "end";
    }
    Template.fourthStellawithAlessa = fourthStellawithAlessa;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondAlessa() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Alessa starting");
        console.log("second Scene Alessa starting");
        await Template.ƒS.Location.show(Template.locations.tavernNight);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Immer noch am Leben wie ich sehe");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie ich sehe immer noch Maskiert", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Touché");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "also Barkeeper, sag mir wie ist es dir ergangen?");
        let erzählenüberStellaElidius = {
            iPickStella: "von Stella erzählen",
            iPickElidibus: "von Elidibus erzählen"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(erzählenüberStellaElidius, "choicesCSSClass");
        switch (dialogueElement) {
            case erzählenüberStellaElidius.iPickElidibus:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Letztens war hier ein Kunde, ein netter Zeitgenosse.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "welcher...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Welcher nur den Nächsten Auftrag im Kopf hatte", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "woher", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ich denke es gibt keine bessere Beschreibung von Elidibus als „Netter Zeitgenosse“.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Also wie hat der Auftrag gelautet?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach nichts allzu Spannendes, er ging auf die Jagd nach einem Werwolf", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "und ihr sagt mein Leben wäre spannend", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Er sah mir aus wie ein fähiger Kämpfer, er wird das schon schaffen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist ja auch nicht so, als hätte er mir eine Wahl gegeben.", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(150);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "...wie ging es ihm", true, "alessa");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wir hatten nicht wirklich lange ein Gespräch, aber ich würde", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie bitte?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wir Spielen!", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt, es", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist bei Ihnen alles Okay? Wenn ich etwaaa", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(80);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "WIR", true, "alessa");
                Template.ƒS.Speech.setTickerDelays(80);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "SPIELEN", true, "alessa");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt es. Kennt keinen Durst -Dennoch trinkt es. Trägt ein Kettenhemd, doch nie klingt es", true, "alessa");
                let sceneZweiRätsel1 = {
                    iPickFisch: "Fisch",
                    iPickNinja: "Ninja",
                    iPickGeist: "Geist"
                };
                let scene2rätsel1Entscheidung = await Template.ƒS.Menu.getInput(sceneZweiRätsel1, "choicesAlessa");
                switch (scene2rätsel1Entscheidung) {
                    case sceneZweiRätsel1.iPickFisch:
                        break;
                    case sceneZweiRätsel1.iPickGeist:
                        break;
                    case sceneZweiRätsel1.iPickNinja:
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Man kann es nicht sehen, kann´s nicht aufstöbern, kann es nicht fressen und kann´s auch nicht hören. Es liegt hinter den Sternen und unterm Gestein, Rieselt in alle Höhlen hinein, Komm zuerst und folgt auch zuletzt, Löscht alles Leben, bis keiner mehr schwätzt.", true, "alessa");
                let sceneZweiRätsel2 = {
                    iPickDunkelheit: "Dunkelheit",
                    iPickZeit: "Zeit",
                    iPickLicht: "Licht"
                };
                let scene2rätsel2Entscheidung = await Template.ƒS.Menu.getInput(sceneZweiRätsel2, "choicesAlessa");
                switch (scene2rätsel2Entscheidung) {
                    case sceneZweiRätsel2.iPickDunkelheit:
                        break;
                    case sceneZweiRätsel2.iPickZeit:
                        break;
                    case sceneZweiRätsel2.iPickLicht:
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Kennt keine Gnade und", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es ist okay,wir müssen nicht darüber reden, aber bitte, keine Rätsel mehr", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wann kommt er wieder?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "in einer Woche", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "danke", true, "alessa");
                await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.middleToLeave());
                Template.ƒS.update();
                Template.ƒS.Character.hide(Template.characters.alessa);
                Template.ƒS.update();
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.blackout);
                await Template.ƒS.update(2);
                return "AlterFreund";
            case erzählenüberStellaElidius.iPickStella:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Erinnert ihr euch an das aufgewekte Mädchen, von dem ich euch erzählte?", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(100);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "öhm.......Stella richtig?", true, "alessa");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja genau! Aufjedenfall sie war wieder hier, brachte mir sogar en kleines Souvenir von ihren Reisen mit.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ein Souvvenir sogar, sie scheint dich sehr zu mögen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube Stella mag jeden", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So jeden also", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "glauben sie mir etwa nicht?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "sagen wir einfach, ich hab da meine Erfahrungen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Die können ja nicht sehr gut sein, immerhin mag ich dich schon mal", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Damit bist du vermutlich allein", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Glaub ich kaum, ich glaube viel mehr, das du dich bisher in den falschen kreisen herumgetrieben hast", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ist dem so", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ganz sicher sogar und ich denke ich kann es dir sogar beweisen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "falls du dich traust, soweit aus deiner Komfortzone zu gehen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Doktor ohne Name, was ist", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "bist du denn Mutig genug dafür", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Dachte nicht das du dass in dir hast.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "aber wie könnte ich so einer Herausforderung wiederstehen.", true, "alessa");
                await Template.ƒS.update(3);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "gut gemacht Barkeeer, dann lass uns spielen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ich Alessa le Allier nehme deine Herausforderung an", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, ich hätte nie Gedacht das du einen so herrlichen Namen hast", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "oder das du dich so leicht umstimmen lässt.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "aber aber, noch sahst du mich nicht ohne Maske", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Und glaub mir, mein Name ist nicht das einzig schöne an mir", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "das Geheimniss werde ich auch noch lüften", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aber zu erst noch unsere kleine Herausforderung", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kommmt in 3 Tagen wieder", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Um eine neue Freundin von dir zu treffen nehme ich an", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wer weiß das schon", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Übrigens der fairness halber" + " " + Template.dataForSave.nameBarkeeper, true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "auch euer Name hat einen sehr schönen Klang.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "bis in 3 Tagen dann", true, "alessa");
                Template.dataForSave.secretEndingPartTwo = true;
                await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.middleToLeave());
                Template.ƒS.update();
                Template.ƒS.Character.hide(Template.characters.alessa);
                Template.ƒS.update();
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.blackout);
                await Template.ƒS.update(2);
                return "HalloFremde";
        }
    }
    Template.secondAlessa = secondAlessa;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondElidibus() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory second Elidibus starting");
        console.log("second Scene Elidibus starting");
        await Template.ƒS.Location.show(Template.locations.tavernSunset);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli", true, "alessa");
        Template.ƒS.Sound.play(Template.sound.footstep, 0.8);
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.middleToLeft());
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToRight());
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du hier", true, "Elidibus");
        Template.ƒS.Sound.play(Template.sound.alessa, 0.8, true);
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Verwundert dich das etwa", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Red dir das nur weiter ein", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Also", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wie ist es dir ergangen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Hab ich mitbekommen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und dir so?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Arbeitsreich. Viele Kunden halt", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "verstehe", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "kamst du denn viel rum?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Alessa was soll das.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was soll was", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fräst mich diese belangenlosen sachen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf"), true, "Elidibus";
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli bitte", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Elidibus bitte, lass uns reden", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Leb wohl Alessa", true, "Elidibus");
        Template.ƒS.Sound.play(Template.sound.footstep, 0.8);
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.leftToLLeaveSlow());
        Template.ƒS.update();
        Template.ƒS.Character.hide(Template.characters.elidibus);
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.alessa, "...", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Leb wohl", true, "alessa");
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.rightToMiddle());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alles okay", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh du bist ja noch da", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja ist ja auch meine Bar", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Trotzdem das Gespräch war ja wohl mehr als Privat.", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie wärs wenn du den Wütenden teil überspringen und du mir beantwortest ob du darüber reden willst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich weiß nicht, würde es denn etwas bringen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das kommt auf dich an", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "dann lass es uns versuchen", true, "alessa");
        Template.dataForSave.meterBarAlessa = true;
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Gut, dann die leichteste Frage zu erst, wer war er genau?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Mein Ex Verlobter.", true, "alessa");
        document.getElementById("alessaMeter").style.visibility = "inherit";
        document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAlessa").style.display = "none";
        document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = false);
        let retteAlessaOne = {
            iPickerWie: "Wie hat es geendet",
            iPickOk: "Alles okay?",
            iPickJoke: "Er sah gut aus",
        };
        let werIstAlessaOne = await Template.ƒS.Menu.getInput(retteAlessaOne, "choicesAlessa");
        switch (werIstAlessaOne) {
            case retteAlessaOne.iPickerWie:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ou, wie ist es zwischen euch zu enden gegangen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wir waren zusammen auf einem Auftrag und hatten eine Meinungsverschiedenheit zu einem Thema", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Damals habe ich zum ersten Mal gemerkt, das etwas nicht gestimmt hat.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Es hätte gereicht die Banditen auszuschalten. Aber irgendwas hatten sie gesagt, irgendwas das ich nicht gehört habe. An diesem Abend habe ich ihn nicht wiedererkannt.", true, "alessa");
                Template.dataForSave.alessaScore += 20;
                break;
            case retteAlessaOne.iPickOk:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das gerade schien sehr heftig. Bist du okay?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Offensichtlich nicht, aber verglichen zu vor einem Jahr, komme ich damit besser zurecht.", true, "alessa");
                Template.dataForSave.alessaScore += 10;
                break;
            case retteAlessaOne.iPickJoke:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich muss gestehen, schade das er bereits ging. Er sah ziemlich gut aus", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich dachte du wolltest mir helfen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh das tue ich, aber wie bist du bitte mit so einem schnling zusammen gekommen.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Bitte, der und ein schönling. Ich musste die hälfte seines Körpers bereits nach Kämpfen verarzten. Ich sah besseres.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach echt, wen denn so?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Berufsgeheimniss. Ich bin Arzt schon vergessen.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dan eurer Modischen tracht niemals.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie gut, an die wichtigen dinge erinnert ihr euch", true, "alessa");
                Template.dataForSave.alessaScore += 30;
                break;
        }
        let retteAlessaTwo = {
            iPickerWer: "Wer genau war er",
            iPickEli: "Süßer Spitzname",
            iPickMürrisch: "Wie hast du es mit ihm ausgehalten",
        };
        let werIstAlessaTwo = await Template.ƒS.Menu.getInput(retteAlessaTwo, "choicesAlessa");
        switch (werIstAlessaTwo) {
            case retteAlessaTwo.iPickerWer:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wer genau war er und ich weiß dein Ex Verlobter, aber Mal im erst. WER war er?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Es wundert mich immer wieder, das man ihn in diesen Ländern nicht kennt.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Sein Name ist Elidibus, oberster der Ritter des Lichts, oder viel mehr ehemaligen Rittern des Lichts.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Von da wo wir herkommen ist er ein Held.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Von wo kommt ihr denn her?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aus dem Königreich, Weit Weit Weg. Also im ernst, es heißt so Dummer Name wenn du mich fragst.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Hah und was ist mit euch, wie seid ihr an so einen Helden gekommen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Naja, wir waren Arbeitskollegen und dann kam eins zum anderen.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach was, dann wart ihr seine private Hausärztin", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Bitte, dieser Geizhals. Nein ich war Teil seiner Truppe", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Damals war ich och als Alessa die Klinge bekannt", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ihr seid wahrlich beindruckend. Wieso seid ihr gegangen was ist passiert?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Habt ihr je von dem Königreich gehört?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ehrlich gesagt nicht.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Damit habt ihr eure Antwort.", true, "alessa");
                Template.dataForSave.alessaScore += 10;
                break;
            case retteAlessaTwo.iPickEli:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also ich muss schon sagen, Eli ist ja schon ein süßer Spitzname, für solch einen Mann", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ihr hättet Mal sehen sollen, wie peinlich er ihm früher war", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Tzz", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Eigentlich hat der ganze Spitzname damit angefangen, das er mir blöd gekommen ist und sagen wollte was ich zu tun und lassen habe", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Was er konnte, aber deswegen habe ich das noch lange nicht mitzumachen. Also hab ich mich gerecht.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Irgendwann wurde es allerdigns normal ihn so zu nennen. Es hat besser zu ihm gepasst, ihn Menschlicher gemacht", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Schade das er diese wieder verloren hat.", true, "alessa");
                Template.dataForSave.alessaScore += 30;
                break;
            case retteAlessaTwo.iPickMürrisch:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "War der eigentlich schon immer so Mürrisch, oder wurde er erst so?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh nein, nein, nein er war schon immer ein Alpha arschloch", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alpha Arschloch?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Naja ein Mann mit einem gröeren beschützer und reier Instinkt als sonst wer. Der die Arme jungfer in Not retten muss und es gemeister hat auf 50 verschieden Arten zu grummeln oder schnauben.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und mit so jemanden wart ihr zusammen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Glaubt mir, bis heute ist das schwer zu glauben. Aber Eli hat eigentlich eine guten Kern, hinter dieser Machofasade. Oder zumindest hatte er diesen, er wirkt sehr verloren.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Woran ich leider auch selber schuld bin.", true, "alessa");
                Template.dataForSave.alessaScore += 20;
                break;
        }
        let retteAlessaThree = {
            iPickerLange: "Wie lange wart ihr zusammen?",
            iPickfunfact: "Erzähl über irgendeinen dummen Moment",
            iPickRätsel: "Hat er auch so nen Spielhang?",
        };
        let werIstAlessaThree = await Template.ƒS.Menu.getInput(retteAlessaThree, "choicesAlessa");
        switch (werIstAlessaThree) {
            case retteAlessaThree.iPickerLange:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie lange wart ihr zusammen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh gar nicht so unendlich lange, nur drei Jahre", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das ist schon ein wenig länger.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Naja, es geht. Dennoch war es meine längste Beziehung", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Nicht das ich es vermisssen würde. Es war schon unfassbar Zeit aufwendig. Ich kam fast nicht mehr mit meinen Studien hinterher.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber es war auch nicht das schlimmste was ich jemals gemacht habe, es war schön zumindest für eine Zeit einen Partner zu haben und eins muss ich Eli lassen. Er ist ein Poet am Klavier", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Echt der?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja echt, hab auch gedacht, er bindet mit zu erst einen Bären auf keine Sorge", true, "alessa");
                Template.dataForSave.alessaScore += 10;
                break;
            case retteAlessaThree.iPickfunfact:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Okay erzähl mir irgendwas über ihn. Egal was, einfach irgendwas lustiges.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay, lasst mich eben überlegen.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Gut wir waren auf reisen, um genau zu sein, sollten wir irgendso ein Artefakt für einen König besorgen.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Das ganze erwies sich nur als schwieriger als Gedacht. Nicht etwa wei der König böse war, oder das Artefakt am anderen Ende der Welt.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Denn das wäre eine Untertreribung. Das Artefakt war in einem Haus.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ihr seid gerade auch in einem Haus, ich sehe das Problem nicht.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Das Haus war sehr groß.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie ein Palast? Wartet seid ihr wahrhaftig in einen Palast eingebrochen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Leider ja, ich trage bis heute eine Böse Narbe davon am Bauch.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Welcher König war das und wo ist diese Geschichte bitte lustig?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Es war kein König. Sondern ein Teufel, dieser Palast, war nämlich im ersten Kreis der Hölle und hat Zariel gehört.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "DIE Zariel. Der gefallene Engel?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Genau die. Leider in ich ihr nie begegnet. Nur ihre Wachen waren vor Ort, die Eli, durch eine Tanzeinlage abgelenkt hat. Denn man mag es ihm nicht ansehen, aber Eli ist ein unfassbar guter Musikant.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wow, das ist Mal nee Geschichte.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja, die guten alten Zeiten und Götter die Rätsel die ich dort gehört habe.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wollt ihr eines hören?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ein ander Mal vielleicht.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "euer verlust.", true, "alessa");
                Template.dataForSave.alessaScore += 30;
                break;
            case retteAlessaThree.iPickRätsel:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Hat Elidibus eigentlich auch so nee Rätselsucht wie du?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "bitte der?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Der könnte ein gutes Rätsel nicht Mal wertschätzen, wenn es von den Göttern persönlich käme.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber das gleicht er mit seinen Musikalischen Fähigkeiten wieder aus. Die sind tatsächlich sehr gut.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Nur was soll ich sagen, was bringt einem schon alle Musik dieser Welt, wenn man damit keinen Geheimen Schrein lüften kann", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Und ja er hat es schon versucht, aber dass ging dann imemr mehr in meinen Aufgaben berech.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh da kann ich ihn tatsächlich verstehen, das hat bei uns auch immer jemand übernomme", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ach echt ihr seid Abenteurer?", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "War ich, vor langer langer Zeit.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Cheers dazu.", true, "alessa");
                Template.dataForSave.alessaScore += 20;
                break;
        }
        let butterBeiDieFische = {
            iPickerWahrheit: "Was ist passiert"
        };
        let werIstAlessaWahrheit = await Template.ƒS.Menu.getInput(butterBeiDieFische, "choicesAlessa");
        switch (werIstAlessaWahrheit) {
            case butterBeiDieFische.iPickerWahrheit:
                while (Template.dataForSave.alessaScore > 70) {
                    document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay, vielleicht hast du recht gehabt und es hilft echt. Ich hoffe du hast noch ein wenig Zeit mitgebracht.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli und ich waren Teil einer Abenteuergruppe und wir waren mit zwei anderen noch Unterwegs. Einen nannten wir netterwweise Doc und der andere war Horuk", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Fairerweise wir nannten Doc nur so, weil keiner seinen Namen ausprechen konnte.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber egal, Wir sind zusammen durch das Knigreich gereist haben Abenteuer in diesem erlebt und auch auerhalb. Irgendwann kamen ich und Eli uns näher. Götter niemand weiß wieso", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Unser Leben war gut, Abenteurreich, alkohol reich. Zumindest bis wir alle ein wenig älter wurden und andere dinge für die beiden Interessant wurden.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Doc hat ein Krankenhaus aufgemacht und Horu hat geheiratet und mitlerweile ich glaube zwei Kinder. Ich und Eli unfähig uns anzupassen, sind weiter gezogen.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Innerhalb alle dem, hat er mir irgendwann eröffnet das er ständig eine Melodie hört, als würde sie ihn rufen, als würde jemand ihn rufen. Natürlich half ich ihm, diese ausfinding zu machen", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Zumindest hab ich ihm das gesagt.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Anfangs war das ganze noch, normal aber irgendwann, desto näher wir der Sache kam, desto mehr hat sie ihm bedeutet. Er sagte mir er würde von jemanden Träumen, jemanden mit Orangenen Haaren.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Und so dumm das klingt, aber ich wurde neidisch. Hatte Angst das dieses etwas ihm wichtiger werden würde als ich.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Weswegen ich zu einem Magier ging und ein Zauber über ihn legte....Danach war alles anders", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Der Zauber hat gewirkt, so ist es nicht. Aber es schien mehr von ihm genommen zu haben, als nur dieser Gedanke an die Melodie.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Er wurde Brutaler. Stille. Er war andauernd so wütend, als ich ihm gefragt habe wieso, konnte er mir nur sagen, das irgendwas in ihm ist, das ihn aufressen würde Wie eine Leere.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Und dennoch habe ich schrecklicher Mensch es nich gesagt. War so davon besessen bei ihm zu sein. Ich wünschte ich hätte wenigstens die Anstallt gehabt es ihm zu sagen", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber ein gewisses Irlicht kam mir zuvor. Eines das uns aus spaß gegeneinander auspielen wollte. Nicht Mal ihm war klar wie einfach das sein würde.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "In dem Moment, in welchem das Irrlicht den Zauber von Elidibus nahm. Ich werde nie vergessen wie gebrochen diese Augen aussahen. Wie er auf seine Blut überlaufenen Hände starrte.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Also tat ich es nicht und ging. Mied ihm seit dem. Mied das was passieren würde sobald wir usn wiedersehen.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Also mein lieber damit hast du es. Die Geschichte von Alessa der Klinge, die einen Helden zum Monster machte.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Glaub mir ich bereue nicht viel, aber das bereue ich.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das tut mir leid, vielleicht wirst du es eines Tages wieder gut machen können.", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja vielleicht.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wisst ihr jetzt wo ich darüber Nachdenke, ich hatte eine Kundin mit Orangenen Haaren hier die letzte Zeit.", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "WAS ECHT? WIE HEIßt SIE, WANN KOMMT SIE WIEDER?", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also es muss nicht stimmen, aber sie hieß Stella und leider ist sie bereits weiter gezogen. Sie kam 3 Tage nach eurem zweitem Besuch, aber wenn ihr euch zu der Nordstraße aufmacht, würdet ihr sie vielleicht noch finden.", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Es ist ein versuch oder nicht. Schade vielleicht werde ich Irgendwann in meinem Leben noch Mal das Glück haben, das wir alle 3 am gleichen Ort sind.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich danke dir, für alles. Bis eines Tages vielleicht.", true, "alessa");
                    await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.middleToLeave());
                    Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.unfinished);
                    Template.ƒS.update(20);
                    return "End";
                }
                while (Template.dataForSave.alessaScore < 70) {
                    document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Hm es war zumnindest ein nettes Gespräch, danke dir für deine Zeit.", true, "alessa");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich wünschte ich hätte mehr tun können", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Passt schon, viel glück mit deiner Bar weiterhin. Es war mir eine Freude mit dir zu Spielen", true, "alessa");
                    await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.middeToLLeaveSlow());
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du kamst um zu helfen, das ist der Sinn deiner Bar, doch am Ende konntest du keinem helfen. Weder dem mürrischen Krieger");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Noch der vermumten Doktorin");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Oder der c");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "In einem anderen Leben hättest du vielleicht schlauer gehandelt. In einem anderen Leben hättest du sie vielleicht bekannt gemacht");
                    Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.blackout);
                    Template.ƒS.update(20);
                    return "End";
                }
        }
    }
    Template.secondElidibus = secondElidibus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondEllidibusDestiny() {
        console.log("FudgeStory secondEllidibusDestiny Scene starting");
        console.log("FudgeStory Destiny Scene Elidibus starting");
        console.log("second Scene Elidibus starting");
        await Template.ƒS.Location.show(Template.locations.tavernSunset);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug", true, "Elidibus");
        Template.ƒS.Sound.play(Template.sound.alessa, 1.2, true);
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli");
        Template.ƒS.Sound.play(Template.sound.footstep, 0.8);
        await Template.ƒS.Character.animate(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.middleToLeft());
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToRight());
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du hier", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Verwundert dich das etwa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Red dir das nur weiter ein");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "wie ist es dir ergangen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hab ich mitbekommen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und dir so?"), true, "Elidibus";
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Arbeitsreich. Viele Kunden halt");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "verstehe", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "kamst du denn viel rum?");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Alessa was soll das.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was soll was");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fragst mich diese belangenlosen sachen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli bitte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Elidibus bitte, lass uns reden");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "lebwohl Alessa", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Immer noch das gleiche Kind");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Sag mal hörst du eigentlich immer noch diese Melodie, oder hat sie dich in deiner Gier nach Blut auch velassen");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wag es nicht so mit mir zu sprechen", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Oder was");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Treib es nicht zu weit Alessa", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "der alte Krieger ist also immer noch da und ich dachte das er in dem ganzen Alkohol erstickt wäre");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hört dieser gleiche Krieger denn auch immer noch die Melodie");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich wüsste nicht was dich das angeht.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Schade und ich hab mich so darauf gefreut frohe kunde an Stella entrichten zu können");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wer soll das sein", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie ein weiser Mann einst sagte");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wüsste nicht was dich das angeht");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Kannst du endlich mit diesen Spielchen aufhören", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "3 JAHRE", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "3 Jahre lang hast du mich ignoriert und dein bestes gegeben mir aus dem Weg zu gehen und dir nichts mir nichts", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Kommst du hier angetanzt und raubst mich jeden nerve den ich noch habe, wegen einer Dummen Geschichte", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich flehe dich an, bitte lass endlich das Stück was du von mir übrig gelassen hast in frieden. ", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "dann beantworte mir endlich meine frage!");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso, was ist so wichtig daran", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Es ist nun mal wichtig für mich.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Zeig mir wenigstens das noch ein Funke von dem Mann vorhanden ist den ich einst liebte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ja ich höre es, jeden Tag wenn ich aufwache und jede Nacht wenn ich schlafen gehe. Ich höre die immer gleiche Melodie rufend aus der Ferne.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "ich höre ihre wunderschönen klänge genau so klar wie an dem ersten Tag als ich sie vernahm.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Zufrieden?", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Erinnerst du dich an unser versprechen");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Natürlich aber was hat das jetzt damit zu tun", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Götter Alessa komm zu deiner begier", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dann erzähl es mir");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Alessa du hast deine Antwort lass mich nun endlich infrieden", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Elidibus, bitte");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Erzähl mir von unserem versprechen!");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Haaah, okay okay aber dann gehst du", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Egal was kommen mag, egal wie viel Sterne erloschen sind und egal wie sehr diese Welt dem Wahnsinn verfallen ist", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich werde niemals aufhören den Weg zu folgen den mein Herz mir geebnet hat", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Und oh so sollte ich eines Tages auf des anderen Geheimnis stoßen so werde ich", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "so werde ich egal was auch sein mag", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "diesen aufsuchen.", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Alessa sag mir nicht das", true, "Elidibus");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich fand es Elidibus. Obwohl eigentlich");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "fand Stella mich");
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        Template.ƒS.update();
        Template.ƒS.Character.hide(Template.characters.alessa);
        Template.ƒS.Character.hide(Template.characters.elidibus);
        Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.secondEllidibusDestiny = secondEllidibusDestiny;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secretEnding() {
        console.log("Du hast alles gesehen");
        console.log("Jede frage und möglichkeit zum besten gelöst");
        console.log("Zeit für dein Happy End" + Template.dataForSave.nameBarkeeper);
        await Template.ƒS.Location.show(Template.locations.tavernNight);
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du stehst in deiner Bar, alleine");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Weder Alessa, noch Stella waren die letzten Monate da. Auch Elidibus hat sich nicht sehen lassen.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Gäste die du in letzter Zeit betreut hast, waren immer die gleichen langweiligen Dorfbewohner");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Es gab keine, Diskussionen oder Geschichten zu belauschen. Du bist zurückgehert in deinen Alltag.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Einen Alltag der immer gleich ist. Genau so wie Heute Nacht.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Bar ist leer und du bist allein. Die wahrscheinlicheit das noch jemand kommt, ist sehr gering");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Willst du dich diesem Leben hingeben?");
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
        let lebenswegEntscheidung = await Template.ƒS.Menu.getInput(lebenswegone, "choicesCSSClass");
        switch (lebenswegEntscheidung) {
            case lebenswegone.iPickYes:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYess:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYesssssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
            case lebenswegone.iPickYessssssssss:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Feder die du von Alessa bekommen hast beginnt plözlich zu Leuchten.");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Luft um dich herum verändert sich, wird Wärmer.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Als würde jemand die Schwere aus ihr nehmen.");
        Template.ƒS.Sound.play(Template.sound.alessa, 1.2, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du erinnerst dich an all die Rätsel zurück die du Gespielt hast.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "An all die Freude, die du verspürt hast, als dir Stella von ihren Abenteuern erzählt hat");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "An dein Leben vor der Bar");
        Template.ƒS.Sound.play(Template.sound.footstep, 0.8);
        await Template.ƒS.update(5);
        await Template.ƒS.Character.animate(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und ich hatte schon Angst, ich hätte sie dir umsonst gegeben", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was machst du hier?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dich Heilen was sonst?", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Es wird Zeit das du diese Bar schließt und wieder auf Reisen gehst", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Achja, und mit wem bitte Dir?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Zum Beispiel. Tatsächlich dachte ich daran mich der alles Tour anzuschließen", true, "alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Woher der Plözliche Sinneswandel?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Sagen wir einfach, ein Gewisser Schanken besuch hat mich wachgerüttelt", true, "alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also was sagst du. Bereit dich mir anzuschließen?", true, "alessa");
        let finaleEntscheidung = {
            iPickAbenteuer: "Nichts lieber als das."
        };
        let enden = await Template.ƒS.Menu.getInput(finaleEntscheidung, "choicesCSSClass");
        switch (enden) {
            case finaleEntscheidung.iPickAbenteuer:
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Naa geht doch", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Achja ich schulde dir ja noch was.", true, "alessa");
                Template.ƒS.Character.hide(Template.characters.alessa);
                Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.sectret, Template.ƒS.positionPercent(50, 100));
                Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich hoffe ich wurde deinen Gedanken gerecht.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Knapp aber gerade so.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagte doch du hast ein schönes Gesicht", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Du Charmeur du, naja damit ist deine Heilung wohl abgeschlossen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wobei wenn ich ehrlich bin", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Hast du eigentlich mich geheilt.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Und jetzt komm die anderen Warten", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was meinst du mit sie warten?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Man " + Template.dataForSave.nameBarkeeper + " Unsere Kutsche geht in Zehn Minuten, jetzt komm, wir haben eine Welt zu sehen!", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ungeduldig wie eh und jeh", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also dann, damit war es das wohl mit den Geschichten aus der Taverne", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja...Ich glaube das wars.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Zeit für die Geschichten der Welt", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wohl gesprochen", true, "alessa");
                await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wenn ihr nicht bald rauskommt, sorge ich dafür!", true, "Elidibus");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wir sollten uns beeilen.", true, "alessa");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das sollten wir!", true, "spieler");
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hide(Template.characters.alessa);
                await Template.ƒS.Location.show(Template.locations.blackout);
                Template.ƒS.update(5);
                return "end";
        }
    }
    Template.secretEnding = secretEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function thirdStella() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        Template.ƒS.Sound.play(Template.sound.tavern, 0.4, true);
        await Template.ƒS.Location.show(Template.locations.tavernDay);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddleslow());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Willkommen zurück Lichterfee", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie war das Fest?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war unglaublich, überall diese schier unendlichen Lichter, in sovielen Farben und das ganze Essen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ein Fest für die Götter", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "So sagen sie zumindest", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was meinst du mit so sagen sie zumindest?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ehrlich gesagt, war ich gar nicht solange da", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "darf ich fragen wieso?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Darfst du nicht, sagen wir einfach, ich bin vom Schicksal verflucht", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        Template.ƒS.Speech.setTickerDelays(100);
        await Template.ƒS.Speech.tell(Template.characters.stella, "Weißt du ich kam hier nicht einfach her, es ist ein wenig... egal.", true, "stella");
        Template.ƒS.Speech.setTickerDelays(30);
        await Template.ƒS.Speech.tell(Template.characters.stella, "Tut mir leid" + " " + Template.dataForSave.nameBarkeeper + " " + "heute werden wir kein langes Gespräch führen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich wollte nur vorbei kommen, um mich für den Tipp zu bedanken. Ich denke in drei Tagen Tagen komm ich wieder, ich muss nur etwas erledigen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Bis zum nächsten Mal", true, "stella");
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middeToLLeaveSlow());
        Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.stella);
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Bis zum nächsten Mal", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "kleine Abenteurerin", true, "spieler");
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
    }
    Template.thirdStella = thirdStella;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaEinsamerberg() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene second Stella Einsamerberg starting");
        console.log("second Scene Stella starting");
        Template.ƒS.Sound.play(Template.sound.tavern, 1.2, true);
        await Template.ƒS.Location.show(Template.locations.tavernDay);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey, ein Zwergenfeuer bittte", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie ich sehe, auf den Geschmack gekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "deine Reise war also Erfolgreich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "JA, es war unglaublich, sowas habe ich noch nie gesehen!", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "So du musst dir vorstellen, Ein ganzer Berg voller Gold und die Zwerge, sind einfach sooo lustig.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Auch wenn ich eventuell jemanden ausversehen beleidgt habe", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie meinst du Beleidigt?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Naja also er wollte halt ein Wetttrinken, also habe ich ja gesagt.", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sag mir nicht du hast ihm auf die Füße gekotzt.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Iuh natürlich nicht, wir haben also angefangen zu Trinken und nach ungefähr 35 Zwergenfeuer, fiel er einfach um", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich glaube er war einfach Müde, aber er wollte dann einfach auch nicht mehr mit mir Reden", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja du hast halt seine Ehre beleidigt, auch wenn ich sagen muss das.......", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, ".....", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "WAS MEINST DU MIT  35", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "35 Zwergenfeuer halt, hab ich doch schon gesagt, wieso machst du daraus denn so nee große Sache", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella, bitte erinnere mich daran, NIEMALS gegen dich ein Wetttrinken zu bestreiten", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Alsoooooooo", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Alsoooooooooooooooooooooooooooooooooooooooooooooooooooooooo", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja was ist?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wohin als nächstes?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du bist doch grade erst wiedergekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber aber", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Okay ich will mal nicht so sein, ich hab da tatsächlich was", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl ", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Immer mit der Ruhe, du stirbst mir ja noch an nem Herzinfakt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Köngireich, finden ein Sternenfest in 3 Tagen statt.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Was ist denn ein Sternefest", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das wirst du schon selber herausfinden müssen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Achja und Stella", true, "spieler");
        let erinnernAnGeld = {
            iPickGuteReise: "Gute Reise Wünschen",
            iPickErinnernAnGeld: "Ans Bezahlen Erinnern"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(erinnernAnGeld, "choicesCSSClass");
        switch (dialogueElement) {
            case erinnernAnGeld.iPickGuteReise:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach nichts, Gute Reise und Probier unbedingt die Pasteten", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Werde ich machen, wir sehen uns dann in ein paar Tagen", true, "stella");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Und danke", true, "stella");
                Template.ƒS.update();
                Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.update();
                break;
            case erinnernAnGeld.iPickErinnernAnGeld:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dieses Mal bezahlst du bitte für dein Bier", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh Götter Ja ntürlich, Tut mir furchtbar leid", true, "stella");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine Sorge, ich wollte dich Sommerstum nur daran erinnern", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella legt die 2 Gold Stücke auf den Tisch");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Der Rest ist als dank für den guten Tipp", true, "stella");
                await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeave());
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.stella);
                Template.ƒS.update();
                break;
        }
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.secondStellaEinsamerberg = secondStellaEinsamerberg;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaKristalhöhle() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory second Scene Stella Kristalhöhle starting");
        console.log("second Scene Stella starting");
        Template.ƒS.Sound.play(Template.sound.tavern, 1.2, true);
        await Template.ƒS.Location.show(Template.locations.tavernDay);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie war die Höhle so? Funkelnd genug", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "könnte man sagen ja", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war aufjedenfall einen besuch Wert.", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das freut mich doch zu hören, heißt ich habe meinen fehler von letztem mal wieder gut gemacht?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ausnahmsweise ja, aber nur ganz ausnahmsweise.", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich fühle mich geehrt danke", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay spaß beiseite, es war unfassbar beindruckend.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wie der Mond auf den unterirdischen See leuchtete, das Wesen das dort herumflog und das Wasser bei seinen berührungen zum Glitzern brachte", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella wovon redest du grade?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "naa von dem See am ende der höhle", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du warst aber schon in der Höhle von der Karte oder?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja wo denn sonst?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella, dort gibt es keinen See, auf den der Modnscheinen kann", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "doch natürlich, du kennst doch bestimmt die große halle am ende oder?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja, ich glaube ich weiß welche du meinst.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Die mit den Farbigen Kristalen", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aaaaaah ja klar, die kenne ich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja aber dann weißt du ja auch, das dass ganze ein Rätsel ist um den gag dahinter zu öffnen", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "MOMENTAL WAS", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie das ist ein Rätsel, woher weißt du das?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ach wir hatten was ganz ähnliches daheim", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "woher kommst du noch gleich?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm aus Elysee, du weißt schon das", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das verwunsche Königreich aus den alten Gesichten, ja klar kenne ich das. Aber das gibt es doch nur in Märchen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Dafür war meine Kindheit aber ziemlich real", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warte mal kurz nen Moment, du erzählst mir grade allern ernstes, das du aus DEM ELYSEE kommst und sagst das so als wäre es das normalste der Welt?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Und du tust so als wäre es, irgendwas total abgefahrenes, du kommst ja auch aus dieser Welt", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja aber das hier ist ja auch die normale Welt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sagt wer?", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "zugegeben, bisher war ich nur in meinem beheimaten Königreich und Elysee, aber ich versichere dir, es gibt definitiv mehr als nur deine Welt", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wow, einfach nur wow. Das ist wow", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kannst du, Kannst du es mir zeigen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also was das betrifft.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Das könnte sich als schwer erweisen, weißt du, ehrlich gesagt", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ist es mir nicht mehr möglich zurückzukehren", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh das tut mir leid.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh nein nein, das muss es nicht. Ich ging freiwillig, zu dem eure Welt ist sowieso viel Aufregender und vor allem Lebendiger", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin gerne hier", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Schön das dir unsere Welt sogut gefällt, aber jetzt verstehe ich wenigstens auch, warum du auf alles so Naive reagierst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Paaah ich und naive? Niemals!", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Natürlich nicht, mein fehler", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ganz genau", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also, jetzt weißt du was über mich, was bekomme ich dafür?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sooooo, daher weht also der Wind, was schwebt dir denn vor, für diese außerordentlich Interessante Information", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, " Noch mal so eine Karte wäre doch recht Interessant, meinst du nicht?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Noch so eine habe ich leider nicht, aber wie wäre es mit einem Sternenfest, stattdessen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "klingt angebracht, wo finde ich denn besagtes Sternenfest", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Königreich, Munkelt man", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Munkelt man?", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Eine Redewendung, ich wollte nur lustig sein...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie dem auch sei, im Benachbarten Königreich findet es statt, aber du solltes tdich beeilen, es ist nämlich schon in 3 Tagen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh so bald schon, okay dann ähm ich muss los", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Danke dir für das Gespräch, ich komme wieder", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das ist alles was ich hören wollte, Gute Reise dir", true, "spieler");
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeave());
        Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.stella);
        Template.ƒS.update();
        Template.dataForSave.variableKristalhöhle = true;
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.secondStellaKristalhöhle = secondStellaKristalhöhle;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaMeer() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template  second Scene Stella Meer starting");
        console.log("second Scene Stella starting");
        Template.ƒS.Sound.play(Template.sound.tavern, 1.2, true);
        await Template.ƒS.Location.show(Template.locations.tavernSunset);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(200, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.enterToMiddle());
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh du bist wirklich zurückgekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sagte ich doch", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Jetzt spann mich schon nicht so auf die Folter", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich und auf die Folterspannen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "niemals", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber joa, es war ganz nett ", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ou", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "gut vielleicht war ganz nett, auch ein wenig Untertrieben", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "eventuell", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "also wirklich nur ganz eventuell", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, " war es", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ABSOLUT UNGLAUBLICH", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Deine BEschreibung, des Sonnenaufgangs, 1 zu 1 Perfekt", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "„ Und das Rauschen des Meers und einfach dieser ganze Anblick ich weiß gar nicht wo ich anfangen soll", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella immer mit der Ruhe, ich lauf dir schon nicht weg", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja aber, wo fange ich nur an", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh NATÜRLICH", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also ich bin auf so eine Insel herausgefahren und dort traf ich 2 Jungs, einer von ihnen hieß So…So….Sora genau. Auf jeden Fall hat der mir total viel von seinen Abenteuern erzählt, er war einfach im reich der Dunkelheit kannst du das glauben", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber auch im reich des lichtes und dem der Träume und dem des Nichts und dem von Chicago und irgendwelche anderen Welten. Ein paar davon waren auch Unterwasser, andere wieder nicht und irgendwas war da doch mit Häusern, die auf ihn geschmissen wurden und.", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay eventuell, bekomme ich es nicht mehr ganz zusammen", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ist aber auch egal", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "DEEEEEEENNNN", true, "stella"),
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella übergibt dir eine Sternenförmigen Frucht");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bekam die von diesem Jungen und auch wenn ich nach was anderem gesucht habe, wollte ich ein wenig Strand zu einem Griesgrämigen Barkeeper bringen, der nicht mehr den Ruf der Welt hört.", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Danke dir Stella, eventuell sage ich dir sogar eines Tages, was es mit dieser Frucht auf sich hat", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie die Frucht hat ein Geheimnis, komm schon, spann mich jetzt nicht auf die Folter", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naa ich muss doch sicher gehen, das du wiederkommst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "vor allem hast du ja auch ein Geheimniss vor mir, raus mit der Sprache, du gingst ja nicht nur zum Meer, damit du mir ein Souvenier mitbringen kannst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ertappt, Naja", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "du sagtest man wird irgendwann sesshaft, ich will das nicht glauben. Vielleicht kannst oder willst du nicht mehr an all die Wunderbaren Orte aufmachen. Doch ich werde es. Bis. Bis zu meinem letzten Atemzug. Ich muss einfach", true, "stella");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Und eventuell bringe ich dir ab und an was mit, um dich daran zu Erinnern", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube du hast recht. Wenn du jemals durch die zeit reist, erzähl das doch meinem Jungen ich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wird gemacht", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Weißt du denn schon, wohin es als nächstes gehen soll?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "noch nicht so ganz", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "was sagst du dann zu einem Sternenfest?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich würde sagen wo", true, "stella");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Königreich wirst du es finden und komm danach doch gerne wieder und erzähl einem Griesgrämigen Barkeeper wie du es fandest");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella Zwinkert dir zu und verlässt die Bar");
        await Template.ƒS.Character.animate(Template.characters.stella, Template.characters.stella.pose.normal, Template.middleToLeave());
        Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.stella);
        Template.ƒS.update();
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.tavern, 0, 2);
        await Template.ƒS.Location.show(Template.locations.blackout);
        await Template.ƒS.update(2);
    }
    Template.secondStellaMeer = secondStellaMeer;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map