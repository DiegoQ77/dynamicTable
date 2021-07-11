const { event } = require('jquery')

document.addEventListener('DOMContentLoaded', () => {
  const barCodeInput = document.querySelector('.table tbody tr input')
  const nameProduct = document.querySelector('#name')
  const countProducts = document.querySelector('#amount')
  const total = document.querySelector('#total')

  // console.log(nameProduct)
  // console.log(barCodeInput)
  // console.log(countProducts)
  // console.log(total)

  barCodeInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      console.log(document.getElementById('row-table').value)
      console.log(e)
      nameProduct.innerHTML = 'nuevo'
      countProducts.innerHTML = 5
      total.innerHTML = 5.50

      $('table').find('tbody').append(agregarFila())
    }
  })
})

// Funciones

const readBarCode = () => {
  console.log('funcion bar code')
}

function agregarFila () {
  return (`
    <tr>
      <td><input type="number" class="form-control" id="row-table" placeholder="Example input"></td>
      <td>Coca Cola</td>
      <td>cantidad</td>
      <td>6.50</td>
      <td><button type='button' class='btn btn-outline-danger'>Eliminar</td>
    </tr>
  `)
}
