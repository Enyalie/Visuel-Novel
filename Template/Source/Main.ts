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

  //Animations

  export function middleToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50,100) },
      end: { translation: ƒS.positionPercent(30, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function middleToLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function middeToLLeaveFast(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function middeToLLeaveSlow(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 4,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function leftToLLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function leftToLLeaveSlow(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function rightToLLeaveNormal(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function leftToLLeaveNormal(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function enterToMiddle(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200,100) },
      end: { translation: ƒS.positionPercent(50, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function enterToMiddleslow(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200,100) },
      end: { translation: ƒS.positionPercent(50, 100) },
      duration: 4,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function enterToMiddleFast(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200,100) },
      end: { translation: ƒS.positionPercent(50, 100) },
      duration: 0.8,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function enterToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200,100) },
      end: { translation: ƒS.positionPercent(70, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function rightToMiddle(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70,100) },
      end: { translation: ƒS.positionPercent(50, 100) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  //For 3 Characters
  export function leftToMoreLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30,100) },
      end: { translation: ƒS.positionPercent(20, 100) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function MoreLeftToLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function enterToRightExtrem(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200,100) },
      end: { translation: ƒS.positionPercent(80, 100) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function RightExtremToLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80,100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  

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
    tavern: "Sounds/Music/Stella and Elidibus theme.wav",
    alessa: "Sounds/Music/alessa theme version.wav",
    fragment: "Sounds/Music/Stellla Fragment.wav",
    soldir: "Sounds/Music/soldir poet king piano.mp3",
    living: "Sounds/Music/the gift of living.wav",
    //SFX
    fall: "Sounds/Sounddesign/Impact,Wood,Skid,Hard 5.wav",
    drink: "Sounds/Sounddesign/Drinking Sound Effect.mp3",
    searching: "Sounds/Sounddesign/bag searching.mp3",
    footstep: "Sounds/Sounddesign/Footsteps.mp3",
    drag: "Sounds/Sounddesign/drag monster.mp3",
    pour: "Sounds/Sounddesign/pour.mp3"
  

    //Character text generating sound
  };

  export let locations = {
    tavernDay: {
      name: "Tavern daylight",
      background: "Images/Bckground/tavernbacground normal.jpg"
    },
    tavernSunset: {
      name: "Tavern sunset",
      background: "Images/Bckground/tavernbacground sunet.jpg"
    },
    tavernNight: {
      name: "Tavern Night",
      background: "Images/Bckground/tavernbacground night.jpg"
    },
    blackout: {
      name: "blackout",
      background: "Images/Bckground/black.jpg"
    },
    newFriends: {
      name: "newFriends",
      background: "Images/Bckground/BarScene.png"
    },
    unfinished: {
      name: "unfinished",
      background: "Images/Bckground/AlessaDoor.png"
    },
    end: {
      name:"endee",
      background: "Images/Bckground/ende.png"
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
        normal: "Images/Charakter/stella.png"
      }
    },

    alessaButWithoutName: {
      name: "unbekannter Pestdoktor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Alessa.PNG"
      }
    },

    alessa: {
      name: "Alessa",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Alessa.PNG",
        sectret: "Images/Charakter/Alessa without mask.png"
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
        normal: "Images/Charakter/Elidibuss.png"
      }
    },

    StellaAndElidibus: {
      name: "StellaAndElidibus",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Stella and Eli dancing.png"
      }
    }

   
  };

  




  //*data will be safed (game progress)*//
  export let dataForSave = {
    nameBarkeeper: "",
    entscheidungEinsamerberg: false,
    entscheidungMeer: false,
    entscheidungKristalhöhle: false,
    variableKristalhöhle: false,
    variableRätselsceneAlessa1: false,
    secretEndingPartOne:false,
    secretEndingPartTwo:false,
    meterBarAlessa: false,
    alessaScore: 0,
    

  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(ingameMenubuttosn, buttonFunctionalities, "gameMenuCSSClass");
    // ****SCENE HIERACHY!!!!!!!
    let scenes: ƒS.Scenes = [
      {scene: firstStella, name: "Das komische Mädchen" },
      {scene: firstAlessa, name: "Die mit den Krähen kommt"},
      

      {id: "Einsamerberg", scene:secondStellaEinsamerberg, name:"Eine unerwartete reise", next: "Der unfreundliche Krieger"},
      {id: "Meer", scene:secondStellaMeer, name:"Eine unerwartete reise", next: "Der unfreundliche Krieger"},
      {id: "Kristalhöhle", scene:secondStellaKristalhöhle, name:"Eine unerwartete reise", next: "Der unfreundliche Krieger"},
      {id: "Der unfreundliche Krieger", scene:firstElidibus, name: "Monsterjagd", next:"Der verlorene Mensch"},
      {id: "Der verlorene Mensch", scene:thirdStella, name: "Nachklang", next:"Hinter der Maske"},
      {id: "Hinter der Maske", scene:secondAlessa, name: "Eine Krähe unter Menschen"},

      {id: "HalloFremde", scene:fourthStellawithAlessa, name: "Wer bist du"},
      {id:"Versprechen", scene:secondEllidibusDestiny, name: "Alter Zeiten Willen", next: "Ich kenne dich."},
      {id: "AlterFreund", scene:secondElidibus, name: "lange nicht gesehen"},

      {id: "Ich kenne dich.", scene:fivedStella, name:"Melodie der Herzen"},

      {id:"Alessa", scene:secretEnding, name:"Mit schwarzen Fügeln"},

      {id:"end", scene:endScene, name:"the end"}




    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}