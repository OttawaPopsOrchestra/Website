---
layout: default
title: Story 1
permalink: /stories/story1/
---

<div class="content main container-fluid story-single">
    <div class="story-single-content">
        <h5 class="story-single-title">{% t stories.story1.title %}</h5>
        <p class="story-author-publish">
            {% t stories.story1.date %} 
            <i class="far fa-user story-icon"></i>
            <i>{% t stories.story1.author %}</i>
        </p>
        <img class="center-img" src="/assets/img/stories/story1/Photo 1- Neon Sign.jpg" />
        <div class="single-story-content">
        <div class="row">
        <div class="col-md concert-info">
            <div class="row">
            <div class="col-md-5 col-sm">
                <a class="btn btn-outline-purple btn-block" role="button" href="#listenStory1">{% t stories.listen %} <i class="fas fa-music"></i></a>
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
            <img class="center-img" src="/assets/img/stories/story1/Photo 2- Ottawa_Gatineau.jpg" width="80%"/>
            <h5>{% t stories.story1.how.title %}</h5>
            <p>{% t stories.story1.how.p1 %}</p>
            <p>
                {% t stories.story1.how.p2_1 %}
                <strong>{% t stories.story1.how.p2_bold %}</strong>
                {% t stories.story1.how.p2_2 %}
            </p>
            <p>{% t stories.story1.how.p3 %}</p>
            <p>{% t stories.story1.playlist %}</p>
            </div>
            <div id="listenStory1" style="padding-bottom: 5em;">
                <iframe src="https://open.spotify.com/embed/playlist/6wXiN6S4626e3hdcMOb0fx" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            </div>
        </div>
        </div>
    </div>
</div>
