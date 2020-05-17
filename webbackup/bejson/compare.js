var _0x1840 = ["\x61\x61\x61\x61\x61\x61\x0A\x62\x62\x62\x62\x31\x62\x62\x62\x62\x0A\x63\x63\x63\x63", "\x76\x61\x6C",
    "\x23\x6C\x65\x66\x74\x63", "\x61\x61\x61\x61\x61\x61\x0A\x62\x62\x62\x62\x62\x62\x62\x62\x0A\x63\x63\x63\x63",
    "\x23\x72\x69\x67\x68\x74\x63", "\x6C\x65\x6E\x67\x74\x68", "\x63\x68\x61\x6E\x67\x65", "\x2E\x74\x78\x74\x61",
    "", "\u5DE6\u53F3\u680F\u5185\u5BB9\u4E0D\u53EF\u4EE5\u4E3A\u7A7A", "\x6D\x73\x67", "\x0A",
    "\x73\x70\x6C\x69\x74", "\u76F8\u540C\u7684\u6570\u636E\x3A", "\x3C\x62\x72\x2F\x3E\x20\u5DE6\u4E0D\u540C\x3A",
    "\x20\x3C\x62\x72\x2F\x3E\u53F3\u4E0D\u540C\x3A", "\x68\x74\x6D\x6C", "\x23\x72\x65\x73", "\x68\x6F\x73\x74",
    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x74\x6F\x70", "\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D",
    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F",
    "\x76\x61\x6C\x75\x65", "\x63\x6F\x6E\x74\x65\x6E\x74",
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x72\x65\x73\x75\x6C\x74",
    "\x73\x65\x6C\x65\x63\x74", "\x66\x6F\x63\x75\x73"];

function demo() {
    $(_0x1840[2])[_0x1840[1]](_0x1840[0]);
    $(_0x1840[4])[_0x1840[1]](_0x1840[3])
}

function getDif(_0xc49bx3, _0xc49bx4) {
    var _0xc49bx5 = 0;
    var _0xc49bx6 = [];
    for (var _0xc49bx7 = 0; _0xc49bx7 < _0xc49bx3[_0x1840[5]]; _0xc49bx7++) {
        var _0xc49bx8 = _0xc49bx3[_0xc49bx7];
        var _0xc49bx9 = false;
        for (var _0xc49bxa = 0; _0xc49bxa < _0xc49bx4[_0x1840[5]]; _0xc49bxa++) {
            var _0xc49bxb = _0xc49bx4[_0xc49bxa];
            if (_0xc49bx8 == _0xc49bxb) {
                _0xc49bx9 = true;
                break
            }
        };
        if (!_0xc49bx9) {
            _0xc49bx6[_0xc49bx5++] = _0xc49bx8
        }
    };
    return _0xc49bx6
}
$(_0x1840[7])[_0x1840[6]](function () {
    compare()
});

function compare() {
    var _0xc49bxd = $(_0x1840[2])[_0x1840[1]]();
    var _0xc49bxe = $(_0x1840[4])[_0x1840[1]]();
    if (_0xc49bxd == _0x1840[8] || _0xc49bxe == _0x1840[8]) {
        layer[_0x1840[10]](_0x1840[9]);
        return
    };
    var _0xc49bxf = _0xc49bxd[_0x1840[12]](_0x1840[11]);
    var _0xc49bx10 = _0xc49bxe[_0x1840[12]](_0x1840[11]);
    var _0xc49bx11 = 0;
    var _0xc49bx12 = [];
    for (var _0xc49bx7 = 0; _0xc49bx7 < _0xc49bxf[_0x1840[5]]; _0xc49bx7++) {
        var _0xc49bx8 = _0xc49bxf[_0xc49bx7];
        var _0xc49bx9 = false;
        for (var _0xc49bxa = 0; _0xc49bxa < _0xc49bx10[_0x1840[5]]; _0xc49bxa++) {
            var _0xc49bxb = _0xc49bx10[_0xc49bxa];
            if (_0xc49bx8 == _0xc49bxb) {
                _0xc49bx12[_0xc49bx11++] = _0xc49bxb;
                _0xc49bx9 = true;
                break
            }
        }
    };
    var _0xc49bx13 = getDif(_0xc49bxf, _0xc49bx10);
    var _0xc49bx14 = getDif(_0xc49bx10, _0xc49bxf);
    var _0xc49bx15 = _0x1840[13] + _0xc49bx12;
    _0xc49bx15 += _0x1840[14] + _0xc49bx13 + _0x1840[15] + _0xc49bx14;
    $(_0x1840[17])[_0x1840[16]](_0xc49bx15)
}
if (window[_0x1840[20]][_0x1840[19]][_0x1840[18]] != _0x1840[21]) {
   // window[_0x1840[20]][_0x1840[19]] = _0x1840[22]
};

function Empty() {
    document[_0x1840[25]](_0x1840[24])[_0x1840[23]] = _0x1840[8];
    document[_0x1840[25]](_0x1840[26])[_0x1840[23]] = _0x1840[8];
    document[_0x1840[25]](_0x1840[24])[_0x1840[27]]()
}

function GetFocus() {
    document[_0x1840[25]](_0x1840[26])[_0x1840[28]]()
}