const saveFile = document.getElementById("saveFile");
const openBtn = document.getElementById("openBtn");
const info = document.getElementById("info");

openBtn.addEventListener("click", async () => {

    if (!saveFile.files.length) {
        info.innerHTML = "❌ Please select a save file.";
        return;
    }

    const file = saveFile.files[0];

    const buffer = await file.arrayBuffer();
    const data = new Uint8Array(buffer);

    info.innerHTML = `
        <h3>Save Loaded Successfully</h3>
        <p><b>File Name:</b> ${file.name}</p>
        <p><b>File Size:</b> ${data.length} bytes</p>
    `;

    console.log(data);
});