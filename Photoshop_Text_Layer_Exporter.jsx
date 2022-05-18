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
    var selectedLayer = currentDoc.activeLayer;

    if (selectedLayer.kind == LayerKind.TEXT){
        Save(layerName, nomDossier);
        currentDoc.activeLayer.visible= false;
    } else {
        alert(selectedLayer.name + " is not a text layer");
    }


}
alert("done");

}

function Save(nomCalque, nomDossier) {
    var outFolder = app.activeDocument; // psd name
    var outPath = outFolder.path;
    var fName = nomDossier;   // define folder name
    var f = new Folder(outPath + "/" + fName);
    if (!f.exists) {
        f.create();
    }
    var saveFile = new File(outPath + "/" + fName + "/" + nomDossier+ "_" + nomCalque + ".png");
    pngSaveOptions = new PNGSaveOptions();
    pngSaveOptions.interlaced = false;
    app.activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE);
}

Main();