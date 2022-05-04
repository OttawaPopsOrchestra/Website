---
layout: default
title: New Works
permalink: /programming/newworks/
---

<div class="content main container-fluid">
   <a onclick="fbq('track', 'InitiateCheckout', {content_ids: ['partner_event_id'], eventref: 'fb_oea' // or set to empty string }
);" href="https://www.eventbrite.ca/e/new-works-project-tickets-310866589337" target="_blank">
    <img src="/assets/img/concerts-single/programming/{% t concerts.newWorks.banner %}.png" title="{% t concerts.newWorks.title %}" alt="{% t concerts.newWorks.title %}" width="100%" />
    <!-- </a> -->
    <div class="concert-single">
    <div class="row">
        <div class="col-md concert-info">
        <div class="row">
            <div class="col-md-8">
            <a onclick="fbq('track', 'InitiateCheckout', {content_ids: ['partner_event_id'], eventref: 'fb_oea' // or set to empty string }
);" href="https://www.eventbrite.ca/e/new-works-project-tickets-310866589337" target="_blank">
                <h5 class="concert-title">{% t concerts.newWorks.title %}</h5>
            </a>
            </div>
            <div class="col-md">
                <a onclick="fbq('track', 'InitiateCheckout', {content_ids: ['partner_event_id'], eventref: 'fb_oea' // or set to empty string }
);" href="https://www.eventbrite.ca/e/new-works-project-tickets-310866589337" class="btn btn-maroon btn-block" target="_blank">{% t concerts.buyTickets %}</a>
                <p style="padding-top:10px">{% t concerts.newWorks.tickets %}</p>
            </div>
        </div>
        <div class="concert-description">
            <a onclick="fbq('track', 'InitiateCheckout', {content_ids: ['partner_event_id'], eventref: 'fb_oea' // or set to empty string }
);" class="ticket-link" href="https://www.eventbrite.ca/e/new-works-project-tickets-310866589337" target="_blank">
            <div class="row">
                <div class="col-md-4">
                <i class="far fa-calendar-alt"></i> {% t concerts.newWorks.concert1.date %}
                </div>
                <div class="col-md-4">
                <i class="far fa-clock"></i> {% t concerts.newWorks.concert1.time %}<br>
                </div>
            </div>
            </a>
            <div class="row">
                <div class="col-md-4 bold">
                  {% t concerts.lang.title %}:
                </div>
                <div class="col-md-4">
                  {% t concerts.lang.value %}
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 bold">
                  {% t concerts.age.title %}:
                </div>
                <div class="col-md-4">
                  {% t concerts.age.value %}<br><br> </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 bold">
                    {% t concerts.tickets.title %}
                </div>
                <div class="col-md">
                    <p>
                        {% t concerts.newWorks.tickets %}<br>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <i class="fas fa-map-marker-alt"></i> {% t concerts.newWorks.location.loc1 %}
                </div>
                <div class="col-md">
                    <p>
                        {% t concerts.newWorks.location.loc2 %}<br>
                        {% t concerts.newWorks.location.loc3 %}<br>
                    </p>
                </div>
            </div>
            <div class="row concert-description">
                <div class="col">
                    <p>{% t concerts.newWorks.description %}</p>
                    <p>{% t concerts.newWorks.description2 %}</p>
                </div>
            </div>
        </div>
    </div>
     <hr>{% include upcoming.html %}
</div>
