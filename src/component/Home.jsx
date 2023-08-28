import React,{useState} from "react";
import Styles from "./Home.module.css";
import { FaMobileAlt } from "react-icons/fa";
import { PiSquareSplitVerticalLight } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { BsGlobe2 } from "react-icons/bs";
import { PiLinkSimpleHorizontal } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { RiHandbagLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { AiOutlineLink } from "react-icons/Ai";
import { GoSearch } from "react-icons/go";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
import ModalContent from '../pages/ModalContent';
import { FiEdit } from "react-icons/fi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";
import { IoReorderThree } from 'react-icons/io5';
import MobileNav from '../pages/MobileNav/MobileNav'
import { useLocation } from "react-router-dom";


const Home = ({assessmentData}) => {
  const [assessments, setAssessments] = useState([]);
  const [showNewCard, setShowNewCard] = useState(null);
 const location=useLocation();
 const receivedData=location.state

  console.log(assessments);
   const handleSaveAssessment = (newCardData) => {
    setAssessments([...assessments, newCardData]);
    setShowNewCard(true);
  };

  console.log("dataaa",assessments);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSave = (assessmentData) => {
    console.log("Assessment data saved:", assessmentData);
  };
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const handleCloseClick = () => {
    setActive(false);
  };
  return (
    
    <>
      <main className={Styles.main}>
        <section className={Styles.left}>
          <div id={Styles.sidebarparent}>
            <div>
              <TbArticle className={Styles.dashboardfirst1} />
            </div>
            <p className={Styles.dashboardfirst}>Dashboard</p>
          </div>

          <div id={Styles.sidebarparentMain}>
            <div>
              <FiEdit className={Styles.dashboardfirst1MainTask} />
            </div>
            <p className={Styles.dashboardfirst}>Assessment</p>
          </div>

          <div id={Styles.sidebarparent}>
            <div>
              <MdOutlineLibraryAddCheck className={Styles.dashboardfirst1} />
            </div>
            <p className={Styles.dashboardfirst}>My Library</p>
          </div>

          <div id={Styles.sidebarparent}>
          <label className={Styles.labelAdmin}>Admin</label><br />
            <div>
              <PiLinkSimpleFill className={Styles.dashboardfirstinnerclass} />
            </div>
            <p className={Styles.dashboardfirst}>Round Status</p>
          </div>
        </section>

        {/* Nav Overview start  */}

        <section className={Styles.right}>
          <div className={Styles.header}>
             {/* mobile navbar */}
             <div className={Styles.menuIconMobile} onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          <IoReorderThree />
        </div>
        {active && <MobileNav onClose={handleCloseClick} />}

        
            <div className={Styles.myAsses}>
              <p className={Styles.partinner1}>Assessment</p>

              <p className={Styles.partinner2}>My Assessments</p>
            </div>
            <div className={Styles.mobileIcon}>
              <FaMobileAlt style={{ width: "2em" }} />
            </div>
            <div className={Styles.mobileIcon2}>
              <MdComputer style={{ width: "2em" }} />
            </div>
        
          </div>
          {/* Nav Overview Ends  */}

          {/* Assisment starts  */}
          <div className={Styles.Assessments}>
            <p className={Styles.Overviewflex}>Assessments Overview</p>
            <div className={Styles.inneroverview}>
              <div
                style={{ flex: "0 0 12vw" }}
                className={Styles.innerflexflow1}
              >
                <p className={Styles.pre1}>Total Assessment</p>
                <div className={Styles.preInner}>
                <div className={Styles.totalflexWrapper}>
                  <PiSquareSplitVerticalLight
                    style={{ width: "1em" }}
                    className={Styles.Total1}
                  />
                  </div>
                  <p className={Styles.Total2}>34</p>
                </div>
              </div>
              <div
                style={{ flex: "0 0 28vw" }}
                className={Styles.innerflexflow2}
              >
                <p className={Styles.pre1}>Candidates</p>
                <div className={Styles.preInner}>
                <div className={Styles.totalflexWrapper}>
                  <HiUsers style={{ width: "1em" }} className={Styles.Total1} />
                  </div>
                  <div>
                    <p className={Styles.Total2}>
                      11,145 <span className={Styles.greentext}>+89</span>
                    </p>
                    <p className={Styles.cand1}>Total Candidate</p>
                  </div>
                  <div>
                    <p className={Styles.Total2}>
                      1,14 <span className={Styles.greentext}>+89</span>
                    </p>
                    <p className={Styles.cand1}>Who Attamped</p>
                  </div>
                </div>
              </div>



              <div
                style={{ flex: "0 0 28vw" }}
                className={Styles.innerflexflow3}
              >
                <p className={Styles.pre1}>Candidates Source</p>
                <div className={Styles.preInner}>
                <div className={Styles.totalflexWrapper2}>
                  <BsGlobe2
                    style={{
                      width: "1em",
                      color: "red",
                      background: "#bbb",
                      width: "3vw",
                    }}
                    className={Styles.Totalwrapper3}
                  />
                   </div>
                  <div>
                    <p className={Styles.Total2}>
                      11,000 <span className={Styles.greentext}>+89</span>
                    </p>
                    <p className={Styles.cand1}>E-mail</p>
                  </div>
                  <div>
                    <p className={Styles.Total2}>
                      145 <span className={Styles.greentext}>+89</span>
                    </p>
                    <p className={Styles.cand1}>Social Share</p>
                  </div>
                  <div>
                    <p className={Styles.Total2}>
                      145 <span className={Styles.greentext}>+89</span>
                    </p>
                    <p className={Styles.cand1}>Unique Link</p>
                  </div>
                </div>
              </div>
              
              <div
                style={{ flex: "0 0 12vw" }}
                className={Styles.innerflexflow4}
              >
                <p className={Styles.pre1}>Total Purpose</p>
                <div className={Styles.preInner}>
                <div className={Styles.totalflexWrapper}>
                <PiLinkSimpleHorizontal
                    style={{ width: "1em" }}
                    className={Styles.Total1}
                  />
                </div>
                
                  <p className={Styles.Total2}>11</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assisment Overview ends */}

          {/* My Assessment section start  */}

          <article className={Styles.cardSection}>
            <div className={Styles.parenthead1}>
              <p className={Styles.myInnerAssessment}>My Assessment</p>
              <p className={Styles.myInnerAssessmentMobile}>
                Unstop Assessments
              </p>
            </div>
            {/* only mobileScreen nav */}
            <section id={Styles.iconflexitem}>
              <div className={Styles.assesmentproitem}>
                <p className={Styles.mobileAssesmentitem}>My Assessment</p>
              </div>
              <div className={Styles.iconproitem}>
                <GoSearch />
                <FaFilter />
                <BiSolidBarChartAlt2 />
              </div>
            </section>

            <div className={Styles.innerCardMain}>
              <div className={Styles.cardflex}>
                <div id={Styles.circleAdd}>
                  <span className={Styles.Add} onClick={handleButtonClick}>+</span>
                  <div className={`${Styles.modal} ${isModalOpen ? Styles.open : ''}`} >
                <ModalContent closeModal={closeModal} onSave={handleSaveAssessment} />

               </div>
                </div>
                <div id={Styles.grapGrid}>
                  <p className={Styles.new1}>New Assessment</p>
                  <p className={Styles.new2}>
                    From here you can add questions of multiple types like MCQs,
                    subjective (text or paragraph)!
                  </p>
                </div>
              </div>
              <div className={Styles.cardflex1}>
                <div className={Styles.A}>
                  <div className={Styles.left1}>
                    <div className={Styles.firstpart2}>
                      <RiHandbagLine className={Styles.bagInner} />
                    </div>
                    <div className={Styles.firstpartgrid}>
                      <p className={Styles.newMath}>Math Assessment</p>
                      <div className={Styles.jobGrid}>
                        <p className={Styles.typoDate}>Job</p>
                        <MdCalendarMonth className={Styles.typoDatee} />
                        <p className={Styles.typoDate1}> 20 Apr 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.right1}>
                    <BsThreeDotsVertical className={Styles.threeDots1} />
                  </div>
                </div>
                <div className={Styles.B}>
                  <div className={Styles.durationFlexGridPArent}>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Duration</p>
                    </div>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Questions</p>
                    </div>
                  </div>
                  <div className={Styles.durationFlexGrid1}>
                    <div className={Styles.durationFlex1}>
                      <button className={Styles.linkbtnhexa}>
                        <AiOutlineLink />
                        <p>Share</p>
                      </button>
                    </div>
                    <div className={Styles.sharepoint}>
                      <p className={Styles.lpGrid}>LP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.cardflex1}>
                <div className={Styles.A}>
                  <div className={Styles.left1}>
                    <div className={Styles.firstpart2}>
                      <RiHandbagLine className={Styles.bagInner} />
                    </div>
                    <div className={Styles.firstpartgrid}>
                      <p className={Styles.newMath}>Math Assessment</p>
                      <div className={Styles.jobGrid}>
                        <p className={Styles.typoDate}>Job</p>
                        <MdCalendarMonth className={Styles.typoDatee} />
                        <p className={Styles.typoDate1}> 20 Apr 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.right1}>
                    <BsThreeDotsVertical className={Styles.threeDots1} />
                  </div>
                </div>
                <div className={Styles.B}>
                  <div className={Styles.durationFlexGrid}>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Duration</p>
                    </div>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Questions</p>
                    </div>
                  </div>
                  <div className={Styles.durationFlexGrid1A}>
                    <div className={Styles.durationFlex1}>
                      <button className={Styles.linkbtnhexa}>
                        <AiOutlineLink />
                        <p>Share</p>
                      </button>
                    </div>
                    <div className={Styles.sharepoint}>
                      <p className={Styles.lpGrid}>L</p>
                      <p className={Styles.lpGrid2}>L</p>
                      <p className={Styles.lpGrid3}>LP</p>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className={Styles.cardflexDynamic}>
              
              {assessments?.map((assessment, index) => (
        <div key={index} className={Styles.cardflex1dynamic}>
          <div className={`${Styles.A} ${showNewCard ? Styles.visibleCard : ''}`}>
            <div className={Styles.left1}>
              <div className={Styles.firstpart2}>
                <RiHandbagLine className={Styles.bagInner} />
              </div>
              <div className={Styles.firstpartgrid}>
                <p className={Styles.newMath}>Math Assessment</p>
                <div className={Styles.jobGrid}>
                  <p className={Styles.typoDate}>job</p>
                  <MdCalendarMonth className={Styles.typoDatee} />
                  <p className={Styles.typoDate1}> 20 Apr 2023</p>
                </div>
              </div>
            </div>
            <div className={Styles.right1}>
              <BsThreeDotsVertical className={Styles.threeDots1} />
            </div>
          </div>
          <div className={Styles.B}>
                  <div className={Styles.durationFlexGridPArent}>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Duration</p>
                    </div>
                    <div>
                      <p className={Styles.durationflex}>00</p>
                      <p className={Styles.durationflex}>Questions</p>
                    </div>
                  </div>
                  <div className={Styles.durationFlexGrid1}>
                    <div className={Styles.durationFlex1}>
                      <button className={Styles.linkbtnhexa}>
                        <AiOutlineLink />
                        <p>Share</p>
                      </button>
                    </div>
                    <div className={Styles.sharepoint}>
                      <p className={Styles.lpGrid}>LP</p>
                    </div>
                  </div>
                </div>
        </div>
      ))}
      </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
