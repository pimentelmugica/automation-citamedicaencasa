        @Inquiry
Feature: As a patient, I want to make an inquiry

        Scenario: A patient is able to make an inquiry

            Given a user goes to the home page
             When the user clicks on 'Make a Inquiry' button
             Then the inquiry form is displayed
