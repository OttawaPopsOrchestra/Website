---
layout: default
title: Stories
namespace: stories
permalink: /stories/
---

<div class="content main container-fluid">
    <div class="concert">
        <h3 style="margin: 0 auto; color: #920503; text-transform: uppercase; font-weight: 700">{% t stories.header %}</h3>
        <p style="margin: 0 auto; color: #920503; font-weight: 700">{% t stories.description %}</p>
        <!-- <p style="margin: 0 auto; color: #920503; text-transform: uppercase;font-weight: 400">
            <a href="{{ site.baseurl }}/season-tickets/" style="color: #920503;">{% t concerts.seasonSub %}</a> {% t concerts.ssOnSale %} <b>{% t concerts.may17 %}</b>
        </p>
        <p style="margin: 0 auto; color: #920503; text-transform: uppercase;font-weight: 400">{% t concerts.stOnSale %} {% t concerts.ssOnSale %} <b>{% t concerts.june26 %}</b></p> -->
    </div>
    <div class="concert">
        <div class="row">
            <div class="col-lg-3">
                <a href="{{ site.baseurl }}/stories/story1" target="_blank"><img title="{% t concerts.ToT.title %}" alt="{% t concerts.ToT.title %}" class="concert-detail" src="/assets/img/concerts-full/ToTDetail.png"/></a>
            </div>
            <div class="col-lg-9 concert-info">
                <div class="row">
                    <div class="col-md-8">
                        <a href="{{ site.baseurl }}/stories/story1" target="_blank"><h5 class="concert-title">{% t stories.story1.title %}</h5></a>
                    </div>
                </div>
                <div class="concert-description">
                    <div class="row">
                        <div class="col-md-12 col-sm">
                            <p>{% t stories.written %}{% t stories.story1.author %}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm">
                            {% t stories.published %}{% t stories.story1.date %}
                        </div>
                    </div>
                    <button class="btn btn-outline-maroon read-more" onclick="location.href='{{ site.baseurl }}/stories/story1';">{% t concerts.readMore %}</button>
                </div>
            </div>
        </div>
    </div>
</div>
