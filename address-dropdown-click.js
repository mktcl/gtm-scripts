(function(){  
  var pushToDataLayer = function (){
    dataLayer.push({event:'address_dropdown_click'});
  }
  var target = document.querySelector('select');
  
  // Clear leftover event listener if it exists
  target.removeEventListener('change',pushToDataLayer);
  
  // Add event listener
  target.addEventListener('change', pushToDataLayer);
})()
