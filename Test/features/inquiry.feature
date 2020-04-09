Feature: As a patient, I want to reach the inquiry form

        @Inquiry
        Scenario: A patient is able to reach the inquiry form

            Given a user goes to the home page
             When the user clicks on 'Make a Inquiry' button
             Then the inquiry form is shown