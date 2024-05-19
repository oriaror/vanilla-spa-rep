import "../../../public/icons";

export default () => /*html*/ `
<div class="postContainer">

    <div class='posts'>
          <div class='post'>
               <img class='postImg' src='public/784a0ab95cd5be67b447f5bfbc65d94f.jpg' alt='ss' />
               <div class='postComment'>
               <img src='./public/icons/Union.png'/>
                  <p style='display: inline; padding: 5px; color: #5095EC'>Jason Anderson</p>commented:
                     <div style="padding-top: 15px">
                        <p>Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>
                        <p style="color: #8F8F8F; padding-top: 15px">– Jason, 10:30 am</p>
                     </div>
                     <div style="padding-top: 15px">
                        <img src='./public/icons/view.png'/>
                        <p style='display: inline;'>432</p>
                        <img src='./public/icons/union.png'/>
                        <p style='display: inline'>47</p>
                     </div>   
               </div>
            </div>
           
    </div>   
 
    <div class='profileWrapper'>
    <div class='wrapper'>
        <div class='user'>
        <img class='ava' src="./public/ava.PNG" >
        <div class='userInfo'>
            <p>Hanna Dorman</p>
            <p style='font-size: 14px; color: #8F8F8F;'>UX/UI designer</p>
            <div class='logos'>
            <img src='./public/icons/tg.png'/>
            <img src='./public/icons/tg.png'/>
            <img src='./public/icons/twitter.png'/>
            </div>
        </div>
        </div>
    </div>

    <div class='wrapper'>
    <div class='navigationWrap'>
      <div class='navigationarrow'>
       <p>Navigation</p><img src="./public/icons/up.png"/>
       </div>
       <hr/>
       <div>
        <img src="./public/icons/person.png">
        <a class='navA'>My Profile</a>
    </div> 
        <div>
        <img src="./public/icons/balance.png">
        <a class='navA'>Balance</a>
    </div>
    <div>
        <img src="./public/icons/schema.png">
        <a class='navA'>Connections</a>
    </div>
    <div>
        <img src="./public/icons/friends.png">
        <a class='navA'>Friends</a>
    </div>
        <hr/>
        <div>
        <img src="./public/icons/events.png">
        <a class='navA'>Events</a>
    </div>
    <div>
        <img src="./public/icons/settings.png">
        <a class='navA'>Account Settings</a>
    </div>
    </div>
 </div>

 <div class='wrapper'>
   <div class='shareWrap'>
      <div class='navigationarrow'>
      <p>Share your thougths</p><img src="./public/icons/up.png"/>
      </div>
      <hr/>
      <input type=text class='input'/>
      <button class='save'>Save</button>
   </div>
 </div>
 </div>      
`;
