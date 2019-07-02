const { app, BrowserWindow } = require("electron");

let win;

function create() {
    win = new BrowserWindow({
        backgroundColor: "#2a313c",
        show: false,
        webPreferences: {
            webviewTag: true
        }
    });

    win.loadFile("../index.html");
    win.maximize();
    win.show();
    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", create);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
    if (win === null) create();
});
