console.log("time to add some firebase code!")

var nestedKey2 = {
  nestedKey5: ""
}

var nestedKey1 = {
  nestedKey2: nestedKey2
}

var key2 = {
  nestedKey1:  nestedKey1
}

storeValue("key1", key1)
