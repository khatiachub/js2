// task1
let array=[5, 25, 89, 120, 36];
array.push('javascript', 'python');
array.unshift('css','html');
console.log(array);
array.shift();
array.pop();
console.log(array);

//task2
let array=['fortoxali', 'banani', 'msxali'];
console.log(array);
array.push('vashli','ananasi');
array.unshift('sazamtro');
console.log(array);
array.splice(3,0, 'mango');
array.shift();
array.pop();
console.log(array);

//task3
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray=array.map(x=>x/3);
console.log(newArray);

//task4
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"]
let newArray=array.filter(x=>typeof x==='number');
console.log(newArray);

//task5
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguages=languages.filter(x=>x.length>3);
console.log(newLanguages);

//task6
way-1-reduce
let array= ['academy', 'of', 'digital', 'industries'].reduce(function(acumulator, currentvalue){
    return acumulator+' '+currentvalue;
},
''
)
console.log(array);

// way-2-join
let array= ['academy', 'of', 'digital', 'industries'].join(' ')
console.log(array);

//task7
let item = [12, 'google', 32, null, 'yahoo', 25];
let newItem=item.map(function(x){
    if(typeof (x)==='number'){
        return x*x
    }else if(typeof(x)==='string'){
        return  x.toUpperCase();
    }else{
        return x
    }
});
console.log(newItem);

//task8
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWords=words.filter(x=>x.includes('m')|| x.includes('M'));
console.log(newWords);

