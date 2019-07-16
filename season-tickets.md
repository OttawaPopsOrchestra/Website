---
layout: default
title: Season Tickets
permalink: /season-tickets/
---

<div class="content main season-tickets container-fluid">
    <a href="https://www.eventbrite.ca/e/2019-2020-season-tickets-billets-de-saison-2019-2020-tickets-60169009126" target="_blank"><img src="/assets/img/season-tickets/seasonBanner.png" width="100%" /></a>
    <div class="row season-intro">
        <div class="col col-padding">
            <a href="https://www.eventbrite.ca/e/2019-2020-season-tickets-billets-de-saison-2019-2020-tickets-60169009126" target="_blank">
            <h4 style="padding: 10px;" class="concert-title">{% t season.title %}</h4></a>
            <h6>{% t season.subtitle %}</h6>
            <p>{% t season.p1 %}</p>
            <p><u><b>{% t season.p2 %} </b></u></p>
        </div>
        </div>
        <div class="row season-intro">
        <div class="col-md-8 fun-col">
            <h3>{% t season.p3 %} </h3>
        </div>
        <div class="col-md" id="ticket-button">
            <a  href="https://www.eventbrite.ca/e/2019-2020-season-tickets-billets-de-saison-2019-2020-tickets-60169009126" class="btn btn-outline-maroon btn-block">{% t season.get %}</a>
        </div>
        </div>
        <div class="row">
            <div class="savings col-lg-7 center col-padding">
                <h4>{% t season.savings.title %}</h4>
                <p>{% t season.savings.p1 %}</p>
                <img class="img-responsive" src="/assets/img/season-tickets/savings.png" alt="Season Savings">
            </div>
            <div class="col-lg-5 season-banner">
                <h4>{% t season.more.title %}</h4>
                <div class="row">
                <div class="col-md season-graphic text-center">
                    <img src="/assets/img/season-tickets/ticket.png">
                    <p>{% t season.more.best %}</p>
                </div>
                <div class="col-md season-graphic">
                    <img src="/assets/img/season-tickets/money.png">
                    <p>{% t season.more.percent %}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-md season-graphic">
                    <img src="/assets/img/season-tickets/people.png">
                    <p id="people-paragraph">{% t season.more.refusal %}</p>
                </div>
                <div class="col-md season-graphic">
                    <img src="/assets/img/season-tickets/calendar.png">
                    <p>{% t season.more.events %}</p>
                </div>
                </div>
            </div>
            </div>
            <div class="row seating">
            <div class="col col-padding">
                <h4>{% t season.map %}</h4>
                <div class="row">
                <div class="col-md">
                    <img class="img-responsive" src="/assets/img/season-tickets/seating-chart.png" alt="Seating Chart">
                </div>
                <div class="col-md">
                    <img id="seating-prices" class="img-responsive" src="/assets/img/season-tickets/seating-prices.png" alt="Seating Prices">
                    <p><br>{% t season.hst %}</p>
                </div>
                </div>
            </div>
            </div>
            <div class="row seating-renewal">
            <div class="col col-padding">
                <h4>{% t season.renew.title %}</h4>
                <p>{% t season.renew.p1 %}</p>
            </div>
        </div>
</div>
