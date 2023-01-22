if (StoreData == undefined) {
    var StoreData = [];
}


StoreData.push({
        name: "Test store App",
        desc: "A test app",
        img: "data:image/jpeg;base64,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",
        app: "eyJqcyI6W3siY29kZSI6ImFsZXJ0KCd0ZXN0JykiLCJpZCI6IiIsInR5cGUiOiIiLCJlbmNyIjoibm9uZSJ9XSwiYm9keSI6IlxuICAgIDxoMT5UZXN0PC9oMT5cbiAgICBcblxuIiwiaGVhZCI6IlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cbiIsIkJJRCI6IiIsImJvZHlfaXRlbXMiOnsib25Mb2FkIjoiIiwic3R5bGUiOiIifX0=",
        appType: "OEXE",
        download: false
});
StoreData.push({
    name: "Super mario 64",
    desc: "",
    img: "https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg",
    app: "client_assets/STORE/apps/sm64.js",
    appType: "OEXE/URL",
    download: false
});
StoreData.push({
    name: "DOOM",
    desc: "",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2280/capsule_616x353.jpg?t=1660323896",
    app: "client_assets/STORE/apps/doom.js",
    appType: "OEXE/URL",
    download: false
});
StoreData.push({
    name: "Mari0",
    desc: "Mario with a portal gun",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mari0_video_game_logo.png",
    app: "client_assets/STORE/apps/mari0.js",
    appType: "OEXE/URL",
    download: false
});
StoreData.push({
    name: "Slope",
    desc: "",
    img: "https://geometry-dash.co/upload/imgs/slope-game-logo4.jpg",
    app: "client_assets/STORE/apps/slope.js",
    appType: "OEXE/URL",
    download: false
});
StoreData.push({
    name: "Baldis basics",
    desc: "",
    img: "https://img.itch.zone/aW1hZ2UvMjM5ODQxLzE2NTAzMjUucG5n/original/Y8LdOc.png",
    app: "https://drive.google.com/file/d/1bOHZY7fIaFYza2vNqunqyQvk4kOSFvWq/view",
    appType: "HTML",
    download: true
});
StoreData.push({
    name: "1v1.lol",
    desc: "",
    img: "https://osis-gms.netlify.app/projects/1v1lol/splash.png",
    app: "https://drive.google.com/file/d/1wXs3VrtRWIrFNsY4SoJkslR6CS3IN9at/view",
    appType: "HTML",
    download: true
});

StoreData.push({
    name: "Backrooms",
    desc: "",
    img: "https://img.itch.zone/aW1nLzIxNTk2MjEuanBn/original/1i6rgK.jpg",
    app: "https://drive.google.com/file/d/1iD3dEbfYBEcunHRNvhWE1UfP-z10qS8T/view",
    appType: "HTML",
    download: true
});






LoadStore();