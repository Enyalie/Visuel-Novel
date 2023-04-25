namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
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

  let gameMenu: ƒS.Menu;
  //open entspricht Menü ist open und false zu
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case ingameMenubuttosn.save:
        await ƒS.Progress.save();
        break;
      case ingameMenubuttosn.load:
        await ƒS.Progress.load();
        break;
      case ingameMenubuttosn.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  //Menu Shortcuts
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
  export let sound = {
    //themes

    //SFX
    drop: "sounddatei pfad!"

    //Character text generating sound
  };

  export let locations = {
    citySteampunk: {
      name: "citySteampunk",
      background: "Images/Bckground/d810e64a496e7465e3c6312b65946c4b.jpg"

    },
    Sandstrand: {
      name: "Strand",

      background: "Images/Bckground/nightsky.jpg"
    }
  };

  export let characters = {

    narrator: {
      name: "Narrator"
    },
    barkeeper: {
      name: ""
    },

    stella: {
      name: "Stella",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Stella.jpg"
      }
    },

    alessaButWithoutName: {
      name: "unbekannter Pestdoktor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: ""
      }
    },

    alessa: {
      name: "Alessa",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Alessa.PNG"
      }
    },

    elidibusButWithoutName: {
      name: "unbekannter Jäger",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: ""
      }
    },

    elidibus: {
      name: "Elidibus",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: ""
      }
    },

    Ira:{
      name: "Ira",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/DancingIraleft.PNG",
        right: "Images/Charakter/DancingIraright.PNG"
      }
    }
  };

  




  //*data will be safed (game progress)*//
  export let dataForSave = {
    nameBarkeeper: "",
    variableKristalhöhle: false,
    variableRätselsceneAlessa1: false

  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(ingameMenubuttosn, buttonFunctionalities, "gameMenuCSSClass");
    // ****SCENE HIERACHY!!!!!!!
    let scenes: ƒS.Scenes = [
      { scene: IXDPrototype, name: "Stella and Alessa seeing each other" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}