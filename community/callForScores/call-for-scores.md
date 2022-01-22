---
layout: default
title: Call For Scores
permalink: /call-for-scores/
---

<div class="content main container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-8 col-sm callForScores">
            <h3>{% t callForScores.header %}</h3>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-sm-5">
                        <img class="card-img" src="/assets/img/callForScores/thumbnail.jpg" alt="Suresh Dasari Card">
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title">{% t callForScores.title %}</h5>
                            <p class="card-text">{% t callForScores.preview %}</p>
                            <div class="written">
                                <div class="row">
                                    <div class="col-md-12 col-sm">
                                        <strong>{% t stories.written %}</strong>Sebastian Lacey
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-sm">
                                        <strong>{% t stories.published %}</strong>INSERT DATE
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-maroon" onclick="location.href='{{ site.baseurl }}/call-for-scores/new-works';">{% t callForScores.button %}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
