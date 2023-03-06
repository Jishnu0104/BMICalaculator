const calculate = () =>{
    var height = document.getElementById('height').value
    var weight = document.getElementById('weight').value
    var bmi = (weight/height/height)*10000
    bmi = Math.round(bmi*10)/10
    if (bmi<18.5){
        document.getElementById('output').innerHTML = `${bmi} Underweight`
    }else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById('output').innerHTML = `${bmi} Normal`
    }else if(bmi>=25 && bmi<=29.9){
        document.getElementById('output').innerHTML = `${bmi} Overweight`
    }else if(bmi>30){
        document.getElementById('output').innerHTML = `${bmi} Obesity`
    }
}