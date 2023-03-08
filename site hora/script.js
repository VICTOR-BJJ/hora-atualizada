function carregar() {
    var msg = document.getElementById('msg')
    var foto= document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
  let min = data.getMinutes()
let seg = data.getSeconds()
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `agora sao ${hora}:${min} HORAS .<STRONG> BOM DIA </STRONG> `
        foto.src = 'manha1.png'
        document.body.style.background = '#e2cd9f'
        }else if (hora >= 12 && hora  <=18 ){
          
            msg.innerHTML = `agora sao ${hora}:${min} HORAS .<STRONG> BOA TARDE </STRONG>`
            foto.src = 'tarde1.png'
            document.body.style.background = '#B27F40'
        }else if (hora >= 19 && hora <= 24){
            msg.innerHTML = `agora sao ${hora}:${min} HORAS .<STRONG> BOA NOITE</STRONG> `
            foto.src = 'noite1.png'
            document.body.style.background = '#115383'
    
        } 
        }
    

