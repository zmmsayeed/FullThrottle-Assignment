
## Steps to run the project:

Clone the repository and then navigate into the server folder:
```properties 
cd server
```
```properties
npm install
```
This is the folder that acts a wrapper for the code written in node to work in AWS Lambda.
Navigate to the ```main-app``` folder now where the API's code is written and can run locally.
```properties
cd main-app
```
Install the dependencies:
```properties
npm install
```
Now, depending on your OS you can use the following commands to run the API's locally:
#### On Windows:
```properties
$env:NODE_ENV="dev"
```
```properties
node _Entry.js
```

This will show you the following line if everything runs smoothly:
```server is running on 3001```

#### On Linux/MacOS:
```properties
NODE_ENV=dev node _Entry.js
```
You can also run the following command to run the application (Note: make sure nodemon is installed in dev dependencies) :
```properties
npm run dev
```
This will show you the following line if everything runs smoothly:
```server is running on 3001```


---

Now that the server is running, we need to navigate to the client folder to start the client server. To do so, go back two folders and then to the ```client``` folder:
```properties
cd .. 
cd ..
cd client
```
To run the client application run the following command:
```properties
npm start
```
This will open a web page on the URL ```localhost:3000```
If that doesn't happen you can manually enter the above URL in a browser.



