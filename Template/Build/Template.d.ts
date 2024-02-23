declare namespace Template {
    function endScene(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duraion: number;
            alpha: string;
            edge: number;
        };
    };
    function middleToLeft(): ƒS.AnimationDefinition;
    function middleToLeave(): ƒS.AnimationDefinition;
    function middeToLLeaveFast(): ƒS.AnimationDefinition;
    function middeToLLeaveSlow(): ƒS.AnimationDefinition;
    function leftToLLeave(): ƒS.AnimationDefinition;
    function leftToLLeaveSlow(): ƒS.AnimationDefinition;
    function rightToLLeaveNormal(): ƒS.AnimationDefinition;
    function leftToLLeaveNormal(): ƒS.AnimationDefinition;
    function enterToMiddle(): ƒS.AnimationDefinition;
    function enterToMiddleslow(): ƒS.AnimationDefinition;
    function enterToMiddleFast(): ƒS.AnimationDefinition;
    function enterToRight(): ƒS.AnimationDefinition;
    function rightToMiddle(): ƒS.AnimationDefinition;
    function leftToMoreLeft(): ƒS.AnimationDefinition;
    function MoreLeftToLeave(): ƒS.AnimationDefinition;
    function enterToRightExtrem(): ƒS.AnimationDefinition;
    function RightExtremToLeave(): ƒS.AnimationDefinition;
    let sound: {
        tavern: string;
        alessa: string;
        fragment: string;
        soldir: string;
        living: string;
        fall: string;
        drink: string;
        searching: string;
        footstep: string;
        drag: string;
        pour: string;
    };
    let locations: {
        tavernDay: {
            name: string;
            background: string;
        };
        tavernSunset: {
            name: string;
            background: string;
        };
        tavernNight: {
            name: string;
            background: string;
        };
        blackout: {
            name: string;
            background: string;
        };
        newFriends: {
            name: string;
            background: string;
        };
        unfinished: {
            name: string;
            background: string;
        };
        end: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        barkeeper: {
            name: string;
        };
        stella: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        alessaButWithoutName: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        alessa: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                sectret: string;
            };
        };
        elidibusButWithoutName: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        elidibus: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        StellaAndElidibus: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let dataForSave: {
        nameBarkeeper: string;
        entscheidungEinsamerberg: boolean;
        entscheidungMeer: boolean;
        entscheidungKristalhöhle: boolean;
        variableKristalhöhle: boolean;
        variableRätselsceneAlessa1: boolean;
        secretEndingPartOne: boolean;
        secretEndingPartTwo: boolean;
        meterBarAlessa: boolean;
        alessaScore: number;
    };
}
declare namespace Template {
    function firstAlessa(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstElidibus(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstStella(): ƒS.SceneReturn;
}
declare namespace Template {
    function fivedStella(): ƒS.SceneReturn;
}
declare namespace Template {
    function fourthStellawithAlessa(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondAlessa(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondElidibus(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondEllidibusDestiny(): ƒS.SceneReturn;
}
declare namespace Template {
    function secretEnding(): ƒS.SceneReturn;
}
declare namespace Template {
    function thirdStella(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondStellaEinsamerberg(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondStellaKristalhöhle(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondStellaMeer(): ƒS.SceneReturn;
}
