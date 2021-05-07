import classes from './MeetupDetail.module.css'

export default function MeetupDetail(props) {
    return (<section className={classes.detail}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' alt='A First Meetup'/>
        <h1>A First Meetup</h1>
        <address>Some Street 5, Some City</address>
        <p>The meetup description</p>
    </section>)
}