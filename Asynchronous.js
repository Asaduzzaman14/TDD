import CryptoJS from "crypto-js";

export function encryptMessage(msg, key, callBack) {
  const encryptMessage = CryptoJS.AES.encrypt(msg, key).toString();
  callBack(encryptMessage);
}

export function encryptMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();

      if (encryptMessage) {
        resolve(encryptMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}

const message = {
  name: "asad",
  password: "122222",
};

const secretKey = "asdaaaa11";

// Using the callback
encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
  console.log(encryptedMessage);
});

// Using the promise
encryptMessagePromise(JSON.stringify(message), secretKey)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
