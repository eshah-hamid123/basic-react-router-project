import NavBar from "./NavBar";
import './Contact.css'

function Contact() {
  return (
    <div>
      <NavBar
        brandName="The 11's"
        title1="Pricing"
        title2="Contact"
        title3="About Us"
      />
      <div className="container">
        <h1 className="text-center text-uppercase py-5 ">Contact Us</h1>
        <div className="mx-auto  contact-form-container shadow-none text-muted lh-2 rounded  p-4 ">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Contact Number
              </label>
              <input type="text" className="form-control" id="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" required />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="timing" className="form-label">
                when can we reach you?
              </label>
              <select className="form-select" id="timing">
                <option defaultValue="">Best Time to Reach </option>
                <option value="1">Morning </option>
                <option value="2">Evening</option>
                <option value="3">Afternoon</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">
                Enter your query below
              </label> 
              <textarea className="form-control" id="query" > </textarea>
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>  
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
