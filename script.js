const fileInput = document.getElementById("saveFile");
const openBtn = document.getElementById("openBtn");
const info = document.getElementById("info");

openBtn.addEventListener("click", () => {
    if (!fileInput.files.length) {
        info.innerHTML = "<h3>Please select a save file.</h3>";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {

        const save = new GBASave(e.target.result);

        if (!save.isValid()) {
            info.innerHTML = "<h3>❌ Unsupported save file.</h3>";
            return;
        }

        info.innerHTML = `
            <h2>Save Loaded</h2>

            <p><b>File:</b> ${file.name}</p>
            <p><b>Size:</b> ${save.getSize()} bytes</p>
            <p><b>Trainer:</b> ${save.getTrainerName()}</p>
            <p><b>Money:</b> ${save.getMoney()}</p>
        `;
    };

    reader.readAsArrayBuffer(file);
});