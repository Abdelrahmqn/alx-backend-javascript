function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const succ = true;
    if (succ) {
      resolve('okay');
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('no');
    }
  });
}
export default getResponseFromAPI;
