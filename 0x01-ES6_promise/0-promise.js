function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const succ = true;

        if (succ) {
            resolve("okay");
        } else {
            reject("No")
        }

    });
}
export default getResponseFromAPI;