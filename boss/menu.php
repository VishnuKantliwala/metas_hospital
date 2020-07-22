<? global $pageID; ?>
<div class="left-side-menu">

                <div class="slimscroll-menu">

                    <!-- User box -->
                    <div class="user-box text-center">
                        <!-- <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle img-thumbnail avatar-lg"> -->
                        <div class="">
                            <a href="#" class="text-dark h5 mt-2 mb-1 d-block" data-toggle="dropdown">
                            <?
                                echo $_SESSION['user'];
                            ?>
                            </a>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="logout.php" class="text-custom">
                                    <i class="mdi mdi-power text-danger"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">

                        <ul class="metismenu" id="side-menu">

                            <li class="menu-title">Navigation</li>

                            <li>
                                <a href="index.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Dashboard </span>
                                </a>
                            </li>

                            <li>
                                <a href="pageView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Information </span>
                                </a>
                            </li>
                            <li>
                                <a href="teamView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Administrative Body </span>
                                </a>
                            </li>
                            <li>
                                <a href="accreditation.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Accreditation </span>
                                    
                                </a>
                            </li>
                            <li>
                                <a >
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Initiatives </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="campView.php">  Health check up camps </a></li>
                                    <li><a href="programmeView.php"> Awareness Programme </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="doctorCatView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Doctor </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="doctorCatView.php"> Category </a></li>
                                    <li><a href="doctorView.php"> Doctors </a></li>
                                </ul>
                            </li>

                            <!-- <li>
                                <a >
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Awards </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="nurseawardsView.php"> Nurse Awards </a></li>
                                    <li><a href="doctorawardsView.php"> Doctor Awards </a></li>
                                </ul>
                            </li> -->

                            
                            
                            <li>
                                <a href="projectCatView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> OPD </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="opdCatView.php"> Category </a></li>
                                    <li><a href="opdView.php"> OPDs </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="international_patients.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> International Patients </span>
                                    
                                </a>
                            </li>

                            <li>
                                <a href="javascript:void(0)">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Health care </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="htalkView.php"> Health tallks </a></li>
                                    <li><a href="handwView.php">  Health and Wellness </a></li>
                                    <li><a href="rallyView.php">  Rally </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="serviceView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Centre of Excellence </span>
                                    
                                </a>
                            </li>

                            <li>
                                <a href="galleryCatView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Gallery </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="galleryCatView.php"> Category </a></li>
                                    <li><a href="galleryView.php"> Gallery </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="videoView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Videos </span>                                    
                                </a>
                            </li>

                            <li>
                                <a href="javascript:void(0)">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Academics & research </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="courseView.php"> Courses </a></li>
                                    <li><a href="workshopView.php"> Workshops </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="projectCatView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Project </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="projectCatView.php"> Category </a></li>
                                    <li><a href="projectView.php"> Project </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript:void(0)">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Blogs </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="blogView.php"> News </a></li>
                                    <li><a href="eventView.php"> Events </a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="openingsView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Openings </span>
                                    
                                </a>
                            </li>


                            
                            

                            <!-- <li>
                                <a href="health_talk.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Health talk </span>
                                    
                                </a>
                            </li> -->

                            <li>
                                <a href="testimonialView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Testimonial </span>
                                </a>
                            </li>

                            <li>
                                <a href="contactView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Contact </span>
                                </a>
                            </li>

                            <li>
                                <a href="logoView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Logo </span>
                                </a>
                            </li>                            

                            <li>
                                <a href="video2.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span>Home Video </span>
                                </a>
                            </li>

                            <li>
                                <a href="faviconView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Favicon </span>
                                </a>
                            </li>


                            <li>
                                <a href="socialView.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Socialmedia </span>
                                </a>
                            </li>

                            <li>
                                <a href="changepass.php">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span> Change Password </span>
                                </a>
                            </li>
                            
                            <li>
                                <a href="logout.php">
                                    <i class="fas fa-door-open"></i>
                                    <span> Log-out </span>
                                </a>
                            </li>
                            
                        </ul>


                    </div>
                    <!-- End Sidebar -->

                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>