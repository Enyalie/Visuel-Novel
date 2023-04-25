//last one
namespace Template {
    export async function fivedStella(): ƒS.SceneReturn {
      console.log("FudgeStory Fived Stella starting");
  
  
      console.log("FudgeStory Fived Scene Stella starting");
  
      console.log("Final Scene starting");
  
      await ƒS.Location.show(locations.citySteampunk);
      //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
      await ƒS.update(5);
      await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
      await ƒS.update(); 
      await ƒS.Speech.tell(characters.stella, "Hey Hey");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh du bist wieder da");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich hoffe das dir nichts passiert ist, du gingst letztes Mal so apprubt");
      await ƒS.Speech.tell(characters.stella, "Oh ja ja natürlich, ich musste, ähm brauchte nur etwas Zeit für ähm dinge");
      await ƒS.Speech.tell(characters.stella, "Tut mir leid ich will ungern darüber reden.");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Muss es nicht, dennoch freut es mich das du deinen Weg erneut in meine Tür gefunden hast");
      await ƒS.Speech.tell(characters.stella, "Etwas das ich hoffentlich noch viele Male tun werde");
      await ƒS.Speech.tell(characters.stella, "Aber sagt mir,");
      await ƒS.Speech.tell(characters.stella, "War Alessa Arg böse das ich gegangen bin, ich war keine 10 Schritte Entfernt da wollte ich umdrehen um ihr zu sagen das es nicht an ihr liegt nur, naja hätte ich mich so erklären müssen");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Keine Sorge Stella, Alessa war überhaupt nicth böse auf dich");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Dennoch wird sie sich bestimmt darüber freuen, wenn ihr, ihr das sagt");
      await ƒS.Speech.tell(characters.stella, "Sofern ich die chance dazu bekommen sollte");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh glaubt mir das werdet ihr");
      await ƒS.Speech.tell(characters.stella, "Wieso seid ihr euch dessen so sicher?");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Weil ein Barkeeper nun Mal seine Informationen hat, aber dies soll sie euch lieber selbst Erzählen");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Nun denn Stella, wohin werdet ihr eigentlich als nächstes reisen?");
      await ƒS.Speech.tell(characters.stella, "Ich bin mir nicht sicher, vielleicht laufe ich einfach los und schaue wohin mich meine Füße so tragen");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "So ganz ohne Ziel?");
      await ƒS.Speech.tell(characters.stella, "Auf der Reise wird sich bestimmt eines finden");
      await ƒS.Speech.tell(characters.stella, "Immerhin bin ich weit davon entfernt diese Welt bereits vollends erkundet zu haben");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie immer bewundere ich eure Abenteuerlust");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Und doch, so ganz alleine dort draußen habt ihr keine Angst?");
      await ƒS.Speech.tell(characters.stella, "Wieso sollte ich. Das schlimmste was mir passieren kann, ist das ich um mein Leben renne");
      await ƒS.Speech.tell(characters.alessa, "Und dabei hinfällst und dir das Bein brichst.");
      //Alessa zeigen
      await ƒS.Speech.tell(characters.alessa, "Du bist wahrlich naiv, alleine durch die Welt reisen.");
      await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Wie lange hast du unser Gespräch bereits belauscht.");
      await ƒS.Speech.tell(characters.alessa, "Lang genug um abermal einen Dramatischen auftritt hinzulegen");
      await ƒS.Speech.tell(characters.alessa, "Und lang genug um Stella davon zu bewahren etwas derart törrichtes zu machen ");
      await ƒS.Speech.tell(characters.stella, "Ich bin überhaupt nicht Naiv, bisher kam ich auch alleine immer sehr gut zurecht");
      await ƒS.Speech.tell(characters.alessa, "vermutlich schon, aber so alleine durch die Welt reisen ist doch auch furchtbar einsam. Möchtest du nicht lieber in Begleitung reise ");
      await ƒS.Speech.tell(characters.stella, "ist das etwa, ein angebot das du mitkommst");
      await ƒS.Speech.tell(characters.alessa, "Leider nicht, ich bin nicht so die große Abenteurerin. Aber");
      await ƒS.Speech.tell(characters.alessa, "Ich kenne da jemanden, den du vielleicht kennenlernen willst");
          }
}