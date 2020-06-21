# AQIR

AQIR is an exclusive retail website that allows users to buy and sell products from the comfort of their home.

https://thawing-castle-93200.herokuapp.com/home

![AQIR Login and Home](./public/)
## Table of Contents

* [Description](#description)
* [Technologies Used](#technologies)
* [Usage](#usage)
* [Future Development](#future)
* [Acknowledgements](#acknowledgements)
* [Merge Conflicts](#psa)

## Description

This full-stack web application prompts the user to create an account. 
Once the account is created the user can buy and sell products to other users.

## Technologies Used

* Bulma: CSS framework
* Express: web framework
* Handlebars: HTML rendering
* MySQL: database
* Sequelize: database ORM
* Passport: user authentication

## Usage

* Signup

A welcome screen will appear to familiarize the user with AQIR.
Once the user closes that screen they will see the Signup form.
User will enter account information to create an account and click Submit.

* Login and Home

![AQIR Login and Home](/public/screens/aqir_login_home.gif)

If the user has an accoutn they will enter their username and password in the login page. 

This will bring up the home page which shows all of the products for sale.
Products can be sorted by Price High to Low or Low to High.

The menu bar at the top has links to Home, Add Product, Account, Cart, and Logout.

For the user to add their own product for sale they will click Add Product.

ADD PRODUCT PAGE

User will fill out the form and click Submit.
Now that product is added to the Home page.

USER ACCOUNT PAGE

Clicking Account on the navbar will bring the user to the User Accout page.
This displays the user's username, email, and name and all the products they have for sale.

## Future Development

Our next step is to turn this into a full-fledged e-commerce application by implementing a shopping cart, checkout, and payment options.

Another dream is to allow the user to sort products by geo location if they would like to make a local pickup rather than having the item shipped.
This could serve communities/users who do not have access to standard shipping options.

## Acknowledgements

We would like to thank UW Coding bootcamp and TA's Abdul Aziz and Ben Vaagen.

Special shout-out to instructor/hero John Young for helping us untangle our massive merge conflict issues!

## PSA: Merge Conflicts

Use this as a cautionary tale about merge conflicts, team work, and deadlines.

During the last hour up until the deadline, we were furiously coding to polish our site as best we could.
Instead of commiting and pushing the changes we had we set our sights higher and attempted to clean up the code.
Our fatal error was accidentally deleting a crucial file.
We ended up commiting, pushing, and merging to master.
Upon testing the application we realized our error.
Since we were in a time crunch we hastily reverted the master and Development branches.
This was our second mistake as we did not have any experience reverting branches.
Our understanding was that merging always replaced the file being merged into, but it updates it.
This meant that when we pulled to make changes it said we were already up to date and our changes wouldn't stick.
Eventually we were able to revert master all the way back to the beginning and force push to it (not usually recommended).

The lessons learned are:

## Be absolutely sure before you delete anything!

## Be absolutely sure before you merge to the master branch!

## Be absolutely sure you know what you are doing before reverting a branch!

## Manage your time so that you do not need to make last-minute changes!