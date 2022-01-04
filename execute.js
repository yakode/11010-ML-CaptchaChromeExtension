myFunction();
async function myFunction(){
    var text = document.getElementById("captcha_code");
    var captcha = "";
    captcha = (await getCaptcha());
    console.log(captcha)
    text.value = captcha;
}

async function getCaptcha(){
    var cimg = document.getElementById("captcha_image").src;
    var ccookie = document.cookie;
    var ret = ""
    ret = await sendRequest(cimg, ccookie);
    return ret;
}

async function sendRequest(_url, _cookie){
    const url = "https://eeclass-captcha.herokuapp.com/test"
    var data = {"url": "\"" + _url + "\"",
                "cookie": _cookie};
    var result = await fetch(url, {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });
    var res = await result.json();
    var ret = ""
    ret = res.result;
    console.log(ret)
    return ret; 
}