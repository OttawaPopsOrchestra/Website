---
layout: default
title: Story 1
permalink: /stories/story1/
---

<div class="content main container-fluid story-single">
    <div class="story-single-content">
        <h5 class="story-single-title">{% t stories.story1.title %}</h5>
        <img src="/assets/img/concerts-single/ToTBanner.png" width="100%" />
        <div class="single-story-content">
        <div class="row">
        <div class="col-md concert-info">
            <div class="row">
            <div class="col-md-4 col-sm">
                <a class="btn btn-maroon btn-block" role="button" href="#listenStory1">{% t stories.listen %} <i class="fas fa-music"></i></a>
            </div>
            </div>
            <div class="story-description">
                <div class="row">
                    <div class="col-md-3 bold">
                    {% t stories.written %}
                    </div>
                    <div class="col-md-9">
                    {% t stories.story1.author %}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 bold">
                    {% t stories.published %}
                    </div>
                <div class="col-md-9">
                    {% t stories.story1.date %}
                </div>
                </div>
            </div>
            <div class="story-description" style="padding-top: 1em;">
            <p>{% t stories.story1.article1 %}</p>
            <p>{% t stories.story1.article2 %}</p>
            <p>
                {% t stories.story1.proud %}
                <strong>{% t stories.story1.proudBold %}</strong>
                {% t stories.story1.proudDate %}
            </p>
            <h5>{% t stories.story1.what.title %}</h5>
            <p>{% t stories.story1.what.p %}</p>
            <h5>{% t stories.story1.how.title %}</h5>
            <p>{% t stories.story1.how.p1 %}</p>
            <p>
                {% t stories.story1.how.p2_1 %}
                <strong>{% t stories.story1.how.p2_bold %}</strong>
                {% t stories.story1.how.p2_2 %}
            </p>
            <p>{% t stories.story1.how.p3 %}</p>
            </div>
            <div id="listenStory1" style="padding-bottom: 5em;">
                <iframe src="https://open.spotify.com/embed/playlist/6wXiN6S4626e3hdcMOb0fx" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            </div>
        </div>
        </div>
    </div>
</div>
