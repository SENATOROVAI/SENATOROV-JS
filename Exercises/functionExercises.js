function areArraysSame(a,b){
    for(var i = 0; i < a.length;i++){
      if(a.length != b.length){
         console.log('Массивы разной длины');
         break;
       }
       if(a[i] != b[i]){
          console.log('Массивы не совпадают');
          return;
       }
       if(a[i] === b[i]){
          console.log('Массивы совпадают');
       }
    }
  }
   areArraysSame([1,2,2],[1,2,2]);