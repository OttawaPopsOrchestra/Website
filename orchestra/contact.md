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
     <div class="row contact-row">
       <div class="col-md contact-people">
         <div class="row">
           <div class="profile-pic col-1">
             <img src="/assets/img/mathieu-roy.jpg">
           </div>
           <div class="col contact-info">
             <p class="contact-title"><b class="contact-name">Mathieu Roy</b> | Artistic Director</p>
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
       </div>
     <div class="col-md contact-people">
       <p class="contact-title">{% t footer.box-office.title %}</p>
       <div class="row contact-phone">
         <!--<div class="col-1 icon"><i class="fas fa-phone fa-lg"></i></div>-->
         <div class="col">
           <p>{% t footer.box-office.time %}</p>
           <p>{% t footer.box-office.phone %}</p>
           <p>{% t footer.box-office.toll %}</p>
           <p>{% t footer.box-office.person %}</p>
           <p>{% t footer.box-office.online %}</p>
         </div>
       </div>
     </div>    
</div>