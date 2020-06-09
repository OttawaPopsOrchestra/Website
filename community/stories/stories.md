---
layout: story-default
title: Stories
namespace: stories
permalink: /stories/
---

<div class="content main container-fluid">
    <img src="{% t stories.banner %}" width="100%" />
    <div class="stories">
        <div class="stories-row">
            <div class="row">
                <div class="col-lg-4">
                    <a href="{{ site.baseurl }}/stories/story1" target="_blank"><img title="{% t stories.story1.title %}" alt="{% t stories.story1.title %}" class="concert-detail" src="/assets/img/stories/story1/Photo 1- Neon Sign.jpg"/></a>
                </div>
                <div class="col-lg-8 concert-info">
                    <div class="row">
                        <div class="col-md">
                            <a href="{{ site.baseurl }}/stories/story1" target="_blank"><h5 class="story-title">{% t stories.story1.title %}</h5></a>
                            <p class="story-preview">{% t stories.description %}</p>
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
                        <button class="btn btn-outline-purple read-more" onclick="location.href='{{ site.baseurl }}/stories/story1';">{% t concerts.readMore %}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
