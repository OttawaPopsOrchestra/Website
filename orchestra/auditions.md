---
layout: auditions-default
title: auditions
permalink: /auditions/
---

<div class="main auditions content container-fluid">
    <div class="parallax-auditions">
        <div class="row audition-row">
          <div class="col">
            <h1>{% t auditions.title %}</h1>
            <p style="font-size: large;font-weight: 700;border: 2px solid #920503;color: #920503;padding: 0.8em;border-radius: 25px;text-align: center;box-shadow: 10px 10px 8px grey;">{% t auditions.p1 %}</p>
            <div class="center">
              <a id="audition-reg-web" href="#audition-reg" class="btn-outline-maroon btn center">{% t auditions.regHere %}</a>
              <a id="audition-reg-mobile" href="https://docs.google.com/forms/d/e/1FAIpQLSecGvNIiQiXRxwq-qPYKx4-bCCHXNDZQYyxpMq1XmhVfCia3A/viewform?usp=sf_link" target="_blank" class="btn-outline-maroon btn center">{% t auditions.regHere %}</a>
            </div>
            <p>{% t auditions.p2 %}</p>
            <p>{% t auditions.p3 %}</p>
            <p>{% t auditions.p4 %}</p>
            <hr/>
            <p>{% t auditions.p5 %}</p>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {% t auditions.strings.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-A">
                <div class="card" style="margin-left: 1em;">
                  <div class="card-header" id="headingOne">
                    <h4 style="background: grey;">
                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne-A" aria-expanded="true" aria-controls="collapseOne">
                        {% t auditions.strings.concertMaster.title %} <i class="fas fa-caret-down"></i>
                      </button>
                    </h4>
                  </div>
                  <div id="collapseOne-A" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-A">
                    <div class="card-body">
                      <p>{% t auditions.strings.concertMaster.p1 %}</p>
                      <h5><strong>{% t auditions.scales %}</strong></h5>
                      <ul>
                        <li>{% t auditions.strings.scales.val %}</li>
                      </ul>
                      <h5><strong>{% t auditions.excerpts %}</strong></h5>
                      <ul>
                        <li>{% t auditions.strings.excerpts.val1 %}</li>
                        <li>{% t auditions.strings.excerpts.val2 %}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                  <div class="card-body">
                    <h5><strong>{% t auditions.scales %}</strong></h5>
                    <p>{% t auditions.strings.scales.p1 %}</p>
                    <ul>
                      <li>{% t auditions.strings.scales.l1 %}</li>
                      <li>{% t auditions.strings.scales.l2 %}</li>
                      <li>{% t auditions.strings.scales.l3 %}</li>
                      <li>{% t auditions.strings.scales.l4 %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-4">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      {% t auditions.woodwinds.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-4">
                  <div class="card-body">
                    <ul>
                      <li>{% t auditions.woodwinds.p1 %}</li>
                      <li>{% t auditions.woodwinds.p2 %}</li>
                      <li>{% t auditions.woodwinds.p3 %}</li>
                      <li>{% t auditions.woodwinds.p4 %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-5">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                      {% t auditions.brass.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-5">
                  <div class="card-body">
                    <ul>
                      <li>{% t auditions.brass.p1 %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-2">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      {% t auditions.percussionists.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-2">
                  <div class="card-body">
                    <p>{% t auditions.percussionists.p1 %}</p>
                    <p>{% t auditions.percussionists.p2 %}</p>
                    <p>{% t auditions.percussionists.p3 %}</p>
                    <h6>{% t auditions.percussionists.live.title %}</h6>
                    <ul>
                      <li>{% t auditions.percussionists.live.l1 %}</li>
                      <li>{% t auditions.percussionists.live.l2 %}</li>
                      <li>{% t auditions.percussionists.live.l3 %}</li>
                      <li>{% t auditions.percussionists.live.l4 %}</li>
                      <li>{% t auditions.percussionists.live.l5 %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-6">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                      {% t auditions.harp.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-6">
                  <div class="card-body">
                    <ul>
                      <li>{% t auditions.harp.value %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample-7">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                      {% t auditions.piano.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample-7">
                  <div class="card-body">
                    <ul>
                      <li>{% t auditions.piano.value %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br><h1>{% t auditions.results.title %}</h1>
            <p>{% t auditions.results.p %}</p>
            <br><h1>{% t auditions.membership.title %}</h1>
            <p>{% t auditions.membership.p1 %}</p>
            <p>{% t auditions.membership.p2 %}</p>
            <div><a href="/assets/pdf/Ottawa%20Pops%20Orchestra%20Musician%20Policy%20updated%20July%202019.pdf" target="_blank">Ottawa Pops Orchestra Musician Policy</a><br>
            <div><a href="/assets/pdf/Orchestral%20Development%20Bursary.pdf" target="_blank">Orchestral Development Bursary</a><br></div>
            <div  id="audition-reg" style="margin-top: 20px;" class="center">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecGvNIiQiXRxwq-qPYKx4-bCCHXNDZQYyxpMq1XmhVfCia3A/viewform?embedded=true" width="640" height="2520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
