// open a new tab and load my html page into it.
function dramaPage() {
    console.log("injecting");
    browser.tabs.create({
        "url": "/drama-page/drama-page.html"
    });
}

// add dramaPage() as a listener to clicks on the browser action
browser.browserAction.onClicked.addListener(dramaPage);