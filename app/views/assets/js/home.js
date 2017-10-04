$('.tokenize-demo').tokenize2();

const chords = ['C','C#','D','D#','E','F','F#','G','G#','A','B','Bb','Db','Eb','Gb','Ab'];
let selectedChords = [];

$('.tokenize-demo').on('tokenize:tokens:add', function(e, value,text, force){
  selectedChords.push(value);
});   

$('.tokenize-demo').on('tokenize:tokens:remove', function(e, value){
  let index = selectedChords.indexOf(value);
  if (index > -1) {
    selectedChords.splice(index, 1);
  }
});

const getEasyChords = function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/getEasyChords',
    datatype: 'json',
    data: {selectedChords: JSON.stringify(selectedChords)},
    success: displayEasyChords,
    error: function(err){console.log(err);}
  });
}

const displayEasyChords = function(result){
  document.getElementById('capo').innerHTML = result.capo;
  document.getElementById('oldChords').innerHTML = selectedChords;
  document.getElementById('chords').innerHTML = JSON.parse(result.chords);
}

