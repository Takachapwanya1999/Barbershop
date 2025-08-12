import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const SERVICES = ['Classic Haircut', 'Beard Trim', 'Hot Shave', 'Hair Treatment'];
const STAFF = ['Eddie', 'Lisa', 'Mike'];

const useQuery = () => new URLSearchParams(useLocation().search);

const Booking = () => {
  const query = useQuery();
  const preselected = query.get('service');
  const initialService = useMemo(() => (SERVICES.includes(preselected) ? preselected : SERVICES[0]), [preselected]);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: initialService,
    staff: STAFF[0],
    date: '',
    time: '',
    deposit: false
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="container">
          <h1>Booking Confirmed</h1>
          <p>Thank you, {form.name}! Your {form.service} with {form.staff} is set for {form.date} at {form.time}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="container">
        <h1>Book Appointment</h1>
  <form className="booking-form" onSubmit={onSubmit} aria-label="Booking Form">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={form.phone} onChange={onChange} required />

          <label htmlFor="service">Service</label>
          <select id="service" name="service" value={form.service} onChange={onChange}>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <label htmlFor="staff">Preferred Staff</label>
          <select id="staff" name="staff" value={form.staff} onChange={onChange}>
            {STAFF.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={form.date} onChange={onChange} required />

          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" value={form.time} onChange={onChange} required />

          <fieldset className="deposit" aria-label="Deposit policy">
            <legend>Hold with a small deposit (optional)</legend>
            <label className="switch">
              <input type="checkbox" name="deposit" checked={form.deposit} onChange={(e)=>setForm({...form, deposit: e.target.checked})} />
              <span>Pay a small deposit now to secure your slot</span>
            </label>
            <p className="policy">We operate a fair cancellation/no‑show policy. Deposits are credited to your service and refundable with 12h notice.</p>
          </fieldset>

          <button className="btn btn-primary" type="submit">Confirm Booking{form.deposit ? ' + Deposit' : ''}</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
