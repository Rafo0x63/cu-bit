


class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="header transparent-header">
            <div class="container">
                <nav class="navbar navbar-toggleable-md navbar-inverse yamm" id="slide-nav">
                    <button style="border-radius: 3px;background: #f8f9fa;border-color: #7c7c7d !important;" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTopMenu" aria-controls="navbarTopMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="home.aspx">
                        <img src="images/logo-cubit-2.svg" width="170" alt="cu-bit" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarTopMenu">
                        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                            <li><a class="nav-link" href="home.aspx">Home</a></li>
                            <li><a class="nav-link" href="about.aspx">About</a></li>
                            <li><a class="nav-link" href="services.aspx">Services</a></li>
                            <li><a class="nav-link" href="careers.aspx">Careers</a></li>
                            <li><a class="nav-link" href="education.aspx">Education</a></li>
                            <li class="news"><a class="nav-link" href="news.aspx">News</a></li>
                            <li><a class="nav-link" href="contact.aspx">Contact</a></li>
                           
                        </ul>

                    </div>
                </nav>
            </div>
            <!--/.container inside nav-->
        </header>`
    }
}
customElements.define("my-header", MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="footer section z15">
            <div class="container">
                <div class="row col-md-12 text-center logo-center-footer">
                    <a href="home.aspx">
                        <img src="images/logo-cubit-white.svg" width="170" alt="cu-bit" />
                    </a>
                </div>
                <div class="row col-md-12 text-center">
                    <div class="col-md-4">
                        <div class="widget">

                            <h4 class="widget-title">About</h4>
                            <div class="about-widget">
                                <p><a href="about.aspx">CU-BIT</a></p>
                                <p><a href="contact.aspx">Contact</a></p>
                                <p><a href="services.aspx">Services</a></p>
                            </div>
                            <!-- end about-widget -->
                        </div>
                        <!-- end widget -->
                    </div>
                    <!-- end col -->

                    <div class="col-md-4">
                        <div class="widget">

                            <h4 class="widget-title">Contact
                            </h4>
                            <div class="about-widget">
                                <p>Crnković Usluge d.o.o.</p>
                                <p>
                                   Puškarićeva ulica 47a
                                    <br />
                                    10250 Zagreb, Croatia
                                </p>
                                <p> <a href="tel://+38598776000"> +385 98 77 60 00</a></p>
                                <p> <a href ="mailto:info@cu-bit.com?subject=Contact Web"/> info@cu-bit.com </a></p>
                            </div>
                            <!-- end about-widget -->
                        </div>
                        <!-- end widget -->
                    </div>
                    <!-- end col -->

                    <div class="col-md-4">
                        <div class="widget">

                            <h4 class="widget-title">Legal
                            </h4>
                            <div class="about-widget">
                                <p><a href="privacy.aspx">Privacy</a></p>
                            </div>
                            <div class="about-widget">
                                <p><a href="upload/CU-BIT - Code Of conduct.pdf">Code of conduct</a></p>
                            </div>
                            <div class="about-widget">
                                <p><a href="upload/Pravilnik_o_radu_Rev_25_04_2024.pdf">Work regulations document</a></p>
                            </div>
                            <!-- end about-widget -->
                        </div>
                        <!-- end widget -->
                    </div>
                    <!-- end col -->

                </div>
                <!-- end row -->
               
                </div>
                

                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="footer-social">
                            <div itemscope="" itemtype="">
                                <a class="social-icon" target="_blank" itemprop="sameAs" href="https://www.facebook.com/CUBITagency"><i class="fab fa-facebook-f"></i></a>
                                <a class="social-icon" target="_blank" itemprop="sameAs" href="https://www.linkedin.com/company/cubit-agency/"><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-icon" target="_blank" itemprop="sameAs" href ="mailto:info@cu-bit.com?subject=Contact Web"><i class="fas fa-envelope"></i></a>
                            </div>
                        </div>
                        <div class="footer-copy">
                            <p>
                                Copyright © 2022 Crnković Usluge d.o.o.
                            </p>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->            
        </footer>`;
    }
}
customElements.define("my-footer", MyFooter);

