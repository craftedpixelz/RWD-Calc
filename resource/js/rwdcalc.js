$(function () {

    var rwdcalc = rwdcalc || {};

    rwdcalc.width = function (target, context) {
        return target / context * 100 + "%";
    };

    rwdcalc.margin = function (margin, context) {
        return margin / context * 100 + "%";
    };

    rwdcalc.padding = function (padding, target) {
        return padding / target * 100 + "%";
    };

    rwdcalc.construct = function () {
        $("#rwdcalc").submit(function (e) {
            e.preventDefault();

            var elementVal = $("#element").val(),
                targetVal = $("#target").val().replace(/[^0-9]/g, ''),
                contextVal = $("#context").val().replace(/[^0-9]/g, ''),
                marginVal = $("#margin").val().replace(/[^0-9]/g, ''),
                paddingVal = $("#padding").val().replace(/[^0-9]/g, ''),
                width = rwdcalc.width(targetVal, contextVal),
                margin = rwdcalc.margin(marginVal, contextVal),
                padding = rwdcalc.padding(paddingVal, targetVal);

            $("#result").empty().show().append(elementVal + " {<br/>&nbsp; &nbsp; width: " + width + ";<br/>&nbsp; &nbsp; margin: " + margin + ";<br/>&nbsp; &nbsp; padding: " + padding + ";<br/>}");
        });
    };

    rwdcalc.construct();
});