import Atropos from 'https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs';

const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
  });

    document.getElementById('myButton').addEventListener('click', function () {
      Swal.fire({
        title: 'Gracias por ver el remake de mi primera página',
        text: 'Espero que les haya gustado, ahora sí, sal de la alerta para redirigirte a despegar.com :)',
        icon: 'info',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'https://www.despegar.com.ar';
        }
      });
    });