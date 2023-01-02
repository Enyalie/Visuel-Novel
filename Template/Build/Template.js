"use strict";
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
                normal: ""
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
        }
    };
    //*data will be safed (game progress)*//
    Template.dataForSave = {
        nameBarkeeper: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(ingameMenubuttosn, buttonFunctionalities, "gameMenuCSSClass");
        // ****SCENE HIERACHY!!!!!!!
        let scenes = [
            { scene: Template.firstAlessa, name: "Meeting Alessa" }
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
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ein Mann betritt die Bar und läut Zielstrebig zur Theke, hinter ihm bildet sich eine Spur aus schwarzten Blut");
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
        await Template.ƒS.Speech.tell(Template.characters.elidibusButWithoutName, "Wir sehen uns in 3 Tagen");
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
        await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm, es tut mir dennoch unfassbar leid. Stella übrigens. Wie heißt du?");
        //Pose pease einspielen und wieder zurück zu Pose normal
        Template.dataForSave.nameBarkeeper = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sehr erfreut,Ich bin" + " " + Template.dataForSave.nameBarkeeper + "" + "der Barkeeper  dieses kleinen Ambientes", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Also Stella, sagen sie mir, darf ich ihnen etwas zum trinken anbieten?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "„Hmmmmmmm, trinken hmmm, sie haben so viel auf ihrer Karte, was soll ich nur. Okay Okay wie wärs. ");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Aaaaaaah ich habs");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Überraschen sie mich");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun aber langsam, ich kenne sie doch kaum, wie soll ich ihnen da etwas Empfehlen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Nun denn, sie sind bestimmt durstig, also sollte mir einen Hinweis reichen.", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Sagen sie mir bitte ihre Lieblingsblume", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.stella, "Öhm meine lieblingsblume hmmmm. Ich denke die Kirschblüte");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Die Schönheits des Lebens in seiner Zerbrechlichkeit also hmm", true, "spieler");
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
                await Template.ƒS.Speech.tell(Template.characters.stella, "Ähm doch doch sorry, es ist nur was ist das?");
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
                await Template.ƒS.Speech.tell(Template.characters.stella, "Uuuuuh schmeckt das süß und diese Farbe, einfach wie ein Sonnenuntergang");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "eigentlich soll es einen Sonnenaufgang Symbolisieren", true, "spieler");
                await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "jedes Mal, wenn ich diesen Cocktail mache, denke ich an meinen letzten Strandurlaub zurück und erinnere mich ", true, "spieler");
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
                await Template.ƒS.Speech.tell(Template.characters.stella, ".... ........ .....  ...... daher also der Naem");
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
        await Template.ƒS.Character.show(Template.characters.alessaButWithoutName, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
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
        let dialog1 = {
            iPickYes: "Okay, lass uns Spielen"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog1, "choicesCSSClass");
        switch (dialogueElement) {
            //Path Yes for Game
            case dialog1.iPickYes:
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
                    break;
                }
                while (indicatorforRätsel.number == 0) {
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ch kommen sie, wirklich 0");
                    //lachen Einspielen barkeeper
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Entschuldigen sie bitte. Nächstes Mal werde ich sie nicht enttäuschen", true, "spieler");
                    await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "So nächstes Mal also, ich zähle darauf.  Aber was, wenn doch?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "ch versichere ihnen, es wird kein, wenn doch geben. Und falls doch, dann dürfen sie sich von mir eine Flasche ihrer Wahl wünschen", true, "spieler");
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
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Eine Kundin, die vor kurzem hier war. Sie ist sehr interessiert an so ziemlich allem. Ja das ist eine sehr gute Beschreibung", true, "spieler");
        //Ja das ist eine sehr gute Beschreibung
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich glaube sie würden sie mögen", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Vielleicht, vielleicht auch nicht, vielleicht treffe ich diese Stella ja eines Tages");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Glauben sie mir, falls sie sich begegnen, werden sie Sie erkennen. Zumindest kann ich mir nicht vorstellen, dass Stella nicht total ausflippt, wenn sie so eine Stilbewuste Ikone sieht", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "ie Charmeur. Bleiben sie am Leben, es wäre tragisch würde ich bei meinem nächsten Besuch jemand anderes vorfinden");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "Ich werde mein Bestes geben. Bis zum nächsten Mal…", true, "spieler");
        await Template.ƒS.Speech.tell(Template.dataForSave.nameBarkeeper, "wie war noch gleich ihr Name?", true, "spieler");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "Nächstes mal");
        await Template.ƒS.Speech.tell(Template.characters.alessaButWithoutName, "....vielleicht");
        //Allesa legt das Geld für den Whiksy auf den Tisch und geht
    }
    Template.firstAlessa = firstAlessa;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map