(function(){  
  console.log('%cform_feedback github script', 'font-size:2rem;color:red;');
  let form_feedback_element = document.querySelector('[class="feedback-entry invalid-feedback-entry"]');
  let feedback_message = formFeedbackElement.innerText;
  let input_name = form_feedback_element.closest('div').querySelector('input') && form_feedback_element.closest('div').querySelector('input').getAttribute('name');
  let input_label = form_feedback_element.closest('div').querySelector('label') && form_feedback_element.closest('div').querySelector('label').innerText;


dataLayer.push({event:'form_feedback', feedback_message, input_name, input_label});
  

})()
