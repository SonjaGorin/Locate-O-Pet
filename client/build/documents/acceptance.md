## Acceptance Criteria

As a user, I want to see the pets that were lost in my area, so I can help find them.<br/>
As a user, for each pet, I want to see the picture, description, location on a map,<br/>
so I can see if the post matches the pet I see on the street<br/>
As a user, for each pet, I want to see the contact info of the owner,<br/>
so I can contact the owner about the pet.<br/>
As a user, I want to create a post indicating what pet I saw, with the location on a map and picture(?).<br/>

As an owner, I want to add a post indicating what pet is lost and where on a map, so other users can help me find it.<br/>
As an owner, I want to see the posts of the users who spotted any pet, so I can see if one of them is my pet.<br/>

As an owner, I want to sign up to the application, so I can log in later<br/>
As an owner, I want to log into the application, so I can see the posts linked to my pet and locations on a map.<br/>
As an owner, I want to update a post, so I can add more details, and fix mistakes and tell everyone when my pet is found.<br/>
As an owner, I want to delete a post, so people don’t keep searching for the already found pet.<br/>

GIVEN a locate-o-pet application<br/>
WHEN I open my application<br/>
THEN I see a welcome screen with a logo and the name of the application<br/>
WHEN I see a welcome screen<br/>
THEN I wait 1 or 2 seconds for it to disappear<br/>

WHEN the welcome screen disappears<br/>
THEN I am presented with the Map page containing a header, a section for content, and a footer<br/>
WHEN I view the header<br/>
THEN I am presented with the name and the logo of the app, and the navbar<br/>

WHEN I view the navbar<br/>
THEN I am presented with the sections: <span style="color:yellow;"> Map, About Us, Lost Pets, Spotted Pets, Make a Post, My Posts, Login/Signup and Contact Us</span><br/>
WHEN I click on the navigation title<br/>
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted<br/>

WHEN I am presented with the Map page when the welcome screen dissapears<br/>
THEN I see a map with red dots for lost pets and green dots for spotted pets on it<br/>
WHEN I click on the red or green dot<br/>
THEN I am presented with the post containing all the information about the pet associated with that dot<br/>

WHEN I click on the About Us section <br/>
THEN I am presented with the short paragraph explaining the purpose of the app, instruction how to use the app and pictures and short biographies of the app creators<br/>

WHEN I click on the Lost Pets section<br/>
THEN I am presented with titled images of the lost pets ordered from newest at the top to the oldest at the bottom and a map with just red dots<br/>
WHEN I am presented with the Lost Pets section<br/>
THEN I see drop down menu where I can filter lost pets post by type of pet (cat, dog, bird), breed, color and location<br/>
WHEN I click on any of the titled images of lost pets<br/>
THEN I am presented with the full information card about the pet containing image, name of the pet, type, breed, color, contact of the owner and location on the map with the location where the pet was last seen<br/>

WHEN I click on the Spotted Pets section<br/>
THEN I am presented with titled images of the spotted pets ordered from newest at the top to the oldest at the bottom and a map with just green dots<br/>
WHEN I am presented with the Spotted Pets section<br/>
THEN I see a drop down menu where I can filter spotted pets post by type of pet (cat, dog, bird), breed, color and location<br/>
WHEN I click on any of the titled images of spotted pets<br/>
THEN I am presented with the information card about the pet containing image, type, breed, color and location on the map with the location where the pet was last seen<br/>

WHEN I click on the Make a Post section<br/>
THEN I am presented with two options: I lost a pet button and I spotted a pet button<br/>
WHEN I click on a I lost a pet button <br/>
THEN I am presented with login/signup form<br/>
WHEN I click on a I spotted a pet button<br/>
THEN I am presented with a choice so make a post without signing up and a warning that if I don’t sign up I will not be able to change or delete my post and a choice to login/sign up with the statement that if I choose that option I will be able to update or delete my posts<br/>
WHEN I choose the option to login/sign up<br/>
THEN I am presented with a form to do so<br/>
WHEN I am logged in or chose not to log in <br/>
THEN I am presented with the form to make a post<br/>
WHEN I am presented with a form to make post as a person who lost pet<br/>
THEN I am presented with button to upload a photo of my pet, input fields for name, type, breed, color, owner’s name, owners email or phone number and a map to put a location where the pet was last seen<br/>
WHEN I am presented with a form to make post as a person who spotted a pet<br/>
THEN I am presented with button to upload a photo of spotted pet, input fields for type, breed, color and a map to put a location where the pet was last seen<br/>

WHEN I click on the My Posts section<br/>
THEN I am presented with the login/sign up form if I am not already signed up<br/>
WHEN I am logged in<br/>
THEN I can see, update or delete my posts<br/>

WHEN I click on the Login/Signup section<br/>
THEN I am presented with login/sign up form if I am not already logged in<br/>
WHEN the toggle is set to login<br/>
THEN I am presented with one input for email and one input for password and the login button<br/>
WHEN the toggle is set to sign up<br/>
THEN I am presented with one input for username, one for email and one input for password and the sign up button<br/>
WHEN I click on the sign up button<br/>
THEN I am automatically logged in<br/>
WHEN I am logged in <br/>
THEN I can see my posts and make update or delete posts<br/>

WHEN I am presented with the Contact Us section<br/>
THEN I see the contact form with the fields for name, an email address and a message<br/>
WHEN I move my cursor out of one of the form fields without entering text<br/>
THEN I receive notification that this field is required<br/>
WHEN I enter email address<br/>
THEN I receive notification if the email is invalid<br/>

WHEN I view the footer<br/>
THEN I am presented with footer stuff<br/>