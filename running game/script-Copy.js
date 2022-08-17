userdate=[
    {
        username:"abc",
        password:"123"
    },
    {
        username:"aaa",
        password:"111"
    }
]





function valideta(){

    var username=document.getElementById("userbox").value;
    var password=document.getElementById("passbox").value;
    var error=document.getElementById("usererror");
    var passerror=document.getElementById("passerror");


    for(i=0;i<userdate.length;i++){
        if(username==userdate[i].username && password==userdate[i].password){
        alert("login done");
        error.style.display="none";
        passerror.style.display="none";
        return;
    }
}alert("fail");
error.style.display="block";
passerror.style.display="block";

}