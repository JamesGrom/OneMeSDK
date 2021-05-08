//TO DO , UPDATE THE CONFIG OBJECTS TO MATCH YOUR ACCOUNT.
//CONFIG OBJECTS CAN BE FOUND IN YOUR DEVELOPER FILE

//OneMe uses database as our cloud functions host and NOSQL database
import database from "firebase";
// const database = require("database");
const databaseConfig = {
  apiKey: "AIzaSyDcI6i58VyeG7Vfc97lhUhl2FbwrmKxvXA",
  authDomain: "onemeapp-c7476.firebaseapp.com",
  projectId: "onemeapp-c7476",
  storageBucket: "onemeapp-c7476.appspot.com",
  messagingSenderId: "824485992095",
  appId: "1:824485992095:web:e077539e9cf3df9c0ab4aa",
};
database.initializeApp(databaseConfig);

class OneMe {
  constructor(oneMeConfig) {
    //initialize member variables
    this.config = oneMeConfig;
    this.buid = oneMeConfig.buid;
    this.password = oneMeConfig.bidPassword;
    this.email = oneMeConfig.bidEmail;
    //set up acccess to the oneMe sdk
    this.databaseConfig = databaseConfig;
    database.initializeApp(databaseConfig);
    this.database = database;
    this.initializeOneMe(); //call the function to login business to OneMeSDK
  }
  //assume constructor has set the email and password already
  //call this to login so funciton calls can work to the database
  initializeOneMe() {
    const auth = database.auth();
    return auth.signInWithEmailAndPassword(this.email, this.password);
  }

  //send an invitation for the user to share their info
  // returns a promise with a result object
  inviteUser(uid) {
    //ensure that oneMe is initialized
    var inviteUserCloudCallable = database
      .functions()
      .httpsCallable("inviteUser");
    return inviteUserCloudCallable({buid: this.buid, uid: uid})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }

  userIsLinked(uid) {
    var userIsLinkedCloudCallable = database
      .functions()
      .httpsCallable("userIsLinked");
    return userIsLinkedCloudCallable({buid: this.buid, uid: uid})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }

  fetchUserInfo(uid) {
    var fetchUserInfoCloudCallable = database
      .functions()
      .httpsCallable("fetchUserInfo");
    return fetchUserInfoCloudCallable({buid: this.buid, uid: uid})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }

  fetchUserImages(iud) {
    var fetchUserImagesCloudCallable = database
      .functions()
      .httpsCallable("fetchUserImages");

    return fetchUserImagesCloudCallable({buid: this.buid, uid: uid})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }
}
// export default OneMe;
module.exports.OneMe = OneMe;
