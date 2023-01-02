namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");


    console.log("FudgeStory Template Scene Stella starting");

    console.log("first Scene Stella starting");

    await ƒS.Location.show(locations.citySteampunk);
    //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
    await ƒS.update(5);
    await ƒS.Character.show(characters.stella, characters.stella.pose.normal, ƒS.positionPercent(0, 0));
    await ƒS.update();


  }
}

