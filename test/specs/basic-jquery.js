/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("basic mark called with jquery", function () {
    var $ctx, ret;
    beforeEach(function (done) {
        loadFixtures("basic.html");

        $ctx = $(".basic > div:first-child");
        ret = $ctx.mark("lorem ipsum", {
            "diacritics": false,
            "separateWordSearch": false,
            "done": function () {
                // otherwise "ret =" will not be executed
                setTimeout(function () {
                    done();
                }, 50);
            }
        });
    });

    it("should wrap matches", function () {
        expect($ctx.find("mark")).toHaveLength(4);
    });
    it("should return the provided context jquery element", function () {
        expect(ret instanceof $).toBe(true);
        expect(ret).toBeMatchedBy(".basic > div:first-child");
    });
});
