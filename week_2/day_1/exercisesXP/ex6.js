(function fortuneTeller (title ,geoLocation ,partnerName,NmbOFchildren){
  
  const sentence =`"You will be a ${title} in ${geoLocation} and married to ${partnerName} with ${NmbOFchildren} kids."`;

  const p = document.createElement('p');
  p.textContent = sentence ;
  document.body.appendChild(p);

})('backer','morocco','redwan','3');