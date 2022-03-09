import React from 'react';

function Wedding() {
    return (
        <div className="wedding">
            <h3>When & Where</h3>
            <div className="wedbottom">
                <div>
                    <h4>Getting there</h4>
                    <i className="fas fa-bus fa-4x"></i>
                    <p>Parking available at venue</p>
                    <p>Shuttle bus service from FakeCity</p>
                    <p>18th July 2022</p>
                </div>
                <div>
                    <h4>Ceremony & Reception</h4>
                    <i className="fas fa-bell fa-4x"></i>
                    <p>Le Belvedere</p>
                    <p>40 Des Sentiers, Wakefield, QC</p>
                    <p>4th August 2022</p>
                </div>
                <div>
                    <h4>Day 2 Celebration</h4>
                    <i className="fas fa-glass-cheers fa-4x"></i>
                    <p>TBD (Will be in FakeCity!)</p>
                    <p>19th July 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Wedding;

