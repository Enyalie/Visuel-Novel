namespace Template {
  export async function secondElidibus(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    console.log("FudgeStory second Elidibus starting");

    console.log("second Scene Elidibus starting");

    await ƒS.Location.show(locations.tavernSunset);
    await ƒS.update(2);
        await ƒS.Character.show(characters.elidibus, characters.elidibus.pose.normal, ƒS.positionPercent(200, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, enterToMiddle());
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und war sie vielversprechend?", true, "spieler");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Sie war genug um Ämusant zu sein", true, "Elidibus");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dann tut es mir sehr leid das ich nichts besseres liefern konnte", true, "spieler");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Muss es nicht, die Bezahlung war gut genug", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Dann wirst du mir ja bestimmt einen Drink ausgeben können oder Eli",true, "alessa");
    ƒS.Sound.play(sound.footstep, 0.8);
    await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, middleToLeft());
    await ƒS.update(1);
    await ƒS.Character.show(characters.alessa, characters.alessa.pose.normal, ƒS.positionPercent(200, 100));
    await ƒS.update();
    await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, enterToRight());
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du hier", true, "Elidibus");
    ƒS.Sound.play(sound.alessa, 0.8,true);
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Verwundert dich das etwa",true, "alessa");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "wie es scheint, kannst du selbst selbst mit all deinen Mühen mir wohl nicht aus dem Weg gehen",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du denkst zu groß von dir, ich ging dir keineswegs aus dem Weg", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Red dir das nur weiter ein",true, "alessa");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Also",true, "alessa");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "wie ist es dir ergangen",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Arbeitsreich. Ich war grade erst zu einer Werwolfsjagd auf", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Hab ich mitbekommen",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "und dir so?", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "Arbeitsreich. Viele Kunden halt",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "verstehe", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessaButWithoutName, "kamst du denn viel rum?",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Alessa was soll das.", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Was soll was",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Du weißt genau was ich meine, Sitzt dich einfach zu mir, fräst mich diese belangenlosen sachen.", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "Götter was willst du? Geld, eine Eskorte? Wieso suchst du mich auf"), true, "Elidibus";
    await ƒS.Speech.tell(characters.alessa, "Was wenn ich einfach nur mit einem alten Freund reden will",true, "alessa");
    await ƒS.Speech.tell(characters.elidibusButWithoutName, "So siehst du das also. Dann habe ich dir nichts zu sagen", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Eli bitte",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Nenn mich nicht so, du hast kein recht mehr dazu", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Okay Elidibus bitte, lass uns reden",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Wieso sollte ich, du hast deine Wahl doch getroffen und wie ich sehe fiel dir das nicht besonders schwer", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "Leb wohl Alessa", true, "Elidibus");
    ƒS.Sound.play(sound.footstep, 0.8);
    await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, leftToLLeaveSlow());
    ƒS.update();
        ƒS.Character.hide(characters.elidibus);
        ƒS.update();
    await ƒS.Speech.tell(characters.alessa, "...",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Leb wohl",true, "alessa");
    await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, rightToMiddle());
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alles okay", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Oh du bist ja noch da",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja ist ja auch meine Bar", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Trotzdem das Gespräch war ja wohl mehr als Privat.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie wärs wenn du den Wütenden teil überspringen und du mir beantwortest ob du darüber reden willst", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Ich weiß nicht, würde es denn etwas bringen",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das kommt auf dich an", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "dann lass es uns versuchen",true, "alessa");
    dataForSave.meterBarAlessa = true;
    
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Gut, dann die leichteste Frage zu erst, wer war er genau?", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Mein Ex Verlobter.",true, "alessa");
    document.getElementById("alessaMeter").style.visibility = "inherit";
    document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
    document.getElementById("scoreForAlessa").style.display = "none";
    document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = false);

    let retteAlessaOne = {
      iPickerWie: "Wie hat es geendet",
      iPickOk: "Alles okay?",
      iPickJoke: "Er sah gut aus",

    };

    let werIstAlessaOne = await ƒS.Menu.getInput(retteAlessaOne, "choicesAlessa");

    switch (werIstAlessaOne) {
      case retteAlessaOne.iPickerWie:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ou, wie ist es zwischen euch zu enden gegangen?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Wir waren zusammen auf einem Auftrag und hatten eine Meinungsverschiedenheit zu einem Thema",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Damals habe ich zum ersten Mal gemerkt, das etwas nicht gestimmt hat.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Es hätte gereicht die Banditen auszuschalten. Aber irgendwas hatten sie gesagt, irgendwas das ich nicht gehört habe. An diesem Abend habe ich ihn nicht wiedererkannt.",true, "alessa");
        dataForSave.alessaScore += 20;
        break;
      case retteAlessaOne.iPickOk:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das gerade schien sehr heftig. Bist du okay?", true, "spieler")
        await ƒS.Speech.tell(characters.alessa, "Offensichtlich nicht, aber verglichen zu vor einem Jahr, komme ich damit besser zurecht.",true, "alessa");
        dataForSave.alessaScore += 10;
        break;
      case retteAlessaOne.iPickJoke:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich muss gestehen, schade das er bereits ging. Er sah ziemlich gut aus", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ich dachte du wolltest mir helfen",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh das tue ich, aber wie bist du bitte mit so einem schnling zusammen gekommen.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Bitte, der und ein schönling. Ich musste die hälfte seines Körpers bereits nach Kämpfen verarzten. Ich sah besseres.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach echt, wen denn so?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Berufsgeheimniss. Ich bin Arzt schon vergessen.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dan eurer Modischen tracht niemals.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Wie gut, an die wichtigen dinge erinnert ihr euch",true, "alessa");
        dataForSave.alessaScore += 30;
        break;
    }
    let retteAlessaTwo = {
      iPickerWer: "Wer genau war er",
      iPickEli: "Süßer Spitzname",
      iPickMürrisch: "Wie hast du es mit ihm ausgehalten",

    };

    let werIstAlessaTwo = await ƒS.Menu.getInput(retteAlessaTwo, "choicesAlessa");
    switch (werIstAlessaTwo) {
      case retteAlessaTwo.iPickerWer:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wer genau war er und ich weiß dein Ex Verlobter, aber Mal im erst. WER war er?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Es wundert mich immer wieder, das man ihn in diesen Ländern nicht kennt.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Sein Name ist Elidibus, oberster der Ritter des Lichts, oder viel mehr ehemaligen Rittern des Lichts.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Von da wo wir herkommen ist er ein Held.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Von wo kommt ihr denn her?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Aus dem Königreich, Weit Weit Weg. Also im ernst, es heißt so Dummer Name wenn du mich fragst.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Hah und was ist mit euch, wie seid ihr an so einen Helden gekommen", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Naja, wir waren Arbeitskollegen und dann kam eins zum anderen.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach was, dann wart ihr seine private Hausärztin", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Bitte, dieser Geizhals. Nein ich war Teil seiner Truppe",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Damals war ich och als Alessa die Klinge bekannt",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ihr seid wahrlich beindruckend. Wieso seid ihr gegangen was ist passiert?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Habt ihr je von dem Königreich gehört?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ehrlich gesagt nicht.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Damit habt ihr eure Antwort.",true, "alessa");
        dataForSave.alessaScore += 10;
        break;
      case retteAlessaTwo.iPickEli:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also ich muss schon sagen, Eli ist ja schon ein süßer Spitzname, für solch einen Mann", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ihr hättet Mal sehen sollen, wie peinlich er ihm früher war",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Tzz",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Eigentlich hat der ganze Spitzname damit angefangen, das er mir blöd gekommen ist und sagen wollte was ich zu tun und lassen habe",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Was er konnte, aber deswegen habe ich das noch lange nicht mitzumachen. Also hab ich mich gerecht.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Irgendwann wurde es allerdigns normal ihn so zu nennen. Es hat besser zu ihm gepasst, ihn Menschlicher gemacht",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Schade das er diese wieder verloren hat.",true, "alessa");
        dataForSave.alessaScore += 30;
        break;
      case retteAlessaTwo.iPickMürrisch:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "War der eigentlich schon immer so Mürrisch, oder wurde er erst so?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Oh nein, nein, nein er war schon immer ein Alpha arschloch",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alpha Arschloch?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Naja ein Mann mit einem gröeren beschützer und reier Instinkt als sonst wer. Der die Arme jungfer in Not retten muss und es gemeister hat auf 50 verschieden Arten zu grummeln oder schnauben.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und mit so jemanden wart ihr zusammen?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Glaubt mir, bis heute ist das schwer zu glauben. Aber Eli hat eigentlich eine guten Kern, hinter dieser Machofasade. Oder zumindest hatte er diesen, er wirkt sehr verloren.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Woran ich leider auch selber schuld bin.",true, "alessa");
        dataForSave.alessaScore += 20;
        break;

    }
    let retteAlessaThree = {
      iPickerLange: "Wie lange wart ihr zusammen?",
      iPickfunfact: "Erzähl über irgendeinen dummen Moment",
      iPickRätsel: "Hat er auch so nen Spielhang?",

    };

    let werIstAlessaThree = await ƒS.Menu.getInput(retteAlessaThree, "choicesAlessa");
    switch (werIstAlessaThree) {
      case retteAlessaThree.iPickerLange:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie lange wart ihr zusammen?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Oh gar nicht so unendlich lange, nur drei Jahre",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das ist schon ein wenig länger.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Naja, es geht. Dennoch war es meine längste Beziehung",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Nicht das ich es vermisssen würde. Es war schon unfassbar Zeit aufwendig. Ich kam fast nicht mehr mit meinen Studien hinterher.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Aber es war auch nicht das schlimmste was ich jemals gemacht habe, es war schön zumindest für eine Zeit einen Partner zu haben und eins muss ich Eli lassen. Er ist ein Poet am Klavier",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Echt der?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ja echt, hab auch gedacht, er bindet mit zu erst einen Bären auf keine Sorge",true, "alessa");
        dataForSave.alessaScore += 10;
        break;

      case retteAlessaThree.iPickfunfact:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Okay erzähl mir irgendwas über ihn. Egal was, einfach irgendwas lustiges.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Okay, lasst mich eben überlegen.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Gut wir waren auf reisen, um genau zu sein, sollten wir irgendso ein Artefakt für einen König besorgen.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Das ganze erwies sich nur als schwieriger als Gedacht. Nicht etwa wei der König böse war, oder das Artefakt am anderen Ende der Welt.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Denn das wäre eine Untertreribung. Das Artefakt war in einem Haus.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ihr seid gerade auch in einem Haus, ich sehe das Problem nicht.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Das Haus war sehr groß.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie ein Palast? Wartet seid ihr wahrhaftig in einen Palast eingebrochen?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Leider ja, ich trage bis heute eine Böse Narbe davon am Bauch.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Welcher König war das und wo ist diese Geschichte bitte lustig?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Es war kein König. Sondern ein Teufel, dieser Palast, war nämlich im ersten Kreis der Hölle und hat Zariel gehört.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "DIE Zariel. Der gefallene Engel?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Genau die. Leider in ich ihr nie begegnet. Nur ihre Wachen waren vor Ort, die Eli, durch eine Tanzeinlage abgelenkt hat. Denn man mag es ihm nicht ansehen, aber Eli ist ein unfassbar guter Musikant.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wow, das ist Mal nee Geschichte.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ja, die guten alten Zeiten und Götter die Rätsel die ich dort gehört habe.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Wollt ihr eines hören?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ein ander Mal vielleicht.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "euer verlust.",true, "alessa");
        dataForSave.alessaScore += 30;
        break;
      case retteAlessaThree.iPickRätsel:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Hat Elidibus eigentlich auch so nee Rätselsucht wie du?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "bitte der?",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Der könnte ein gutes Rätsel nicht Mal wertschätzen, wenn es von den Göttern persönlich käme.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Aber das gleicht er mit seinen Musikalischen Fähigkeiten wieder aus. Die sind tatsächlich sehr gut.",true, "alessa")
        await ƒS.Speech.tell(characters.alessa, "Nur was soll ich sagen, was bringt einem schon alle Musik dieser Welt, wenn man damit keinen Geheimen Schrein lüften kann",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Und ja er hat es schon versucht, aber dass ging dann imemr mehr in meinen Aufgaben berech.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh da kann ich ihn tatsächlich verstehen, das hat bei uns auch immer jemand übernomme", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ach echt ihr seid Abenteurer?",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "War ich, vor langer langer Zeit.", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Cheers dazu.",true, "alessa");
        dataForSave.alessaScore += 20;
        break;



    }
    
    let butterBeiDieFische = {
      iPickerWahrheit: "Was ist passiert"
      
    };

    let werIstAlessaWahrheit = await ƒS.Menu.getInput(butterBeiDieFische, "choicesAlessa");
    switch(werIstAlessaWahrheit){
case butterBeiDieFische.iPickerWahrheit:
    while (dataForSave.alessaScore > 70) {
      document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
      await ƒS.Speech.tell(characters.alessa, "Okay, vielleicht hast du recht gehabt und es hilft echt. Ich hoffe du hast noch ein wenig Zeit mitgebracht.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Eli und ich waren Teil einer Abenteuergruppe und wir waren mit zwei anderen noch Unterwegs. Einen nannten wir netterwweise Doc und der andere war Horuk",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Fairerweise wir nannten Doc nur so, weil keiner seinen Namen ausprechen konnte.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Aber egal, Wir sind zusammen durch das Knigreich gereist haben Abenteuer in diesem erlebt und auch auerhalb. Irgendwann kamen ich und Eli uns näher. Götter niemand weiß wieso",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Unser Leben war gut, Abenteurreich, alkohol reich. Zumindest bis wir alle ein wenig älter wurden und andere dinge für die beiden Interessant wurden.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Doc hat ein Krankenhaus aufgemacht und Horu hat geheiratet und mitlerweile ich glaube zwei Kinder. Ich und Eli unfähig uns anzupassen, sind weiter gezogen.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Innerhalb alle dem, hat er mir irgendwann eröffnet das er ständig eine Melodie hört, als würde sie ihn rufen, als würde jemand ihn rufen. Natürlich half ich ihm, diese ausfinding zu machen",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Zumindest hab ich ihm das gesagt.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Anfangs war das ganze noch, normal aber irgendwann, desto näher wir der Sache kam, desto mehr hat sie ihm bedeutet. Er sagte mir er würde von jemanden Träumen, jemanden mit Orangenen Haaren.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Und so dumm das klingt, aber ich wurde neidisch. Hatte Angst das dieses etwas ihm wichtiger werden würde als ich.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Weswegen ich zu einem Magier ging und ein Zauber über ihn legte....Danach war alles anders",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Der Zauber hat gewirkt, so ist es nicht. Aber es schien mehr von ihm genommen zu haben, als nur dieser Gedanke an die Melodie.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Er wurde Brutaler. Stille. Er war andauernd so wütend, als ich ihm gefragt habe wieso, konnte er mir nur sagen, das irgendwas in ihm ist, das ihn aufressen würde Wie eine Leere.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Und dennoch habe ich schrecklicher Mensch es nich gesagt. War so davon besessen bei ihm zu sein. Ich wünschte ich hätte wenigstens die Anstallt gehabt es ihm zu sagen",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Aber ein gewisses Irlicht kam mir zuvor. Eines das uns aus spaß gegeneinander auspielen wollte. Nicht Mal ihm war klar wie einfach das sein würde.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "In dem Moment, in welchem das Irrlicht den Zauber von Elidibus nahm. Ich werde nie vergessen wie gebrochen diese Augen aussahen. Wie er auf seine Blut überlaufenen Hände starrte.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Also tat ich es nicht und ging. Mied ihm seit dem. Mied das was passieren würde sobald wir usn wiedersehen.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Also mein lieber damit hast du es. Die Geschichte von Alessa der Klinge, die einen Helden zum Monster machte.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Glaub mir ich bereue nicht viel, aber das bereue ich.",true, "alessa");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das tut mir leid, vielleicht wirst du es eines Tages wieder gut machen können.", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Ja vielleicht.",true, "alessa");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wisst ihr jetzt wo ich darüber Nachdenke, ich hatte eine Kundin mit Orangenen Haaren hier die letzte Zeit.", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "WAS ECHT? WIE HEIßt SIE, WANN KOMMT SIE WIEDER?",true, "alessa");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also es muss nicht stimmen, aber sie hieß Stella und leider ist sie bereits weiter gezogen. Sie kam 3 Tage nach eurem zweitem Besuch, aber wenn ihr euch zu der Nordstraße aufmacht, würdet ihr sie vielleicht noch finden.", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Es ist ein versuch oder nicht. Schade vielleicht werde ich Irgendwann in meinem Leben noch Mal das Glück haben, das wir alle 3 am gleichen Ort sind.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Ich danke dir, für alles. Bis eines Tages vielleicht.",true, "alessa");
      await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, middleToLeave());
      ƒS.update(2);
        await ƒS.Location.show(locations.unfinished);
    ƒS.update(20);
    return "End"
    }

    while (dataForSave.alessaScore < 70) {
      document.getElementsByName("alessaScore").forEach(meterStuff => meterStuff.hidden = true);
      await ƒS.Speech.tell(characters.alessa, "Hm es war zumnindest ein nettes Gespräch, danke dir für deine Zeit.",true, "alessa");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich wünschte ich hätte mehr tun können", true, "spieler");
      await ƒS.Speech.tell(characters.alessa, "Passt schon, viel glück mit deiner Bar weiterhin. Es war mir eine Freude mit dir zu Spielen",true, "alessa");
      await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, middeToLLeaveSlow());
      await ƒS.Speech.tell(characters.narrator, "Du kamst um zu helfen, das ist der Sinn deiner Bar, doch am Ende konntest du keinem helfen. Weder dem mürrischen Krieger");
      await ƒS.Speech.tell(characters.narrator, "Noch der vermumten Doktorin");
      await ƒS.Speech.tell(characters.narrator, "Oder der c");
      await ƒS.Speech.tell(characters.narrator, "In einem anderen Leben hättest du vielleicht schlauer gehandelt. In einem anderen Leben hättest du sie vielleicht bekannt gemacht");
      ƒS.update(2);
        await ƒS.Location.show(locations.blackout);
    ƒS.update(20);
    return "End"
      
    }
  }
  









  }

}
