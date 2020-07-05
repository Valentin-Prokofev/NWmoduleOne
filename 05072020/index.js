// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         d:7,
//         e:9
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];

      console.log(internet);

      function log(a, b, c) {
          console.log(a);
          console.log(b);
          console.log(c);
      }
       const num = [2, 5, 7];

       log(...num);

     const arr = ["a", "b"];
     const newArr = [...arr];


     const q = {
         one: 1,
         two: 2
     };
     
     const newObj = {...q};