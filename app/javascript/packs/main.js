const { event } = require('jquery')

const bodyTable = document.querySelector('.table tbody')
// console.log(barCodeInput)

document.addEventListener('DOMContentLoaded', () => {
  const barCodeInput = document.querySelector('.table tbody tr input') //Input principal 
  const nameProduct = document.querySelector('#name')
  const countProducts = document.querySelector('#amount')
  const total = document.querySelector('#total')

  const barcodeROw = document.querySelector('.table tbody tr')

  // variables
  let codeI = ''

  // console.log(nameProduct)
  // console.log(barCodeInput)
  // console.log(countProducts)
  // console.log(total)

  barCodeInput.addEventListener('keyup', function (e) {
    console.log('Valor de e . key')
    console.log(e.key)
    console.log(typeof(e.key))
    if (e.key !== 'Enter'){
      codeI = `${codeI}${e.key}`
    }
    if(e.key === 'Enter' && codeI === ''){
      console.log('vacio NO SE CREA NADA')
      console.log(e.key)
    }else{
      if (e.keyCode === 13) {
        console.log('code de barCOdeIn')
        console.log(e)
        let code = 1
        // Captar la data y enviar a mi funcion agregarFila
        e.preventDefault()
        const row = document.createElement('tr')
        row.innerHTML = agregarFila(codeI)
        bodyTable.insertBefore(row, barcodeROw)
        barCodeInput.value = ''
        codeI = ''
      }
    }



  })

  // Empezando desde 0
  let codigo = ''
  let b = 0
  const sendCode = (e) => {
    // console.log(`se dio click ${e.code}`)
    // console.log(e.key)
    codigo = `${codigo}${e.key}`
    b = b + 4
    console.log(b)
    console.log(codigo)
    if (e.key === 'Enter') {
      // console.log('Enter+')
      // console.log(`Codigo final ${codigo}`)

    }
  }

  const barCodeInputScan = document.querySelector('#input-scan')
  console.log(barCodeInputScan)
  barCodeInputScan.addEventListener('keyup', sendCode)
})

// Funciones

const sendDataToController = () => {
  console.log('funcion bar code')
}

function agregarFila (code) {
  let codigo = code
  console.log('element from agregar Fial')
  console.log(code)
  // Buscar en la Base de datos y completar la fila
  // Realizar el AJAX
  // console.log(e)
  return (`
    <tr>
      <td>${codigo}</td>
      <td>Coca Cola</td>
      <td>cantidad</td>
      <td>6.50</td>
      <td><button type='button' class='btn btn-outline-danger'>Eliminar</td>
    </tr>
  `)
}

// Jquery

// $('.table tbody tr input').keyup(function (e) {
//   const url = '/add_items'
//   if (e.keyCode === 13) {
//     $.ajax({
//       url: url,
//       data: { product: { name: 'Diego', description: 'whatever' } },
//       success: function (e) {
//         console.log('Success')
//         console.log(e)
//       },
//       error: function () {
//         console.log('error')
//       }
//     })
//   }
// })

