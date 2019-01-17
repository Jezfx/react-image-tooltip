export const randomString = (len, charSet = "abcdefghijklmnopqrstuvwxyz") => {
  let randomString = "";
  for (let i = 0; i < len; i++) {
    let randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};
