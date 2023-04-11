
function digitalRoot(n) {
    let nSum = 0;
    let nSum1 = 0;
    for (i = 0; i <= n.length; i++) {
      nSum = nSum + parseInt(n[i]);;
    }
    for (i = 0; i<= nSum.length; i++) {
      if (nSum.length > 0) {
      for (i = 0; i < nSum.length; i++) {
      nSum1 = nSum1 + parseInt(nSum.toString()[i]);           
      }
          
    } else {
      return nSum;
    }   
    
  } 
  return nSum1;  
  
}
console.log(digitalRoot(16));
console.log(digitalRoot(942));