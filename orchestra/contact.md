---
layout: default
title: Contact
permalink: /contact/

---

<div class="main content container-fluid">
   <div class="row contact-row">
       <div class="col-md">
         <h1 id="contact-us">{% t pages.contact %}</h1>
       </div>
     </div>
     <div class="row contact-row">
       <div class="col-md">
         <p id="contact-general">{% t contact.val %} <a href="mailto:info@ottawapopsorchestra.ca">info@ottawapopsorchestra.ca.</a></p>
       </div>
     </div>
     <div class="row contact-row background-grey">
       <div class="col-lg-7 contact-people">
         <div class="row">
           <div class="profile-pic col-lg-2 col">
             <img src="/assets/img/mathieu-roy.jpg">
           </div>
           <div class="col contact-info">
             <p class="contact-title"><b class="contact-name">Mathieu Roy</b> | {% t contact.artistic %}</p>
             <div class="row contact-phone">
               <div class="col-1 icon"><i class="fas fa-phone fa-lg"></i></div>
               <div class="col">(613) 793 - 3998</div>
             </div>
             <div class="row contact-email">
               <div class="col-1 icon"><i class="far fa-envelope fa-lg"></i></div>
               <div class="col email">
                 <a href="mailto:mathieu.roy@ottawapopsorchestra.ca">  mathieu.roy@ottawapopsorchestra.ca</a>
               </div>
             </div>
           </div>
         </div>
       </div>
            <div class="col-lg-4 box-office">
              <p class="contact-title">{% t footer.box-office.title %}</p><hr>
              <div class="row contact-phone">
                <!--<div class="col-1 icon"><i class="fas fa-phone fa-lg"></i></div>-->
                <div class="col">
                  <p>
                    {% t footer.box-office.phone %}, {% t footer.box-office.time %}<br>
                    {% t footer.box-office.toll %}<br>
                    {% t footer.box-office.person %}<br>
                    {% t footer.box-office.online %}
                  </p>
                </div>
              </div>
            </div>  
       </div>  
</div>