---
layout: default
title: Disney
permalink: /2018-2019/Disney/

---

<div class="content main container-fluid">
    <img src="/assets/img/concerts-single/DICBanner.png" width="100%" />
    <div class="concert-single">
        <div class="row">
          <div class="col-md concert-info">
            <div class="row">
              <div class="col-md-8">
                <h5 class="concert-title">{% t concerts.Disney.title %}</h5>
                <a href="/assets/pdf/DIC%20Program%20(Links).pdf" class="btn btn-outline-maroon" target="_blank">{% t concerts.download %}</a>
              </div>
    <!--              <div class="col-md">-->
    <!--                <a href="https://ev7.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0517N&linkID=centrepointe&shopperContext=&caller=&appCode=" class="btn btn-maroon btn-block" target="_blank">BUY TICKETS</a>-->
    <!--                <p style="padding-top:10px">Tickets sold through the Meridian Theatres at Centrepointe Box Office.</p>-->
    <!--              </div>-->
              <div class="col-md">
                <button class="btn btn-maroon btn-block" disabled>{% t concerts.eventPassed %}</button>
              </div>
            </div>
            <div class="concert-description">
              <div class="row">
                <div class="col-md-4">
                  <i class="far fa-calendar-alt"></i> {% t concerts.Disney.concert1.date %}
                </div>
                <div class="col-md-4">
                  <i class="far fa-clock"></i> {% t concerts.Disney.concert1.time %}<br>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <i class="far fa-calendar-alt"></i> {% t concerts.Disney.concert2.date %}
                </div>
                <div class="col-md-4">
                  <i class="far fa-clock"></i> {% t concerts.Disney.concert2.time %}<br><br>
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
                <p>{% t concerts.Disney.description %}</p>
              </div>
              <iframe src="https://open.spotify.com/embed/user/gc288ipmhh2500t2510g767lt/playlist/4PUZIDCh6rRIWQcgoMS5le" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            </div>
          </div>
          <hr>{% include upcoming.html %}
        </div>
</div>