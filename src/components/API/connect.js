class Endpoint {
    async getWoods() {
        try {
            let res = await fetch("/woods");
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getUserWoods() {
        try {
            let res = await fetch("/custom-woods");
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getLengths() {
        try {
            let res = await fetch("/lengths");
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getThickness() {
        try {
            let res = await fetch("/thicknesses");
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getWidths() {
        try {
            let res = await fetch("/widths");
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

const API = new Endpoint();
export default API;