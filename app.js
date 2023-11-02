const $submit = document.querySelector(".submit");
const $resultTitle = document.querySelector(".result-title");
const $listMonth = document.querySelector(".list-month");
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$submit.addEventListener("click", (e) => {
  e.preventDefault();
  $listMonth.innerHTML = ''

  const $month = document.querySelector(".month").value;
  const $year = document.querySelector(".year").value;

  if ($month != "" && $year != "") {
    let date = new Date(`${$month}-13-${$year}`).getDay();

    if (date == 5) {
      $resultTitle.textContent = `Si hay viernes 13 en ${months[$month - 1]}`;
      document.body.style = "background-image: url(assets/1.gif)";
    } else {
      $resultTitle.textContent = `No hay viernes 13 en ${months[$month -1]}`;
      document.body.style = "background-image: url(assets/tree.webp)";
      $listMonth.innerHTML = "";
    }
  } else if ($month == "" && $year != "") {
    let date;

    for (let i = 0; i < 13; i++) {
      date = new Date(`${i}-13-${$year}`).getDay();
      if (date == 5) {
        $resultTitle.textContent = `Viernes 13 ${$year}`;
        $listMonth.innerHTML += `<li>${months[i - 1]}</li>`;
        document.body.style = "background-image: url(assets/1.gif)";
      }
    }
  }
});
