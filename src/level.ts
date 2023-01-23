//level logic
export class levelLogic {
    tempSeed: string;
    seed: number;
    cameraX: number; cameraY: number;
    nums: string;
    constructor (seed: string) {
        //converts the input seed into a string of numbers
        this.nums = "0123456789";
        this.tempSeed = "";
        for (let i = 0; i < seed.length; i++) {
            if (!this.nums.includes(seed[i])) {
                this.tempSeed = this.tempSeed + seed[i].charCodeAt(0);
            } else {
                this.tempSeed = this.tempSeed + seed[i];
            }
        }
        this.seed = (Math.sin(+this.tempSeed)*1000000)&1000;

    }
    //retrieves raw unproccessed level data
    retrieveLevelData () {
    }
    //decompresses raw level data
    decompressLevelData () {
    }
    //compresses level data
    compressLevelData () {
    }
    //saves level data to JSON save file
    saveLaveData () {
    }
}

//load chunks
class chunkLoader {
    seed: number;
    noise: noiseGenerator;
    constructor (seed: number) {
        this.seed = seed;
        this.noise = new noiseGenerator (this.seed);
    }
    //unloads selected chunks
    unloadChunks (chunks) {

    }
    //loads a selected chunk
    loadChunk (chunkX: number, chunkY: number) {

    }
    //loads existing chunk data
    retrieveChunkData (chunkX: number, chunkY: number) {

    }
    //generates new chunk data
    generateChunkData (chunkX: number, chunkY: number) {

    }
    generateTerrain (chunkX: number, chunkY: number) {
        let n = [];
        for (let x = 0; x < chunkSize; x++) {
            for (let y = 0; y < chunkSize; y++) {
                let temp = this.noise.noise2D ((chunkX*chunkSize+x)*0.01, (chunkY*chunkSize+y)*0.01);
                temp += 1.0;
                temp *= 0.5;
                n.push (temp);
            }
        } 
        return n;
    }
    generateMoistureMap (chunkX: number, chunkY: number) {
    }
    generateHeatmap (chunkX: number, chunkY: number) {
    }
    generateVegitationMap (chunkX: number, chunkY: number) {  
    }
    generateStructureMap (chunkX: number, chunkY: number) { 
    }
    generateCave (chunkX: number, chunkY: number) { 
    }
    generateOres (chunkX: number, chunkY: number) {
    }
}

//Generation constants
const chunkSize = 8;
//noise functions
class noiseGenerator {
    seed: number;
    P: any[];
    constructor (seed: number) {
        this.seed = seed;
        //create vector permutations for Perlin noise
        this.P = this.makePermutation();
    }
    //returns the height value of the desired position
    getConstantVector (v: number) {
        //v is the value from the permutation table
        let h = v & 3;
        if(h == 0)
            return new Vector2(1.0, 1.0);
        else if(h == 1)
            return new Vector2(-1.0, 1.0);
        else if(h == 2)
            return new Vector2(-1.0, -1.0);
        else
            return new Vector2(1.0, -1.0);
    }
    //generates the pixel data using vectors
    noise2D (x: number, y: number) {
        let X = Math.floor(x) & 255;
        let Y = Math.floor(y) & 255;
    
        let xf = x-Math.floor(x);
        let yf = y-Math.floor(y);
    
        let topRight = new Vector2(xf-1.0, yf-1.0);
        let topLeft = new Vector2(xf, yf-1.0);
        let bottomRight = new Vector2(xf-1.0, yf);
        let bottomLeft = new Vector2(xf, yf);
        
        //Select a value in the array for each of the 4 corners
        let valueTopRight = this.P[this.P[X+1]+Y+1];
        let valueTopLeft = this.P[this.P[X]+Y+1];
        let valueBottomRight = this.P[this.P[X+1]+Y];
        let valueBottomLeft = this.P[this.P[X]+Y];
        
        let dotTopRight = topRight.dot(this.getConstantVector(valueTopRight));
        let dotTopLeft = topLeft.dot(this.getConstantVector(valueTopLeft));
        let dotBottomRight = bottomRight.dot(this.getConstantVector(valueBottomRight));
        let dotBottomLeft = bottomLeft.dot(this.getConstantVector(valueBottomLeft));
        
        let u = this.fade(xf);
        let v = this.fade(yf);
        
        return this.lerp(u,
            this.lerp(v, dotBottomLeft, dotTopLeft),
            this.lerp(v, dotBottomRight, dotTopRight)
        );
    }
    //fades noise vector
    fade (t: number) {
        return ((6*t - 15)*t + 10)*t*t*t;
    }
    //linear interpolation
    lerp (t: number, a1: number, a2:number) {
        return a1 + t*(a2-a1);
    }
    //creates an array of 256 values for Perlin noise permutations
    makePermutation () {
        let P = [];
        for(let i = 0; i < 256; i++){
            P.push(i);
        }
        this.shuffle(P);
        for(let i = 0; i < 256; i++){
            P.push(P[i]);
        }
        return P;
    }
    //shuffles Perlin noise permutations
    shuffle (tab) {
        for(let e = tab.length-1; e > 0; e--){
            let x = Math.sin(this.seed++) * 10000;
            let index = Math.floor((x - Math.floor(x)) * (e - 1)), temp  = tab[e];
            tab[e] = tab[index];
            tab[index] = temp;
        }
    }
}

//returns a vector of Perlin noise
class Vector2 {
    x: number; y: number;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    dot (other) {
        return this.x*other.x + this.y*other.y;
    }
}

