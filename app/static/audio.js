// Set up audio objects for the main ringing_room script

// the towerbell audio object
export const tower = new Howl({
  "src": [
    "static/audio/tower.ogg",
    "static/audio/tower.m4a",
    "static/audio/tower.mp3",
    "static/audio/tower.ac3"
  ],
  "sprite": {
    "0": [
      17000,
      1503.424036281178
    ],
    "1": [
      20000,
      1503.945578231292
    ],
    "2": [
      23000,
      1504.0816326530617
    ],
    "3": [
      29000,
      1506.6893424036286
    ],
    "4": [
      32000,
      1501.5419501133779
    ],
    "5": [
      35000,
      1504.5351473922892
    ],
    "6": [
      38000,
      1509.3197278911532
    ],
    "7": [
      41000,
      1503.968253968253
    ],
    "8": [
      44000,
      1506.6666666666677
    ],
    "9": [
      47000,
      1498.231292517005
    ],
    "That's all": [
      0,
      654.6938775510204
    ],
    "Bob": [
      2000,
      396.8480725623582
    ],
    "Go": [
      4000,
      1009.773242630386
    ],
    "Look to": [
      7000,
      3155.2607709750564
    ],
    "Single": [
      12000,
      582.8798185941047
    ],
    "Stand next": [
      14000,
      1228.9342403628111
    ],
    "2sharp": [
      26000,
      1506.2131519274367
    ],
    "E": [
      50000,
      1503.2653061224507
    ],
    "T": [
      53000,
      1503.015873015876
    ],
    "e1": [
      56000,
      1503.9455782312957
    ],
    "e2": [
      59000,
      1504.0816326530617
    ],
    "e3": [
      62000,
      1506.6893424036252
    ],
    "e4": [
      65000,
      1501.5419501133779
    ]
  }
});

// the handbell audio object
export const hand = new Howl({
   src: [
       "static/audio/hand.ogg",
       "static/audio/hand.m4a",
       "static/audio/hand.mp3",
       "static/audio/hand.ac3"
   ],
   volume: 0.2,
  "sprite": {
    "That's all": [
      0,
      654.6938775510204
    ],
    "Bob": [
      2000,
      396.8480725623582
    ],
    "Go": [
      4000,
      1009.773242630386
    ],
    "Look to": [
      7000,
      3155.2607709750564
    ],
    "Single": [
      12000,
      582.8798185941047
    ],
    "Stand next": [
      14000,
      1228.9342403628111
    ],
    "1": [
      17000,
      1070.272108843536
    ],
    "0": [
      20000,
      1411.2244897959201
    ],
    "E": [
      23000,
      1453.2199546485244
    ],
    "T": [
      26000,
      1377.2335600907013
    ],
    "A": [
      29000,
      1392.4716553287979
    ],
    "B": [
      32000,
      1386.1451247165562
    ],
    "C": [
      35000,
      1389.5464852607731
    ],
    "D": [
      38000,
      1412.086167800453
    ],
    "2": [
      41000,
      1247.6417233560114
    ],
    "3": [
      44000,
      1290.7029478458014
    ],
    "4": [
      47000,
      1376.3265306122462
    ],
    "5": [
      50000,
      1466.3492063492072
    ],
    "6f": [
      53000,
      1421.609977324266
    ],
    "6": [
      56000,
      1437.0975056689374
    ],
    "7": [
      59000,
      1451.7233560090688
    ],
    "8": [
      62000,
      1471.337868480724
    ],
    "9": [
      65000,
      1438.2312925170027
    ]
  }
});

// What sounds do you play on different numbers of bells? (Allows for ringing the front 8)
export const bell_mappings = {
    'Tower': {
        4: ['5', '6', '7', '8'],
        5: ['4', '5', '6', '7', '8'],
        6: ['3', '4', '5', '6', '7', '8'],
        8: ['1', '2sharp', '3', '4', '5', '6', '7', '8'],
        10: ['3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T'],
        12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T'],
        14: ['e3', 'e4', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T'],
        16: ['e1', 'e2', 'e3', 'e4', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T']
    },
    'Hand': {
        4: ['9','0','E','T'],
        5: ['8','9','0','E','T'],
        6: ['7', '8', '9', '0', 'E', 'T'],
        8: ['5', '6', '7', '8', '9', '0', 'E', 'T'],
        10: ['3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T'],
        12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'E', 'T'],
        14: ['3', '4', '5', '6f', '7', '8', '9', '0', 'E', 'T', 'A', 'B', 'C', 'D'],
        16: ['1', '2', '3', '4', '5', '6f', '7', '8', '9', '0', 'E', 'T', 'A', 'B', 'C', 'D'],

    }
}
