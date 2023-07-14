function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    console.log('Matching drivers:', matchingDrivers);
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, letters) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(letters));
    console.log('Matching drivers:', matchingDrivers);
    return matchingDrivers;
  }
  
  function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name === name);
    console.log('Matching drivers:', matchingDrivers);
    return matchingDrivers;
  }
  
  // Test Cases
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  
  console.log('Test 1:');
  findMatching(drivers, 'Bobby'); // ['Bobby', 'Bobby']
  console.log('Test 2:');
  findMatching(drivers, 'Sammy'); // ['Sammy']
  
  console.log('Test 3:');
  findMatching(drivers, 'Bobby'); // ['Bobby', 'bobby']
  
  console.log('Test 4:');
  findMatching(drivers, 'Susan'); // []
  
  const drivers2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  
  console.log('Test 5:');
  fuzzyMatch(drivers2, 'Sa'); // ['Sammy', 'Sarah', 'Sally']
  
  console.log('Test 6:');
  fuzzyMatch(drivers2, 'y'); // []
  
  console.log('Test 7:');
  fuzzyMatch(drivers2, 'mm'); // []
  
  const drivers3 = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  console.log('Test 8:');
  matchName(drivers3, 'Bobby'); // [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
  