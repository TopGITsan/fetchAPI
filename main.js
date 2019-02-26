const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = ()=>{
    let verse = verseChoose.value;
    updateDisplay(verse);
};

const updateDisplay = (verse)=>{
    verse = verse.replace(' ','');
    verse = verse.toLowerCase();
    let url = './data/' + verse + '.txt';
    console.log(url)
    
    fetch(url).then(response=>{
        response.text().then(text =>{
            poemDisplay.textContent = text;
        })
    })
};

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';