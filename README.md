# OneMeSDK
This package contains the dependencies and documentation to add OneMe functionality to your node.js backend.

# Installation 
Currently, only node package manager is supported. CDN support will be coming soon.
```
npm install OneMeSDK --save
```

Then....
# Setup  

In any file that needs OneMe support, import the OneMe class.
```
import oneMe from 'OneMeSDK'
```
Define the OneMeConfig object to be used in initializing your OneMe object.
```
const OneMeConfig = {
    "projectId": "onemeapp-c7476",
    "buid": BUSINESSID //RETRIEVE THIS VALUE FROM THE BUSINESS PORTAL,
    "bidPassword": BUSINESSPASSWORD //RETRIEVE THIS VALUE FROM THE BUSINESS PORTAL,
    "apiKey": "AIzaSyDcI6i58VyeG7Vfc97lhUhl2FbwrmKxvXA",
    "authDomain": "onemeapp-c7476.firebaseapp.com",
    "appId": "1:824485992095:web:e077539e9cf3df9c0ab4aa",
    "storageBucket": "onemeapp-c7476.appspot.com",
    "messagingSenderId": "824485992095"
}
```
### Initialize the "buidPassword" and "buid" feilds using the values unique to your business account.
#### Their values can be found on the main page of your business portal.

# Usage
After completing setup:
Use an initialized instance of the OneMe class to access the oneMe api methods.

Example usage below:
```
import OneMe from 'OneMeSDK';
const OneMeConfig = {
    "projectId": "onemeapp-c7476",
    "buid": BUSINESSID //RETRIEVE THIS VALUE FROM THE BUSINESS PORTAL,
    "bidPassword": BUSINESSPASSWORD //RETRIEVE THIS VALUE FROM THE BUSINESS PORTAL,
    "apiKey": "AIzaSyDcI6i58VyeG7Vfc97lhUhl2FbwrmKxvXA",
    "authDomain": "onemeapp-c7476.firebaseapp.com",
    "appId": "1:824485992095:web:e077539e9cf3df9c0ab4aa",
    "storageBucket": "onemeapp-c7476.appspot.com",
    "messagingSenderId": "824485992095"
}

//create a OneMe class instance used to access sdk methods
const oneMe = new OneMe(OneMeConfig);
```

# SDK Functions
The following methods are defined for the OneMe Object 
```
oneMe.inviteUser(userOneMeID);
oneMe.userIsLinked(userOneMeID);
oneMe.fetchUserInfo(userOneMeID);
oneMe.fetchUserImages(userOneMeID);
```
## inviteUser(userOneMeID);
### purpose:
* Invite a user to share their information with your business
* Until a user accepts the invitation, your business will not be able to access the user's information
### parameters: 
* string representing the user's OneMe ID 
* ask the user for their oneMeID and pass it to the inviteUserFunction
### return value:
* Promise<database.functions.HttpsCallableResult | error>

## userIsLinked(userOneMeID);
### purpose:
* check if you have access to a user's information
* confirm that a user has accepted your invitation
### parameters:
* string representing the user's OneMe ID 
* ask the user for their oneMeID and pass it to the userIsLinked funciton
### return value:
* Promise<database.functions.HttpsCallableResult | error>

## fetchUserInfo(userOneMeID);
### purpose:
* Fetch the OneMe verified information about a given user
* Use this information to verify/instantiate a user's data 
### parameters:
* string representing the user's OneMe ID 
* ask the user for their oneMeID and pass it to the userIsLinked funciton
### return value:
* Promise<database.functions.HttpsCallableResult | error>

## fetchUserImages(userOneMeID);
### purpose:
* Fetch the OneMe verified images of the given user 
* Use this information to verify/instantiae user provided images
### parameters:
* string representing the user's OneMe ID 
* ask the user for their oneMeID and pass it to the userIsLinked funciton
### return value:
* Promise<database.functions.HttpsCallableResult | error>





