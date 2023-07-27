import React, { useState } from "react";
//v import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../pages/style/Contact.css";
import $ from 'jquery'; 

const Contact = () => {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit_btn').addEventListener('click', function () {
      var proceed = true;
      var formInputs = document.querySelectorAll('#contact_form input[required=true], #contact_form textarea[required=true]');

      formInputs.forEach(function (input) {
        input.style.borderColor = '';
        if (!input.value.trim()) {
          input.style.borderColor = 'red';
          proceed = false;
        }

        if (input.type === 'email') {
          var emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          if (!emailRegExp.test(input.value.trim())) {
            input.style.borderColor = 'red';
            proceed = false;
          }
        }
      });

      if (proceed) {
        var post_data = {
          'user_name': document.querySelector('input[name=name]').value,
          'user_email': document.querySelector('input[name=email]').value,
          'phone_number': document.querySelector('input[name=phone2]').value,
          'msg': document.querySelector('textarea[name=message]').value
        };

        // Simulating the Ajax post data to server using setTimeout
        setTimeout(function () {
          // Assuming the response object has properties 'type' and 'text' as given in the original code.
          var response = { type: 'success', text: 'Message sent successfully!' };
          var output;

          if (response.type === 'error') {
            output = '<div class="error">' + response.text + '</div>';
          } else {
            output = '<div class="success">' + response.text + '</div>';
            formInputs.forEach(function (input) {
              input.value = '';
            });
            document.getElementById('contact_body').style.display = 'none';
          }

          document.getElementById('contact_results').style.display = 'block';
          document.getElementById('contact_results').innerHTML = output;
        }, 500);
      }
    });

    var formInputs = document.querySelectorAll('#contact_form input[required=true], #contact_form textarea[required=true]');
    formInputs.forEach(function (input) {
      input.addEventListener('keyup', function () {
        input.style.borderColor = '';
        document.getElementById('contact_results').style.display = 'none';
      });
    });
  });
  
  return (
    <div class="contact container shadow" id="contact_form">
  <div class="contact row header">
    <h2>CONTACT US</h2>
    <h3>Request information, book a studio, or plan your event!</h3>
    <div id="contact_results"></div>
  </div>
  <div class="contact row body" id="contact_body">
    <div class="contact-elements">
    <form id="contact_form">
    <ul>
        <li>
          <p class="left">
            <label for="name">name</label>
            <input type="text" name="name" id="name" required="required" class="input-field" placeholder="Jane Doe" />
          </p>
          <p class="pull-right">
            <label for="phone2">phone</label>
            <input type="text" name="phone2" maxlength="15" class="tel-number-field long" placeholder="123 456 7890" />
          </p>
        </li>
        <div class="center-btn">
          <li>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" required="required" class="input-field" placeholder="jane.doe@gmail.com" />
          </li>
        </div>

        <li>
          <div class="contact divider"></div>
        </li>
        <li>
          <label for="message">enquiry</label>
          <textarea cols="46" rows="8" name="message" id="message" class="textarea-field" required="required"></textarea>
        </li>
      </ul>
      <button type="button" id="submit_btn">Submit</button>
    </form>
      
    </div>
  </div>
</div>
    );
  };
  export default Contact;