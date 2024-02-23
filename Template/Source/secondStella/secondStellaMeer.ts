namespace Template {
    export async function secondStellaMeer(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene starting");


        console.log("FudgeStory Template  second Scene Stella Meer starting");

        console.log("second Scene Stella starting");
        ƒS.Sound.play(sound.tavern, 1.2,true);
        await ƒS.Location.show(locations.tavernSunset);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await ƒS.update(2);
        await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(200, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, enterToMiddle());
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Oh du bist wirklich zurückgekommen", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Sagte ich doch", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "...", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "...", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "...", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "...", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "...", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Jetzt spann mich schon nicht so auf die Folter", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ich und auf die Folterspannen", true, "stella");
        await ƒS.Speech.tell(characters.stella, "niemals", true, "stella");
        await ƒS.Speech.tell(characters.stella, "aber joa, es war ganz nett ", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "ou", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "gut vielleicht war ganz nett, auch ein wenig Untertrieben", true, "stella");
        await ƒS.Speech.tell(characters.stella, "eventuell", true, "stella");
        await ƒS.Speech.tell(characters.stella, "also wirklich nur ganz eventuell", true, "stella");
        await ƒS.Speech.tell(characters.stella, " war es", true, "stella");
        await ƒS.Speech.tell(characters.stella, "ABSOLUT UNGLAUBLICH", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Deine BEschreibung, des Sonnenaufgangs, 1 zu 1 Perfekt", true, "stella");
        await ƒS.Speech.tell(characters.stella, "„ Und das Rauschen des Meers und einfach dieser ganze Anblick ich weiß gar nicht wo ich anfangen soll", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Stella immer mit der Ruhe, ich lauf dir schon nicht weg", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ja aber, wo fange ich nur an", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Oh NATÜRLICH", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Also ich bin auf so eine Insel herausgefahren und dort traf ich 2 Jungs, einer von ihnen hieß So…So….Sora genau. Auf jeden Fall hat der mir total viel von seinen Abenteuern erzählt, er war einfach im reich der Dunkelheit kannst du das glauben", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Aber auch im reich des lichtes und dem der Träume und dem des Nichts und dem von Chicago und irgendwelche anderen Welten. Ein paar davon waren auch Unterwasser, andere wieder nicht und irgendwas war da doch mit Häusern, die auf ihn geschmissen wurden und.", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Okay eventuell, bekomme ich es nicht mehr ganz zusammen", true, "stella");
        await ƒS.Speech.tell(characters.stella, "ist aber auch egal", true, "stella");
        await ƒS.Speech.tell(characters.stella, "DEEEEEEENNNN", true, "stella"),
        await ƒS.Speech.tell(characters.narrator, "Stella übergibt dir eine Sternenförmigen Frucht")
            await ƒS.Speech.tell(characters.stella, "Ich bekam die von diesem Jungen und auch wenn ich nach was anderem gesucht habe, wollte ich ein wenig Strand zu einem Griesgrämigen Barkeeper bringen, der nicht mehr den Ruf der Welt hört.", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Danke dir Stella, eventuell sage ich dir sogar eines Tages, was es mit dieser Frucht auf sich hat", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Wie die Frucht hat ein Geheimnis, komm schon, spann mich jetzt nicht auf die Folter", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Naa ich muss doch sicher gehen, das du wiederkommst", true, "spieler");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "vor allem hast du ja auch ein Geheimniss vor mir, raus mit der Sprache, du gingst ja nicht nur zum Meer, damit du mir ein Souvenier mitbringen kannst", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "Ertappt, Naja", true, "stella");
        await ƒS.Speech.tell(characters.stella, "du sagtest man wird irgendwann sesshaft, ich will das nicht glauben. Vielleicht kannst oder willst du nicht mehr an all die Wunderbaren Orte aufmachen. Doch ich werde es. Bis. Bis zu meinem letzten Atemzug. Ich muss einfach", true, "stella");
        await ƒS.Speech.tell(characters.stella, "Und eventuell bringe ich dir ab und an was mit, um dich daran zu Erinnern", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Ich glaube du hast recht. Wenn du jemals durch die zeit reist, erzähl das doch meinem Jungen ich", true, "spieler");
        await ƒS.Speech.tell(characters.stella, "wird gemacht", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Weißt du denn schon, wohin es als nächstes gehen soll?");
        await ƒS.Speech.tell(characters.stella, "noch nicht so ganz", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "was sagst du dann zu einem Sternenfest?");
        await ƒS.Speech.tell(characters.stella, "Ich würde sagen wo", true, "stella");
        await ƒS.Speech.tell(dataForSave.nameBarkeeper, "Im benachbarten Königreich wirst du es finden und komm danach doch gerne wieder und erzähl einem Griesgrämigen Barkeeper wie du es fandest");
        await ƒS.Speech.tell(characters.narrator, "Stella Zwinkert dir zu und verlässt die Bar");
        await ƒS.Character.animate(characters.stella, characters.stella.pose.normal, middleToLeave());
        ƒS.update();
        await ƒS.Character.hide(characters.stella);
        ƒS.update();
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.tavern, 0, 2);
        await ƒS.Location.show(locations.blackout);
        await ƒS.update(2);
    





    }
}