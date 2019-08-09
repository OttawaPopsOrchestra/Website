---
layout: default
title: Homepage
permalink: /

---
<div class="main content container-fluid">
    <div class="background-image"></div>
    <div class="parallax">
        <div id="carouselExampleControls" class="carousel slide carousel-computer" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id="SWcarousel-img" class="d-block w-100" src="/assets/img/concerts-single/2019-2020/HMWBanner.png" alt="HMW">
                    <div class="carousel-caption ">
                        <a id="SWcarousel" onmouseenter="grey(this.id)" onmouseout="unGrey(this.id)" href="Disney.html" class="btn btn-maroon">{% t home.moreInfo %}</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="carouselExampleControls-mobile" class="carousel slide carousel-mobile" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="Disney.html"><img id="SWcarousel-img-mobile" class="d-block w-100" src="/assets/img/concerts-full/2019-2020/HMW2Detail.png" alt="HMW"></a>
                </div>
            </div>
        </div>
        <div class="row mission-statement">
            <div class="col">
                <h1 data-aos="fade-right" data-aos-duration="1000">{% t home.mission-title %}</h1>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">{% t home.mission %}</p>
            </div>
        </div>
        <div class="upcoming-home">
            {% include upcoming.html %}
        </div>
        <!-- SM and About Us -->
        <div class="row">
            <div class="col-md-5 offset-md-1">
                <div class="row">
                    <div class="col about-us-main" data-aos="fade-in" data-aos-duration="1000">{% t home.about.one %}</div>
                </div>
                <div class="row">
                    <div class="col about-us-main" data-aos="fade-in" data-aos-duration="1000">{% t home.about.two %}</div>
                </div>
                <div class="row">
                    <div class="col about-us-main" data-aos="fade-in" data-aos-duration="1000">{% t home.about.three %}</div>
                </div>
                <div class="row">
                    <div class="col about-us-main" data-aos="fade-in" data-aos-duration="1000">{% t home.about.four %}</div>
                </div>
            </div>
            <div class="col-md-5 offset-md-1" id="curator-feed"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
        </div>
    </div>
</div>


