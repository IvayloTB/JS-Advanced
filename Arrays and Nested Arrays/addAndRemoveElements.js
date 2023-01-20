function addAndRemoveElements(comm) {
    let arr = [];
    for (let i = 0; i < comm.length; i++) {
        if (comm[i] === 'remove') {
            arr.pop()
        }else{
            arr.push(i+1);
        }
    }

    if (arr.length > 0) {
        for (const i of arr) {
            console.log(i);
        }
    } else {
        console.log('Empty');
    }

}
  //  addAndRemoveElements(['add',
//
  //  'add',
//
  //  'add',
//
  //  'add'])
//
  //  console.log('------------------');


    addAndRemoveElements(['add',  

    'add',  
    
    'remove',  
    
    'add',  
    
    'add'] )

    console.log('------------------');

    addAndRemoveElements(['remove',  

    'remove',  
    
    'remove'] )