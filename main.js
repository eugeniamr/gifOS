const apiKey = "&api_key=R9zmz0nWp9TFCWFSvNqSAMQ645gtnSFI";
const apiURL = "https://api.giphy.com/v1/gifs/search?q=";
const endpointTend = "https://api.giphy.com/v1/gifs/trending?";
let suggested1 = "programming";
let suggested2 = "dancing";
let suggested3 = "rainbow";
let topic1 = "kpop";
let topic2 = "dogs";
let topic4 = "fries";
let topic3 = "cartoon network";
let searchBox = document.getElementById('search_input');
let containerBlue = document.querySelector('.containerBlue');
let trendingBox = document.getElementById('trend-text');
let searchText = document.getElementById('search-results').value;
let containerResults = document.getElementById('result_container');
let textResult = document.querySelector('.resultsContainer');
// CHANGE THEME

function drop() {
  document.getElementById("btndropdown").classList.toggle("show");
}

document.getElementById('day').addEventListener('click', function() {
  document.body.classList.remove('theme-night');
  localStorage.setItem('theme', 'theme-day');
})

document.getElementById('night').addEventListener('click', function() {
  document.body.classList.add('theme-night');
  localStorage.setItem('theme' , 'theme-night');
})

if (localStorage.getItem('theme') === 'theme-night') {
  document.body.classList.add('theme-night');
}



// SHOW SUGGESTED PANEL

let input = document.getElementsByClassName('search_type')[0];
input.addEventListener("keyup", () => {

  let suggestions = document.getElementById("mySuggestion");
  let button = document.getElementById("button_search");

  if (input.value !== "") {
    suggestions.classList.replace("search_hidden", "search_container");
    button.classList.replace("button_search", "search_button_input");
    lupaIcon.setAttribute("src", "assets/lupa.svg");

  } else {
    suggestions.classList.replace("search_container", "search_hidden");
    button.classList.replace("search_button_input", "button_search");
    lupaIcon.setAttribute("src", "assets/lupa_inactive.svg");
  }
});

// SEARCH FIRST DROPDOWN SUGGESTION

function search_suggestion1() {
  for (let i = 0; i < 12; i++) {
    fetch(`${apiURL}${suggested1}${apiKey}`)
      .then((response) => {
        return response.json();

      })
      .then((json) => {
        gifTitle = json.data[i].title
        console.log(gifTitle);
        return json.data[i].images.downsized.url
      })

      .then((data) => {
        document.getElementById('mySuggestion').style.display = 'none';
        document.getElementById('gifs-suggested').style.display = 'none'; //esconde las secciones para posicionar los resultados arriba
        document.getElementById('gifs-trending').style.display = 'none';
        document.getElementById('search-results').style.display = 'block';
        let span1 = document.createElement("span"); //aca creo el titulo 
        span1.innerHTML = gifTitle
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + data + ")"
        document.getElementById("result_container").appendChild(div);
        div.appendChild(span1);

      })
      .catch((error) => {
        console.log(error)
      })
  }
}


function search_suggestion2() {
  for (let i = 0; i < 12; i++) {
    fetch(`${apiURL}${suggested2}${apiKey}`)
      .then((response) => {
        return response.json();

      })
      .then((json) => {
        gifTitle = json.data[i].title
        console.log(gifTitle);
        return json.data[i].images.downsized.url
      })

      .then((data) => {
        document.getElementById('mySuggestion').style.display = 'none';
        document.getElementById('gifs-suggested').style.display = 'none'; //esconde las secciones para posicionar los resultados arriba
        document.getElementById('gifs-trending').style.display = 'none';
        document.getElementById('search-results').style.display = 'block';
        let span1 = document.createElement("span"); //aca creo el titulo 
        span1.innerHTML = gifTitle
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + data + ")"
        document.getElementById("result_container").appendChild(div);
        div.appendChild(span1);

      })
      .catch((error) => {
        console.log(error)
      })
  }
}


