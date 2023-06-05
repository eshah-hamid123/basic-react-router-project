import NavBar from "./NavBar";

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
        <h1 className="text-center text-uppercase py-5 ">About Us</h1>
        <div className="shadow-none text-muted lh-2 rounded  p-4 "></div>
      </div>
    </div>
  );
}

export default Contact;
