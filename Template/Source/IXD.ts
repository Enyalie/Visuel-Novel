namespace Template {
    export async function IXDPrototype(): ƒS.SceneReturn {
        console.log("FudgeStory IXDScene starting");


        console.log("FudgeStory IXD Scene Stella starting");

        console.log("Prototype IXD startking");

        await ƒS.Location.show(locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await ƒS.update(5);
        await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
        await ƒS.update();
        let IXDPrototype = {
            iPickleft: "left",
            iPickright: "right"

        };
        let IXDPrototypeStep1 = await ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep1) {
            case IXDPrototype.iPickleft:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.normal, ƒS.positionPercent(30,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.right, ƒS.positionPercent(70,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
        }
        await ƒS.Speech.tell(characters.stella, "Do you remember");
        let IXDPrototypeStep2 = await ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep2) {
            case IXDPrototype.iPickleft:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.normal, ƒS.positionPercent(30,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.right, ƒS.positionPercent(70,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
        }
        await ƒS.Speech.tell(characters.stella,"the time we danced");
        let IXDPrototypeStep3 = await ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep3) {
            case IXDPrototype.iPickleft:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.normal, ƒS.positionPercent(30,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.right, ƒS.positionPercent(70,100));
                break;
        }
        await ƒS.Speech.tell(characters.stella,"beneath stars");
        let IXDPrototypeStep4 = await ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep4) {
            case IXDPrototype.iPickleft:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.normal, ƒS.positionPercent(30,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.right, ƒS.positionPercent(70,100));
                break;
        }
        await ƒS.Speech.tell(characters.stella, "with nothing but");
        let IXDPrototypeStep5 = await ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep5) {
            case IXDPrototype.iPickleft:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.normal, ƒS.positionPercent(30,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await ƒS.update();
                await ƒS.Character.show(characters.Ira, characters.Ira.pose.right, ƒS.positionPercent(70,100));
                await ƒS.update();
                await ƒS.Character.hide(characters.Ira);
                break;
        }
        await ƒS.Speech.tell(characters.stella, "the Music of howling winds");



    }
}