class GBASave {
    constructor(arrayBuffer) {
        this.data = new Uint8Array(arrayBuffer);
    }

    getSize() {
        return this.data.length;
    }

    isValid() {
        return this.data.length === 131072 || this.data.length === 65536;
    }

    getTrainerName() {
        return "Coming Soon";
    }

    getMoney() {
        return 0;
    }

    setMoney(value) {
        console.log("Money set to:", value);
    }
}

window.GBASave = GBASave;