

      const people = ["Greg", "Mary", "Devon", "James"];

        console.log(people);
      people.shift();
      console.log(people);

      people.push("Mehdi");
      console.log(people);

      const indexOfmary = people.indexOf('Mary');
      console.log(indexOfmary);

      const deletedItems=people.slice(1,3);
      console.log(deletedItems);

      console.log(people.indexOf("Foo"));

      const last = people.slice(people.length-1);
      console.log(last);

      for(let i = 0;i <= people.length-1;i++){
        console.log(people[i]);
      }
      console.log("////////////////////") 
      
      for(let i = 0;i <= people.length;i++){
        console.log(people[i]);
        if(i == 1){
          break;
        }
      }



