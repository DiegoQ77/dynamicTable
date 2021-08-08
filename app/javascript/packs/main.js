const { event } = require('jquery')

const bodyTable = document.querySelector('.table tbody')
// console.log(barCodeInput)

document.addEventListener('DOMContentLoaded', () => {
  const barCodeInput = document.querySelector('.table tbody tr input')
  const nameProduct = document.querySelector('#name')
  const countProducts = document.querySelector('#amount')
  const total = document.querySelector('#total')

  const barcodeROw = document.querySelector('.table tbody tr')

  // variables

  // console.log(nameProduct)
  // console.log(barCodeInput)
  // console.log(countProducts)
  // console.log(total)

  barCodeInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      const row = document.createElement('tr')
      row.innerHTML = agregarFila()
      // console.log(document.getElementById('row-table').value)
      // console.log(e)
      // nameProduct.innerHTML = 'nuevo'
      // countProducts.innerHTML = 5
      // total.innerHTML = 5.50

      // $('table').find('tbody').prepend(agregarFila(e))

      bodyTable.insertBefore(row, barcodeROw)
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
      console.log('Enter+')
      console.log(`Codigo final ${codigo}`)
      setTimeout(() => {
        console.log('CLean')
        document.querySelector('#input-scan').value = ''
      }, 3000)
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

function agregarFila () {
  console.log('element from agregar Fial')
  // console.log(e)
  return (`
    <tr>
      <td>123123123</td>
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
