const clientes = [
    {
        codigo: '0001'
    },
    {
        codigo: '0002'
    },
    {
        codigo: '0003'
    },
    {
        codigo: '221243'
    },
    {
        codigo: '0005'
    },
    {
        codigo: '0006'
    },
    {
        codigo: '0007'
    },
    

    

]

let botao = document.getElementById('btnvalidar')
let validaclientes = false

botao.addEventListener('click', function logar(){

    let pegaclientes = document.getElementById('codigo').value

    for(let i in clientes){

        if(pegaclientes == clientes[i].codigo){
            validaclientes = true
            break
        }
    }

    if (validaclientes == true && codigo.value == 221243){
        location.href = 'cliente0001.html'
    
    }if(validaclientes == true && codigo.value == 0002){
        location.href = 'cliente0002.html'
    
    }if(validaclientes == true && codigo.value == 0003){
        location.href = 'cliente0003.html'
    
    }if(validaclientes == true && codigo.value == 0004){
        location.href = 'cliente0004.html'
    
    }if(validaclientes == true && codigo.value == 0005){
        location.href = 'cliente0005.html'

    }if(validaclientes == true && codigo.value == 0006){
        location.href = 'cliente0006.html'
   
    }if(validaclientes == true && codigo.value == 0006){
        location.href = 'cliente0006.html'

    }if(validaclientes == true && codigo.value == 0006){
        location.href = 'cliente0006.html'

    }if(validaclientes == true && codigo.value == 0006){
        location.href = 'cliente0006.html'
   
    }if(validaclientes == true && codigo.value == 0006){
        location.href = 'cliente0006.html'
   
    } if (validaclientes == false) {
        alert('Cliente não localizado!')
    }
      
})

