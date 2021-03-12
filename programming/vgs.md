---
layout: default
title: Video Game Symphony
permalink: /programming/videogamesymphony/
---

<div class="content main container-fluid">
   <a onclick="return gtag_report_conversion('https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext');" href="https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext" target="_blank">
    <img src="/assets/img/concerts-single/programming/VGSBanner.jpeg" title="{% t concerts.VGS.title %}" alt="{% t concerts.VGS.title %}" width="100%" />
    <!-- </a> -->
    <div class="concert-single">
    <div class="row">
        <div class="col-md concert-info">
        <div class="row">
            <div class="col-md-8">
            <a onclick="return gtag_report_conversion('https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext');" href="https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext" target="_blank">
                <h5 class="concert-title">{% t concerts.VGS.title %} - {% t concerts.VGS.concert1.date %} </h5>
            </a>
            </div>
            <div class="col-md">
                <a onclick="return gtag_report_conversion('https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext');" href="https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext" class="btn btn-maroon btn-block" target="_blank">{% t concerts.buyTickets %}</a>
                <p style="padding-top:10px">{% t concerts.meridian %}</p>
            </div>
        </div>
        <div class="concert-description">
            <a onclick="return gtag_report_conversion('https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext');" class="ticket-link" href="https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext" target="_blank">
            <div class="row">
                <div class="col-md-4">
                <i class="far fa-calendar-alt"></i> {% t concerts.VGS.concert1.date %}
                </div>
                <div class="col-md-4">
                <i class="far fa-clock"></i> {% t concerts.VGS.concert1.time %}<br>
                </div>
            </div>
            </a>
            <div class="row" style="height: 30px; font-size: 18px;text-decoration: line-through;">
                <div class="col-md">
                    <p>{% t concerts.VGS.concert1.postponed %}</p>
                </div>
            </div>
            <div class="row" style="height: 30px; font-size: 16px;text-decoration: line-through;">
                <div class="col-md">
                    <p>{% t concerts.VGS.concert1.original %}</p>
                </div>
            </div>
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
     <div class="col">
                <p>{% t concerts.VGS.description2 %}</p>
                <h4>{% t concerts.VGS.refund %}</h4>
                <p>{% t concerts.VGS.description %}</p>
     </div>
            </div>
            <div class="row">
            <div class="col-md-4">
                <i class="fas fa-map-marker-alt"></i> {% t concerts.meridian-loc.title %}
            </div>
            <div class="col-md">
                <p>
                    {% t concerts.meridian-loc.address %}<br>
                    {% t concerts.meridian-loc.city %}<br>
                    {% t concerts.meridian-loc.phone %}
                </p>
            </div>
            </div>
            <!-- <div class="row">
            <div class="col-md-4 bold">
                {% t concerts.tickets.title %}
            </div>
            <div class="col-md">
                <p>
                    {% t concerts.tickets.value %}<br>
                    {% t concerts.tickets.priceVGS %}<br>
                </p>
            </div>
            </div> -->
            <iframe src="https://open.spotify.com/embed/playlist/1xlIORmvzJLwbRRgsm46gv" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="autoplay; encrypted-media"></iframe>
        </div>
    </div>
     <hr>{% include upcoming.html %}
</div>
