console.log("time to add some firebase code!")

var notAsNestedKey = {
 notAsNestedKey: "I'm not as nested!" 
}

var ReallyNestedKey = {
  reallyNestedKey: "I'm deeply nested!"
}

var nestedKey4 = {
 nestedKey4: reallyNestedK 
}

var nestedKey2 = {
  nestedKey5: notAsNestedKey,
  nestedkey3: nestedKey4
}

var nestedKey1 = {
  nestedKey2: nestedKey2
}

var key2 = {
  nestedKey1:  nestedKey1
}

storeValue("key2", key2)
