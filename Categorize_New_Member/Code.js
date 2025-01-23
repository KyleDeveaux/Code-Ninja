function openOrSenior(data){
    let newMembers = [];
    
    for(let i = 0; i < data.length; i++){
      data[i][0] < 55 || data[i][1] <= 7 ? newMembers[i] = "Open" : newMembers[i] = "Senior"
    }
    return newMembers
  }