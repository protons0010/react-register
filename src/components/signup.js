import React from 'react'

function signup() {
    return (
        <div>

        <section class="section" data-component="Seaction">
    
        <div class="amarblock" data-component="amarblock">
                <div class="signuptitle" data-component="Heading"><h2>Join Now </h2></div>
                <div class="inputfield" data-component="inputfield"><input type="text" placeholder="Enter First Name"/></div>
                <div class="inputfield" data-component="inputfield"><input type="text" placeholder="Enter Last Name"/></div>
                <div class="inputfield" data-component="inputfield"><input type="email" placeholder="Enter Your E-mail Address"/></div>
                <div class="inputfield" data-component="inputfield"><input type="password" placeholder="Enter Your Password"/></div>
    
    
          
            <select class="select" data-component="Select">
              <option>SELECT YOUR COUNTRY</option>
                  <option>UAE</option>
                  <option>INDIA</option>
                  <option>UNATED STATE</option>
                  <option>UNITED KINGDOM</option>
                  <option>NORWAY</option>
                  <option>SWEDEN</option>
                  <option>AUTRALIA</option>
                  <option>UAE</option>
                  <option>INDIA</option>
                  <option>UNATED STATE</option>
                  <option>UNITED KINGDOM</option>
                  <option>NORWAY</option>
                  <option>SWEDEN</option>
                  <option>AUTRALIA</option>
            </select>
            
    
            <div class="gender" data-component="Gender">
              Gender:
                  <input name="gender" type="radio"/>Male
                  <input name="gender" type="radio"/>Female
            </div>
    
            <div class="hobbies" data-component="Hobbies">
                  <h3>Your hobbies:</h3>
                  <input type="checkbox"/>Cricket<br />
                  <input type="checkbox"/>Football<br />
                  <input type="checkbox"/>Gaming<br />
                  <input type="checkbox"/>Coding<br />
                  <input type="checkbox"/>Gardening<br />
                  <input type="checkbox"/>Traveling<br /><br />
            </div>
    
            <div class="submitButton" data-component="submitButton"><input type="submit" value="Sign Up"/></div>
        </div>
        </section>
      </div>
    );
}

export default signup;
