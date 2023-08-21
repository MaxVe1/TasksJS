const fetchEarthPopulation = async () => {
  const apiPromise = new Promise((resolve) => {   
  
  setTimeout(resolve,2000);    
  }).then(()=>{
    const populationData = 8000000;
    console.log(populationData);
    return populationData;
  });
 
};

 console.log( fetchEarthPopulation());
 