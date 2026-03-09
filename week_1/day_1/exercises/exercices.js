
      const people = ["Greg", "Mary", "Devon", "James"];
      console.log(people);

      /*Write code to remove “Greg” from the people array. */
      people.shift();
      console.log(people);

      /*Write code to replace “James” to “Jason”.*/
      people.splice(2,1,'Jason');
      console.log(people);

     // Write code to add your name to the end of the people array.
      people.push("Mehdi");
      console.log(people);

      //Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
      const indexOfmary = people.indexOf('Mary');
      console.log(indexOfmary);

      //Write code to make a copy of the people array using the slice method.
      const deletedItems=people.slice(1,3);
      console.log(deletedItems);

      //Write code that gives the index of “Foo”. Why does it return -1 ?
      // itz like a way js says "Not found"
      console.log(people.indexOf("Foo"));

      //Create a variable called last which value is the last element of the array.
      const last = people.slice(people.length-1);
      console.log(last);

      //Part II - Loops

      //Using a loop, iterate through the people array and console.log each person.
      for(let i = 0;i <= people.length-1;i++){
        console.log(people[i]);
      }
      console.log("//////////////////////////////////////////////////////////////");
      console.log("//////////////////////////////////////////////////////////////");
      console.log("//////////////////////////////////////////////////////////////");

      
      //Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
      for(let i = 0;i <= people.length-1;i++){
        console.log(people[i]);
        if(people[i] =='devon'){
          break;
        }
      }



