function showBeach() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Beach Destinations</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ramla_Bay.jpg/330px-Ramla_Bay.jpg" alt="Beach 1">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Beach_at_Fort_Lauderdale.jpg/250px-Beach_at_Fort_Lauderdale.jpg alt="Beach 2">
  `;
}

function showTemple() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Temple Destinations</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Maa_Mundeshwari_Devi.jpg/250px-Maa_Mundeshwari_Devi.jpg" alt="Temple 1">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Vishnupadh_Temple.jpg" alt="Temple 2">
  `;
}

function showCountry() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Explore by Country</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Qutb_minar_ruins.jpg/250px-Qutb_minar_ruins.jpg" alt="India">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Series-N700a-Mt.Fuji.jpg/250px-Series-N700a-Mt.Fuji.jpg" alt="Japan">
  `;
}
