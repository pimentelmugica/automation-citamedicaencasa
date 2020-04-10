Feature: As a patient, I want to reach the inquiry form

#@formInquiry
Scenario: A patient is able to reach the inquiry form
  #Checking if a user is able to reach the inquiry form

  Given a user goes to the home page
  When the user clicks on 'Make a Inquiry' button
  Then the inquiry form is shown

@psychologicalInquiry
Scenario: A patient is able to send an inquiry
  #Checking if a user is able send a psychological inquiry

  Given a user goes to the home page
  When the user clicks on 'Make a Inquiry' button
  And the user fills the psychological form
  And the user clicks on 'Send Inquiry' button
  Then the inquiry will be sent           
