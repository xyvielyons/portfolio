import React from 'react'

const Services = () => {
  return (
    <div>
           <section className='bg-[#2C2C37] w-full scroll-mt-32 pb-[65rem] md:pb-[25rem] lg:pb-[10rem]' id='Services'>
            <div className="max-w-5xl mx-auto pt-10">
                  <div className="flex justify-center">
                    <h1 className='text-secondarycolor text-4xl font-semibold md:text-5xl'>Services</h1>
                  </div>


                  <div className="grid grid-cols-1 grid-flow-row gap-10 p-16 h-[26rem] text-white md:grid-cols-2 lg:grid-cols-3 ">
                    <div className='bg-primarycolor relative p-4'>
                      <div className='bg-white w-8 h-10 absolute z-10 top-0 left-8 opacity-50'></div>
                      <div className='w-12 h-12 rounded-full bg-secondarycolor absolute top-6 left-6 z-20 flex justify-center items-center'>
                            <svg width="30" height="30" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4491 0.5H1.54661C0.692577 0.5 0 1.19258 0 2.04661V11.3178C0 12.1718 0.692577 12.8644 1.54661 12.8644H5.4089V14.411H11.5911V12.8644H15.4534C16.3074 12.8644 16.9915 12.1718 16.9915 11.3178L17 2.04661C16.9958 1.18833 16.3032 0.5 15.4491 0.5ZM15.4491 11.3135H1.54661V2.04236H15.4534V11.3135H15.4491Z" fill="white"/>
                            </svg>
                      </div>

                      <h2 className='font-bold text-xl mt-20 pb-1'>Web Development and design</h2>
                      <ul role="list" className='marker:text-secondarycolor list-disc pl-5 space-y-2 text-white '>
                        <li>creation of responsive websites</li>
                        <li>complete frontend & backend integration</li>
                        <li>Designing websites </li>
                      </ul>

                    </div>

                    <div className='bg-primarycolor relative p-4'>
                      <div className='bg-white w-8 h-10 absolute z-10 top-0 left-8 opacity-50'></div>
                      <div className='w-12 h-12 rounded-full bg-secondarycolor absolute top-6 left-6 z-20 flex justify-center items-center'>
                          <svg width="30" height="30" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.8555 6.95712C14.8555 3.11071 11.3695 0 7.49563 0C3.62174 0 0.135742 3.11564 0.135742 6.95712C0.135742 8.48779 0.792165 9.72713 1.63756 10.9122H1.62264C2.16468 11.6528 2.68684 11.7861 3.1891 12.6403C3.92012 13.8846 4.0892 14.65 4.11903 15.3906C4.13893 15.8152 4.492 16.1461 4.9147 16.1461H5.35729C5.46669 16.1461 5.5562 16.0572 5.5562 15.9485V11.2825C5.5562 11.0356 5.49653 10.7986 5.38712 10.5764L4.34281 8.5026C4.16876 8.15697 4.42238 7.75208 4.81027 7.75208C5.00918 7.75208 5.19318 7.86564 5.27772 8.0434L6.53586 10.5813C6.64527 10.7986 6.69997 11.0356 6.69997 11.2775V15.9485C6.69997 16.0572 6.78948 16.1461 6.89888 16.1461H8.09238C8.20178 16.1461 8.2913 16.0572 8.2913 15.9485V11.2775C8.2913 11.0356 8.346 10.7986 8.4554 10.5813L9.71852 8.03352C9.80306 7.86565 9.97711 7.75702 10.1661 7.75702C10.539 7.75702 10.7827 8.14709 10.6136 8.47791L9.55441 10.5813C9.44501 10.8035 9.38533 11.0455 9.38533 11.2874V15.9485C9.38533 16.0572 9.47485 16.1461 9.58425 16.1461H10.0815C10.5042 16.1461 10.8523 15.8202 10.8772 15.4054C10.922 14.645 11.1109 13.8106 11.7922 12.6403C12.2945 11.7861 12.8166 11.6528 13.3587 10.9122H13.3537C14.1991 9.72713 14.8555 8.48779 14.8555 6.95712ZM6.60051 20.5405H8.39075C8.77367 20.5405 9.08696 20.2295 9.08696 19.8493C9.08696 19.4691 8.77367 19.158 8.39075 19.158H6.60051C6.2176 19.158 5.9043 19.4691 5.9043 19.8493C5.9043 20.2295 6.2176 20.5405 6.60051 20.5405ZM5.60593 18.368H9.38533C9.76825 18.368 10.0815 18.0569 10.0815 17.6767C10.0815 17.2965 9.76825 16.9854 9.38533 16.9854H5.60593C5.22302 16.9854 4.90973 17.2965 4.90973 17.6767C4.90973 18.0569 5.22302 18.368 5.60593 18.368Z" fill="white"/>
                          </svg>


                      </div>
                      <h2 className='font-bold text-xl mt-20 pb-1'>UX & UI design</h2>
                      <ul role="list" className='marker:text-secondarycolor list-disc pl-5 space-y-1 text-white '>
                        <li>UI needs research and analysis</li>
                        <li>Creation of efficient UI workflows</li>
                        <li>Wireframing & prototyping</li>
                        <li>User testing & interaction to improve overall perfomance</li>
                      </ul>

                    </div>

                    <div className='bg-primarycolor relative p-4'>
                      <div className='bg-white w-8 h-10 absolute z-10 top-0 left-8 opacity-50'></div>
                      <div className='w-12 h-12 rounded-full bg-secondarycolor absolute top-6 left-6 z-20 flex justify-center items-center'>
                          <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.8256 8.20815L9.82711 9.20668L8.82753 8.20709L11.2258 5.80878C11.4895 5.88302 11.7586 5.91932 12.0263 5.91929C12.7964 5.91923 13.5525 5.61834 14.1173 5.05348C14.9482 4.22261 15.208 2.97832 14.7791 1.88353L14.5345 1.25912L12.9648 2.82886L12.331 2.65901L12.1612 2.02518L13.7308 0.455467L13.1065 0.210915C12.0118 -0.217877 10.7675 0.0418555 9.93656 0.872735C9.17541 1.63388 8.89354 2.74193 9.18129 3.76418L6.78298 6.16249L3.56239 2.9419L4.41685 2.08748L1.76849 0L0 1.76846L2.08745 4.41685L2.94193 3.56239L6.16252 6.78298L4.04536 8.90015C2.94582 8.55571 1.74623 8.84347 0.918627 9.67107C0.330924 10.2588 0.00725378 11.0402 0.00725378 11.8713C0.00725378 12.7024 0.330924 13.4838 0.918627 14.0715C1.52522 14.6781 2.322 14.9814 3.11883 14.9814C3.91564 14.9814 4.71244 14.6781 5.31904 14.0715C6.14664 13.2439 6.43439 12.0443 6.08996 10.9447L8.20712 8.82758L9.20671 9.82717L8.20818 10.8257L11.8232 14.4407C12.1727 14.7903 12.6375 14.9828 13.1319 14.9828C13.6263 14.9828 14.0911 14.7903 14.4407 14.4407C15.1623 13.719 15.1623 12.5449 14.4407 11.8232L10.8256 8.20815ZM1.17181 1.83763L1.83766 1.17178L3.09809 2.16528L2.16531 3.09807L1.17181 1.83763ZM10.1965 3.9899L10.0918 3.72259C9.79014 2.95258 9.97274 2.07748 10.557 1.49317C10.9624 1.08783 11.5075 0.875923 12.0608 0.884639L11.1825 1.76296L11.6146 3.37543L13.2271 3.80753L14.1053 2.92924C14.1142 3.48234 13.9022 4.02766 13.4968 4.43299C12.9125 5.01724 12.0374 5.19991 11.2674 4.8982L11.0001 4.79352L8.20706 7.58657L7.40342 6.78293L10.1965 3.9899ZM5.06305 10.7306L5.17765 11.0026C5.53232 11.8442 5.34425 12.8053 4.69855 13.451C4.26294 13.8866 3.69097 14.1043 3.1188 14.1043C2.54678 14.1042 1.97455 13.8865 1.53906 13.451C1.11711 13.029 0.884698 12.468 0.884698 11.8712C0.884698 11.2745 1.11708 10.7135 1.53906 10.2915C1.96814 9.86245 2.53628 9.63547 3.11626 9.63547C3.4091 9.63547 3.70504 9.69339 3.98741 9.8124L4.25937 9.927L6.78295 7.40342L7.5866 8.20706L5.06305 10.7306ZM10.8256 9.44904L11.6293 10.2527L10.2527 11.6293L9.4491 10.8256L10.8256 9.44904ZM13.8202 13.8202C13.6364 14.0041 13.3919 14.1053 13.1319 14.1053C12.8719 14.1053 12.6275 14.0041 12.4437 13.8202L10.8732 12.2498L12.2498 10.8732L13.8202 12.4436C14.1997 12.8232 14.1997 13.4407 13.8202 13.8202Z" fill="white"/>
                          <path d="M3.11879 10.4255C2.73261 10.4255 2.36954 10.5759 2.0965 10.849C1.82343 11.1221 1.67303 11.4851 1.67303 11.8713C1.67303 12.2575 1.82343 12.6205 2.09647 12.8936C2.36954 13.1666 2.73261 13.317 3.11879 13.317C3.50496 13.317 3.868 13.1666 4.1411 12.8936C4.70476 12.3299 4.70476 11.4127 4.1411 10.849C3.86803 10.5759 3.50496 10.4255 3.11879 10.4255ZM3.52064 12.2731C3.4133 12.3804 3.27059 12.4395 3.11882 12.4395C2.96701 12.4395 2.82434 12.3804 2.71699 12.2731C2.60968 12.1658 2.55057 12.0231 2.55057 11.8713C2.55057 11.7195 2.60968 11.5768 2.71702 11.4695C2.82434 11.3621 2.96704 11.303 3.11885 11.303C3.27062 11.303 3.41333 11.3622 3.52067 11.4695C3.74217 11.691 3.74217 12.0516 3.52064 12.2731Z" fill="white"/>
                          </svg>

                      </div>
                      <h2 className='font-bold text-xl mt-20 pb-1'>Maintenance and Technical support</h2>
                      <ul role="list" className='marker:text-secondarycolor list-disc pl-5 space-y-1 text-white'>
                        <li>24/7 technical support</li>
                        <li>Regular website updates</li>
                        <li>Website performance tracking</li>
                        <li>Technical issue resolution & bug fixing</li>
                      </ul>

                    </div>
                    


                  </div>

            </div>
            
          </section>
    </div>
  )
}

export default Services