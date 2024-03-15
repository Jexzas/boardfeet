let url = "http://localhost:5000/";
class Endpoint {
    async getWoods() {
        try {
            let res = await fetch(`${url}woods`);
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getUserWoods() {
        try {
            let res = await fetch(`${url}custom-woods`);
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getLengths() {
        try {
            let res = await fetch(`${url}lengths`);
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getThickness() {
        try {
            let res = await fetch(`${url}thicknesses`);
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
    async getWidths() {
        try {
            let res = await fetch(`${url}widths`);
            let data = res.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

const API = new Endpoint();
export default API;