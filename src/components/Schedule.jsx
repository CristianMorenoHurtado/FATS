import React from 'react'

const Schedule = () => {
    return (
        <section id="schedule">
            <div className="container gym__hours--container">
                <h1 className="gym__hours">
                    GYM HOURS
                </h1>
                <div className="row schedule__row">
                    <div className="time__columns">
                        <h3 className="time schedule__text">
                            SCHEDULE
                        </h3>
                        <h3 className="time">
                            5:15AM
                        </h3>
                        <h3 className="time">
                            6:15AM
                        </h3>
                        <h3 className="time">
                            8:00AM
                        </h3>
                        <h3 className="time">
                            9:00AM
                        </h3>
                        <h3 className="time">
                            12:00PM
                        </h3>
                        <h3 className="time">
                            4:30PM
                        </h3>
                        <h3 className="time">
                            5:30PM
                        </h3>
                        <h3 className="time">
                            7:30PM
                        </h3>
                        <h3 className="time">
                            8:00PM
                        </h3>
                    </div>
                    <div className="schedule__classes--row">
                        <div className="weekdays__column">
                            <h3 className="day">
                                Monday
                            </h3>
                            <h3 className="day">
                                Tuesday
                            </h3>
                            <h3 className="day">
                                Wednesday
                            </h3>
                            <h3 className="day">
                                Thursday
                            </h3>
                            <h3 className="day">
                                Friday
                            </h3>
                            <h3 className="day">
                                Saturday
                            </h3>
                            <h3 className="day">
                                Sunday
                            </h3>
                        </div>
                        <div className="schedule__classes">
                            <div className="weekday">
                                <h3 className="class gym--open56">
                                    Class
                                </h3>
                                <h3 className="class gym--closed">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--open56">
                                    Class
                                </h3>
                                <h3 className="class gym--closed">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--start8am">
                                    Class
                                </h3>
                                <h3 className="class gym--closed8">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--start8am">
                                    Class
                                </h3>
                                <h3 className="class gym--closed8">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--open56">
                                    Class
                                </h3>
                                <h3 className="class gym--closed">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--open56">
                                    Class
                                </h3>
                                <h3 className="class gym--closed">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--open56">
                                    Class
                                </h3>
                                <h3 className="class gym--closed">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--open730pm">
                                    Advanced Competitive Class/Open Gym
                                </h3>
                                <h3 className="class gym--closed730pm">
                                    Closed
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3 className="class gym--closed8pm">
                                    Closed
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="gym__hours--mobile">
                    <h3 className="gym__hour--mobile">
                        Monday: 5:15AM - 8:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Tuesday: 5:15AM - 8:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Wednesday: 5:15AM - 8:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Thursday: 5:15AM - 8:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Friday: 5:15AM - 7:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Saturday: 8:00AM - 10:30AM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        Sunday: Closed
                    </h3>
                </div>
                <h1 className="gym__hours class__hours">
                    CLASS HOURS
                </h1>
                <div className="gym__hours--mobile">
                    <h3 className="gym__hour--mobile">
                        5:15AM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        6:15AM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        8:00AM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        9:00AM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        12:00PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        4:30PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        5:30PM
                    </h3>
                    <h3 className="gym__hour--mobile">
                        6:30PM (This class is not offered on Friday)
                    </h3>
                </div>
                <h4 className="gym__hours--exception">
                    *Friday: Closes at 7:00PM | 6:30PM (This class is not offered on Friday) | Saturday: Closes at 10:30AM
                </h4>
            </div>
        </section>

    )
}

export default Schedule
