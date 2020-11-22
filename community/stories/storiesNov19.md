---
layout: default
title: Gladstone
permalink: /stories/gladstone/
---

<div class="content main container-fluid story-single">
    <div class="story-single-content">
        <h5 class="story-single-title">{% t stories.story7.title %}</h5>
        <p class="story-author-publish">
            {% t stories.story7.date %}
            <i class="far fa-user story-icon"></i>
            <i>{% t stories.story7.author %}</i>
        </p>
        <p class="story-author-publish">
            {% t stories.story7.translated.header %}
            {% t stories.story7.translated.name %}
        </p>
        <strong><p class="story-preview">{% t stories.story7.p1 %}</p></strong>
        <strong><p class="story-preview">{% t stories.story7.boxOfficeText %}</p></strong>
        <div class="single-story-content">
            <div class="row">
                <div class="col-md concert-info">
                <div class="story-description" style="padding-top: 1em;">
                    <p>{% t stories.story7.body.p1 %}</p>
                    <p>{% t stories.story7.body.p2 %}</p>
                    <p>{% t stories.story7.body.p3 %}</p>
                    <div class="story-image-container">
                        <img class="center-img story-image" src="/assets/img/stories/story7/{% t stories.story7.img %}.jpg" width="100%"/>
                    </div>
                    <p>{% t stories.story7.body.p4 %}</p>
                    <p>{% t stories.story7.body.p5 %}</p>
                    <div style="padding-bottom: 2em; margin: 0 auto; text-align: center;">
                        <a
                            type="button"
                            class="btn btn-outline-purple"
                            href="{{ site.baseurl }}/programming/"
                        >
                            {% t stories.story7.body.button %}
                        </a>
                    </div>
                    <div class="story-purple-background">
                        <strong><h5>{% t stories.story7.fastFacts.title %}</h5></strong>
                        <p>{% t stories.story7.fastFacts.f1 %}</p>
                        <p>{% t stories.story7.fastFacts.f2 %}</p>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    </div>

</div>
