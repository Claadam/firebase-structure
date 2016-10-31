console.log("time to add some firebase code!")

var key1 = {
 nestedKey1: "hi!",
 nestedKey2: "bye!" 

}

storeValue("key1", key1)

var notAsNestedKey = {
 notAsNestedKey: "I'm not as nested!" 
}

var ReallyNestedKey = {
  ReallyNestedKey: "I'm deeply nested!"
}

var nestedKey4 = {
 nestedKey4: ReallyNestedKey 
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

storeValue("key3", "just me!")



list = {
 listItemKey1: "hola!",
 listItemKey2: "adios!"
}

addListItem("listKey1", list)


