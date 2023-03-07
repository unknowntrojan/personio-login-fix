// ==UserScript==
// @name         Personio Login Fix
// @namespace    https://personio.com/
// @version      0.1
// @description  Fixes an issue when leaving a personio tab open, opening it again, and clicking login. It will redirect to a 401 Unauthorized page, requiring you to re-type the url or remove the query params.
// @author       unknowntrojan
// @include       *.personio.*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let nodes = document.querySelectorAll('center > h1:last-child');

    if (nodes.length == 1) {
        let node = nodes[0];

        if (node.textContent === "401 Authorization Required") {
            // we are glitched! fix it.
            window.location.replace(window.location.protocol + "//" + window.location.host + "/");
        }
    }
})();