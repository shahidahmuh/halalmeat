

//Interactive calender 
document.getElementById(" event-calender").innerHTML="<p>[Calender Placeholder]</p>";
 
//News Submission Form
document.getElementById("newsSubmissionForm").addEventListener("submit", function(event) {

   Event.preventDefault();
     
    let Title =document.getElementById('newsTitle').value;
    let content =document.getElementById("newsContent").value;
    let videoFile = document.getElementById("newsVideo").files[0];

    if (Title && content){
        let newsItem = document.createElement("div");
        newsItem.innerHTML=`<h3>${Title}</h3><p>${content}</p>`;


        if (videoFile){
            let videoURL =URL.createObjectURL(videoFile);
            let videoElement = document.createElement("vieo");
            videoElement.setAttribute("controls", " ");
            videoElement.innerHTML =`<source src="${videoURL}" type="${videoFile.type}">`;
            newsItem.appendChild(videoElement);

        }
        document.getElementById("newsTitle").value =" ";
        document.getElementById("newsContent").value=" ";
        document.getElementById("newsVideo").value=" ";

    
       
       
      

    }
})
