let suggestions = [
    // List of suggestions
    "Spain", "France", "Polynesia", "Italy", "Greece", "Germany", "Portugal", "Netherlands", "Belgium", "Austria", "Switzerland", "Czech Republic", "Sweden", "Denmark", "Norway", "Finland", "Ireland", "United Kingdom", "Iceland", "Russia", "Ukraine", "Belarus", "Lithuania", "Latvia", "Estonia", "Moldova", "Romania", "Bulgaria", "Serbia", "Croatia", "Bosnia and Herzegovina", "Montenegro", "Albania", "North Macedonia", "Kosovo", "Gibraltar", "Andorra", "Monaco", "Vatican City", "Malta", "Cyprus", "Turkey", "Syria", "Canada", "Maldives", "Sri Lanka", "India", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Thailand", "Laos", "Cambodia", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines", "Brunei", "Timor-Leste", "China", "Mongolia", "North Korea", "South Korea", "Japan", "Taiwan", "Hong Kong", "Macau", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Tajikistan", "Kyrgyzstan", "Afghanistan", "Pakistan", "Iran", "Iraq", "Kuwait", "Saudi Arabia", "Yemen", "Oman", "Barcelona", "Paris", "Prague", "Bora Bora", "Venice", "Rome", "Athens", "Berlin", "Amsterdam", "Brussels", "Vienna", "Zurich", "Stockholm", "Oslo", "Helsinki", "Dublin", "London", "Reykjavik", "Moscow", "Kiev", "Minsk", "Vilnius", "Riga", "Tallinn", "Bucharest", "Sofia", "Belgrade", "Zagreb", "Sarajevo", "Podgorica", "Tirana", "Skopje", "Pristina", "Andorra la Vella", "San Marino", "Valletta", "Nicosia", "Ankara", "Ottawa", "Malé", "Colombo", "New Delhi", "Kathmandu", "Bangkok", "Vientiane", "Phnom Penh", "Hanoi", "Kuala Lumpur", "Jakarta", "Manila", "Beijing", "Ulaanbaatar", "Seoul", "Tokyo", "Taipei", "Hong Kong",
  ];
  
  const searchWrapper = document.querySelector(".search-input");
  const inputBox = searchWrapper.querySelector("input");
  const suggBox = searchWrapper.querySelector(".autocom-box");
  const button = searchWrapper.querySelector(".search-button");
  let linkTag = searchWrapper.querySelector("a");
  let webLink;
  
  inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data) => {
        return (data = "<li>" + data + "</li>");
      });
      searchWrapper.classList.add("active");
      showSuggestions(emptyArray);
      let allList = suggBox.querySelectorAll("li");
      for (let i =  0; i < allList.length; i++) {
        allList[i].addEventListener('click', function() {
          select(this);
        });
      }
    } else {
      searchWrapper.classList.remove("active");
    }
  };
  
  function select(element, event) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
  }
  
  function showSuggestions(list) {
    let listData;
    if (!list.length) {
      let userValue = inputBox.value;
      listData = "<li>" + userValue + "</li>";
    } else {
      listData = list.join("");
    }
    suggBox.innerHTML = listData;
  }