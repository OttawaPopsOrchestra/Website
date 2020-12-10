---
layout: default
title: Gladstone Mistral
permalink: /programming/gladstone-mistral/
---

<div class="content main container-fluid">
   <a href="https://www.facebook.com/events/812306975981933" target="_blank">
    <img src="/assets/img/stories/story7/{% t stories.story7.img %}.jpg" title="{% t concerts.gladstone-mistral.title %}" alt="{% t concerts.gladstone-mistral.title %}" width="100%" />
    </a>
    <div class="concert-single">
    <div class="row">
        <div class="col-md concert-info">
        <div class="row">
            <div class="col-md-8">
            <a href="https://www.facebook.com/events/812306975981933" target="_blank">
                <h5 class="concert-title">{% t concerts.gladstone-mistral.title %} </h5>
            </a>
            </div>
            <div class="col-md">
                <a href="https://www.facebook.com/events/812306975981933" class="btn btn-maroon btn-block" target="_blank">{% t concerts.gladstone-mistral.button %}</a>
                <p style="padding-top:10px">{% t concerts.gladstone-mistral.donate %}</p>
            </div>
        </div>
        <div class="concert-description">
            <a class="ticket-link" href="https://www.facebook.com/events/812306975981933" target="_blank">
            <div class="row">
                <div class="col-md-4">
                <i class="far fa-calendar-alt"></i> {% t concerts.gladstone-mistral.concert1.date %}
                </div>
                <div class="col-md-4">
                <i class="far fa-clock"></i> {% t concerts.gladstone-mistral.concert1.time %}<br>
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
            <div class="col">
                <h2>{% t concerts.gladstone-mistral.description.title %}</h2>
                {% if site.lang == "en" %}
                    <p style="color: grey">{% t concerts.gladstone-mistral.description.subtitle %}</p>
                {% endif %}
                <p><i>{% t concerts.gladstone-mistral.description.def.p1 %}</i></p>
                <ul style="font-size: 18px">
                    <li>{% t concerts.gladstone-mistral.description.def.l1 %}</li>
                </ul>
                <p>{% t concerts.gladstone-mistral.description.p %}</p>
                <p>
                    <b>{% t concerts.gladstone-mistral.instrum.title %}</b>
                    <div style="font-size: 18px">
                        {% t concerts.gladstone-mistral.instrum.i1 %}<br/>
                        {% t concerts.gladstone-mistral.instrum.i2 %}<br/>
                        {% t concerts.gladstone-mistral.instrum.i3 %}<br/>
                        {% t concerts.gladstone-mistral.instrum.i4 %}<br/>
                        {% t concerts.gladstone-mistral.instrum.i5 %}<br/>
                    </div>
                </p>
                <p>
                    <b>{% t concerts.gladstone-mistral.rep.title %}</b>
                    <div style="font-size: 18px">
                        {% t concerts.gladstone-mistral.rep.r1 %}<br/>
                        {% t concerts.gladstone-mistral.rep.r2 %}<br/>
                    </div>
                </p>
            </div>
            </div>
            <div class="row">
            </div>
        </div>
    </div>
     <hr>{% include upcoming.html %}

</div>
