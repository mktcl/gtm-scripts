(function(){  
  console.log('%cform_feedback github script', 'font-size:1rem;color:orangered;');
  let form_feedback_element = Array.from(document.querySelectorAll('[class="feedback-entry invalid-feedback-entry"]')).at(-1);
  let feedback_message = form_feedback_element.innerText;
  let input_name = form_feedback_element.closest('div').querySelector('input') && form_feedback_element.closest('div').querySelector('input').getAttribute('name');
  let input_label = form_feedback_element.closest('div').querySelector('label') && form_feedback_element.closest('div').querySelector('label').innerText;


dataLayer.push({event:'form_feedback', feedback_message, input_name, input_label});
  

})()
