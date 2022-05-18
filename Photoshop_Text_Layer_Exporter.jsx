function Main() {
//faire du document ouvert le document actif
var currentDoc = app.activeDocument;
// alert(currentDoc.name);

//récupérer le nombre de calque dans le document 
var allLayers = currentDoc.layers;


var nomDossier = prompt("Nom du dossier d'export ?","Entrez votre nom");


for (i=0; i<(allLayers.length -1) ; i++){
    currentDoc.activeLayer = currentDoc.layers[i];
    var layerName=currentDoc.activeLayer.name

    // alert("Layer "+ layerName + " set as active")
        
    Save(layerName, nomDossier);


    currentDoc.activeLayer.visible= false;
}
alert("done");

}

function Save(nomCalque, nomDossier) {
    var outFolder = app.activeDocument; // psd name
    // alert("work up here 1")
    var outPath = outFolder.path;
    // alert("work up here 2")
    var fName = nomDossier;   // define folder name
    // alert("work up here 3")
    var f = new Folder(outPath + "/" + fName);
    // alert("work up here 4")
    if (!f.exists) {
        f.create();
    }
    // alert("work up here 5")
    var saveFile = new File(outPath + "/" + fName + "/" + nomDossier+ "_" + nomCalque + ".png");
    // alert("work up here 6")
    pngSaveOptions = new PNGSaveOptions();
    // alert("work up here 7")
    pngSaveOptions.interlaced = false;
    // alert("work up here 8")
    app.activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE);
    // alert("work up here 9")
}

Main();