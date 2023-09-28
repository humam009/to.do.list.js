add = () => {
    let input = document.getElementById('input');
    let button = document.getElementById('button');
    let list = document.getElementById('list')
   
  

    if(input.value.trim() !== ""){
        let text = input.value;
        console.log(text)
        let newdev = document.createElement('div')
        newdev.className = 'myclass'
        newdev.id = 'mc'
        newdev.innerHTML = `${text}`;
        //-------------------------------------------------
        let del = document.createElement('span')
        del.id = 'del'
        del.innerText = '✘'
        //-------------------------------------------------
        let ok=document.createElement('span')
        ok.id="ok"
        ok.innerText = "✓";
        
        //-------------------------------------------------
        newdev.appendChild(ok)
        newdev.appendChild(del)
        list.appendChild(newdev)
        
        
        input.value = ''
        //-------------------------------------------------
      
        ok.addEventListener('click' , function(){
            if(newdev.classList.contains('line')){
                newdev.classList.remove('line')
            }
            else{
                newdev.classList.add('line')
            }
        })
        //-------------------------------------------------
        del.addEventListener('click' , function(){
            list.removeChild(newdev)
            list.removeChild(ok)
            list.removeChild(del)
        })
        
    }
    
}

let button = document.getElementById('button');

button.addEventListener('mouseover' , function(){
    button.style.backgroundColor = "#07041e"
    button.style.color = '#fff';
    button.style.transition = '1s'
    button.style.transform = 'scale(1.1)'
    button.style.marginLeft = '5px'
}) 

button.addEventListener('mouseleave' , function(){
    button.style.backgroundColor = "#fff";
    button.style.color = '#07041e';
    button.style.transition = '1s'
    button.style.transform = 'scale(1)'
    button.style.marginLeft = '0px'
}) 

//-------------------------------------------------
let input = document.getElementById('input');

input.addEventListener('mouseover' , function(){
    input.style.backgroundColor = "#07041e"
    input.style.color = '#fff';
    input.style.transition = '1s'
    input.style.transform = 'scale(1.03)'
    input.style.marginRight = '5px'
}) 

input.addEventListener( 'mouseout' , function(){
    input.style.backgroundColor = "#fff";
    input.style.color = '#07041e';
    input.style.transition = '1s'
    input.style.transform = 'scale(1)'
    input.style.marginRight = '0'
}) 
