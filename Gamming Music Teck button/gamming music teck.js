 function test(btn) {
     if (document.querySelector(`#${btn}`).classList.contains(`is-clicked`)) {
         document.querySelector(`#${btn}`).classList.remove(`is-clicked`)
     } else {
         if ((btn == `gammingBtn`) && (document.querySelector(`#teckBtn`).classList.contains(`is-clicked`) || document.querySelector(`#musicBtn`).classList.contains(`is-clicked`))) {
             document.querySelector(`#${btn}`).classList.add(`is-clicked`)
             document.querySelector(`#musicBtn`).classList.remove(`is-clicked`)
             document.querySelector(`#teckBtn`).classList.remove(`is-clicked`)
         } else if ((btn == `teckBtn`) && (document.querySelector(`#gammingBtn`).classList.contains(`is-clicked`) || document.querySelector(`#musicBtn`).classList.contains(`is-clicked`))) {
             document.querySelector(`#${btn}`).classList.add(`is-clicked`)
             document.querySelector(`#gammingBtn`).classList.remove(`is-clicked`)
             document.querySelector(`#musicBtn`).classList.remove(`is-clicked`)
         } else if ((btn == `musicBtn`) && (document.querySelector(`#gammingBtn`).classList.contains(`is-clicked`) || document.querySelector(`#teckBtn`).classList.contains(`is-clicked`))) {
             document.querySelector(`#${btn}`).classList.add(`is-clicked`)
             document.querySelector(`#gammingBtn`).classList.remove(`is-clicked`)
             document.querySelector(`#teckBtn`).classList.remove(`is-clicked`)
         } else {
             document.querySelector(`#${btn}`).classList.add(`is-clicked`)
         }

     }

 }