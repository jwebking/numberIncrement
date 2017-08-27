function makeEven(a, m) {

    var a0 = a[0].split('');
    var a1 = a[1].split('');
    var m0 = m[0].split('');
    var m1 = m[1].split('');


    function setCounter(one, two) {
        var diff = 0;
        var counter = 0;
        var len = one.length;

        for (var i = 0; i < len; i++) {

            if (one[i] < two[i]) {
                diff = Math.abs(one[i] - two[i]); // absolute value of one-two
                one[i] = Number(one[i]) + Number(diff); //set one[i] to the new number
                counter = counter + diff; //tally the counter based on difference

   
            }
            if (one[i] > two[i]) { 
                diff = Math.abs(one[i] - two[i]); // absolute value of one-two
                one[i] = Number(one[i]) - Number(diff); //set one[i] to the new number
                counter = counter + diff; //tally the counter based on difference
             
            }
        }
        return counter;
    }



  //  console.log(setCounter(a0, a1));
  var newArr =[setCounter(a0,a1), setCounter(m0,m1)];
  return newArr;

};

console.log(makeEven(['3245','4562'], ['6219','7453']));

//9 for the first
//13 for second

//plus one then check if it's equal, plus one check if it's equal 

//when comparing the numbers, compare index 0. If a0 is smaller, plus 1, and counter++. repeat. If it is smaller, -1 and counter++.
//if they are equal, break and move on to the next index

