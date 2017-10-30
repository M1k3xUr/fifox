/*beastify():
* removes every node in the document.body
* then insert the chosen beast
* then removes itself as a listener
*/
function beastify(request, sender, sendResponse) {
    removeEverything();
    insertBeast(request.beastURL);
    browser.runtime.onMessage.removeListener(beastify);
}

// removes every node under document.body
function removeEveything() {
    while (document.body.firstChild) {
        document.body.firstChild.remove();
    }
}

// Given a URL to beast image, create and style an img node pointing to that img, then insert the node into the document
function insertBeast(beastURL) {
    var beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.setAttribute("style", "width: 100vw");
    beastImage.setAttribute("style", "height: 100vh");
    document.body.appendChild(beastImage);
}

//assign beastify() as a listener for messages from the extension
browser.runtime.onMessage.addListener(beastify);