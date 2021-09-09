# Facebook Feeds Prototype Test Repo

<<<<<<< HEAD
## This repo contains both sides of the Facebook Feeds Prototype.
- CD into 'my-app' for React (client-side)
- CD into 'API' for Express (backend)

**Planning Story:**
Initially, a lot of focus on breaking down Facebook's Graph API documentation and how to best implement.  From there, creating the front-end with React create-app and architecting a lot of the basic layout.  Once that was functional, moving on to creating our own back-end API to save the Favorited posts pulled from Facebook's API.

**User Stories:**
- As a pre-existing Facebook user, I want another option for managing the Page for my business.
- As a pre-existing Facebook user, I want to be able to post to my Page without having to be on Facebook directly.
- As a pre-existing Facebook user, I want to be able to see my existing posts without having to be on Facebook directly.

**Instructions for tester to log in:**
When the landing page loads, the user will be prompted with a 'Login with Facebook' button.  After clicking it, a popup will appear to confirm the user authorizes the data exchange/permissions, and then the page will refresh to reflect the dashboard.

**Technologies Used:**
- JavaScript, HTML, CSS
- ReactJS, DevExtreme/DevExpress
- Axios
- Facebook SDK, Graph API, Express API
- "react-facebook" Node package, Formik

**Unsolved Problems:**
There seems to be a universal problem in regards to submitting a POST using Facebook's own API, multiple users have reported the same issue and Facebook does not have a reported fix at this time.  A temporary fix is to attempt an Axios call in its place, but that connects to our own API and not Facebook's - which is an issue, considering you need that to successfully pass the data.  The text value is successfully extracted, but the Graph API keeps rejecting it as unauthorized for an unknown reason.
=======
# This is a test repo
>>>>>>> d100855de7e7ead4e7c2af64e5b62d178de7e05f
