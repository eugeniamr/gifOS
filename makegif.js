const apiKey = "R9zmz0nWp9TFCWFSvNqSAMQ645gtnSFI";
const uploadKey = `https://upload.giphy.com/v1/gifs?api_key=R9zmz0nWp9TFCWFSvNqSAMQ645gtnSFI`;
var smallprev = document.getElementById("small")
var preview = document.getElementById('preview');
var recorder;
var image = document.getElementById('imagen');
var newVid= document.getElementById('isavideo'); 
let form = new FormData();
let misGuifos = document.getElementById("my-gifos-cont");
let downloadGif = document.getElementById('btn-download');

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

// ACCESS TO THE CAMERA

function captureCamera(capture) {
  navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then(function (stream) {
      myvideo.srcObject = stream;
      myvideo.play();
      capture && capture(stream);
    })
    .catch(function (err) {
      console.error(err);
      alert("Ups, we need your camera! Please refresh the page and start again");
    });
}

// PREVIEW

function seeVideo() {
  navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        height: {
          max: 480
        }
      }
    })
    .then(function (stream) {
      newVid.srcObject = stream;
      newVid.play();
    })
    .catch(err => console.log(err))
}

// GIF RECORDING 
function captureCamera(callback) {
  navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then(function (camera) {
      callback(camera);
    }).catch(function (error) {
      alert('Unable to capture your camera');
      console.error(error);
    });
}


function startRecordingNow() {
  captureCamera(function (camera) {
    recorder = RecordRTC(camera, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function () {},
      onGifPreview: function (gifURL) {
        image.src = gifURL;
      }
    });
    recorder.startRecording();
    recorder.camera = camera;
    
  });
};

function stopRecordingCallback() {
  preview.src = URL.createObjectURL(recorder.getBlob()); /*para mostrar preview?*/
  downloadGif.href = URL.createObjectURL(recorder.getBlob()); /*descarga URL*/
  console.log(downloadGif);

  form.append('file', recorder.getBlob(), 'eugenia.gif');
  console.log(form.get('file'))
  recorder.camera.stop();
  
}

function stopRecordingNow() {
  this.disabled = true;
  recorder.camera.stop();
  recorder.stopRecording(stopRecordingCallback);
};

function uploadGif() {

  var i = 0;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 40);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  

}




// UPLOADING TO GIPHY

function uploadingGif() {
  
  fetch("https://upload.giphy.com/v1/gifs?api_key=" + apiKey, {
  method: "POST",
  body: form
})
  .then(response => {
      console.log(response.status);
      return response.json();
      
  })
  .then(data => {
      var dataId = data.data.id;
      fetch("https://api.giphy.com/v1/gifs/" + dataId + "?api_key=" + apiKey)
      .then(response => {
          return response.json();
      })
  
      .then(json => {
          console.log(json);
          localStorage.setItem(data.data.id, JSON.stringify(json));

                  
         var mydata = localStorage.getItem(dataId);    //obtengo la data
         var myDataParsed = JSON.parse(mydata);              //la convierto
         var urlGif = myDataParsed.data.images.original.url;      //obtengo la url
         console.log(urlGif);
        

          
          const divContainer = document.createElement("div");
          divContainer.classList.add("gifs-container");
          misGuifos.appendChild(divContainer);

          const gifUploaded = document.createElement("img");
          gifUploaded.classList.add("gifs-made");
          divContainer.appendChild(gifUploaded);

          gifUploaded.src = urlGif;
          document.getElementById("small").src = urlGif;

          
          document.getElementById('copy').style.display = "block";
          var copyTextarea = document.querySelector('.js-copytextarea');
          copyTextarea.value = urlGif;
          

        

          finishupload = setTimeout(function () {
            document.getElementById('fifthWindow').style.display = "none";
            document.getElementById('sixthWindows').style.display = "block";
          }, 3000);
          })
      })
 
    }

    let keysToRemove = ["omVisits", "omVisitsFirst"]; // removes this obj that webhost creates 

    for (key of keysToRemove) {
        localStorage.removeItem(key);
    }
     
    let arr = [];

    function addToLocalStorage() {
      for (i = 0; i <localStorage.length; i++ ) {
          
          arr[i]=localStorage.key(i);
          
          }
          arr.sort();
          console.log(arr);
          
          arr.forEach(key => {    //para cada valor del array
          
          var getData = localStorage.getItem(key);    //obtengo la data
          var dataParsed = JSON.parse(getData);              //la convierto
          var urlGif = dataParsed.data.images.original.url;      //obtengo la url
          console.log(urlGif);


          const divContainer = document.createElement("div");
          divContainer.classList.add("gifs-container");
          misGuifos.appendChild(divContainer);

          const gifSubido = document.createElement("img");
          gifSubido.classList.add("gifs-made");
          divContainer.appendChild(gifSubido);

          gifSubido.src = urlGif;
          })
      }

    addToLocalStorage(); 

   

      
  function cancelFunction() { 
  document.getElementById('fifthWindow').style.display = "none";
  document.getElementById('firstWindow').style.display = "block";
  }
      
function hideall() {    //vuelve al principio 
 document.getElementById('sixthWindows').style.display = "none";
  document.getElementById('firstWindow').style.display = "block";
  }

      
function barMovement() {
  var i = 0;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 0.2);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function copy() {
  var copyText = document.getElementById("copy");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
  document.getElementById('copy').style.display="none";
}


function showOrHideWindows1() {
  document.getElementById("firstWindow").style.display = "none";
  document.getElementById("secondWindow").style.display = "block";
};

function showOrHideWindows2() {
  document.getElementById("secondWindow").style.display = "none";
  document.getElementById("thirdWindow").style.display = "block";
}

function showOrHideWindows3() {
  document.getElementById("thirdWindow").style.display = "none";
  document.getElementById("fourthWindow").style.display = "block";
}

function showOrHideWindows4() {
  document.getElementById("fifthWindow").style.display = "none";
  document.getElementById("firstWindow").style.display = "block";
}

function showOrHideWindows5() {
  document.getElementById("fourthWindow").style.display = "none";
  document.getElementById("fifthWindow").style.display = "block";
}

function showOrHideWindows6() {
  document.getElementById("fourthWindow").style.display = "none"
  document.getElementById("secondWindow").style.display = "block";
}
