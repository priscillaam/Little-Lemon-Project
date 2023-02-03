import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';

export default function ReservationForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preference, setPreference] = useState("");
  const [comment, setComment] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <>
    <form className="reservation-form">
      <div style={{float: 'left'}}>
        <label htmlFor="firstName">First Name</label> <br></br>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>

      <div style={{float: 'right'}}>
        <label htmlFor="lastName">Last Name</label> <br></br>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>

      <div style={{float: 'left'}}>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div style={{float: 'right'}}>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="phone"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={phone}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </div>

      <div style={{float: 'left'}}>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div style={{float: 'right', border:'solid 1px', borderColor: '#ee9972'}}>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div style={{marginLeft: '150px'}}>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      <div style={{border: 'solid 1px', borderColor: '#ee9972',
        marginLeft: '213px',
        display: 'fixed'}}>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div style={{marginTop: '-46px'}}>
        <label htmlFor="preference">Seating preference</label><br></br>
        <select
          id="preference"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor</option>
        </select>
      </div>

      <div style={{marginTop: '20px'}}>
        <label htmlFor="comment">Additional Comments</label> <br></br>
        <textarea
          id="comment"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <div style={{textAlign: 'center'}}>
          <Link className="action-button" to="/confirmation">
            Book Table
          </Link>
        </div>
      </div>
    </form>
    <div style={{gridColumn: '1/-1', gridRow: '3/4'}}></div>
    </>
  );
}