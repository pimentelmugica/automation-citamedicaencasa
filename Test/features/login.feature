Feature: As a doctor, I want to login into my account

@loginForm
Scenario: A doctor is able to reach the login form
  Here we're going to check if login form is visible for the doctors

  Given a user goes to the home page
  When the user clicks on 'Login with my account' button
  Then the login form is shown

@doctorLogin
Scenario: A doctor is able to login
  #Here we're going to do a login with a valid account

  Given a doctor is on login page
  When the doctor fills the login form
  And the doctor clicks on the login button
  Then the private dashboard will be loaded
