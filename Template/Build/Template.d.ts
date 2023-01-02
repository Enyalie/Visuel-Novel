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
    let sound: {
        drop: string;
    };
    let locations: {
        citySteampunk: {
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
    };
    let dataForSave: {
        nameBarkeeper: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstElidibus(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstStella(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstAlessa(): ƒS.SceneReturn;
}
