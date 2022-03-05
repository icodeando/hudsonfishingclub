// document.querySelector('button').addEventListener('click', getFish)


// function getFish(){
//   let fish = document.getElementById('input').value
 
//   fish = fish.replace(/<(.|\n)*?>/g, '');


//   fetch(`https://www.fishwatch.gov/api/species/${fish}`)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h4').innerText = data[0].Habitat
//         document.querySelector('h5').innerText = data[0].Population
//         document.querySelector('h6').innerText = data[0].Availability
//         document.querySelector('h7').innerText = data[0].Color
//         document.querySelector('h8').innerText = data[0].Texture
//         document.querySelector('h9').innerText = data[0].Taste


//         // document.querySelector('h3').innerText = data[0].Health_benefits

//         // document.querySelector('img').src = data[0].Species_Illustration_Photo

//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//     }
