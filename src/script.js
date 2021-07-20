function createNode(element) {
    return document.createElement(element);
}

var url = "https://api.openweathermap.org/data/2.5/onecall?lat=25.048&lon=121.532&exclude=current,minutely,daily,alerts&units=metric&appid=d5db79c4f50f35061b1fd461a0363e15";

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    
  
    for (var i=0; i < 10; i++) {
    
    desc = data.hourly[i].weather[0].description;
    icon = data.hourly[i].weather[0].icon;
    temp = data.hourly[i].temp;
    
    time = data.hourly[i].dt * 1000;
    time = (new Date(time)).toLocaleTimeString('en-US', { hour: 'numeric' });

    
    var ul = document.getElementById("weather");
    var li = document.createElement("li");  
 
    ul.appendChild(li);       
    li.className = "icon-" + icon;
    
    let imagDesc = createNode('img');
    imagDesc.src = " http://openweathermap.org/img/wn/" + icon + ".png";
    imagDesc.className = "icon " + icon;
    li.appendChild(imagDesc);  
      
    let spanTime = createNode('span');
    spanTime.innerHTML = time + " | ";
    spanTime.className = "timeClass";
    li.appendChild(spanTime);
          
    let spanTemp = createNode('span');
    spanTemp.innerHTML = temp + " &deg;c ";
    spanTemp.className = "tempClass";
    li.appendChild(spanTemp);
    
    let LB = createNode('br');
    li.appendChild(LB);
          
    let spanDesc = createNode('span');
    spanDesc.innerHTML = desc + " ";
    spanDesc.className = "descClass";
    li.appendChild(spanDesc);    
    
}
  
  
  })
    
  .catch(function(error) {
         console.log(error);
  });
