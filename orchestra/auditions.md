---
layout: default
title: auditions
permalink: /auditions/
---

<div class="main auditions content container-fluid">
    <div class="parallax-auditions">
        <div class="row audition-row">
          <div class="col">
            <h1>{% t auditions.title %}</h1>
            <p style="font-size: large;font-weight: 700;border: 2px solid #920503;color: #920503;padding: 0.8em;border-radius: 25px;text-align: center;box-shadow: 10px 10px 8px grey;">{% t auditions.cancel.p1 %}</p>
            <p>{% t auditions.cancel.p2 %}</p>
            <ul>
              <li>{% t auditions.cancel.violin %}</li>
              <li>{% t auditions.cancel.viola %}</li>
              <li>{% t auditions.cancel.cello %}</li>
              <li>{% t auditions.cancel.doubleBass %}</li>
              <li>{% t auditions.cancel.auxClarinet %}</li>
              <li>{% t auditions.cancel.percussion %}</li>
            </ul>
            <p>{% t auditions.cancel.request_1 %} 
            <a href="mailto: auditions@ottawapopsorchestra.ca">   auditions@ottawapopsorchestra.ca </a> 
            {% t auditions.cancel.request_2 %}</p>
            <hr style="border: 1px solid #920503;">
            <!-- <p>{% t auditions.p1 %}</p>
            <div class="center">
              <a id="audition-reg-web" href="#audition-reg" class="btn-outline-maroon btn center">{% t auditions.regHere %}</a>
              <a id="audition-reg-mobile" href="https://docs.google.com/forms/d/e/1FAIpQLScdT5pkOrHJoy5CQCtg096rid4OGPWdKgW2d7QON5qAm8g5Gg/viewform?usp=sf_link" target="_blank" class="btn-outline-maroon btn center">{% t auditions.regHere %}</a> 
            </div> -->           
            <p>{% t auditions.p2 %}</p>
            <p>{% t auditions.p3 %}</p>
            <p>{% t auditions.p4 %}</p>
            
            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {% t auditions.percussionists.title %} <i class="fas fa-caret-down"></i>
                    </button>
                  </h6>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>{% t auditions.percussionists.p1 %}</p>
                    <p>{% t auditions.percussionists.p2 %}</p>
                    <p>{% t auditions.percussionists.p3 %}</p>

                    <h6>{% t auditions.percussionists.live %}</h6>
                    <ul>
                      <li>Deagan 1558 2.5 Octave Glockenspiel  </li>
                      <li>Musser 4.0 Octave Xylophone </li>
                      <li>Yamaha 4.3 Octave Acoustalon Marimba</li>
                      <li>Fibes 14x4 Maple Shell Single Ply with die cast rims</li>
                      <li>{% t auditions.percussionists.timp %}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 20px; width: 100%;" class="accordion" id="accordionExample2">
                  <div class="card">
                    <div class="card-header" id="headingOne-2">
                      <h6>
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne">
                          {% t auditions.master.title %} <i class="fas fa-caret-down"></i>
                        </button>
                      </h6>
                    </div>

                    <div id="collapseOne-2" class="collapse" aria-labelledby="headingOne-2" data-parent="#accordionExample2">
                      <div class="card-body">
                        <p>{% t auditions.master.p1 %}</p>

                        <h5><strong>{% t auditions.master.reqs.title %}</strong></h5>
                        <p>{% t auditions.master.reqs.p1 %}</p>

                        <div style="margin-left: 20px;">
                            <h5><strong>{% t auditions.master.reqs.scales.title %}</strong></h5>
                            <p>{% t auditions.master.reqs.scales.val %}</p>

                            <h5><strong>{% t auditions.master.reqs.excerpts.title %}</strong></h5>
                            <ul>
                              <li>{% t auditions.master.reqs.excerpts.val1 %}</li>
                              <li>{% t auditions.master.reqs.excerpts.val2 %}</li>
                            </ul>

                            <h5><strong>{% t auditions.master.reqs.pieces.title %}</strong></h5>
                            <p>{% t auditions.master.reqs.pieces.val %}</p>
                        </div>

                        <h5><strong>{% t auditions.master.comp.title %}</strong></h5>
                        <p>{% t auditions.master.comp.val %}</p>

                        <h5><strong>{% t auditions.master.details.title %}</strong></h5>
                        <p>{% t auditions.master.details.val %}</p>

                      </div>
                    </div>
                  </div>
                </div>

            <br><p>{% t auditions.p5 %}</p>
            <ul>
              <li><strong><em>{% t auditions.violin.title %}:</em></strong> {% t auditions.violin.value %}</li>
              <li><strong><em>{% t auditions.viola.title %}:</em></strong> {% t auditions.viola.value %}</li>
              <li><strong><em>{% t auditions.oboe.title %}:</em></strong> {% t auditions.oboe.value %}</li>
              <li><strong><em>{% t auditions.clarinet.title %}:</em></strong> {% t auditions.clarinet.value %}</li>
              <li><strong><em>{% t auditions.brass.title %}:</em></strong> {% t auditions.brass.value %}</li>
              <li><strong><em>{% t auditions.percussion.title %}:</em></strong> {% t auditions.percussion.value %}</li>
              <li><strong><em>{% t auditions.harp.title %}:</em></strong> {% t auditions.harp.value %}</li>
              <li><strong><em>{% t auditions.piano.title %}:</em></strong> {% t auditions.piano.value %}</li>
            </ul>

            <br><h1>{% t auditions.results.title %}</h1>
            <p>{% t auditions.results.p %}</p>

            <br><h1>{% t auditions.membership.title %}</h1>
            <p>{% t auditions.membership.p1 %}</p>
            <p>{% t auditions.membership.p2 %}</p>

            <div><a href="/assets/pdf/Ottawa%20Pops%20Orchestra%20Musician%20Policy%20updated%20July%202019.pdf" target="_blank">Ottawa Pops Orchestra Musician Policy</a><br>

            <div><a href="/assets/pdf/Orchestral%20Development%20Bursary.pdf" target="_blank">Orchestral Development Bursary</a><br></div>

            <!-- <div  id="audition-reg" style="margin-top: 20px;" class="center">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScdT5pkOrHJoy5CQCtg096rid4OGPWdKgW2d7QON5qAm8g5Gg/viewform?embedded=true" width="640" height="2520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div> -->

          </div>
        </div>
      </div>
    </div>
