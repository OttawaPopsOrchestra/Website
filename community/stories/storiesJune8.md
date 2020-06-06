---
layout: default
title: Story 1
permalink: /stories/story1/
---

<div class="content main container-fluid">
    <img src="/assets/img/concerts-single/ToTBanner.png" width="100%" />
    <div class="concert-single">
    <div class="row">
      <div class="col-md concert-info">
        <div class="row">
          <div class="col-md-8">
            <h5 class="concert-title">{% t stories.story1.title %}</h5>
          </div>
          <div class="col-md">
            <a class="btn btn-maroon btn-block" role="button" href="#listen">{% t stories.listen %} <i class="fas fa-music"></i></a>
          </div>
        </div>
        <div class="concert-description">
            <div class="row">
                <div class="col-md-3 bold">
                {% t stories.written %}
                </div>
                <div class="col-md-4">
                {% t stories.story1.author %}
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 bold">
                {% t stories.published %}
                </div>
              <div class="col-md-4">
                {% t stories.story1.date %}
              </div>
            </div>
        </div>
        <div class="concert-description" style="padding-top: 1em;">
          <p>{% t stories.story1.article1 %}</p>
          <p>{% t stories.story1.article2 %}</p>
          <p>{% t stories.story1.article3 %}</p>
          <p>{% t stories.story1.article4 %}</p>
        </div>
       <div id="listen" style="padding-bottom: 5em;">
            <iframe src="https://open.spotify.com/embed/playlist/4EBL0jzb36rCwR1EFXT7kq" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="autoplay; encrypted-media"></iframe>
        </div>
        <hr>{% include upcoming.html %}
      </div>
    </div>
</div>
