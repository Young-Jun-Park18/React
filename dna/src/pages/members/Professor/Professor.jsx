import styles from "./Professor.module.css";
import { useState, useEffect, useRef } from 'react';

function Professor(){
  return(
    <>
      <div className= {styles.professorWrap}>
        <div className= {styles.professorBox}>
          <div className= {styles.professorTitle}>
            <h2>Professor</h2>
            <div className= {styles.professorLine1}></div>
            <div className= {styles.professorLine2}></div>
            <div className={styles.professorIntroWrap}>
              <div className={styles.professorPhoto}>
                <img src="/profH.jpg" alt="박현희 교수님 사진" />
              </div>
              <div className={styles.professorIntro}>

                {/* Group Leader 박스 */}
                <div className={styles.name}>
                  <h1><span>Group</span> Leader: Prof. Hyunhee Park</h1>
                  <br></br>
                  <div className={styles.scrollBox}>
                    <ul>
                      <li><span>Office</span>: 5502 Engineering College5</li>
                      <li><span>Email</span>: hhpark@mju.ac.kr</li>
                      <li><span>Call</span>: 031-330-6766</li>
                      <li><a href="https://scholar.google.com/citations?user=ndWaTncAAAAJ&hl=en">[Link] Google Scholar</a></li>
                      <li><a href="https://sites.google.com/site/hyunheepark97/resume">[Link] Introduce</a><br></br></li>
                    </ul>
                  </div>
                </div>

                {/* Professional Experience 박스 */}
                <div className={styles.name2}>
                  <br></br>
                  <h1><span>Professional</span> Experience</h1><br></br>
                  <div className={styles.scrollBox2} data-lenis-prevent>
                    <ul>
                      <li>TTA ICT International Standardization Expert (2023 - Current)</li>
                      <li>Executive Director, Korean Institute of Communications and Information Sciences[KICS] (2023 - Current)</li>
                      <li>President, Communication Networks Society, Korean Institute of Communications and Information Sciences (2024)</li>
                      <li>Myongji University / Associate Professor (2020.03 ~ Current)<br></br>
                      <p>Department of Information and Communication</p></li>
                      <li>Korean Bible University / Assistant Professor (2017.03 ~ 2020.02)<br></br>
                      <p>Department of Computer Software</p></li>
                      <li>LG Electronics / Senior Research Engineer (2014.10 ~ 2017.02 / Work scope: Wi-Fi Standardization - IEEE 802.11ax, 11ba (Wake Up Radio), etc.)<br></br>
                      <p>Internet of Things (IoT) Team / IEEE 802.11ax 표준화 그룹 멤버, IEEE 802.11ba(WUR) 표준화 그룹 멤버 / Seocho R&D Campus (CTO Division/Advanced Standard R&D Lab.), Seoul KOREA</p></li>
                      <li>INRIA / Postdoctoral researcher, France (2013.01 ~ 2014.10)<br></br>
                      <p> Institut National de Recherche en Informatique et en Automatique
                        French Institute for Research in Computer, 2 rue de la Châtaigneraie 35576 Cesson Sévigné Cedex, FRANCE		
                        DIONYSOS (Team of Dependability, Interoperability and Performance Analysis of Networks) Research Group
                        Télécom Bretagne / Postdoctoral researcher, France (Grande École d'ingénieur et un centre de recherche international en sciences et technologies de l'information) Institut Mines-Télécom (Dépt. Réseaux, Sécurité et Multimédia)</p></li>
                      <li>Korea University / Research professor/Postdoctoral fellow, South Korea (2011.09 ~ 2013.01)<br></br></li>
                      <li>Korea University, Ph. D. School of Electrical Engineering / under supervisor Prof. Chul-Hee Kang and Prof. Sangheon Pack, (2011.08)<br></br></li>
                    </ul>
                  </div>
                </div>

                {/* IEEE 표준화 기고 박스 */}
                <div className={styles.name2}>
                  <br></br>
                  <h1><span>IEEE</span> 802.11 표준화 기고</h1><br></br>
                  <div className={styles.scrollBox2} data-lenis-prevent>
                    <ul>
                      <li>Overall MAC Procedure for WUR, doc.: IEEE 802.11-16/1445r1, 08 Nov 2016.</li>
                      <li>SR Backoff Procedure, doc.: IEEE 802.11-16/1403r1, 07 Nov 2016.</li>
                      <li>Early TWT SP Termination in TWT Operation, doc.: IEEE 802.11-16/1404r1, 07 Nov 2016.</li>
                      <li>Spec text for section 25.4 Block Acknowledgement, doc.: IEEE 802.11-16/1442r0, 06 Nov 2016.</li>
                      <li>11ax PAR Verification through OFDMA, doc.: IEEE 802.11-16/1363r0, 01 Nov 2016.</li>
                      <li>Comment resolution on OFDMA Random access procedure, doc.:IEEE 802.11-16/1158r3, 15 Sept 2016.</li>
                      <li>Operating Mode Indication - PART Ⅱ Tx OMI (TOMI), doc.: IEEE 802.11-16/0882r3, 14 Sept 2016.</li>
                      <li>Operating Mode Indication - PART Ⅰ Rx OMI (ROMI), doc.: IEEE 802.11-16/0881r2, 13 Sept 2016.</li>
                      <li>MAC General - Misc. (CID 152), doc.: IEEE 802.11-16-0883r1, 12 Sept 2016.</li>
                      <li>Comment resolution section 9.3 TWT, doc.: IEEE 802.11-16/0869r2, 09 Sept 2016.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-16/1095r10, 10 Sept 2016.</li>
                      <li>UL MU Transmission Rules - EDCA Backoff, doc.: IEEE 802.11-16/0880r2, 26 Jul 2016.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-16/1095r9, 25 Jul 2016.</li>
                      <li>HE variant HT control -buffer status report, doc.: IEEE 802.11-16/0806r0, 28 Jun 2016.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-16/1095r7, 31 May 2016.</li>
                      <li>TXOP Duration field in HE-SIG A, doc.: IEEE 802.11-16/0636r2, 17 May 2016.</li>
                      <li>Buffer Status Report in HE Control field, doc.: IEEE 802.11-16/0628r1, 16 May 2016.</li>
                      <li>ROM Recovery Rules, doc.: IEEE 802.11-16/0627r1, 16 May 2016.</li>
                      <li>Ack Policy of UL MU frame, doc.: IEEE 802.11-16/0361r0, 13 May 2016.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-16/1095r6, 11 Mar 2016.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-16/1095r5, 17 Jan 2016.</li>
                      <li>Indication for UL MU Carrier Sensing, doc.: IEEE 802.11-16/0057r0, 17 Jan 2016.</li>
                      <li>Ack policy for UL MU Ack transmission, doc.: IEEE 802.11-15/1346r2, 10 Nov 2015.</li>
                      <li>Trigger type specific information, doc.: IEEE 802.11-15/1345r1, 08 Nov 2015.</li>
                      <li>OFDMA performance in 11ax, doc.: IEEE 802.11-15/1095r3, 08 Nov 2015.</li>
                      <li>A method of transmitting Multi-STA Block ACK, doc.: IEEE 802.11-15/1330r0, 07 Nov 2015.</li>
                    </ul>
                  </div>
                </div>
    

                {/* 국제특허출원 박스 */}
                <div className={styles.name2}>
                  <br></br>
                  <h1><span>International</span> Patent Application</h1><br></br>
                  <div className={styles.scrollBox2} data-lenis-prevent>
                    <ul>
                      <li>박현희 외, 무선 통신 시스템에서 디스커버리 윈도우 어웨이크 주기를 설정하는 방법 및 장치, PCT/KR2015/008520, 2015.08.14.</li>
                      <li>박현희 외, 파워 세이브 모드로 동작하는 nan 장치 간의 데이터 통신 방법 및 데이터 통신을 수행하는 파워 세이브 모드로 운용되는 nan 장치, PCT/KR2015/013469, 2015.12.09.</li>
                      <li>박현희 외, Nan 장치 간의 데이터 통신 방법 및 데이터 통신을 수행하는 nan 장치, PCT/KR2015/013467, 2015.12.09.</li>
                      <li>박현희 외, Wfd에서 보조 컨텐츠를 출력하는 방법 및 장치, PCT/KR2015/013464, 2015.12.09.</li>
                      <li>박현희 외, 무선랜 연결기법을 변경할 수 있는 플랫폼을 구비한 무선랜 스테이션, PCT/KR2016/000886, 2016.01.27.</li>
                      <li>박현희 외, 무선 통신 시스템에서 데이터 전송 방법 및 이를 이용한 장치, PCT/KR2016/001359, 2016.02.05.</li>
                      <li>박현희 외, 무선 통신 시스템에서 어플리케이션 서비스 플랫폼을 이용하여 서비스를 지원하는 방법 및 장치, PCT/KR2016/001624, 2016.02.17.</li>
                      <li>박현희 외, 무선 통신 시스템에서 데이터 전송을 위한 결합 방법 및 이를 이용한 기기, PCT/KR2016/001751, 2016.02.23.</li>
                      <li>박현희 외, Method and apparatus for transmitting data in wireless communication system, US15/553104, 2016.02.24.</li>
                      <li>박현희 외, 무선랜 시스템에서 페이징 수행 방법 및 이를 이용한 기기, PCT/KR2016/001874, 2016.02.25.</li>
                      <li>박현희 외, 무선랜 시스템에서 nan 단말의 위치 측위 방법 및 이를 이용한 기기, PCT/KR2016/002308, 2016.03.09.</li>
                      <li>박현희 외, Method and apparatus for transmitting data using multi-channels in wireless communication system, US15/556559, 2016.03.19.</li>
                      <li>박현희 외, Wfd에서 입력 문자 전환 방법 및 장치, PCT/KR2016/002459, 2016.03.11.</li>
                      <li>박현희 외, Method and device for performing service discovery in wireless communication system, US15/557379, 2016.03.16.</li>
                      <li>박현희 외, Method and device for executing service discovery in wireless communication system, US15/557983, 2016.03.17.</li>
                      <li>박현희 외, Method and apparatus for establishing application service platform session in wireless communication system, US15/559217, 2016.03.21.</li>
                      <li>박현희 외, 무선 통신 시스템에서 서비스 디스커버리를 수행하는 방법 및 장치, PCT/KR2016/003987, 2016.04.18.</li>
                      <li>박현희 외, 무선 통신 시스템에서 nan 프록시 서버에 등록을 수행하는 방법 및 장치, PCT/KR2016/004290, 2016.04.25.</li>
                      <li>박현희 외, Uibc를 통한 음성 명령어 처리 방법 및 장치, PCT/KR2016/004700, 2016.05.04.</li>
                      <li>박현희 외, 무선 통신 시스템에서 세션 핸드오버를 수행하는 방법 및 장치, PCT/KR2016/005361, 2016.05.20.</li>
                      <li>박현희 외, 무선 통신 시스템에서 nan 프록시 서버를 통해 프록시 서비스를 제공하는 방법 및 그 장치, PCT/KR2016/005689, 2016.05.30.</li>
                      <li>박현희 외, Method and device for nan terminal transitioning state in wireless communication system, US15/574234, 2016.06.07.</li>
                      <li>박현희 외, 무선 통신 시스템에서 nan 프록시 서버가 릴레이 디바이스 역할을 수행하는 방법 및 장치, PCT/KR2016/006325, 2016.06.15.</li>
                      <li>박현희 외, Method and apparatus for performing discovery using mdns in wireless communication system, US15/737046, 2016.06.24.</li>
                      <li>박현희 외, Wfd에서 배터리 상태를 리포트하는 방법 및 장치, PCT/KR2016/000139, 2016.01.07.</li>
                      <li>박현희 외, 무선랜 시스템에서 동작하는 스테이션의 랜덤 액세스, PCT/KR2016/007103, 2016.07.01.</li>
                      <li>박현희 외, Method for updating proxy service in wireless communication system and device, US15/743649, 2016.07.06.</li>
                      <li>박현희 외, Method and device for transmitting/receiving data in wireless communication system, US15/744395, 2016.07.13.</li>
                      <li>박현희 외, 무선 통신 시스템에서 데이터를 교환하는 방법 및 장치, PCT/KR2016/007730, 2016.07.15.</li>
                      <li>박현희 외, Method and device for exchanging frames for proxy service in wireless communication system, US15/745360, 2016.07.15.</li>
                      <li>박현희 외, Method and apparatus for performing discovery in wireless communication system, US15/746378, 2016.07.21.</li>
                      <li>박현희 외, Wfd에서 메타데이터를 전송하는 방법 및 장치, PCT/KR2016/008188, 2016.07.27.</li>
                      <li>박현희 외, Method and device for forming application service platform session in wireless communication system, US15/748587, 2016.07.28.</li>
                      <li>박현희 외, 무선랜 시스템에서 트리거 프레임을 전송하는 방법 및 이를 이용한 단말, PCT/KR2016/011833, 2016.10.20.</li>
                      <li>박현희 외, 무선랜 시스템에서 다중 사용자의 상향링크 프레임의 전송을 위한 방법, PCT/KR2016/012184, 2016.10.27.</li>
                      <li>박현희 외, Method and apparatus for changing operating mode in wireless local area network system, US15/410710, 2017.01.19.</li>
                      <li>박현희 외, Method for wireless local area network system and wireless device for wireless local area network system, US15/424,674, 2017.02.03.</li>
                      <li>박현희 외, Method and apparatus for changing operating mode in wireless local area network system, US15/424,629, 2017.02.03.</li>
                      <li>박현희 외, 무선랜 시스템에서 상향링크 전송을 수행하는 방법 및 이를 이용한 단말, PCT/KR2017/001794, 2017.02.17</li>
                      <li>박현희 외, 무선 랜 시스템에서 동작모드를 변경하는 방법 및 장치, PCT/KR2017/002303, 2017.03.03.</li>
                      <li>박현희 외, 무선랜 시스템에서 상향링크 프레임을 전송하는 방법 및 이를 이용한 무선 단말, PCT/KR2017/003054, 2017.03.22.</li>
                      <li>박현희 외, 무선 랜 시스템에서 동작모드를 변경하는 방법 및 장치, PCT/KR2017/003673, 2017.04.04.</li>
                      <li>박현희 외, 무선랜 시스템에서 랜덤액세스를 기반으로 전송된 프레임을 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/004104, 2017.04.17.</li>
                      <li>박현희 외, 무선랜 시스템에서 상향링크 전송을 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/004097 , 2017.04.17.</li>
                      <li>박현희 외, Method for accessing wireless medium in wireless local area network and wireless device using the same, US15/582,425, 2017.04.28.</li>
                      <li>박현희 외, Method and apparatus for changing operating mode in wireless local area network system, US15/587,267, 2017.05.04.</li>
                      <li>박현희 외, 무선랜 시스템에서 프레임을 전송하는 방법 및 이를 이용한 무선 단말, PCT/KR2017/005105 , 2017.05.17.</li>
                      <li>박현희 외, Method for transmission of uplink frame in wireless lan system, and wireless terminal using same, PCT/KR2017/005664, 2017.05.31.</li>
                      <li>박현희 외, 무선 랜 시스템에서 ppdu를 송신하기 위한 공간 재사용을 수행하는 방법 및 장치, PCT/KR2017/006837 , 2017.06.28.</li>
                      <li>박현희 외, 무선 랜 시스템에서 txop 파워 세이브 모드로 동작하는 방법 및 장치, PCT/KR2017/006836 , 2017.06.28.</li>
                      <li>박현희 외, 무선랜 시스템에서 전력 관리를 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/007291, 2017.07.07.</li>
                      <li>박현희 외, 무선랜 시스템에서 채널 액세스를 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/007320, 2017.07.07.</li>
                      <li>박현희 외, Method for transmitting uplink frame in wireless lan system and wireless device using the same, US15/671,678, 2017.08.08.</li>
                      <li>박현희 외, Method for transmitting frame in wireless local area network and wireless terminal using the same, US15/690,129, 2017.08.29.</li>
                      <li>박현희 외, Method for managing power of wireless terminal in wireless local area network and wireless terminal using the same, US15/699,971, 2017.09.08.</li>
                      <li>박현희 외, 무선랜 시스템에서 무선 단말의 전력을 관리하기 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/010257 , 2017.09.19.</li>
                      <li>박현희 외, 무선랜 시스템에서 프레임을 수신하는 방법 및 이를 이용한 무선 단말, PCT/KR2017/010277 , 2017.09.20.</li>
                      <li>박현희 외, 무선랜 시스템에서 전력 관리를 위한 방법 및 이를 이용한 액세스 포인트, PCT/KR2017/010437, 2017.09.22.</li>
                      <li>박현희 외, 무선랜 시스템에서 웨이크 업 수신기를 운용하는 방법 및 이를 위한 장치, PCT/KR2017/010536, 2017.09.25.</li>
                      <li>박현희 외, 웨이크업 수신기 기반 전력소모 감소 방법 및 장치, PCT/KR2017/010851, 2017.09.28.</li>
                      <li>박현희 외, 무선랜 시스템에서 웨이크 업 패킷을 송수신하는 방법 및 이를 위한 장치, PCT/KR2017/011297, 2017.10.13.</li>
                      <li>박현희 외, Method for performing power management in wireless lan system and wireless device using the same, US15/785,247, 2017.10.16.</li>
                      <li>박현희 외, 무선 랜 시스템에서 웨이크 업 라디오 패킷을 송신 또는 수신하는 방법 및 이를 위한 장치, PCT/KR2017/013604 , 2017.11.27.</li>
                      <li>박현희 외, 무선랜 시스템에서 패킷을 송신하는 방법 및 이를 이용한 무선 단말, PCT/KR2017/013627 , 2017.11.28.</li>
                      <li>박현희 외, 무선랜 시스템에서 동작모드에 대한 정보를 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/013815, 2017.11.29.</li>
                      <li>박현희 외, 무선랜 시스템에서 상향링크 프레임의 송신을 위한 방법 및 이를 이용한 무선 단말, PCT/KR2017/013818, 2017.11.29.</li>
                      <li>박현희 외, 무선랜 시스템에서 wur 단말을 위한 패킷을 송신하는 방법 및 이를 이용한 무선 단말, PCT/KR2017/013784 , 2017.11.29.</li>
                    </ul>
                  </div>
                </div>


                {/* 국제특허등록 박스 */}
                <div className={styles.name2}>
                  <br></br>
                  <h1><span>International</span> Patent Registration</h1><br></br>
                  <div className={styles.scrollBox2} data-lenis-prevent>
                    <ul>
                    <li>박현희 외, Method and apparatus for outputting supplementary content from WFD, US10034047 (2015.12.09)</li>
                      <li>박현희 외, Association method for data transmission in wireless communication system and device using same, US10045196 (2016.02.23)</li>
                      <li>박현희 외, Method for positioning NAN terminal in wireless LAN system, and device using same, US9949070 (2016.03.09)</li>
                      <li>박현희 외, Method and apparatus for performing registration to NAN proxy server in wireless communication system, US10091640 (2016.04.25)</li>
                      <li>박현희 외, Method for transmitting uplink frame in wireless LAN system and wireless device using the same, US9900871 (2017.08.17)</li>
                      <li>Hyunhee Park, Sangheon Pack, Chul-Hee Kang, Chulgyun Park, Jounsup Park, "Apparatus and method for establishing contention window in WiMedia wireless network (WiMedia 무선망에서 경쟁 윈도우를 수립하기 위한 장치와 방법)," US Patent, Application No. US 9042284B2 (2015.5.26)</li>
                    </ul>
                  </div>
                </div>


                {/* 국내특허등록 박스 */}
                <div className={styles.name2}>
                  <br></br>
                  <h1><span>Domestic</span> Patent Registration</h1><br></br>
                  <div className={styles.scrollBox2} data-lenis-prevent>
                    <ul>
                      <li>박현희, 김의직, VANET 환경에서의 라우팅 경로 설정 방법 및 장치(METHOD AND APPARTUS FOR SETTING UP ROUTING PATH IN VANET ENVIRONMENT), 출원번호: 1020150099726, 출원일자: 2015.07.14, 등록번호: 1016792750000, 등록일자: 2016.11.18.</li>
                      <li>박현희, 김의직, 빔포밍을 사용한 위치 기반 멀티플렉싱 전송 방법 및 장치(The method and apparatus for location-oriented multiplexing transmission using beamforming), 출원번호: 1020150111845, 출원일자: 2015.08.07, 등록번호: 1016792760000, 등록일자: 2016.11.18.</li>
                      <li>박현희, 김의직, mmWave 무선 네트워크에서 데이터를 송신 및 수신하는 방법(The method and apparatus for transmitting and receiving in mmWave wireless network), 출원번호: 1020150111841, 출원일자: 2015.08.07, 등록번호: 1016642800000, 등록일자: 2016.10.04.</li>
                      <li>박현희, 김의직, 박승현, 손태식, 피코넷 조정 장치와 이를 이용한 무선 통신 방법(PICONET COORDINATOR AND METHOD FOR WIRELESS COMMUNICATING USING THE SAME), 출원번호: 1020150056183, 출원일자: 2015.04.21, 등록번호: 1016384260000, 등록일자: 2016.07.05.</li>
                      <li>박현희, 김의직, 박승현, 무선 통신 방법 및 장치(METHOD AND APPARATUS FOR WIRELESS COMMUNICATION), 출원번호: 1020150056184, 출원일자: 2015.04.21, 등록번호: 1016205240000, 등록일자: 2016.05.04.</li>
                      <li>Hyunhee Park and Sangheon Pack, "Adaptive Antenna Beam Forming Method and Multicast Service Providing Method, Data Transmission Apparatus (적응적 안테나 빔 형성방법 및 멀티캐스트 서비스 제공방법, 데이터 전송 장치)," Korea Patent, 등록번호: 10-1392105-0000, 2014.04.28.</li>
                      <li>Hyunhee Park, Chulkun Park, Chul-Hee Kang, Sangheon Pack, and Junsang Park, "Apparatus and Method of Establishing Contention Window in WiMedia Wireless Network (와이미디어 무선 네트워크에서의 경쟁 윈도우 설정방법 및 장치)," 등록번호: 10-2010-0093883, September 2010.</li>
                      <li>Hyunhee Park, Chulkun Park, Chul-Hee Kang, Sangheon Pack, and Junsang Park, "Media Access Control Method in Wireless Network (무선 네트워크에서의 매체 접근 제어 기법)," 등록번호: 10-2009-0134373, December 2009.</li>
                      <li>Hyunhee Park, Chulkun Park, Chul-Hee Kang, Sangheon Pack, and Junsang Park, "Development of a deterministic access protocol in WiMedia wireless personal area networks," 등록번호: 10-2009-0134373, December 2009.</li>
                      <li>Hyunhee Park, Meejeong Kim, and Chul-Hee Kang, "Method for Detecting Traffic Anomaly using Fisher Linear Discriminant," 등록번호: 10-2009-0098199, October 2009.</li>
                    </ul>
                  </div>
                </div>
  



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Professor;