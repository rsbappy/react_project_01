import React from "react";
class Home extends React.Component{
    render(){
        return(
        <div>
 
 
    
    {/* <!-- ======= Basis and BITM Logo ======= --> */}
 {/* <section id="logo" class="logo">
    <div class="container">

      <div class="logo text-center">
        <img src="https://bitm.org.bd/assets/frontend/images/bitm-logo.png" alt="">
        <img src="https://bitm.org.bd/assets/frontend/images/basis_logo.png" alt="" style="height: 50px; width:auto; margin-bottom:5px">
      </div>

    </div>
    </section> */}
    {/* <!-- End Basis and BITM Logo --> */}

  {/* <!-- ======= Header ======= --> */}
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex flex-column align-items-center">

      <h1>BITMPHP</h1>
      <h2>ComingSoon! We're working hard to improve our website and we'll ready to launch after</h2>
      <div class="countdown d-flex justify-content-center" data-count="2022/11/5">
        <div>
          <h3>%d</h3>
          <h4>Days</h4>
        </div>
        <div>
          <h3>%h</h3>
          <h4>Hours</h4>
        </div>
        <div>
          <h3>%m</h3>
          <h4>Minutes</h4>
        </div>
        <div>
          <h3>%s</h3>
          <h4>Seconds</h4>
        </div>
      </div>

      

      <div class="social-links text-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/BASIS.BITM" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
  {/* <!-- End #header --> */}

  <main id="main">

    {/* <!-- ======= About Us Section ======= --> */}
    <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6">
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Us Section --> */}

    {/* <!-- ======= Contact Us Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact Us</h2>
        </div>

        <div class="row justify-content-center">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>BDBL Bhaban (3rd Floor-East),<br/>12 Kawran Bazar, Dhaka-1215</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@bitm.org.bd</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+8809612342486</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Us Section --> */}

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>ComingSoon</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/ --> */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  {/* <!-- End #footer --> */}

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  {/* <!-- Vendor JS Files --> */}
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  {/* <!-- Template Main JS File --> */}
  <script src="assets/js/main.js"></script>










        </div>
        )
    }

}
export default Home;