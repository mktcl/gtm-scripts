(function(){  
  console.log('%cdeposit_slider github script', 'font-size:2rem;color:red;');
  var target = document.querySelector('input[type="range"]');
  var pushToDataLayer = function(){
  dataLayer.push({event:'form_change', input_name:'deposit_slider', input_label: null})
  }

  // Clear any listeners leftover from navigation  
  target.removeEventListener('change', pushToDataLayer);
  
  // Add listener  
  target.addEventListener('change', pushToDataLayer);  
})();  
