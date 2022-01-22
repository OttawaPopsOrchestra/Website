---
layout: default
title: Donate
namespace: donate
permalink: /donate/
---

<div class="content main container-fluid" style="padding-top: 10px;">
    <div class="concert support-us-item">
        <div class="row ">
            <div class="col-lg-9 support-info">
                <div class="row">
                    <div class="col-md-8">
                        <a href="{{ site.baseurl }}/support-us/" target="_blank"><h5 class="support-us-title">{% t donate.header %} </h5></a>
                    </div>
                </div>
                <div class="concert-description">
                        <div class="row">
                            <div class="col-md-8">
                                <p>{% t donate.preview %}</p>
                            </div>
                        </div>
                    <button class="btn btn-outline-maroon read-more" onclick="location.href='{{ site.baseurl }}/support-us/';">{% t concerts.readMore %}</button>
                </div>
            </div>
        </div>
    </div>
</div>
