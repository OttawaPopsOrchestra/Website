---
layout: default
title: ToT
permalink: /2018-2019/ToT/

---

<div class="content main container-fluid">
    <img src="/assets/img/concerts-single/ToTBanner.png" width="100%" />
    <div class="concert-single">
    <div class="row">
      <div class="col-md concert-info">
        <div class="row">
          <div class="col-md-8">
            <h5 class="concert-title">{% t concerts.ToT.title %}</h5>
          </div>
          <div class="col-md">
            <button class="btn btn-maroon btn-block" disabled>{% t concerts.eventPassed %}</button>
          </div>
        </div>
        <div class="concert-description">
            <div class="row">
              <div class="col-md-4">
                <i class="far fa-calendar-alt"></i> {% t concerts.ToT.concert1.date %}
              </div>
              <div class="col-md-4">
                <i class="far fa-clock"></i> {% t concerts.ToT.concert1.time %}<br>
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
             {% t concerts.age.value %}<br><br>
            </div>
          </div>
          <p>{% t concerts.ToT.description %}</p>
        </div>
      </div>
      <div id="upcoming" style="margin-bottom: 5px !important"></div>
    </div>
</div>