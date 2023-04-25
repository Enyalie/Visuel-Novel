"use strict";
var Template;
(function (Template) {
    async function IXDPrototype() {
        console.log("FudgeStory IXDScene starting");
        console.log("FudgeStory IXD Scene Stella starting");
        console.log("Prototype IXD startking");
        await Template.ƒS.Location.show(Template.locations.Sandstrand);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Ira, "come, lets dance");
        await Template.ƒS.Character.hide(Template.characters.Ira);
        let IXDPrototype = {
            iPickleft: "left",
            iPickright: "right"
        };
        let IXDPrototypeStep1 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep1) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "Do you remember");
        let IXDPrototypeStep2 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep2) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "the time we danced");
        let IXDPrototypeStep3 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep3) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "beneath stars");
        let IXDPrototypeStep4 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep4) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "with nothing but");
        let IXDPrototypeStep5 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep5) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "the Music of howling winds");
        await Template.ƒS.Speech.tell(Template.characters.Ira, "End of Prototype");
    }
    Template.IXDPrototype = IXDPrototype;
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
        //SFX
        drop: "sounddatei pfad!"
        //Character text generating sound
    };
    Template.locations = {
        citySteampunk: {
            name: "citySteampunk",
            background: "Images/Bckground/d810e64a496e7465e3c6312b65946c4b.jpg"
        },
        Sandstrand: {
            name: "Strand",
            background: "Images/Bckground/nightsky.jpg"
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
                normal: "Images/Charakter/Stella.jpg"
            }
        },
        alessaButWithoutName: {
            name: "unbekannter Pestdoktor",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        alessa: {
            name: "Alessa",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Alessa.PNG"
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
                normal: ""
            }
        },
        Ira: {
            name: "Ira",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/DancingIraleft.PNG",
                right: "Images/Charakter/DancingIraright.PNG"
            }
        }
    };
    //*data will be safed (game progress)*//
    Template.dataForSave = {
        nameBarkeeper: "",
        variableKristalhöhle: false,
        variableRätselsceneAlessa1: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(ingameMenubuttosn, buttonFunctionalities, "gameMenuCSSClass");
        // ****SCENE HIERACHY!!!!!!!
        let scenes = [
            { scene: Template.IXDPrototype, name: "Stella and Alessa seeing each other" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstElidibus() {
        console.log("FudgeStory Template Scene Elidibus starting");
        console.log("first Scene Elidibus starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        //Play Bar ambience
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ein Mann betritt die Bar und läut Zielstrebig zur Theke, hinter ihm bildet sich eine Spur aus schwarzen Blut");
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.elidibusButWithoutName, Template.characters.elidibusButWithoutName.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        //show Monster Kopf + Einspielen aufklatschen Sound
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Zieh ein Becher von der Belohnung ab");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh natürlich natürlich, dennoch ich muss zugeben, wart ihr nicht erst vor ein paar Stunden hier?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Es wäre schneller gegangen, wären die Angaben präziser gewesen.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Mann vor dir ext das Bier, das du ihm hingestellt hast binnen sekunde");
        // trink geräusche einfügen
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Also was ist der nächste Auftrag!");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Immer mit der ruhe, ihr seid doch grade erst angekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wollt ihr euch nicht erst einmal ausruhen? Die Nacht bricht sowieso heran", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Ich versichere dir Bartender. Ich muss mich nicht ausruhen.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ähem" + Template.dataForSave.nameBarkeeper, true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "euer Name nähme ich an. Gut" + Template.dataForSave.nameBarkeeper);
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Jetzt nennet mir den nächsten Auftrag!");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was bitte treibt euch zu diesem Dunkeln stunde so versessen auf die Jagd?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Was Interessiert es euch. Ich entledige mich eures Problems und ihr Bezahlt mich.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bin ein Barkeeper, Informationen sind mein Geschäft und genau diese verlangt ihr ja immerhin grade von mir", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "also Jäger, was treibt euch zu dieser stunde so versessen auf die Jagd", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Gold.... und jetzt den Auftrag");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "God also", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun gut Jäger, da ihr so veressen auf Gold seid, was haltet ihr von einem Werwolf?");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Was ich davon halte?");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "eine vielversprechende Jagd würde ich sagen");
        //Show Elidibus weggedreht
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Wir sehen uns in 2 Wochen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach eines noch Jäger", true, "Spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nächstes mal, sagt mir doch bitte den wahren grund");
        //Speeker Elidibus tzz einspielen
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Jäger geht hinaus in die Nacht");
    }
    Template.firstElidibus = firstElidibus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstStella() {
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh ihr Götter wie das duftet und sind das etwa frische Pilze aaaah och nein wie süß ein Kürbis und ist das etwa");
        //sound einspielen, hatten wir bisher noch nicht
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh tut mir leid, ähm, ich-ich räume das sofort wieder auf.");
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, "Machen Sie sich keine Sorgen junge Frau, das passiert schon mal");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm, es tut mir dennoch unfassbar leid. Stella übrigens. Und du bist?");
        //Pose pease einspielen und wieder zurück zu Pose normal
        Template.dataForSave.nameBarkeeper = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sehr erfreut,Ich bin" + " " + Template.dataForSave.nameBarkeeper + "" + "der Barkeeper  dieses kleinen Ambientes", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Stella, sagen sie mir, darf ich ihnen etwas zum trinken anbieten?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "„Hmmmmmmm, trinken hmmm, sie haben so viel auf ihrer Karte, was soll ich nur. Okay Okay wie wärs. ");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aaaaaaah ich habs");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Überraschen sie mich");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun aber langsam, ich kenne sie doch kaum, wie soll ich ihnen da etwas Empfehlen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dennoch Sie sind bestimmt durstig, also sollte mir einen Hinweis reichen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagen sie mir bitte ihre Lieblingsblume", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm meine lieblingsblume hmmmm. Ich denke die Kirschblüte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Die Schönheits des Lebens in seiner Zerbrechlichkeit also", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In diesem fall, ja genau würde ich ihnen folgendes Empfehlen.", true, "spieler");
        //await  ƒS.Speech.setTickerDelays(_letter20,characters.stella, "hey hey hey hey");
        let drinkempfehlung = {
            iPickBier: "Bier",
            iPickTequilaSunrise: "TequilaSunrise",
            iPickDrachenwhiksy: "Drachenwhisky"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(drinkempfehlung, "choicesCSSClass");
        switch (dialogueElement) {
            //Path Bier
            case drinkempfehlung.iPickBier:
                console.log("Case Bier ab jetzt abspielen.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke für sie, ja genau einmal ein Zwergenfeuer unser Haus Bier. ", true, "spieler");
                //Stella Fragezeichen über dem Kopf anzeigen lassen
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ist etwas nicht Inordnung miss?", true, "spieler");
                //Stella erschrocken anzeigen
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm doch doch sorry, es ist nur. Was ist das?");
                //Einbledung Bierflasche mit Zwergenbild
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Meinen Sie etwa den Zwerg?", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(200);
                await Template.ƒS.Speech.tell(Template.characters.stella, "Z-w-e-r-g");
                Template.ƒS.Speech.setTickerDelays(20);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In Gedanken:Ist es wirklich möglich bisher noch nie etwas von Zwergen gehört zu haben? ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun ja, ähm wie beschreibe ich Ihnen das am besten", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Zwerge sind Meister der Schmiede, es gibt kein Feuer das für sie zu heiß  und keinen Stein der für sie zu hart ist.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ebenfalls legen sie viel Wert auf ihre Bärte. Das Beeindruckendste an ihnen ist, aber vor allem ihre Feier Kunst. ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Riesenfeste mit Maßen an Bier und Fleisch. Grade ihr Pökel Fleisch ist legendär.", true, "spieler");
                //Sprachausgabe anpassen, sehr schnell bei Stella gleich
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oooh das klingt ja wundervoll, wo kann ich solche Zwerge antreffen und dieses Bakel Fleisch probieren.");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich muss sie einfach sehen, jetzt wo sie mir so viel von ihnen Erzählt haben, bitte ");
                await Template.ƒS.Speech.tell(Template.characters.stella, "bitte, bitte, bitte, bitte bitte bitte Sie müssen mir sagen wo ich sie finde.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also wenn sie wirklich Zwerge sehen wollen, dann, müssen sie nach Norden zu dem einsamen Berg reisen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Der einsame Berg also….ich danke ihnen vielmals");
                //Satz langsam einpielen, dann verzögert und nach punkten schnell
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella springt wie ein Wirbelwind auf uns verlässt die Bar…..ohne zu ");
                break;
            //Path Tequila Sunrise
            case drinkempfehlung.iPickTequilaSunrise:
                console.log("Path Tequila Sunrise ab jetzt abspielen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In dem fall, denke ich bestimmt das ich sie damit begeistern kann", true, "spieler");
                //Bild Tequila Sunrise einspielen
                await Template.ƒS.Speech.tell(Template.characters.stella, "Uuuuuh schmeckt das süß und diese Farbe, wie ein Sonnenuntergang");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "eigentlich soll es einen Sonnenaufgang Symbolisieren", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wissen Sie. Jedes Mal, wenn ich diesen Cocktail mache, denke ich an meinen letzten Strandurlaub zurück und erinnere mich ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "an das Lila und Organe, das langsam die letzten Schatten der Nacht am Horizont durchbricht.", true, "spieler");
                //Lachen Einspielen, Goldroger maybe
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es tut mir furchtbar leid, ich muss sie bestimmt langweilen.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Nein überhaupt nicht, bitte erzählen Sie mir mehr");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So viel mehr gibt es gar nicht, das alles ist schon eine Weile her, damals war ich selbst noch Abenteuer und bereiste die Welt", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso tuen sie es jetzt nicht mehr? Was hält sie davon ab");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach weißt du, da war ein Kampf und ein Pfeil und seit dem, hach ja jeder wird Irgendwann mal sesshaft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich nicht niemals! Wie könnte ich auch, es gibt soviel unglaubliches zu sehen gibt. ");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Diese Welt ist so voller Wunder, wie könnte ich da jemals nicht alles davon sehen und erleben wollen");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Imerhin ist dieses Leben doch so kurz, wie soll ich da jemans aufhören zu suchen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke das ist keine Entscheidung die man bewusst trifft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke für jeden von uns ko-", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Meer also");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie bitte", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Meer, das wird mein nächstes Ziel sein. Ich danke ihnen, bis in ein paar Wochen");
                await Template.ƒS.Character.hide(Template.characters.stella);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella steht auf, zwinkert dir noch einmal zu, wirft 1 Goldmünze auf den Tisch und macht sich Richtung anbrechende Dämmerung. ");
                //Item bekommen Goldmünze, mit Symbol aus einem Königreich das du nicht kennst
                break;
            //Path Drachenwhisky
            case drinkempfehlung.iPickDrachenwhiksy:
                console.log("Path Drachenwhisky ab jetzt abspielen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sie sehen mir aus, als könnten sie was vertragen.");
                //schluckgeräusch
                await Template.ƒS.Speech.tell(Template.characters.stella, "Götter WAS IST DAS");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Selbstgebrannter Drachenwhisky, nur das Beste für unsere Kundschaft", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "sagen sie mir nicht, Leute trinken sowas freiwillig, das brennt ja wie Drachen Feuer…..");
                await Template.ƒS.Speech.tell(Template.characters.stella, ".... ........ .....  ...... daher also der Name");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun Stella war es richtig, was treibt sie in unsere Stadt?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm nicht viel, ich bin einfach nur auf der Durchreise und wolle mir einen Trink nehmen, eigentlich war die Idee dabei nicht vergiftet zu werden");
                //Lachen Einspielen Barkeeper
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bitte vielmals um Entschuldigung, es ist nicht immer leicht den Geschmack meiner Kundschaft vorauszusagen. ", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nächstes Mal enttäusche ich sie nicht, ganz sicher", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Nächstes Mal also, sie sind aber zuversichtlich, dass ich wieder herkomme");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nur so ein Gefühl", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Stella, auf der Durchreise, wo soll es denn hingehen?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wenn ich das nur wüsste");
                //Säufzer Einspielen
                await Template.ƒS.Speech.tell(Template.characters.stella, "Diese Welt ist so groß, wie soll man da überhaupt wissen, wohin man gehen soll.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also falls sie mir diese Chance erlauben, könnte ich ihnen einen Vorschlag machen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Hmmmmmmm");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine sorge ich kam selbst viel herum, ich kenne da ein paar schöne Orte", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "waren sie den schon mal in einer Kristalhöhle?", true, "spieler");
                //Stella Pose Aufgeregt zeigen
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dachte ich es mir doch, hier bitte nehmen sie als Entschuldigung diese Karte sie führt sie direkt dorthin", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh mein Gott, danke danke danke danke danke danke");
                await Template.ƒS.Character.hide(Template.characters.stella);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella steht wie ein Wirbelwind auf und rennt zur Tür ");
                //einspielen Schritte
                await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
                //Einspielen Geld suchen sound
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Passt schon, kommen Sie einfach wieder", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das werde ich");
                await Template.ƒS.Character.hide(Template.characters.stella);
                await Template.ƒS.Speech.tell(Template.characters.narrator, " Stella lächelt dir zu ehe Sie in die anbrechende Nacht hinaus rennt");
                break;
        }
    }
    Template.firstStella = firstStella;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstAlessa() {
        console.log("FudgeStory Template Scene Alessa starting");
        console.log("first Scene Alessa starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //Play Bar Ambience
        //Play Open Door sound
        //Bar ambience == Mute
        //Play Footsteps
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.alessaButWithoutName, Template.characters.alessaButWithoutName.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "....");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Öhm, dürfte es etwas sein?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Whisky einen Doppelten bitte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Einen doppelten also .... harter Tag?", true, "spieler");
        //Sound stöhnen
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Wie schwer kann es bitte sein still zu liegen?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also es kommt drauf an, je nachdem, also ähm. Wollen Sie jetzt echt eine Antwort von mir darauf?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Nein alles gut, es war");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Es war einfach ein langer Tag");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wissen sie ich möchte ihnen nicht zu nahetreten, aber lange bei ihnen heißt oft nicht gut.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So so, und dem ist so weil?");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Naja ihres gleichen, taucht ja nicht grade an den schönsten Orten auf.");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Meinesgleichen?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach kommen sie, sie wissen genau, was ich meine. Rabenmaske, schwarze Kleidung. Wollen sie etwa noch mehr Pestdoktor schreien?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben die Federn vergessen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bitte um verzeihung natürlich wollte ich nicht ihr wunderschönes Federgewandt vergessen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach wie schön das ihnen das Auffält, wissen sie es ist so schwer in dieser Branche sich Stilbewusst zu kleiden");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "aber ich nehme sie nur auf den Arm, mir ist schon bewusst welchen Eindruck ich auf Menschen mache");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich denke sie sind weniger furchteinflößend, wenn sie ihre Maske abnehmen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Vielleicht, ist dann immer nur ein wenig schwer, mit dem Alltag wissen Sie");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja ich kenne das, ich trage deswegen auch immer mein Barkeeper gesicht beim Arbeiten um unerkannt zu bleiben", true, "spieler");
        // lachen Alessa Einspielen
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Okay Barkeeper, ich mag sie. Was halten sie von einem Spiel? Ich bräuchte wirklich ein wenig Ablenkung von dem ganzen Elend");
        let keineWahl = {
            iPickYes: "Okay, lass uns Spielen"
        };
        let dialoguekeineWahl = await Template.ƒS.Menu.getInput(keineWahl, "choicesCSSClass");
        switch (dialoguekeineWahl) {
            //Path Yes for Game
            case keineWahl.iPickYes:
                console.log("Path Yes for Game");
                await Template.ƒS.Speech.tell(Template.characters.barkeeper, "Okay was schlagen Sie vor?");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Danke ihnen, okay für den Anfang einfach nur ein Rätselspiel. Nichts besonderes");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "also");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Was hat Wurzeln die keiner sieht. Ragt höher als Bäume und Wipfelsäume, wächst nie und treibt nicht und reicht doch ins licht?");
                let rätsel1 = {
                    iPickTurm: "Ein Turm",
                    iPickBerg: "Ein Berg",
                    iPickWolke: "Eine Wolke",
                    iPickFluss: "Ein Fluss"
                };
                let indicatorforRätsel = {
                    number: 0
                };
                let rätsel1Entscheidung = await Template.ƒS.Menu.getInput(rätsel1, "choicesCSSClass");
                switch (rätsel1Entscheidung) {
                    case rätsel1.iPickTurm:
                        break;
                    case rätsel1.iPickBerg:
                        indicatorforRätsel.number = +1;
                        break;
                    case rätsel1.iPickFluss:
                        break;
                    case rätsel1.iPickWolke:
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sehr gut nächste Frage");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warten sie sagen, sie mir denn nicht, ob ich richtig war?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Am ende des Spieles gerne, nun denn Rätsel Nummer 2");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Zweiundreißig Schimmel auf einem roten hang-erst mahlen sie, dann stampfen sie und warten wieder lang");
                let rätsel2 = {
                    iPickFliegenpilz: "Ein fliegenpilz",
                    iPickEinhörner: "Ein Einhorn",
                    iPickWindmühle: "Eine Windmühle",
                    iPickZähne: "Zähne" //right Answer
                };
                let rätsel2Entscheidung = await Template.ƒS.Menu.getInput(rätsel2, "choicesCSSClass");
                switch (rätsel2Entscheidung) {
                    case rätsel2.iPickFliegenpilz:
                        break;
                    case rätsel2.iPickEinhörner:
                        break;
                    case rätsel2.iPickWindmühle:
                        break;
                    case rätsel2.iPickZähne:
                        indicatorforRätsel.number = +1;
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sehr gut, sehr gut, ein letztes noch");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Etwas, das alles und jeden verschlingt: Baum, der rauscht, Vogel, der singt, frisst Eisen, zermalmt den härtesten Stein, Zerbeißt jedes Schwert, jeden Schrein, schlägt Könige nieder, schleift ihren Palast, trägt mächtigen Fels fort als leichte last");
                let rätsel3 = {
                    iPickWasser: "Wasser",
                    iPickWind: "Wind",
                    iPickZeit: "Zeit",
                    iPickNichts: "Nichts"
                };
                let rätsel3Entscheidung = await Template.ƒS.Menu.getInput(rätsel3, "choicesCSSClass");
                switch (rätsel3Entscheidung) {
                    case rätsel3.iPickWasser:
                        break;
                    case rätsel3.iPickWind:
                        indicatorforRätsel.number = +1;
                    case rätsel3.iPickZeit:
                        break;
                    case rätsel3.iPickNichts:
                        break;
                }
                while (indicatorforRätsel.number == 3) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Hoho 3 von 3. Sehr gut mein lieber und danke für die großartige Unterhaltung, kommen sie. Als Dank gebe ich ihnen ein kleines Geschenk");
                    //Item Erhalten, eine Feder von Alessa
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "„Falls sie jemals einen Arzt brauchen, schicken sie diese Feder einfach in die Nacht. Ich werde kommen.");
                    break;
                }
                while (indicatorforRätsel.number == 2) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.");
                    break;
                }
                while (indicatorforRätsel.number == 1) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ich hoffe sie haben unser kleines Rätselspiel auch so sehr genossen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es war auf jeden Fall mal etwas anderes. Nächstes Mal, schaffe ich aber alle ihre Rätsel zu lösen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, " Wir werden sehen, in der Tat das werden wir.");
                    Template.dataForSave.variableRätselsceneAlessa1 = true;
                    break;
                }
                while (indicatorforRätsel.number == 0) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach kommen sie, wirklich 0");
                    //lachen Einspielen barkeeper
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Entschuldigen sie bitte. Nächstes Mal werde ich sie nicht enttäuschen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So nächstes Mal also, ich zähle darauf.  Aber was, wenn doch?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich versichere ihnen, es wird kein, wenn doch geben. Und falls doch, dann dürfen sie sich von mir eine Flasche ihrer Wahl wünschen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Einverstanden. Eine Flasche gefüllt mit dem Inhalt meiner Wahl");
                    break;
                }
                break;
        }
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Woher haben sie eigentlich diese Rätsel?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ach die, aus einer Höhle, ein gerissenes Männchen wollte mit mir ebenfalls Spielen und ich empfand seine als äußerst Lustig");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ein Rätselspiel in einer Höhle. Verrückte Welt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie haben ja keine Ahnung. Ein Rätselspiel in einer Höhle zählt wahrscheinlich nicht mal zu den 50 kuriosesten Dinge, die ich bisher erlebt habe");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nicht mal zu den 50 besten wow, Stella würde sie lieben", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Stella?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Eine Kundin, die vor kurzem hier war. Sie ist sehr interessiert an... so ziemlich allem. Ja das ist eine sehr gute Beschreibung", true, "spieler");
        //Ja das ist eine sehr gute Beschreibung
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube sie würden sie mögen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Vielleicht, vielleicht auch nicht, vielleicht treffe ich diese Stella ja eines Tages");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Glauben sie mir, falls sie sich begegnen, werden sie Sie erkennen. Zumindest kann ich mir nicht vorstellen, dass Stella nicht total ausflippt, wenn sie so eine Stilbewuste Ikone sieht", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Sie Charmeur. Bleiben sie am Leben, es wäre tragisch würde ich bei meinem nächsten Besuch jemand anderes vorfinden");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich werde mein Bestes geben. Bis zum nächsten Mal…", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie war noch gleich ihr Name?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Nächstes mal");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "....vielleicht");
        //Allesa legt das Geld für den Whiksy auf den Tisch und geht
    }
    Template.firstAlessa = firstAlessa;
})(Template || (Template = {}));
//last one
var Template;
//last one
(function (Template) {
    async function fivedStella() {
        console.log("FudgeStory Fived Stella starting");
        console.log("FudgeStory Fived Scene Stella starting");
        console.log("Final Scene starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh du bist wieder da");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich hoffe das dir nichts passiert ist, du gingst letztes Mal so apprubt");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh ja ja natürlich, ich musste, ähm brauchte nur etwas Zeit für ähm dinge");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Tut mir leid ich will ungern darüber reden.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Muss es nicht, dennoch freut es mich das du deinen Weg erneut in meine Tür gefunden hast");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Etwas das ich hoffentlich noch viele Male tun werde");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber sagt mir,");
        await Template.ƒS.Speech.tell(Template.characters.stella, "War Alessa Arg böse das ich gegangen bin, ich war keine 10 Schritte Entfernt da wollte ich umdrehen um ihr zu sagen das es nicht an ihr liegt nur, naja hätte ich mich so erklären müssen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine Sorge Stella, Alessa war überhaupt nicth böse auf dich");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dennoch wird sie sich bestimmt darüber freuen, wenn ihr, ihr das sagt");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sofern ich die chance dazu bekommen sollte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh glaubt mir das werdet ihr");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso seid ihr euch dessen so sicher?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Weil ein Barkeeper nun Mal seine Informationen hat, aber dies soll sie euch lieber selbst Erzählen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun denn Stella, wohin werdet ihr eigentlich als nächstes reisen?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin mir nicht sicher, vielleicht laufe ich einfach los und schaue wohin mich meine Füße so tragen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So ganz ohne Ziel?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Auf der Reise wird sich bestimmt eines finden");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Immerhin bin ich weit davon entfernt diese Welt bereits vollends erkundet zu haben");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie immer bewundere ich eure Abenteuerlust");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und doch, so ganz alleine dort draußen habt ihr keine Angst?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wieso sollte ich. Das schlimmste was mir passieren kann, ist das ich um mein Leben renne");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und dabei hinfällst und dir das Bein brichst.");
        //Alessa zeigen
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du bist wahrlich naiv, alleine durch die Welt reisen.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie lange hast du unser Gespräch bereits belauscht.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Lang genug um abermal einen Dramatischen auftritt hinzulegen");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und lang genug um Stella davon zu bewahren etwas derart törrichtes zu machen ");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin überhaupt nicht Naiv, bisher kam ich auch alleine immer sehr gut zurecht");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "vermutlich schon, aber so alleine durch die Welt reisen ist doch auch furchtbar einsam. Möchtest du nicht lieber in Begleitung reise ");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ist das etwa, ein angebot das du mitkommst");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Leider nicht, ich bin nicht so die große Abenteurerin. Aber");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich kenne da jemanden, den du vielleicht kennenlernen willst");
    }
    Template.fivedStella = fivedStella;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function fourthStellawithAlessa() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella meets Alessa starting");
        console.log("fourth Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh Stella, freut mich dich zu sehen, gehts dir wieder besser?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich habe auf jeden Fall das Erledigt, was ich Erledigen wollte");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber lass uns doch nicht darüber reden, wie ist es dir ergangen?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja wie immer halt, Kunden waren hier ich gab Getränke aus", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das normale Leben hinter der Theke halt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Du bist nur eine Entscheidung entfernt davon das zu ändern");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und die durstigen Gäste ohne Zwergenfeuer lassen, wohl kaum", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wie du meinst");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ist das überhaupt Lustig? So am Thresen die ganze Zeit zu stehen und nur zu zuhören?");
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
                await Template.ƒS.Speech.tell(Template.characters.stella, "vielleicht sogar wieder in diesem");
                await Template.ƒS.Speech.tell(Template.characters.stella, "du wirst schon sehen, ich hab da so ein Gefühl");
                await Template.ƒS.Speech.tell(Template.characters.stella, "der Ruf wird kommen, du musst nur hinhören und ihm folgen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ich hoffe du hast recht", true, "spieler");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.stella, "Übrigens, ich hab auf dem Fest von einem Jäger gehört");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Er muss ja ziemlich bekannt sein, falls man vom ihm redet", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Natürlich, immerhin hat er einen Werwolf besiegt und das mit bloßen Händen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Mit bloßen Händen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wow", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "so viel hatte ich ihm tatsächlich nicht zugetraut", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sag mir nicht du kennst ihn");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kennen tue ich Elidibus jetzt nicht wirklich, selbst seinen Namen kenne ich nur durch eine Freundin.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aber ja, ich gab ihm den Auftrag", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "DU GIBST AUFTRÄGE RAUS");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warum sollte ich nicht? Woher glaubst du bitte, kenne ich all diese Orte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "uuuuuh, kannst du mir auch einen geben?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella bist du überhaupt eine Kämpferin?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Noch nicht, aber ich kann es ja werden");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du würdest echt alles für ein Abenteuer machen oder?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Das dir das jetzt erst klar wurde");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Du solltest eventuell dennoch erst mal damit Anfangen Kämpfen zu lernen, bevor du auf Monsterjagd gehst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wer sagt denn das ich nicht Kämpfen kann?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Du vor grade eben erst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Nein ich sagte, dass ich keine Kämpferin bin, nicht das ich nicht Kämpfen kann");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Natürlich habe ich gelernt mich zu verteidigen, es ist nur einfach so. Ich töte nicht gerne");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und wieso willst du dann einen Auftrag?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Weil ich so Leuten helfen könnte. Und Monster sind ja auch keine guten Wesen!");
        await Template.ƒS.Speech.tell(Template.characters.stella, "eventuell auch, weil ich langsam ein wenig Geld brauche");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Daher kommt also das Interesse", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Leider muss ich dich enttäuschen, ich habe grade keine Jobs", true, "spieler");
        //ende normale szene
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also ich hätte vielleicht einen");
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich hatte fast nicht mehr mit dir gerechnet", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Als ob ich jemals vor einer Herausforderung zurückschrecken würde");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich hatte heute nur viel zu tun, deswegen meine Verspätung");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie unhöflich von mir. Du musst bestimmt Stella sein");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm");
        await Template.ƒS.Speech.tell(Template.characters.stella, "öhm");
        await Template.ƒS.Speech.tell(Template.characters.stella, " Ja, bin ich. Wer bist du? Und woher kennst du mich? Und wieso hast du nee Maske? Und sind das echte Federn, an diesem Mantel?");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du darfst mich Alessa nennen, die Maske ist gegen Bakterien und zum Schutz, von unserem gemeinsamen Freund, ja sind es, schön oder?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wieeeee du hast ihr sofort deinen Namen gesagt. Ich musste hart dafür Arbeiten", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du hast so bezaubert von ihr geredet, da kann ich doch nicht anders");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Warte, er hat was");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, hab ich dir was getan und natürlich nur Gutes Stella", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay darüber reden wir später, aber zu erst");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Du siehst einfach sooooooooooooooo hübsch aus!");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Bist du auch Abenteurerin?");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Mitnichten, ich bin Doktor, man könnte sagen ein sehr guter");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Seit wann sehen Doktoren denn so ");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Modebewusst aus. Tun sie nicht, ich bin da besonders");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber genug von mir, Stella spielst du gerne?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ähm ich denke schon");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du hättest sowieso keine Wahl gehabt keine sorge", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Sehr gut, dann spielen wir");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dieses Mal aber ein wenig was schwierigeres, immerhin ist " + Template.dataForSave.nameBarkeeper + " schon geübt in meinen Rätseln");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wurde geschlagen, aber nicht verwundet. Bin eine Mauer und doch stehe ich nicht still. Was bin ich? ");
        let spielenMitStellaScene4 = {
            iPickolzpuppe: "eine Holzpuppe",
            iPickRitter: "ein Ritter",
            iPickBoxsack: "ein Boxsack"
        };
        let indicatorforRätselszene4 = {
            number: 0
        };
        let rätselSpielMitStella = await Template.ƒS.Menu.getInput(spielenMitStellaScene4, "choicesCSSClass");
        switch (rätselSpielMitStella) {
            case spielenMitStellaScene4.iPickolzpuppe:
                await Template.ƒS.Speech.tell(Template.characters.stella, "aber eine Holzpuppe steht doch still?");
                break;
            case spielenMitStellaScene4.iPickRitter:
                await Template.ƒS.Speech.tell(Template.characters.stella, "There will come a soldier Who carries a mighty sword He will tear your city down, oh lei-oh lai-oh Lord");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh tut mir leid, es hat mich nur an etwas erinnert.");
                indicatorforRätselszene4.number = +1;
                let versteckterSong = {
                    iPickSong: "There will come a poet",
                    iPickAntwort: "An was?",
                    iPickJoke: "Einen trinken"
                };
                let schlüsselStellaWarheit = await Template.ƒS.Menu.getInput(versteckterSong, "choicesCSSClass");
                switch (schlüsselStellaWarheit) {
                    case versteckterSong.iPickSong:
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Whose brow is laid in thorn Smeared with oil like Davids boy, oh lei-oh lai-oh Lord", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Du");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Du kennst den Song");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Klar kenne ich den Song, warte mal kurz", true, "spieler");
                        //Background Klavier anzeigen
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube ich erinnere mich auch noch an die Noten", true, "spieler");
                        //play Soldier poet king 1:30min
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "und was meinst du?", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Das war");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Also");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "das");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "es war einfach wunderschön");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "seit wann kannst…Du Klavier spielen");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja spielen kann ich jetzt nicht wirklich, das bisschen rumgeklimmper, aber ich habe es als Kind gelernt", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Klimpern, war das nicht. Es war wirklich sehr gut");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "vielleicht werden wir in Zukunft das machen, anstatt zu Spielen");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Danke euch. Ich habe ganz vergessen wie schön es ist zu Musizieren", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie eine eigene Welt");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "sag mal");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "dürfte ich eventuell etwas spielen?");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "ich bin nicht sonderlich gut aber");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist egal, sei mein Gast", true, "spieler");
                        //zeigen Stella am Klavier
                        //spielen, melodie
                        await Template.ƒS.Speech.tell(Template.characters.stella, "mehr kann ich leider nicht");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das macht es nicht weniger schöner", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie heißt das Stück. Es ist wirrklich wahnsinnig schön", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich weiß es nicht, ich kenne diese Melodie einfach, sie begleitet mich schon mein Leben lang");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und sie ruft dich hinaus in die Welt.");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "JA GENAU");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Hörst du es etwa auch?");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hm?");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nein, nein ich höre keine Melodie, aber ich kenne diese Worte. Ein ");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ein sehr guter Freund hat mal etwas sehr ähnliches zu mir gesagt");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "ich...Ich sollte ihn dir mal vorstellen. Ich glaube du wirst ihn mögen");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "er hat dir also was ähnliches gesagt....");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich hoffe die Gelegenheit wird sich bieten.");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war wirklich unfassbar schön dich kennenzulenen Alessa, ich hoffe wir können das wiederholen");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "tut mir leid, ich werde mich für heute Entschuldigen");
                        await Template.ƒS.update(1);
                        await Template.ƒS.Character.hide(Template.characters.stella);
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hab ich was falsches gesagt");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich bin mir nicht sicher. Ich weiß nur das ich Stella noch nie so förmlich erlebt habe", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich wusste nicht Mal das sie so förmlich sein kann", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Auch wenn ich es hasse das zu sagen, weil ich");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "weil ich wirklich daran geglaubt habe");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wollte das du recht hast. Aber");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "das heißt dann  wohl, das ich unser kleines Spiel gewonnen habe");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Trotzdem danke für den versuch.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So glaubst du das.", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich würde sagen wir gehen  in die zweite runde", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "das alles fängt grade erst an.", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du wirst schon sehen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Bis in ein paar Tagen " + Template.dataForSave.nameBarkeeper);
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wobei, ihr kennt nicht reinzufällig einen Krieger der ein wenig mürrisch ist");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es gäbe da schon eine Person auf die das zutrifft wieso?");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hat dieser zufällig Graues Haar?");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wenn ich michr echt entsinne hatte er dies");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wird dieser in näherer Zukunft erneut hier aufschlagen.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In ein paar wieso fragt ihr");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nur eines versprechesnwegen");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Nun wirklich Gute Nacht");
                        break;
                    case versteckterSong.iPickAntwort:
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ach nur an eine Erinnerung aus meiner Kindheit, nix besonderes");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber es ist lustig oder? Ich sah eine Menge Ritter und Abenteurer mitlerweile auf meinen Reisen.");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Und doch, war es genau dieses Rätsel, das mich daran erinnerte.");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ah tut mir mega leid ich quatsche euch total voll");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich finde das überhaupt nicht komisch. Die Art und Weise wie das Gehirn funktioniert ist immerhin bisher kaum erforscht");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ein einziges Wort ist dazu fähig, vergessenes hervorzuholen, wieso sollte das Komisch sein. Ich finde wir sollten uns vielmehr daran erfreuen.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich dachte du wärst Doktor und keine Poetin", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Im gegensatz zu deinen, sind meine Kunden gebildeter.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagte meine Kundin", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "....................................");
                        //Stella lachen pose anzeigen
                        break;
                    case versteckterSong.iPickJoke:
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Solange er danach wenigstens hierher kommt um etwas zu Trinken", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "naja ich denke so ein Königreich zu stürzen macht schon durstig");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Also eine gute Chance bestünde ja schon mal. Uuuuuund, er würde aufjedenfall eine menge tipps bekommen, wie er das nächste Stürzen könnte");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Du hast mir nie erzählt, das du Revolutionär bist.");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Jetzt macht das alles auch wenigstens Sinn, die Bar, die schlechten Drinks. Natrlich alles nur ein Deckmantel, für deinen großen Plan");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Meine Drinks sind überhaupt nicht schlecht!", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich würde lieber aufpassen was du sagst, jetzt wo du mein Geheimnis rausgefunden hast, sonst werde ich die Ärzte Kammer, als nächstes überfallen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Natürlich Natürlich, mir zittern schon die Knie, wenn ich an deine Armee aus trunkbolden denke");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sollte es auch, hast du Stella schon mal Kämpfen sehen", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ach jetzt vertraust du auf einmal in meine Fähigkeiten");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Dann macht es dir ja auch bestimmt nichts aus, mir einen Auftrag zu geben, oh großer Revolutionist");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Unsere Stunde ist noch nicht gekommen, wir müssen wachsam bleiben", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ah ja");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "natürlich mein Anführer");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Götter bewahre uns vor dem Tag, wo du jemals eine Armee anführen musst");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sie würden erzittern vor meinem können", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Und auserwählen für ihren Champion. Meine Daumen sind gedrückt keine sorge");
                        break;
                }
                break;
            case spielenMitStellaScene4.iPickBoxsack:
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wird das nicht erst in 400 Jahren erfunden");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube du hast recht", true, "spieler");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay nächste frage");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Der Schrein ohne Deckel, Schlüssel, Schanier birgt einen goldenen Schatz, glaub es mir!");
        let spielenMitStellaScene4Frage2 = {
            iPickHerz: "Das Herz",
            iPickTempel: "ein Tempel",
            iPickEi: "ein Ei"
        };
        let rätselSpielMitStellaFrage2 = await Template.ƒS.Menu.getInput(spielenMitStellaScene4Frage2, "choicesCSSClass");
        switch (rätselSpielMitStellaFrage2) {
            case spielenMitStellaScene4Frage2.iPickHerz:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube mit dem herz liege ich sehr richtig, zumindest habe ich keinen Schlüssel dafür", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Und je nachdem wie man es sieht ist es auch golden, wenn auch sehr Poetisch");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "soviel kann ich euch sagen, das wäre zu poetisch für mich");
                break;
            case spielenMitStellaScene4Frage2.iPickTempel:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ein Tempel klare sache!", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Schon, Mal von einem Tempel ohne Schlüssel gehört? oder dach?");
                break;
            case spielenMitStellaScene4Frage2.iPickEi:
                await Template.ƒS.Speech.tell(Template.characters.stella, "Wie kommst du bitte auf ein Ei?");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Das Herz würde doch viel mehr Sinn machen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dachte ich zu erst auch, aber das goldene hat mich abgeschreckt", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Was wenn Alessa nur poetisch war?");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Da ich weiß wo diese Rätsel herkommen, gehe ich eher weniger davon aus", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was mnich zu dem schluss führte, es muss logisch sein. Und schau mal, ein Ei kann man nur aufbrechen und doch behütet es sein inneres. Und genau so wie man den Mutterschos Tempel nennt, würde das hier auch Sinn machen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Desweiteren, welche Farbe hat das innere?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Weiß und...Gold oh Götter ja du hast recht!");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Doch was meintest du mit, wo sie herkommen?");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube das sollte dir Alessa lieber selber erzählen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "muss ich");
                await Template.ƒS.Speech.tell(Template.characters.stella, "JA, und zwar die lange fassung!");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "du hast glück, das ich dich mag");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also es war vor ein paar Monaten");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich sollte eine kleine Gruppe von Helden begleiten, weil sie einen Ring zerstören wollten");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Frag mich nicht, ich fande das unterfangen sehr absurd, aber für sie war es ausgesprochen wichtig");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wir sind also durch eine Gebirskette gelaufen, damit wir einem dunklem Zauberer Namens Salamo, oder so ähnlich auswichen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Hat eher mittelmäßig gut funktioniert, da wir mit Blitzen abgeschossen wurden, was uns in eine Höhle zwang.");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Da habe ich dann auch irgendwie, die Gruppe, vollkommen unabsichtlich natürlich versteht sich, verloren und sah beim hinaus laufen ein Männchen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Männchen könnte sehr nett ausgedrückt sein. Das wesen wiederholte seinen Namen andauernd, während es mit mir redete. Ich bezweifelte schon jemals wieder meine verloren gegangene Gehirnzellen wiederherzustellen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "doch dann aus heiterem Himmel, oder eben Fels.");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Frage es mich ob wir nicht spielen wollen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "In meiner förmlichen manier könnte ich natürlich niemals nein sagen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wohl eher deiner Spielsucht", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ihr nennt es Spielsucht, ich sage positive Einstellung zu spaßigen wagnissen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "nun denn, wo waren wir");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "genau");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Zu meiner verwunderung, hat es während dem Spiel total seine Persönlichkeit geändert");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Tatsache, es behersche urplötzlich wieder die normale sprache und die Rätsel waren auch nicht, all zu schlecht");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie könnte ich anders, als sie selber zu verwenden");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "zufrieden?");
                await Template.ƒS.Speech.tell(Template.characters.stella, "nein warte, was ist mit dem Männchen danach passiert?");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich musste es umbringen, es kam auf die wahnwitzige Idee mich zu fressen als Bezahlung für das Spiel");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ou das ist...");
                await Template.ƒS.Speech.tell(Template.characters.stella, "kein sehr schönes Ende");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "So ist die Welt herzchen. Wir müssen das beste daraus machen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also dann meine lieben Herrschaften. Das war es dieses Mal wieder mit unserem kleinen Spielchen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber aber, seid nicht traurig. Ich komme wieder mit mehr Rätseln");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "....");
                await Template.ƒS.Speech.tell(Template.characters.stella, "....");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "....", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ähm bravo?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also bitte, ein wenig mehr begeisterung bitte");
                await Template.ƒS.Speech.tell(Template.characters.stella, "okay ähm");
                await Template.ƒS.Speech.tell(Template.characters.stella, "BRAVO, BRAVO Ich kann es kaum erwarten!");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay vielleicht, ein ticken weniger");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "danke für die tollen Rätsel, ich freue mich aufs nächste Mal?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "JA, so ist es perfekt");
                //Stella lachend anzeigen
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ich mag dich Alessa");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "...");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagte ja das es nicht so schwer ist wie du glaubst", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Du kurz nee andere sache noch.");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Du meintest du hättest nen Auftrag für mich");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh du hast recht, damit hat das alles ja angefangen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja ich muss die nächsten Tage eine längere Reise für einen Auftrag antreten und Reise in den Momentanen Zeiten ungern alleine");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Eigentlich wollte ich Elidibus fragen, dieser scheint aber noch auf der Jagd zu sein. Und sofern ihr wirklich Kämpfen könnt, wäre ich gewillt eure Dienste in Auftrag zu nehmen");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Meine Dienste gehören ganz euch Madam");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Sehr gut, so gefällt mir das, dann lass mich dich gerne auf einen Drink einladen, um dieses treffen zu feiern");
                //einspielen sound einschenken
                //anzeigen 2 Drinks
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So bitte die Damen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh nein mein Lieber, so kommst du mir nicht davon");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Du trinkst mit uns!");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "sehr gerne", true, "spieler");
                //einspielen sound einschenken
                //anzeigen 3 drinks
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Also dann");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Auf eine gute Reise");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "und neuen Freundschaften");
                //einspielen drink sounds
                //Bild anzeigen 3 Leere glässer
                //ENDE 1 AUF NEUE FREUNDSCHAFTEN!!!!!!!!!!!!!!!!!!!!!!!
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.alessa, "okay, vielleicht waren die Rätsel doch zu schwer");
        await Template.ƒS.Speech.tell(Template.characters.stella, "haben wir echt so schlecht abgeschnitten?");
        while (indicatorforRätselszene4.number == 1) {
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Ihr habt 50% der Rätsel gelöst. Was bei 2 Rätseln naja, nicht so schwer ist.");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber hey, 50% sind 50%");
            await Template.ƒS.Speech.tell(Template.characters.stella, "weißt du, es würde nett klingen wäre dein unterton nicht so Sarkastisch");
            await Template.ƒS.Speech.tell(Template.characters.stella, "aber nächstes Mal strenge ich mich mehr an!");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Das will ich hören!");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "und du? was ist deine Entschuldigung " + Template.dataForSave.nameBarkeeper);
            let hälfteDerRätselGelöstEnding = {
                iPickSchwer: "Waren schwer",
                iPicksorry: "Nächstes Mal!"
            };
            let hälfteDerRätselGelöstEndingAusrede = await Template.ƒS.Menu.getInput(hälfteDerRätselGelöstEnding, "choicesCSSClass");
            switch (hälfteDerRätselGelöstEndingAusrede) {
                case hälfteDerRätselGelöstEnding.iPickSchwer:
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Alessa, du tust so als wärem diese Rätsel Kinderleicht", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Naja, sie stammen aus einem Kinderbuch");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagtest du nicht sie stammen aus einer Höhle?", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "Wie einer Höhle?");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Nicht so wichtig. Also ja sie stammen aus einer Höhle, aber das Wesen in dieser Höhle, hat sie aus einem Kinderbuch");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "jetzt im ernst?", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja im ernst. Ich bin selber nur vor kurzem darauf gestoßen. Das Wesen liebt anscheinend die Geschichte Namens der Hobbit. Du solltest sie lesen, dann wirst du vielleicht auch besser im lösen meiner Rätsel");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "jetzt warte doch mal welches Wesen, könnt ihr mir bitte erklären worüber ihr redet?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa bekommt ihre Rätsel anscheinend aus Höhlen, welche noch anscheinender sie aus Kinderbücher bekommen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja das trifft es ziemlich gut. Wüsste nicht was man da noch hinzufügen müsste");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "eine Menge? wieso bekommst du überhaupt Rätsel aus Höhlen?");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "du etwa nicht?");
                    await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm NEIN");
                    await Template.ƒS.Speech.tell(Template.characters.alessa, "dann warst du einfach noch nicht in genug Höhlen");
                    while (Template.dataForSave.variableKristalhöhle == true) {
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Doch war ich, erst vor kurzem. Sie war sogar komplett aus Kristall!");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich hab sogar einen geheimen Weg gefunden");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Und trotzdem waren da keinerlei Rätsel");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie würdest du die Kristalle denn sonst bezeichnen?");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "eine andere Art von Tür");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube der Punkt geht an Alessa");
                        break;
                    }
                    while (Template.dataForSave.variableKristalhöhle == false) {
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay ja vielleicht");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "AAAAAAber das heißt nur, das ich jetzt weiß was ich als nächstes machen muss!");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie siehts aus " + Template.dataForSave.nameBarkeeper + "hast du reinzufällig eine Höhle für mich parat?");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Tatsächlich ja, ich kenne da eine Kristalhöhle", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "Perfekt, dann werde ich morgen dorthin aufbrechen");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, " da hab ich ja echt was losgetreten");
                        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nein nein, das ist normal", true, "spieler");
                        await Template.ƒS.Speech.tell(Template.characters.stella, "HALLOOOO, ich bin noch da!");
                        //Lachen Sound einfügen
                        break;
                    }
                    break;
                case hälfteDerRätselGelöstEnding.iPicksorry:
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "keine sorge beim nächsten Mal löse ich sie!", true, "spieler");
                    while (Template.dataForSave.variableRätselsceneAlessa1 == true) {
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Das sagtest du beim letzten Mal auch schon. Aber glück gehabt, diese eine richtige Antwort hat dich vorm verlieren bewahrt");
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "eventuell beim dritten Mal dann");
                        break;
                    }
                    while (Template.dataForSave.variableRätselsceneAlessa1 == false) {
                        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich freue mich darauf und nehme dich beim Wort");
                        break;
                    }
                    break;
            }
            break;
        }
        while (indicatorforRätselszene4.number == 0) {
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Sagen wir, ihr habt euch angestrengt.");
            await Template.ƒS.Speech.tell(Template.characters.alessa, "Dabei sein ist ja sowieso das wichtigste");
            while (Template.dataForSave.variableRätselsceneAlessa1 == true) {
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Obwohl ich entsinne mich da an etwas.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh nein", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh doch");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Da ich sehr gnädig bin, werde ich es nicht euer Blut sein lassen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Stattdessen, lasst mich überlegen");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ja da sklingt fair");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich denke eure teuerste Flasche Rum sollte angemessen sein");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, wegen euch darf ich noch meien Bar schließen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "aber aber mein lieber, doch nicht wegen einer Flasche");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ihr habt wahrlich keine Ahnung was dieser Rum kostet", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "vermutlich");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Aber wenn ich schon anfange dann richtig.");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das ist nicht wirklich euer erster Rum, bitte tut mir das nicht an", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was ist mit euch Stella, habt ihr wenigstens schon Mal davor Rum getrunken?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ist die Frage jtzt ernst gemeint");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "oh ihr Götter was habe ich euch nur getan", true, "spieler");
                break;
            }
            break;
        }
        await Template.ƒS.Speech.tell(Template.characters.stella, "So ich begebe mich dann Mal zur Nachtruhe, Es hat mich gefreut dich kennen zu lernen.");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Morgen were ich mich dann wohl auf Wanderschaft begeben, aber ich würde mich freuen dich wieder zu sehen");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dem kann ich nur zustimmen. Auf das sich unsere Wege erneut Kreuzen");
        //beide ausblenden
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "So kam es dann auch. Alessa und Stella besuchten regelmäßig meine Bar und wurden zu den besten Kunden die ich jemals hatte.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Auch der Mürrische Namenlose Krieger kam ab und an vorbei um sein Geld in Alkohol zu ertränken.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wobei ich mich an eine Nacht erinnere, in der er volltrunken eine Melodie vor sich hinsummte und mir erzählte wie ihn diese verfolgt");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "In den folgenden kam es leider zu keiner solchen begebenheit mehr");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich wüsste zu gern was es damit auf sich hat");
        //The End 2 "All as it should be"
    }
    Template.fourthStellawithAlessa = fourthStellawithAlessa;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondAlessa() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Alessa starting");
        console.log("second Scene Alessa starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.alessaButWithoutName, Template.characters.alessaButWithoutName.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
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
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Welcher nur den Nächsten Auftrag im Kopf hatte");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "woher", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ich denke es gibt keine bessere Beschreibung von Elidibus als „Netter Zeitgenosse“.");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Also wie hat der Auftrag gelautet?");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach nichts allzu Spannendes, er ging auf die Jagd nach einem Werwolf", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "und ihr sagt mein Leben wäre spannend");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Er sah mir aus wie ein fähiger Kämpfer, er wird das schon schaffen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist ja auch nicht so, als hätte er mir eine Wahl gegeben.", true, "spieler");
                Template.ƒS.Speech.setTickerDelays(150);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "...wie ging es ihm");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wir hatten nicht wirklich lange ein Gespräch, aber ich würde", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie bitte?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wir Spielen!");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt, es");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ist bei Ihnen alles Okay? Wenn ich etwaaa", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "WIR");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "SPIELEN");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Atemlos lebt es, Kalt wie der Tod schwebt es. Kennt keinen Durst -Dennoch trinkt es. Trägt ein Kettenhemd, doch nie klingt es");
                let sceneZweiRätsel1 = {
                    iPickFisch: "Fisch",
                    iPickNinja: "Ninja",
                    iPickGeist: "Geist"
                };
                let scene2rätsel1Entscheidung = await Template.ƒS.Menu.getInput(sceneZweiRätsel1, "choicesCSSClass");
                switch (scene2rätsel1Entscheidung) {
                    case sceneZweiRätsel1.iPickFisch:
                        break;
                    case sceneZweiRätsel1.iPickGeist:
                        break;
                    case sceneZweiRätsel1.iPickNinja:
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Man kann es nicht sehen, kann´s nicht aufstöbern, kann es nicht fressen und kann´s auch nicht hören. Es liegt hinter den Sternen und unterm Gestein, Rieselt in alle Höhlen hinein, Komm zuerst und folgt auch zuletzt, Löscht alles Leben, bis keiner mehr schwätzt.");
                let sceneZweiRätsel2 = {
                    iPickDunkelheit: "Dunkelheit",
                    iPickZeit: "Zeit",
                    iPickLicht: "Licht"
                };
                let scene2rätsel2Entscheidung = await Template.ƒS.Menu.getInput(sceneZweiRätsel2, "choicesCSSClass");
                switch (scene2rätsel2Entscheidung) {
                    case sceneZweiRätsel2.iPickDunkelheit:
                        break;
                    case sceneZweiRätsel2.iPickZeit:
                        break;
                    case sceneZweiRätsel2.iPickLicht:
                        break;
                }
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Kennt keine Gnade und");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Es ist okay,wir müssen nicht darüber reden, aber bitte, keine Rätsel mehr", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wann kommt er wieder?");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "in einer Woche", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "danke");
                break;
            case erzählenüberStellaElidius.iPickStella:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Erinnert ihr euch an das aufgewekte Mädchen, von dem ich euch erzählte?");
                Template.ƒS.Speech.setTickerDelays(100);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "öhm.......Stella richtig?");
                Template.ƒS.Speech.setTickerDelays(30);
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja genau! Aufjedenfall sie war wieder hier, brachte mir sogar en kleines Souvenir von ihren Reisen mit.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ein Souvvenir sogar, sie scheint dich sehr zu mögen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube Stella mag jeden");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So jeden also");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "glauben sie mir etwa nicht?", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "sagen wir einfach, ich hab da meine Erfahrungen");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Die können ja nicht sehr gut sein, immerhin mag ich dich schon mal", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Damit bist du vermutlich allein");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Glaub ich kaum, ich glaube viel mehr, das du dich bisher in den falschen kreisen herumgetrieben hast", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ist dem so");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ganz sicher sogar und ich denke ich kann es dir sogar beweisen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "falls du dich traust, soweit aus deiner Komfortzone zu gehen", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Doktor ohne Name, was ist", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "bist du denn Mutig genug dafür", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Dachte nicht das du dass in dir hast.");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "aber wie könnte ich so einer Herausforderung wiederstehen.");
                await Template.ƒS.update(5);
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "gut gemacht Barkeeer, dann lass uns spielen");
                await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Ich Alessa le Allier nehme deine Herausforderung an");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa, ich hätte nie Gedacht das du einen so herrlichen Namen hast", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "oder das du dich so leicht umstimmen lässt.", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "aber aber, noch sahst du mich nicht ohne Maske");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Und glaub mir, mein Name ist nicht das einzig schöne an mir");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "das Geheimniss werde ich auch noch lüften", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alessa", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aber zu erst noch unsere kleine Herausforderung", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kommmt in 3 Tagen wieder", true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "Um eine neue Freundin von dir zu treffen nehme ich an");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wer weiß das schon", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Übrigens der fairness halber" + " " + Template.dataForSave.nameBarkeeper, true, "spieler");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "auch euer Name hat einen sehr schönen Klang.");
                await Template.ƒS.Speech.tell(Template.characters.alessa, "bis in 3 Tagen dann");
                break;
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
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli");
        //Elidibus erschrocken zeigen
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du hier");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Verwundert dich das etwa");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Red dir das nur weiter ein");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Also");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "wie ist es dir ergangen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Hab ich mitbekommen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und dir so?");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Arbeitsreich. Viele Kunden halt");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "verstehe");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "kamst du denn viel rum?");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Alessa was soll das.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was soll was");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fräst mich diese belangenlosen sachen.");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli bitte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Elidibus bitte, lass uns reden");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "lebwohl Alessa");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Alles okay", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Oh du bist ja noch da");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja ist ja auch meine Bar", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Trotzdem das Gespräch war ja wohl mehr als Privat.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie wärs wenn du den Wütenden teil überspringen und du mir beantwortest ob du darüber reden willst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich weiß nicht, würde es denn etwas bringen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das kommt auf dich an", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "dann lass es uns versuchen");
        //Meter einbauen und ab dann frage runde die das Meter erhöhen oder Seknken, falls Meter Max == geschaft Good falls Bad == bad ending for this branche
    }
    Template.secondElidibus = secondElidibus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondEllidibusDestiny() {
        console.log("FudgeStory secondEllidibusDestiny Scene starting");
        console.log("FudgeStory Destiny Scene Elidibus starting");
        console.log("second Scene Elidibus starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.elidibus, Template.characters.elidibus.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli");
        //Elidibus erschrocken zeigen
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.alessa, Template.characters.alessa.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du hier");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Verwundert dich das etwa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Red dir das nur weiter ein");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Also");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "wie ist es dir ergangen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hab ich mitbekommen");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "und dir so?");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Arbeitsreich. Viele Kunden halt");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "verstehe");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "kamst du denn viel rum?");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Alessa was soll das.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was soll was");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fräst mich diese belangenlosen sachen.");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will");
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Eli bitte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Okay Elidibus bitte, lass uns reden");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "lebwohl Alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie ich sehe immer noch das gleiche Kind");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Sag mal hörst du eigentlich immer noch diese Melodie, oder hat sie dich in deiner Gier nach Blut auch velassen");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wag es nicht so mit mir zu sprechen");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Oder was");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Treib es nicht zu weit Alessa");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "der alte Krieger ist also immer noch da und ich dachte das er in dem ganzen Alkohol erstickt wäre");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Hört dieser gleiche Krieger denn auch immer noch die Melodie");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich wüsste nicht was dich das angeht.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Schade und ich hab mich so darauf gefreut frohe kunde an Stella entrichten zu können");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wer soll das sein");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Wie ein weiser Mann einst sagte");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich wüsste nicht was dich das angeht");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Kannst du endlich mit diesen Spielchen aufhören");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "3 JAHRE");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "3 Jahre lang hast du mich ignoriert und dein ebstes gegeben mir aus dem Weg zu gehen und mir nichts dir nichts");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Kommst du hier angetanzt und raubst mich jeden nerve den ich noch habe wegen einer Dummen Geschichte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich flehe dich an, bitte lass endlich das Stück was du von mir übrig gelassen hast in frieden. ");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "dann beantworte mir endlich meine frage!");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Wieso, was ist so wichtig daran");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Es ist nun mal wichtig für mich.");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Zeig mir wenigstens das noch ein Funke von dem Mann vorhanden ist den ich einst liebte");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ja ich höre es, jeden Tag wenn ich aufwache und jede Nacht wenn ich schlafen gehe. Ich höre die immer gleiche Melodie rufend aus der Ferne.");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "ich höre ihre wunderschönen klänge genau so klar wie an dem ersten Tag als ich sie vernahm.");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Zufrieden?");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Erinnerst du dich an unser versprechen");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Natürlich aber was hat das jetzt damit zu tun");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Götter Alessa komm zu deiner begiere");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Dann erzähl es mir");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Alessa du hast deine Antwort lass mich nun endlich infrieden");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Elidibus, bitte");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Erzähl mir von unserem versprechen!");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Haaah, okay okay aber dann gehst du");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Egal was kommen mag, egal wie viel Sterne erloschen sind und egal wie sehr diese Welt dem Wahnsinn verfallen ist");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Ich werde niemals aufhören den Weg zu folgen den mein Herz mir geebnet hat");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Und oh so sollte ich eines Tages auf des anderen Geheimnis stoßen so werde ich");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "so werde ich egal was auch sein mag");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "diesen aufsuchen.");
        await Template.ƒS.Speech.tell(Template.characters.elidibus, "Alessa sag mir nicht das");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "Ich fand es Elidibus. Obwohl eigentlich");
        await Template.ƒS.Speech.tell(Template.characters.alessa, "fand Stella mich");
        //In nem Buch müsste ich hier zu der nächsten Szene cutten weil Dramaturgie und so
    }
    Template.secondEllidibusDestiny = secondEllidibusDestiny;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function thirdStella() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Willkommen zurück Lichterfee", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie war das Fest?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war unglaublich, überall diese schier unendlichen Lichter, in sovielen Farben und das ganze Essen");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ein Fest für die Götter");
        await Template.ƒS.Speech.tell(Template.characters.stella, "So sagen sie zumindest");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Was meinst du mit so sagen sie zumindest?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ehrlich gesagt, war ich gar nicht solange da");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "darf ich fragen wieso?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Darfst du nicht, sagen wir einfach, ich bin vom Schicksal verflucht");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Tut mir leid" + Template.dataForSave.nameBarkeeper + "heute werden wir kein langes Gespräch führen");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich wollte nur vorbei kommen, um mich für den Tipp zu bedanken. Ich denke in ein paar Tagen komm ich wieder, ich muss nur noch etwas davor in Ordnung bringen");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Bis zum nächsten Mal");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Bis zum nächsten Mal", true, "spieler");
        //Stella verlässt Bar animation
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "kleine Abenteurerin", true, "spieler");
    }
    Template.thirdStella = thirdStella;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaEinsamerberg() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene second Stella Einsamerberg starting");
        console.log("second Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.stella, "Hey Hey, ein Zwergenfeuer bittte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie ich sehe, auf den Geschmack gekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "deine Reise war also Erfolgreich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "JA, es war unglaublich, sowas habe ich noch nie gesehen!");
        await Template.ƒS.Speech.tell(Template.characters.stella, "So du musst dir vorstellen, Ein ganzer Berg voller Gold und die Zwerge, sind einfach sooo lustig.");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Auch wenn ich eventuell jemanden ausversehen beleidgt habe");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie meinst du Beleidigt?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Naja also er wollte halt ein Wetttrinken, also habe ich ja gesagt.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sag mir nicht du hast ihm auf die Füße gekotzt.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Iuh natürlich nicht, wir haben also angefangen zu Trinken und nach ungefähr 35 Zwergenfeuer, fiel er einfach um");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich glaube er war einfach Müde, aber er wollte dann einfach auch nicht mehr mit mir Reden");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naja du hast halt seine Ehre beleidigt, auch wenn ich sagen muss das.......", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, ".....", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "WAS MEINST DU MIT  35", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "35 Zwergenfeuer halt, hab ich doch schon gesagt, wieso machst du daraus denn so nee große Sache");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella, bitte erinnere mich daran, NIEMALS gegen dich ein Wetttrinken zu bestreiten", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Alsoooooooo");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Alsoooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja was ist?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wohin als nächstes?");
        //lachen einspielen
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du bist doch grade erst wiedergekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber aber");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Okay ich will mal nicht so sein, ich hab da tatsächlich was", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl Erzähl ");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Immer mit der Ruhe, du stirbst mir ja noch an nem Herzinfakt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Köngireich, finden ein Sternenfest in 3 Tagen statt.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Was ist denn ein Sternefest");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das wirst du schon selber herausfinden müssen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Achja und Stella", true, "spieler");
        let erinnernAnGeld = {
            iPickGuteReise: "Gute Reise Wünschen",
            iPickErinnernAnGeld: "Ans Bezahlen Erinnern"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(erinnernAnGeld, "choicesCSSClass");
        switch (dialogueElement) {
            case erinnernAnGeld.iPickGuteReise:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ach nichts, Gute Reise und Probier unbedingt die Pasteten");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Werde ich machen, wir sehen uns dann in ein paar Tagen");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Und danke");
                break;
            case erinnernAnGeld.iPickErinnernAnGeld:
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Dieses Mal bezahlst du bitte für dein Bier");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Oh Götter Ja ntürlich, Tut mir furchtbar leid");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Keine Sorge, ich wollte dich Sommerstum nur daran erinnern");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella legt die 2 Gold Stücke auf den Tisch");
                await Template.ƒS.Speech.tell(Template.characters.stella, "Der Rest ist als dank für den guten Tipp");
                break;
        }
    }
    Template.secondStellaEinsamerberg = secondStellaEinsamerberg;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaKristalhöhle() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory second Scene Stella Kristalhöhle starting");
        console.log("second Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie war die Höhle so? Funkelnd genug", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "könnte man sagen ja");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Es war aufjedenfall einen besuch Wert.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das freut mich doch zu hören, heißt ich habe meinen fehler von letztem mal wieder gut gemacht?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ausnahmsweise ja, aber nur ganz ausnahmsweise.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich fühle mich geehrt danke", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay spaß beiseite, es war unfassbar beindruckend.");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wie der Mond auf den unterirdischen See leuchtete, das Wesen das dort herumflog und das Wasser bei seinen berührungen zum Glitzern brachte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella wovon redest du grade?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "naa von dem See am ende der höhle");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "du warst aber schon in der Höhle von der Karte oder?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja wo denn sonst?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella, dort gibt es keinen See, auf den der Modnscheinen kann", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "doch natürlich, du kennst doch bestimmt die große halle am ende oder?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja, ich glaube ich weiß welche du meinst.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Die mit den Farbigen Kristalen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Aaaaaah ja klar, die kenne ich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja aber dann weißt du ja auch, das dass ganze ein Rätsel ist um den gag dahinter zu öffnen");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "MOMENTAL WAS", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie das ist ein Rätsel, woher weißt du das?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ach wir hatten was ganz ähnliches daheim");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "woher kommst du noch gleich?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm aus Elysee, du weißt schon das");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das verwunsche Königreich aus den alten Gesichten, ja klar kenne ich das. Aber das gibt es doch nur in Märchen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Dafür war meine Kindheit aber ziemlich real");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Warte mal kurz nen Moment, du erzählst mir grade allern ernstes, das du aus DEM ELYSEE kommst und sagst das so als wäre es das normalste der Welt?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Und du tust so als wäre es, irgendwas total abgefahrenes, du kommst ja auch aus dieser Welt");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ja aber das hier ist ja auch die normale Welt", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sagt wer?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "zugegeben, bisher war ich nur in meinem beheimaten Königreich und Elysee, aber ich versichere dir, es gibt definitiv mehr als nur deine Welt");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wow, einfach nur wow. Das ist wow", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Kannst du, Kannst du es mir zeigen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also was das betrifft.");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Das könnte sich als schwer erweisen, weißt du, ehrlich gesagt");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ist es mir nicht mehr möglich zurückzukehren");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh das tut mir leid.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh nein nein, das muss es nicht. Ich ging freiwillig, zu dem eure Welt ist sowieso viel Aufregender und vor allem Lebendiger");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bin gerne hier");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Schön das dir unsere Welt sogut gefällt, aber jetzt verstehe ich wenigstens auch, warum du auf alles so Naive reagierst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Paaah ich und naive? Niemals!");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Natürlich nicht, mein fehler", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ganz genau");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also, jetzt weißt du was über mich, was bekomme ich dafür?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sooooo, daher weht also der Wind, was schwebt dir denn vor, für diese außerordentlich Interessante Information", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, " Noch mal so eine Karte wäre doch recht Interessant, meinst du nicht?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Noch so eine habe ich leider nicht, aber wie wäre es mit einem Sternenfest, stattdessen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "klingt angebracht, wo finde ich denn besagtes Sternenfest");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Königreich, Munkelt man", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Munkelt man?");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Eine Redewendung, ich wollte nur lustig sein...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Wie dem auch sei, im Benachbarten Königreich findet es statt, aber du solltes tdich beeilen, es ist nämlich schon in 3 Tagen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh so bald schon, okay dann ähm ich muss los");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Danke dir für das Gespräch, ich komme wieder");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Das ist alles was ich hören wollte, Gute Reise dir", true, "spieler");
        Template.dataForSave.variableKristalhöhle = true;
    }
    Template.secondStellaKristalhöhle = secondStellaKristalhöhle;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondStellaMeer() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template  second Scene Stella Meer starting");
        console.log("second Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Oh du bist wirklich zurückgekommen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Sagte ich doch");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "...");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "...", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Jetzt spann mich schon nicht so auf die Folter", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich und auf die Folterspannen");
        await Template.ƒS.Speech.tell(Template.characters.stella, "niemals");
        await Template.ƒS.Speech.tell(Template.characters.stella, "aber joa, es war ganz nett ");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ou", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "gut vielleicht war ganz nett, auch ein wenig Untertrieben");
        await Template.ƒS.Speech.tell(Template.characters.stella, "eventuell");
        await Template.ƒS.Speech.tell(Template.characters.stella, "also wirklich nur ganz eventuell");
        await Template.ƒS.Speech.tell(Template.characters.stella, " war es");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ABSOLUT UNGLAUBLICH");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Deine BEschreibung, des Sonnenaufgangs, 1 zu 1 Perfekt");
        await Template.ƒS.Speech.tell(Template.characters.stella, "„ Und das Rauschen des Meers und einfach dieser ganze Anblick ich weiß gar nicht wo ich anfangen soll");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Stella immer mit der Ruhe, ich lauf dir schon nicht weg", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ja aber, wo fange ich nur an");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Oh NATÜRLICH");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Also ich bin auf so eine Insel herausgefahren und dort traf ich 2 Jungs, einer von ihnen hieß So…So….Sora genau. Auf jeden Fall hat der mir total viel von seinen Abenteuern erzählt, er war einfach im reich der Dunkelheit kannst du das glauben");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aber auch im reich des lichtes und dem der Träume und dem des Nichts und dem von Chicago und irgendwelche anderen Welten. Ein paar davon waren auch Unterwasser, andere wieder nicht und irgendwas war da doch mit Häusern, die auf ihn geschmissen wurden und.");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Okay eventuell, bekomme ich es nicht mehr ganz zusammen");
        await Template.ƒS.Speech.tell(Template.characters.stella, "ist aber auch egal");
        await Template.ƒS.Speech.tell(Template.characters.stella, "DEEEEEEENNNN"),
            //Bild Papaufrucht einblenden
            await Template.ƒS.Speech.tell(Template.characters.stella, "Ich bekam die von diesem Jungen und auch wenn ich nach was anderem gesucht habe, wollte ich ein wenig Strand zu einem Griesgrämigen Barkeeper bringen, der nicht mehr den Ruf der Welt hört.");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Danke dir Stella, eventuell sage ich dir sogar eines Tages, was es mit dieser Frucht auf sich hat", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Wie die Frucht hat ein Geheimnis, komm schon, spann mich jetzt nicht auf die Folter");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Naa ich muss doch sicher gehen, das du wiederkommst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "vor allem hast du ja auch ein Geheimniss vor mir, raus mit der Sprache, du gingst ja nicht nur zum Meer, damit du mir ein Souvenier mitbringen kannst", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ertappt, Naja");
        await Template.ƒS.Speech.tell(Template.characters.stella, "du sagtest man wird irgendwann sesshaft, ich will das nicht glauben. Vielleicht kannst oder willst du nicht mehr an all die Wunderbaren Orte aufmachen. Doch ich werde es. Bis. Bis zu meinem letzten Atemzug. Ich muss einfach");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Und eventuell bringe ich dir ab und an was mit, um dich daran zu Erinnern");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube du hast recht. Wenn du jemals durch die zeit reist, erzähl das doch meinem Jungen ich", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "wird gemacht");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Weißt du denn schon, wohin es als nächstes gehen soll?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "noch nicht so ganz");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "was sagst du dann zu einem Sternenfest?");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ich würde sagen wo");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Im benachbarten Königreich wirst du es finden und komm danach doch gerne wieder und erzähl einem Griesgrämigen Barkeeper wie du es fandest");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Stella Zwinkert dir zu und verlässt die Bar");
    }
    Template.secondStellaMeer = secondStellaMeer;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map