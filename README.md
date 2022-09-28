# my RECIPE book

My recipe book is a place to store all of your recipes. Users can signup and create recipes that automatically save to their profile. Users can also browse the library of recipes from others.
<p>&nbsp;</p>


### Visuals

<p>&nbsp;</p>


### Installation

After initial cloning. Navigate into the project folder and run the following:

```
bundle install
```
```
npm install --prefix client
```
Once the apps dependencies are installed, run the following code to set up the database.
```
rails db:create db:migrate
```
The final step once setup is complete is to run the app. If running locally run the following command:
```
rails s
```
Then in another window in CLI, run the following command:
```
npm start --prefix client
```
Then navigate to http://localhost:4000/
<p>&nbsp;</p>


### Roadmap
#### Future Release Features
- Implementing a rating system
- Editable recipes
<p>&nbsp;</p>


### Contributions
I am not open to contributions at the present time.
<p>&nbsp;</p>
