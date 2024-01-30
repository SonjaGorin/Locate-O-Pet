<a id="readme-top" name="readme-top"></a> 

<p align="center"><img src="./client/images/carleton-u-logo.jpg" height="250"></p>

<p align="center" style="margin-top:25px; margin-bottom:50px;">
	<a><img src="https://img.shields.io/static/v1.svg?label=npm&message=Express.js&color=blue"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=NodeJS&message=Environment&color=red"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=javascript&message=Language&color=green"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=React&message=Library&color=yellow"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=Vite&message=Library&color=blue"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=red"/></a>
</p>

# Carlton Coding Bootcamp Certification

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#Description">Locate-O-Pet</a></li>
		<li><a href="#installation">Installation</a></li>
		<li><a href="#usage">Application Usage</a></li>
		<li><a href="#contactme">Questions? Contact Me!</a></li>
		<li><a href="#license">License</a></li>
	</ol>
</details>
<div id="Description" style="margin-top: 25px;">

## Locate-O-Pet

After long weeks in learning new skills, reading and working in our assignments, it all comes to this last project. This last project would be the opportunity to demnstrate our new skills, ready to either continue studying or seeking for a job. Once agian this is a group project, an opportunity to build a scalable MERN-stack single-page application that fulfills a real-world need, with a focus on data and user demand.

Have you ever lost something, anything? you wallet, you car keys? now you have it, now you don't! Imagine loosing your pet. Well, Locate-O-Pet is an application that will help you find your pet, by getting the community involved. You register, report where was the last time you have seen your pet, and other people would be able to notify seeing them.

Pet owners would be able to register, put a picture of their pet, add warnings -if necesary, and place a pin in the map. The map-pin would show the pet image and contact number. Additional personal information can be added to their profiles.

The application has been developed using MERN full stack web development. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. In MERN, Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Hope you enjoy our application!

Here is our product!

<div style="margin-top: 15px;">
	<img src="./client/images/LOP001.png">
</div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="installation" style="margin-bottom: 20px;margin-top: 20px;">

## Installation

The Locate-O-Pet requires -like any other MERN fullstack, two tiers; Server and client. Each one requires their own independant dependancies. Please follow the instructions to install the application

|Name|Description |
|---|---|
|[Locate-O-Pet][mernportfolio]| Navigate to Locate-O-Pet github repo and clone application. |
|[install-dependancies][]| The application uses multiple depandancies -distributed alond the tiers. To install them, run this script: `npm run install` or `npm i` and node do the rest. |
|[development][] | Once application has been built we can run script `npm run dev` to execute application. |

[mernportfolio]: https://github.com/Jake66Martin/Locate-O-Pet
[install-dependancies]: install-dependacies
[development]: start

### List of application and developing dependencies

<p>To specify the packages your project depends on, you must add them in a package.json file as "dependencies" or "devDependencies" in your package's package.json file. When you (or another user) run npm install, npm will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each. NOTE: devDependencies are only installed when developing, these are NOT included when publishing application.</p>

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Server Dependencies. (click on arrow to expand)</summary>
	<div style="margin-top: 15px;">
<p style="font:strong;">Application dependencies:</p>
<div style="margin-left: 25px;">
> @apollo/server - version 4.7.1<br/>
> apollo-server-express - version 3.6.2<br/>
> bcrypt - version 4.0.1<br/>
> express - version 4.17.1<br/>
> jsonwebtoken - version 8.5.1<br/>
> graphql - version 16.6.0<br/>
> mongoose - version 7.0.2
</div>
</details>

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Client Dependencies. (click on arrow to expand)</summary>
	<div style="margin-top: 15px;">
<p style="font:strong;">Application dependencies:</p>
<div style="margin-left: 25px;">
> @apollo/client - version 3.7.14<br/>
> @cloudinary/react - version 1.4.0<br/>
> @cloudinary/url-gen - version 1.8.0<br/>
> bootstrap - version 5.2.3<br/>
> graphql - version 16.6.0<br/>
> jwt-decode - version 3.1.2<br/>
> mapbox-gl - version 3.1.0<br/>
> phone - version 3.1.42<br/>
> react - version 18.2.0<br/>
> react-bootstrap - version 2.7.4<br/>
> react-dom - version 18.2.0<br/>
> react-router-dom - version 6.11.2<br/>
> react-scripts - version 4.0.3<br/>
> sweetalert2 - version 11.10.4
</div>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="usage" style="margin-top: 25px;">

## Application Usage

Using Locate-O-Pet is very simple! Open application -phone or computer, sign in for a new profile, regiter your lost pet, add an image and your contact information. Let the community do the rest. For a regular user (not a lost pet owners), locate the pet you have spotted and report seeing the pet to the owner. User can call or post a note, including an image. All images are stored in Cloudinary, a cloud-based media management platform that enables users to upload, store, manage, manipulate, and deliver images and video for websites and apps.

The application is published in Render -a cloud platform for deploying and managing applications, so there is no aditional requirement to get the application working.

### Registering to Locate-O-Pet Database
Even though you don't have to register to see lost pets, you do when you want to report a lost pet. The registration is simple. 

<details style="margin=bottom:15px;"> 
<summary>Registration form. (click on arrow to expand)</summary>
<div style="margin-top: 15px;">
	<img align="center" src="./client/images/LOP002.png">
</div>
</details>
<br/>

<ol>
<li>Goto to the login screen</li>
<li>Click on register link</li>
<li>Provide your name or nick name</li>
<li>Enter a valid email address</li>
<li>Create a password - Password must be of 8 characters minimum. Must contain one of each lowercase, uppercase, digit, and special character.</li>
<li>Register your lost pet</li>
</ol>

### Reporting a lost pet
As a member of Locate-O-Pet database you can report a lost pet for the community to see. Reporting a lost pet is simple, from the map page (main page) select the "I lost a pet" or "I saw a pet" in case you want to report owner where you saw their pet.

Note: you must register and be logged in, before you can report a pet.

<details style="margin=bottom:15px;"> 
<summary>Reporting a Lost Pet form. (click on arrow to expand)</summary>
<div style="margin-top: 15px;">
	<img align="center" src="./client/images/LOP004.png">
</div>
</details>
<br/>


<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="contactme" style="margin-top: 25px;">

## Questions? Contact Me 

This is our last group project and we tried to show off in our new skills. Locate-O-Pet is ReactJS Web application that offer pet owners use the help of the community to locate and rescue their loved pets. The application has plenty of room for growing, we hope you find it encouraging and sparks some great ideas!

Do not hesitate in contacting us at:<br/>
> Sonja Gorin<br/>
> Jacob Martin<br/>
> Gustavo Miller - gustavo.miller@miller-hs.com.<br/>

You may find the application at: [https://github.com/Jake66Martin/Locate-O-Pet](https://github.com/Jake66Martin/Locate-O-Pet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="license" style="margin-top: 25px;">

## License

MIT License

Copyright (c) 2024 Locate-O-Pet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=yellow"/></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="testing" style="margin-top: 25px;">

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller.