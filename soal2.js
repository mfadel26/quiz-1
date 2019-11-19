function VowelsConsonant(v) {
    var vowels = 'AIUEO';
    var consonants = '';
    
    for(let i = 0; i<v.length; i++) {
       if (vowels.includes(v[i])) {
           console.log(v[i]);
       }
       else {
           consonants += v[i] + '\n';
       }
    }
    console.log(consonants.trim());
}
VowelsConsonant('ARKADEMY')