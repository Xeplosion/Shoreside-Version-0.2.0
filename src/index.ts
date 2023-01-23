//TypeScript and Excalibur imports
import * as ex from 'excalibur';
import { levelLogic } from './level';
import { Resources, Loaders } from './assets';

//parameters for creating an Excalibur game engine
const shoreside = new ex.Engine({
    width: 960,
    height: 540,
    displayMode: ex.DisplayMode.FitScreen,
    pointerScope: ex.Input.PointerScope.Document,
    maxFps: 60
})

//gamescreen class
class gameScreen extends ex.Scene {
    public onInitialize(engine: ex.Engine) {
        this.fetchPlaterData()
    }
    public onDeactivate(_context: ex.SceneActivationContext) {
    
    }
    //fetches player data from the saveState
    fetchPlaterData() {

    }
    //loads a selected chunk
    loadChunk (x: number, y: number) {

    }
} 

//title screen with various buttons and options
class titleScreen extends ex.Scene {
    public onInitialize(engine: ex.Engine) {

    }
    public onDeactivate(_context: ex.SceneActivationContext) {

    }
}

//on game launch
shoreside.start().then(() => {
    //adds a game vieport
    shoreside.add("gameScreen", new gameScreen());


    shoreside.add("titleScreen", new titleScreen());
    shoreside.goToScene("titleScreen");
});