import {encrypt,decrypt} from './tool'

/**
 * 存
 * @param key
 * @param value
 * @constructor
 */
 export function storageSet(key, value) {
    localStorage.setItem(key, encrypt(JSON.stringify(value))); //加密值
  }
  
  /**
   * 取
   * @param key
   * @constructor
   */
  export function storageGet(key) {
    if (localStorage.getItem(key) == null) {
      return '';
    } else {
          try {
              return JSON.parse(decrypt(localStorage.getItem(key)));
            } catch (e) {
              if (e.name == 'SyntaxError') {
                  // storageClear()
              } 
            }
      
    }
  }
  
  /**
   * 清除指定字段
   * @constructor
   */
  export function storageRemove(key) {
    localStorage.removeItem(key)
  }
  
  /**
   * 清除所有
   * @constructor
   */
  export function storageClear() {
    localStorage.clear();
  }