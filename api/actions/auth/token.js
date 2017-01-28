export default function token() {
  return new Promise((resolve) => {
    resolve({
      token: '45shjkfdh5555555khjghjk',
      time: Date.now(),
    });
  });
}
