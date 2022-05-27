const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((ack, value) => {
    if(value > 3){
      return ack;
    }else{
      return [...ack, value]
    }
  
  
  }, []);

console.log(sumWithInitial);
// expected output:[1, 2, 3]