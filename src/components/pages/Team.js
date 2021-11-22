import React from 'react';
import './Team.css';

function Team() {
  return (
    <div class="container bootdey">
        <div class="row">
            <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                    <h4 class="title mb-4">meet Our Team</h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div class="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                    <div class="content mt-3">
                        <h4 class="title mb-0">Lisa Martin</h4>
                        <small class="text-muted">Founder</small>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div class="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                    <div class="content mt-3">
                        <h4 class="title mb-0">Calvin Carlo</h4>
                        <small class="text-muted">C.E.O.</small>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div class="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                    <div class="content mt-3">
                        <h4 class="title mb-0">Richha Jotchi</h4>
                        <small class="text-muted">Manager</small>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div class="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                    <div class="content mt-3">
                        <h4 class="title mb-0">Cristino Murfy</h4>
                        <small class="text-muted">Accountant</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Team;