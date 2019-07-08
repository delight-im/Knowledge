# Crowdin

## Verifying translation from proofreading mode

The following JavaScript bookmarklet can be used to perform automatic quality assurance (QA) checks that highlight possible mistakes in translations, as well as showing a machine translation on Google Translate to verify the user-submitted translation.

In your browser, just create a bookmark with the following target address:

```
javascript:(function () {var sourceContainer=document.querySelector("#crowdin-editor-wrapper #proofread-view #content #editor-center-layout #phrases #texts_list .proofread-string-wrapper.checked .phrase-left .proofread-string-source-wrapper");if(null!==sourceContainer){var sourceNode=sourceContainer.querySelector(".proofread-string-source .singular.selectable");if(null!==sourceNode){var sourceLang=sourceContainer.lang,sourceText=sourceNode.textContent,translationNode=document.querySelector("#crowdin-editor-wrapper #proofread-view #content #editor-center-layout #phrases #texts_list .proofread-string-wrapper.checked .proofread-string-translations .proofread-string-translation textarea");if(null!==translationNode){var translationLang=translationNode.lang,translationText=translationNode.value,specialsRegex=/(?:<[biu]>)|(?:<\/[biu]>)|(?:%(?:[1-9]\$)?[ds])|(?:&#?[^&#;]+;)|(?:\\{1,2}[nt])/g,sourceSpecials=sourceText.match(specialsRegex),translationSpecials=translationText.match(specialsRegex);if(JSON.stringify(translationSpecials)===JSON.stringify(sourceSpecials)){var googleTranslateUrl=[];googleTranslateUrl.push("https://translate.google.com/?sl="),googleTranslateUrl.push(encodeURIComponent(translationLang)),googleTranslateUrl.push("&tl="),googleTranslateUrl.push(encodeURIComponent(sourceLang)),googleTranslateUrl.push("&text="),googleTranslateUrl.push(encodeURIComponent(translationText.replace(specialsRegex,function(e){return"<"===e.charAt(0)?"":"%"===e.charAt(0)?"\u{1F534}":-1!==e.indexOf("\\n")?"\n":-1!==e.indexOf("\\t")?"\t":e})));var sourceLength=sourceText.length;switch(sourceLang.substring(0,2)){case"ja":case"ko":sourceLength*=2.2;break;case"zh":sourceLength*=3.3}var translationLength=translationText.length;switch(translationLang.substring(0,2)){case"ja":case"ko":translationLength*=2.2;break;case"zh":translationLength*=3.3}translationLength<.25*sourceLength?alert("The translation is suspiciously short!"):4*sourceLength<translationLength&&alert("The translation is suspiciously long!"),-1!==translationText.indexOf("  ")&&-1===sourceText.indexOf("  ")&&alert("The translation includes consecutive spaces!"),window.open(googleTranslateUrl.join(""),"")}else alert("The translation seems to be in a wrong format!")}}}})();
```

The (non-minified) source code for the bookmarklet above is:

```javascript
(function () {
    var sourceContainer = document.querySelector("#crowdin-editor-wrapper #proofread-view #content #editor-center-layout #phrases #texts_list .proofread-string-wrapper.checked .phrase-left .proofread-string-source-wrapper");

    if (sourceContainer !== null) {
        var sourceNode = sourceContainer.querySelector(".proofread-string-source .singular.selectable");

        if (sourceNode !== null) {
            var sourceLang = sourceContainer.lang;
            var sourceText = sourceNode.textContent;
            var translationNode = document.querySelector("#crowdin-editor-wrapper #proofread-view #content #editor-center-layout #phrases #texts_list .proofread-string-wrapper.checked .proofread-string-translations .proofread-string-translation textarea");

            if (translationNode !== null) {
                var translationLang = translationNode.lang;
                var translationText = translationNode.value;
                var specialsRegex = /(?:<[biu]>)|(?:<\/[biu]>)|(?:%(?:[1-9]\$)?[ds])|(?:&#?[^&#;]+;)|(?:\\{1,2}[nt])/g;
                var sourceSpecials = sourceText.match(specialsRegex);
                var translationSpecials = translationText.match(specialsRegex);

                if (JSON.stringify(translationSpecials) === JSON.stringify(sourceSpecials)) {
                    var googleTranslateUrl = [];
                    googleTranslateUrl.push("https://translate.google.com/?sl=");
                    googleTranslateUrl.push(encodeURIComponent(translationLang));
                    googleTranslateUrl.push("&tl=");
                    googleTranslateUrl.push(encodeURIComponent(sourceLang));
                    googleTranslateUrl.push("&text=");
                    googleTranslateUrl.push(encodeURIComponent(translationText.replace(specialsRegex, function (match) {
                        if (match.charAt(0) === "<") {
                            return "";
                        }
                        else if (match.charAt(0) === "%") {
                            return "\u{1F534}";
                        }
                        else if (match.indexOf("\\n") !== -1) {
                            return "\n";
                        }
                        else if (match.indexOf("\\t") !== -1) {
                            return "\t";
                        }
                        else {
                            return match;
                        }
                    })));

                    var sourceLength = sourceText.length;

                    switch (sourceLang.substring(0, 2)) {
                        case "ja":
                        case "ko":
                            sourceLength *= 2.2;
                            break;
                        case "zh":
                            sourceLength *= 3.3;
                            break;
                    }

                    var translationLength = translationText.length;

                    switch (translationLang.substring(0, 2)) {
                        case "ja":
                        case "ko":
                            translationLength *= 2.2;
                            break;
                        case "zh":
                            translationLength *= 3.3;
                            break;
                    }

                    if (translationLength < (sourceLength * 0.25)) {
                        alert("The translation is suspiciously short!");
                    }
                    else if (translationLength > (sourceLength * 4)) {
                        alert("The translation is suspiciously long!");
                    }

                    if (translationText.indexOf("  ") !== -1 && sourceText.indexOf("  ") === -1) {
                        alert("The translation includes consecutive spaces!");
                    }

                    window.open(googleTranslateUrl.join(""), "");
                }
                else {
                    alert("The translation seems to be in a wrong format!");
                }
            }
        }
    }
})();
```

When clicked, this will take the selected translation from the proofreading mode in Crowdin, check its format with regard to HTML tags and entities, special symbols and placeholders, and open a new tab with Google Translate showing the reverse translation.
