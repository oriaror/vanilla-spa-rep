class Profile extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="postContainer">
    <div class='posts'>
    <div class='post'>
    <img class='postImg' src="src/img/land.jpg" alt='ss' /> 
         <div class='postComment'>
         <img src='src/img/icons/union.png' alt='ss'/>
            <p style='display: inline; padding: 5px; color: #5095EC'>Jason Anderson</p>commented:
               <div style="padding-top: 15px">
                  <p>Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>
                  <p style="color: #8F8F8F; padding-top: 15px">– Jason, 10:30 am</p>
               </div>
               <div style="padding-top: 15px">
                  <img  src='src/img/icons/view.png' alt='ss' />
                  <p style='display: inline;'>432</p>
                  <img src='src/img/icons/union.png' alt='ss' />
                  <p style='display: inline'>47</p>
               </div>   
         </div>
      </div>
     
    </div>   
    
    <div class='profileWrapper'>
    <div class='wrapper'>
    <div class='user'>
    <img class='ava' src="src/img/ava.PNG" alt='ss' />
    <div class='userInfo'>
      <p>Hanna Dorman</p>
      <p style='font-size: 14px; color: #8F8F8F;'>UX/UI designer</p>
      <div class='logos'>
      <img src='src/img/icons/tg.png' alt='ss' />
      <img src='src/img/icons/tg.png' alt='ss' />
      <img src='src/img/icons/twitter.png' alt='ss' />
      </div>
    </div>
    </div>
    </div>
    
    <div class='wrapper'>
    <div class='navigationWrap'>
    <div class='navigationarrow'>
    <p>Navigation</p><img src="src/img/icons/up.png" alt='ss' />
    </div>
    <hr/>
    <div>
    <img src="src/img/icons/person.png" alt='ss' />
    <a class='navA'>My Profile</a>
    </div> 
    <div>
    <img src="src/img/icons/balance.png" alt='ss' />
    <a class='navA'>Balance</a>
    </div>
    <div>
    <img src="src/img/icons/schema.png" alt='ss' />
    <a class='navA'>Connections</a>
    </div>
    <div>
    <img src="src/img/icons/friends.png"  alt='ss' />
    <a class='navA'>Friends</a>
    </div>
    <hr/>
    <div>
    <img src="src/img/icons/events.png" alt='ss' />
    <a class='navA'>Events</a>
    </div>
    <div>
    <img src="src/img/icons/settings.png" alt='ss' />
    <a class='navA'>Account Settings</a>
    </div>
    </div>
    </div>
    
    <div class='wrapper'>
    <div class='shareWrap'>
    <div class='navigationarrow'>
    <p>Share your thougths</p><img src="src/img/icons/up.png" alt='ss' />
    </div>
    <hr/>
    <input type='text' class='input'/>
    <button class='save'>Save</button>
    </div>
    </div> 
     </div> `;
  }
}

customElements.define("profile-comp", Profile);