import React from 'react';
import './Staff.css';

const staffMembers = [
  {
    name: 'Eddie',
    role: 'Master Barber',
    bio: 'Over 15 years of experience in classic and modern styles.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop'
  },
  {
    name: 'Lisa',
    role: 'Stylist',
    bio: 'Specializes in hair treatments and creative coloring.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop'
  },
  {
    name: 'Mike',
    role: 'Barber',
    bio: 'Expert in beard trims and hot shaves.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop'
  }
];

const Staff = () => (
  <div className="staff-page">
    <div className="container">
  <h1>Meet the ViVa Barbershop Team</h1>
      <div className="staff-grid">
        {staffMembers.map((member) => (
          <div key={member.name} className="staff-card card">
            <img src={member.image} alt={member.name} className="staff-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Staff;
