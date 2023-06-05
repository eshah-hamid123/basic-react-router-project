import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar
        brandName="The 11's"
        title1="Pricing"
        title2="Contact"
        title3="About Us"
      />
      <div className="container">
        <h1 className="text-center text-uppercase py-5 ">About Us</h1>
        <div className="shadow-none text-muted lh-2 rounded  p-4 ">
          <p>
            Welcome to The 11'z - a world where beauty, elegance, and timeless
            charm come together in the form of exquisite gemstones. We are
            passionate about curating and delivering the most exceptional
            gemstones that speak to the depths of your soul and elevate your
            style to new heights.
          
            At The 11'z, we believe that gemstones hold a captivating power that
            goes beyond their physical allure. Each gemstone is a unique
            masterpiece of nature, boasting its own colors, patterns, and
            energies. We strive to capture these captivating qualities and
            present them to you, allowing you to embrace their enchanting
            essence and unlock the extraordinary within.
          </p>
          <p>
            Our journey began with a vision to share the awe-inspiring world of
            gemstones with connoisseurs and seekers of beauty worldwide. With
            years of experience in the industry, our dedicated team of
            gemologists and designers meticulously handpick every gemstone,
            ensuring the highest standards of quality, authenticity, and
            brilliance
          
            We take pride in our diverse collection of gemstones, ranging from
            timeless classics to rare and sought-after treasures. Whether you're
            seeking the vibrant allure of rubies, the celestial charm of
            sapphires, the fiery brilliance of diamonds, or the mystical appeal
            of emeralds, our curated selection caters to all tastes and desires.
            Each gemstone in our collection has been carefully sourced from
            trusted suppliers and ethically mined, guaranteeing their
            authenticity and responsible origins.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
