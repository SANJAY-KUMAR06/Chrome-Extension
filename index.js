
let myLeads=[];

const inputEl=document.getElementById('input-el');
const saveBtn=document.getElementById('input-btn');
const unEL=document.getElementById("un-el");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads",));
const deleteBtn=document.getElementById('delete-btn');
const tabBtn=document.getElementById('save-btn');

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}
// getting the lead of cuurent tab
tabBtn.addEventListener('click',function(){
   chrome.tabs.query({active:true,currentWindows:true},function(tabs){
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads",JSON.stringify(myLeads));
      render(myLeads);
   })
})

// Deletig the leads form the localStorage

deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);

})

saveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    // clearing input value
    inputEl.value="";
    //  storing the items permanently
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);  
})

function render(leads){
let listItems="";
for(let i=0;i<leads.length;i++){
        // listItems+="<li><a traget='_blank' href='"+leads[i]+"'>"+leads[i]+"</li>";
       listItems+=`
                <li>
                    <a target='_blank' href=${leads[i]}>
                     ${leads[i]}  
                    </a>    
               </li>`
                //these are the values tht need to be printed in doucment
                 // so this must be indicated inside ${}        
    
                 
//    the other method to add elemnt to html is by using createElement()
//    and using append() to add the previous element also 

//  const li=document.createElement("li");
 //  li.textContent=myLeads[i];
//  unEL.append(li);  
            
}
unEL.innerHTML=listItems;}