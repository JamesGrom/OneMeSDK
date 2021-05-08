# OneMeSDK
This package contains the dependencies and documentation to add OneMe functionality to your node.js backend.

# Instalation 
Currently, only node package manager is supported. CDN support will be coming soon.
`npm install OneMeSDK --save`

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
Initialize the "buidPassword" and "buid" feilds using the values unique to your business account.
Their values can be found on the main page of your business portal.

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
const oneMe = new OneMe(OneMeConfig);
//oneMe object methods can now be accessed to query the OneMe API 
// the following methods are defined for the OneMe Object 
oneMe.inviteUser(userOneMeID);
oneMe.userIsLinked(userOneMeID);
oneMe.fetchUserInfo(userOneMeID);
oneMe.fetchUserImages(userOneMeID);
```



// inviteUser(uid) function purpose:
// Invite a user to share their information with your business
// Until a user accepts the invitation, your business will not be able to access the user's information
// ask the user for their oneMeID and pass it to the inviteUserFunction