document.write("<h1>Hello world</h1>");
function buttonClick()
{
    document.getElementById("heading2").innerHTML="Nadia Learnings";
}

function fn1()
{
    var user=document.getElementById("text1");
    var pass=document.getElementById("text2");

    if(user.value==pass.value)
        alert("Username and password must not be the same");

}

function fn2()
{
    var rb1= document.getElementById("rb1");
    var rb2 = document.getElementById("rb2");

    if(rb1.checked==true)
         alert("The name selected is: "+rb1.value);
     else if(rb2.checked==true)
        alert("The name selected is: "+rb2.value);
    else
        alert("No name selected!");
}

function changeStyling()
{
    var para = document.getElementsByTagName("p");
    para[0].style.fontSize = 25;
    para[1].style.fontSize = 25;
    para[1].style.color = "#ffcf79";
}

function setNewImage()
{
    document.getElementById("drac").src="wayne,wanda and fam.png";
}

function setOldImage()
{
    document.getElementById("drac").src="dracula.png";
}

function validate()
{
    var username = document.getElementById("user");
    var password = document.getElementById("pass");

    if (username.value=="" || password.value=="")
    {
        alert("Username or password cannot be blank!");
        return false;
    }
    else if (password.length<6)
    {
        alert("Password cannot be less than 6 figures!");
    }
    else
    {
        return true;
    }
}