function search_suggestion3() {
  for (let i = 0; i < 12; i++) {
    fetch(`${apiURL}${suggested3}${apiKey}`)
      .then((response) => {
        return response.json();

      })
      .then((json) => {
        gifTitle = json.data[i].title
        console.log(gifTitle);
        return json.data[i].images.downsized.url
      })

      .then((data) => {
        document.getElementById('mySuggestion').style.display = 'none';
        document.getElementById('gifs-suggested').style.display = 'none'; //esconde las secciones para posicionar los resultados arriba
        document.getElementById('gifs-trending').style.display = 'none';
        document.getElementById('search-results').style.display = 'block';
        let span1 = document.createElement("span"); //aca creo el titulo 
        span1.innerHTML = gifTitle
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + data + ")"
        document.getElementById("result_container").appendChild(div);
        div.appendChild(span1);

      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// GIF SEARCH
let userInput;
function searchGifs() {
 userInput = document.querySelector("#search_input").value;
 containerResults.innerHTML = null;
  for (let i = 0; i < 12; i++) {
    let searchGifs = fetch(`${apiURL}${userInput}${apiKey}`)
      .then((response) => {
        return response.json();

      })
      .then((json) => {
        gifTitle = json.data[i].title
        console.log(searchGifs);
        return json.data[i].images.downsized.url
        

      })
      .then((data) => {
        document.getElementById('mySuggestion').style.display = 'none';
        document.getElementById('gifs-suggested').style.display = 'none'; //esconde las secciones para posicionar los resultados arriba
        document.getElementById('gifs-trending').style.display = 'none';
        document.getElementById('search-results').style.display = 'block';
        let span1 = document.createElement("span"); //aca creo el titulo 
        span1.innerHTML = gifTitle
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + data + ")"
        document.getElementById("result_container").appendChild(div);
        div.appendChild(span1);
        

      })
      
      
      .catch((error) => {
        console.log(error)
      })
     
  }

  if (containerBlue.childElementCount < 5) {
    let save = document.createElement('div');
    save.innerHTML = userInput;
    containerBlue.appendChild(save);
    }
    else{
      containerBlue.innerText = null;
      let save = document.createElement('div');
      save.innerHTML = userInput;
      containerBlue.appendChild(save);
    };
}


// search blue div under search box

containerBlue.addEventListener('mousedown', (event) => {
	userInput = event.target.innerHTML;
	searchGifs();
	
})

// add the name of the result im searching

const searchButton = document.querySelector('.button_search');
const textSearch = (click) => {
	if (userInput) {
    textResult.innerHTML = 'Resultados para: ' + userInput; 	
		userInput.value = '';
    
	}
	else {
		click.preventDefault();
	}
};

searchButton.addEventListener('click', textSearch);

// SEARCH USING ENTER

searchBox.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
      searchGifs();
      textSearch();
  }
});


// FUNCTION GET GIFS SUGGESTED 

let searchCategoryGifs = (suggestedGif, img) => {

  fetch(`${apiURL}${suggestedGif}${apiKey}` + '&limit=4')
    .then((response) => {
      return response.json()
    }).then(response => {

      img.src = response.data[0].images.original.url

    })
    .catch((error) => {
      console.log(error)
    })

}

// LOAD GIFS FROM SUGGESTED

let kpopCategory = document.getElementById("kpopCategory")
let dogsCategory = document.getElementById('dogsCategory')
let showsCategory = document.getElementById('showsCategory')
let foodCategory = document.getElementById('foodCategory')

searchCategoryGifs('iu', kpopCategory)
searchCategoryGifs('courage dog', dogsCategory)
searchCategoryGifs('powerpuff girls', showsCategory)
searchCategoryGifs('fries', foodCategory)




// GIFS FROM THE SEE MORE CATEGORY

function seemoreButton() {
  fetch(`${apiURL}${topic1}${apiKey}` + '&limit=16')
    .then(response => response.json())

    .then(data => {
      console.log(data)
      document.getElementById('trendingGifs').innerHTML="";

      data.data.forEach(function (seemoreGif) {
        
        let seemorebuttonGif = document.querySelector(".gif-trending");
        let span2 = document.createElement("span");
        span2.innerHTML = seemoreGif.title
        let img = document.createElement("img");
        img.src = seemoreGif.images.downsized.url;
        let containerseeMore = document.createElement("div")
        containerseeMore.appendChild(img)
        containerseeMore.appendChild(span2)
        seemorebuttonGif.appendChild(containerseeMore)
        trendingBox.innerHTML = "Kpop:";
        document.getElementById("trendingGifs").scrollIntoView({
          behavior: "smooth"
        });


      });
    })
}

function seemoreButton1() {
  fetch(`${apiURL}${topic2}${apiKey}` + '&limit=16')
    .then(response => response.json())

    .then(data => {
      console.log(data) 
      document.getElementById('trendingGifs').innerHTML="";

      data.data.forEach(function (seemoreGif) {
        console.log(seemoreGif)
        let seemorebuttonGif = document.querySelector(".gif-trending");
        let span2 = document.createElement("span");
        span2.innerHTML = seemoreGif.title
        let img = document.createElement("img");
        img.src = seemoreGif.images.downsized.url;
        let containerseeMore = document.createElement("div")
        containerseeMore.appendChild(img)
        containerseeMore.appendChild(span2)
        seemorebuttonGif.appendChild(containerseeMore)
        trendingBox.innerHTML = "Dogs:";
        document.getElementById("trendingGifs").scrollIntoView({
          behavior: "smooth"
        });
        


      });
    })
}

function seemoreButton2() {
  fetch(`${apiURL}${topic3}${apiKey}`+ '&limit=16')
    .then(response => response.json())

    .then(data => {
      
      document.getElementById('trendingGifs').innerHTML="";

      data.data.forEach(function (seemoreGif) {
        console.log(seemoreGif)
        let seemorebuttonGif = document.querySelector(".gif-trending");
        let span2 = document.createElement("span");
        span2.innerHTML = seemoreGif.title
        let img = document.createElement("img");
        img.src = seemoreGif.images.downsized.url;
        let containerseeMore = document.createElement("div")
        containerseeMore.appendChild(img)
        containerseeMore.appendChild(span2)
        seemorebuttonGif.appendChild(containerseeMore)
        trendingBox.innerHTML = "Tv Shows:";
        document.getElementById("trendingGifs").scrollIntoView({
          behavior: "smooth"
        });
        


      });
    })
}

function seemoreButton3() {
  fetch(`${apiURL}${topic4}${apiKey}` + '&limit=16')
    .then(response => response.json())

    .then(data => {
      console.log(data) 
      document.getElementById('trendingGifs').innerHTML="";

      data.data.forEach(function (seemoreGif) {
        console.log(seemoreGif)
        let seemorebuttonGif = document.querySelector(".gif-trending");
        let span2 = document.createElement("span");
        span2.innerHTML = seemoreGif.title
        let img = document.createElement("img");
        img.src = seemoreGif.images.downsized.url;
        let containerseeMore = document.createElement("div")
        containerseeMore.appendChild(img)
        containerseeMore.appendChild(span2)
        seemorebuttonGif.appendChild(containerseeMore)
        trendingBox.innerHTML = "Food:";
        document.getElementById("trendingGifs").scrollIntoView({
          behavior: "smooth"
        });
        


      });
    })
}


//  TRENDING GIFS 


let gifTrend = document.querySelector(".gif-trending");

fetch(`${endpointTend}${apiKey}` + "&limit=20")
  .then(response => response.json())

  .then(data => {
     console.log(data);
     
    data.data.forEach(function (gif) {
      let span5 = document.createElement("span");
      span5.innerHTML = gif.title
      let containerTend = document.createElement("div")
      let img = document.createElement("img");
      img.src = gif.images.original.url;
      gifTrend.appendChild(containerTend);
      containerTend.appendChild(span5)
      containerTend.appendChild(img)

    })
  }); 