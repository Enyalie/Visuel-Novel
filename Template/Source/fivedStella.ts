//last one
namespace Template {
  export async function fivedStella(): ƒS.SceneReturn {
    console.log("FudgeStory Fived Stella starting");


    console.log("FudgeStory Fived Scene Stella starting");

    console.log("Final Scene starting");

    await ƒS.Location.show(locations.tavernNight);
    await ƒS.update(2);
    await ƒS.Sound.play(sound.tavern, 1.2,true);
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddle());
    await ƒS.update();
    await ƒS.Speech.tell(characters.stella, "Hey Hey", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh du bist wieder da", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich hoffe das dir nichts passiert ist, du gingst letztes Mal so apprubt", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Oh ja ja natürlich, ich musste, ähm brauchte nur etwas Zeit für ähm dinge", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Tut mir leid ich will ungern darüber reden.", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Muss es nicht, dennoch freut es mich das du deinen Weg erneut in meine Tür gefunden hast", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Etwas das ich hoffentlich noch viele Male tun werde", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Aber sagt mir,", true, "stella");
    await ƒS.Speech.tell(characters.stella, "War Alessa Arg böse das ich gegangen bin, ich war keine 10 Schritte Entfernt da wollte ich umdrehen um ihr zu sagen das es nicht an ihr liegt nur, naja hätte ich mich so erklären müssen", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Keine Sorge Stella, Alessa war überhaupt nicth böse auf dich", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dennoch wird sie sich bestimmt darüber freuen, wenn ihr, ihr das sagt", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Sofern ich die chance dazu bekommen sollte", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh glaubt mir das werdet ihr", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Wieso seid ihr euch dessen so sicher?", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Weil ein Barkeeper nun Mal seine Informationen hat, aber dies soll sie euch lieber selbst Erzählen", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun denn Stella, wohin werdet ihr eigentlich als nächstes reisen?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Ich bin mir nicht sicher, vielleicht laufe ich einfach los und schaue wohin mich meine Füße so tragen", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So ganz ohne Ziel?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Auf der Reise wird sich bestimmt eines finden", true, "stella");
    await ƒS.Speech.tell(characters.stella, "Immerhin bin ich weit davon entfernt diese Welt bereits vollends erkundet zu haben", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie immer bewundere ich eure Abenteuerlust", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und doch, so ganz alleine dort draußen habt ihr keine Angst?", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Wieso sollte ich. Das schlimmste was mir passieren kann, ist das ich um mein Leben renne", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Und dabei hinfällst und dir das Bein brichst.",true, "alessa");
    ƒS.Sound.play(sound.footstep, 0.8);
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeft());
    await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, enterToRight());
    //Alessa zeigen
    await ƒS.Speech.tell(characters.alessa, "Du bist wahrlich naiv, alleine durch die Welt zu reisen.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie lange hast du unser Gespräch bereits belauscht.", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Lang genug um abermal einen Dramatischen auftritt hinzulegen",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Und lang genug um Stella davon zu bewahren etwas derart törrichtes zu tun ",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Ich bin überhaupt nicht Naiv, bisher kam ich auch alleine immer sehr gut zurecht");
    await ƒS.Speech.tell(characters.alessa, "vermutlich schon, aber so alleine durch die Welt reisen ist doch auch furchtbar einsam. Möchtest du nicht lieber in Begleitung reisen ",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "ist das etwa, ein angebot das du mitkommst", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Leider nicht, ich bin nicht so die große Abenteurerin. Aber",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Ich kenne da jemanden, den du vielleicht kennenlernen willst",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Ach echt! wen?", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Dass muss dir die Person schon selber sagen.",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "...",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "...", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "...",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "...", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "kommt da no-", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Jaa jaa, götter wo war ich.",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "IIIIIIIIIch kenne da vielleicht jemanden den du kennenlernen willst",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "...",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "IIIIIIIICCHH KEEEEENNNEE, meine güte Eli jetzt schwing deinen Arsch hier herüber.",true, "alessa");
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, leftToMoreLeft());
    await ƒS.Character.animate(characters.alessa, characters.alessa.pose.normal, rightToMiddle());
    await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, enterToRightExtrem());
    // aneigen von Eli
    await ƒS.Speech.tell(characters.elidibus, "Hey...", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "...Hey?...Freut mich dich kennen zu lernen", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Gleichfalls", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "und du gehst gerne auf Abenteuer?", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Ja, kann man so sagen. Ich bin zumindest gut im Kämpfen", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "ah, das klingt doch nett", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Das kann man sich ja nicht mehr durchlesen",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Eli geh nicht nur gerne auf Abenteuer, er LIEBT ES. Und er kann nicht nur gut Kämpfen, sondern war Mal der Beste Schwertkämfper im ganzen Königreich.",true, "alessa");
    await ƒS.Speech.tell(characters.alessa, "Und du müsstes Mal sei-",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "ALESSA!", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "das reicht.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "aber wieso denn?", true, "stella");
    await ƒS.Speech.tell(characters.stella, "das war doch gerade so spannend.", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "echt, fandest du?", true, "Elidibus");
    await ƒS. Speech.tell(characters.stella, "klar, mister mysteriöser namensloser Krieger.", true, "stella")
    await ƒS.Speech.tell(characters.elidibus, "Tzz", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "Elidibus, oder um es in Lessys Worten zu sagen Eli", true, "Elidibus");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Lessy?", true, "spieler")
    await ƒS.Speech.tell(characters.alessa, "psssstt, wir reden später",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Was ein schöner Name. Ich bin Stella", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Freut mich dich kennen zu lernen Stella.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "das sagtest du bereits.", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "stimmmt, tut mir leid", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Sagt, falls Alessa nicht über dich log. Kennst du echt soviel von der Welt?", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "man munkelt, das ich dass tue", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "was würdest du gerne sehen?", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Alles", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Was meinst du mit alles?", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Naa eben alles, halt alles alles alles.", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Okay das könnte ein wenig dauern, da hast du dir echt was vorgenommen", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Hab ja auch noch ein ganzes Leben vor mir, ich denke das wird schon", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Mit der Einstellung definitiv. Viel glück dir Stella, ich hoffe das wir uns eine-", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Göötter Eli, ich schwöre bei all meinen Krähen wenn du nich gleich",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Ist ja gut! Lessy dich hab ich damals auch nicht so gedrängt.", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Unsere Geschichte musste Riem damals auch nicht durchlesen um eine Note zu geben, also mach hinne",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Wo ist Riem?", true, "Elidibus")
    await ƒS.Speech.tell(characters.stella, "Ich hab nee bessere frage, Wer ist Riem ", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich hab nee noch bessere, was ist Riem", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Du sprichst in Rätseln mein Freund",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Aber du hast doch, ihr habt doch gerade noch ääähh", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "pssst jetzt, wir waren gerade in einem wichtigen Gespräch.");
    await ƒS.Speech.tell(characters.alessa, "Also Eli",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Ja, ja", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "Also Stella, wie mir Lessy berichtete seid ihr, äh du noch sehr unerfahren in dieser Welt.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Würde ich zwar nicht sagen, aber eventuell schon");
    await ƒS.Speech.tell(characters.elidibus, "Alles kann ich dir zwar vielleicht nicht zeigen, aber ein wenig kenne ich", true, "Elidibus");
    await ƒS.Speech.tell(characters.elidibus, "Wenn du willst, begleite ich dich gerne auf deiner nächsten reise", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "klar, warum nicht.", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Klasse dann lass uns aufbrechen.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Was jetzt sofort?", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Du willst doch alles sehen, Zeit ist ein Luxus den wir uns nicht mehr erlauben können.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Ou-Okay dann gehen wir?", true, "stella");
    await ƒS.Speech.tell(characters.elidibus, "Nach dir, meine junge Abenteurerin.", true, "Elidibus");
    await ƒS.Speech.tell(characters.stella, "Warte eins noch.", true, "stella");
    await ƒS.Speech.tell(characters.stella, " " + dataForSave.nameBarkeeper + " " + " Es war mir ein Freude dich kennen lernen zu dürfen, dich natürlich auch Alessa. Bis zum nächsten Mal!", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "Ich verlass mich drauf.",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Okay, dann tschau. Ich komm so oft vorbei wie ich es schaffe", true, "stella");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ab und zu reicht und jetzt geh, ich sehe doch schon wie du auf heißen Kohlen sitzt.", true, "spieler");
    await ƒS.Speech.tell(characters.stella, "Wieso sollte man auf-", true, "stella");
    await ƒS.Speech.tell(characters.alessa, "das erzählt dir Elidibus auf euren reisen und jetzt ab.",true, "alessa");
    await ƒS.Speech.tell(characters.stella, "Okay okay, beeeeeeeyyy", true, "stella"  );
    await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, MoreLeftToLeave());
    await ƒS.Speech.tell(characters.elidibus, "Danke dir Lessy.", true, "Elidibus");
    await ƒS.Speech.tell(characters.alessa, "Pass auf sie auf",true, "alessa");
    await ƒS.Speech.tell(characters.elidibus, "Werde ich.", true, "Elidibus");
    await ƒS.Character.animate(characters.elidibus, characters.elidibus.pose.normal, RightExtremToLeave());
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Also die beiden sind ja schon süß, aber irgendwie war das jetzt sehr schnell oder nicht?", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Leider ja, aber dir ist Eli ja auch nicht die ganze Zeit auf deinen Füßen rumgetanzt.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Au das stelle ich mir schmerzhaft vor", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "War es, aber ich hoffe das es dass Wert war.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Bestimmt, das wird schon mit den beiden", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "ach du hast ja keine ahnung.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was hat es eigentlich mit dieser Melodie auf sich?", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Das ist eine lange Geschichte, die ich dir gerne ein ander Mal erzähle, wenn wir mehr Zeit haben",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ach wir sehen uns also noch öfter?", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Nur falls du dich als Rätselkönig erwiesen hast",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube das habe ich mitlerweile.", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Das wird sich noch Zeigen.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Was steht jetzt eigentlich bei dir an?", true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Gleich, wir müssen auf unser timing achten.",true, "alessa");
    await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Timing für was?" , true, "spieler");
    await ƒS.Speech.tell(characters.alessa, "Einen dramatischen auftritt, oder eher abschied.",true, "alessa");
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.Sound.fade(sound.tavern, 0,2);
    ƒS.Character.hide(characters.alessa);
    await ƒS.Location.show(locations.blackout);
    ƒS.update(2);
    ƒS.Sound.play(sound.living, 1.2,true);
    await ƒS.Character.show(characters.StellaAndElidibus, characters.StellaAndElidibus.pose.normal, ƒS.positionPercent(50, 100));
    ƒS.update(5);
    await ƒS.Speech.tell(characters.narrator, "Beende die Geschichte, wann immer du dich bereit dazu fühlst.");
    await ƒS.Speech.tell(characters.narrator, "Bist du dir sicher?");
    await ƒS.Speech.tell(characters.narrator, "Danke fürs Spielen und bis zu der nächsten random Bar, in der man dich begrüßt.");
    ƒS.Sound.fade(sound.living, 0,2);
    


    // gehen zur Tür und die beiden sehen wie sie lachend tränend singen      
    if(dataForSave.secretEndingPartOne && dataForSave.secretEndingPartTwo == true){
      ƒS.Character.hide(characters.StellaAndElidibus);
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.update(2);
      return "Alessa";
    }
    else {
      ƒS.Character.hide(characters.StellaAndElidibus);
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.update(2);
      return "end";}
    }



  }
