const pets = [
    {name:'Pop',
    type:'Dog',
    breed:'Aussie',
    age: 4,
    photo: 'https://sun9-33.userapi.com/impg/QI41Ksjrq1sHNrx0PDznWbZBlNy5dQ4uxPwDMw/4Y6CXVclV8A.jpg?size=800x580&quality=96&sign=b5bf4192157e3c6e0446d2bf5a96f7c6&type=album'
    },
    
    {name: 'Kate',
    type: 'Dog',
    breed: 'Dachshund',
    age: 5,
    photo:' https://sun9-40.userapi.com/impg/GqmVW27plpNboiREeq8Lavb4t_Rqtdl-Xn3uhA/umsg5eyWbgo.jpg?size=800x580&quality=96&sign=ac4f5fecd0a349a6431dae17b7932946&type=album'
    },
    
    {name: 'Goldy',
    type: 'dog',
    breed: 'Golden',
    age: 2,
    photo:'https://sun1.dataix-kz-akkol.userapi.com/impg/uOTxNRSjcub_bybmd-K0k8vdIu9l1jXhsasCQw/to1Sl0TEFsA.jpg?size=800x580&quality=96&sign=39db6f2a48219887bb04fadad5722240&type=album'
    },
    
    {name: 'Ash',
    type: 'Cat',
    breed: 'Persian',
    age: 9,
    photo:'https://sun9-59.userapi.com/impg/Xd5NABPNTwCuNkyebSgQNwkrIa4ENbuagtlv1w/Ttl0zhSJtaU.jpg?size=800x580&quality=96&sign=692354895f1392be7726184d50919ced&type=album'
    },
    
    {name: 'Bob' ,
    type: 'Dog',
    breed: 'Pug',
    age: 4,
    photo:' https://sun9-85.userapi.com/impg/5RH26cECwu3sttyKNQitfX-dl4HOQsdYjt05SQ/CRqpLXYuiOg.jpg?size=800x580&quality=96&sign=bc506e11b0b2da6e7abc51847d3136f6&type=album'
    },
    
    {name: 'Snezhka',
    type: 'Cat',
    breed: 'Sphinx',
    age: 5,
    photo:'https://sun2.dataix-kz-akkol.userapi.com/impg/fMu9lnggvZumGbTda29gwnaDiBEuusjf6cI9GA/bW10GdPTj1M.jpg?size=800x580&quality=96&sign=e3c679eb5cbef9549287f56f79164312&type=album'
    } 
  ]
  
  let html = ''
  
  const display = (arr) =>{
    for ( let i = 0; i < arr.length; i++ ){
      let pet = arr[i]
      html+=`
        <h2>${pet.name}</h2>
        <h3>${pet.type} | ${pet.breed}</h3>
        <p>${pet.age}</p>
        <img src = "${pet.photo}" alt = "${pet.breed}">
        `
        console.log(html)
    } 
    document.querySelector('main').innerHTML = html
  }
  display(pets);