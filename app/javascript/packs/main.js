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
})

// Funciones

const readBarCode = () => {
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

function getValues () {

}
