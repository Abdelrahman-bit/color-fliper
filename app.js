const btn = document.querySelector('.change-btn')
const colorValue = document.querySelector('#color-value')
const body = document.querySelector('body')
const hex = document.querySelector('.random-color')
const simple = document.querySelector('.fixed-color')

simple.style.backgroundColor = '#ccc' // defult activ option is the siple one
let isChecked = {
    hex: false,
    simple: true
}
const hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'] // used to genrate random hex value
const simpleArray = ['green', 'wheat', '#34e3e4', 'gray', 'hsl(320, 77%, 55%)', 'red', 'yellow'] // used to bick one random in simple mode

const setSwitcherColor = function(){
    if(!isChecked.simple){
        isChecked.hex = true
        hex.style.backgroundColor = '#ccc'
        simple.style.backgroundColor = 'transparent'
    }else if(isChecked.simple){
        isChecked.hex = false
        simple.style.backgroundColor = '#ccc'
        hex.style.backgroundColor = 'transparent'
    }
}

btn.addEventListener('click', function(){
    const randomValue = generateRandomNum(simpleArray.length)
    if(isChecked.hex){
        document.querySelector('.simple-options').style.visibility = 'hidden'
        const hexColor = randomHexGenerator(hexArray)
        body.style.backgroundColor = hexColor
        colorValue.textContent = hexColor
    }else{
        document.querySelector('.simple-options').style.visibility = 'visible'
        body.style.backgroundColor = simpleArray[randomValue]
        colorValue.textContent = simpleArray[randomValue]
    }

})
simple.addEventListener('click', function(){
    if(!isChecked.simple){
        isChecked.simple = true
    }else if(isChecked.simple){
        isChecked.simple = false
    }
    // console.log(`simple: ${isChecked.simple}`)
    setSwitcherColor()

    
})

hex.addEventListener('click', function(){
    if(!isChecked.hex){
        isChecked.hex = true
    }else if(isChecked.hex){
        isChecked.hex = false
    }
    // console.log(isChecked.hex)
    setSwitcherColor()

})

// genreate random number function
const generateRandomNum = function(length){
    return Math.floor(Math.random() * (length)) 
}
// ..........console.log(simpleArray)

// genrate random hex value
const randomHexGenerator = function(array){
    let newArray = ''
    for(let i=0; i<6; i++){
        newArray += array[generateRandomNum(array.length)]
    }
    return `#${newArray}`
}



// .............console.log(randomHexGenerator(hexArray))