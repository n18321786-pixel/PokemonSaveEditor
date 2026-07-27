function readGBA(buffer) {
    const data = new Uint8Array(buffer);

    let game = "Unknown";

    if (data.length === 131072) {
        game = "GBA Save";
    }

    let player = "";

    for (let i = 0; i < 7; i++) {
        const c = data[0x0000 + i];

        if (c >= 32 && c <= 126) {
            player += String.fromCharCode(c);
        }
    }

    return {
        game: game,
        player: player || "---",
        money: 0
    };
}