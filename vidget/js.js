const requestURL = 'https://lawyerforyou.ru/api/link'

let URLs = {};

function sendRequest(method, url){
    return new Promise((resolve,reject)=>{
        const c = new XMLHttpRequest()

        c.open(method,url)

        c.responseType='json'

        c.onload = () =>{
            if(c.status >=400){
                reject (c.response)
            } else {
                resolve(c.response)
            }
        }

        c.onerror = () =>{
            reject(c.response)
        }

        c.send()
    })
}



sendRequest('GET',requestURL)
    .then(data => URLs = data)
    .catch(err => console.log(err))


let vidget = document.querySelector('.forVidget');

let creatElementFunc = function  (widthpx, heightpx, leftpx, toppx, url){

    let objName = document.createElement('div');
 
    objName.style.width= widthpx;
    objName.style.height= heightpx;

    objName.style.transition= '1s';
    objName.style.animation = 'example 1s';

    objName.style.position = 'absolute';
    objName.style.left = leftpx;
    objName.style.top = toppx;

    objName.style.borderRadius = "5px";

    objName.style.backgroundImage = url;
    objName.style.backgroundRepeat = 'no-repeat';

    return objName;
}


let appleStoreShow = function (){

    appleStore = creatElementFunc('300px','100px','50px','550px',"url('Untitled-2.png')");
    appleStore.style.margin ="5px 0px 0px 0px";
    vidget.appendChild(appleStore);

    appleStore.onclick = function(){
      //window.open('https:\/\/apps.apple.com\/app\/tvoi-yurist\/id1444880215', '_blank');
      window.open(URLs['ios'])
    };
}


let playMarketShow = function (){

    playMarket= creatElementFunc('300px','100px','50px','450px',"url('Untitled-3.png')");

    vidget.appendChild(playMarket);

    playMarket.onclick = function(){
       // window.open('https:\/\/play.google.com\/store\/apps\/details?id=ru.softwarecenter.youlawyer&hl=ru', '_blank');
       window.open(URLs['android'])
    };
}



let mainImageShow = function() {

    mainImage = creatElementFunc('156px','162px','120px','700px',"url('Untitled-1.png')");

    

    mainImage.onmouseenter = function(){
        this.style.transform = 'scale(1.04)';
    }

    mainImage.onmouseleave = function(){
        this.style.transform = 'scale(1.0)';
    }

    mainImage.onclick = function(){
        appleStoreShow();
        playMarketShow();
    };

    vshow = function() {vidget.appendChild(mainImage);}

    setTimeout(vshow,1000);
  
}




mainImageShow();



