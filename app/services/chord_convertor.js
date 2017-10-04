const returnsEasyChordsWithCapo = function(chords) {
  console.log(chords);
  return {chords: JSON.stringify(['Am','C','F','G']), capo: '2'};
}

module.exports = returnsEasyChordsWithCapo;
