function areArraysSame(a,b){
    for(let i = 0; i < a.length;i++){
      if(a.length != b.length){
         alert('Массивы разной длины');
         break;
       }
       if(a[i] != b[i]){
          alert('Массивы не совпадают');
          return;
       }
       if(a[i] === b[i]){
          alert('Массивы совпадают');
       }
    }
  }
   areArraysSame([1,2,2],[1,2,2]);