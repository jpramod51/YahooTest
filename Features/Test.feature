Feature: Test Yahoo application

Scenario: Login Testing
Given I launch the url
And I give the User mailId "<Email>"
And I give the User password "<Password>"
Then i will click Mail icon
And I click on Compose
And I sends an email with subject "<To mail>","<subject>"
Then I click on Sent folder and mail appears with the subject entered
And I will Logout




Examples:
    |            Email                   |       Password        |         To mail              |             subject            |
    |     pramodjtesting@yahoo.com       |      Cucumber@7       |  Jayarampramod51@gmail.com   |   Testing ProtractorCucumber   |