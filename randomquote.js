const btnel= document.querySelector('.btn');
btnel.addEventListener('click',()=>{
    callingFun()
})

const apiurl= "https://api.quotable.io/random"

async function callingFun(){
    try {
        btnel.disabled=true
        btnel.innerHTML='Loading..'
        const re= await fetch(apiurl);
        // console.log(api.quotable.io/random)
        const rele= await re.json();
        const result = document.querySelector('.para');
        result.innerHTML=`${rele.content}`
        const authorel=document.querySelector('.author')
        authorel.innerHTML=`~ ${rele.author}`
        btnel.disabled=false
        btnel.innerHTML='GET A QUOTE'

        console.log(rele)
        
    } catch (error) {
        console.log(error)
        
    }

}

callingFun()