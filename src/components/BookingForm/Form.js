import React, { useState} from "react";
import styled from 'styled-components';

export const Form = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        numDiners: '',
        occasion: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
  });
      const [formErrors, setFormErrors] = useState({});
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
          alert("Reservation confirmed!");
          setFormData({
            date: "",
            time: "",
            numDiners: "",
            occasion: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          });
          setFormErrors({});
        }
      };
    
      const validateForm = (data) => {
        const errors = {};
        if (!data.date) {
          errors.date = 'Date is required';
        }
        if (!data.time) {
          errors.time = 'Time is required';
        }
        if (!data.numDiners) {
          errors.numDiners = 'Number of diners is required';
        } else if (isNaN(data.numDiners)) {
          errors.numDiners = 'Number of diners must be a number';
        }
        if (!data.occasion) {
          errors.occasion = 'Occasion is required';
        }
        if (!data.firstName) {
            errors.firstName = 'First name is required';
          }
          if (!data.lastName) {
            errors.lastName = 'Last name is required';
          }
          if (!data.email) {
            errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email format';
          }
          if (!data.phone) {
            errors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Phone number must be 10 digits';
          }
        return errors;
      };
    
      return (
            <>
        <form onSubmit={handleSubmit}>
            <Wrapper>
        <Left>
          <div>
            <label htmlFor="date">Date:</label><br/>
            {formErrors.date && <span>{formErrors.date}</span>}
            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="time">Time:</label><br/>
            {formErrors.time && <span>{formErrors.time}</span>}
            <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="numDiners">Number of diners:</label><br/>
            {formErrors.numDiners && <span>{formErrors.numDiners}</span>}
            <input type="text" id="numDiners" name="numDiners" value={formData.numDiners} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="occasion">Occasion:</label><br/>
            {formErrors.occasion && <span>{formErrors.occasion}</span>}
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
              <option value=""></option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business meeting">Business meeting</option>
              <option value="Other">Other</option>
            </select>
          </div>
          </Left>
          <Right>
          <div>
            <label htmlFor="firstName">First name:</label><br/>
            {formErrors.firstName && <span>{formErrors.firstName}</span>}
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label><br/>
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label><br/>
            {formErrors.email && <span>{formErrors.email}</span>}
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label><br/>
            {formErrors.phone && <span>{formErrors.phone}</span>}
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <Button>
            <button type="submit">Submit</button>
          </Button>
          </Right>
          </Wrapper>
        </form>
        </>
      );
    };
export default Form;

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    height: calc(100vh - 360px); /* subtract 100px for any header or footer elements */
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const FormStyle = styled.div`
    width: 50%;
    margin: 50px auto;
    line-height: .8em;
    select, input {
        width: 100%;
    }
    span {
        color: red;
        font-size: .5em;
        line-height: 0;
    }
    input[type=text]:focus {
        border: 3px solid #555;
    }
    div {
        padding: 5px;
    }
`
const Button = styled.div`
    button{
        background: var(--secondary);
        color: var(--tertiary);
        border: #f4ce14;
        padding: 8px 12px;
        border-radius: 6px;
        display: inline-block;
        font-family: 'Karla';
        font-size: .6em;
        font-weight: 600;
        margin: 30px auto;
    }
`
const Left = styled(FormStyle)`
`
const Right = styled(FormStyle, Button)`
`