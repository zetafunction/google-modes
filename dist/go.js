(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^const(?![a-zA-Z¡-￿_0-9_])/, /^var(?![a-zA-Z¡-￿_0-9_])/, /^type(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^package(?![a-zA-Z¡-￿_0-9_])/, /^func(?![a-zA-Z¡-￿_0-9_])/, /^go(?![a-zA-Z¡-￿_0-9_])/, /^defer(?![a-zA-Z¡-￿_0-9_])/, /^return(?![a-zA-Z¡-￿_0-9_])/, /^break(?![a-zA-Z¡-￿_0-9_])/, /^continue(?![a-zA-Z¡-￿_0-9_])/, /^default(?![a-zA-Z¡-￿_0-9_])/, /^case(?![a-zA-Z¡-￿_0-9_])/, /^select(?![a-zA-Z¡-￿_0-9_])/, /^goto(?![a-zA-Z¡-￿_0-9_])/, /^fallthrough(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^if(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^switch(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^(?:\!|\+|\-|\*|\^|\&|\<\-)/, /^range(?![a-zA-Z¡-￿_0-9_])/, /^struct(?![a-zA-Z¡-￿_0-9_])/, /^interface(?![a-zA-Z¡-￿_0-9_])/, /^map(?![a-zA-Z¡-￿_0-9_])/, /^chan(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:0o|0O)[0-7]+|(?:0x|OX)[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?i?)/, /^(?:true|false|nil|iota)(?![a-zA-Z¡-￿_0-9_])/, /^make(?![a-zA-Z¡-￿_0-9_])/, /^(?:append|cap|close|complex|copy|delete|imag|len|new|panic|print|println|real|recover)(?![a-zA-Z¡-￿_0-9_])/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\&\^?|\-|\||\*|\^|\/|\<\<?|\>\>?|\%|\=)\=?|\<\-|\=|\:\=|\!\=)/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [1, ";", "\n"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:)/, /^(?:\.\.\.)?/, /^(?:\.\.\.|(?![\)\,]))/];
  var nodes = [
    [1, 4, 2],
    [/^[^]/, 0],
    [1, 6, 1],
    [3, "keyword", e[9], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[1], -1,
     3, "builtin", e[33], -1,
     3, "atom", e[32], -1,
     3, "builtin", e[34], -1,
     3, "operator", e[36], -1,
     3, "operator", e[25], -1,
     3, "operator", e[35], -1,
     3, "number", e[31], -1,
     2, 9, -1, {"name":"string","token":"string"},
     3, "variable", e[16], -1,
     2, 11, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    [/^[ \t]/, 4,
     2, 11, 4, {"name":"comment","token":"comment"},
     [0, /^(?=\n)/, [7, "skippableNewline"]], 5,
     0, -1],
    ["\n", 4],
    [/^[ \t]/, 6,
     2, 11, 6, {"name":"comment","token":"comment"},
     "\n", 6,
     0, 7],
    [2, 16, 8, {"name":"Statement"},
     0, -1],
    [/^[ \t]/, 8,
     2, 11, 8, {"name":"comment","token":"comment"},
     e[38], 8,
     0, 7],
    [/^(?:\'(?:\\.(?:(?!\').)*|.)\'|\"(?:\\.|(?!\").)*\")/, -1,
     "`", 10],
    [[0, /^(?!\`)/, /^[^]/], 10,
     "`", -1],
    [/^\/\*\*(?!\/)/, 12,
     "/*", 15,
     /^\/\/.*/, -1],
    [e[20], 13,
     0, 14],
    [0, 12,
     0, 12],
    [2, 54, 14, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 15,
     "*/", -1],
    [3, "keyword", e[0], 17,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 19,
     3, "keyword", e[3], 23,
     3, "keyword", e[4], 27,
     2, 65, -1, {"name":"IfStatement"},
     2, 87, -1, {"name":"SwitchStatement"},
     2, 97, -1, {"name":"ForStatement"},
     3, "keyword", e[5], 29,
     3, "keyword", e[6], 31,
     3, "keyword", e[7], 31,
     3, "keyword", e[8], 33,
     3, "keyword", e[9], 35,
     3, "keyword", e[10], 35,
     3, "keyword", e[11], 37,
     3, "keyword", e[12], 38,
     /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:(?!\=))/, 37,
     2, 107, -1, {"name":"Block"},
     3, "keyword", e[13], 41,
     3, "keyword", e[14], 43,
     3, "keyword", e[15], -1,
     3, "keyword", e[12], 45,
     1, 112, 49],
    [1, 4, 18],
    [1, 133, -1],
    [1, 4, 20],
    [2, 143, -1, {"name":"Set"},
     3, "def", e[16], 21],
    [1, 4, 22],
    [1, 148, -1],
    [1, 4, 24],
    [2, 184, -1, {"name":"Set"},
     ".", 25,
     3, "def", e[16], 25,
     0, 25],
    [1, 4, 26],
    [2, 9, -1, {"name":"string","token":"string"}],
    [1, 4, 28],
    [3, "variable", e[16], -1],
    [1, 4, 30],
    [2, 189, -1, {"name":"FunctionDecl"}],
    [1, 4, 32],
    [1, 112, -1],
    [1, 4, 34],
    [1, 205, -1],
    [1, 4, 36],
    [/^(?:[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*)?/, -1],
    [1, 4, 39],
    [1, 4, 40],
    [":", -1],
    [1, 205, 37],
    [1, 4, 42],
    [2, 107, -1, {"name":"Block"}],
    [1, 4, 44],
    [e[16], -1],
    [1, 4, 46],
    [2, 16, 47, {"name":"Statement"}],
    [1, 4, 48],
    [":", -1],
    [1, 4, 50],
    [",", 51,
     0, -1],
    [1, 4, 52],
    [1, 112, 53],
    [1, 4, 50],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 55,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 56,
     3, "tag", e[19], 63,
     "{", 57],
    [e[17], 55,
     3, "def", e[18], 63,
     "<", 58,
     0, 63],
    [e[17], 56,
     3, "type", e[18], 63,
     0, 63],
    [3, "tag", e[19], 59],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 60],
    [/^[\t ]*/, 61],
    [">", 63],
    [1, 211, 62],
    ["}", 63],
    [e[20], 64,
     0, -1],
    [0, 63,
     0, 63],
    [3, "keyword", e[21], 66],
    [1, 4, 67],
    [1, 215, 68],
    [1, 4, 69],
    [";", 70,
     0, 72],
    [1, 4, 71],
    [1, 215, 72],
    [1, 4, 73],
    [2, 107, 74, {"name":"Block"}],
    [1, 4, 75],
    [3, "keyword", e[22], 76,
     0, -1],
    [1, 4, 77],
    [3, "keyword", e[21], 78,
     0, 79],
    [1, 4, 80],
    [1, 4, 81],
    [1, 215, 82],
    [2, 107, 83, {"name":"Block"}],
    [1, 4, 84],
    [1, 4, 75],
    [";", 85,
     0, 79],
    [1, 4, 86],
    [1, 215, 79],
    [3, "keyword", e[23], 88],
    [1, 4, 89],
    [1, 215, 90,
     0, 94],
    [1, 4, 91],
    [";", 92,
     0, 94],
    [1, 4, 93],
    [1, 215, 94,
     0, 94],
    [1, 4, 95],
    [[7, "isTypeSwitch"], 96,
     2, 107, -1, {"name":"Block"}],
    [2, 229, -1, {"name":"TypeSwitchBlock"}],
    [3, "keyword", e[24], 98],
    [1, 4, 99],
    [1, 215, 100,
     0, 105],
    [1, 4, 101],
    [";", 102,
     0, 105],
    [1, 4, 103],
    [1, 215, 104,
     0, 104],
    [1, 4, 101],
    [1, 4, 106],
    [2, 107, -1, {"name":"Block"}],
    ["{", 108],
    [1, 4, 109],
    [1, 6, 110],
    [1, 4, 111],
    ["}", -1],
    [[5, 234], 113,
     0, 121],
    [3, "def", e[16], 114],
    [1, 4, 115],
    [",", 116,
     3, "operator", ":=", 117],
    [1, 4, 118],
    [1, 4, 119],
    [3, "def", e[16], 120],
    [1, 112, -1],
    [1, 4, 115],
    [3, "operator", e[25], 122,
     3, "keyword", e[26], 122,
     [0, [6, 240], [5, 241]], 123,
     1, 244, 124],
    [1, 4, 121],
    [1, 148, 125],
    [1, 4, 126],
    [1, 4, 127],
    [1, 266, 128,
     0, -1],
    [2, 275, 124, {"name":"LiteralBody"},
     "(", 129],
    [1, 4, 126],
    [1, 4, 130],
    [1, 112, 131],
    [1, 4, 132],
    [")", 124],
    [2, 280, -1, {"name":"Set"},
     3, "def", e[16], 134],
    [1, 4, 135],
    [",", 136,
     1, 148, 137,
     0, 137],
    [1, 4, 138],
    [1, 4, 139],
    [3, "def", e[16], 140],
    [3, "operator", "=", 141,
     0, -1],
    [1, 4, 135],
    [1, 4, 142],
    [1, 205, -1],
    ["(", 144],
    [1, 4, 145],
    [1, 285, 146],
    [1, 4, 147],
    [")", -1],
    ["[", 149,
     3, "keyword", e[27], 155,
     3, "keyword", e[28], 157,
     "*", 159,
     3, "keyword", e[5], 161,
     3, "keyword", e[29], 166,
     3, "operator", "<-", 174,
     3, "keyword", e[30], 175,
     "(", 178,
     0, 182],
    [1, 4, 150],
    [1, 112, 151,
     0, 151],
    [1, 4, 152],
    ["]", 153],
    [1, 4, 154],
    [1, 148, -1],
    [1, 4, 156],
    [2, 290, -1, {"name":"StructBody"}],
    [1, 4, 158],
    [2, 295, -1, {"name":"InterfaceBody"}],
    [1, 4, 160],
    [1, 148, -1],
    [1, 4, 162],
    [2, 300, 163, {"name":"ParamList"}],
    [1, 4, 164],
    [[5, 305], 165,
     1, 148, -1,
     0, -1],
    [2, 300, -1, {"name":"ParamList"}],
    [1, 4, 167],
    ["[", 168],
    [1, 4, 169],
    [1, 148, 170],
    [1, 4, 171],
    ["]", 172],
    [1, 4, 173],
    [1, 148, -1],
    [1, 4, 176],
    [1, 4, 177],
    [1, 148, -1],
    [3, "operator", "<-", 174,
     0, 174],
    [1, 4, 179],
    [1, 313, 180],
    [1, 4, 181],
    [")", -1],
    [3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*\./, 183,
     3, "type", e[16], -1],
    [1, 4, 182],
    ["(", 185],
    [1, 4, 186],
    [1, 319, 187],
    [1, 4, 188],
    [")", -1],
    ["(", 190,
     0, 196],
    [1, 4, 191],
    [3, "def", e[16], 192],
    [1, 4, 193],
    [1, 148, 194],
    [1, 4, 195],
    [")", 196],
    [1, 4, 197],
    [2, 324, 198, {"name":"funcName"},
     0, 198],
    [1, 4, 199],
    [2, 300, 200, {"name":"ParamList"}],
    [1, 4, 201],
    [[5, 305], 202,
     1, 148, 203,
     0, 203],
    [2, 300, 203, {"name":"ParamList"}],
    [1, 4, 204],
    [2, 107, -1, {"name":"Block"},
     0, -1],
    [1, 112, 206,
     0, -1],
    [1, 4, 207],
    [",", 208,
     0, -1],
    [1, 4, 209],
    [1, 112, 210,
     0, 210],
    [1, 4, 207],
    [3, "attribute", "{", 212,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 211,
     "\n", 213,
     0, -1],
    [1, 211, 214],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 211],
    [/^(?=\*\/)/, 211,
     3, "attribute", "}", 211],
    [[5, 234], 216,
     0, 224],
    [3, "def", e[16], 217],
    [1, 4, 218],
    [",", 219,
     3, "operator", ":=", 220],
    [1, 4, 221],
    [1, 4, 222],
    [3, "def", e[16], 223],
    [1, 215, -1],
    [1, 4, 218],
    [3, "operator", e[25], 225,
     3, "keyword", e[26], 225,
     1, 244, 226],
    [1, 4, 224],
    [1, 4, 227],
    [1, 325, 228,
     0, -1],
    [1, 4, 227],
    ["{", 230],
    [1, 4, 231],
    [1, 334, 232],
    [1, 4, 233],
    ["}", -1],
    [e[16], 235],
    [1, 4, 236],
    [",", 237,
     ":=", -1],
    [1, 4, 238],
    [e[16], 239],
    [1, 4, 236],
    [3, "keyword", e[5], -1],
    [1, 148, 242],
    [1, 4, 243],
    ["{", -1],
    [3, "number", e[31], -1,
     2, 9, -1, {"name":"string","token":"string"},
     3, "atom", e[32], -1,
     3, "keyword", e[5], 245,
     3, "builtin", e[33], 247,
     [5, 341], 249,
     3, "builtin", e[34], -1,
     3, "variable callee", e[37], -1,
     3, "variable", e[16], -1,
     2, 344, 256, {"name":"Bracketed"},
     "*", 264,
     2, 352, -1, {"name":"ParenExpr"}],
    [1, 4, 246],
    [2, 357, -1, {"name":"FunctionExpr"}],
    [1, 4, 248],
    [2, 363, -1, {"name":"TypeList"}],
    [1, 148, 250],
    [1, 4, 251],
    [2, 275, -1, {"name":"LiteralBody"},
     "(", 252],
    [1, 4, 253],
    [1, 112, 254],
    [1, 4, 255],
    [")", -1],
    [1, 4, 257],
    [1, 148, 258,
     0, 258],
    [1, 4, 259],
    [2, 275, -1, {"name":"LiteralBody"},
     "(", 260,
     0, -1],
    [1, 4, 261],
    [1, 112, 262],
    [1, 4, 263],
    [")", -1],
    [1, 4, 265],
    [1, 148, -1],
    [".(", 267,
     ".", 271,
     3, "operator", e[35], -1,
     3, "operator", e[36], 273,
     2, 372, -1, {"name":"ArgList"},
     2, 344, -1, {"name":"Bracketed"}],
    [1, 4, 268],
    [1, 148, 269],
    [1, 4, 270],
    [")", -1],
    [1, 4, 272],
    [3, "property callee", e[37], -1,
     3, "property", e[16], -1],
    [1, 4, 274],
    [1, 112, -1],
    ["{", 276],
    [1, 4, 277],
    [1, 379, 278],
    [1, 4, 279],
    ["}", -1],
    ["(", 281],
    [1, 4, 282],
    [1, 393, 283],
    [1, 4, 284],
    [")", -1],
    [/^[ \t]/, 285,
     2, 11, 285, {"name":"comment","token":"comment"},
     "\n", 285,
     0, 286],
    [3, "def", e[16], 287,
     0, -1],
    [1, 4, 288],
    [1, 148, 289],
    [/^[ \t]/, 289,
     2, 11, 289, {"name":"comment","token":"comment"},
     e[38], 289,
     0, 286],
    ["{", 291],
    [1, 4, 292],
    [1, 405, 293],
    [1, 4, 294],
    ["}", -1],
    ["{", 296],
    [1, 4, 297],
    [1, 418, 298],
    [1, 4, 299],
    ["}", -1],
    ["(", 301],
    [1, 4, 302],
    [1, 426, 303],
    [1, 4, 304],
    [")", -1],
    ["(", 306],
    [1, 4, 307],
    [e[16], 308,
     ")", -1],
    [1, 4, 309],
    [",", 310,
     /^(?![\)\{\,\.])/, -1],
    [1, 4, 311],
    [e[16], 312],
    [1, 4, 309],
    [1, 148, 314,
     0, -1],
    [1, 4, 315],
    [",", 316,
     0, -1],
    [1, 4, 317],
    [1, 148, 318,
     0, 318],
    [1, 4, 315],
    [/^[ \t]/, 319,
     2, 11, 319, {"name":"comment","token":"comment"},
     "\n", 319,
     0, 320],
    [".", 321,
     3, "def", e[16], 321,
     0, 321,
     0, -1],
    [1, 4, 322],
    [2, 9, 323, {"name":"string","token":"string"}],
    [/^[ \t]/, 323,
     2, 11, 323, {"name":"comment","token":"comment"},
     e[38], 323,
     0, 320],
    [3, "def", e[16], -1],
    [".(", 326,
     ".", 330,
     3, "operator", e[35], -1,
     3, "operator", e[36], 332,
     2, 372, -1, {"name":"ArgList"},
     2, 344, -1, {"name":"Bracketed"}],
    [1, 4, 327],
    [1, 148, 328],
    [1, 4, 329],
    [")", -1],
    [1, 4, 331],
    [3, "property callee", e[37], -1,
     3, "property", e[16], -1],
    [1, 4, 333],
    [1, 215, -1],
    [/^[ \t]/, 334,
     2, 11, 334, {"name":"comment","token":"comment"},
     "\n", 334,
     0, 335],
    [3, "keyword", e[12], 336,
     2, 16, 337, {"name":"Statement"},
     0, -1],
    [1, 4, 338],
    [/^[ \t]/, 337,
     2, 11, 337, {"name":"comment","token":"comment"},
     e[38], 337,
     0, 335],
    [1, 148, 339],
    [1, 4, 340],
    [":", 337],
    [3, "keyword", e[29], -1,
     "[", 342,
     3, "keyword", e[27], -1,
     "*", -1],
    [1, 4, 343],
    ["]", -1],
    ["[", 345],
    [1, 4, 346],
    [1, 442, 347],
    [1, 4, 348],
    [":", 349,
     "]", -1],
    [1, 4, 350],
    [1, 112, 351,
     0, 351],
    [1, 4, 348],
    ["(", 353],
    [1, 4, 354],
    [1, 205, 355],
    [1, 4, 356],
    [")", -1],
    [2, 300, 358, {"name":"ParamList"}],
    [1, 4, 359],
    [[5, 305], 360,
     1, 148, 361,
     0, 361],
    [2, 300, 361, {"name":"ParamList"}],
    [1, 4, 362],
    [2, 107, -1, {"name":"Block"}],
    ["(", 364],
    [1, 4, 365],
    [1, 148, 366],
    [1, 4, 367],
    [",", 368,
     0, 370],
    [1, 4, 369],
    [1, 205, 370],
    [1, 4, 371],
    [")", -1],
    ["(", 373],
    [1, 4, 374],
    [1, 205, 375],
    [1, 4, 376],
    [e[40], 377],
    [1, 4, 378],
    [")", -1],
    [3, "property", e[39], 380,
     2, 275, 380, {"name":"LiteralBody"},
     1, 112, 380,
     0, -1],
    [1, 4, 381],
    [":", 382,
     0, 383],
    [1, 4, 384],
    [1, 4, 385],
    [2, 275, 383, {"name":"LiteralBody"},
     1, 112, 383],
    [",", 386,
     0, -1],
    [1, 4, 387],
    [3, "property", e[39], 388,
     2, 275, 388, {"name":"LiteralBody"},
     1, 112, 388,
     0, 389],
    [1, 4, 390],
    [1, 4, 385],
    [":", 391,
     0, 389],
    [1, 4, 392],
    [2, 275, 389, {"name":"LiteralBody"},
     1, 112, 389],
    [/^[ \t]/, 393,
     2, 11, 393, {"name":"comment","token":"comment"},
     "\n", 393,
     0, 394],
    [3, "def", e[16], 395,
     0, -1],
    [1, 4, 396],
    [",", 397,
     1, 148, 398,
     0, 398],
    [1, 4, 399],
    [1, 4, 400],
    [3, "def", e[16], 401],
    [3, "operator", "=", 402,
     0, 403],
    [1, 4, 396],
    [1, 4, 404],
    [/^[ \t]/, 403,
     2, 11, 403, {"name":"comment","token":"comment"},
     e[38], 403,
     0, 394],
    [1, 205, 403],
    [/^[ \t]/, 405,
     2, 11, 405, {"name":"comment","token":"comment"},
     "\n", 405,
     0, 406],
    [[5, 448], 407,
     "*", 408,
     0, 408,
     0, -1],
    [3, "def property", e[16], 409],
    [1, 4, 410],
    [1, 4, 411],
    [1, 148, 412],
    [",", 413,
     0, 408],
    [1, 4, 414],
    [1, 4, 415],
    [2, 9, 416, {"name":"string","token":"string"},
     0, 416],
    [3, "def property", e[16], 417],
    [/^[ \t]/, 416,
     2, 11, 416, {"name":"comment","token":"comment"},
     e[38], 416,
     0, 406],
    [1, 4, 411],
    [/^[ \t]/, 418,
     2, 11, 418, {"name":"comment","token":"comment"},
     "\n", 418,
     0, 419],
    [3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\()/, 420,
     1, 148, 421,
     0, -1],
    [1, 4, 422],
    [/^[ \t]/, 421,
     2, 11, 421, {"name":"comment","token":"comment"},
     e[38], 421,
     0, 419],
    [2, 300, 423, {"name":"ParamList"}],
    [1, 4, 424],
    [[5, 305], 425,
     1, 148, 421,
     0, 421],
    [2, 300, 421, {"name":"ParamList"}],
    [[5, 451], 427,
     0, 428,
     0, -1],
    [1, 457, 428],
    [1, 4, 429],
    [e[40], 430],
    [1, 4, 431],
    [1, 148, 432],
    [1, 4, 433],
    [",", 434,
     0, -1],
    [1, 4, 435],
    [[5, 463], 436,
     0, 437,
     0, 438],
    [1, 457, 437],
    [1, 4, 439],
    [1, 4, 433],
    [e[40], 440],
    [1, 4, 441],
    [1, 148, 438],
    [1, 112, 443,
     "...", 443,
     0, -1],
    [1, 4, 444],
    [",", 445,
     0, -1],
    [1, 4, 446],
    [1, 112, 447,
     "...", 447,
     0, 447],
    [1, 4, 444],
    [e[16], 449],
    [1, 4, 450],
    [/^[a-zA-Z¡-￿__\[\,\*\<\(]/, -1],
    [e[16], 452],
    [1, 4, 453],
    [",", 454,
     e[41], -1],
    [1, 4, 455],
    [e[16], 456],
    [1, 4, 453],
    [3, "def", e[16], 458,
     0, -1],
    [1, 4, 459],
    [",", 460,
     0, -1],
    [1, 4, 461],
    [3, "def", e[16], 462,
     0, 462],
    [1, 4, 459],
    [e[16], 464],
    [1, 4, 465],
    [",", 466,
     e[41], -1],
    [1, 4, 467],
    [e[16], 468],
    [1, 4, 465]
  ];
  var start = 0;
  var token = 3;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["Block", "FunctionDecl", "FunctionExpr", "IfStatement", "ForStatement", "SwitchStatement", "InterfaceBody"];
  var allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"];

  function skippableNewline(line, pos, cx) {
    if (cx && allowNewline.indexOf(cx.name) > -1) { return true }
    var match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos));
    return !match ||
      (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
  }

  function isTypeSwitch(line, pos) {
    return /\.\s*\(\s*type\s*\)\s*$/.test(line.slice(0, pos))
  }

  var bracketed = {
    Block: "}", LiteralBody: "}", StructBody: "}", InterfaceBody: "}",
    Bracketed: "]",
    Set: ")", ParamList: ")", ArgList: ")", ParenExpr: ")"
  };

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed || cx.name == "Block" && /^(case|default)\b/.test(textAfter);
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + (flat ? 0 : config.tabSize)
    } else if (cx.name == "Statement") {
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.tabSize
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  var GoMode = (function (superclass) {
    function GoMode(conf) {
      superclass.call(this, grammar, {
        predicates: {skippableNewline: skippableNewline, isTypeSwitch: isTypeSwitch}
      });
      this.conf = conf;
    }

    if ( superclass ) GoMode.__proto__ = superclass;
    GoMode.prototype = Object.create( superclass && superclass.prototype );
    GoMode.prototype.constructor = GoMode;

    GoMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    GoMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, this.conf)
    };

    return GoMode;
  }(CodeMirror.GrammarMode));

  GoMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
  GoMode.prototype.closeBrackets = "()[]{}''\"\"``";
  GoMode.prototype.blockCommentStart = "/*";
  GoMode.prototype.blockCommentEnd = "*/";
  GoMode.prototype.blockCommentContinue = " * ";
  GoMode.prototype.lineComment = "//";
  GoMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-go", function (conf) { return new GoMode(conf); });

})));
