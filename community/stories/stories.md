---
layout: default
title: Stories
namespace: stories
permalink: /stories/
---

<div class="content main container-fluid stories">
    <div class="stories-header">
        <h3>{% t stories.header %}</h3>
        <p style="">{% t stories.description %}</p>
    </div>
    <div class="stories-row">
        <div class="row">
            <div class="col-lg-3">
                <a href="{{ site.baseurl }}/stories/story1" target="_blank"><img title="{% t concerts.ToT.title %}" alt="{% t stories.story1.title %}" class="concert-detail" src="/assets/img/concerts-full/ToTDetail.png"/></a>
            </div>
            <div class="col-lg-9 concert-info">
                <div class="row">
                    <div class="col-md">
                        <a href="{{ site.baseurl }}/stories/story1" target="_blank"><h5 class="story-title">{% t stories.story1.title %}</h5></a>
                    </div>
                </div>
                <div class="story-description">
                    <div class="row">
                        <div class="col-md-12 col-sm">
                            <strong>{% t stories.written %}</strong>{% t stories.story1.author %}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm">
                            <strong>{% t stories.published %}</strong>{% t stories.story1.date %}
                        </div>
                    </div>
                    <button class="btn btn-outline-maroon read-more" onclick="location.href='{{ site.baseurl }}/stories/story1';">{% t concerts.readMore %}</button>
                </div>
            </div>
        </div>
    </div>
</div>