/* <li class="ui-widget ui-widget-pad">
                                <label for="tags"></label>
                                <input id="tags" placeholder="TRAŽI" class="text-center">
                                <i class="fa fa-search povecalo"></i>
                            </li>              TO JE NEKI SEARCH KOJEG SAM MAKNUL, AK BU TREBALO MOZEMO GA VRATITI*/

/*
 *  <li class="nav-item dropdown has-submenu">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Proizvodi</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                    <li><a class="dropdown-item" href="zebra-terminali.aspx">Lorem ipsum</a></li>
                                    <li><a class="dropdown-item" href="honeywell.aspx">Lorem ipsum</a></li>
                                    <li><a class="dropdown-item" href="Tableti.aspx">Lorem ipsum</a></li>
                                    <li><a class="dropdown-item" href="interaktivni-kiosci.aspx">Lorem ipsum</a></li>

                                    <li><a class="dropdown-item" href="pisaci-etiketa.aspx">Lorem ipsum <span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="pisaci-etiketa.aspx#stolni-pisac-etiketa">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="pisaci-etiketa.aspx#ind-pisac-etiketa">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="pisaci-etiketa.aspx#mobilni-pisaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="pisaci-etiketa.aspx#program-oprema-ispis">Lorem ipsum</a></li>

                                        </ul>
                                    </li>

                                    <li><a class="dropdown-item" href="citaci-bar-koda.aspx">Lorem ipsum<span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="citaci-bar-koda.aspx#rucni-kabelski-citaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="citaci-bar-koda.aspx#bezicni-citaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="citaci-bar-koda.aspx#stolni-citaci">Lorem ipsum</a></li>
                                        </ul>
                                    </li>

                                    <li><a class="dropdown-item" href="pisaci-id-kartica.aspx">Lorem ipsum<span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="pisaci-id-kartica.aspx#retransfer-pisaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="pisaci-id-kartica.aspx#id-kartice-citac">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="pisaci-id-kartica.aspx#id-kartice">Lorem ipsum</a></li>
                                        </ul>
                                    </li>

                                    <li><a class="dropdown-item" href="RFIDOprema.aspx">Lorem ipsum<span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#direct-transfer-pisaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#rfid-antene">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#rfid-citaci">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#rfid-tagovi">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#rfid-etikete">Lorem ipsum</a></li>
                                            <li><a class="dropdown-item" href="RFIDOprema.aspx#rfid-terminali">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <%--   <li><a class="dropdown-item" href="wifi-oprema.aspx">WiFi mrežna oprema<span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="wifi-oprema.aspx#wifi-kontroleri">WiFi kontroleri</a></li>
                                            <li><a class="dropdown-item" href="wifi-oprema.aspx#access-points">Access Points</a></li>
                                            <li><a class="dropdown-item" href="wifi-oprema.aspx#wifi-antene">Antene</a></li>
                                        </ul>
                                    </li>--%>

       <%--                             <li><a class="dropdown-item" href="etikete-riboni.aspx">Etikete i riboni <span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="etikete-riboni.aspx#etikete">Etikete</a></li>
                                            <li><a class="dropdown-item" href="etikete-riboni.aspx#riboni">Riboni</a></li>
                                        </ul>
                                    </li>

                                    <li><a class="dropdown-item" href="hotelska-oprema.aspx">Hotelska oprema<span class="hidden-md-down hidden-sm-down hidden-xs-down"><i class="fa fa-angle-right"></i></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="hotelska-oprema.aspx#hotelske-brave">Hotelske brave</a></li>
                                            <li><a class="dropdown-item" href="hotelska-oprema.aspx#hotelski-sefovi">Hotelski sefovi</a></li>
                                            <li><a class="dropdown-item" href="hotelska-oprema.aspx#mini-barovi">Minibarovi</a></li>
                                        </ul>
                                    </li>--%>

                                </ul>
                            </li>
                                                       DROPDOWN PROZIVODI MAKNUTI         */