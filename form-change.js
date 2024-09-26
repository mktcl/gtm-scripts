(function(){
console.log('%cform_change github script', 'font-size:2rem;color:red;');
var targetsName = new RegExp(/(?:email|dateOfBirth|phoneNumber|fullname|houseNumber|postcode|house|street|town|county|username|password|depositAmount|limitAmount|fullName|(first|last)\sname)/);
  
var pushToDataLayer = function(el){          
  return dataLayer.push({event:'form_change', input_name: el.target.getAttribute('name'), input_label:(el.target.previousElementSibling && el.target.previousElementSibling.innerText)})

};

  
var targetElements = Array.from(document.querySelectorAll('input')).filter(function(el){return targetsName.test(el.getAttribute('name'))});

// Clear any listeners leftover from navigation  
targetElements.forEach(function(el){return el.removeEventListener('change', pushToDataLayer)});   

// Add listener  
targetElements.forEach(function(el){return el.addEventListener('change', pushToDataLayer)});   
})();
