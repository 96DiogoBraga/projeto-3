function changeMenu(){
    if(document.getElementById('menu-items').style.display == 'none'){
        document.getElementById('menu-items').style.display = 'flex'
    } else{
        document.getElementById('menu-items').style.display = 'none'
    }
}

function botaoX(){
    document.getElementById('menu-items').style.display='none'
}