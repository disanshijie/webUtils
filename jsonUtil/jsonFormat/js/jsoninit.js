var jsl = typeof jsl === 'undefined' ? {} : jsl;
$.fn.caret = function (begin, end) {
    if (this.length === 0) {
        return;
    }
    if (typeof begin === 'number') {
        end = (typeof end === 'number') ? end : begin;
        return this.each(function () {
            if (this.setSelectionRange) {
                this.focus();
                this.setSelectionRange(begin, end);
            } else if (this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        });
    } else {
        if (this[0].setSelectionRange) {
            begin = this[0].selectionStart;
            end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
            var range = document.selection.createRange();
            begin = -range.duplicate().moveStart('character', -100000);
            end = begin + range.text.length;
        }
        return { "begin": begin, "end": end };
    }
};
jsl.interactions = (function () {
    var s = true;
    var reformatParam,
        reformat,
        compress;
    function getNthPos(searchStr, char, pos) {
        var i,
            charCount = 0,
            strArr = searchStr.split(char);
        if (pos === 0) {
            return 0;
        }
        for (i = 0; i < pos; i++) {
            if (i >= strArr.length) {
                return -1;
            }
            charCount += strArr[i].length + char.length;
        }
        return charCount;
    }
    function getURLParameter(name) {
        param = (new RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || ['', null])[1];
        if (param) {
            return decodeURIComponent(param);
        } else {
            return null;
        }
    }
    function validate(options) {
        s = true;
        var lineNum,
            lineMatches,
            lineStart,
            lineEnd,
            jsonVal,
            result=true;
        jsonVal = options.$elm.val();
        try {
//            result = jsl.parser.parse(jsonVal);
            if (typeof JSON == 'object') {
                //options.$elm.val(JSON.stringify(JSON.parse(jsonVal), null, "    "))
                //格式化json
                options.$resultOut.val(JSON.stringify(eval("(" + jsonVal + ")"), null, "    "));
            } else {
                //格式化非正常json
                options.$resultOut.val(jsl.format.formatJson(jsonVal));
            }
            if (result) {
                options.$resultMsg.text('正确的 JSON')
                    .removeClass("validateErr")
                    .addClass("validateSuccess")
                    .show();
            } else {
                alert("An unknown error occurred. Please contact Arc90.");
                s = false;
            }
            $(".lineno").removeClass('lineselect');
        } catch (parseException) {
            $(".lineno").removeClass('lineselect');
            try {

                //格式化非正常json
                jsonVal = jsl.format.formatJson(options.$elm.val());
                options.$resultOut.val(jsonVal);

                result = jsl.parser.parse(options.$resultOut.val());
            } catch (e) {
                parseException = e;
            }
            lineMatches = parseException.message.match(/line ([0-9]*)/);
            if (lineMatches && typeof lineMatches === "object" && lineMatches.length > 1) {
                lineNum = parseInt(lineMatches[1], 10);
                if (lineNum === 1) {
                    lineStart = 0;
                } else {
                    lineStart = getNthPos(jsonVal, "\n", lineNum - 1);
                }
                lineEnd = jsonVal.indexOf("\n", lineStart);
                if (lineEnd < 0) {
                    lineEnd = jsonVal.length;
                }
                options.$elm.focus().caret(lineStart, lineEnd);
            }
            $(".lineno").eq(lineNum - 1).addClass('lineselect');
            options.$resultMsg.text(parseException.message)
                            .removeClass("validateSuccess")
                            .addClass("validateErr")
                            .show();
            s = false;
        }
    }
    function init() {
     //   $('#jsonval').linedtextarea({ resize: "none" });
        $(".ToolChoesejson").each(function () {
            _select({
                select: $(this).find(".SearChoese"),
                options: $(this).find("ul.SearChoese-show"),
                option: $(this).find("ul.SearChoese-show li a"),
                t: "slide",
                parents: $(".ToolChoesejson"),
                callback: function () {
                    format();
                }
            });
        });
        var jf;
        var format = function () {
            var options = {
                dom: '.Canvas',
                isCollapsible: $('#CollapsibleView').prop('checked'),
                quoteKeys: $('#QuoteKeys').prop('checked'),
                tabSize: $('#charlen').val()
            };
            jf = new JsonFormater(options);
            jf.doFormat($('#jsonval').val());
        };
        $('#getformat').click(function () {
            if (!$('#jsonval').val()) {
                alert("请输入JSON字符串");
                $('#jsonval').focus();
                return false;
            }
            $('.resultMsg').show();
            validate({ $elm: $('#jsonval'), $resultMsg: $('.resultMsg pre'),$resultOut:$("#jsonResult")});
            if (s)
                format();
            else
                $(".Canvas").html("").hide();
            return false;
        });
        $("#expandcollapse").click(function () {
            var s = $(this).attr("s");
            if (s == 1) {
                jf.collapseAll();
                $(this).attr("s", 0);
                $(this).text("全部展开");
            }
            else {
                jf.expandAll();
                $(this).attr("s", 1);
                $(this).text("全部折叠");
            }
        });
        $('#CollapsibleView,#QuoteKeys').change(function () {
            if (s)
                format();
            else
                $(".Canvas").html("").hide();
        });
        $("#clear").click(function () {
            $("#jsonval").val('');
            $('.resultMsg').hide().find("pre").html("");
            $(".Canvas").hide();
            $("#expandcollapse").hide();
        });
    }

    return {
        'init': init
    };
} ());

$(function () {
    jsl.interactions.init();
});