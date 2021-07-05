# Overview

OnCall is a project I started in October 2020 based on an idea given to me by my roommate. The concept is an automated system for receiving requests and alerting an 'On Call' employee via phone call and/or text message. That employee will answer and complete the task, after which metrics about the task (time answered, time completed, etc.) will be available for viewing. The system is meant to be interactable, with a web application available to the 'managers' and 'employees' of client organizations.

## Web Application

The web application is a Vue.js SPA which communicates to the backend through GraphQL API calls. User registration/login is handled through AWS Cognito, and API calls are authorized with Cognito tokens. The app utilizes a few JavaScript libraries/plugins to help with functionality. [V-Calendar](https://vcalendar.io/) is used to view/edit the 'On Call' schedule, and [Vue-ChartJS](https://vue-chartjs.org/) is used to display call data in the form of neat graphs.

## Backend

The backend of the system is spread across various Amazon Web Services.

- <b>Appsync</b> - Uses a GraphQL schema to scaffold out a severless API. Helps connect API to data sources (DynamoDB, Lambda, etc.)
- <b>Connect</b> - Handles incoming and outgoing calls. Call logic is handled by 'Contact Flows,' with data being read from Lambda with API calls
- <b>Cognito</b> - User registration/login
- <b>DynamoDB</b> - Amazon NoSQL database
- <b>IAM</b> - Identity and Access Management. Delegate permissions to individual services in order to help secure data access
- <b>Lambda</b> - Severless functions that drive the backend. Either performed on schedule or upon a specified event
- <b>S3</b> - Audio recordings of request calls are stored and available for viewing by allowed parties


...plus more.

## Project Requirements

[You can view the functional and non-functional requirements here](https://docs.google.com/document/d/e/2PACX-1vRtr8ONyB_Gec2oSvPq1U7rXo58swlQWRZDOhWRCuR-_O7SVRaMZMN3i42L9EK2n0iSQOqjenQMXYfu/pub). The original use case was for an apartment management company, and became generalized shortly after. As production continues, more requirements will be added.

##
I intend to monitize this project in the future, but not before significant improvements still. The program in its current state (as of 12/27) is just a bit more than functional. Immediate efforts will be directed at higher priority requirements, as well as fleshing out testing and test cases.

If you would like to sign up for this service, please contact me through the "Register" link at [the app's front-facing website](https://www.get-oncall.com).

[And here is a demo video](https://www.youtube.com/watch?v=bl-iGVhuJ6k)
