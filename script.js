// Tüm pastel renkleri içeren bir dizi oluşturun
const pastelColors = [
    "#FFB6C1", // Açık Pembe
    "#FF69B4", // Parlak Pembe
    "#FFA07A", // Açık Somon
    "#FFA500", // Turuncu
    "#F0E68C", // Khaki
    "#98FB98", // Açık Yeşil
    "#DDA0DD", // Orkide Rengi
    "#87CEEB", // Açık Mavi
    "#D8BFD8", // Lavanta
    "#FFE4B5", // Sarı
    "#F5DEB3", // Buğday
    "#FFD700", // Altın
  ];
  
  // HTML elementlerini seçin
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  
  // Rastgele bir pastel renk seçmek için bir işlev tanımlayın
  function getRandomPastelColor() {
    const randomIndex = Math.floor(Math.random() * pastelColors.length);
    return pastelColors[randomIndex];
  }
  
  // Rastgele bir pastel renk uygulayacak olan olay dinleyicisini tanımlayın
  changeColorBtn.addEventListener("click", () => {
    const randomPastelColor = getRandomPastelColor();
    colorBox.style.backgroundColor = randomPastelColor;
  });
  