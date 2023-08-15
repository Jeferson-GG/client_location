const clientes = [
    {
        codigo: '210917'
    },
    {
        codigo: '117507'
    },
    {
        codigo: '79143'
    },
    {
        codigo: '221243'
    },
    {
        codigo: '179540'
    },
    {
        codigo: '234652'
    },
    {
        codigo: '210073'
    },
    {
        codigo:'31427'
    },
    {
        codigo:'60956'
    },
    {
        codigo:'154576'
    },
    {
        codigo:'34567'
    },
    {
        codigo:'218606'
    },
    {
        codigo:'189285'
    },
    {
        codigo:'153286'
    },
    {
        codigo:'214508'
    },
    {
        codigo:'213851'
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
        location.href = 'cliente221243.html'
    
    }if(validaclientes == true && codigo.value == 210917){
        location.href = 'cliente210917.html'
    
    }if(validaclientes == true && codigo.value == 117507){
        location.href = 'cliente117507.html'
    
    }if(validaclientes == true && codigo.value == 79143){
        location.href = 'cliente79143.html'
    
    }if(validaclientes == true && codigo.value == 179540){
        location.href = 'cliente179540.html'

    }if(validaclientes == true && codigo.value == 234652){
        location.href = 'cliente234652.html'
   
    }if(validaclientes == true && codigo.value == 210073){
        location.href = 'cliente210073.html'

    }if(validaclientes == true && codigo.value == 31427){
        location.href = 'cliente31427.html'

    }if(validaclientes == true && codigo.value == 60956){
        location.href = 'cliente60956.html'
   
    }if(validaclientes == true && codigo.value == 154576){
        location.href = 'cliente154576.html'
   
    } if(validaclientes == true && codigo.value == 34567){
        location.href = 'cliente34567.html'
   
    }if(validaclientes == true && codigo.value == 218606){
        location.href = 'cliente218606.html'
   
    }if(validaclientes == true && codigo.value == 189285){
        location.href = 'cliente189285.html'
   
    }if(validaclientes == true && codigo.value == 153286){
        location.href = 'cliente153286.html'
   
    }if(validaclientes == true && codigo.value == 214508){
        location.href = 'cliente214508.html'
   
    }if(validaclientes == true && codigo.value == 213851){
        location.href = 'cliente213851.html'
   
    }if(validaclientes == true && codigo.value == 6){
        location.href = 'cliente.html'
   
    }if(validaclientes == true && codigo.value == 7){
        location.href = 'cliente.html'
   
    }if(validaclientes == true && codigo.value == 8){
        location.href = 'cliente.html'
   
    }if(validaclientes == true && codigo.value == 9){
        location.href = 'cliente.html'
   
    }if (validaclientes == false) {
        alert('Cliente não localizado!')
    }
      
})

