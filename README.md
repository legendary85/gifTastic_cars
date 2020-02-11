# Gif of Cars


# What is Gif of Cars?
Gif of Cars is a small web application that allows users to view gif images of various cars by clicking a button labeled with the car make of  their interest. The app also allows users to dynamically add buttons by inputing cars that are not listed, and then making a selection. Users can click on the image to make still and click again to return image back to motion.

# Technologies 

 - jQuery
 - HTML
 - CSS
 - Bootstrap
 - Giphy Developers API
 - API Parameters: 
	 - 'q'
	 - 'limit'
	 - 'rating'
- API Keys

# Live Demo
  [Click here for Live demo ](https://legendary85.github.io/gifTastic_cars/)

# Video Demo
 [Click here to view video demo](https://drive.google.com/file/d/1FBGcGiVfkee_D4Dt4ExWu-i8Zp6vMYBw/view)

# What I did to build this app

 1. Created an array of strings, each one is a different make of a car. Saved it to a variable called `cars`.
 2. App takes the topics in the cars array ands create buttons in the HTML. This was done using a loop that appends a button for each string in the array.
 3. When the user clicks on a button, the page should grab 12 animated gif images from the GIPHY API and place them on the page.
 4. When the user clicks one of the  GIPHY images, the gif should become still. If the user clicks the gif again, it should animate.
 5. Under every gif, its rating is displayed.
 6. Added a form to the page that takes a value from a user input box and adds it to the `cars` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
 7. Deployed to Github pages

# Skills Learned

 - Ajax call is made to Giphy API using jQuey 
 - Passing parameters 
 - Dynamically add buttons from an Array by looping
 - Push (add) text to an array
 -  Dot Notation to target specific properties of an onject
 - Dynamically display images in web application 

## Screen Shots

<img width="1415" alt="screenshot" src="https://user-images.githubusercontent.com/50154158/74267448-a9db1200-4ccb-11ea-98ab-d6fd41a1fd31.png">


## Project source can be downloaded from 

https://github.com/legendary85/gifTastic_cars

**Licensing Information: READ LICENSE**
