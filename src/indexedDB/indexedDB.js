// indexedDB浏览器本地存储
export default {
  indexedDB: window.indexedDB || window.webkitindexedDB || window.msIndexedDB || window.mozIndexedDB,
  // 打开数据库
  openDB: function (name, version, newStore, callback) {
  // var version = version || 1;
    var req = this.indexedDB.open(name, version);
    req.onerror = function (event) {
      window.alert(`indexedDB数据库无法打开，错误：${event.target.errorCode}`);
    };
    req.onsuccess = function (event) {
      var db = event.target.result;
      if (callback && (typeof callback === 'function')) {
        callback(db);
      }
    };
    req.onupgradeneeded = function (event) {
      var db = event.target.result;
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
  deleteDB: function (name) {
    this.indexedDB.deleteDataBase(name);
  },
  // 关闭数据库
  closeDB: function (name) {
    name.close();
  },
  // 添加数据
  addData: function (db, storename, newData, callback) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.add(newData);
    req.onsuccess = function (event) {
      var db = event.target.result;
      if (callback && (typeof callback === 'function')) {
        callback(db);
      }
    }
  },
  // 删除数据
  deleteData: function (db, storename, key) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    store.delete(key);
  },
  // key获取数据
  getData: function (db, storename, key, callback) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.get(key);
    req.onerror = function (event) {
      console.log(`数据获取错误:${event.target.errorCode}`)
    };
    req.onsuccess = function (event) {
      var result = event.target.result;
      if (callback && (typeof callback === 'function')) {
        // 查询结果处理
        callback(result);
      }
    };
  },
  // 获取全部数据
  getAllData: function (db, storename, callback) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    let req = store.getAll();
    req.onsuccess = function (event) {
      let db = event.target.result;
      if (callback && (typeof callback === 'function')) {
        callback(db);
      }
    }
  }
}
