import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate');
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 3000);

    let map;

    if (mapRef.current) {
      map = L.map(mapRef.current).setView([55.57009, 13.00785], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([55.57009, 13.00785]).addTo(map);
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch('https://formspree.io/f/myyaojkk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setFormStatus('Email successfully sent');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setFormStatus(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm always open to new opportunities, collaborations, and
            interesting projects. Whether you're looking to build a web
            application, or just want to chat about
            tech, I'd love to hear from you.
          </p>
          <div className="contact-form">
            <div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required />
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
              {formStatus && <p>{formStatus}</p>}
            </div>
          </div>
        </div>
        <div className="info-map">
          Kelly Gashi,
          <br />
          Sweden,
          <br />
          Berguvsgatan 4A, 21559 <br />
          Malmö <br />
          <span>kellygashi00@gmail.com</span>
        </div>
        <div ref={mapRef} className="map-wrap"></div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
