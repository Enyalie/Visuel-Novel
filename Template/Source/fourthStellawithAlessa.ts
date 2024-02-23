namespace Template {
  export async function fourthStellawithAlessa(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    console.log("FudgeStory Template Scene Stella meets Alessa starting");

    console.log("fourth Scene Stella starting");
    ƒS.Sound.play(sound.tavern, 0.2, true);
    await ƒS.Location.show(locations.tavernDay);
    await ƒS.update(5);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.stella, "Hey Hey", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh Stella, freut mich dich zu sehen, gehts dir wieder besser?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ich habe auf jeden Fall das Erledigt, was ich Erledigen wollte", true, "stella");
    await ƒS.Speech.tell(characters.stella, "aber lass uns doch nicht darüber reden, wie ist es dir ergangen?", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja wie immer halt, Kunden waren hier ich gab Getränke aus", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das normale Leben hinter der Theke halt", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Du bist nur eine Entscheidung entfernt davon das zu ändern", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und die durstigen Gäste ohne Zwergenfeuer lassen, wohl kaum", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "wie du meinst", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Ist das überhaupt Lustig? So am Thresen die ganze Zeit zu stehen und nur zu zuhören?", true, "stella");

    let fourthWallbreak = {
      iPickYes: "Ja, schon",
      iPickNo: "Nein, absolut nicht"

    };

    let dialoFourthWallBreak = await ƒS.Menu.getInput(fourthWallbreak, "choicesCSSClass");

    switch (dialoFourthWallBreak) {
      case fourthWallbreak.iPickYes:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es gibt spannenderes, dennoch macht es mir spaß diese Arbeit auszuführen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Obgleich ich manchmal schon gerne dabei wäre, statt nur zuzuhören und Empfehlungen zu geben", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dennoch", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es ist kein Abenteuer reiches Leben mehr, aber dennoch ein Gutes", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich habe ein Dach über den Kopf, was zu Essen und immer gute Gesellschaft", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es ist also wesentlich ertragbarer als du glaubst", true, "spieler");
        break;
      case fourthWallbreak.iPickNo:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja muss halt sein, irgendwie muss man halt über die runden kommen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich würde aber lügen, wenn ich sagen würde, das ich nicht den ruf der Welt vermisse", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In vielerlei Hinsicht beneide ich dich sogar Stella", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Du bist alles was mein jüngeres ich sein wollte", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Abenteuer froh, Welt offen, stark mutig", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Vielleicht ja in einem anderen Leben", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "vielleicht werde ich ihn eines Tages wieder hören", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "vielleicht sogar wieder in diesem", true, "stella");
        await ƒS.Speech.tell(characters.stella, "du wirst schon sehen, ich hab da so ein Gefühl", true, "stella");
        await ƒS.Speech.tell(characters.stella, "der Ruf wird kommen, du musst nur hinhören und ihm folgen", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ich hoffe du hast recht", true, "spieler");
        break;
    }

    await ƒS.Speech.tell(characters.stella, "Übrigens, ich hab auf dem Fest von einem Jäger gehört", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Er muss ja ziemlich bekannt sein, falls man vom ihm redet", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Natürlich, immerhin hat er einen Werwolf besiegt und das mit bloßen Händen", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Mit bloßen Händen", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "wow", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "so viel hatte ich ihm tatsächlich nicht zugetraut", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Sag mir nicht du kennst ihn", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Kennen tue ich Elidibus jetzt nicht wirklich, selbst seinen Namen kenne ich nur durch eine Freundin.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Aber ja, ich gab ihm den Auftrag", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "DU GIBST AUFTRÄGE RAUS", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Warum sollte ich nicht? Woher glaubst du bitte, kenne ich all diese Orte", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "uuuuuh, kannst du mir auch einen geben?", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Stella bist du überhaupt eine Kämpferin?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Noch nicht, aber ich kann es ja werden", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "du würdest echt alles für ein Abenteuer machen oder?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Das dir das jetzt erst klar wurde", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Du solltest eventuell dennoch erst mal damit Anfangen Kämpfen zu lernen, bevor du auf Monsterjagd gehst", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Wer sagt denn das ich nicht Kämpfen kann?", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Du vor grade eben erst", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Nein ich sagte, dass ich keine Kämpferin bin, nicht das ich nicht Kämpfen kann", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Natürlich habe ich gelernt mich zu verteidigen, es ist nur einfach so. Ich töte nicht gerne", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und wieso willst du dann einen Auftrag?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Weil ich so Leuten helfen könnte. Und Monster sind ja auch keine guten Wesen!", true, "stella");
    await ƒS.Speech.tell(characters.stella, "eventuell auch, weil ich langsam ein wenig Geld brauche", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Daher kommt also das Interesse", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Leider muss ich dich enttäuschen, ich habe grade keine Jobs", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Also ich hätte vielleicht einen",true, "alessa");
    ƒS.Sound.fade(sound.tavern, 0, 2);
    ƒS.Sound.play(sound.alessa, 1.2, true);
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeft());
    await ƒS.update(1);
    await ƒS.Character.show(characters.alessa, characters.alessa.pose.normal, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich hatte fast nicht mehr mit dir gerechnet", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Als ob ich jemals vor einer Herausforderung zurückschrecken würde",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Ich hatte heute nur viel zu tun, deswegen meine Verspätung",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Wie unhöflich von mir. Du musst bestimmt Stella sein",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Öhm", true, "stella");
    await ƒS.Speech.tell(characters.stella, "öhm", true, "stella");
    await ƒS.Speech.tell(characters.stella, " Ja, bin ich. Wer bist du? Und woher kennst du mich? Und wieso hast du nee Maske? Und sind das echte Federn, an diesem Mantel?", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Du darfst mich Alessa nennen, die Maske ist gegen Bakterien und zum Schutz, von unserem gemeinsamen Freund, ja sind es, schön oder?",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wieeeee du hast ihr sofort deinen Namen gesagt. Ich musste hart dafür Arbeiten", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Du hast so bezaubert von ihr geredet, da kann ich doch nicht anders",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Warte, er hat was", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alessa, hab ich dir was getan und natürlich nur Gutes Stella", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Okay darüber reden wir später, aber zu erst", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Du siehst einfach sooooooooooooooo hübsch aus!", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Bist du auch Abenteurerin?", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Mitnichten, ich bin Doktor, man könnte sagen ein sehr guter",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Seit wann sehen Doktoren denn so ", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Modebewusst aus. Tun sie nicht, ich bin da besonders",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Aber genug von mir, Stella spielst du gerne?",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "ähm ich denke schon", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "du hättest sowieso keine Wahl gehabt keine sorge", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Sehr gut, dann spielen wir",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Dieses Mal aber ein wenig was schwierigeres, immerhin ist " + dataForSave.nameBarkeeper + " schon geübt in meinen Rätseln",true, "alessa");

    await ƒS.Speech.tell(characters.alessa, "Ich wurde geschlagen, aber nicht verwundet. Bin eine Mauer und doch stehe ich nicht still. Was bin ich? ",true, "alessa");

    let spielenMitStellaScene4 = {
      iPickolzpuppe: "eine Holzpuppe",
      iPickRitter: "ein Ritter",
      iPickBoxsack: "ein Boxsack"

    };
    let indicatorforRätselszene4 = {
      number: 0
    };

    let rätselSpielMitStella = await ƒS.Menu.getInput(spielenMitStellaScene4, "choicesAlessa");
    switch (rätselSpielMitStella) {
      case spielenMitStellaScene4.iPickolzpuppe:
        await ƒS.Speech.tell(characters.stella, "aber eine Holzpuppe steht doch still?", true, "stella");
        break;
      case spielenMitStellaScene4.iPickRitter:
        await ƒS.Speech.tell(characters.stella, "There will come a soldier Who carries a mighty sword He will tear your city down, oh lei-oh lai-oh Lord", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Oh tut mir leid, es hat mich nur an etwas erinnert.", true, "stella");
        indicatorforRätselszene4.number++;


        let versteckterSong = {
          iPickSong: "There will come a poet",
          iPickAntwort: "An was?",
          iPickJoke: "Einen trinken"
        };
        let schlüsselStellaWarheit = await ƒS.Menu.getInput(versteckterSong, "choicesCSSClass");
        switch (schlüsselStellaWarheit) {
          case versteckterSong.iPickSong:
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Whose brow is laid in thorn Smeared with oil like Davids boy, oh lei-oh lai-oh Lord", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Du", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Du kennst den Song", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Klar kenne ich den Song, warte mal kurz", true, "spieler");
            ƒS.Sound.fade(sound.alessa, 0, 2);
            await ƒS.Location.show(locations.blackout);
            await ƒS.Character.hide(characters.alessa);
            await ƒS.Character.hide(characters.stella);
            await ƒS.update(1);
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube ich erinnere mich auch noch an die Noten", true, "spieler");
            ƒS.Sound.play(sound.soldir, 0.8);
            await ƒS.Progress.delay(10);
            ƒS.Sound.fade(sound.soldir, 0, 2);
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "und was meinst du?", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Das war", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Also", true, "stella");
            await ƒS.Speech.tell(characters.stella, "das", true, "stella");
            await ƒS.Speech.tell(characters.stella, "es war einfach wunderschön", true, "stella");
            await ƒS.Speech.tell(characters.stella, "seit wann kannst…Du Klavier spielen", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naja spielen kann ich jetzt nicht wirklich, das bisschen rumgeklimmper, aber ich habe es als Kind gelernt", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Klimpern, war das nicht. Es war wirklich sehr gut",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "vielleicht werden wir in Zukunft das machen, anstatt zu Spielen",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Danke euch. Ich habe ganz vergessen wie schön es ist zu Musizieren", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Wie eine eigene Welt", true, "stella");
            await ƒS.Speech.tell(characters.stella, "sag mal", true, "stella");
            await ƒS.Speech.tell(characters.stella, "dürfte ich eventuell etwas spielen?", true, "stella");
            await ƒS.Speech.tell(characters.stella, "ich bin nicht sonderlich gut aber", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ist egal, sei mein Gast", true, "spieler");
            ƒS.Sound.play(sound.fragment, 0.8);
            await ƒS.Progress.delay(30);
            ƒS.Sound.fade(sound.fragment, 0, 2);
            await ƒS.Speech.tell(characters.stella, "mehr kann ich leider nicht", true, "stella");
            await ƒS.Location.show(locations.tavernSunset);
            await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(30, 100));
            await ƒS.Character.show(characters.alessa, characters.alessa.pose.normal, ƒS.positionPercent(70, 100));
            await ƒS.update(1);
            ƒS.Sound.play(sound.alessa, 1.2, true);
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das macht es nicht weniger schöner", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie heißt das Stück. Es ist wirrklich wahnsinnig schön", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Ich weiß es nicht, ich kenne diese Melodie einfach, sie begleitet mich schon mein Leben lang");
            await ƒS.Speech.tell(characters.alessa, "Und sie ruft dich hinaus in die Welt.",true, "alessa");
            await ƒS.Speech.tell(characters.stella, "JA GENAU", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Hörst du es etwa auch?", true, "stella");
            await ƒS.Speech.tell(characters.alessa, "Hm?",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Nein, nein ich höre keine Melodie, aber ich kenne diese Worte. Ein ",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Ein sehr guter Freund hat mal etwas sehr ähnliches zu mir gesagt",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "ich...Ich sollte ihn dir mal vorstellen. Ich glaube du wirst ihn mögen",true, "alessa");
            await ƒS.Speech.tell(characters.stella, "er hat dir also was ähnliches gesagt....", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Ich hoffe die Gelegenheit wird sich bieten.", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Es war wirklich unfassbar schön dich kennenzulenen Alessa, ich hoffe wir können das wiederholen", true, "stella");
            await ƒS.Speech.tell(characters.stella, "tut mir leid, ich werde mich für heute Entschuldigen", true, "stella");
            await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, leftToLLeave());
            ƒS.update();
            ƒS.Character.hide(characters.stella);
            ƒS.update();
            await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, rightToMiddle());
            await ƒS.Speech.tell(characters.alessa, "Hab ich was falsches gesagt",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich bin mir nicht sicher. Ich weiß nur das ich Stella noch nie so förmlich erlebt habe", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich wusste nicht Mal das sie so förmlich sein kann", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Auch wenn ich es hasse das zu sagen, weil ich",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "weil ich wirklich daran geglaubt habe",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Ich wollte das du recht hast. Aber",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "das heißt dann  wohl, das ich unser kleines Spiel gewonnen habe",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Trotzdem danke für den versuch.",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So glaubst du das.", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich würde sagen wir gehen  in die zweite runde", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "das alles fängt grade erst an.", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "du wirst schon sehen", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Bis in ein paar Tagen " + dataForSave.nameBarkeeper,true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Wobei, ihr kennt nicht reinzufällig einen Krieger der ein wenig mürrisch ist",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Es gäbe da schon eine Person auf die das zutrifft wieso?");
            await ƒS.Speech.tell(characters.alessa, "Hat dieser zufällig Graues Haar?",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wenn ich michr echt entsinne hatte er dies");
            await ƒS.Speech.tell(characters.alessa, "Wird dieser in näherer Zukunft erneut hier aufschlagen.",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In ein paar Tagen, wieso fragt ihr");
            await ƒS.Speech.tell(characters.alessa, "Nur eines versprechens wegen",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Nun wirklich Gute Nacht",true, "alessa");
            ƒS.update();
            ƒS.Character.hide(characters.alessa);
            ƒS.update();
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das war Interessant.");
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.alessa, 0, 2);
            await ƒS.Location.show(locations.blackout);
            await ƒS.update(2);
            return "Versprechen";




          case versteckterSong.iPickAntwort:
            await ƒS.Speech.tell(characters.stella, "Ach nur an eine Erinnerung aus meiner Kindheit, nix besonderes", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Aber es ist lustig oder? Ich sah eine Menge Ritter und Abenteurer mitlerweile auf meinen Reisen.", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Und doch, war es genau dieses Rätsel, das mich daran erinnerte.", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Ah tut mir mega leid ich quatsche euch total voll", true, "stella");
            await ƒS.Speech.tell(characters.alessa, "Ich finde das überhaupt nicht komisch. Die Art und Weise wie das Gehirn funktioniert ist immerhin bisher kaum erforscht",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Ein einziges Wort ist dazu fähig, vergessenes hervorzuholen, wieso sollte das Komisch sein. Ich finde wir sollten uns vielmehr daran erfreuen.",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich dachte du wärst Doktor und keine Poetin", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Im gegensatz zu deinen, sind meine Kunden gebildeter.",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagte meine Kundin", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "....................................",true, "alessa");
            break;
          case versteckterSong.iPickJoke:
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Solange er danach wenigstens hierher kommt um etwas zu Trinken", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "naja ich denke so ein Königreich zu stürzen macht schon durstig", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Also eine gute Chance bestünde ja schon mal. Uuuuuund, er würde aufjedenfall eine menge tipps bekommen, wie er das nächste Stürzen könnte", true, "stella");
            await ƒS.Speech.tell(characters.alessa, "Du hast mir nie erzählt, das du Revolutionär bist.",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "Jetzt macht das alles auch wenigstens Sinn, die Bar, die schlechten Drinks. Natrlich alles nur ein Deckmantel, für deinen großen Plan",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Meine Drinks sind überhaupt nicht schlecht!", true, "spieler");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich würde lieber aufpassen was du sagst, jetzt wo du mein Geheimnis rausgefunden hast, sonst werde ich die Ärzte Kammer, als nächstes überfallen", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Natürlich Natürlich, mir zittern schon die Knie, wenn ich an deine Armee aus trunkbolden denke",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sollte es auch, hast du Stella schon mal Kämpfen sehen", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Ach jetzt vertraust du auf einmal in meine Fähigkeiten", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Dann macht es dir ja auch bestimmt nichts aus, mir einen Auftrag zu geben, oh großer Revolutionist", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Unsere Stunde ist noch nicht gekommen, wir müssen wachsam bleiben", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Ah ja", true, "stella");
            await ƒS.Speech.tell(characters.stella, "natürlich mein Anführer", true, "stella");
            await ƒS.Speech.tell(characters.alessa, "Götter bewahre uns vor dem Tag, wo du jemals eine Armee anführen musst",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sie würden erzittern vor meinem können", true, "spieler");
            await ƒS.Speech.tell(characters.alessa, "Und auserwählen für ihren Champion. Meine Daumen sind gedrückt keine sorge",true, "alessa");
            break;
        }
        break;
      case spielenMitStellaScene4.iPickBoxsack:
        await ƒS.Speech.tell(characters.alessa, "Wird das nicht erst in 400 Jahren erfunden",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube du hast recht", true, "spieler");
        break;


    }
    await ƒS.Speech.tell(characters.alessa, "Okay nächste frage",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Der Schrein ohne Deckel, Schlüssel, Schanier birgt einen goldenen Schatz, glaub es mir!",true, "alessa");

    let spielenMitStellaScene4Frage2 = {
      iPickHerz: "Das Herz",
      iPickTempel: "ein Tempel",
      iPickEi: "ein Ei"

    };

    let rätselSpielMitStellaFrage2 = await ƒS.Menu.getInput(spielenMitStellaScene4Frage2, "choicesAlessa");
    switch (rätselSpielMitStellaFrage2) {
      case spielenMitStellaScene4Frage2.iPickHerz:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube mit dem herz liege ich sehr richtig, zumindest habe ich keinen Schlüssel dafür", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Und je nachdem wie man es sieht ist es auch golden, wenn auch sehr Poetisch", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "soviel kann ich euch sagen, das wäre zu poetisch für mich",true, "alessa");
        break;
      case spielenMitStellaScene4Frage2.iPickTempel:
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ein Tempel klare sache!", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Schon, Mal von einem Tempel ohne Schlüssel gehört? oder dach?", true, "stella");
        break;
      case spielenMitStellaScene4Frage2.iPickEi:
        indicatorforRätselszene4.number++;
        await ƒS.Speech.tell(characters.stella, "Wie kommst du bitte auf ein Ei?", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Das Herz würde doch viel mehr Sinn machen", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dachte ich zu erst auch, aber das goldene hat mich abgeschreckt", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Was wenn Alessa nur poetisch war?", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Da ich weiß wo diese Rätsel herkommen, gehe ich eher weniger davon aus", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was mnich zu dem schluss führte, es muss logisch sein. Und schau mal, ein Ei kann man nur aufbrechen und doch behütet es sein inneres. Und genau so wie man den Mutterschos Tempel nennt, würde das hier auch Sinn machen", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Desweiteren, welche Farbe hat das innere?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Weiß und...Gold oh Götter ja du hast recht!", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Doch was meintest du mit, wo sie herkommen?", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube das sollte dir Alessa lieber selber erzählen", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "muss ich",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "JA, und zwar die lange fassung!", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "du hast glück, das ich dich mag",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Also es war vor ein paar Monaten",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Ich sollte eine kleine Gruppe von Helden begleiten, weil sie einen Ring zerstören wollten",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Frag mich nicht, ich fande das unterfangen sehr absurd, aber für sie war es ausgesprochen wichtig",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Wir sind also durch eine Gebirskette gelaufen, damit wir einem dunklem Zauberer Namens Salamo, oder so ähnlich auswichen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Hat eher mittelmäßig gut funktioniert, da wir mit Blitzen abgeschossen wurden, was uns in eine Höhle zwang.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Da habe ich dann auch irgendwie, die Gruppe, vollkommen unabsichtlich natürlich versteht sich, verloren und sah beim hinaus laufen ein Männchen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Okay Männchen könnte sehr nett ausgedrückt sein. Das wesen wiederholte seinen Namen andauernd, während es mit mir redete. Ich bezweifelte schon jemals wieder meine verloren gegangene Gehirnzellen wiederherzustellen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "doch dann aus heiterem Himmel, oder eben Fels.",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Frage es mich ob wir nicht spielen wollen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "In meiner förmlichen manier könnte ich natürlich niemals nein sagen",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wohl eher deiner Spielsucht", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Ihr nennt es Spielsucht, ich sage positive Einstellung zu spaßigen wagnissen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "nun denn, wo waren wir",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "genau",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Zu meiner verwunderung, hat es während dem Spiel total seine Persönlichkeit geändert",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Tatsache, es behersche urplötzlich wieder die normale sprache und die Rätsel waren auch nicht, all zu schlecht",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Wie könnte ich anders, als sie selber zu verwenden",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "zufrieden?",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "nein warte, was ist mit dem Männchen danach passiert?", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "Ich musste es umbringen, es kam auf die wahnwitzige Idee mich zu fressen als Bezahlung für das Spiel",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "Ou das ist...", true, "stella");
        await ƒS.Speech.tell(characters.stella, "kein sehr schönes Ende", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "So ist die Welt herzchen. Wir müssen das beste daraus machen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Also dann meine lieben Herrschaften. Das war es dieses Mal wieder mit unserem kleinen Spielchen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Aber aber, seid nicht traurig. Ich komme wieder mit mehr Rätseln",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "....",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "....", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "....", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ähm bravo?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Also bitte, ein wenig mehr begeisterung bitte",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "okay ähm", true, "stella");
        await ƒS.Speech.tell(characters.stella, "BRAVO, BRAVO Ich kann es kaum erwarten!", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "Okay vielleicht, ein ticken weniger",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "danke für die tollen Rätsel, ich freue mich aufs nächste Mal?", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "JA, so ist es perfekt",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "Ich mag dich Alessa", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "...",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagte ja das es nicht so schwer ist wie du glaubst", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Du kurz nee andere sache noch.", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Du meintest du hättest nen Auftrag für mich", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "Oh du hast recht, damit hat das alles ja angefangen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Ja ich muss die nächsten Tage eine längere Reise für einen Auftrag antreten und Reise in den Momentanen Zeiten ungern alleine",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Eigentlich wollte ich Elidibus fragen, dieser scheint aber noch auf der Jagd zu sein. Und sofern ihr wirklich Kämpfen könnt, wäre ich gewillt eure Dienste in Auftrag zu nehmen",true, "alessa");
        await ƒS.Speech.tell(characters.stella, "Meine Dienste gehören ganz euch Madam", true, "stella");
        await ƒS.Speech.tell(characters.alessa, "Sehr gut, so gefällt mir das, dann lass mich dich gerne auf einen Drink einladen, um dieses treffen zu feiern",true, "alessa");
        ƒS.Sound.play(sound.pour, 0.8);
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So bitte die Damen", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Oh nein mein Lieber, so kommst du mir nicht davon",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Du trinkst mit uns!",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "sehr gerne", true, "spieler");
        ƒS.Sound.play(sound.pour, 0.8);
        await ƒS.Speech.tell(characters.alessa, "Also dann",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Auf eine gute Reise",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "und neuen Freundschaften",true, "alessa");
        ƒS.update();
        ƒS.Character.hide(characters.stella);
        ƒS.Character.hide(characters.alessa);
        ƒS.update();
        ƒS.Sound.fade(sound.alessa, 0, 2);
        await ƒS.Location.show(locations.newFriends);
        ƒS.update(20);
        return "End"
      //ENDE 1 AUF NEUE FREUNDSCHAFTEN!!!!!!!!!!!!!!!!!!!!!!!
    }
    await ƒS.Speech.tell(characters.alessa, "okay, vielleicht waren die Rätsel doch zu schwer",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "haben wir echt so schlecht abgeschnitten?", true, "stella");
    while (indicatorforRätselszene4.number === 1) {
      await ƒS.Speech.tell(characters.alessa, "Ihr habt 50% der Rätsel gelöst. Was bei 2 Rätseln naja, nicht so schwer ist.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Aber hey, 50% sind 50%",true, "alessa");
      await ƒS.Speech.tell(characters.stella, "weißt du, es würde nett klingen wäre dein unterton nicht so Sarkastisch", true, "stella");
      await ƒS.Speech.tell(characters.stella, "aber nächstes Mal strenge ich mich mehr an!", true, "stella");
      await ƒS.Speech.tell(characters.alessa, "Das will ich hören!",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "und du? was ist deine Entschuldigung " + dataForSave.nameBarkeeper,true, "alessa");
      let hälfteDerRätselGelöstEnding = {
        iPickSchwer: "Waren schwer",
        iPicksorry: "Nächstes Mal!"
      };

      let hälfteDerRätselGelöstEndingAusrede = await ƒS.Menu.getInput(hälfteDerRätselGelöstEnding, "choicesCSSClass");
      switch (hälfteDerRätselGelöstEndingAusrede) {
        case hälfteDerRätselGelöstEnding.iPickSchwer:
          await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also Alessa, du tust so als wärem diese Rätsel Kinderleicht", true, "spieler");
          await ƒS.Speech.tell(characters.alessa, "Naja, sie stammen aus einem Kinderbuch",true, "alessa");
          await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Sagtest du nicht sie stammen aus einer Höhle?", true, "spieler");
          await ƒS.Speech.tell(characters.stella, "Wie einer Höhle?", true, "stella");
          await ƒS.Speech.tell(characters.alessa, "Nicht so wichtig. Also ja sie stammen aus einer Höhle, aber das Wesen in dieser Höhle, hat sie aus einem Kinderbuch",true, "alessa");
          await ƒS.Speech.tell(dataForSave.nameBarkeeper, "jetzt im ernst?", true, "spieler");
          await ƒS.Speech.tell(characters.alessa, "Ja im ernst. Ich bin selber nur vor kurzem darauf gestoßen. Das Wesen liebt anscheinend die Geschichte Namens der Hobbit. Du solltest sie lesen, dann wirst du vielleicht auch besser im lösen meiner Rätsel",true, "alessa");
          await ƒS.Speech.tell(characters.stella, "jetzt warte doch mal welches Wesen, könnt ihr mir bitte erklären worüber ihr redet?", true, "stella");
          await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alessa bekommt ihre Rätsel anscheinend aus Höhlen, welche noch anscheinender sie aus Kinderbücher bekommen", true, "spieler");
          await ƒS.Speech.tell(characters.alessa, "Ja das trifft es ziemlich gut. Wüsste nicht was man da noch hinzufügen müsste",true, "alessa");
          await ƒS.Speech.tell(characters.stella, "eine Menge? wieso bekommst du überhaupt Rätsel aus Höhlen?", true, "stella");
          await ƒS.Speech.tell(characters.alessa, "du etwa nicht?",true, "alessa");
          await ƒS.Speech.tell(characters.stella, "Ähm NEIN", true, "stella");
          await ƒS.Speech.tell(characters.alessa, "dann warst du einfach noch nicht in genug Höhlen",true, "alessa");
          while (dataForSave.variableKristalhöhle === true) {
            await ƒS.Speech.tell(characters.stella, "Doch war ich, erst vor kurzem. Sie war sogar komplett aus Kristall!", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Ich hab sogar einen geheimen Weg gefunden", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Und trotzdem waren da keinerlei Rätsel", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie würdest du die Kristalle denn sonst bezeichnen?");
            await ƒS.Speech.tell(characters.stella, "Ähm", true, "stella");
            await ƒS.Speech.tell(characters.stella, "eine andere Art von Tür", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube der Punkt geht an Alessa");
            break;
          }
          while (dataForSave.variableKristalhöhle === false) {
            await ƒS.Speech.tell(characters.stella, "Okay ja vielleicht", true, "stella");
            await ƒS.Speech.tell(characters.stella, "AAAAAAber das heißt nur, das ich jetzt weiß was ich als nächstes machen muss!", true, "stella");
            await ƒS.Speech.tell(characters.stella, "Wie siehts aus " + dataForSave.nameBarkeeper + "hast du reinzufällig eine Höhle für mich parat?", true, "stella");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Tatsächlich ja, ich kenne da eine Kristalhöhle", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "Perfekt, dann werde ich morgen dorthin aufbrechen", true, "stella");
            await ƒS.Speech.tell(characters.alessa, " da hab ich ja echt was losgetreten",true, "alessa");
            await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nein nein, das ist normal", true, "spieler");
            await ƒS.Speech.tell(characters.stella, "HALLOOOO, ich bin noch da!", true, "stella");
            break;
          }
          break;
        case hälfteDerRätselGelöstEnding.iPicksorry:
          await ƒS.Speech.tell(dataForSave.nameBarkeeper, "keine sorge beim nächsten Mal löse ich sie!", true, "spieler");
          while (dataForSave.variableRätselsceneAlessa1 === true) {
            await ƒS.Speech.tell(characters.alessa, "Das sagtest du beim letzten Mal auch schon. Aber glück gehabt, diese eine richtige Antwort hat dich vorm verlieren bewahrt",true, "alessa");
            await ƒS.Speech.tell(characters.alessa, "eventuell beim dritten Mal dann",true, "alessa");
            break;
          }
          while (dataForSave.variableRätselsceneAlessa1 === false) {
            await ƒS.Speech.tell(characters.alessa, "Ich freue mich darauf und nehme dich beim Wort",true, "alessa");
            break;
          }
          break;


      }
      break;
    }
    while (indicatorforRätselszene4.number === 0) {
      await ƒS.Speech.tell(characters.alessa, "Sagen wir, ihr habt euch angestrengt.",true, "alessa");
      await ƒS.Speech.tell(characters.alessa, "Dabei sein ist ja sowieso das wichtigste",true, "alessa");
      while (dataForSave.variableRätselsceneAlessa1 === true) {
        await ƒS.Speech.tell(characters.alessa, "Obwohl ich entsinne mich da an etwas.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh nein", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "Oh doch",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Da ich sehr gnädig bin, werde ich es nicht euer Blut sein lassen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Stattdessen, lasst mich überlegen",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Ja da sklingt fair",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Ich denke eure teuerste Flasche Rum sollte angemessen sein",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Alessa, wegen euch darf ich noch meien Bar schließen", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "aber aber mein lieber, doch nicht wegen einer Flasche",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ihr habt wahrlich keine Ahnung was dieser Rum kostet", true, "spieler");
        await ƒS.Speech.tell(characters.alessa, "vermutlich",true, "alessa");
        await ƒS.Speech.tell(characters.alessa, "Aber wenn ich schon anfange dann richtig.",true, "alessa");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Das ist nicht wirklich euer erster Rum, bitte tut mir das nicht an", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was ist mit euch Stella, habt ihr wenigstens schon Mal davor Rum getrunken?", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ist die Frage jtzt ernst gemeint", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "oh ihr Götter was habe ich euch nur getan", true, "spieler");
        break;
      }
      break;
    }

    await ƒS.Speech.tell(characters.stella, "So ich begebe mich dann Mal zur Nachtruhe, Es hat mich gefreut dich kennen zu lernen.", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Morgen were ich mich dann wohl auf Wanderschaft begeben, aber ich würde mich freuen dich wieder zu sehen", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Dem kann ich nur zustimmen. Auf das sich unsere Wege erneut Kreuzen",true, "alessa");
    await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, rightToLLeaveNormal());
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, leftToLLeaveNormal());
    ƒS.update();
    ƒS.Character.hide(characters.stella);
    ƒS.Character.hide(characters.alessa);
    ƒS.update();
    ƒS.Sound.fade(sound.alessa, 0, 2);
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So kam es dann auch. Alessa und Stella besuchten regelmäßig meine Bar und wurden zu den besten Kunden die ich jemals hatte.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Auch der Mürrische Namenlose Krieger kam ab und an vorbei um sein Geld in Alkohol zu ertränken.", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wobei ich mich an eine Nacht erinnere, in der er volltrunken eine Melodie vor sich hinsummte und mir erzählte wie ihn diese verfolgt", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "In den folgenden kam es leider zu keiner solchen begebenheit mehr", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich wüsste zu gern was es damit auf sich hat", true, "spieler");
    ƒS.Speech.clear();
    ƒS.Speech.hide()
    await ƒS.Location.show(locations.blackout);
    ƒS.update(5);
    return "end";





  }





}

