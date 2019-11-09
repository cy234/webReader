// indexedDB浏览器本地存储
export default {
  indexedDB: window.indexedDB || window.webkitindexedDB || window.msIndexedDB || window.mozIndexedDB,
  // 打开数据库
  openDB(name, version, newStore, callback) {
  // var version = version || 1;
    let req = this.indexedDB.open(name, version);
    req.onerror = function (event) {
      window.alert(`indexedDB数据库无法打开，错误：${event.target.errorCode}`);
    };
    req.onsuccess = function (event) {
      let db = event.target.result;
      if (callback && (typeof callback === 'function')) {
        callback(db);
      }
    };
    req.onupgradeneeded = function (event) {
      let db = event.target.result;
      if (newStore) {
        if (!db.objectStoreNames.contains(newStore.name)) {
          db.createObjectStore(newStore.name, {
            keyPath: newStore.key
          })
        }
      }
    };
  },
  // 删除数据库
  deleteDB(name) {
    this.indexedDB.deleteDataBase(name);
  },
  // 关闭数据库
  closeDB(name) {
    name.close();
  },
  // 添加数据
  addData(db, storename, newData, callback) {
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.add(newData);
    req.onsuccess = function (event) {
      let db = event.target.result;
      if (callback && (typeof callback === 'function')) {
        callback(db);
      }
    }
  },
  // 删除数据
  deleteData: function (db, storename, key) {
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    store.delete(key);
  },
  // key获取数据
  getData: function (db, storename, key, callback) {
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.get(key);
    req.onerror = function (event) {
      console.log(`数据获取错误:${event.target.errorCode}`)
    };
    req.onsuccess = function (event) {
      let result = event.target.result;
      if (callback && (typeof callback === 'function')) {
        // 查询结果处理
        callback(result);
      }
    };
  },
  // 获取所有的key
  getAllData: function (db, storename, key, callback) {
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.getAll();
    req.onsuccess = function (event) {
      let db = event.target.result;
      let len = db.length;
      let result = [];
      if (callback && (typeof callback === 'function')) {
        for (let i = 0; i < len; i++) {
          result.push(db[i][key]);
        }
        callback(result);
      }
    }
  }
}
