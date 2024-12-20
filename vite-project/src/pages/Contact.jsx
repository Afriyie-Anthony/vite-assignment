import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <Header
        title="Contact Me"
        subTitle="Have questions? I have answers."
        bgImage="contact-bg.jpg"
      />

      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Fill out the htmlForm below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                <htmlForm id="contacthtmlForm" data-sb-htmlForm-api-token="API_TOKEN">
                  <div className="htmlForm-floating">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label htmlFor="name">Name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Enter your email..."
                      data-sb-validations="required,email"
                    />
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number..."
                      data-sb-validations="required"
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your message here..."
                      style={{ height: "12rem" }}
                      data-sb-validations="required"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <br />
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        htmlForm submission successful!
                      </div>
                      To activate this htmlForm, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-htmlForms">
                        https://startbootstrap.com/solution/contact-htmlForms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Send
                  </button>
                </htmlForm>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
