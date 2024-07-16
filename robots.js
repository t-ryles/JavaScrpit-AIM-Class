function addTwoNumber(a, b) {
  try {
    const c = a + b;
    console.log('Successful: ' + (c + 5));
    //console.log('Successful: ' + (c += 5));
  } catch(e) {
    console.log('You screwed up and got the following error: ', e);
  } finally {
    console.log('This part exectues anyways.');
  }
}

addTwoNumber(5 , 7)