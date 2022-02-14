// code your solution here
function superbowlWin(data) {
  // Arrow function to 'find' a result of "W" in the array of objects
  const objectMatch = data.find(object => object.result === "W");

  // If objectMatch is 'Truthy' (i.e. it is NOT 'undefined'), return
  // the value of the 'year' key. Otherwise, return 'undefined'.
  return objectMatch ? objectMatch.year : undefined;
}
