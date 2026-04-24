
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser...");
    }
    else {
        console.log("Launching " + browserName + " browser...");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke test");
            break;
        case "sanity":
            console.log("Running sanity test");
            break;
        case "regression":
            console.log("Running regression test");
            break;
        default:
            console.log("Running smoke test by default");
    }
}

launchBrowser("Chrome");
runTests("smoke");
runTests("sanity");

launchBrowser("Perplexity AI");
runTests("regression");
runTests("performance");