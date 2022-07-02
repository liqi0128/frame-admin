import CryptoJS from 'crypto-js'

/**
 * 加密方法
 * @param data
 * @returns {string}
 */
export function encrypt(data,key='76854',iv='1321') {
	if (typeof data === 'object') {
		try {
			// eslint-disable-next-line no-param-reassign
			data = JSON.stringify(data)
		} catch (error) {
			console.log('encrypt error:', error)
		}
	}
	// 十六位十六进制数作为密钥
	const SECRET_KEY = CryptoJS.enc.Utf8.parse(key)
	// 十六位十六进制数作为密钥偏移量
	const SECRET_IV = CryptoJS.enc.Utf8.parse(iv)
	const dataHex = CryptoJS.enc.Utf8.parse(data)
	const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
		iv: SECRET_IV,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	})
	return encrypted.ciphertext.toString()
}

/**
 * 解密方法
 * @param data
 * @returns {string}
 */
export function decrypt(data,key='76854',iv='1321') {
	// 十六位十六进制数作为密钥
	const SECRET_KEY = CryptoJS.enc.Utf8.parse(key)
	// 十六位十六进制数作为密钥偏移量
	const SECRET_IV = CryptoJS.enc.Utf8.parse(iv)

	const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
	const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
	const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
		iv: SECRET_IV,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	})
	const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
	return decryptedStr.toString()
}

/**
 * uuid
 */
export function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}