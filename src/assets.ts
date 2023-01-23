import { ImageSource, Sound, Loader } from 'excalibur';
//import OST_100 from './assets/audio/music/OST_100.mp3';
/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    //music tracks
    OST_100: new Sound("./assets/audio/music/OST_100.mp3", "./assets/audio/music/OST_100.wav"),
    OST_101: new Sound("./assets/audio/music/OST_101.mp3", "./assets/audio/music/OST_101.wav"),
    OST_102: new Sound("./assets/audio/music/OST_102.mp3", "./assets/audio/music/OST_102.wav"),
    OST_103: new Sound("./assets/audio/music/OST_103.mp3", "./assets/audio/music/OST_103.wav"),
    OST_104: new Sound("./assets/audio/music/OST_104.mp3", "./assets/audio/music/OST_104.wav"),
    OST_105: new Sound("./assets/audio/music/OST_105.mp3", "./assets/audio/music/OST_105.wav"),
    OST_106: new Sound("./assets/audio/music/OST_106.mp3", "./assets/audio/music/OST_106.wav"),
    OST_107: new Sound("./assets/audio/music/OST_107.mp3", "./assets/audio/music/OST_107.wav"),
    OST_108: new Sound("./assets/audio/music/OST_108.mp3", "./assets/audio/music/OST_108.wav"),
    OST_109: new Sound("./assets/audio/music/OST_109.mp3", "./assets/audio/music/OST_109.wav"),
    OST_110: new Sound("./assets/audio/music/OST_110.mp3", "./assets/audio/music/OST_110.wav"),
    OST_111: new Sound("./assets/audio/music/OST_111.mp3", "./assets/audio/music/OST_111.wav"),
    OST_112: new Sound("./assets/audio/music/OST_112.mp3", "./assets/audio/music/OST_112.wav"),
    OST_113: new Sound("./assets/audio/music/OST_113.mp3", "./assets/audio/music/OST_113.wav"),
    OST_114: new Sound("./assets/audio/music/OST_114.mp3", "./assets/audio/music/OST_114.wav"),
    OST_115: new Sound("./assets/audio/music/OST_115.mp3", "./assets/audio/music/OST_115.wav"),
    OST_116: new Sound("./assets/audio/music/OST_116.mp3", "./assets/audio/music/OST_116.wav"),
    OST_117: new Sound("./assets/audio/music/OST_117.mp3", "./assets/audio/music/OST_117.wav"),
    OST_118: new Sound("./assets/audio/music/OST_118.mp3", "./assets/audio/music/OST_118.wav"),
    OST_119: new Sound("./assets/audio/music/OST_119.mp3", "./assets/audio/music/OST_119.wav"),
    OST_120: new Sound("./assets/audio/music/OST_120.mp3", "./assets/audio/music/OST_120.wav"),
    OST_121: new Sound("./assets/audio/music/OST_121.mp3", "./assets/audio/music/OST_121.wav"),
    OST_122: new Sound("./assets/audio/music/OST_122.mp3", "./assets/audio/music/OST_122.wav"),
    OST_123: new Sound("./assets/audio/music/OST_123.mp3", "./assets/audio/music/OST_123.wav"),
    OST_124: new Sound("./assets/audio/music/OST_124.mp3", "./assets/audio/music/OST_124.wav"),
    OST_125: new Sound("./assets/audio/music/OST_125.mp3", "./assets/audio/music/OST_125.wav"),
    OST_126: new Sound("./assets/audio/music/OST_126.mp3", "./assets/audio/music/OST_126.wav"),
    OST_127: new Sound("./assets/audio/music/OST_127.mp3", "./assets/audio/music/OST_127.wav"),
    OST_128: new Sound("./assets/audio/music/OST_128.mp3", "./assets/audio/music/OST_128.wav"),
    OST_129: new Sound("./assets/audio/music/OST_129.mp3", "./assets/audio/music/OST_129.wav"),
    OST_130: new Sound("./assets/audio/music/OST_130.mp3", "./assets/audio/music/OST_130.wav"),
    OST_131: new Sound("./assets/audio/music/OST_131.mp3", "./assets/audio/music/OST_131.wav"),
    OST_132: new Sound("./assets/audio/music/OST_130.mp3", "./assets/audio/music/OST_132.wav"),
    OST_133: new Sound("./assets/audio/music/OST_132.mp3", "./assets/audio/music/OST_133.wav"),
    OST_136: new Sound("./assets/audio/music/OST_133.mp3", "./assets/audio/music/OST_136.wav"),
    OST_138: new Sound("./assets/audio/music/OST_136.mp3", "./assets/audio/music/OST_138.wav"),
    OST_143: new Sound("./assets/audio/music/OST_143.mp3", "./assets/audio/music/OST_143.wav"),
    OST_144: new Sound("./assets/audio/music/OST_144.mp3", "./assets/audio/music/OST_144.wav"),

    //ambience noises
    ambience_1: new Sound("./assets/audio/ambience/ambience_1-waves.mp3", "./assets/audio/ambience/ambience_1-waves.wav"),
    ambience_2: new Sound("./assets/audio/ambience/ambience_2-cave.mp3", "./assets/audio/ambience/ambience_1-cave.wav"),

    //nav sounds
    nav_1: new Sound("./assets/audio/nav/nav_1.mp3", "./assets/audio/nav/nav_1.wav"),
    nav_2: new Sound("./assets/audio/nav/nav_2.mp3", "./assets/audio/nav/nav_2.wav"),
    nav_3: new Sound("./assets/audio/nav/nav_3.mp3", "./assets/audio/nav/nav_3.wav"),
    nav_4: new Sound("./assets/audio/nav/nav_4.mp3", "./assets/audio/nav/nav_4.wav"),
    
    
}


const Loaders = {
    loadMusic: new Loader ([
        Resources.OST_100,
        Resources.OST_102,
        Resources.OST_103,
        Resources.OST_104,
        Resources.OST_105,
        Resources.OST_106,
        Resources.OST_107,
        Resources.OST_108,
        Resources.OST_109,
        Resources.OST_110,
        Resources.OST_111,
        Resources.OST_112,
        Resources.OST_113,
        Resources.OST_114,
        Resources.OST_115,
        Resources.OST_116,
        Resources.OST_117,
        Resources.OST_118,
        Resources.OST_119,
        Resources.OST_120,
        Resources.OST_121,
        Resources.OST_122,
        Resources.OST_123,
        Resources.OST_124,
        Resources.OST_125,
        Resources.OST_126,
        Resources.OST_127,
        Resources.OST_128,
        Resources.OST_129,
        Resources.OST_130,
        Resources.OST_131,
        Resources.OST_132,
        Resources.OST_133,
        Resources.OST_136,
        Resources.OST_138,
        Resources.OST_143,
        Resources.OST_144
    ]),
    loadNavSounds: new Loader([
        Resources.nav_1,
        Resources.nav_2,
        Resources.nav_3,
        Resources.nav_4
    ]),
    loadAmbience: new Loader([
        Resources.ambience_1,
        Resources.ambience_2
    ])
}

export { Resources, Loaders }
