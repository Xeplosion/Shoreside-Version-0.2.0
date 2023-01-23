//tile constants
const tileSize = 16;
const displaySize = 32;
//tile handler
export class tiles {
    screenWidth: number; screenHeight: number; 
    seed: number;
    tiles: any[];
    constructor (screenWidth: number, screenHeight: number, seed: number) {
        //set setup variables
        this.screenWidth = screenWidth; this.screenHeight = screenHeight;
        this.seed = seed;
        //create tile objects to fill the screen
        this.createTiles();
    }
    createTiles () {
        this.tiles = [];
        //creates tile classes using screen dimensions
        for (let x = 0; x < Math.ceil((this.screenWidth+displaySize)/displaySize); x++) {
            for (let y = 0; y < Math.ceil((this.screenHeight+displaySize)/displaySize); y++) { 
                this.tiles.push(new tile(x*displaySize, y*displaySize));
            }
        }
    }
    resizeScreen (screenWidth: number, screenHeight: number) {
        this.screenWidth = screenWidth; this.screenHeight = screenHeight;
    }
    moveTiles (changeX, changeY) {
        //loops throught tile array to move tiles
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].moveTile(changeX, changeY);
        }
    }
    drawTiles () {
        //loops through tile array to draw tiles
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].drawTile();
        }
    }
}


//tile object
class tile {
    tileX: number; tileY: number;
    constructor (tileX: number, tileY: number) {
        this.tileX = tileX; this.tileY = tileY;
    }
    drawTile () {

    }
    loopTile (x: boolean, y: boolean, dir: string) {

    }
    moveTile (changeX, changeY) {

    }
}