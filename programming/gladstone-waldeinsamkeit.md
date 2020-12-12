---
layout: default
title: Gladstone Waldeinsamkeit
permalink: /programming/gladstone-waldeinsamkeit/
---

<div class="content main container-fluid">
   <a href="https://www.facebook.com/events/812306975981933" target="_blank">
    <img src="/assets/img/stories/story7/{% t stories.story7.img %}.jpg" title="{% t concerts.gladstone-waldeinsamkeit.title %}" alt="{% t concerts.gladstone-waldeinsamkeit.title %}" width="100%" />
    </a>
    <div class="concert-single">
    <div class="row">
        <div class="col-md concert-info">
        <div class="row">
            <div class="col-md-8">
            <a href="https://www.facebook.com/events/812306975981933" target="_blank">
                <h5 class="concert-title">{% t concerts.gladstone-waldeinsamkeit.title %} </h5>
            </a>
            </div>
            <div class="col-md">
                <a href="https://www.facebook.com/events/812306975981933" class="btn btn-maroon btn-block" target="_blank">{% t concerts.gladstone-waldeinsamkeit.button %}</a>
                <p style="padding-top:10px">{% t concerts.gladstone-waldeinsamkeit.donate %}</p>
            </div>
        </div>
        <div class="concert-description">
            <a class="ticket-link" href="https://www.facebook.com/events/812306975981933" target="_blank">
            <div class="row">
                <div class="col-md-4">
                <i class="far fa-calendar-alt"></i> {% t concerts.gladstone-waldeinsamkeit.concert1.date %}
                </div>
                <div class="col-md-4">
                <i class="far fa-clock"></i> {% t concerts.gladstone-waldeinsamkeit.concert1.time %}<br>
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
                <h2>{% t concerts.gladstone-waldeinsamkeit.description.title %}</h2>
                {% if site.lang == "en" %}
                    <p style="color: grey">{% t concerts.gladstone-waldeinsamkeit.description.subtitle %}</p>
                {% endif %}
                <p><i>{% t concerts.gladstone-waldeinsamkeit.description.def.p1 %}</i></p>
                <ul style="font-size: 18px">
                    <li>{% t concerts.gladstone-waldeinsamkeit.description.def.l1 %}</li>
                </ul>
                <p>{% t concerts.gladstone-waldeinsamkeit.description.p %}</p>
                <p><b>{% t concerts.gladstone-waldeinsamkeit.program.title %}</b></p>
                <div style="font-size: 18px">
                    <p>
                        {% t concerts.gladstone-waldeinsamkeit.program.p1 %}<br/>
                        {% t concerts.gladstone-waldeinsamkeit.program.p2 %}<br/>
                    </p>
                    <p>
                        {% t concerts.gladstone-waldeinsamkeit.program.i1 %}
                    </p>
                </div>
                <div style="font-size: 18px">
                    <p>
                        {% t concerts.gladstone-waldeinsamkeit.program2.p1 %}<br/>
                        <div style="padding-left: 1em">
                            {% t concerts.gladstone-waldeinsamkeit.program2.p1_a %}<br/>
                            {% t concerts.gladstone-waldeinsamkeit.program2.p1_b %}<br/>
                        </div>
                    </p>
                    <p>
                        {% t concerts.gladstone-waldeinsamkeit.program2.i1 %}<br/>
                        {% t concerts.gladstone-waldeinsamkeit.program2.i2 %}<br/>
                        {% t concerts.gladstone-waldeinsamkeit.program2.i3 %}<br/>
                    </p>
                </div>
            </div>
            </div>
            <div class="row">
            </div>
        </div>
    </div>
     <hr>{% include upcoming.html %}

</div>
