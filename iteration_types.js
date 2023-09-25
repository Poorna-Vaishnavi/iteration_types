const arrayOfObjects = [
  {
    name: 'Poorna',            
    age: 21,                
    isStudent: false,       
    scores: [85, 92, 78],  
    address: {
      street: '123 Main St',
      city: 'Salem'
    },                      
    hobbies: ['reading', 'music'] 
  },
  {
    name: 'Vaishu',           
    age: 20,                
    isStudent: true,       
    scores: [92, 88, 94],   
    address: {
      street: '456 Elm St',
      city: 'Chennai'
    },                     
    hobbies: ['sports', 'painting'] 
  }

];

arrayOfObjects.forEach((obj, index) => {
  console.log(`Object ${index + 1}:`);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const dataType = Array.isArray(value) ? 'Array' : typeof value;
      console.log(`  ${key}: ${value} (Type: ${dataType})`);
    }
  }
  console.log('\n');
});
