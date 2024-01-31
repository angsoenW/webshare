
async function previewUrl(){
    let url = document.getElementById("urlInput").value;
    try {
        let preview = await fetch("api/v1/urls/preview?url=" + url);
        let previewHTML = await preview.text();
        displayPreviews(previewHTML);
    } catch (error) {
        displayPreviews("Error loading preview: " + error.message);
    }
    
    
    
}

function displayPreviews(previewHTML){
    document.getElementById("url_previews").innerHTML = previewHTML;
}
