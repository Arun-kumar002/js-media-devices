let form=document.querySelector("form");
let login=document.querySelector("#login1");
let login2=document.querySelector("#login2")
let logout=document.querySelector("#logout");
let profile=document.querySelector("#profile");
let article=document.querySelector("#form_article");
form.addEventListener("submit",e=>{
    e.preventDefault();
    let username=e.target[0].value.trim();
    let password=e.target[1].value.trim();
    let userdata={username,password}
    //adding to local storage
    window.localStorage.setItem("userdata",JSON.stringify(userdata));//Serialization
});
let section=document.querySelector("#form");
let username=document.querySelector("#username");
let password=document.querySelector("#password");
console.log(username);
let profileSection=document.querySelector("#profile_section");
console.log(profileSection);

login.onclick=function(){
  section.style.display="none";
  profile.innerHTML=username.value;
  login.style.display="none";
  profileSection.style.display="block";


}



logout.onclick=function(e){

    
    section.style.display="block";
  profile.innerHTML="";
  login.style.display="block";
  section.style.display="flex";
  section.style.alignItem="center";
  section.style.justifyContent="center";
  profileSection.style.display="none";
  window.localStorage.removeItem("userdata");
  username.value="";
  password.value="";
  

}
login2.onclick=function(){
    section.style.display="none";
    profile.innerHTML=username.value;
    login.style.display="none";
    profileSection.style.display="block";
  
  
  }