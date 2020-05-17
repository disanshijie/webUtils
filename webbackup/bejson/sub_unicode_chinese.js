var _0x20ca = ["\x68\x6F\x73\x74", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x74\x6F\x70",
    "\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D",
    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F", "\x5C\x75",
    "\x72\x65\x70\x6C\x61\x63\x65", "\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x5C",
    "\x3F", "\x3C", "\x3E", "\x20", "\x3D", "\x5D", "\x5B", "\x22", "\x27", "\x2C", "\x3A", "\x7D", "\x7B",
    "\x25\x75", "\x6A\x73\x6F\x6E\x5F\x69\x6E\x70\x75\x74",
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x76\x61\x6C\x75\x65", "\x74\x72\x69\x6D"];
if (window[_0x20ca[2]][_0x20ca[1]][_0x20ca[0]] != _0x20ca[3]) {
   // window[_0x20ca[2]][_0x20ca[1]] = _0x20ca[4]
};
var GB2312UnicodeConverter = {
    ToUnicode: function (_0x5ffcx2) {
        var _0x5ffcx3 = escape(_0x5ffcx2)[_0x20ca[7]]()[_0x20ca[6]](/%u/gi, _0x20ca[5]);
        return _0x5ffcx3[_0x20ca[6]](/%7b/gi, _0x20ca[21])[_0x20ca[6]](/%7d/gi, _0x20ca[20])[_0x20ca[6]](
            /%3a/gi, _0x20ca[19])[_0x20ca[6]](/%2c/gi, _0x20ca[18])[_0x20ca[6]](/%27/gi, _0x20ca[17])[
            _0x20ca[6]](/%22/gi, _0x20ca[16])[_0x20ca[6]](/%5b/gi, _0x20ca[15])[_0x20ca[6]](/%5d/gi,
            _0x20ca[14])[_0x20ca[6]](/%3D/gi, _0x20ca[13])[_0x20ca[6]](/%20/gi, _0x20ca[12])[_0x20ca[6]](
            /%3E/gi, _0x20ca[11])[_0x20ca[6]](/%3C/gi, _0x20ca[10])[_0x20ca[6]](/%3F/gi, _0x20ca[9])[
            _0x20ca[6]](/%5c/gi, _0x20ca[8])
    },
    ToGB2312: function (_0x5ffcx2) {
        return unescape(_0x5ffcx2[_0x20ca[6]](/\\u/gi, _0x20ca[22]))
    }
};

function u2h() {
    var _0x5ffcx5 = document[_0x20ca[24]](_0x20ca[23]);
    var _0x5ffcx6 = _0x5ffcx5[_0x20ca[25]];
    _0x5ffcx6 = _0x5ffcx6[_0x20ca[26]]();
    _0x5ffcx5[_0x20ca[25]] = GB2312UnicodeConverter.ToGB2312(_0x5ffcx6)
}

function h2u() {
    var _0x5ffcx5 = document[_0x20ca[24]](_0x20ca[23]);
    var _0x5ffcx6 = _0x5ffcx5[_0x20ca[25]];
    _0x5ffcx6 = _0x5ffcx6[_0x20ca[26]]();
    _0x5ffcx5[_0x20ca[25]] = GB2312UnicodeConverter.ToUnicode(_0x5ffcx6)
}

function cnChar2EnChar() {
    var _0x5ffcx5 = document[_0x20ca[24]](_0x20ca[23]);
    var _0x5ffcx2 = _0x5ffcx5[_0x20ca[25]];
    _0x5ffcx2 = _0x5ffcx2[_0x20ca[6]](/\’|\‘/g, _0x20ca[17])[_0x20ca[6]](/\“|\”/g, _0x20ca[16]);
    _0x5ffcx2 = _0x5ffcx2[_0x20ca[6]](/\【/g, _0x20ca[15])[_0x20ca[6]](/\】/g, _0x20ca[14])[_0x20ca[6]](/\｛/g, _0x20ca[21])[
        _0x20ca[6]](/\｝/g, _0x20ca[20]);
    _0x5ffcx2 = _0x5ffcx2[_0x20ca[6]](/，/g, _0x20ca[18])[_0x20ca[6]](/：/g, _0x20ca[19]);
    _0x5ffcx5[_0x20ca[25]] = _0x5ffcx2
}