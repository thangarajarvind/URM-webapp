import React from 'react'

const ServicesPage = () => {
  return (
    <article>
            <section className="indent">
                <p>In the UT System, we have some of the most remarkable learning environments. Our students have the opportunity to work in environments that blur the boundary between the world they learn in and the one they will help change.</p>
                <h3>COLLEGE PARK CENTER</h3>
                <p>The cutting-edge venue holds basketball and volleyball games, concerts, talks, commencements, and a variety of other high-profile events on a regular basis.</p>
                <h3>UTA FORT WORTH</h3>
                <p>The Santa Fe freight depot, a downtown Fort Worth transportation relic dating back to the Great Depression, houses our Fort Worth site.</p>
                <h3>MAVERICK ACTIVITIES CENTER</h3>
                <p>One of the most popular spots on campus, the MAC is a $34.5 million, 190,000-square-foot recreation facility.</p>
            </section>
            <aside className="a1">
                {/* Matching reports */}
                <aside>
                    <div>
                        <h1>Matching reports</h1>
                        <a target="_self" href="Matching.html">
                            <div className="card1">
                                <p><b>Professor</b> Courses: Data Mining <b>Candidate</b> Cand2</p>
                            </div>
                        </a>
                    </div>
                </aside>
                <aside>
                    {/* Notifications */}
                    <div>
                        <h1>Notifications</h1>
                        <p>No New Notifications</p>
                    </div>
                </aside>
            </aside>
        </article>
  )
}

export default ServicesPage;